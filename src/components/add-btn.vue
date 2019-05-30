<template>
<div class="container">
    <img :src="uploadIcon" @click="goUpload">
    </div>
</template>

<script>
import {
    scanCode,
    authorizeConfig,
    save,
    jumpTo
} from '@/utils/wxFunc'
import {
    showModal,
    showToast,
    showLoading,
    hideLoading
} from '@/utils/wxToast'
export default {
    name: "add-btn",
    props:['position'],
    data() {
        return {
            uploadIcon: '/static/images/icons/plus3.png',
            userData:null
        }
    },
    methods: {
        goUpload() {
            if(this.position!='0'){
                jumpTo('../sendPicture/main')
            }else{
                showToast('游客没有发圈权限哦')
            }
        }
    },
}
</script>

<style lang="scss" scoped>

.container {
    width: cr(45);
    height: cr(45);
    position: fixed;
    right: cr(23);
    bottom: cr(31);
    z-index: 100;

    img {
        width: cr(50);
        height: cr(50);
    }
}
</style>
