<template>
    <div class="container animation-up" >
      <!--:class="showToast?animation_up:animation_down"-->
      <ul>
        <li>qwe</li>
        <li>qwe</li>
        <li>qwe</li>
        <li @click="close">取消</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "bottom-toast",
      props:{
        show:{
          type:String,
          default:false
        }
      },
      data(){
        return {
          showToast:this.show,
          animation_up:'animation-up',
          animation_down:'animation-down'
        }
      },
      methods:{
          close(){
            this.showToast=false;
          }
      },
      created(){
          console.log(this.show,this.showToast)
      }
    }
</script>

<style scoped lang="scss">
  @import '../style/common';

    @keyframes bottom-toast-up {
      from{
        opacity:0;
        bottom:cr(-100)
      }
      to{
        opacity:.5;
        bottom:cr(0)
      }
    }
  @keyframes bottom-toast-down {
    from{
      opacity:0;
      bottom:cr(-100)
    }
    to{
      opacity: 1;
      bottom:cr(0)
    }
  }
  .container{
    width: $full_width;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 110;
    opacity: .5;
    background-color: whitesmoke;
    animation-fill-mode:forwards;
  }
  .animation-up{
    animation: bottom-toast-up 2s linear ;
  }
  .animation-down{
    animation: bottom-toast-domn 2s linear ;
  }
</style>
