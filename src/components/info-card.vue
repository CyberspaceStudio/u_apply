<template>
    <div class="info">
        <img :src="userInfo.headPictureUrl" class="info-avater"/>
        <div class="info-infoArea">
            <div class="info-infoArea-first">
                <span class="info-infoArea-first-id">ID:{{userInfoOnline.wechat || '乖乖'}}</span>
                <span class="info-infoArea-first-name">{{userInfo.falseName}}</span>
            </div>
            <span class="info-infoArea-job">{{userInfoOnline.organization}}{{userInfoOnline.position}}</span>
        </div>
        <img class="info-scanIcon" src="/static/images/icons/scan.png"/>
    </div>
</template>
<script>
import {getUserExactInfo} from '@/apis/api'
import {getStorageSync} from '@/utils/index'
export default {
    data() {
        return {
            userInfo:null,
            userInfoOnline:{
                wechat:''
            }
        }
    },
    methods:{
        _getInfoOnline(){
            getUserExactInfo({mainId:this.userInfo.mainId}).then(res=>{
                this.userInfoOnline=res.data.data;
                
            })
        },
        _getUserInfo(){
            this.userInfo=getStorageSync('userInfo');
        }
    },
    onLoad(){
        this._getUserInfo();
        this._getInfoOnline();
    }
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
        background: yellow;
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
