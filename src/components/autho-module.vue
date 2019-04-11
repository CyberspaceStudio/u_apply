 <template>
 <div class='main-wrap'>
    <img :src='departIcon' class='icon'>
    <span class='name'>{{departName}}</span>
    <span class='list-title'>需正常使用该程序所提供服务，请授权以下信息</span>
    <ul class='antho-list'>
        <slot name='authoList'></slot>
    </ul>
    <button open-type='getUserInfo' class='info-btn' @click='getInfo'>授权进入</button>
    <p class='return-btn' @click='checkBack'>我已授权，返回原页面</p>
 </div>
</template>

<script>
import {checkScope,jumpTo,getUserInfo,switchTab,showToast} from '@/utils/index'
export default {
  props: ['departIcon','departName','beforePath'],
  data () {
    return {

    }
  },
  methods:{
      getInfo(){
          getUserInfo()
          .then(res=>{
          })
          .catch(err=>{
          })
      },
      checkBack(){                                          //检查授权情况  并返回原页面
        checkScope().then(res=>{
                if(res.authSetting['scope.userInfo']){
                    switchTab(this.beforePath);
                }else{
                    showToast('请先完成授权')
                }
            }).catch(err=>{ 
                 
            })
        }
    }
}

</script>
<style lang='scss' scoped>
    .main-wrap{
        width: 100%;
        @include flex_column;
        align-items: center;
        .icon{
            width: cr(70);
            height: cr(70);
            border-radius: 50%;
        }
        .name{
            font-size: cr(16);
            font-weight: 600;
            margin-top: cr(25);
        }
        .list-title{
            width: 80%;
            font-size: cr(15); 
            margin-top: cr(50);
        }
        .info-btn{
            width: 50%;
            height: cr(40);
            color: white;
            background-color: green;
            line-height: cr(40);
            border-radius: cr(5);
            font-size: cr(14);
            margin-top: cr(80);
            &:after{
                display: none;
            }
        }
        .autho-list{
            width: 80%;
            padding-left: cr(10);
        }
        .return-btn{
            width: 100%;
            padding-right: cr(10);
            box-sizing: border-box;
            font-size: cr(12);
            text-decoration: underline; 
            text-align: right;
            margin-top: cr(15);
        }
    }
</style>