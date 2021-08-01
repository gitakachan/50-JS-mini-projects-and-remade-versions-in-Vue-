<template>
  <!--模塊內inline background-img寫法：
   :style="{backgroundImage:'url('+require('@/assets/logo.svg')+')'}"    -->
  <div
    class="cardItem"
    :style="{
      backgroundImage: bgUrl,
    }"
  >
    <h4 class="info">
      <slot name="info"></slot>
    </h4>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    bgUrl: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      currentIdx: 0,
    };
  },
};
</script>
<style lang="scss">
.cardItem {
  margin: 20px;
  width: 60px;
  border-radius: 20px;
  cursor: pointer;
  transition: width 0.5s ease;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .info {
    display: none;
    position: absolute;
    bottom: 0;
    left: 10%;
    color: #fff;
    font-weight: 200;
  }
}
</style>
