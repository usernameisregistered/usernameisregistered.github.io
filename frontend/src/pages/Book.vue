<script setup>
import { useRouter, useRoute } from 'vue-router'
import { loadJSON, loadHTML } from "../core/https.js"
import { ref, onBeforeMount } from 'vue'
const router = useRouter();
const route = useRoute();
const treeData = ref([])
const bookname = ref("");
const currentKey = ref([])
const fieldNames = { children: 'category', title: 'name', key: 'id' }
onBeforeMount(() => {
    getBook(route.params.id)
})
function getFirstPage(res) {
    let result;
    function find(children) {
        for (const item of children.category) {
            if (item.selectable) {
                result = item
            } else {
                !result && find(item)
            }
        }
    }
    for (const item of res) {
        find(item)
    }
    return result
}
function getBook(id) {
    loadJSON(`/json/${id}.json`).then(res => {
        if (res !== null) {
            treeData.value = res.categoryInfos
            bookname.value = res.name;
            const node = getFirstPage(JSON.parse(JSON.stringify(res.categoryInfos)))
            viewPage(node.id, { node })
        } else {
            outer.replace("/404")
        }
    })
}
function viewPage(id, { node }) {
    loadHTML(`${location.origin}${node.htmlPath}`).then(res => {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css";
        document.head.appendChild(link);
        document.getElementById("content").innerHTML = res
    })
}
</script>
<template>
    <a-layout class="book-container">
        <a-layout-sider width="360">
            <a-alert :message="bookname" type="info" />
            <a-directory-tree :tree-data="treeData" :autoExpandParent="true" v-model:selectedKeys="currentKey"
                :fieldNames="fieldNames" @select="viewPage"></a-directory-tree>
        </a-layout-sider>
        <a-layout>
            <a-layout-content>
                <div class="content" id="content"></div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<style scoped lang="less">
.book-container {
    height: calc(100vh - @lm-common-header-height);
    overflow: hidden auto;

    .ant-layout-sider {
        background: inherit !important;
        border-right: 1px solid @lm-border-color;
        padding: @lm-common-offset;
        ::v-deep .ant-alert{
            margin-bottom:  @lm-common-offset-small;
        }
        ::v-deep .ant-tree-list {
            .ant-tree-treenode {
                padding: 0;

                &:before {
                    bottom: 0;
                }
            }

            .ant-tree-switcher {
                line-height: 35px;
            }

            .ant-tree-node-content-wrapper {
                display: flex;
                line-height: 35px;
            }

            .ant-tree-title {
                max-width: calc(100% - 40px);
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }

            .ant-tree-iconEle {
                line-height: 35px;
            }
        }
    }

    .ant-layout {
        padding: @lm-common-offset;

        .content {
            overflow: hidden;
            height: 100%;
        }

        .markdown-container {
            max-height: 100%;
            overflow: auto;
        }
    }
}
</style>