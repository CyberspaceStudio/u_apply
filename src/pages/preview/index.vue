<template>
  <div class="main-wrap">
    <div class="easy-info">
      <easy-info :username='userData.uploader_name' :avatarUrl='userData.avatarUrl' :depart='userData.uploader_depart'></easy-info>
    </div>
    <div class="atlas-show">
      <atlas-show :atlas='userData'></atlas-show>
    </div>
  </div>
</template>

<script>
import easyInfo from '@/components/easy-info.vue'
import atlasShow from '@/components/atlas-show.vue'
const json = require('../../mock/mock.json')
export default {
  data(){
    return {
      userData:null,
    }
  },
  components:{
    easyInfo,atlasShow
  },
  onLoad(){
    this.userData=json[0];
  }
}
</script>

<style scoped lang="scss">
  .main-wrap{
    width: 100%;
    @include flex_column;
    align-items: center;
    .easy-info{
      width:100%;
    }
    .atlas-show{
      width: 100%;
    }
  }
</style>
