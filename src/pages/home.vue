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
// 各个街道的集合
const streetCollects = [
  {
    code: GMstreet1.streetCode,
    val: GMstreet1.centerPoint
  },
  {
    code: GMstreet2.streetCode,
    val: GMstreet2.centerPoint
  },
  {
    code: GMstreet3.streetCode,
    val: GMstreet3.centerPoint
  },
  {
    code: GMstreet4.streetCode,
    val: GMstreet4.centerPoint
  },
  {
    code: GMstreet5.streetCode,
    val: GMstreet5.centerPoint
  },
  {
    code: GMstreet6.streetCode,
    val: GMstreet6.centerPoint
  },
  {
    code: PSstreet1.streetCode,
    val: PSstreet1.centerPoint
  },
  {
    code: PSstreet2.streetCode,
    val: PSstreet2.centerPoint
  },
  {
    code: PSstreet3.streetCode,
    val: PSstreet3.centerPoint
  },
  {
    code: PSstreet4.streetCode,
    val: PSstreet4.centerPoint
  },
  {
    code: PSstreet5.streetCode,
    val: PSstreet5.centerPoint
  },
  {
    code: PSstreet6.streetCode,
    val: PSstreet6.centerPoint
  },
  {
    code: LHstreet1.streetCode,
    val: LHstreet1.centerPoint
  },
  {
    code: LHstreet2.streetCode,
    val: LHstreet2.centerPoint
  },
  {
    code: LHstreet3.streetCode,
    val: LHstreet3.centerPoint
  },
  {
    code: LHstreet4.streetCode,
    val: LHstreet4.centerPoint
  },
  {
    code: LHstreet5.streetCode,
    val: LHstreet5.centerPoint
  },
  {
    code: LHstreet6.streetCode,
    val: LHstreet6.centerPoint
  },
  {
    code: YTstreet1.streetCode,
    val: YTstreet1.centerPoint
  },
  {
    code: YTstreet2.streetCode,
    val: YTstreet2.centerPoint
  },
  {
    code: YTstreet3.streetCode,
    val: YTstreet3.centerPoint
  },
  {
    code: YTstreet4.streetCode,
    val: YTstreet4.centerPoint
  },
  {
    code: YTstreet5.streetCode,
    val: YTstreet5.centerPoint
  },
  {
    code: YTstreet6.streetCode,
    val: YTstreet6.centerPoint
  }
]
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
      // 当前选中的区的编号  默认为选中全深圳
      choosenMapCode: '440000440300',
      // 后端返回的点位信息
      markersInfo: [
        {
          companyName: '深圳伟栋国际贸易公司1',
          longitede: '114.313092',
          latitude: '22.686472',
          // 街道code
          streetCode: '001',
          // 所属区的code
          district: '440000440300440308'
        },
        {
          companyName: '深圳伟栋国际贸易公司2',
          longitede: '113.922763',
          latitude: '22.834232',
          // 街道code
          streetCode: '001',
          // 所属区的code
          district: '440000440300440310'
        },
        {
          companyName: '深圳伟栋国际贸易公司3',
          longitede: '113.909406',
          latitude: '22.763342',
          // 街道code
          streetCode: '002',
          // 所属区的code
          district: '440000440300440310'
        },
        {
          companyName: '深圳伟栋国际贸易公司4',
          longitede: '113.97477',
          latitude: '22.717508',
          // 街道code
          streetCode: '001',
          // 所属区的code
          district: '440000440300440310'
        },
        {
          companyName: '深圳伟栋国际贸易公司5',
          longitede: '113.987971',
          latitude: '22.758313',
          // 街道code
          streetCode: '001',
          // 所属区的code
          district: '440000440300440310'
        }
      ],
      // 地图标注图标
      markerIcon: require('../assets/marker.png'),
      // 地图标注点 marker集合
      markersCollect: [],
      // 地图标注点文字信息集合
      labelsCollect: [],
      // 地图最开始的缩放级别 用于控制地图缩放时的覆盖物的清除
      initScaleLevel: 11,
      // 后端数据处理后的数据格式 key为区号  值为各个区的详细数据
      districtOptions: {},
      // 后端数据处理后的数据格式 key为街道编号  值为各个街道的详细数据
      streetOptions: {}
    }
  },
  mounted() {
    console.log(BMPGL)
    const mapUnit = BMPGL(this.mapAK); // 加载引入BMap
    mapUnit.then(() => {
      this.initMap();
    });
    // 整合数据  这一步在页面中 需要等到接口数据返回后再整合
    // 用于存放区的信息
    const districtOptions = {};
    this.markersInfo.map(item => {
      if (districtOptions[item.district]) {
        districtOptions[item.district].children.push(item);
      } else {
        const target = shenZhenMapdata.find(temp => temp.code === item.district) || {};
        districtOptions[item.district] = {
          children: [item],
          code: target.code,
          // 区的中心点坐标
          coordinate: target.val
        }
      }
    })
    this.districtOptions = districtOptions;
    // 根据街道code再整合一遍数据
    const streetOptions = {};
    this.markersInfo.map(item => {
      if (streetOptions[item.streetCode]) {
        streetOptions[item.streetCode].children.push(item);
      } else {
        const target = streetCollects.find(temp => temp.code === item.streetCode) || {};
        streetOptions[item.streetCode] = {
          children: [item],
          code: target.code,
          // 区的中心点坐标
          coordinate: target.val
        }
      }
    })
    this.streetOptions = streetOptions;
  },
  methods: {
    // 清除标注物(点位和点位对应的文字信息)
    clearMarkerLabel() {
      // 清除标注点
      this.markersCollect.map(item => this.map.removeOverlay(item));
      this.markersCollect = [];
      // 清除标注点上的文字信息
      this.labelsCollect.map(item => {
        item.setStyle({
          display: 'none'
        })
      })
      this.labelsCollect = [];
    },
    initMap() {
      this.map = new window.BMapGL.Map("map-container", {
        enableMapClick: false,
        minZoom: 10,
        maxZoom: 18
      });
      this.map.setMapStyleV2({styleJson});
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
      // 初始值为深圳市 显示各个区的点位数量
      this.addMarkersForDistrict();
      // 为地图缩放添加监听事件
      const that = this;
      that.map.addEventListener("zoomend", function () {
        const level = that.map.getZoom();
        console.log(level);
        // 这里有个中间值
        if (level > 12 && that.initScaleLevel < 12) {
          // 表示是从最开始的深圳市切换到了详细区或者街道
          that.clearMarkerLabel();
          if (that.choosenMapCode === '440000440300') {
            // 如果当前选中的是全深圳 则展示各个点详细点位  需要伟东补充
          } else {
            // 如果当前选中的是某个区 则只展示某个区的详细点位 需要伟东补充
          }
        } else if (level > 12 && that.initScaleLevel > 12 ){
          // 在区里面不停的放大地图  什么也不用做
        } else if (level <= 12 && that.initScaleLevel > 12) {
          that.clearMarkerLabel();
          // 地图从区切换为全深圳 展示各个区的数量
          that.addMarkersForDistrict();
        }
        // 存放最新的缩放级别
        that.initScaleLevel = level;
      });
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
          // 禁止棱柱在地图调用clearOverlays时被清除掉
          // prism.disableMassClear();
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
          // 建立多边形覆盖物
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
    // 添加标注及文字信息
    addCoordinate(target) {
      // 创建小车图标
      const pointIcon = new window.BMapGL.Icon(this.markerIcon, new window.BMapGL.Size(40, 61));
      // 创建Marker标注
      const pt = new window.BMapGL.Point(target.coordinate[0], target.coordinate[1]);
      const marker = new window.BMapGL.Marker(pt, {
        icon: pointIcon
      });
      this.map.addOverlay(marker);
      // 将标注物存在内存中 用于清除
      this.markersCollect.push(marker);
      // 添加完标注图后需要再添加文字信息
      const opts = {
        // 指定文本标注所在的地理位置
        position: new window.BMapGL.Point(target.coordinate[0], target.coordinate[1]),
        // 设置文本偏移量  这个可以根据最后的效果调整
        offset: new window.BMapGL.Size(-15, -30)
      };
      // 创建文本标注对象
      const label = new window.BMapGL.Label(target.children.length, opts);
      // 自定义文本标注样式
      label.setStyle({
        color: 'blue',
        padding: '10px',
        fontSize: '16px',
        height: '20px',
        lineHeight: '20px',
        fontFamily: '微软雅黑',
        // 背景完全透明
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: 'none'
      });
      this.map.addOverlay(label);
      this.labelsCollect.push(label);
    },
    // 为区添加标注点位
    addMarkersForDistrict() {
      // 根据每个区的坐标来设置标注物(带数字的)
      Object.keys(this.districtOptions).map(item => {
        const target = this.districtOptions[item];
        this.addCoordinate(target);
      })
    },
    // 为区的街道添加标注点位
    addMarkersForStreet(streetCode) {
      // 根据每个街道的坐标来设置标注物(带数字的)
      Object.keys(this.streetOptions).map(item => {
        if (item === streetCode) {
          const target = this.streetOptions[item];
          this.addCoordinate(target);
        }
      })
    },
    // 左上角切换区
    handleAreaChange(value) {
      if (this.choosenMapCode === value) {
        return false;
      }
      this.choosenMapCode = value;
      // 清除所有的覆盖物和文字信息
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
        ].map((item, index) => this.boundaryTown(item, colorsList[index]));
        // 需要将覆盖物图标和文字信息添加到对应的街道上
        this.addMarkersForStreet('440000440300440310');
      } else if (value == '440000440300440308') {
        // 坪山区
        [
          PSstreet1.point,
          PSstreet2.point,
          PSstreet3.point,
          PSstreet4.point,
          PSstreet5.point,
          PSstreet6.point
        ].map((item, index) => this.boundaryTown(item, colorsList[index]));
        // 需要将覆盖物图标和文字信息添加到对应的街道上
        this.addMarkersForStreet('440000440300440308');
      } else if (value == '440000440300440301') {
        // 龙华区
        [
          LHstreet1.point,
          LHstreet2.point,
          LHstreet3.point,
          LHstreet4.point,
          LHstreet5.point,
          LHstreet6.point
        ].map((item, index) => this.boundaryTown(item, colorsList[index]));
        // 需要将覆盖物图标和文字信息添加到对应的街道上
        this.addMarkersForStreet('440000440300440301');
      } else if (value == '440000440300440307') {
        // 盐田区
        [
          YTstreet1.point,
          YTstreet2.point,
          YTstreet3.point,
          YTstreet4.point,
          YTstreet5.point,
          YTstreet6.point
        ].map((item, index) => this.boundaryTown(item, colorsList[index]));
        // 需要将覆盖物图标和文字信息添加到对应的街道上
        this.addMarkersForStreet('440000440300440307');
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