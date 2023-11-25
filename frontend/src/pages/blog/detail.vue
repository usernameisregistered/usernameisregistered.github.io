<script setup>
import { nextTick, onBeforeMount, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { loadHTML } from "../../core/https.js"
const router = useRouter();
const route = useRoute();
const content = ref(null)
onBeforeMount(() => {
    loadHTML(`/blog/${route.params.id}.html`).then(res => {
        nextTick(() => {
            content.value.innerHTML = res;
        })
    })
})
</script>

<template>
    <div class="blog-warpper">
        <div class="breadcrumb-container">
            <a-breadcrumb>
                <a-breadcrumb-item href="javascript:void(0)"
                    @click="() => { router.replace('/blogList') }">随笔</a-breadcrumb-item>
                <a-breadcrumb-item>{{ route.params.title }}</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <div class="blog-container" ref="content">

        </div>

    </div>
</template>

<style scoped lang="less">
.blog-warpper {
    width: 1200px;
    margin: @lm-common-offset auto;

    .blog-container {
        margin: @lm-common-offset 0;
    }
}
</style>

