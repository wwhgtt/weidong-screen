<template>
  <div class="page-header">
    <span class="header-title">工地监管数据可视化</span>
    <div class="header-time-clock">
      <span>{{dateStr}}</span>
      <span>{{getWeek()}}</span>
      <span>{{nowTime}}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'PageHeader',
  data() {
    return {
      dateStr: moment().format('YYYY.MM.DD'),
      nowTime: ''
    }
  },
  mounted() {
    this.getWeek();
    this.getTimes();
  },
  methods: {
    getWeek() {
      let week = moment(new Date()).day();
      switch (week) {
        case 1:
          return '星期一'
        case 2:
          return '星期二'
        case 3:
          return '星期三'
        case 4:
          return '星期四'
        case 5:
          return '星期五'
        case 6:
          return '星期六'
        case 0:
          return '星期日'
      }
    },
    timeFormate() {
      
    },
    getTimes() {
      setInterval(() => {
        this.nowTime = moment().format('hh:mm:ss');
      }, 1000);
    }
  }
}
</script>

<style lang="less" scoped>
  .page-header {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    line-height: 5.5vh;
    width: 100vw;
    height: 5.5vh;
    text-align: center;
    background-image: url('../../assets/header.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .header-title {
      font-size: 36px;
      font-weight: bold;
      color: #fff;
    }

    .header-time-clock {
      position: absolute;
      top: 0;
      right: 1.25vw;
      display: flex;
      line-height: 5.5vh;
      height: 5.5vh;
      color: #01FBFF;

      span {
        display: block;

        &:nth-child(2) {
          margin: 0 0.5vw;
        }

        &:last-child {
          font-size: 22px;
          font-weight: bold;
          color: #fff;
        }
      }
    }
  }
</style>