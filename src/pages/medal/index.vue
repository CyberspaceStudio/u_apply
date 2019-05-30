<template>
<div class="container">
    <div v-for="(list,index) in activityData" :key='index'>
        <medal-list @showToast="show" :data='list' v-if="dataInit"></medal-list>
    </div>
    <bottom-list v-if="showToast" @cancel='onCancel'>
        <div class="bottom-list">
            <div class="inject" v-for="(like,index) in likers" :key='index'>
                <span class="inject-left">
                    <img class="avater" :src='like.headPictureUrl'>
                    <span>{{like.department}}-{{like.userName}}</span>
                </span>
                <span>{{like.activityTime}}</span>
            </div>
        </div>
    </bottom-list>
</div>
</template>

<script>
import medalList from '@/components/medal-list'
import bottomList from '@/components/bottom-list'
import {
    getPersonPreview,
    getLikersInfo
} from '@/apis/api'
import {
    getStorageSync
} from '@/utils/index'
export default {
    data() {
        return {
            showToast: false,
            userId: 0,
            pageNumber: 1,
            activityData: null,
            dataInit: false,
            dataFree: true,
            likers:[],
        }
    },
    components: {
        medalList,
        bottomList
    },
    methods: {
        onCancel() {
            this.showToast = false;
        },
        show(id) {
            this.showToast = true;
            getLikersInfo({
                activityId:id
            }).then(res=>{
                this.likers=res.data.data;
                this.likers.forEach(like=>{
                    like.activityTime=like.createTime.split(' ')[0];
                })
            })
        },
        _getUserInfo() {
            let res = getStorageSync('userInfo');
            this.userId = res.mainId
        },
        _getMessage() {
            getPersonPreview({
                mainId: this.userId,
                pageNumber: 1,
            }).then(res => {
                this.activityData = res.data.data
                if (res.data.data.length === 0) {
                    this.dataFree = false
                }
                this.activityData.forEach(item => {
                    item.activityTime = item.activityTime.split(' ')[0]
                })
                this.dataInit = true
            })
        },
        _getBottomMessage() {
            getPersonPreview({
                mainId: this.userId,
                pageNumber: this.pageNumber++,
            }).then(res => {
                if (res.data.data.length === 0) {
                    this.dataFree = false
                }
                res.data.data.forEach(item => {
                    item.activityTime = item.activityTime.split(' ')[0]
                })
                this.activityData = this.activityData.concat(res.data.data)
                this.dataInit = true
            })
        }
    },
    onShow() {
        this.pageNumber=1;
        this.dataInit = false;
        this.dataFree=false;
        this._getUserInfo()
        this._getMessage()
    },
    onReachBottom() {
        if (this.dataFree) {
            this._getBottomMessage()
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: -30rpx;
}
.bottom-list{
    width: 100%;
    max-height: cr(300);
    overflow-y: scroll;
}

.inject {
    color: #A5D3CD;
    font-size: cr(12);
    @include flex_row;
    justify-content: space-between;
    align-items: center;
    background-color:white; 
    padding: cr(10) cr(10);
    box-sizing: border-box;
    &-left {
        @include flex_row;
        align-items: center;
        img {
            margin-right: 20rpx;
        }
    }
}

.avater {
    @include config_width_height(100rpx, 100rpx);
    border-radius: 50%;
}
</style>
