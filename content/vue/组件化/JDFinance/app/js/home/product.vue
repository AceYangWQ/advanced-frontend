<template>
    <panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.arrow">更多尖货 ></div>
            <slider :options="options" :items="items" cname="product-slider"/>
        </section>
    </panel>
</template>

<script>
    import panel from "../core/panel.vue"
    import slider from "../core/slider.vue"

    export default {
        components: {
            panel,
            slider,
        },
        data() {
            return {
                items: [
                    {
                        href: "home",
                        src:
                            "//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421",
                    },
                    {
                        href: "home",
                        src:
                            "//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421",
                    },
                    {
                        href: "home",
                        src:
                            "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
                    },
                    {
                        href: "home",
                        src:
                            "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421",
                    },
                ],
                options: {
                    slidesPerView: 2.3,
                    spaceBetween: 30,
                    freeMode: true,
                },
            }
        },
    }
</script>

<style lang="scss">
    .product-slider {
        .swiper-container {
            box-sizing: border-box;
            padding: 0 24px;

            .swiper-slide {
                a {
                    display: block;
                    width: 100%;

                    img {
                        width: 100%;
                        height: 314px;
                    }
                }
            }
        }
    }
</style>

<style lang="scss" module>
    @import "../../css/variables.scss";

    .panel {
        .content {
            padding-bottom: 40px;
            position: relative;

            .arrow {
                position: absolute;
                right: 20px;
                top: -70px;
                font-size: $font-size-28;
                color: $text-color-9;
            }
        }
    }
</style>
