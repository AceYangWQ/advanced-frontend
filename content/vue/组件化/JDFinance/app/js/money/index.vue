<template>
    <div>
        <public-header></public-header>
        <money-slider></money-slider>
        <ada></ada>
        <money></money>
        <adb></adb>
        <finance></finance>
        <adc></adc>
        <public-footer cname="m-footer"></public-footer>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import publicHeader from "../public/header.vue"
    import moneySlider from "./money-slider.vue"
    import ada from "./ada.vue"
    import money from "./money.vue"
    import adb from "./adb.vue"
    import finance from "./finance.vue"
    import adc from "./adc.vue"
    import publicFooter from "../public/footer.vue"
    import tabbar from "../public/tabbar.vue"

    export default {
        components: {
            publicHeader,
            moneySlider,
            ada,
            money,
            adb,
            finance,
            adc,
            publicFooter,
            tabbar,
        },
    }
</script>

<style lang="scss">
    .m-footer {
        margin-top: 0 !important;

        ul {
            li:first-child {
                display: none;
            }
        }
    }
</style>
