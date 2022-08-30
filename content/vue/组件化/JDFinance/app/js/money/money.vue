<template>
    <panel title="理财推荐" :class="$style.panel">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.title">
                <dt>
                    {{item.title}}
                    <span>{{item.sub}}</span>
                </dt>
                <dd>{{item.rate}}</dd>
                <dd>{{item.text}}</dd>
            </dl>
        </section>
    </panel>
</template>

<script>
    import panel from "../core/panel.vue"

    export default {
        components: {
            panel,
        },
        data() {
            return {
                items: [
                    {
                        title: "定期理财",
                        sub: "理财首选",
                        rate: "5.60%",
                        text: "历史年化回报率",
                    },
                    {
                        title: "小白理财",
                        sub: "理财首选",
                        rate: "4.22%",
                        text: "7日年化收益率",
                    },
                    {
                        title: "月月盈",
                        sub: "养老保障",
                        rate: "5%",
                        text: "七日年化收益率",
                    },
                    {
                        title: "小白基金",
                        sub: "天天赚钱",
                        rate: "4.27%",
                        text: "7日年化收益率",
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        .content {
            @include flex(row);
            justify-content: space-around;
            box-sizing: border-box;

            &::after {
                content: " ";
                display: block;
                width: 100%;
                height: 0px;
                box-sizing: border-box;
                position: relative;
                top: -208px;
                border-bottom: 1px solid $border-color-e;
            }

            .item {
                position: relative;
                width: 50%;
                box-sizing: border-box;
                padding: 34px 16px;

                &::after {
                    content: " ";
                    width: 1px;
                    height: 136px;
                    display: block;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    border-right: 1px solid $border-color-e;
                }

                &:nth-child(2n) {
                    &:after {
                        display: none;
                    }
                }

                dt {
                    line-height: 42px;
                    color: $text-color-3;
                    font-size: $font-size-30;

                    span {
                        position: relative;
                        top: -3px;
                        display: inline-block;
                        margin-left: 4px;
                        padding: 4px 8px;
                        line-height: 1;
                        font-size: $font-size-22;
                        color: $text-color;
                        border: 1px solid $border-color;
                    }
                }

                dd {
                    &:nth-child(2) {
                        font-weight: 700;
                        font-size: $font-size-44;
                        height: 58px;
                        line-height: 58px;
                        color: $text-color;
                        @include no-wrap;
                    }

                    &:nth-child(3) {
                        font-size: $font-size-24;
                        height: 34px;
                        line-height: 34px;
                        color: $text-color-9;
                        @include no-wrap;
                    }
                }
            }
        }
    }
</style>
