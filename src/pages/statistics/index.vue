<template>
    <div class="statistics">
        <div class="statistics-title">报名总人数累计达</div>
        <img class="statistics-right" v-if="imgUrl" :src="imgUrl+'5.png'"/>
        <div class="statistics-num">
            <div>5</div>
            <div>6</div>
            <div>9</div>
        </div>
        <div class="statistics-table">
            <div class="statistics-table-title">
                <div>部门</div>
                <div>总人数</div>
                <div>跨部人数</div>
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
// import {}
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
    &-title{
        padding: 20rpx 0;
        margin-top: 30rpx;
    }
    &-right{
        position: absolute;
        right: 0;
        height: 150rpx;
        width: 150rpx;
        top: 0rpx;
    }
    &-num{
        display: flex;
        margin: 20rpx auto;
        div{
            height: 200rpx;
            width: 140rpx;
            margin-right: 20rpx;
            line-height: 200rpx;
            text-align: center;
            font-size: 120rpx;
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
