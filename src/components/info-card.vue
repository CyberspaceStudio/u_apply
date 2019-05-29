<template>
    <div class="info">
        <img :src="pictuerUrl" class="info-avater"/>
        <div class="info-infoArea">
            <div class="info-infoArea-first">
                <span class="info-infoArea-first-id">ID:{{id  || ''}}</span>
                <span class="info-infoArea-first-name">{{name}}</span>
            </div>
            <span class="info-infoArea-job">{{organization  || ''}}&nbsp;&nbsp;{{position}}</span>
        </div>
    </div>
</template>
<script>
import {getUserExactInfo} from '@/apis/api'
import {getStorageSync} from '@/utils/index'
export default {
    props:['pictuerUrl','id','name','organization','position'],
    data() {
        return {
            showPosition:''
        }
    },
}
</script>
<style lang="scss" scoped>
.info{
    margin-top: 18rpx;
    margin-left: 40rpx;
    font-size: 28rpx;
    @include flex_row;
    align-items: center;
    &-avater{
        @include config_width_height(160rpx, 160rpx);
        border-radius: 50%;
        margin-right: 40rpx;
    }
    &-infoArea{
        margin-right: 38rpx;
        &-first{
            max-width: 340rpx;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            margin-bottom: 15rpx;
            &-name{
                margin-left: 20rpx;
            }
        }
    }
    &-scanIcon{
        @include config_width_height(60rpx, 60rpx);
    }
}
</style>
