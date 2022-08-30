<template>
    <panel title="理财精选" :class="$style.panel">
        <ul :class="$style.content">
            <li :class="$style.item">
                <img
                        src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76"
                        alt
                >
                <div>
                    <h4>月度理财</h4>
                    <p>预期年化收益率4.50%</p>
                </div>
                <em>去赚钱 ></em>
            </li>
            <li :class="$style.item">
                <img
                        src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76"
                        alt
                >
                <div>
                    <h4>季度理财</h4>
                    <p>历史年化回报率5.50%</p>
                </div>
                <em>去赚钱 ></em>
            </li>
            <li :class="$style.item">
                <img
                        src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76"
                        alt
                >
                <div>
                    <h4>一年理财</h4>
                    <p>历史年化回报率5.80%</p>
                </div>
                <em>去赚钱 ></em>
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
                    width: 344px;
                    line-height: 1.8;
                    font-size: $font-size-32;
                    color: $text-color-3;

                    p {
                        color: $text-color;
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
