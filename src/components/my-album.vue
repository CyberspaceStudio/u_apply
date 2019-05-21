<template>
<div class="album">
    <title>我的相册</title>
    <div class="album-content" v-if="datainit">
        <div v-for="(info,index) in previewData" :key="index">
            <image-card :infos='info'></image-card>
        </div>
    </div>
</div>
</template>

<script>
import imageCard from '@/components/image-card'
import {
    getPersonMessagePreview
} from '@/apis/api'
import {
    getStorageSync,showLoading,hideLoading
} from '@/utils/index'
export default {
    data(){
        return {
            userInfo: null,
            previewData: null,
            datainit:false
        }
    },
    components: {
        imageCard
    },
    methods: {
        _getUserInfo() {
            this.userInfo = getStorageSync('userInfo');
        },
        _getPreviewData() {
            showLoading();
            getPersonMessagePreview({
                mainId: this.userInfo.mainId
            }).then(res => {
                this.previewData=[...res.data.data];
                hideLoading();
                this.datainit=true;
            })
        }
    },
    onLoad(){
        this._getUserInfo();
        this._getPreviewData();
    }
}
</script>

<style lang="scss" scoped>
.album {
    margin-top: 24rpx;

    title {
        margin-left: 68rpx;
        font-size: 32rpx;
    }

    &-content {
        margin-top: 6rpx;
        padding: 0 26rpx;
        display: flex;
        @include flex_row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
}
</style>
