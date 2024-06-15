---
layout: page
head:
  - - script
    - src: ./static/scripts/iconfont.js
      type: text/javascript

---
<script setup>
import { ref } from 'vue'
const CategoryData = ref(dataSource);
</script>

<div class="book-layout-container">
        <div class="item" v-for="classifyItem in CategoryData" :key="classifyItem.value">
            <div class="header" v-if="classifyItem.children.length">
                <div class="icon">
                    <svg class="icon" aria-hidden="true">
                    <use :xlink:href='"#" + classifyItem.className'></use>
                </svg>
            </div>
            <div class="title">{{ classifyItem.label }}</div>
        </div>
        <div class="children-container">
            <a :href="`/${item.value}`" class="children-item" v-for="item in classifyItem.children"  :key="item.value">
                <div class="icon">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href='"#" + item.className'></use>
                    </svg>
                </div>
                <div class="info">
                    <div class="title" :title="item.label">{{ item.label }}</div>
                    <div class="desc" :title="item.description">{{ item.description }}</div>
                </div>
            </a>
        </div>
    </div>
</div>

<style lang="less">
.book-layout-container {
    padding: 0 16px 16px 16px;

    .item {
        .header {
            display: flex;
            font-size: 16px;
            color: #373e4a;
            margin: 24px 0;

            .icon {
                margin-right: 16px;
                width: 20px;
                height: 18px;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
            }

            .title {
                color: var(--vp-c-text-1);
            }
        }

        .children-container {
            display: flex;
            flex-wrap: wrap;
            width: 100%;

            .children-item {
                margin-right: 16px;
                width: calc((100% - 16px - 16px - 16px - 8px) / 4);
                display: flex;
                border: 1px solid var(--vp-c-border);
                background-color: var(--vp-c-bg);
                margin-bottom: 12px;
                padding: 12px;
                box-sizing: border-box;
                cursor: pointer;

                &:nth-child(4n) {
                    margin-right: 0;
                }

                .icon {
                    width: 40px;
                    height: 55px;
                    fill: currentColor;
                    overflow: hidden;
                }

                .info {
                    width: calc(100% - 12px - 40px);
                    margin-left: 12px;

                    .title {
                        font-size: 16px;
                        color: #373e4a;
                        line-height: 30px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        color: var(--vp-c-text-2);
                    }

                    .desc {
                        line-height: 25px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        color: var(--vp-c-text-3);
                    }
                }
            }
        }
    }
}
</style>