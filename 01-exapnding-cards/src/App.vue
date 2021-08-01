<template>
  <div id="app">
    <main-expanding-cards></main-expanding-cards>
  </div>
</template>

<script>
import MainExpandingCards from "@/components/content/expanding-cards/MainExpandingCards";

export default {
  name: "App",
  components: {
    MainExpandingCards,
  },
};
</script>

<style lang="scss">
@import "assets/scss/all.scss";

</style>
