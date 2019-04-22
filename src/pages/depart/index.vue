<template>
<div class="mian-wrap">
    <div class='title'>
        <Title :showCircle=false :currDepart='trulyDate.currDepart' @cancel='showToast'></Title>
    </div>
    <div class='time-selector'>
        <time-selector :startYear='trulyDate.currYear' @update='updateDate' @updateYear='updateYearInfo'></time-selector>
    </div>
    <div class='data-show'>
        <div class='data-item' v-for='(list,index) in jsonp' :key='index'>
            <data-card :data='list'></data-card>
        </div>
    </div>
    <div class='bottom-toast' v-if='ifShowToast'>
        <bottom-toast :departLists='json' @hidden='hiddenToast' @update='updateDepart'></bottom-toast>
    </div>
</div>
</template>

<script>
import Title from '@/components/Title.vue'
import timeSelector from '@/components/time-selector.vue'
import dataCard from '@/components/data-card.vue'
import bottomToast from '@/components/bottom-toast.vue'
import {
    initCurrYear,
    initCurrMonth
} from '@/utils/timeCount'
const json = require('../../mock/depart.json')
const jsonp = require('../../mock/mock.json')
export default {
    data() {
        return {
            ifShowToast: false,
            trulyDate: {
                currDepart: '网络技术工作室',
                currYear: '0',
                currMonth: '1'
            },
            json,
            jsonp,
            startYear: 0,
        }
    },
    methods: {
        showToast() {
            this.ifShowToast = true;
        },
        hiddenToast() {
            this.ifShowToast = false;
        },
        updateDepart(param) { //更新部门信息
            this.trulyDate.currDepart = param;
        },
        _initData() {
            this.trulyDate.currYear = initCurrYear();
            this.trulyDate.currDepart = '网络技术工作室'; //接口数据
        },
        updateDate(param) {
            this.trulyDate = Object.assign(this.trulyDate, param)
        },
        updateYearInfo(param) {
            this.trulyDate.currYear = param;
            this.trulyDate.currMonth = initCurrMonth();
            if (param !== initCurrYear()) {
                this.trulyDate.currMonth = '9';
            }
        }
    },
    watch: {
        trulyDate: {
            handler(newVal) {
                console.log(newVal)
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
    onLoad() {
        this._initData();
    }
}
</script>

<style lang="scss" scoped>
.mian-wrap {
    width: 100%;
    @include flex_column;
    align-items: center;

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
