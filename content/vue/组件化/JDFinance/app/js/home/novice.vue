<template>
    <panel title="新手特权" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <h4>
                    下载APP
                    <span :class="$style.red">送888元礼包</span>
                </h4>
                <p :class="$style.gray">新手专享</p>
                <img
                        src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100"
                        alt
                >
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img
                                src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200"
                                alt
                        >
                        <h4 :class="$style.red">领128元新手礼包</h4>
                        <p :class="$style.gray">立即开通</p>
                    </li>
                    <li>
                        <img
                                src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100"
                                alt
                        >
                        <h4>
                            打白条
                            <span :class="$style.red">享免息</span>
                        </h4>
                        <p :class="$style.gray">立即开通享豪礼</p>
                    </li>
                </ul>
            </div>
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
        > h4 {
            border-bottom: 1px solid $border-color-e;
        }

        .content {
            @include list(row);

            .item {
                width: 50%;
                box-sizing: border-box;

                &:first-child {
                    padding: 32px 20px;
                    text-align: center;
                    border-right: 1px solid $border-color-e;

                    img {
                        width: 132px;
                        height: 132px;
                        margin: 20px auto 0;
                    }
                }

                h4 {
                    font-size: $font-size-26;
                    line-height: 40px;
                }

                .red {
                    color: $text-color;
                }

                .gray {
                    color: $text-color-9;
                    font-size: $font-size-24;
                }

                p {
                    margin-top: 6px;
                    font-size: $font-size-24;
                }

                ul {
                    width: 100%;

                    li {
                        width: 100%;
                        height: 144px;
                        padding: 32px 28px;
                        box-sizing: border-box;

                        &:first-child {
                            border-bottom: 1px solid $border-color-e;
                        }

                        h4 {
                            @include no-wrap();
                            text-align: left;
                        }

                        img {
                            width: 80px;
                            height: 80px;
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>
