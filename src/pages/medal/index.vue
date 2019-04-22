<template>
    <div class="container">
        <medal-list @showToast="show"></medal-list>
        <medal-list @showToast="show"></medal-list>
        
        <bottom-toast @handleCancel="onCancel" v-if="showToast">
            <div class="inject">
                <span class="inject-left">
                    <img class="avater" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eosdiajyuSvmwAhLsOuuOFJHPpP935Z9ETHKWZnKl2WibMdEwwhJfO0yF9eic1t9H3FqcjLwAdeIuhibg/132"/>
                    <span>工作室-苏果他</span>
                </span>
                <span>2019-01-01</span>
            </div>
            <div class="inject">
                <span class="inject-left">
                    <img class="avater" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eosdiajyuSvmwAhLsOuuOFJHPpP935Z9ETHKWZnKl2WibMdEwwhJfO0yF9eic1t9H3FqcjLwAdeIuhibg/132"/>
                    <span>工作室-苏果他</span>
                </span>
                <span>2019-01-01</span>
            </div>
            <div class="inject">
                <span class="inject-left">
                    <img class="avater" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eosdiajyuSvmwAhLsOuuOFJHPpP935Z9ETHKWZnKl2WibMdEwwhJfO0yF9eic1t9H3FqcjLwAdeIuhibg/132"/>
                    <span>工作室-苏果他</span>
                </span>
                <span>2019-01-01</span>
            </div>
            <div class="inject">
                <span class="inject-left">
                    <img class="avater" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eosdiajyuSvmwAhLsOuuOFJHPpP935Z9ETHKWZnKl2WibMdEwwhJfO0yF9eic1t9H3FqcjLwAdeIuhibg/132"/>
                    <span>工作室-苏果他</span>
                </span>
                <span>2019-01-01</span>
            </div>
            <div class="inject">
                <span class="inject-left">
                    <img class="avater" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eosdiajyuSvmwAhLsOuuOFJHPpP935Z9ETHKWZnKl2WibMdEwwhJfO0yF9eic1t9H3FqcjLwAdeIuhibg/132"/>
                    <span>工作室-苏果他</span>
                </span>
                <span>2019-01-01</span>
            </div>
            <div class="inject">
                <span class="inject-left">
                    <img class="avater" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eosdiajyuSvmwAhLsOuuOFJHPpP935Z9ETHKWZnKl2WibMdEwwhJfO0yF9eic1t9H3FqcjLwAdeIuhibg/132"/>
                    <span>工作室-苏果他</span>
                </span>
                <span>2019-01-01</span>
            </div>
            <div class="inject">
                <span class="inject-left">
                    <img class="avater" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eosdiajyuSvmwAhLsOuuOFJHPpP935Z9ETHKWZnKl2WibMdEwwhJfO0yF9eic1t9H3FqcjLwAdeIuhibg/132"/>
                    <span>工作室-苏果他</span>
                </span>
                <span>2019-01-01</span>
            </div>
        </bottom-toast>
    </div>
</template>
<script>
import medalList from '@/components/medal-list'
import bottomToast from "@/components/bottomToa";
export default {
    data() {
        return {
            showToast: false
        }
    },
    components: {
        medalList,
        bottomToast
    },
    methods: {
        onCancel() {
            this.showToast = false;
        },
        show() {
            this.showToast = true;
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    margin-top: -30rpx;
}
.inject{
    margin-bottom: 20rpx;
    color: #A5D3CD;
    @include flex_row;
    justify-content: space-between;
    align-items: center;
    &-left{
        @include flex_row;
        align-items: center;
        img{
            margin-right: 20rpx;
        }
    }
}
.avater{
    @include config_width_height(100rpx,100rpx);
    border-radius: 50%;
}
</style>
