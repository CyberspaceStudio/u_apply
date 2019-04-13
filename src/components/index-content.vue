<template>
<div class="container">
    <div class="content-left">
        <div v-for="(list,index) in cover.left" :key="index" class="content-list" @click="goPreview(list.id)">
            <img :src="list.imgList[0]" mode="widthFix">
            <div class="content-text">
                <span class="halfBackground">#{{list.uploader_depart}}-{{list.uploader_name}}</span>
                <p>{{list.describe}}</p>
                <div class="content-footer">
                    <span>{{list.expireDate}}</span>
                    <span class="img-content"><img src="/static/images/icons/check.png">{{list.reader_num}}人查阅</span>
                </div>
            </div>
        </div>
    </div>
    <div class="content-right">
        <div v-for="(list,index) in cover.right" :key="index" class="content-list" @click="goPreview(list.id)">
            <img :src="list.imgList[0]" mode="widthFix">
            <div class="content-text">
                <span class="halfBackground">#{{list.uploader_depart}}-{{list.uploader_name}}</span>
                <p>{{list.describe}}</p>
                <div class="content-footer">
                    <span>{{list.expireDate}}</span>
                    <span class="img-content"><img src="/static/images/icons/check.png">{{list.reader_num}}人查阅</span>
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
    jumpTo
} from '@/utils/index'
const json = require('../mock/mock.json')
export default {
    name: "index-content",
    data() {
        return {
            cover: {
                left: [],
                right: []
            },
            contentLists: []
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
        }
    },
    onLoad() {
        this.contentLists = json;
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
