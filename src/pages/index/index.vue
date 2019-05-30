<template>
<div class="container" ref="contain">
    <div class="fixed-part">
        <Title :showCircle=true @submitCancel="changeToast"></Title>
    </div>
    <index-content :covers='cover'></index-content>
    <bottom-toast :show="showToast" @handleCancel="onCancel" v-if="showToast"></bottom-toast>
    <add-btn :position='userData.position'></add-btn>
</div>
</template>

<script>
import Title from "../../components/Title";
import addBtn from "../../components/add-btn";
import indexContent from "../../components/index-content";
import bottomToast from "../../components/bottomToa";
import {
    checkScope,
    jumpTo,
    showModal,
    showLoading,
    hideLoading,
    getStorageSync,
    showToast,
    setStorageSync,
    login
} from '@/utils/index'
import {
    getInitData,
    checkSession,
    userLogin
} from '@/apis/api'
export default {
    data() {
        return {
            showToast: false,
            toastIndex: 0,
            currPagePath: '',
            datainit: true,
            pageNumber: 1,
            contentLists: [],
            dataFree: true,
            cover: {
                left: [],
                right: []
            },
            userData: null,
        };
    },
    components: {
        Title,
        addBtn,
        indexContent,
        bottomToast
    },
    methods: {
        onCancel() {
            this.showToast = false;
        },
        changeToast() {
            this.showToast = true;
        },
        _getCurrPath() {
            this.currPagePath = this.$mp.page.route;
        },
        _getBottomData() {
            showLoading('数据获取中')
            let pageNumber = this.pageNumber++;
            getInitData({
                pageNumber
            }).then(res => {
                if (res.data.data.length === 0) {
                    this.dataFree = false;
                }
                this.contentLists = this.contentLists.concat(res.data.data);
                this.contentLists.forEach(list => {
                    list.activityTime = list.activityTime.split(' ')[0];
                })
                this._imgDivide()
                hideLoading()
            })
        },
        _getData() {
            let pageNumber = this.pageNumber++;
            getInitData({
                pageNumber: 1
            }).then(res => {
                if (res.data.data.length === 0) {
                    this.dataFree = false;
                }
                this.contentLists = res.data.data;
                this.contentLists.forEach(list => {
                    list.activityTime = list.activityTime.split(' ')[0];
                })
                this._imgDivide()
            })
        },
        _getUserInfo() {
            this.userData = getStorageSync('userInfo')
        },
        _imgDivide() {
            //将图片列表按索引分组  瀑布流布局
            [this.cover.left, this.cover.right] = [
                this.contentLists.filter((item, index) => index % 2 === 0),
                this.contentLists.filter((item, index) => index % 2 !== 0)
            ];
        },
    },
    onShareAppMessage(res) {
        return {
            title: '志愿圈',
            path: '/pages/index/main'
        }
    },
    onLoad() {
        this._getCurrPath();
        checkScope().then(res => {
            if (!res.authSetting['scope.userInfo']) {
                jumpTo('/pages/authorize/main', {
                    beforePath: `${this.currPagePath}`
                })
            } else {
                return checkSession()
            }
        }).then(res => {
            if (res.data.errCode != 0) {
                return login()
            }else{
                throw new Error('user has already login')
            }
        }).then(res => {
            showLoading('登陆中...')
            return userLogin({
                code: res.code,
                falseName: this.userData.falseName,
                headPictureUrl: this.userData.headPictureUrl
            })
        }).then(res => {
            hideLoading()
            setStorageSync('cookie', res.data.session_key);
            setStorageSync('userInfo', res.data.data);
        }).catch(err => {
            // console.log(err)
        })
    },
    onShow() {
        this.pageNumber = 1;
        this.dataFree = true;
        this._getUserInfo()
        this._getData();
    },
    onReachBottom() {
        if (this.dataFree) {
            this._getBottomData()
        }
    },
};
</script>

<style lang="scss" scoped>

.container {
    width: $full_width;
    height: $full_width;
    @include flex_column;

    .fixed-part {
        width: $full_width;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        background-color: white;

        .nav {
            width: $full_width;
            margin-top: cr(14);
            @include flex_row;
            font-size: cr(12);

            div {
                width: cr(28);
                height: cr(20);
                margin-left: cr(15);
                text-align: center;
                line-height: cr(20);
                color: #b3b3b3;

                &:nth-of-type(1) {
                    border-bottom: cr(2) solid #000;
                    color: #000;
                }
            }
        }
    }

    .toast-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
            height: 60rpx;
        }
    }

    .toast-container {
        display: flex;
        padding: 0 60rpx;
        justify-content: space-around;
        height: 236rpx;
        align-items: center;

        .icon1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 24rpx;
            max-width: 100rpx;
            text-align: center;

            img {
                height: 90rpx;
                width: 90rpx;
            }
        }
    }
}
</style>
