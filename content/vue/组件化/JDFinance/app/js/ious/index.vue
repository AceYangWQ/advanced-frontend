<template>
    <div>
        <public-header></public-header>
        <ious-slider></ious-slider>
        <welfare></welfare>
        <service></service>
        <public-footer></public-footer>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import publicHeader from "../public/header.vue"
    import iousSlider from "./ious-slider.vue"
    import welfare from "./welfare.vue"
    import service from "./service.vue"
    import publicFooter from "../public/footer.vue"
    import tabbar from "../public/tabbar.vue"

    export default {
        components: {
            publicHeader,
            iousSlider,
            welfare,
            service,
            publicFooter,
            tabbar,
        },
    }
</script>

<style lang="scss">
</style>
