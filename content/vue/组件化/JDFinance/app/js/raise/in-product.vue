<template>
    <panel title="in货推荐" :class="$style.panel">
        <section :class="$style.content">
            <div v-for="(item, index) in items" :key="item.catory" :class="$style.item">
                <img :src="item.catory" alt="">
                <section :class="$style.list">
                    <div v-for="(product, innerIndex) in item.list" :key="item.img" :class="$style.product">
                        <img :src="product.img" alt="">
                        <p :class="$style.title">{{product.title}}</p>
                        <p :class="$style.price"><em>{{ product.price }}</em>起</p>

                        <section>
                            <div :class="$style.wrapper">
                                <div :class="$style.inner" :style="{width:product.progress+'%'}"/>
                            </div>
                            <p>{{ product.progress }}%</p>
                        </section>
                        <label v-if="index === 0 && innerIndex === 0">精选</label>
                    </div>
                </section>
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
        data() {
            return {
                items: [{
                    catory: "//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200",
                    list: [{
                        img: "https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg",
                        title: "双响炮蓝牙音箱",
                        price: "29.00",
                        progress: 172,
                    }, {
                        img: "https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg",
                        title: "脑波相机",
                        price: "998.00",
                        progress: 259,
                    }],
                }, {
                    catory: "//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200",
                    list: [{
                        img: "https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg",
                        title: "智能电动牙刷",
                        price: "19.00",
                        progress: 481,
                    }, {
                        img: "https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg",
                        title: "烟草加热电子烟",
                        price: "258.00",
                        progress: 105,
                    }],
                }, {
                    catory: "//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200",
                    list: [{
                        img: "https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg",
                        title: "赖公高淮封藏老酒",
                        price: "99.00",
                        progress: 199,
                    }, {
                        img: "https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg",
                        title: "泗洪花雕醉蟹",
                        price: "58.00",
                        progress: 222,
                    }],
                }],
            }
        },
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        .content {
            @include flex;

            .item {
                margin-bottom: 40px;
                > img {
                    width: 100%;
                }

                .list {
                    @include flex(row);
                    .product {
                        position: relative;
                        width: 50%;
                        height: 396px;
                        box-sizing: border-box;
                        background: rgba(0,0,0,.02);
                        text-align: center;

                        img{
                            width: 180px;
                            height: 180px;
                            margin: 44px auto 20px;
                        }

                        .title{
                            font-family: PingFangSC-Medium;
                            font-size: $font-size-28;
                            color: #444;
                        }
                        .price{
                            font-family: PingFangSC-Semibold;
                            font-size: $font-size-20;
                            color: $text-color-9;
                            height: 48px;
                            line-height: 48px;
                            em{
                                font-size: $font-size-36;
                                color: $text-color;
                                margin-right: 4px;
                                &:before{
                                    content: "￥";
                                    font-size: $font-size-28;
                                }
                            }
                        }

                        section{
                            @include flex(row);
                            height: 30px;
                            line-height: 30px;
                            margin-top: 16px;
                            padding: 0 20px;
                            align-items: center;
                            justify-content: space-around;
                            .wrapper{
                                width: 144px;
                                height: 10px;
                                background: $bgColor-f5;
                                border-radius: 22px;
                                .inner{
                                    width: 40%;
                                    max-width: 100%;
                                    height: 10px;
                                    background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
                                    border-radius: 22px;
                                }
                            }
                            p{
                                font-size: $font-size-24;
                                color: $text-color-9;
                            }
                        }

                        label{
                            position: absolute;
                            left: 10px;
                            top: 0;
                            padding: 4px 8px;
                            font-size: $font-size-20;
                            color: $text-color;
                            font-family: PingFangSC-Medium;
                            text-align: center;
                            background-image: linear-gradient(-35deg,#C1C1C1 0,#ACACAC 100%);
                        }
                    }
                }
            }
        }
    }
</style>
