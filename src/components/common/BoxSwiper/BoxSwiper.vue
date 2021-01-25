<template>
  <div class="swiper">
    <div @click="preHandle"
         class="left arrow">
      <img src="@/assets/images/left-arrow.png"
           alt="">
    </div>
    <div ref="swiperBox"
         class="swiper-box">
      <div class="swiper-item"
           :style="{left:`${moveLeft}px`}">
        <div class="swiper-li-wrapp"
             :style="{width:`${moveDistance}px`}">
          <div class="swiper-li"
               v-for="(item,index) in 7"
               :key="index">
            <div class="swiper-pic"></div>
            <div>李家骥</div>
            <div>党委书记</div>
          </div>
        </div>
        <div class="swiper-li-wrapp"
             :style="{width:`${moveDistance}px`}">
          <div class="swiper-li"
               v-for="(item,index) in 7"
               :key="index">
            <div class="swiper-pic"></div>
            <div>李家骥</div>
            <div>党委书记</div>
          </div>
        </div>

      </div>

    </div>
    <div @click="nextHandle"
         class="right arrow">
      <img src="@/assets/images/right-arrow.png"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    preHandle () {
      if (this.moveLeft == 0) return
      this.moveLeft += this.moveDistance
    },
    nextHandle () {
      if (this.moveLeft == -1 * this.moveDistance * 1) return
      this.moveLeft -= this.moveDistance
    }
  },
  mounted () {
    this.moveDistance = this.$refs.swiperBox.clientWidth
  },
  data () {
    return {
      moveDistance: 0,
      moveLeft: 0
    };
  },
  props: {

  },

  components: {},


};
</script>

<style lang="scss" scope>
.swiper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .swiper-box {
    width: 1015px;
    height: 100%;
    position: relative;
    overflow: hidden;
    margin: 0px 38px;

    .swiper-item {
      height: 100%;
      width: 100%;
      transition: all 0.5s;
      position: absolute;
      display: flex;

      .swiper-li-wrapp {
        display: flex;
        justify-content: space-around;
        height: 100%;
        width: 100%;
        .swiper-li {
          flex-basis: 115px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .swiper-pic {
            width: 115px;
            height: 150px;
            background: #727272;
            box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.16);
            border-radius: 5px;
            box-sizing: border-box;
            flex-shrink: 0;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  .arrow {
    width: 40px;
    height: 40px;
    background: #ffffff;
    box-shadow: 0px -6px 20px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
