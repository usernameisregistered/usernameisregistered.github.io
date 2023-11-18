<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
import classifyData from "../data/classify.json"
import { loadJSON } from "../core/https.js"
import NoData from "../components/NoData.vue"
const router = useRouter();
const route = useRoute();
const classifyItem = ref(null);
const books = ref([])
onBeforeMount(() => {
    const categorys = route.params.category.split("_");
    const firstCategory = classifyData.filter(el => el.value === categorys[0])[0]
    if (firstCategory && firstCategory.children && firstCategory.children.length) {
        const secondCategory = firstCategory.children.filter(el => el.value === categorys[1])[0];
        if (secondCategory) {
            classifyItem.value = secondCategory;
            getBooks(secondCategory.value);
        } else {
            router.replace("/404")
        }
    } else {
        router.replace("/404")
    }
})

function getBooks(category) {
    loadJSON(`/json/${category}.json`).then(res => {
        if (res !== null) {
            books.value = res;
        }
    })
}

function gotoPage(id) {
    router.push(`/book/${id}`)
}
</script>

<template>
    <div class="category-container" v-if="classifyItem">
        <div class="category-header">
            <div class="icon">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href='"#" + classifyItem.className'></use>
                </svg>
            </div>
            <div class="info">
                <div class="title" :title="classifyItem.label">{{ classifyItem.label }}</div>
                <div class="desc" :title="classifyItem.description">{{ classifyItem.description }}</div>
            </div>
        </div>
        <div class="category-list" v-if="books.length !== 0">
            <a-card :bordered="false" v-for="book in books" :key="book.id" @click="gotoPage(book.id)">
                <template #title>
                    <div class="name" :title="book.name">{{ book.name }}</div>
                </template>
                <p class="desc" :title="book.description">{{ book.description }}</p>
            </a-card>
        </div>
        <div v-else>
            <NoData></NoData>
        </div>
    </div>
</template>

<style scoped lang="less">
.category-container {
    .category-header {
        padding: @lm-common-offset-large;
        display: flex;
        margin: @lm-common-offset-large auto;
        width: 1200px;
        border-bottom: 1px solid @lm-border-color;

        .icon {
            width: 260px;
            height: 170px;
            fill: currentColor;
            overflow: hidden;
        }

        .info {
            flex: 1;
            margin-left: @lm-common-offset-small;

            .title {
                font-size: @lm-font-size-h3;
                color: @lm-color-title;
                line-height: 65px;
            }

            .desc {
                font-size: @lm-font-size-h4;
                line-height: 35px;
            }
        }
    }

    .category-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin: @lm-common-offset-large auto;
        width: 1200px;

        .ant-card {
            cursor: pointer;
            width: calc(25% - 12px);
            margin-right: @lm-common-offset;
            margin-bottom: @lm-common-offset;
            border-radius: 2px;

            &:nth-child(4n) {
                margin-right: 0;
            }

            .name{
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                color: @lm-color-title;
            }

            .desc{
                line-height: 28px;
                color: @lm-color-default;
                
            }

        }
    }
}
</style>

