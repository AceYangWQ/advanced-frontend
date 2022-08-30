<template>
    <panel title="下载APP" :class="$style.panel">
        <section :class="$style.content">
            <div></div>
            <p>立即下载</p>
            <span>copyright</span>
        </section>
    </panel>
</template>

<script>
    import panel from "../core/panel.vue"

    export default {
        name: "",
        components: {
            panel,
        },
    }
</script>


<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        margin: 0 !important;

        > h4 {
            display: none;
        }

        .content {
            @include flex;
            width: 100%;
            height: 1136px;
            justify-content: center;
            align-items: center;

            > div {
                background: url("//img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png") center center no-repeat;
                width: 600px;
                height: 800px;
                background-size: 100% auto;
                margin-top: -400px;
            }

            > p {
                @include btn($font-size-32, $text-color-f, $bgColor, 0, 10px);
                height: 80px;
                line-height: 80px;
                width: 470px;
                background-image: linear-gradient(270deg, #F55C33 0, #EE2D1B 75%);
                box-shadow: 0 12px 32px 0 rgba(255, 159, 135, .6);
                position: fixed;
                bottom: 130px;
            }

            span {
                position: fixed;
                bottom: 16px;
                font-size: $font-size-24;
                color: $text-color-9;
            }
        }
    }
</style>
