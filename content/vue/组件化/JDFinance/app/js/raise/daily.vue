<template>
    <panel title="每日签到" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
            <p>不抢白不抢</p>
        </section>
    </panel>
</template>

<script>
    import panel from '../core/panel.vue';

    export default {
        name: "",
        components: {
            panel
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        .content {
            @include flex(row);
            position: relative;
            padding-bottom: 40px;
            img{
                width: 320px;
                height: 136px;
            }
            p{
                position: absolute;
                top: -112px;
                right: 20px;
                height: 112px;
                line-height: 112px;
                font-size: $font-size-28;
                color: $text-color-9;
            }
        }
    }
</style>
