<template>
    <div :class="$style.header">
    <span :class="$style.left">
      <em>注册</em>&nbsp;|&nbsp;
      <em>登录</em>
    </span>
        <btn :class="$style['btn-download']">APP下载</btn>
    </div>
</template>

<script>
    import btn from "../core/btn.vue"

    export default {
        name: "",
        components: {
            btn,
        },
    }
</script>

<style lang="scss" module>
    @import "../../css/variables.scss";

    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        height: 100px;
        line-height: 100px;
        font-size: $font-size-32;
        color: $text-color-6;
        background: $bgColor-f url("//m.jr.jd.com/spe/qyy/main/images/jr-logo.png") center center no-repeat;
        background-size: auto 50%;

        .left {
            height: 30px;
            line-height: 30px;
            margin: 18px 0 0 18px;
            font-size: $font-size-28;
        }

        .btn-download {
            float: right;
            height: 56px;
            line-height: 56px;
            min-width: 120px;
            margin: 28px 24px 0 0;
            padding: 0;
            border-width: 0;
            border-radius: 4px;
            font-size: $font-size-24;
        }
    }
</style>
