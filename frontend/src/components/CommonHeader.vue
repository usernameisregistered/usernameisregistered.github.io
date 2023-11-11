<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
function gotoHome() {
    router.replace("/")
}
</script>

<template>
    <div class="common-header-container">
        <div class="logo" @click="gotoHome"> </div>
        <div class="title" @click="gotoHome">路人甲的进阶之路</div>
        <a class="contact" href="mailto:liming_longxi@163.com">联系本人</a>
    </div>
</template>

<style scoped lang="less">
.common-header-container {
    height: @lm-common-header-height;
    background-color: white;
    border: 1px solid @lm-border-color;
    display: flex;

    .logo {
        width: 40px;
        height: 40px;
        background: url("../assets/images/logo.svg") no-repeat;
        background-size: cover;
        margin-top: calc((@lm-common-header-height - 40px) / 2);
        margin-left: @lm-common-offset;
        cursor: pointer;
    }

    .title {
        line-height: @lm-common-header-height;
        margin-left: @lm-common-offset;
        color: @lm-color-title;
        font-size: @lm-font-size-h4;
        cursor: pointer;
    }

    .contact {
        text-decoration: none;
        line-height: @lm-common-header-height;
        margin-left: @lm-common-offset;
        color: @lm-color-title;
        font-size: @lm-font-size-h4;
    }
}
</style>

