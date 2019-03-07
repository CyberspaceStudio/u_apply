<template>
  <div class="container">
    <div class="content" v-if="showCircle">
      <span>志愿圈</span>
      <img :src="shareIcon" @click="clickShare">
    </div>
    <div class="content" v-else>
      <div class="content_depart">
        <span>志愿时光</span>
        <span class="depart-name">{{depart}}</span>
      </div>
      <img :src="classificationIcon">
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    showCircle: {},
    depart: {
      type: String,
      default: "工作室"
    }
  },
  data() {
    return {
      shareIcon: "../../static/images/icons/share.png",
      classificationIcon: "../../static/images/icons/classification(4).png"
    };
  },
  methods: {
    clickShare() {
      this.$emit('submitCancel')
    }
  }
};
</script>

<style scoped lang="scss">
@import "../style/common";

.container {
  width: $full_width;
  .content {
    width: $full_width;
    padding-left: cr(15);
    padding-right: cr(22);
    box-sizing: border-box;
    @include flex_row;
    @include flex_between;
    align-items: center;
    div {
      @include flex_column;
      align-items: flex-start;
      .depart-name {
        font: {
          size: cr(12);
        }
      }
    }
    span {
      font: {
        size: cr(20);
      }
    }
    img {
      width: cr(22);
      height: cr(22);
    }
  }
}
</style>
