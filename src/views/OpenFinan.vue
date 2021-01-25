<template>
  <div class="home">
    <div class="head">
      <div class="container">

      </div>
    </div>
    <div class="container mt30">
      <div class="font-size16 mb43">当前位置：{{this.$route.query.name}}</div>
      <div class="notice flex justify-between">
        <div v-for="(item,index) in 3"
             :key="index"
             class="notice-item  box-shadow border-box pd-20-30">
          <div class="flex justify-between align-center mb15">
            <div class="font-size24">公告栏</div>
            <div class="font-color-949494 font-size16 pointer">更多>></div>
          </div>
          <div class="ul-box scroll-y"
               style="height:510px;">

            <div class="item"
                 v-for="(item,index) in 5"
                 :key="index">
              <div class="item-title">市委第四巡视组向闵行区反馈巡视情况</div>
              <div class="item-info">
                <div>组织部</div>
                <div>2020-10-17</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="container mt80">
      <div class="flex box-shadow">
        <div class="left w440 pd-l-43 pd-tb-60 border-box">
          <div class="red-title mb30">公开指标</div>
          <div @click="handleTatgetChoice(index)"
               v-for="(item,index) in 4"
               :key="index"
               class=" item mb50 font-color-1B1B1B pointer">
            <div :class="targetIndex==index?'active-select-box':''">
              党组织任期工作目标、阶段性工作部署、重点
              工作任务及落实情况
            </div>
          </div>
        </div>
        <div class="right w760 border-box pd-43-60 ">
          <div class="red-title mb30">工作机构</div>
          <div>
            <div class="ul-box"
                 style="padding-right:58px;">
              <div class="item"
                   v-for="(item,index) in 5"
                   :key="index">
                <div class="item-title">市委第四巡视组向闵行区反馈巡视情况</div>
                <div class="item-content">
                  近日，市委第四巡视组向闵行区反馈巡视情况。市委组织部常务副部长、市委巡视工作…
                  近日，市委第四巡视组向闵行区反馈巡视情况。市委组织部常务副部长、市委巡视工作…
                </div>
                <div class="item-info">
                  <div>组织部</div>
                  <div>2020-10-17</div>
                </div>
              </div>
            </div>
          </div>
          <div style="width: 100%;text-align:center;">
            <Page />

          </div>

        </div>
      </div>
    </div>

    <div class="container mt80">
      <div class="flex box-shadow">
        <div class="left w440 pd-l-43 pd-tb-60 border-box">
          <div class="red-title mb30">公开指标</div>
          <div @click="handleTatgetChoice(index)"
               v-for="(item,index) in 4"
               :key="index"
               class=" item mb50 font-color-1B1B1B pointer">
            <div :class="targetIndex==index?'active-select-box':''">
              党组织任期工作目标、阶段性工作部署、重点
              工作任务及落实情况
            </div>
          </div>
        </div>
        <div class="right w760 border-box pd-43-60 ">
          <div class="red-title mb30">工作机构</div>
          <div>
            <div class="ul-box"
                 style="padding-right:58px;">
              <div class="item"
                   v-for="(item,index) in 5"
                   :key="index">
                <div class="item-title">市委第四巡视组向闵行区反馈巡视情况</div>
                <div class="item-content">
                  近日，市委第四巡视组向闵行区反馈巡视情况。市委组织部常务副部长、市委巡视工作…
                  近日，市委第四巡视组向闵行区反馈巡视情况。市委组织部常务副部长、市委巡视工作…
                </div>
                <div class="item-info">
                  <div>组织部</div>
                  <div>2020-10-17</div>
                </div>
              </div>
            </div>
          </div>
          <div style="width: 100%;text-align:center;">
            <Page />

          </div>

        </div>
      </div>
    </div>
    <Foot />

  </div>
</template>

<script>

import Foot from "@/components/common/Foot/Foot"
import Page from "@/components/common/Page/Page"
export default {
  name: 'Home',
  data () {
    return {
      targetIndex: 0,
    }
  },
  methods: {
    handleTatgetChoice (index) {
      this.targetIndex = index
    }
  },
  components: {
    Foot,
    Page
  }
}
</script>

<style lang="scss">
.notice-item {
  width: 370px;
}
.ul-box {
  height: unset;
  .item {
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>