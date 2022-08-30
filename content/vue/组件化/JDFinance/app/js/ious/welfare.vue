<template>
    <panel title="白条福利" :class="$style.panel">
        <ul :class="$style.content">
            <li :class="$style.item">
                <img
                        src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120"
                        alt
                >
                <div>
                    <h4>开通白条</h4>
                    <p>送188元礼包</p>
                </div>
                <em>立即开通 ></em>
            </li>
            <li :class="$style.item">
                <img
                        src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120"
                        alt
                >
                <div>
                    <h4>白条闪付</h4>
                    <p>新手享158元礼包</p>
                </div>
                <em>随机立减 ></em>
            </li>
            <li :class="$style.item">
                <img
                        src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120"
                        alt
                >
                <div>
                    <h4>白条提额</h4>
                    <p>金融app专享提额礼包</p>
                </div>
                <em>去提额 ></em>
            </li>
        </ul>
    </panel>
</template>

<script>
    import panel from "../core/panel.vue"

    export default {
        components: {
            panel,
        },
        data() {
            return {}
        },
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        > h4 {
            border-bottom: 1px solid $border-color-d;
        }

        .content {
            .item {
                @include flex(row);
                position: relative;
                align-items: center;
                height: 140px;

                &::after {
                    content: " ";
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 0;
                    margin-left: 150px;
                    box-sizing: border-box;
                    border-bottom: 1px solid $border-color-d;
                }

                &:last-child::after {
                    border-color: transparent;
                }

                > img {
                    display: inline-block;
                    width: 88px;
                    height: 88px;
                    margin: 0 32px;
                }

                > div {
                    width: 304px;
                    line-height: 1.8;
                    font-size: $font-size-32;
                    color: $text-color-3;

                    p {
                        color: $text-color-9;
                        font-size: $font-size-24;
                        line-height: 1.1;
                        @include no-wrap;
                    }
                }

                > em {
                    color: $text-color-orange;
                    font-size: $font-size-28;
                }
            }
        }
    }
</style>
