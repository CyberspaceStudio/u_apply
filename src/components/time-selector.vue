<template>
<div class='main-wrap'>
    <div class='mian-selector' v-if='!isSelectYear'>
        <span v-for='(line,index) in timeLine' :key='index' :class="line.data>1000?'year-style':'month-style'" @click='updateDate(line)'>{{line.data}}</span>
    </div>
    <div class='year-selector' v-else>
        <span class='year-style'>年份选择</span>
        <span v-for='(line,index) in yearLine' :key='index' class='year-style' @click='updateYear(line.data)'>{{line.dataToString}}</span>
    </div>
    <div class='change-btn' @click='toggleSelecting'>
        <img src='/static/images/icons/haha.png' class='change-btn-image'>
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
            isSelectYear: false
        }
    },
    watch: {
        startYear(newVal) {
            this.timeLine = generateTimeSelector(newVal);
        }
    },
    methods: {
        toggleSelecting() {
            this.isSelectYear = !this.isSelectYear;
        },
        _initData() {
            this.timeLine = generateTimeSelector(this.startYear);
            this.yearLine = generatorYearSelector();
        },
        updateDate(item) {
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
    width: 100%;
    height: cr(380);
    position: relative;
    font-size: cr(12);
    color: #424602;
    padding-top: cr(10);
    padding-bottom: cr(10);
    box-sizing: border-box;

    .mian-selector {
        width: 70%;
        @include flex_column;
        background-color: #EFF2F5;
        padding-left: cr(2);
        padding-right: cr(2);

        span {
            height: cr(20);
        }

        .year-style {
            align-self: flex-start;
        }

        .month-style {
            font-size: cr(10);
            color: #36AE86;
            align-self: flex-end;
        }
    }

    .year-selector {
        width: cr(80);
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
        position: absolute;
        bottom: cr(15);
        left: cr(15);
        background-color: #EFF2F5;
        border-radius: 50%;
        text-align: center;

        .change-btn-image {
            width: cr(20);
            height: cr(20);
            margin-top: cr(10);
        }
    }
}
</style>
