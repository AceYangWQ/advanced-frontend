<template>
    <panel title="金融头条" :class="$style.panel">
        <section :class="$style.content">
            <swiper :options="options">
                <swiper-slide>百万白条券免费送，速来领取！！ <em>></em></swiper-slide>
                <swiper-slide>签到领流量，1元500M！<em>></em></swiper-slide>
            </swiper>
        </section>
    </panel>
</template>

<script>
    import panel from "../core/panel.vue"
    import { swiper, swiperSlide } from "vue-awesome-swiper"

    export default {
        name: "",
        components: {
            panel,
            swiper,
            swiperSlide,
        },
        data() {
            return {
                options: {
                    autoplay: true,
                    loop: true,
                    direction: "vertical",
                },
            }
        },
    }
</script>

<style lang="scss">
    @import "../../css/element.scss";

    .swiper-container-vertical {
        height: 72px;

        .swiper-slide {
            font-family: PingFangSC-Medium;
            font-size: $font-size-28;
            color: $text-color-3;

            em {
                float: right;
                margin-right: 20px;
                color: $text-color-9;
            }
        }
    }
</style>

<style lang="scss" module>
    .panel {
        margin-top: 120px !important;

        > h4 {
            display: none;
        }

        .content {
            height: 72px;
            line-height: 72px;
            overflow: hidden;
            padding-left: 178px;
            background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left center no-repeat;
            background-size: 140px;
        }
    }
</style>
