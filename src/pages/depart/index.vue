<template>
<div class="mian-wrap">
    <div class='title'>
        <Title :showCircle=false :currDepart='trulyDate.currDepart || "未录取"' @cancel='showToast'></Title>
    </div>
    <div class='time-selector'>
        <time-selector :startYear='currYear' @update='updateDate' @updateYear='updateYearInfo'></time-selector>
    </div>
    <div class='data-show'>
        <div class='data-item' v-for='(list,index) in jsonp' :key='index'>
            <data-card :data='list'></data-card>
        </div>
    </div>
    <div class='bottom-toast' v-if='ifShowToast'>
        <bottom-toast :departLists='json' @hidden='hiddenToast' @update='updateDepart'></bottom-toast>
    </div>
    <div class="fixed"></div>
</div>
</template>

<script>
import Title from '@/components/Title.vue'
import timeSelector from '@/components/time-selector.vue'
import dataCard from '@/components/data-card.vue'
import bottomToast from '@/components/bottom-toast.vue'
import {
    initCurrYear,
    initCurrMonth,
    initCurrDay
} from '@/utils/timeCount'
import {getDepartMemory,getOrganizationInfo} from '@/apis/api'
import {getStorageSync,showToast} from '@/utils/index'
const departMap={
    '网络技术工作室':'1',
    '环保部':'2',
    '红十字会':'3',
    '交流部':'4',
    '培训部':'5',
    '支教部':'6',
    '宣传部':'7',
    '项目部':'8',
    '活动部':'9',
    '秘书处':'10',
    '决策层':'11',
}
export default {
    data() {
        return {
            ifShowToast: false,
            trulyDate: {
                currDepart:'',
                currYear: '0',
                currMonth: '1'
            },
            currYear:'0',
            json:[],
            jsonp:[],
            startYear: 0,
            userInfo:null,
        }
    },
    methods: {
        showToast() {
            this.ifShowToast = true;
        },
        hiddenToast() {
            this.ifShowToast = false;
        },
        updateDepart(param) { 
            this.trulyDate.currDepart = param;
        },
        _initData() {
            this.trulyDate.currYear = initCurrYear();
            this.currYear = initCurrYear();
            this.trulyDate.currMonth=initCurrMonth()
            this.trulyDate.currDepart = getStorageSync('userInfo').department; //缓存获取
        },
        updateDate(param) {
            this.trulyDate = Object.assign(this.trulyDate, param)
        },
        updateYearInfo(param) {
            this.currYear = param;
            this.trulyDate.currYear = param;
            this.trulyDate.currMonth = initCurrMonth();
            if (param !== initCurrYear()) {
                this.trulyDate.currMonth = '9';
            }
        },
        _getuserInfo(){
            this.userInfo=getStorageSync('userInfo');
        },
        _initDeparts(){
            if(this.userInfo.position!='0'){
                getOrganizationInfo({organization:this.userInfo.organization}).then(res=>{
                    this.json=res.data.data;
                })
            }
        }
    },
    watch: {
        trulyDate: {
            handler(newVal) {
                if(this.userInfo.position!='0'){
                    getDepartMemory({
                        department:departMap[this.trulyDate.currDepart] || '',  
                        year:newVal.currYear,
                        month:newVal.currMonth,
                        day:'30'
                    }).then(res=>{
                        this.jsonp=res.data.data
                        if(res.data.data.length===0){
                            showToast('当前时间段没有人发圈')
                        }
                    })
                }else{
                    showToast('游客没有权限查看哦')
                }
            },
            deep: true
        }
    },
    components: {
        Title,
        timeSelector,
        dataCard,
        bottomToast
    },
    onShow() {
        this._getuserInfo();
        this._initDeparts();
    },
    onLoad(){
        this._initData();
    }
}
</script>

<style lang="scss" scoped>
.mian-wrap {
    width: 100%;
    @include flex_column;
    align-items: center;
    padding-bottom: cr(48);
    box-sizing: border-box;

    .title {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 404;
        background-color: white;
    }

    .time-selector {
        width: 25%;
        position: fixed;
        top: cr(70);
        left: 0;
    }

    .data-show {
        width: 70%;
        height: cr(380);
        position: fixed;
        top: cr(70);
        right: cr(2);
        overflow: scroll;
        @include flex_column;

        .data-item {
            width: 100%;
            margin-bottom: cr(5);
        }
    }

    .bottom-toast {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;
    }
}
</style>
