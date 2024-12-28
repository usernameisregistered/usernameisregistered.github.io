<script setup>
import { ref } from 'vue'
import classifyData from "../data/study.json"
const classifyList = ref(classifyData);
function gotoPage(url) {
    window.open(url)
}
</script>

<template>
    <div class="home-container">
        <div class="item" v-for="classifyItem in classifyList" :key="classifyItem.value">
            <div class="header" v-if="classifyItem.children.length">
                <div class="icon">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href='"#" + classifyItem.className'></use>
                    </svg>
                </div>
                <div class="title">{{ classifyItem.label }}</div>
            </div>
            <div class="children-container">
                <div class="children-item" v-for="item in classifyItem.children" :key="item.value"
                    @click="gotoPage(item.url)">
                    <div class="title">{{ item.name }}</div>
                    <div class="desc" :title="item.desc">{{ item.desc }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.home-container {
    padding: 0 @lm-common-offset @lm-common-offset @lm-common-offset;

    .item {
        .header {
            display: flex;
            font-size: @lm-font-size-h5;
            color: @lm-color-title;
            margin: @lm-common-offset-large 0;

            .icon {
                margin-right: @lm-common-offset;
                width: 20px;
                height: 18px;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
            }
        }

        .children-container {
            display: flex;
            flex-wrap: wrap;
            width: 100%;

            .children-item {
                margin-right: @lm-common-offset;
                width: calc((100% - @lm-common-offset - @lm-common-offset - @lm-common-offset - 8px) / 4);
                border: 1px solid @lm-border-color;
                background-color: white;
                margin-bottom: @lm-common-offset-small;
                padding: @lm-common-offset-small;
                box-sizing: border-box;
                cursor: pointer;

                &:nth-child(4n) {
                    margin-right: 0;
                }

                .title {
                    color: @lm-color-title;
                    line-height: 30px;

                }

                .desc {
                    line-height: 25px;
                    color: @lm-color-default;
                    display: -webkit-box;
                    line-clamp: 2;
                    -moz-box-orient: vertical;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: normal;
                }
            }
        }
    }
}
</style>

