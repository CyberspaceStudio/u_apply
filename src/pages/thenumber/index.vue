<template>
    <div class="statistics">
        <img class="statistics-right" v-if="imgUrl" :src="imgUrl+'5.png'"/>
        <div class="statistics-title">
            <div class="statistics-title-list">已有{{hasInterview}}人参加面试</div>
            <div class="statistics-title-list">还有{{notInterview}}人未面试</div>
        </div>
        <div class="statistics-table">
            <div class="statistics-table-title">
                <div>部门</div>
                <div>已面试</div>
                <div>未面试</div>
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
import {getWholeInterview, getDepInterview} from '@/apis/api'
export default {
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
            hasInterview:0,
            notInterview:0,
            depList:[]
        }
    },
    async onShow(){
        let num = await getWholeInterview().catch((err)=>{
            console.log(err);
            showToast('请求失败，请重试!');
            throw new Error('error');
        })
        this.hasInterview = num.data.data.interviewed
        this.notInterview = num.data.data.noInterview
        let info = await getDepInterview().catch((err)=>{
            console.log(err);
            showToast('请求失败，请重试!');
            throw new Error('error');
        })
        let keys =  Object.keys(info.data.data.interviewedNumber);
        let list = [];
        for(let i = 0;i < keys.length;i++){
            let obj = {
                name : keys[i],
                num2 : info.data.data.interviewedNumber[keys[i]],
                num1 : info.data.data.noInterviewNumber[keys[i]]
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
