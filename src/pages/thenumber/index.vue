<template>
    <div class="statistics">
        <img class="statistics-right" v-if="imgUrl" :src="imgUrl+'5.png'"/>
        <div class="statistics-title">
            <div class="statistics-title-list">已有123人参加面试</div>
            <div class="statistics-title-list">已有123人参加面试</div>
        </div>
        <div class="statistics-table">
            <div class="statistics-table-title">
                <div>部门</div>
                <div>已面试</div>
                <div>未面试</div>
            </div>
            <div class="statistics-table-area">
                <div class="statistics-table-area-list">
                    <div>活动部</div>
                    <div>230</div>
                    <div>230</div>
                </div>
                <div class="statistics-table-area-list">
                    <div>活动部</div>
                    <div>230</div>
                    <div>230</div>
                </div>
                <div class="statistics-table-area-list">
                    <div>活动部</div>
                    <div>230</div>
                    <div>230</div>
                </div>
                <div class="statistics-table-area-list">
                    <div>活动部</div>
                    <div>230</div>
                    <div>230</div>
                </div>
                <div class="statistics-table-area-list">
                    <div>活动部</div>
                    <div>230</div>
                    <div>230</div>
                </div>
                <div class="statistics-table-area-list">
                    <div>活动部</div>
                    <div>230</div>
                    <div>230</div>
                </div>
                <div class="statistics-table-area-list">
                    <div>活动部</div>
                    <div>230</div>
                    <div>230</div>
                </div>
                <div class="statistics-table-area-list">
                    <div>活动部</div>
                    <div>230</div>
                    <div>230</div>
                </div>
                <div class="statistics-table-area-list">
                    <div>活动部</div>
                    <div>230</div>
                    <div>230</div>
                </div>
                <div class="statistics-table-area-list">
                    <div>活动部</div>
                    <div>230</div>
                    <div>230</div>
                </div>
            </div>
        </div>
        
        <img class="statistics-bottom" v-if="imgUrl" :src="imgUrl+'8.png'"/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
        }
    }
}
</script>
<style lang="scss" scoped>
.statistics{
    padding: 0 30rpx;
    display: flex;
    flex-direction: column;
    &-right{
        position: absolute;
        right: 0;
        height: 150rpx;
        width: 150rpx;
        top: 0rpx;
    }
    &-title{
        height: 200rpx;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        text-align: center;
        padding-top: 60rpx;
        margin-bottom: 30rpx;
        &-list{
            height: 120rpx;
        }
    }
    &-table{
        font-size: 28rpx;
        padding: 20rpx 20rpx;
        width: 80vw;
        border: 3rpx solid #D0E4E1;
        border-radius: 15rpx;
        height: 640rpx;
        margin: 0 auto;
        box-sizing: border-box;
        &-title{
            display: flex;
            width: 100%;
            border-bottom: 4rpx solid #D0E4E1;
            padding-bottom: 10rpx;
            div{
                flex: 1;
                text-align: center;
            }
        }
        &-area{
            width: 100%;
            overflow: scroll;
            height: 90%;
            padding-bottom: 20rpx;
            &-list{
                display: flex;
                width: 100%;
                line-height: 70rpx;
            }
            div{
                flex: 1;
                text-align: center;
            }
        }
    }
    &-bottom{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 200rpx;
        width: 660rpx;
    }
}
</style>
