<template>
<div class='main-wrap'>
    <div class='mian-selector' v-if='!isSelectYear'>
        <div class="time-line">
            <span v-for='(line,index) in timeLine' :key='index' :class="[currIndex==index?'checked':'',line.data>1000?'year-style':'month-style']" @click='updateDate(line,index)'>{{line.data}}</span>
        </div>
        <div class='change-btn' @click='toggleSelecting'>
            <img src='/static/images/icons/haha.png' class='change-btn-image'>
        </div>
    </div>
    <div class='year-selector' v-else>
        <span class='year-style'>年份选择</span>
        <span v-for='(line,index) in yearLine' :key='index' class='year-style' @click='updateYear(line.data)'>{{line.dataToString}}</span>
    </div>
</div>
</template>

<script>
import {
    generateTimeSelector,
    generatorYearSelector
} from '@/utils/timeCount'
export default {
    props: ['startYear'],
    data() {
        return {
            timeLine: [],
            yearLine: [],
            isSelectYear: false,
            currIndex: 1,
            monthSelecting: true
        }
    },
    watch: {
        startYear(newVal) {
            this.timeLine = generateTimeSelector(newVal);
        }
    },
    methods: {
        toggleSelecting() {
            this.isSelectYear = true;
        },
        _initData() {
            this.timeLine = generateTimeSelector(this.startYear);
            this.yearLine = generatorYearSelector();
        },
        updateDate(item, index) {
            this.currIndex = index;
            let res = this._initDate(item.dataInstring);
            this.$emit('update', res);
        },
        updateYear(item) {
            this.$emit('updateYear', item);
            this.isSelectYear = false;
        },
        _initDate(param) { //组装2019/4数据
            let res = param.split('/');
            return {
                currYear: res[0],
                currMonth: res[1]
            }
        }
    },
    onLoad() {
        this._initData();
    }
}
</script>

<style lang="scss" scoped>
.main-wrap {
    height: cr(380);
    position: relative;
    font-size: cr(12);
    color: #424602;
    padding-top: cr(10);
    padding-bottom: cr(10);
    box-sizing: border-box;
    @include flex_column;
    align-items: flex-start;

    .mian-selector {
        width: 70%;
        height: 100%;
        @include flex_column;
        padding: cr(6) cr(4);
        box-sizing: border-box;
        background-color: #EFF2F5;
        .time-line{
            @include flex_column;
            width: 100%;
            height: cr(320);
            overflow-y: scroll;
        }
        span {
            height: cr(26);
        }

        .year-style {
            align-self: flex-start;
            color: #424602;
            font-size: cr(14);
        }

        .month-style {
            font-size: cr(10);
            color: #36AE85;
            align-self: flex-end;
        }

        .month-style:nth-child(2n) {
            color: #548264;
        }
    }

    .year-selector {
        width: cr(80);
        height: 100%;
        @include flex_column;
        background-color: #EFF2F5;
        padding-top: cr(5);

        span {
            height: cr(30);
        }
    }

    .change-btn {
        width: cr(40);
        height: cr(40);
        border-radius: 50%;
        text-align: center;

        .change-btn-image {
            width: cr(20);
            height: cr(20);
            margin-top: cr(10);
        }
    }

    .checked {
        text-shadow: cr(1) cr(1) cr(3) #548264;
    }
}
</style>
