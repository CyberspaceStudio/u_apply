<template>
    <div class="container">
        <info-card :pictuerUrl='userInfoOnline.headPictureUrl' :id="userInfoOnline.mainId" :name='userInfoOnline.falseName' :organization='userInfoOnline.organization' :position='positionName'></info-card>
        <myApplication v-if="isManager"></myApplication>
        <toast-info v-if="haveNew && !isVisitor" :number='likeNumbers'></toast-info>
        <my-album v-if="isManager"></my-album>
        <visitor-home v-if="isVisitor"></visitor-home>
    </div>
</template>
<script>
import infoCard from '@/components/info-card'
import toastInfo from '@/components/toast-info'
import myAlbum from '@/components/my-album'
import visitorHome from '@/components/visitor-home'
import myApplication from '@/components/my-application'
import {getLikeNumber,getUserExactInfo} from '@/apis/api'
import {getCurrTime} from '@/utils/timeCount'
import {getStorageSync,jumpTo,setStorageSync} from '@/utils/index'
const positionMap={
    '0':'游客',
    '1':'志愿圈成员'
}
export default {
    data() {
        return {
            haveNew: false,
            isManager: false,
            likeNumbers:0,
            isVisitor:true,
            position:0,
            positionName:'',
            userData:null,
            userInfoOnline:{}
        }
    },
    components: {
        infoCard,
        toastInfo,
        myAlbum,
        visitorHome,
        myApplication
    },
    methods:{
        jump(){
            jumpTo('/pages/enrollForm/main')
        },
        _getUserInfo(){
            this.userData=getStorageSync('userInfo');
        },
        _initNumbers(){
            let time=getCurrTime()
            getLikeNumber({
                lastQueryTime:time,
                mainId:this.userData.mainId
            }).then(res=>{
                if(res.data.data){
                    this.likeNumbers=res.data.data;
                    this.haveNew=true
                }else{
                    this.haveNew=false
                }
            }).catch(err=>{
                // console.log(err)
            })
        },
        _getInfoOnline(){
            getUserExactInfo({mainId:this.userData.mainId}).then(res=>{
                this.userInfoOnline=res.data.data;
                this.position=this.userInfoOnline.position;
                    if(this.position!='0'){
                        this.isVisitor=false
                        this.isManager=true
                    }
                setStorageSync('userInfo',this.userInfoOnline)
                this.positionName=positionMap[this.position]
                }).catch(err=>{
                    // console.log('information',err)
                })
        },
    },
    onShow(){
        this._getUserInfo()
        this._getInfoOnline()
        this._initNumbers()
    }
}
</script>
<style>

</style>

<style lang="scss" scoped>
.container{
    background: url('http://132.232.37.121/mpvue/static/background.png');
    background-size: 100vw 100vh;
    height: 100vh;

}
</style>
