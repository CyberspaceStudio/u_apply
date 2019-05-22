<template>
  <div class="main-wrap">
    <div class="easy-info">
      <easy-info :username='userData.informationName' :avatarUrl='userData.portraitUrl' :depart='userData.department' @toggleToast='toggleToast'></easy-info>
    </div>
    <div class="atlas-show">
      <atlas-show :atlas='userData' v-if='dataInit'></atlas-show>
    </div>
    <bottom-toast :show="showToast" @handleCancel="onCancel" v-if="showToast"></bottom-toast>
  </div>
</template>

<script>
import easyInfo from '@/components/easy-info.vue'
import atlasShow from '@/components/atlas-show.vue'
import bottomToast from '@/components/bottomToa.vue'
import {getSpecificMessage,checkStatus} from '@/apis/api'
import {hideLoading,showLoading} from '@/utils/index'
export default {
  data(){
    return {
      userData:{informationName:'123'},
      searchId:'',
      dataInit:false,
      showToast:false
    }
  },
  components:{
    easyInfo,atlasShow,bottomToast
  },
  methods:{
    _getInfo(){
      showLoading()
      getSpecificMessage({activityId:this.searchId}).then(res=>{
        this.userData=res.data.data;
        this.dataInit=true;
        hideLoading()
      })
    },
    onCancel(){
      this.showToast=false;
    },
    toggleToast(){
      this.showToast=true;
    }
  },
  onLoad(){
    this.searchId=this.$mp.query.id;
    this._getInfo();
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
