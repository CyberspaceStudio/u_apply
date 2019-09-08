<template>
    <div class="statistics">
        <div class="statistics-title">报名总人数累计达</div>
        <img class="statistics-right" v-if="imgUrl" :src="imgUrl+'5.png'"/>
        <div class="statistics-num">
            <div>{{number}}</div>
        </div>
        <div class="statistics-table">
            <div class="statistics-table-title">
                <div>部门</div>
                <div>总人数</div>
                <div>跨部人数</div>
            </div>
            <div class="statistics-table-area">
                <div class="statistics-table-area-list" v-for="(ele,index) in depList" :key="index">
                    <div>{{ele.name}}</div>
                    <div>{{ele.num1}}</div>
                    <div>{{ele.num2}}</div>
                </div>
            </div>
        </div>
        
        <img class="statistics-bottom" v-if="imgUrl" :src="imgUrl+'8.png'"/>
    </div>
</template>
<script>
import {showToast,getStorageSync,jumpTo,showLoading,hideLoading}from '@/utils/index'
import {getDepNumber, getTotalNumber} from '@/apis/api'
export default {
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
            depList:[],
            number:0
        }
    },
    async mounted(){
        let info = await getDepNumber().catch((err)=>{
            console.log(err);
            showToast('请求失败，请重试!');
            throw new Error('error');
        })
        let num = await getTotalNumber().catch((err)=>{
            console.log(err);
            showToast('请求失败，请重试!');
            throw new Error('error');
        })
        this.number = num.data.data.totalNumber;
        let keys =  Object.keys(info.data.data.crossNumber);
        let list = [];
        for(let i = 0;i < keys.length;i++){
            let obj = {
                name : keys[i],
                num2 : info.data.data.crossNumber[keys[i]],
                num1 : info.data.data.enrollNumber[keys[i]]
            }
            list.push(obj);
        }
        this.depList = list;
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
