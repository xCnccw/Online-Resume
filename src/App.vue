<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <!-- <div class="logo"> -->
      <a-icon type="form" />
      <!-- </div> -->
      在线简历生成器
      <span style="float:right">{{getDateText()}}</span>
    </a-layout-header>
    <a-layout>
      <sider/>
      <a-layout style="padding: 0 24px 24px">
        <div style="margin: 16px 0"></div>
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '1245px',
          }"
        >
          <resume />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import resume from "./components/resume.vue";
import sider from "./components/sider.vue"
import commonMixin from './mixin/common.mixin'
export default {
  mixins:[commonMixin],
  components: { resume,sider },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style scoped>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
#components-layout-demo-top-side-2 {
  height: 100%;
}
#components-layout-demo-top-side-2 .header {
  padding-left: 24px;
  color: whitesmoke;
  font-size: 20px;
}
</style>
