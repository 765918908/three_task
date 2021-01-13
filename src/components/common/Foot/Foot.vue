<template>
  <div>
    <div style="margin-top:190px;"
         class="container flex justify-between">
      <div class="flex web-box">
        <div class="item">
          <div class="mb30">网站信息</div>
          <div>网站信息</div>
          <div>网站信息</div>
          <div>网站信息</div>
        </div>
        <div class="item">
          <div class="mb30">网站信息</div>

          <div>网站信息</div>
          <div>网站信息</div>
          <div>网站信息</div>
        </div>
      </div>

      <div class="mobile-box">
        <div class="mobile-title flex align-center">
          <img class="mr20"
               src="@/assets/images/qrcode.png"
               alt="">
          <div>移动端</div>
        </div>
        <div class="flex justify-between">
          <div class="zf-web"
               style="width:155px;height:110px;margin-right:5px;">
            <img style="height:60px;"
                 src="@/assets/images/cavil.png"
                 alt="">
          </div>
          <div class="sign">
            <img class="icon40"
                 src="@/assets/images/red.png"
                 alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="container flex align-center">
        三务公开便民服务平台
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.foot {
  height: 60px;
  line-height: 60px;
  background: #f0f2f3;
  margin-top: 50px;
  font-size: 14px;
  color: #000000;
}
.mobile-box {
  .mobile-title {
    width: 260px;
    height: 55px;
    font-size: 14px;
    background: #f0f2f3;
    margin-bottom: 5px;
    box-sizing: border-box;
    padding: 15px;
  }
  .zf-web {
    background: #f0f2f3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sign {
    width: 100px;
    height: 110px;
    background: #f0f2f3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.web-box {
  width: 560px;
  height: 170px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 260px;
    height: 170px;
    background: #f0f2f3;
    box-sizing: border-box;
    padding: 25px 20px;
    font-size: 14px;
  }
}
</style>