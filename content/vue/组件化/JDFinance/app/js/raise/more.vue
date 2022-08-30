<template>
    <panel title="更多福利" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330"
                 alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330"
                 alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330"
                 alt="">
            <div>专享福利 ></div>
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
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        .content {
            @include flex(row);
            position: relative;
            justify-content: space-around;
            padding-bottom: 60px;

            img {
                width: 33.33%;
                height: 280px;
            }

            div {
                position: absolute;
                right: 20px;
                top: -112px;
                font-size: $font-size-28;
                color: $text-color-9;
                height: 112px;
                line-height: 112px;
            }
        }
    }
</style>
