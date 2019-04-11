<template>
  <div class="mian-wrap">
    <div class='title'>
      <Title :showCircle=false ></Title>
    </div>
    <div class='time-selector'>
      <time-selector></time-selector>
    </div>
  </div>

</template>

<script>
  import Title from '@/components/Title.vue'
  import timeSelector from '@/components/time-selector.vue'

  export default {
    data () {
      return {

      }
    },
    components:{
      Title,timeSelector
    }
  }
</script>

<style scoped lang="scss">
  .mian-wrap{
    width: 100%;
    @include flex_column;
    align-items: center; 
    .title{
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
    }
    .time-selector{
      width: 100%;
      position: fixed;
      top: cr(70);
      left: 0;
    }
  }
</style>
