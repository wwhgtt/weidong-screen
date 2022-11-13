<template>
  <div class="page-left">
    <div class="left-header">
      <div class="left-title-desc">
        <img src="../../assets/left-title-icon.png" />
        <span class="left-title-desc-detail">工地数量<span>(家)</span></span>
        <span class="left-title-count">481<img src="../../assets/left-count-icon.png" /></span>
      </div>
      <div class="left-search-area">
        <el-select class="left-area-select" v-model="areaValue" @change="handleAreaChange" placeholder="深圳市">
          <el-option
            v-for="item in areaOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="left-middle">
      <div class="left-middle-detail" v-for="item in countOption" :key="item.name">
        <img :src=item.url />
        <div class="left-middle-detail-desc">
          <span :class="item.class">{{item.count}}</span>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="left-bottom">
      <div class="title">预警列表</div>
      <div class="warning-list">
        <div class="warning-detail" v-for="item in warnList" :key="item.name">
          <div class="warning-detail-left">
            <div
              class="warning-detail-type"
            >
              {{item.type === "data" ? "数据预警": "AI视频预警"}}
            </div>
            <div class="warning-detail-label">
              <img src="../../assets/building_2_fill.png" />
              <span>{{item.name}}</span>
            </div>
          </div>
          <div class="warning-detail-right">
            <span>{{item.time}}</span>
            <span class="monitor-container">
              <span>监控</span>
              <img src="../../assets/warning-arrow.png" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'PageLeft',
  data() {
    return {
      areaOptions: [{
        value: '440000440300',
        label: '深圳市'
      }, {
        value: '440000440300440310',
        label: '光明区'
      }, {
        value: '440000440300440308',
        label: '坪山区'
      }, {
        value: '440000440300440301',
        label: '龙华区'
      }, {
        value: '440000440300440307',
        label: '盐田区'
      }],
      areaValue: '',
      countOption: [
        {
          url: require('../../assets/video.png'),
          count: 234,
          name: '视频监测点',
          class: 'left-middle-detail-desc-0'
        },
        {
          url: require('../../assets/stop.png'),
          count: 234,
          name: '远程喊停',
          class: 'left-middle-detail-desc-1'
        },
        {
          url: require('../../assets/speak.png'),
          count: 234,
          name: '总喊话数',
          class: 'left-middle-detail-desc-2'
        },
        {
          url: require('../../assets/warning.png'),
          count: 234,
          name: '当天预警',
          class: 'left-middle-detail-desc-3'
        },
        {
          url: require('../../assets/register.png'),
          count: 234,
          name: '总立案数',
          class: 'left-middle-detail-desc-4'
        }
      ],
      // 预警列表
      warnList: [
        {
          // 预警类型 值为video或者data
          type: 'video',
          name: '深圳市某某工地建筑工程名称1',
          time: '10:30:20'
        },
        {
          // 预警类型 值为video或者data
          type: 'data',
          name: '深圳市某某工地建筑工程名称2',
          time: '10:30:20'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    handleAreaChange(value) {
      this.$emit('area-change', value)
    }
  }
}
</script>

<style lang="less" scoped>
  .page-left {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 36.35vw;
    height: 90.62vh;
    padding: 1.76vh 0 2.12vh 1.04vw;
  }
  .left-header {
    display: flex;
    align-items: center;
  }
  .left-title-desc {
    display: flex;
    align-items: center;

    img {
      width: 2.65vw;
      height: 2.68vh;
    }

    .left-title-desc-detail {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      padding: 1.04vw;

      span {
        font-size: 15px;
      }
    }

    .left-title-count {
      position: relative;
      font-size: 58px;
      font-weight: bold;
      color: #fff;
      img {
        position: absolute;
        left: 0;
        bottom: -2.0vh;
        width: 100%;
        height: 100%;
      }
    }
  }
  .left-search-area {
    display: flex;
    align-items: center;
    margin-left: 3.125vw;

    .left-area-select {
      width: 8.85vw;
      height: 3.05vh;
    }
    /deep/ input {
      height: 3.05vh;
      border: none;
      background-image: url('../../assets/area-select.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
  .left-middle-detail {
    display: flex;

    img {
      width: 6.5vw;
      height: 9.07vh;
    }

    .left-middle-detail-desc {
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    .left-middle-detail-desc span:first-child {
      font-size: 34px;
      font-weight: bold;
      // color: #53EA8C;
      -webkit-background-clip: text; 
      -webkit-text-fill-color: transparent;
    }
    .left-middle-detail-desc .left-middle-detail-desc-0 {
      background-image: -webkit-linear-gradient(90deg, #53EA8C 0%, #AAFFCA 100%);
    }
    .left-middle-detail-desc .left-middle-detail-desc-1 {
      background-image: -webkit-linear-gradient(90deg, #2AD9F2 0%, #9EF3FF 100%);
    }
    .left-middle-detail-desc .left-middle-detail-desc-2 {
      background-image: -webkit-linear-gradient(90deg, #2AD9F2 0%, #9EF3FF 100%);
    }
    .left-middle-detail-desc .left-middle-detail-desc-3 {
      background-image: -webkit-linear-gradient(90deg, #FF0032 0%, #FF5F7E 100%);
    }
    .left-middle-detail-desc .left-middle-detail-desc-4 {
      background-image: -webkit-linear-gradient(90deg, #F5E81C 0%, #FFF77C 100%);
    }
    .left-middle-detail-desc span:last-child {
      font-size: 21px;
      font-weight: bold;
      color: #99D2FF;
    }
  }
  .left-bottom {
    .title {
      font-size: 18px;
      font-weight: bold;
      width: 17.24vw;
      padding-left: 2.34vw;
      color: #fff;
      background-image: url('../../assets/warn-list-bg.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position-y: 0px;
    }
  }
  .warning-list {
    display: flex;
    flex-direction: column;
    width: 17.23vw;
    height: 25vh;
    overflow-y: auto;

    .warning-detail {
      display: flex;
      justify-content: space-between;
      height: 6.1vh;
      margin-bottom: 2px;
      padding: 0.8vh 0.52vw;
      box-sizing: border-box;
      background: rgba(0, 92, 136, 0.8);

      &:last-child {
        margin-bottom: 0;
      }
    }
    .warning-detail-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .warning-detail-type {
      font-size: 16px;
      width: 4.79vw;
      height: 2.22vh;
      text-align: center;
      background: rgba(225, 32, 0, 0.2);
      border: 1px solid #E73E22;
      border-radius: 2px;
    }
    .warning-detail-label {
      font-size: 12px;
      display: flex;
      color: #fff;
      img {
        width: 0.78vw;
        height: 0.78vw;
        margin-right: 0.39vw;
      }
    }
  }
  .warning-detail-right {
    font-size: 11px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;

    .monitor-container {
      color: #01FBFF;
    }
  }
</style>