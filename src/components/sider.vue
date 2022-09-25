<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      class="sider"
      theme="dark"
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu key="sub1">
        <span slot="title"
          ><a-icon type="layout" /><span>布局切换</span></span
        >
        <a-menu-item key="1">
          <div @click="changeLeft">
            <a-icon type="align-left" />Left
          </div>
        </a-menu-item>
        <a-menu-item key="2">
          <div @click="changeRight">
            <a-icon type="align-right" />Right
          </div>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub2">
        <span slot="title"
          ><a-icon type="bg-colors" /><span>主题切换</span></span
        >
        <a-menu-item key="3">
          <div @click="changeBlue">
          <a-tag color="#254665">blue</a-tag>
          </div>
        </a-menu-item>
        <a-menu-item key="4">
          <div @click="changePurple">
          <a-tag color="#7F609F">purple</a-tag>
          </div>
        </a-menu-item>
        <a-menu-item key="5">
          <div @click="changeGreen">
          <a-tag color="#86A6AB">green</a-tag>
          </div>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="6">
          <div v-on:click="getPdf()">
        <a-icon type="download" />
        <span>保存打印</span>
        </div>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import Bus from '../utils/bus.js';
export default {
  name: "SiderPage",
  data() {
    return {

    };
  },
  methods: {
    changeBlue(){
            Bus.$emit('changeBlue');
    },
    changePurple(){
            Bus.$emit('changePurple');
    },
    changeGreen(){
            Bus.$emit('changeGreen');
    },
    changeLeft(){
            Bus.$emit('changeLeft');
    },
    changeRight(){
            Bus.$emit('changeRight');
    }
  },
};
</script>

<style scoped>
/* 覆盖a-upload内icon和字体颜色 */
.ant-menu-item span{
    color: rgba(255, 255, 255, 0.65) !important;
}
.ant-menu-item i{
    color: rgba(255, 255, 255, 0.65) !important;
}
</style>