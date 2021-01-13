<template>
  <div v-if="isShow"
       class="top-btn">
    <div class="nav-btn"
         @click="backtop"
         style="
background: #FFFFFF;">
      <img src="@/assets/images/toTop.png"
           alt="">
    </div>

    <div class="nav-btn"
         @click="goPage('/')"
         style="
background: #C20012;">
      <img src="@/assets/images/home.png"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    show () {
      this.isShow = true
    },
    hidden () {
      this.isShow = false
    },
    goPage (url) {
      if (this.$router.currentRoute.path == url) return;
      this.$router.push({ path: url });
    },
    backtop () {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scope>
.top-btn {
  position: fixed;
  height: 110px;
  right: 50px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  .nav-btn {
    width: 50px;
    height: 50px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      height: 20px;
      width: 20px;
    }
  }
}
</style>