<template>
    <div class="container">
      <img :src="uploadIcon" @click="goUpload">
    </div>
</template>

<script>
    export default {
        name: "add-btn",
      data(){
          return{
            uploadIcon:'../../static/images/icons/plus.png'
          }
      },
      methods:{
          goUpload(){
            wx.navigateTo({
              url:'../upload/main'
            })
          }
      }
    }
</script>

<style scoped lang="scss">
  @import '../style/common.scss';
  .container{
    width: cr(45);
    height: cr(45);
    position: fixed;
    right: cr(23);
    bottom: cr(31);
    z-index: 100;
    img{
      width: cr(50);
      height: cr(50);
    }
  }
</style>
