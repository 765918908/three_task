<template>
  <div class="businessGuide">
    <div class="head">
      <div class="container">

        <Head :currentIndex="5" />
      </div>
    </div>
    <div class="container mt30">
      <div class="font-size16 mb43">当前位置：中国</div>
      <div class="list-box box-shadow">
        <div class="flex justify-between list-title align-center">
          <div class="red-title">出生等级</div>
          <div class="small-text">共36个事项，其中36项可在线申办</div>
        </div>

        <table class="table"
               style="width:100%;">
          <tr>
            <th>实施清单事项名称</th>
            <th>目录清单事项名称</th>
            <th>主管部门</th>
            <th>行政区域</th>
            <th>操作</th>
          </tr>

          <tr v-for="(item,index) in 8"
              :key="index">
            <td>随第三方入户登记</td>
            <td>国（填）内出...</td>
            <td>广州公安局白云区</td>
            <td>禅城区</td>
            <td>
              <span style="margin-right:30px;"
                    class="red-text">在线办理</span>
              <span class="red-text">申请材料</span>
            </td>
          </tr>
        </table>
        <div style="width:100%;text-align:center;">
          <Page />

        </div>
      </div>
    </div>

    <Foot />

  </div>
</template>

<script>

import Head from "@/components/common/Head/Head"
import Foot from "@/components/common/Foot/Foot"
import Page from "@/components/common/Page/Page"
export default {
  name: 'BusinessGuide',
  components: {
    Head,
    Foot,
    Page
  }
}
</script>

<style lang="scss">
.red-text {
  color: #c20012;
  cursor: pointer;
}
.list-box {
  padding: 43px 60px;
  box-sizing: border-box;
  .table {
    tr {
      padding: 22px 0px;
      box-sizing: border-box;
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #e6e6e6;
      &:last-child {
        border-bottom: 0px solid #e6e6e6;
      }
      th {
        height: 35px;
        font-size: $font-size14;
        font-weight: 400;
        line-height: 57px;
        color: #949494;
        text-align: left;
        &:last-child {
          text-align: center;
        }
      }
      td {
        height: 16px;
        font-size: $font-size16;
        font-weight: 500;

        color: #000000;
        &:last-child {
          text-align: center;
        }
      }
    }
  }
  .list-title {
    padding-bottom: 22px;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid #c20012;
  }
}
</style>