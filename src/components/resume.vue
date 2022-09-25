<template>
  <div class="resume" id="pdfDom">
    <div class="sider" ref="sider">
      <div class="avatar">
<!-- <div ref="yourModal"> -->
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 2">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          Upload
        </div>
      </div>
    </a-upload>
     <!-- </div> -->
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
        </div>
      <div class="Personal">
        <div class="message" contenteditable="true">
          <a-icon type="user" /> 22岁<br />
        </div>
        <div class="message" contenteditable="true">
          <a-icon type="environment" /> 广东省深圳市<br />
        </div>
        <div class="message" contenteditable="true">
          <a-icon type="phone" /> 13677788888<br />
        </div>
        <div class="message" contenteditable="true">
          <a-icon type="mail" /> 8888888@qq.com
        </div>

        <div class="technology">
          <p><a-icon type="thunderbolt" />技术栈</p>
          <div class="language" contenteditable="true">
          <p>html css</p>
          <p>javascript</p>
          <p>vue全家桶</p>
          <p>go java c#</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content" ref="content">
      <div class="myname">
        姓名
        <div class="input" contenteditable="true">温小川</div>
      </div>
      <div class="job">
        求职目标:
        <div class="input" contenteditable="true">前端工程师</div>
      </div>
      <div class="module">
        <div class="education">
          <a-icon type="book" theme="filled" />教育经历
          <div class="line" ref="line"></div>
        </div>
        <div class="precis">
          <div class="time input" contenteditable="true">2018.09-2022.07</div>
          <div class="name input" contenteditable="true">北京大学</div>
          <div class="major input" contenteditable="true">软件工程</div>
        </div>
        <div class="text" contenteditable="true">
          <p>
            主修课程：c++,java,数据结构，数据库概论，数据库应用，数字逻辑，汇编语言，EDA技术，操作系统，计算机网络，Linux操作系统，
            计算机图形学，编译原理。
          </p>
          <p>GPA: 3.6/4.0</p>
          <p>国家奖学金（2018-2019）</p>
        </div>
      </div>

      <div class="module">
        <div class="education">
          <a-icon type="calendar" theme="filled" />实习经历
          <div class="line" ref="line"></div>
        </div>
        <div class="precis">
          <div class="time input" contenteditable="true">2021.7-2021.9</div>
          <div class="name input" contenteditable="true">字节跳动</div>
          <div class="major input" contenteditable="true">前端工程师助理</div>
        </div>
        <div class="text" contenteditable="true">
          <p>
            1、协助产品经理完成XX图像处理小程序的流程和原型设计、UI设计，对需求进行整理和分析，并整理输出需求文档。</p>

<p>2、与技术、运营等部门协同讨论图像处理小程序的优化等工作，并协同各部门进行上线前数据、技术准备。</p>

<p>3、推动小程序上线，上线后监测用户拉新、留存等数据并汇报，每周根据数据提出优化意见和需求，上线后1个月获得8万新用户，次月留存率超过13%</p>
        </div>
      </div>

      <div class="module">
        <div class="education">
          <a-icon type="experiment" theme="filled" />项目经历
          <div class="line"></div>
        </div>
        <div class="precis">
          <div class="time input" contenteditable="true">2018.09-2022.07</div>
          <div class="name input" contenteditable="true">研究生导师双选系统</div>
        </div>
        <div class="text" contenteditable="true">
          <p>1、设计用户需求问卷,对用户需求进行问卷调研，撰写相关调研报告</p>
          <p>2 、完成产品的信息架构和功能架构以及需求流程分析,撰写产品需求分析说明书</p>
          <p>3、对产品原型进行UI界面设计，实现相关设计理念及想法最终完成产品开发</p>
        </div>
      </div>

      <div class="module">
        <div class="education">
          <a-icon type="calendar" theme="filled" />自我评价
          <div class="line" ref="line"></div>
        </div>

        <div class="text" contenteditable="true">
          <p>
            本人做事稳重，对待工作认真，责任心较强，待人真诚，善于沟通，时刻保持学习，积极拥抱变化。</p>

<p>喜欢前端开发，具备一定的软件分析、设计、开发和应用能力，拥有较强的学习能力与团队精神，能够

很快的适应工作环境。</p>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Bus from '../utils/bus.js';
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
  name: "ResumePage",
  data() {
    return {
      htmlTitle: '个人简历',
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
        },
      ]
    };
  },
  
  mounted() {
      Bus.$on('changeBlue', () => {  
      this.$refs.sider.style.background = "#254665";
      this.$refs.content.style.color = "#254665";
      this.$refs.line.style.background = "#254665";
        });  
      Bus.$on('changePurple', () => {  
      this.$refs.sider.style.background = "#7F609F";
      this.$refs.content.style.color = "#4e3b61";
      this.$refs.line.style.background = "#4e3b61";
        }); 
      Bus.$on('changeGreen', () => {  
      this.$refs.sider.style.background = "#86A6AB";
      this.$refs.content.style.color = "#455659";
      this.$refs.line.style.background = "#455659";
        }); 
      Bus.$on('changeLeft', () => {  
      this.$refs.sider.style.float ='left';
        }); 
      Bus.$on('changeRight', () => {  
      this.$refs.sider.style.float = 'right';
        }); 
        
  },
  methods:{
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
  }
};
</script>

<style scoped>
.resume {
  width: 840px;
  height: 1194px;
  margin: 0 auto;
  box-shadow: 0 0 5px 1px #999  
}
.sider {
  float: left;
  background: #254665;
  color: #fff;
  width: 25%;
  height: 1194px;
}
.message {
  margin-bottom: 20px;
}
.avatar {
  margin: 40px 45px;
}
.Personal {
  font-size: 18px;
  font-weight: bold;
  padding-left: 20px;
}
.technology{
  margin-top: 60px;
}
.language{
  padding-left: 10px;
  font-size: 17px ;
  font-weight: 600;
}
.content {
  float: left;
  width: 75%;
  height: 1194px;
  background: #fff;
  padding: 40px;
  color:#254665;
}
.content .myname {
  font-size: 45px;
  font-weight: bold;
}
.content .job {
  font-size: 20px;
}
.input {
  display: inline-block;
}
.line {
  width: 100%;
  height: 1px;
  background: #254665;
  margin-bottom: 10px;
}
.education {
  font-size: 18px;
  font-weight: bold;
}
.precis {
  margin-bottom: 16px;
}
.time {
  font-size: 16px;
  margin-right: 60px;
}
.name {
  font-size: 16px;
  margin-right: 120px;
}
.text {
  font-size: 16px;
}
/* deep穿透强行修改组件库样式 */
::v-deep .ant-upload-list-picture-card .ant-upload-list-item-error{
    border-color: #ffffff00 !important;
}
::v-deep .ant-upload-list-picture-card .ant-upload-list-item {
    float: left;
    width: 120px !important;
    height: 120px !important;
    margin: 0 8px 8px 0;
}
</style>