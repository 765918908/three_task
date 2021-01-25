<template>
  <div class="nav-bar"
       :style="{backgroundColor: `rgba(194, 0, 18, ${opacity})`}">
    <div class="container top-nav flex justify-between align-center">
      <div class="top-logo flex align-center">
        <!-- <img class="logo-icon"
             src="@/assets/images/logo.png"
             alt=""> -->
        <div style="width:50px;"></div>
        <div class="font-color-FFFFFF">
          <div class="font-size24">民生平台</div>
          <div class="font-size14">服务于民,便利于名</div>
        </div>
      </div>
      <div class="top-ul">
        <div class="active"
             :style="{left:`${(currentIndex)*108-1}px`}"></div>
        <ul class="nav-link flex  font-color-FFFFFF">
          <li v-for="(item,index) in list"
              :key="index">
            <div @click="goPage(item.url,item.name,index)">{{item.name}}</div>
          </li>

        </ul>
      </div>
      <div style="width:10px;"></div>

      <div class="icon-wrapp flex justify-between align-center">
        <div class="flex align-center">
          <img class="icon20"
               style="margin-right:0px"
               src="@/assets/images/sign.png"
               alt="">
          <div class="city">{{returnCitySN}}</div>
        </div>

        <img class="icon20"
             src="@/assets/images/search.png"
             alt="">
        <div class="icon20 qrcode-head">
          <img class="icon20"
               src="@/assets/images/phone.png"
               alt="">

        </div>

      </div>
    </div>
  </div>

</template>


<script>

export default {
  data () {
    return {
      currentIndex: 0,
      returnCitySN: "",
      list: [
        { url: '/', name: '首页' },
        { url: '/OpenAffairs', name: '党务公开' },
        { url: '/OpenGov', name: '政务公开' },
        { url: '/OpenFinan', name: '财务公开' },
        { url: '/BusinessGuide', name: '办事指南' },
        { url: '/Warn', name: '我要投诉' }
      ]
    }
  },
  methods: {
    goPage (url, name, index) {
      this.currentIndex = index
      if (url == "/Warn") {
        window.open("http://www.12380.gov.cn/")
        return
      }
      if (this.$router.currentRoute.path == url) return;
      this.$router.push({ path: url, query: { name: name } });
    },

    getAddress () {

    }


  },
  mounted () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    this.opacity = scrollTop / (scrollTop + 100)
    let returnCitySN = window.returnCitySN
    console.log('returnCitySN..', returnCitySN.cname)
    this.returnCitySN = returnCitySN.cname
  },
  props: {

  },
}
</script>

<style lang="scss" scope>
.qrcode-head {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.qrcode-head {
  &:hover {
    &::after {
      content: "";
      position: absolute;
      top: 30px;
      right: 0px;
      width: 200px;
      height: 200px;
      background: url(~@/assets/images/qrcode-head.png) center no-repeat;
      background-size: 100%;
    }
  }
}
.icon-wrapp {
  position: relative;
  img {
    margin: 0 10px;
    cursor: pointer;
  }
}
.city {
  color: #ffffff;
  margin: 0 10px;
}
.nav-bar {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;

  padding-bottom: 5px;
  z-index: 1;
}
.top-ul {
  width: 648px;
  position: relative;
  min-width: 390px;
  .active {
    position: absolute;
    transition: all 0.5s;
    transform: translateX(50%);
    height: 3px;
    width: 54px;
    background-color: #ffffff;
    bottom: 0px;
  }
  .nav-link li {
    flex-basis: 108px;
  }
  .nav-link li div {
    cursor: pointer;
    // display: inline-block;
    color: #ffffff;
    height: 60px;
    // line-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
  }
  // .nav-link li .active {
  //   border-bottom: 3px solid #ffffff;
  // }
}
</style>