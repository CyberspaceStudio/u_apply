<template>
<div class="container">
    <div class='mas-layer'></div>
    <div class='list-wrap'>
        <li class='list-item' v-for='(list,index) in departLists' :key='index' @click='changeList(list)'>{{list}}</li>
    </div>
    <div class='cancel-btn' @click='hiddenToast'>取消</div>
</div>
</template>

<script>
export default {
    props: ['departLists'],
    data() {
        return {

        }
    },
    methods: {
        hiddenToast() {
            this.$emit('hidden')
            wx.showTabBar({})
        },
        changeList(list) {
            this.$emit('update', list);
            this.$emit('hidden');
            wx.showTabBar({})
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    position: relative;
    @include flex_column;
    z-index: 1000;
    font-size: cr(12);

    .mas-layer {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 998;
    }

    .list-wrap {
        width: 100%;
        max-height: cr(300);
        overflow: scroll;
        @include flex_column;
        align-items: center;
        text-align: center;
        color: #3D7751;
        margin-bottom: cr(30);
        z-index: 999;
        background-color: #EFF2F5;

        .list-item {
            width: 100%;
            height: cr(30);
            line-height: cr(30);
            background-color: white;
            margin-top: cr(2);
            margin-bottom: cr(2);
        }
    }

    .cancel-btn {
        width: 100%;
        height: cr(30);
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
        line-height: cr(30);
        background-color: white;
        z-index: 999;
    }
}
</style>
