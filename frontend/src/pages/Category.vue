<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
import classifyData from "../data/classify.json"
const router = useRouter();
const route = useRoute();
const classifyItem = ref(null);
onBeforeMount(() => {
    const categorys = route.params.category.split("_");
    const firstCategory = classifyData.filter(el => el.key === categorys[0])[0]
    if (firstCategory && firstCategory.list && firstCategory.list.length) {
        const secondCategory = firstCategory.list.filter(el => el.key === categorys[1])[0];
        if (secondCategory) {
            classifyItem.value = secondCategory;
        } else {
            router.replace("/404")
        }
    } else {
        router.replace("/404")
    }
})
</script>

<template>
    <div class="category-container" v-if="classifyItem">
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
</template>

<style scoped lang="less">
.category-container {
    padding: @lm-common-offset-large;
    display: flex;
    margin-bottom:  @lm-common-offset;
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
</style>

