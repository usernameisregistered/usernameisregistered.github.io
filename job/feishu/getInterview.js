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

module.exports= async function getInterview() {
  const feishuDir = path.join(getWorkSpaceDirectory(), "/data/feishu");
  if (fs.existsSync(feishuDir)) {
    fs.rmSync(feishuDir, {recursive: true})
  } 
  fs.mkdirSync(feishuDir);
  // const wikiList = await getWikiList();
  await getSpecificWiki(certificate.spaceId);
  
}
/**
 * 获取所有的知识库信息
 * @returns
 */
async function getWikiList() {
  const name = "feishu/wikiList.json";
  if (existData(name)) {
    return getData(name);
  } else {
    const result = await client.wiki.v2.space.list(
      {
        params: {
          page_size: 20,
          lang: "en",
        },
      },
      lark.withUserAccessToken(certificate.withUserAccessToken)
    );
    writeData(name, result.data.items);
    return result.data.items;
  }
}
/**
 * 获取节点下的文档标题信息
 * @param {string} spaceId
 * @returns
 */
async function getSpecificWiki(spaceId) {
  const name = `feishu/${spaceId}.json`;
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
    while(item){
      list.push({ spaceId: item.space_id, title: item.title, doc_id: item.obj_token, level: 1 , pid: item.node_token})
      if(item.has_child){
        await sleep(2);
        log("开始请求子节点：" + item.title)
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
        while(item2){
          if(list.findIndex(el => el.doc_id === item2.obj_token) === -1){
            list.push({ spaceId: item2.space_id, title: item2.title, doc_id: item2.obj_token, level: 2, pid: item2.node_token})
          }
          item2 = result2.data.items.shift();
        }
      }
      item = result.data.items.shift();
    }
    let tempDoc = list.shift();
    let docList = [];
    while (tempDoc) {
      await sleep(2)
      log("开始请求文档详情：" + tempDoc.title + tempDoc.doc_id)
      await getSpecificDocs(tempDoc.doc_id);
      tempDoc.length = getData(`feishu/${tempDoc.doc_id}.json`).length;
      docList.push(tempDoc);
      tempDoc = list.shift();
    }
    writeData(name, docList);
  }
}

/**
 * 获取文档信息
 * @param {string} docId
 * @returns
 */
async function getSpecificDocs(docId) {
  const name = `feishu/${docId}.json`;
  let list = [];
  for await (const item of await client.docx.v1.documentBlock.listWithIterator(
    {
      path: {
        document_id: docId,
      },
      params: {
        page_size: 500,
        document_revision_id: -1,
      },
    },
    lark.withUserAccessToken(certificate.withUserAccessToken)
  )) {
    item.items
      .filter((el) => !!el.heading1)
      .forEach((el) => {
        el.heading1.elements
          .filter((item) => !!item.text_run)
          .forEach((item) => {
            list.push(item.text_run.content.trim());
          });
      });
  }
  writeData(name, list);
}

function sleep(time){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      log("睡眠" + time + "s")
      resolve();
    }, time * 1000)
  })
}
