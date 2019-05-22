<template>
    <div class="enroll">
        <title>新生报名表</title>
        <article>
            <span class="first-row">
                <div class="input-area">
                    <img v-if="imgUrl" :src="imgUrl+'name.png'"/>
                    <input class="enroll-name" v-model='name' placeholder="请输入姓名"/>
                </div>
                <span class="enroll-picker" @click="changeSex">
                    <span :class="[sex == 'man' ? 'checked' : 'unchecked']">男</span>
                    <span :class="[sex == 'woman' ? 'checked' : 'unchecked']">女</span>
                </span>
            </span>
            <div class="input-area">
                <img v-if="imgUrl" :src="imgUrl+'telephone.png'"/>
                <input type="number" class="enroll-phone"  placeholder="请输入电话号码" v-model="number"/>
            </div>
            <div class="input-area">
                <img v-if="imgUrl" :src="imgUrl+'wechat2.png'"/>
                <input class="enroll-wechat" v-model="wechatNumber"  placeholder="请输入微信号"/>
            </div>
            <div class="enroll-department">
                <title>请选择你意向的部门（最多三个）</title>
                <ul class="enroll-department-listArea">
                    <li class="enroll-department-listArea-list">
                        <span>第一志愿</span>
                        <picker :range='departs' :value='firstIndex' @change='firstChange'>
                            <span class="picker">{{departs[firstIndex]}}</span>
                        </picker>
                        <img v-if="imgUrl" :src="imgUrl+'pull-down.png'"/>
                    </li>
                    <li class="enroll-department-listArea-list">
                        <span>第二志愿</span>
                        <picker :range='departs' :value='secondIndex' @change='secondChange'>
                            <span class="picker">{{departs[secondIndex]}}</span>
                        </picker>
                        <img v-if="imgUrl" :src="imgUrl+'pull-down.png'"/>
                    </li>
                    <li class="enroll-department-listArea-list">
                        <span>第三志愿</span>
                        <picker :range='departs' :value='thirdIndex' @change='thirdChange'>
                            <span class="picker">{{departs[thirdIndex]}}</span>
                        </picker>
                        <img v-if="imgUrl" :src="imgUrl+'pull-down.png'"/>
                    </li>
                </ul>
            </div>
            <div class="textArea">
                <textarea class="enroll-myself" v-model="introduce" placeholder="简述一下你自己（300字以内）" maxlength="300"></textarea>
            </div>
        </article>
        <button class="enroll-bnt" @click="submit">提交</button>
    </div>
</template>
<script>
import {showToast,getStorageSync} from '@/utils/index'
import {postSign} from '@/apis/api'
export default {
    data() {
        return {
            imgUrl: this.GLOBAL.localImg,
            name:'',
            sex: 'man',
            number:'',//手机号
            wechatNumber:'',//微信号
            introduce:'',//自我介绍
            departs:['工作室','交流部','环保部','活动部','红十字会','支教部','培训部','项目部','秘书处','宣传部'],
            firstIndex:0,
            secondIndex:0,
            thirdIndex:0,
            format:/^1[3-9](\d{9})$/,
            userData:null
        }
    },
    methods: {
        changeSex() {
            this.sex = this.sex == 'man' ? 'woman' : 'man';
        },
        firstChange(e){
            this.firstIndex=e.mp.detail.value
        },
        secondChange(e){
            this.secondIndex=e.mp.detail.value
        },
        thirdChange(e){
            this.thirdIndex=e.mp.detail.value
        },
        _getUserData(){
            this.userData=getStorageSync('userInfo')
        },
        _getSession(){
            this.session=getStorageSync('cookie');
        },
        submit(){
            if(this.name==='' || this.sex==='' || this.number === '' ||this.wechatNumber==='' || this.introduce===''){
                showToast('输入项不能为空')
                return false;
            }
            if(!this.format.test(this.number)){
                showToast('请输入有效的手机号码')
                return false
            }
            let resultArr=[this.firstIndex,this.secondIndex,this.thirdIndex];
            let resultSet=new Set([...resultArr]);
            if(resultArr.length!==[...resultSet].length){
                showToast('不能重复报名同一部门');
                return false
            }
            postSign({
                mainId:this.userData.mainId,
                realName:this.name,
                sex:this.sex,
                telNo:this.number,
                wechat:this.wechatNumber,
                school:'西安电子科技大学',
                organization:'青志',
                firstChoice:this.departs[this.firstIndex],
                secondChoice:this.departs[this.secondIndex],
                thirdChoice:this.departs[this.thirdIndex],
                introduction:this.introduce,
                session:this.session
            }).then(res=>{
                console.log(res)
            })
        }
    },
    onLoad(){
        this._getUserData();
        this._getSession()
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
    .picker{
        margin: cr(0) cr(10);
    }
}

</style>
