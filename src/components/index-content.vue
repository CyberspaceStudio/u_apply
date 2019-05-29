<template>
<div class="container">
    <div class="content-left">
        <div v-for="(list,index) in covers.left" :key="index" class="content-list" @click="goPreview(list.activityId)">
            <img :src="serverURI+list.pictureUrl" mode="scaleToFill">
            <div class="content-text">
                <span class="halfBackground">#{{list.department}}-{{list.informationName}}</span>
                <p>{{list.content}}</p>
                <div class="content-footer">
                    <span>{{list.activityTime}}</span>
                    <span class="img-content"><img src="/static/images/icons/check.png">{{list.readingVolume}}人查阅</span>
                </div>
            </div>
        </div>
    </div>
    <div class="content-right">
        <div v-for="(list,index) in covers.right" :key="index" class="content-list" @click="goPreview(list.activityId)">
            <img :src="serverURI+list.pictureUrl" mode="scaleToFill">
            <div class="content-text">
                <span class="halfBackground">#{{list.department}}-{{list.informationName}}</span>
                <p>{{list.content}}</p>
                <div class="content-footer">
                    <span>{{list.activityTime}}</span>
                    <span class="img-content"><img src="/static/images/icons/check.png">{{list.readingVolume}}人查阅</span>
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
    props:['covers'],
    data() {
        return {
            serverURI:this.GLOBAL.serverURI,
            pageNumber:1,//分页页数
            datainit:false,
            isFirstLoad:true,
            dataFree:true
        };
    },
    methods: {
        goPreview(id) {
            jumpTo('/pages/preview/main', {
                id
            })
        },
        _setExpireDate() {
            this.contentLists.forEach((item, index) => {
                item.expireDate = timestampCount(item.upload_time)
            })
        },
    },
    onLoad(){
        // console.log(this.covers)
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
            height: cr(120);
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
