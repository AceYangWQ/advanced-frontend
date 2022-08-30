<template>
    <div>
        <public-header></public-header>
        <raise-slider></raise-slider>
        <daily></daily>
        <in-product></in-product>
        <more></more>
        <public-footer cname="m-footer"></public-footer>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import publicHeader from "../public/header.vue"
    import raiseSlider from "./raise-slider.vue"
    import daily from "./daily.vue"
    import inProduct from "./in-product.vue"
    import more from './more.vue'
    import publicFooter from "../public/footer.vue"
    import tabbar from "../public/tabbar.vue"

    export default {
        components: {
            publicHeader,
            raiseSlider,
            daily,
            more,
            inProduct,
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
