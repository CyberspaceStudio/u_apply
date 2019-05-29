<template>
<div class="sendPicture">
    <div class="sendPicture-box">
        <textarea class="sendPicture-box-text" placeholder="分享志愿心（20字以内）..." maxlength="20" v-model="content"></textarea>
        <div v-if="isUpload" class="sendPicture-box-picArea">
            <img
          class="sendPicture-box-picArea-icon"
          src="/static/images/icons/upload.png"
          @click="upLoadPicture"
        >
            <article class="sendPicture-box-picArea-toast">上传图片（上限9张）</article>
        </div>
        <loaded-pic v-else :url="imgUrl" @addPic="upLoadPicture" @deletePic="deletePicture"></loaded-pic>
    </div>
    <button class="sendPicture-config" @click="upload">上传</button>
</div>
</template>

<script>
import loadedPic from "@/components/loaded-pic";
import promisify from "@/utils/promisify";
import {
    chooseImage
} from "@/utils/wxFunc"
import {showToast,getStorageSync,jumpTo,showLoading,hideLoading}from '@/utils/index'
import {
    uploadFile,
    getNew
} from '@/apis/api'
export default {
    data() {
        return {
            imgUrl: [],
            content:'',
            userInfo:null,
            id:0
        };
    },
    computed: {
        isUpload() {
            return this.imgUrl.length === 0;
        }
    },
    methods: {
        async upLoadPicture() {
            const res = await chooseImage({
                count: 9,
                sizeType: ["original", "compressed"],
                sourceType: ["album", "camera"]
            });
            if (res.tempFilePaths.length + this.imgUrl.length > 9)
                showToast('图片最多上传9张')
            res.tempFilePaths.forEach(element => {
                if (this.imgUrl.length < 9)
                    this.imgUrl.push(element);
            });
        },
        _getUserInfo(){
            this.userInfo=getStorageSync('userInfo')
        },
        deletePicture(data) {
            this.imgUrl.splice(data.index, 1);
        },
        upload() {
            if(this.imgUrl.length===0){
                showToast('图片不能少于一张哦')
                return false;
            }
            getNew({
                activityId: '',
                informationName: this.userInfo.falseName,
                department: this.userInfo.department,
                activityTime: '',
                content: this.content,
                readingVolume: '0',
                mainId: this.userInfo.mainId || 2,
                portraitUrl: this.userInfo.headPictureUrl
            }).then(res=>{
                this.id=res.data.data;
                this._fileUpload()
            }).catch(err => {
                console.log('失败',err)
            })
        },
        async _fileUpload(){
            showLoading()
            for(let i=0;i<this.imgUrl.length;i++){
                try{
                let res=await uploadFile({
                        formData:{
                            id:this.id
                        },
                        filePath:this.imgUrl[i]
                    })
                }catch(e){
                    console.log(e)
                }
            }
            showToast('发布成功','success');
            this.imgUrl=[];
            this.content='';
        }
    },
    components: {
        loadedPic
    },
    onLoad(){
        this._getUserInfo()
    }
};
</script>

<style lang="scss" scoped>
.sendPicture {
    padding: 26rpx 23rpx;

    &-box {
        height: 800rpx;
        border-radius: 8rpx 8rpx 8rpx 8rpx;
        color: rgba(16, 16, 16, 1);
        font-size: 28rpx;
        border: 4rpx dashed rgba(174, 193, 181, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30rpx 18rpx;

        &-text {
            height: 112rpx;
            width: 90%;
            font-size: 36rpx;
        }

        &-picArea {
            height: 100%;
            width: 100%;
            @include flex_column;
            justify-content: center;
            align-items: center;

            &-icon {
                height: 110rpx;
                width: 110rpx;
            }

            &-toast {
                width: 136rpx;
                color: rgba(110, 145, 107, 1);
                font-size: 24rpx;
                text-align: center;
                font-family: PingFangSC-regular;
                padding-top: 26rpx;
            }
        }
    }

    &-config {
        width: 248rpx;
        background: #7ead9d;
        margin-top: 120rpx;
        color: white;
    }
}
</style>
