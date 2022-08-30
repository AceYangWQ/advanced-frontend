<template>
    <div>
        <public-header></public-header>
        <home-slider></home-slider>
        <novice></novice>
        <borrow></borrow>
        <money></money>
        <product></product>
        <life></life>
        <public-footer></public-footer>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import publicHeader from "../public/header.vue"
    import homeSlider from "./home-slider.vue"
    import novice from "./novice.vue"
    import borrow from "./borrow.vue"
    import money from "./money.vue"
    import product from "./product.vue"
    import life from "./life.vue"
    import publicFooter from "../public/footer.vue"
    import tabbar from "../public/tabbar.vue"

    export default {
        components: {
            publicHeader,
            homeSlider,
            novice,
            borrow,
            money,
            product,
            life,
            publicFooter,
            tabbar,
        },
    }
</script>

<style lang="scss">
</style>
