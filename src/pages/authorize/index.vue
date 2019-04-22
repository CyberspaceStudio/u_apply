<template>
  <div class="main-wrap">
    <autho-module :departIcon='departIcon' :departName='departName' :beforePath='beforePath'>
      <div slot='authoList'>
        <li class='autho-item' v-for='(list ,index) in authorizeLists' :key='index'> &deg; {{list}}</li>
      </div>
    </autho-module>
  </div>

</template>

<script>
import authoModule from "@/components/autho-module.vue"
  export default {
    data () {
      return {
        departIcon:'/static/images/circle4.png',
        departName:'志愿圈',
        authorizeLists:[
          '获取你的昵称，头像以及性别'
        ],
        beforePath:''
      }
    },
    components: {
      authoModule
    },
    onLoad(){
      this.beforePath=`/${this.$mp.query.beforePath}`;
    }
  }
</script>

<style scoped lang="scss">
  .main-wrap{
    width: 100%;
    .autho-item{
      margin-top: cr(10);
      font-size: cr(14);
      color: #CCCCCC; 
    }
  }
</style>
