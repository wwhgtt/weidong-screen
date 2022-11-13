<template>
  <div class="page-right">
    <div class="select-container">
      <div class="select-item" :style="item.style" v-for="item in selectOption" :key="item.type">
        {{item.label}}
        <img :src="item.rightIcon" />
      </div>
    </div>
    <div class="rank-container">
      <div class="rank-top-content">
        <div class="rank-type-container">
          <span
            v-for="item in rankTypes"
            :key="item.value"
            :class="item.value === selectRankType ? 'rank-type-selected': ''"
            @click="() => handleSwitchRankType(item)"
          >
            {{item.label}}
          </span>
        </div>
        <div class="rank-detail-container">
          <div class="rank-detail-item" v-for="(item, index) in rankItems" :key="index">
            <div class="rank-sort">
              <span>{{index + 1}}</span>
              <img :src="index > 3 ? rankImages[3]: rankImages[index]" />
            </div>
            <div class="rank-info-desc">
              <p>{{item.label}}</p>
              <div class="rank-number-bg">
                <div class="rank-detail-process"></div>
              </div>
            </div>
            <div>
              <span>{{item.count}}</span>
              <span>次</span>
            </div>
          </div>
        </div>
      </div>
      <div class="rank-bottom-content">
        <div class="rank-bottom-title">
          <img src="../../assets/rank-bottom-bg.png" />
          <p>
            <span>日喊停次数</span>
            <span>单位：次</span>
          </p>
        </div>
        <div id="echart-container">
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
  name: "PageRight",
  data() {
    return {
      selectOption: [
        {
          type: 'stop',
          label: '喊停工地排名',
          style: {
            color: '#FFAE00',
            background: 'rgba(55, 57, 66, 0.54)',
            border: '1px solid #F0C85C'
          },
          rightIcon: require('../../assets/stop-choosen.png')
        },
        {
          type: 'register',
          label: '立案次数排名',
          style: {
            color: '#fff',
            background: 'rgba(12, 73, 79, 0.54)',
            border: '1px solid #0C494F'
          },
          rightIcon: require('../../assets/stop-choosen.png')
        }
      ],
      rankTypes: [
        {
          label: '本年',
          value: 'year'
        },
        {
          label: '本月',
          value: 'month'
        }
      ],
      selectRankType: 'year',
      rankImages: [
        require('../../assets/range1.png'),
        require('../../assets/range2.png'),
        require('../../assets/range3.png'),
        require('../../assets/range.png')
      ],
      rankItems: [
        {
          label: '深圳市某某喊停工地工程名称1',
          count: 123,
        },
        {
          label: '深圳市某某喊停工地工程名称2',
          count: 13,
        },
        {
          label: '深圳市某某喊停工地工程名称3',
          count: 23,
        },
        {
          label: '深圳市某某喊停工地工程名称4',
          count: 83,
        },
        {
          label: '深圳市某某喊停工地工程名称5',
          count: 93,
        },
        {
          label: '深圳市某某喊停工地工程名称6',
          count: 93,
        },
        {
          label: '深圳市某某喊停工地工程名称7',
          count: 93,
        },
        {
          label: '深圳市某某喊停工地工程名称8',
          count: 93,
        }
      ]
    }
  },
  mounted() {
    this.registerEcharts();
  },
  methods: {
    handleSwitchRankType(item) {
      if (item.value === this.selectRankType) {
        return false;
      }
      this.selectRankType = item.value;
    },
    registerEcharts() {
      const chartDom = document.getElementById('echart-container');
      const myChart = echarts.init(chartDom);
      let option = {
        grid: {
          top: 40,
          bottom: 20
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };
      myChart.setOption(option);
    }
  }
}
</script>
<style lang="less" scoped>
  .page-right {
    position: absolute;
    top: 7.87vh;
    right: 1.04vw;
    display: flex;
    width: 29.58vw;
    height: 90.62vh;
  }
  .select-item {
    font-size: 14px;
    font-weight: bold;
    position: relative;
    width: 6.25vw;
    text-align: center;
    margin-bottom: 15px;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    img {
      position: absolute;
      top: 2.5px;
      right: -14px;
      width: 6.6px;
      height: 14.7px;
    }
  }
  .rank-container {
    flex: 1;
    margin-left: 24px;

    .rank-top-content {
      padding: 12px 10px;
      box-sizing: border-box;
      max-height: 65.2vh;
      overflow-y: auto;
      background:  rgba(0, 65, 96, 0.8);
    }
  }

  .rank-type-container {
    display: flex;
    span {
      font-size: 14px;
      display: block;
      padding: 9px 22px;
      color: #fff;
      border: 1px solid #527C92;
      margin-right: 5px;
      cursor: pointer;

      &:last-child {
        margin-right: 0;
      }
    }
    .rank-type-selected {
      background: rgba(0, 144, 255, 0.11);
      border: 1px solid #00E4FF;
    }
  }
  .rank-detail-item {
    display: flex;
    align-items: center;

    .rank-info-desc {
      flex: 1;
    }

    .rank-number-bg {
      display: flex;
      align-items: center;
      height: 10px;
      padding: 0 2px;
      background: rgba(10,19,27,0.4);
    }

    .rank-detail-process {
      width: 100px;
      height: 6px;
      background: linear-gradient(90deg, #00D8FF, rgba(0,216,255,0));;
    }

    .rank-sort {
      position: relative;
      width: 20.8px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;

      span {
        position: absolute;
        z-index: 1;
        font-size: 16px;
        font-weight: bold;
        display: block;
        line-height: 24px;
        height: 24px;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 20.8px;
        height: 24px;
      }
    }
  }
  .rank-bottom-title {
    position: relative;
    margin-top: 15px;

    img {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
    }

    p {
      position: absolute;
      z-index: 1;
      left: 39px;
      bottom: -20px;
      color: #fff;

      span:first-child {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  #echart-container {
    height: 19.72vh;
  }
</style>