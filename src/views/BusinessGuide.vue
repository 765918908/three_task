<template>
  <div class="businessGuide">
    <div class="head">
      <div class="container">

        <Head :currentIndex="4" />
      </div>
    </div>
    <div class="container mt30">
      <div class="font-size16 mb43">当前位置：中国</div>
      <div style="padding:49px 0px;margin-bottom:50px;"
           class="flex align-center border-box justify-around box-shadow">
        <div style="margin-right:20px">
          <div class="flex"
               style="margin-bottom:24px;">
            <div style="width:474px;height:68px;margin-right:15px"
                 class="flex align-center input-box">
              <input placeholder="请输入你想查询的内容"
                     type="text">
              <img class="icon24"
                   src="@/assets/images/search.png"
                   alt="">
            </div>
            <div class="search-btn">
              <div>搜索</div>
              <img class="icon14"
                   src="@/assets/images/arrow-right.png"
                   alt="">
            </div>
          </div>

          <div class="search-text">
            <span>最近搜索:</span>
            <span>档案</span>
            <span>人社</span>
            <span>学籍档案</span>
            <span>档案</span>
          </div>

        </div>
        <div class="ul-box">
          <div class="title">常用服务 </div>
          <ul>
            <li>公积金查询</li>
            <li>公积金查询</li>
            <li>公积金查询</li>
            <li>公积金查询</li>
            <li>公积金查询</li>
            <li>公积金查询</li>
          </ul>
        </div>
      </div>

      <div class="flex align-center justify-between box-shadow border-box option-select">
        <div class="left">
          <div class="title">一日之计时在于晨，越早预约办理，越早通过！</div>
          <div class="date">2020年11月30日 星期一</div>
        </div>
        <div class="right">
          <div class="item">投资项目审批平台</div>
          <div class="item">省内通办</div>
          <div class="item">省内通办</div>
          <div class="item">省内通办</div>
          <div class="item">更多</div>
        </div>
      </div>

      <div>
        <div class="mt100 content-title text-align-center font-size30 font-color-000000 line-height30">个人服务</div>
        <div class="opacity06 text-align-center font-color-000000 mt20 line-height19 mb40">Personal services</div>
        <div class="service-box">
          <div v-for="(item,index) in 8"
               :key="index"
               class="item">
            <img class="pic"
                 src="@/assets/images/plane.png"
                 alt="">
            <div class="title">护照、通行证</div>
            <div class="info">往来港澳再次签注！<br />
              首次办理普通护照！</div>
          </div>
        </div>
      </div>

      <div>
        <div class="mt100 content-title text-align-center font-size30 font-color-000000 line-height30">法人服务</div>
        <div class="opacity06 text-align-center font-color-000000 mt20 line-height19 mb40">Corporate services</div>
        <div class="service-box">
          <div v-for="(item,index) in 8"
               :key="index"
               class="item">
            <img class="pic"
                 src="@/assets/images/plane.png"
                 alt="">
            <div class="title">护照、通行证</div>
            <div class="info">往来港澳再次签注！<br />
              首次办理普通护照！</div>
          </div>
        </div>
      </div>

      <div>
        <div class="mt100 content-title text-align-center font-size30 font-color-000000 line-height30">便民查询</div>
        <div class="opacity06 text-align-center font-color-000000 mt20 line-height19 mb40">Convenient inquiry</div>
        <div class="query-box">
          <div class="item">公积金查询</div>
          <div class="item">公积金查询</div>
          <div class="item">公积金查询</div>
          <div class="item">公积金查询</div>

          <div class="item">公积金查询</div>
          <div class="item">公积金查询</div>
          <div class="item">公积金查询</div>
          <div class="item">公积金查询</div>

          <div class="item">公积金查询</div>
          <div class="item">公积金查询</div>
          <div class="item">公积金查询</div>
          <div class="item">公积金查询</div>
        </div>
      </div>

    </div>

    <Foot />

  </div>
</template>

<script>

import Head from "@/components/common/Head/Head"
import Foot from "@/components/common/Foot/Foot"
export default {
  name: 'BusinessGuide',
  components: {
    Head,
    Foot
  }
}
</script>

<style lang="scss">
.query-box {
  display: grid;
  grid-template-columns: repeat(4, 280px);
  grid-column-gap: 27px;
  grid-row-gap: 28px;
  .item {
    width: 280px;
    height: 70px;
    background: #ffffff;
    box-shadow: 0px 10px 28px rgba(132, 27, 20, 0.15);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;
    font-weight: bold;
    color: #000000;
  }
}
.service-box {
  padding: 50px auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 280px);
  grid-column-gap: 27px;
  grid-row-gap: 28px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    box-shadow: 0px 10px 28px rgba(132, 27, 20, 0.15);
    border-radius: 10px;
    padding: 50px 0;
    box-sizing: border-box;
    .pic {
      height: 70px;
      width: 70px;
    }
    .title {
      font-size: 18px;
      font-weight: bold;
      color: #000000;
      margin-top: 40px;
      margin-bottom: 13px;
    }
    .info {
      width: 162px;
      font-size: 18px;
      font-weight: 400;
      color: #949494;
    }
  }
}
.notice-item {
  width: 370px;
}
.option-select {
  padding: 35px 33px;
  .left {
    .title {
      font-size: 18px;
      color: #000000;
      margin-bottom: 20px;
    }
    .date {
      font-size: 18px;
      font-weight: 400;
      color: #949494;
    }
  }
  .right {
    display: flex;
    .item {
      height: 47px;
      background: #f3f3f3;
      border-radius: 10px;

      font-size: 18px;
      font-weight: 400;
      color: #000000;
      padding: 15px 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
    }
  }
}
.ul-box {
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  ul {
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 150px;
      margin-bottom: 25px;
      position: relative;
      padding-left: 15px;
      box-sizing: border-box;
      &::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: #000000;
        border-radius: 50%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .title {
    margin-bottom: 25px;
  }
}
</style>