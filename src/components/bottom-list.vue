<template>
   <div class='main-wrap'>
     <slot></slot>
     <div class="cancel-btn" @click="cancel">取消</div>
     <div class="fixed-modal"></div>
   </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
    methods:{
        cancel(){
            this.$emit('cancel')
        }
    }
}

</script>
<style lang='scss' scoped>
  .main-wrap{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      overflow-y: scroll;
      max-height: cr(400);
      z-index: 999;
      .cancel-btn{
          width: 100%;
          height: cr(30);
          text-align: center;
          background-color: white;
          line-height: cr(30);
          font-size: cr(14);
          color: #A5D3CD;
      }
      .fixed-modal{
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: -1;
          background-color: rgba(0,0,0,0.64);
      }
}
</style>