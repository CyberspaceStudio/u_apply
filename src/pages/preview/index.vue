<template>
<div class="main-wrap">
    <div class="easy-info">
        <easy-info :username='userData.informationName' :avatarUrl='userData.portraitUrl' :depart='userData.department' @toggleToast='toggleToast'></easy-info>
    </div>
    <div class="atlas-show">
        <atlas-show :id='searchId' :showLike='showLike' :time="userData.activityTime" :content='userData.content' :imgList='imgList' v-if="dataInit"></atlas-show>
    </div>
    <bottom-toast :show="showToast" @handleCancel="onCancel" v-if="showToast"></bottom-toast>
</div>
</template>

<script>
import easyInfo from '@/components/easy-info.vue'
import atlasShow from '@/components/atlas-show.vue'
import bottomToast from '@/components/bottomToa.vue'
import {
    getSpecificMessage,
    checkStatus,
    getDepartPicture,
} from '@/apis/api'
import {
    hideLoading,
    showLoading,
    getStorageSync
} from '@/utils/index'
export default {
    data() {
        return {
            userData: {
                informationName: '123'
            },
            searchId: '',
            dataInit: false,
            showToast: false,
            imgList: [],
            userId: 0,
            isliked: false,
            showLike:true
        }
    },
    components: {
        easyInfo,
        atlasShow,
        bottomToast
    },
    methods: {
        _getUserId() {
            let result = getStorageSync('userInfo');
            this.userId = result.mainId;
        },
        _getInfo() {
            showLoading()
            getSpecificMessage({
                activityId: this.searchId
            }).then(res => {
                this.userData = res.data.data;
                if(this.userData.mainId===this.userId){
                    this.showLike=false
                }
                return getDepartPicture({
                    activityId: this.userData.activityId
                })
            }).then(res => {
                this.imgList = res.data.data
                this.dataInit = true
                hideLoading()
            }).catch(err => {
                hideLoading()
            })
        },
        onCancel() {
            this.showToast = false;
        },
        toggleToast() {
            this.showToast = true;
        },
    },
    onShareAppMessage(res) {
        return {
            title: '志愿图集',
            path: '/pages/preview/main'
        }
    },
    onShow() {
        this.showLike=true;
        this.dataInit = false;
        this.searchId = this.$mp.query.id;
        this._getUserId()
        this._getInfo();
    }
}
</script>

<style lang="scss" scoped>
.main-wrap {
    width: 100%;
    @include flex_column;
    align-items: center;

    .easy-info {
        width: 100%;
    }

    .atlas-show {
        width: 100%;
    }
}
</style>
