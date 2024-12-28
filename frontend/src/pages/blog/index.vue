<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router'
import { loadJSON } from "../../core/https.js"
const router = useRouter();
const tagsData = ref([]);
const blogList = ref([]);
const flilterTags = ref([]);
const showBlogList = ref([]);
function filterTag(val) {
    const index = flilterTags.value.indexOf(val)
    if (index === -1) {
        flilterTags.value.push(val)
    } else {
        flilterTags.value.splice(index, 1)
    }
    if (flilterTags.value.length) {
        showBlogList.value = blogList.value.filter(el => {
            return flilterTags.value.some(tag => {
                return el.tag.indexOf(tag) !== -1
            })
        })
    } else {
        showBlogList.value = blogList.value
    }

}
function viewDetail(id, title) {
    router.push(`/blog/${id}/${title}`);
}

function getTags() {
    loadJSON('/json/blog_tag.json').then(res => {
        if (res !== null) {
            tagsData.value = res;
        }
    })
}
function getBlog() {
    loadJSON('/json/blog.json').then(res => {
        if (res !== null) {
            blogList.value = res;
            showBlogList.value = res;
        }
    })
}
onBeforeMount(() => {
    getTags()
    getBlog();
    flilterTags.value = [];
})
</script>

<template>
    <div class="blog-list-container">
        <div class="tag-header">
            <span class="tag" v-for="tag in tagsData" :key="tag" @click="() => { filterTag(tag) }">
                <a-tag :color="flilterTags.includes(tag) ? '#108ee9' : 'default'">{{ tag }}</a-tag>
            </span>

        </div>
        <div class="blog-list">
            <div class="item" v-for="item in showBlogList" :key="item">
                <div class="title">{{ item.title }}</div>
                <div class="desc">{{ item.desc }}</div>
                <div class="tag">
                    <a-tag class="tag" color="success" v-for="tag in item.tag.split(',')" :key="tag">{{ tag }}</a-tag>
                </div>
                <div class="operate">
                    <a-button type="link" @click="() => { viewDetail(item.id, item.title) }">查看</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.blog-list-container {
    padding: 0 @lm-common-offset @lm-common-offset @lm-common-offset;

    .tag-header {
        display: flex;
        margin: @lm-common-offset @lm-common-offset 0;
        flex-wrap: wrap;

        .tag {
            margin-bottom: @lm-common-offset-small;
        }
    }

    .blog-list {
        border-top: 1px solid @lm-border-color;
        padding: @lm-common-offset-small 0;

        .item {
            display: flex;
            flex-direction: row;
            border-bottom: 1px solid @lm-border-color;
            line-height: 32px;

            .title {
                flex: 3;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                color: @lm-color-title;
            }

            .desc {
                flex: 5;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                color: @lm-color-default;
            }

            .tag {
                flex: 2;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }

            .operate {
                width: 100px;
                text-align: center;
            }
        }
    }
}
</style>

