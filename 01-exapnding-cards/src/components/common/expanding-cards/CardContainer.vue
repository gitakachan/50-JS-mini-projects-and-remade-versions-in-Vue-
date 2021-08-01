<template>
  <div class="card-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "CardContainer",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.card-container {
  width: 80vw;
  height: 70vh;
  background-color: rgb(0, 0, 0);
  padding: 10px;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
}
</style>
