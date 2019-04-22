<template>
    <div class="enroll">
        <title>新生报名表</title>
        <article>
            <span class="first-row">
                <div class="input-area">
                    <img v-if="imgUrl" :src="imgUrl+'name.png'"/>
                    <input class="enroll-name" placeholder="请输入姓名"/>
                </div>
                <span class="enroll-picker" @click="changeSex">
                    <span :class="[sex == 'man' ? 'checked' : 'unchecked']">男</span>
                    <span :class="[sex == 'woman' ? 'checked' : 'unchecked']">女</span>
                </span>
            </span>
            <div class="input-area">
                <img v-if="imgUrl" :src="imgUrl+'telephone.png'"/>
                <input type="number" class="enroll-phone"  placeholder="请输入电话号码"/>
            </div>
            <div class="input-area">
                <img v-if="imgUrl" :src="imgUrl+'wechat2.png'"/>
                <input class="enroll-wechat"  placeholder="请输入微信号"/>
            </div>
            <div class="enroll-department">
                <title>请选择你意向的部门（最多三个）</title>
                <ul class="enroll-department-listArea">
                    <li class="enroll-department-listArea-list">
                        <span>第一志愿</span>
                        <span>工作室</span>
                        <img v-if="imgUrl" :src="imgUrl+'pull-down.png'"/>
                    </li>
                    <li class="enroll-department-listArea-list">
                        <span>第二志愿</span>
                        <span>未选择</span>
                        <img v-if="imgUrl" :src="imgUrl+'pull-down.png'"/>
                    </li>
                    <li class="enroll-department-listArea-list">
                        <span>第三志愿</span>
                        <span>未选择</span>
                        <img v-if="imgUrl" :src="imgUrl+'pull-down.png'"/>
                    </li>
                </ul>
            </div>
            <div class="textArea">
                <textarea class="enroll-myself" placeholder="简述一下你自己（300字以内）" maxlength="300"></textarea>
            </div>
        </article>
        <button class="enroll-bnt">提交</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgUrl: this.GLOBAL.localImg,
            sex: 'man'
        }
    },
    methods: {
        changeSex() {
            this.sex = this.sex == 'man' ? 'woman' : 'man';
        }
    }
}
</script>
<style lang="scss" scoped>
.enroll{
    padding: 0 25rpx;
    title{
        font-size: 36rpx;
    }
    article {
        margin-top: 24rpx;
    }
    .first-row{
        display: flex;
        justify-content: space-between;
        height: 100rpx;
    }
    input{
        border: 4rpx solid #AEC1B5;
        padding-left: 100rpx;
        box-sizing: border-box;
        font-size: 32rpx;
    }
    .input-area{
        position: relative;
        img{
            position: absolute;
            @include config_width_height(60rpx,60rpx);
            top: 50%;
            margin-top: -27rpx;
            left: 26rpx;
        }
    }
    &-phone,&-wechat{
        @include config_width_height(auto,100rpx);
        margin-top: 12rpx;
    }
    &-name{
        @include config_width_height(426rpx,100rpx);
        border-radius: 20rpx 0 0 0;
    }
    &-picker{
        span{
            display: inline-block;
            overflow: hidden;
            @include config_width_height(120rpx,100rpx);
            text-align: center;
            line-height: 100rpx;
            border: 4rpx solid #AEC1B5;
            box-sizing: border-box;
        }
        span:last-child{
            border-left: none;
            border-radius: 0 20rpx 0 0;
        }
    }
    &-department{
        margin-top: 12rpx;
        border: 4rpx solid #AEC1B5;
        font-size: 32rpx;
        color: #8D998A;
        padding: 6rpx 50rpx 0rpx 36rpx;
        title{
            font-size: 32rpx;
        }
        &-listArea{
            @include flex_column;
            &-list{
                margin-bottom: 22rpx;
                @include flex_row;
                justify-content: space-between;
                img{
                    @include config_width_height(50rpx,50rpx);
                }
            }
            &-list:first-child{
                margin-top: 18rpx;
            }
        }
    }
    &-myself{
        @include config_width_height(auto,300rpx);
        border: 4rpx solid #AEC1B5;
        border-radius: 0  0 20rpx 20rpx;
        margin-top: 14rpx;
        padding: 20rpx 36rpx;
        font-size: 32rpx;
    }
    &-bnt{
        margin-top: 36rpx;
        @include config_width_height(248rpx,94rpx);
        background: rgb(7, 192, 69);
        color: white;
        line-height: 94rpx;
    }
    .checked{
        background:rgb(7, 192, 69);
        animation: changeColor 0.2s linear;
    }
    .unchecked{
        background:white;
        animation: changeColo 0.2s linear;
    }
    @keyframes changeColor {
        0% {
            background:white;
        }
        100% {
            background:rgb(7, 192, 69);
        }
    }
    @keyframes changeColo {
        0% {
            background:rgb(7, 192, 69);
        }
        100% {
            background:white;
        }
    }
}

</style>
