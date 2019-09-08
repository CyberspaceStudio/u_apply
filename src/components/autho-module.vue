<template>
<div class='main-wrap'>
    <img :src='departIcon' class='icon'>
    <span class='name'>{{departName}}</span>
    <span class='list-title'>需正常使用该程序所提供服务，请授权以下信息</span>
    <ul class='antho-list'>
        <slot name='authoList'></slot>
    </ul>
    <button open-type='getUserInfo' class='info-btn' @getuserinfo='userLoginPipe' v-if="!hasAuthorize">授权进入</button>
    <div class="depart-symbol">
      <span>青志网络技术工作室提供技术支持</span>
    </div>
</div>
</template>

<script>
import {
    checkScope,
    jumpTo,
    getUserInfo,
    switchTab,
    showToast,
    setStorageSync,
    login,
    showLoading,
    hideLoading,
    getStorageSync
} from '@/utils/index';
import {
    userLogin
} from '../apis/api'
export default {
    props: ['departIcon', 'departName'],
    data() {
        return {
          hasAuthorize: true,
          userInfo:null,
        }
    },
    methods: {
      async checkAuthSetting() {
        showLoading('检查授权信息');
        const scopeCheckRes = await checkScope();
        hideLoading();

        const authState = scopeCheckRes.authSetting['scope.userInfo'];
        if (!authState) {
          showToast('请先完成授权');
          this.hasAuthorize = false;
          return false;
        }
        
        await this.userLoginPipe();
      },
      async userLoginPipe() {
        showLoading('登陆中');
        const getUserInfoRes = await getUserInfo();
        const {nickName, avatarUrl} = getUserInfoRes.userInfo;

        const loginRes = await login();
        const userLoginRes =  await userLogin({
          code: loginRes.code,
          falseName: nickName,
          headPictureUrl: avatarUrl,
        });

        hideLoading();
        
        setStorageSync('cookie', userLoginRes.data.session_key);
        setStorageSync('userInfo', userLoginRes.data.data);

        this.pageSwitch();
      },
      pageSwitch() {
        switchTab('../home/main');
      },
    },
    onLoad() {
      this.checkAuthSetting();
    }
}
</script>

<style lang="scss" scoped>
.main-wrap {
    width: 100%;
    @include flex_column;
    align-items: center;

    .icon {
        width: cr(50);
        height: cr(50);
        border-radius: 50%;
    }

    .name {
        font-size: cr(16);
        font-weight: 600;
        margin-top: cr(25);
    }

    .list-title {
        width: 80%;
        font-size: cr(15);
        margin-top: cr(50);
        margin-bottom: cr(20);
    }

    .info-btn {
        width: 50%;
        height: cr(40);
        color: white;
        background-color: green;
        line-height: cr(40);
        border-radius: cr(5);
        font-size: cr(14);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: cr(40);

        &:after {
            display: none;
        }
    }

    .autho-list {
        width: 80%;
        padding-left: cr(10);
    }

    .depart-symbol {
      width: 100%;
      position: absolute;
      bottom: cr(0);
      @include flex_column;
      font-size: cr(12);
      >span {
        padding: 0 cr(3);
        box-sizing: border-box;
        background-color: white;
      }

      &:before {
        content: '';
        height: cr(1);
        z-index: -1;
        background-color: #CCC;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

}
</style>
