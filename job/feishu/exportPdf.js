const lark = require("@larksuiteoapi/node-sdk");
const {
  writeData,
  getWorkSpaceDirectory,
  existData,
  getData,
  log,
} = require("../common");
const path = require("path");
const fs = require("fs");
const certificate = getData("certificate.json");
const client = new lark.Client({
  appId: certificate.appId,
  appSecret: certificate.appSecret,
});

module.exports = async function exportPdf() {
  const feishuDir = path.join(getWorkSpaceDirectory(), "/data/feishu");
  if (fs.existsSync(feishuDir)) {
    fs.rmSync(feishuDir, { recursive: true });
  }
  fs.mkdirSync(feishuDir);
  log(`开始查询需要导出的文档信息来自于知识空间${certificate.spaceId}`);
  await getSpecificWiki(certificate.spaceId);
  log(`开始创建异步任务《创建导出文档为pdf》`);
  await createTask();
  log(`开始下载`);
  await downloadPdf();
};

/**
 * 查询需要导出的文档信息来自于知识空间的某个节点的
 * @param {string} spaceId
 * @returns
 */
async function getSpecificWiki(spaceId) {
  const name = `feishu/export.json`;
  if (existData(name)) {
    return getData(name);
  } else {
    const result = await client.wiki.v2.spaceNode.list(
      {
        path: {
          space_id: spaceId,
        },
        params: {
          page_size: 50,
        },
      },
      lark.withUserAccessToken(certificate.userAccessToken)
    );
    let list = [];
    let item = result.data.items.shift();
    while (item) {
      list.push({
        spaceId: item.space_id,
        title: item.title,
        doc_id: item.obj_token,
        level: 1,
        pid: item.node_token,
        isCreated: false,
      });
      if (item.has_child) {
        await sleep(2);
        log("开始请求子节点：" + item.title);
        const result2 = await client.wiki.v2.spaceNode.list(
          {
            path: {
              space_id: item.space_id,
            },
            params: {
              page_size: 50,
              parent_node_token: item.node_token,
            },
          },
          lark.withUserAccessToken(certificate.userAccessToken)
        );
        let item2 = result2.data.items.shift();
        while (item2) {
          if (list.findIndex((el) => el.doc_id === item2.obj_token) === -1) {
            list.push({
              spaceId: item2.space_id,
              title: item2.title,
              doc_id: item2.obj_token,
              level: 2,
              pid: item2.node_token,
              isCreated: false,
            });
          }
          item2 = result2.data.items.shift();
        }
      }
      item = result.data.items.shift();
    }
    writeData(name, list);
  }
}

async function createTask() {
  const name = `feishu/export.json`;
  const list = getData(name);
  for (let i = 0, length = list.length; i < length; i++) {
    let item = list[i];
    if (!item.ticket) {
      log(`任务创建${item.doc_id}`);
      const result = await client.drive.v1.exportTask.create(
        {
          data: {
            file_extension: "pdf",
            token: item.doc_id,
            type: "docx",
          },
        },
        lark.withUserAccessToken(certificate.userAccessToken)
      );
      if (result.msg === "success") {
        item.ticket = result.data.ticket;
      } else {
        item.ticket = "";
        log(`任务创建失败${item.doc_id}`);
      }
      list.splice(i, 1, item);
      await sleep(2);
    }
  }
  writeData(name, list);
}

async function downloadPdf() {
  const name = `feishu/export.json`;
  let list = getData(name);
  while (list.length) {
    await sleep(30);
    log(`间隔性查询导出任务是否已经完成`);
    await _downloadPdf(list, name);
    list = getData(name);
  }
}

async function _downloadPdf(list, name) {
  let item = list.shift();
  const tempList = [];
  const feishuDir = path.join(getWorkSpaceDirectory(), "/data/feishu");
  while (item) {
    const result = await client.drive.v1.exportTask.get(
      {
        path: {
          ticket: item.ticket,
        },
        params: {
          token: item.doc_id,
        },
      },
      lark.withUserAccessToken(certificate.userAccessToken)
    );
    if (result.data.result.job_status === 0) {
      const data = await client.drive.v1.exportTask.download(
        {
          path: {
            file_token: result.data.result.file_token,
          },
        },
        lark.withUserAccessToken(certificate.userAccessToken)
      );
      await data.writeFile(
        `${feishuDir}/${result.data.result.file_name}.${result.data.result.file_extension}`
      );
    } else {
      tempList.push(item);
    }
    item = list.shift();
  }
  tempList.forEach((el) => {
    list.push(el);
  });
  writeData(name, list);
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      log("睡眠" + time + "s");
      resolve();
    }, time * 1000);
  });
}
