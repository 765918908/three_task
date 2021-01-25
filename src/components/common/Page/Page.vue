<template>
  <div style="display:inline-block;">
    <div class="page">

      <div class="page-more">
        <img src="@/assets/images/before_page.png"
             alt="">
      </div>

      <div class="page-box">
        <div class="page-item active">1</div>
        <div class="page-item">2</div>
        <div class="page-item">3</div>
        <div class="page-item">4</div>
        <div class="page-item">...</div>
      </div>

      <div class="page-more">
        <img src="@/assets/images/next_page.png"
             alt="">
      </div>

    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">
.page {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 53px;
  // margin-right: 50px;
  margin-top: 60px;
  .page-box {
    display: flex;
    align-items: center;
    justify-content: center;

    .page-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 47px;
      height: 40px;
      font-size: $font-size16;
      font-weight: 500;
      line-height: 40px;
      color: #000000;
      margin-right: 8px;
      cursor: pointer;
    }
    .active {
      background: #c20012;
      border-radius: 5px;
      font-size: $font-size16;
      font-weight: 500;
      color: #ffffff;
    }
  }
  .page-more {
    width: 47px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      height: 16px;
    }
  }
}
</style>