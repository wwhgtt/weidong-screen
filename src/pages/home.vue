<template>
  <div id="home">
    <PageHeader />
    <div id="map-container"></div>
    <PageLeft @area-change="handleAreaChange" />
    <PageRight />
  </div>
</template>

<script>
import PageHeader from '../components/header/index.vue';
import PageLeft from '../components/pageLeft/index.vue';
import PageRight from '../components/pageRight/index.vue';
import {BMPGL, styleJson, shenZhenMapdata} from '../utils/map';
// 光明
import GMstreet1 from '../utils/mapJson/GM/street-fenghuang.json';
import GMstreet2 from '../utils/mapJson/GM/street-gongming.json';
import GMstreet3 from '../utils/mapJson/GM/street-guangming.json';
import GMstreet4 from '../utils/mapJson/GM/street-matian.json';
import GMstreet5 from '../utils/mapJson/GM/street-xinhu.json';
import GMstreet6 from '../utils/mapJson/GM/street-yutang.json';
// 坪山
import PSstreet1 from '../utils/mapJson/PS/street-bilin.json';
import PSstreet2 from '../utils/mapJson/PS/street-kengzi.json';
import PSstreet3 from '../utils/mapJson/PS/street-longtian.json';
import PSstreet4 from '../utils/mapJson/PS/street-maluan.json';
import PSstreet5 from '../utils/mapJson/PS/street-pingshan.json';
import PSstreet6 from '../utils/mapJson/PS/street-shijing.json';
// import PSstreet7 from '../utils/mapJson/PS/street-gongye.json';
// 龙华
import LHstreet1 from '../utils/mapJson/LH/street-dalang.json';
import LHstreet2 from '../utils/mapJson/LH/street-fucheng.json';
import LHstreet3 from '../utils/mapJson/LH/street-guanhu.json';
import LHstreet4 from '../utils/mapJson/LH/street-guanlan.json';
import LHstreet5 from '../utils/mapJson/LH/street-longhua.json';
import LHstreet6 from '../utils/mapJson/LH/street-minzhi.json';
// 盐田
import YTstreet1 from '../utils/mapJson/YT/street-haishan.json';
import YTstreet2 from '../utils/mapJson/YT/street-meisha.json';
import YTstreet3 from '../utils/mapJson/YT/street-sjt.json';
import YTstreet4 from '../utils/mapJson/YT/street-sjtbsq.json';
import YTstreet5 from '../utils/mapJson/YT/street-yt.json';
import YTstreet6 from '../utils/mapJson/YT/street-ytgbsq.json';
const colorsList = ["#ffe0b6","#bcdeff","#e2d4ff","#b4f1e9","#ffc9be","#d1d1ff","#b3f7c5","#ffcae0"]
export default {
  name: 'HomePage',
  components: {
    PageHeader,
    PageLeft,
    PageRight
  },
  data() {
    return {
      mapAK: '17b7Lhnf06x0CMZLI3aYn5ZIdMxfGcyc',
      longitude: '114.168698',
      latitude: '22.609057',
      // 当前选中的区的编号
      choosenMapCode: '440000440300',
    }
  },
  mounted() {
    console.log(BMPGL)
    const mapUnit = BMPGL(this.mapAK); // 加载引入BMap
    mapUnit.then(() => {
      this.initMap();
    });
  },
  methods: {
    initMap() {
      this.map = new window.BMapGL.Map("map-container", {
        enableMapClick: false,
        minZoom: 10,
        maxZoom: 18
      });
      // 新建地图实例，enableMapClick:false ：禁用地图默认点击弹框
      // 初始化位置
      const point = new window.BMapGL.Point(
        this.longitude,
        this.latitude
      );
      this.map.centerAndZoom(point, 11);
      this.map.enableScrollWheelZoom();
      this.createPrism('深圳市');
      // 添加各个区的边界
      shenZhenMapdata.forEach((item,index) => {
        this.boundaryFun(item.name, colorsList[index])
      })
      this.map.setMapStyleV2({styleJson});
    },
    // 棱柱
    createPrism(name) {
      const bd = new window.BMapGL.Boundary();
      bd.get(name, (rs) => {
        // 行政区域的点有多少个
        const count = rs.boundaries.length;
        for (let i = 0; i < count; i++) {
          const path = [];
          const str = rs.boundaries[i].replace(' ', '');
          const points = str.split(';');
          for (let j = 0; j < points.length; j++) {
            const lng = points[j].split(',')[0];
            const lat = points[j].split(',')[1];
            path.push(new window.BMapGL.Point(lng, lat));
          }
          // 添加棱柱覆盖物
          const prism = new window.BMapGL.Prism(path, 8000, {
            topFillColor: '#00deff',
            topFillOpacity: 0.6,
            sideFillColor: '#00deff',
            sideFillOpacity: 0.3
          });
          this.map.addOverlay(prism);
        }
        // 地图倾斜25度
        this.map.setTilt(25);
      });
    },
    // 深圳市添加各个区的轮廓
    boundaryFun(name,fillColor) {
      const bdary = new window.BMapGL.Boundary();
      bdary.get(name, rs => {       //获取行政区域
        const count = rs.boundaries.length; //行政区域的点有多少个
        for(let i = 0; i < count; i++){
          const ply = new window.BMapGL.Polygon(rs.boundaries[i],{
            strokeWeight: 1, //设置多边形边线线粗
            strokeOpacity: 0.9, //设置多边形边线透明度0-1
            StrokeStyle: "solid", //设置多边形边线样式为实线或虚线，取值 solid 或 dashed
            strokeColor: "#d300a4", //设置多边形边线颜色
            fillColor: fillColor, //设置多边形填充颜色
            fillOpacity:0.1 //设置多边形填充颜色透明度0-1  注：标红的地放你们可以去掉看一下效果，自己体验一下
          });
          //建立多边形覆盖物
          this.map.addOverlay(ply);  //添加覆盖物
        }
      })
    },
    // 为单个区的街道添加轮廓
    boundaryTown(data, fillColor) {
      const ply = new window.BMapGL.Polygon(data, {
        strokeWeight: 1, //设置多边形边线线粗
        strokeOpacity: 0.9, //设置多边形边线透明度0-1
        StrokeStyle: "solid", //设置多边形边线样式为实线或虚线，取值 solid 或 dashed
        strokeColor: "#d300a4", //设置多边形边线颜色
        fillColor: fillColor, //设置多边形填充颜色
        fillOpacity: 0.1 //设置多边形填充颜色透明度0-1  注：标红的地放你们可以去掉看一下效果，自己体验一下
      });
      //建立多边形覆盖物
      this.map.addOverlay(ply);
    },
    // 左上角切换区
    handleAreaChange(value) {
      if (this.choosenMapCode === value) {
        return false;
      }
      this.choosenMapCode = value;
      this.map.clearOverlays();
      const target = shenZhenMapdata.find(item => item.code === value);
      if (target) {
        this.createPrism(target.name);
        const point = new window.BMapGL.Point(
          target.val[0],
          target.val[1]
        );
        this.map.centerAndZoom(point, 12);
      }
      if (value === '440000440300') {
        this.initMap();
      } else if (value === '440000440300440310') {
        // 光明区
        [
          GMstreet1.point,
          GMstreet2.point,
          GMstreet3.point,
          GMstreet4.point,
          GMstreet5.point,
          GMstreet6.point
        ].map((item, index) => this.boundaryTown(item, colorsList[index]))
      } else if (value == '440000440300440308') {
        // 坪山区
        [
          PSstreet1.point,
          PSstreet2.point,
          PSstreet3.point,
          PSstreet4.point,
          PSstreet5.point,
          PSstreet6.point
        ].map((item, index) => this.boundaryTown(item, colorsList[index]))
      } else if (value == '440000440300440301') {
        // 龙华区
        [
          LHstreet1.point,
          LHstreet2.point,
          LHstreet3.point,
          LHstreet4.point,
          LHstreet5.point,
          LHstreet6.point
        ].map((item, index) => this.boundaryTown(item, colorsList[index]))
      } else if (value == '440000440300440307') {
        // 盐田区
        [
          YTstreet1.point,
          YTstreet2.point,
          YTstreet3.point,
          YTstreet4.point,
          YTstreet5.point,
          YTstreet6.point
        ].map((item, index) => this.boundaryTown(item, colorsList[index]))
      }
    }
  }
}
</script>

<style>
  #map-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100vw;
    height: 100vh;
  }
</style>