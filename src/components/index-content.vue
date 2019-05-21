<template>
<div class="container" v-if="datainit">
    <div class="content-left">
        <div v-for="(list,index) in cover.left" :key="index" class="content-list" @click="goPreview(list.activityId)">
            <img :src="list.pictureUrl" mode="widthFix">
            <div class="content-text">
                <span class="halfBackground">#{{list.department}}-{{list.informationName}}</span>
                <p>{{list.content}}</p>
                <div class="content-footer">
                    <span>{{list.activityTime}}</span>
                    <span class="img-content"><img src="/static/images/icons/check.png">{{123}}人查阅</span>
                </div>
            </div>
        </div>
    </div>
    <div class="content-right">
        <div v-for="(list,index) in cover.right" :key="index" class="content-list" @click="goPreview(list.activityId)">
            <img :src="list.pictureUrl" mode="widthFix">
            <div class="content-text">
                <span class="halfBackground">#{{list.department}}-{{list.informationName}}</span>
                <p>{{list.content}}</p>
                <div class="content-footer">
                    <span>{{list.activityTime}}</span>
                    <span class="img-content"><img src="/static/images/icons/check.png">{{123}}人查阅</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    timestampCount
} from '@/utils/timeCount'
import {
    jumpTo,showLoading,hideLoading
} from '@/utils/index'
import {getInitData} from '@/apis/api'
export default {
    name: "index-content",
    data() {
        return {
            cover: {
                left: [],
                right: []
            },
            contentLists: [],
            pageNumber:1,//分页页数
            datainit:false
        };
    },
    methods: {
        goPreview(id) {
            jumpTo('/pages/preview/main', {
                id
            })
        },
        _imgDivide() {
            //将图片列表按索引分组  for瀑布流布局
            [this.cover.left, this.cover.right] = [
                this.contentLists.filter((item, index) => index % 2 === 0),
                this.contentLists.filter((item, index) => index % 2 !== 0)
            ];
        },
        _setExpireDate() {
            this.contentLists.forEach((item, index) => {
                item.expireDate = timestampCount(item.upload_time)
            })
        },
        _getData() {
            showLoading('数据获取中')   
            let pageNumber=this.pageNumber++;
            getInitData({pageNumber}).then(res=>{
                this.contentLists=this.contentLists.concat(res.data.data);
                this.contentLists.forEach(list=>{
                    list.activityTime=list.activityTime.split(' ')[0];
                })
                this._imgDivide();
                this.datainit=true;
                hideLoading()
            })
        }
    },
    onReachBottom(){
        this._getData();
    },
    onLoad() {
        this._getData();//数据获取
        this._imgDivide(); //图片列表分组
        this._setExpireDate(); //过期时间初始化
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: $full_width;
    margin-top: cr(61);

    padding: {
        left: 1%;
        right: 1%;
    }

    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .content-left,
    .content-right {
        width: 49%;
    }

    .content-list {
        width: 100%;
        box-sizing: border-box;
        break-inside: avoid;
        font-size: cr(12);

        img {
            width: $full_width;
            border-radius: cr(5) cr(5) 0 0;
        }

        .content-text {
            width: $full_width;
            padding-left: cr(8);
            box-sizing: border-box;
        }

        span {
            position: relative;

            &::after {
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }

        p {
            width: 100%;
            height: cr(45);
            text-align: justify;
            text-justify: inter-ideograph;
            line-height: cr(22.5);
            overflow: hidden;
        }

        .content-footer {
            width: $full_width;
            @include flex_row;
            @include flex_between;

            font: {
                size: cr(10);
            }

            span {
                color: #807C7C;
            }

            .img-content {
                @include flex_row;
                align-items: center;

                img {
                    width: cr(14);
                    height: cr(14);
                    margin-right: cr(4);
                }
            }
        }
    }
}
</style>
