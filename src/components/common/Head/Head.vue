<template>
  <div>
    <div class="top-nav flex justify-between align-center">
      <div class="top-logo flex align-center">
        <img class="logo-icon"
             src="@/assets/images/logo.png"
             alt="">
        <div class="font-color-FFFFFF">
          <div class="font-size24">三务公开便民服务平台</div>
          <div class="font-size14">三务公开，快捷了解</div>
        </div>
      </div>
      <div class="top-ul">
        <ul class="nav-link flex justify-between font-color-FFFFFF">
          <li>
            <div @click="goPage('/')"
                 :class="currentIndex==0?'active':''">首页</div>
          </li>
          <li>
            <div @click="goPage('/OpenAffairs')"
                 :class="currentIndex==1?'active':''">党务公开</div>
          </li>
          <li>
            <div @click="goPage('/OpenGov')"
                 :class="currentIndex==2?'active':''">政务公开</div>
          </li>
          <li>
            <div @click="goPage('/OpenFinan')"
                 :class="currentIndex==3?'active':''">财务公开</div>
          </li>
          <li>
            <div :class="currentIndex==4?'active':''">办事指南</div>
          </li>
          <li>
            <div :class="currentIndex==5?'active':''">我要投诉</div>
          </li>
        </ul>
      </div>
      <div class="icon-wrapp flex justify-between align-center">
        <img class="icon20"
             src="@/assets/images/sign.png"
             alt="">
        <img class="icon20"
             src="@/assets/images/search.png"
             alt="">
        <img class="icon20"
             src="@/assets/images/phone.png"
             alt="">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    goPage (url) {
      console.log(url)
      this.$router.push({ path: url });
    }
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scope>
.top-ul {
  width: 648px;
  min-width: 390px;
  .nav-link li div {
    cursor: pointer;
    display: inline-block;
    color: #ffffff;
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
  }
  .nav-link li .active {
    border-bottom: 3px solid #ffffff;
  }
}
</style>