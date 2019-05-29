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
                    <span :class="[sex == '男' ? 'checked' : 'unchecked']">男</span>
                    <span :class="[sex == '女' ? 'checked' : 'unchecked']">女</span>
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
                            <span class="picker-label">{{departs[firstIndex]}}</span>
                        </picker>
                    </li>
                    <li class="enroll-department-listArea-list">
                        <span>第二志愿</span>
                        <picker :range='departs' :value='secondIndex' @change='secondChange'>
                            <span class="picker-label">{{departs[secondIndex]}}</span>
                        </picker>
                    </li>
                    <li class="enroll-department-listArea-list">
                        <span>第三志愿</span>
                        <picker :range='departs' :value='thirdIndex' @change='thirdChange'>
                            <span class="picker-label">{{departs[thirdIndex]}}</span>
                        </picker>
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
import {showToast,getStorageSync,jumpTo,switchTab} from '@/utils/index'
import {postSign} from '@/apis/api'
export default {
    data() {
        return {
            imgUrl: this.GLOBAL.localImg,
            name:'',
            sex: '男',
            number:'',//手机号
            wechatNumber:'',//微信号
            introduce:'',//自我介绍
            departs:['请选择','网络技术工作室','交流部','环保部','活动部','红十字会','支教部','培训部','项目部','秘书处','宣传部'],
            firstIndex:0,
            secondIndex:0,
            thirdIndex:0,
            format:/^1[3-9](\d{9})$/,
            userData:null
        }
    },
    methods: {
        changeSex() {
            this.sex = this.sex == '男' ? '女' : '男';
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
        _jumpTab(){
            switchTab('/pages/home/main')
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
            if(this.firstIndex==0){
                showToast('请至少选择一个部门意向')
                return false;
            }
            let resArr=[this.firstIndex,this.secondIndex,this.thirdIndex];
            let newArr=[];
            for(let i=0;i<3;i++){
                if(resArr[i]!=0){
                    newArr.push(resArr[i])
                }
            }
            let beforeLength=newArr.length;
            let resSet=new Set([...newArr]);
            if([...resSet].length!==beforeLength){
                showToast('请勿选择重复部门')
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
                secondChoice:this.secondIndex!==0?this.departs[this.secondIndex]:'',
                thirdChoice:this.thirdIndex!==0?this.departs[this.thirdIndex]:'',
                introduction:this.introduce,
                session:this.session
            }).then(res=>{
                showToast('报名成功','success')
                setTimeout(this._jumpTab,1300)
            }).catch(err=>{
                showToast('请勿重复报名')
                setTimeout(this._jumpTab,1300)
                
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
    color: #8D998A;
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
        border: 4rpx solid rgba(174, 193, 181, 1);
        padding-left: 100rpx;
        box-sizing: border-box;
        font-size: 32rpx;
        color: #8D998A;
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
            border: 4rpx solid rgba(174, 193, 181, 1);
            box-sizing: border-box;
        }
        span:last-child{
            border-left: none;
            border-radius: 0 20rpx 0 0;
        }
    }
    &-department{
        margin-top: 12rpx;
        border: 4rpx solid rgba(174, 193, 181, 1);
        font-size: 32rpx;
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
        border: 4rpx solid rgba(174, 193, 181, 1);
        border-radius: 0  0 20rpx 20rpx;
        margin-top: 14rpx;
        padding: 20rpx 36rpx;
        font-size: 32rpx;
    }
    &-bnt{
        margin-top: 36rpx;
        @include config_width_height(248rpx,94rpx);
        background: #7EAD9D;
        color: white;
        line-height: 94rpx;
        box-shadow: cr(3) cr(3) cr(3) 0 #7EAD9D;
    }
    .checked{
        background:rgba(174, 193, 181, 1);
        animation: changeColor 0.2s linear;
        color: #094D21;
        font-weight: 500;
    }
    .unchecked{
        background:white;
        animation: changeColor 0.2s linear;
        color: #094D21;
        font-weight: 500;
    }
    @keyframes changeColor {
        0% {
            background:white;
        }
        100% {
            background:rgba(174, 193, 181, 1);
        }
    }
    @keyframes changeColo {
        0% {
            background:rgba(174, 193, 181, 1);
        }
        100% {
            background:white;
        }
    }   
    .picker-label{
        margin: cr(0) cr(10);
    }
}

</style>
