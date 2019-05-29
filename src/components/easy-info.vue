<template>
  <div class="main-wrap">
    <div class="user-show">
      <img :src='avatarUrl'>
      <span class="user-name">{{depart}}-{{username}}</span>
    </div>
    <img src="/static/images/icons/share.png" class="share-icon" @click="changeToast">
  </div>
</template>

<script>
import showToast from './bottomToa.vue'
export default {
  props:['username','avatarUrl','depart'],
  data(){
    return {

    }
  },
  methods:{
    changeToast(){
      this.$emit('toggleToast')
    }
  },
  components:{
    showToast
  },
}
</script>

<style scoped lang="scss">
  .main-wrap{
    width: 100%;
    height: cr(60);
    @include flex_row;
    align-items: center;
    justify-content: space-between;
    padding-left: cr(20);
    padding-right: cr(15);
    box-sizing: border-box;
    .user-show{
      height: 100%;
      @include flex_row;
      align-items: center;
      img{
        width: cr(50);
        height: cr(50);
        border-radius: 50%;
      }
      .user-name{
        margin-left: cr(25);
        font-size: cr(13);
        font-weight: 600;
        color: #8C8888;
      }
    }
    .share-icon{
      width: cr(25);
      height:cr(25);
      margin-top: cr(5);
      align-self: flex-start;
    }
  }
</style>
