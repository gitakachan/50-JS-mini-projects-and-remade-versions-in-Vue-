<template>
  <div class="expandingCards">
    <card-container>
      <!-- 组件想在子组件上监听自己的click的话，需要加上native修饰 -->
      <card-item
        v-for="(item, idx) in cards"
        :key="item.info"
        :bgUrl="bgUrl(idx)"
        :class="{ activeCard: idx == currentIdx }"
        @click.native="cardClick(idx)"
      >
        <template v-slot:info>
          {{ item.info }}
        </template>
      </card-item>
    </card-container>
  </div>
</template>

<script>
import CardContainer from "components/common/expanding-cards/CardContainer";
import CardItem from "components/common/expanding-cards/CardItem";
export default {
  //輪播效果
  created() {
    setInterval(() => {
      this.currentIdx++;
      //設斷點為768px
      if (window.innerWidth >= 768) {
        if (this.currentIdx == this.cards.length) {
          this.currentIdx = 0;
        }
      } else {
        if (this.currentIdx == 3) {
          //當視窗寬度小於768px時，只會顯示三個cardItem，
          //所以讓currentIndex最大到3就歸零，但是data還是保有6個cardItem的資料
          this.currentIdx = 0;
        }
      }
      //console.log(this.cards.length, this.currentIdx);
    }, 3000);
  },
  name: "",
  components: {
    CardContainer,
    CardItem,
  },
  data() {
    return {
      currentIdx: 0,
      cards: [
        { imgName: "a", info: "AAA" },
        { imgName: "b", info: "BBB" },
        { imgName: "c", info: "CCC" },
        { imgName: "d", info: "DDD" },
        { imgName: "e", info: "EEE" },
        { imgName: "f", info: "FFF" },
      ],
    };
  },
  methods: {
    bgUrl(idx) {
      return (
        // "url(" + require("@/assets/img/expanding-cards/a.jpg") + ")"
        "url(" +
        require(`@/assets/img/expanding-cards/${this.cards[idx].imgName}.jpg`) +
        ")"
      );
    },
    cardClick(idx) {
      this.currentIdx = idx;
      //console.log("hello", idx);
    },
  },
};
</script>
<style lang="scss">
.activeCard {
  width: 80%;
  color: "red";

  .info {
    display: block;
  }
}
</style>
