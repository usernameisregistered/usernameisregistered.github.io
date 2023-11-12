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
    const firstCategory = classifyData.filter(el => el.key === categorys[0])[0]
    if (firstCategory && firstCategory.list && firstCategory.list.length) {
        const secondCategory = firstCategory.list.filter(el => el.key === categorys[1])[0];
        if (secondCategory) {
            classifyItem.value = secondCategory;
            getBook(secondCategory.key);
        } else {
            router.replace("/404")
        }
    } else {
        router.replace("/404")
    }
})

function getBook(category) {
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
                <div class="title" :title="classifyItem.title">{{ classifyItem.title }}</div>
                <div class="desc" :title="classifyItem.description">{{ classifyItem.description }}</div>
            </div>
        </div>
        <div class="category-list" v-if="books.length !== 0">
            <div class="book-item" v-for="book in books" :key="book.id" @click="gotoPage(book.id)">
                <div class="name">{{ book.name }}</div>
                <div class="desc">{{ book.description }}</div>
            </div>
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

        .book-item {
            cursor: pointer;
            width: calc(20% - 40px);
            border: 1px solid @lm-border-color;
            padding: @lm-common-offset-small;
            background: white;
            margin-right: @lm-common-offset;
            margin-bottom: @lm-common-offset;
            border-radius: 2px;

            &:nth-child(5n) {
                margin-right: 0;
            }

            .name {
                font-size: @lm-font-size-h3;
                line-height: 40px;
                color: @lm-color-title
            }

            .desc {
                color: @lm-color-default;
                font-size: @lm-font-size-h5;
                line-height: 25px;
                height: 150px;
            }
        }
    }
}
</style>

