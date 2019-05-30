<template>
<div class="main-wrap">
    <div class="backsize change-color" @touchstart="onCancel"></div>
    <div class="touch-share">
        <div class="btns">
            <button open-type='share' class="share-btn">
                <img src="/static/images/icons/timg.jpeg">
                <span>点击分享到微信</span>
            </button>
            <button class="share-btn" @click="showError">
                <img src="/static/images/icons/QRcode.png">
                <span>生成分享二维码</span>
            </button>
        </div>
        <div class="bnt-cancle animation-up" @click="onCancel">取消</div>
    </div>
</div>
</template>

<script>
import {showToast} from '@/utils/index'
export default {
    data(){
        return {

        }
    },
    methods: {
        onCancel() {
            this.$emit("handleCancel");
        },
        showError(){
            showToast('功能暂不支持')
        }
    },
};
</script>

<style lang="scss" scoped>
.main-wrap{
    width: 100%;
    height: 100%;
    position: relative;
    @include flex_column;
    .touch-share{
        width: 100%;
        z-index: 1000;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: white;
        @include flex_column;
        .btns{
            width: 100%;
            @include flex_row;
            button{
                width: 50%;
                height: cr(80);
                @include flex_column;
                justify-content: space-around;
                padding: cr(10) 0;
                box-sizing: border-box;
                >img{
                    width: cr(30);
                    height: cr(30);
                }
                font-size: cr(12);
                background-color: white;
                &::after{
                    content:'';
                    display: none;
                }
                >span{
                    line-height: cr(12);
                }
            }
        }
    }
    .bnt-cancle{
        width: 100%;
        height: cr(20);
        text-align: center;
        font-size: cr(12); 
        line-height: cr(20);
        background-color: rgba(248, 248, 248, 1);
    }
}
.animation-up {
    bottom: 0;
    animation: bottom-toast-up 0.1s linear;
}

.change-color {
    opacity: 0.7;
    animation: change-to-black 0.15s linear;
}

.animation-down {
    bottom: -400rpx;
    animation: bottom-toast-down 0.1s linear;
}

@keyframes bottom-toast-up {
    from {
        bottom: -400rpx;
    }

    to {
        bottom: 0;
    }
}

@keyframes bottom-toast-down {
    from {
        bottom: 0rpx;
    }

    to {
        bottom: -400rpx;
    }
}

@keyframes change-to-black {
    from {
        opacity: 0;
    }

    to {
        opacity: 0.7;
    }
}

.backsize {
    background: black;
    filter: alpha(opacity=60);
    position: fixed;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
}
</style>