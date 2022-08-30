<template>
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.src">
                <router-link :to="{name: item.href}">
                    <img :src="item.src" alt>
                </router-link>
            </swiper-slide>
            <div v-if="options.pagination" slot="pagination" class="swiper-pagination"></div>
        </swiper>
    </section>
</template>

<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper"

    export default {
        name: "",
        components: {
            swiper,
            swiperSlide,
        },
        props: {
            cname: {
                type: String,
                default: "",
            },
            options: {
                type: Object,
                default: () => ({
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                    notNextTick: false,
                }),
            },
            items: {
                type: Array,
                default: () => [],
            },
        },
    }
</script>

<style lang="scss">
    @import "~swiper/dist/css/swiper.css";
</style>
