<template>
    <div class="resume-info">
            <img class="resume-info-avater" v-if="imgUrl" :src="imgUrl+'11.JPG'"/>
            <aside>
                <div>
                    <span>苏果他</span>
                    <span>男</span>
                </div>
                <span class="resume-info-right">
                    <img class="resume-info-right-icon" v-if="imgUrl" :src="imgUrl+'telephone2.png'"/>
                    <span>1234567891234</span>
                </span>
                <span class="resume-info-right">
                    <img  class="resume-info-right-icon"  v-if="imgUrl" :src="imgUrl+'wechat.png'"/>
                    <span>1234567891234</span>
                </span>
            </aside>
        </div>
</template>
<script>
export default {
    data() {
        return {
            imgUrl: this.GLOBAL.localImg,
        }
    }
}
</script>
<style lang="scss" scoped>
.resume-info{
        @include flex_row;
        align-items: center;
        &-avater{
            @include config_width_height(160rpx,160rpx);
            border-radius: 50%;
            margin-right: 50rpx;
        }
        &-right{
            @include flex_row;
            align-items: center;
            margin-top: 15rpx;
            &-icon{
                @include config_width_height(60rpx,60rpx);
                margin-right: 18rpx;
            }
        }
        aside{
            @include flex_column;
            div{
                span{
                    margin-right: 68rpx;
                }
            }
        }
    }
</style>
