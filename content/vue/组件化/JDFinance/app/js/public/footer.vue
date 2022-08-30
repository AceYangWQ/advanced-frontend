<template>
    <panel title="公司简介" :class="[$style.panel, cname]">
        <ul :class="$style.content">
            <li>
                <img
                        src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252"
                        alt
                >
            </li>
            <li>
                <div>
                    <img
                            src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108"
                            alt
                    >
                    <p>客户端</p>
                </div>
                <div>
                    <img
                            src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108"
                            alt
                    >
                    <p>触屏版</p>
                </div>
                <div>
                    <img
                            src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108"
                            alt
                    >
                    <p>电脑版</p>
                </div>
            </li>
            <li>Copyright © 2004-2017 京东JD.com 版权所有</li>
            <li>投资有风险，购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
    </panel>
</template>

<script>
    import panel from "../core/panel.vue"

    export default {
        components: {
            panel,
        },
        props: {
            cname: {
                type: String,
                default: "",
            },
        },
        data() {
            return {}
        },
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        margin-bottom: 100px;

        > h4 {
            display: none;
        }

        .content {
            background: $bgColor-f5;

            li {
                text-align: center;
                color: $text-color-9;
                font-size: $font-size-24;

                > img {
                    width: 100%;
                }

                &:nth-child(2) {
                    display: flex;
                    height: 186px;

                    > div {
                        flex: 1;
                        padding-top: 30px;
                        box-sizing: border-box;
                        text-align: center;

                        img {
                            width: 90px;
                            height: 90px;
                        }

                        p {
                            margin-top: 12px;
                            font-size: $font-size-26;
                            text-align: center;
                            color: $text-color-9;
                            @include no-wrap;
                        }
                    }
                }

                &:nth-child(n + 3) {
                    padding: 24px 0;
                    height: 38px;
                    line-height: 38px;
                    border-top: 1px solid $border-color-d;
                }
            }
        }
    }
</style>
