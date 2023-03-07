<template>
  <div class="layout-container">
    <div class="column-one">
      <div class="logo-container">
        <div class="logo">
          <img src="../assets/profile.png" alt="" />
        </div>
      </div>
      <div>
        <div class="title">Frontend Developer</div>
        <div class="social-container mt-10">
          <svg-icon
            class="social-icon mr-2"
            type="mdi"
            :path="email"
          ></svg-icon>
          <span>basartejason@gmail.com</span>
        </div>
        <div class="social-container">
          <svg-icon
            size
            class="social-icon mr-2"
            type="mdi"
            :path="path"
          ></svg-icon>
          <a href="https://github.com/jsonbasarte" target="_blank">Github</a>
        </div>
        <div class="social-container">
          <svg-icon
            class="social-icon mr-2"
            type="mdi"
            :path="linkedin"
          ></svg-icon>
          <a href="https://www.linkedin.com/in/js0nbasarte" target="_blank"
            >LinkedIn</a
          >
        </div>
        <div class="social-container">
          <svg-icon
            class="social-icon mr-2"
            type="mdi"
            :path="download"
          ></svg-icon>
          <a href="https://www.google.com" target="_blank">Resume</a>
        </div>

        <div></div>
      </div>
    </div>
    <div class="column-two">
      <div class="about">
        <h2>About</h2>
        A Front-End Web Developer passionate about creating user interfaces and
        interactive application.
      </div>
      <div class="my-works">
        <h2>My Works</h2>
        <div class="work-item-container">
          <div class="work-item">
            <div class="item-action">
              <v-btn class="mr-2" size="small">DEMO</v-btn>
              <!-- <v-btn size="small">VIEW CODE</v-btn> -->
            </div>
          </div>
          <div class="work-item">
            <div class="item-action">
              <v-btn class="mr-2" size="small">DEMO</v-btn>
              <!-- <v-btn size="small">VIEW CODE</v-btn> -->
            </div>
          </div>
        </div>
      </div>
      <div class="projects">
        <h2>Sample UI</h2>
        <i class="fa-regular fa-question-circle"></i>
        <div class="project-container" v-viewer="{ movable: false }">
          <div
            @click="show"
            v-for="(image, index) in images"
            :index="index"
            class="project-item"
          >
            <img :src="image" alt="" />
            <div class="overlay">VIEW</div>
          </div>
        </div>
      </div>
      <!-- <button type="button" @click="show">Click to show</button> -->
    </div>
  </div>
</template>
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiGithub, mdiLinkedin, mdiEmail, mdiDownload } from "@mdi/js";
import dashboard from "../assets/vue-dashboard.png";
import dashboardLogin from "../assets/dash-login.png";
import callConfig from "../assets/call-config.png";
import callLogs from "../assets/call-logs.png";
import qvoiceLogin from "../assets/qvoice-login.png";
export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      projects: [1, 2, 23, 4],
      path: mdiGithub,
      linkedin: mdiLinkedin,
      email: mdiEmail,
      download: mdiDownload,
      images: [dashboard, dashboardLogin, callConfig, callLogs, qvoiceLogin],
    };
  },
  methods: {
    show() {
      this.$viewerApi({
        images: this.images,
      });
    },
  },
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 8px;
  border: 1px solid #d5d5d5;
}

::-webkit-scrollbar-track {
  border-radius: 0;
  background: #eeeeee;
}

::-webkit-scrollbar-thumb {
  border-radius: 0;
  background: #b0b0b0;
}
.layout-container {
  display: flex;
  overflow-y: hidden;
}
.column-one {
  width: 400px;
  min-height: calc(100vh);
  background: #1f8a70;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}
.column-two {
  height: calc(100vh);
  overflow: auto;
  flex: 1;
  padding: 20px;
  background: #eee;
}
.logo-container {
  display: flex;
  justify-content: center;
}
.logo {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  background: #eee;
  margin-top: 50px;
}
.title {
  width: 100%;
  text-align: center;
  color: #eee;
  font-weight: 700;
  margin-top: 40px;
  font-size: 1.5em;
}
img {
  width: 100%;
  /* height: ; */
  object-fit: cover;
}
h2 {
  color: #484848;
  margin-bottom: 10px;
}
.about {
  margin-top: 50px;
  width: 100%;
  margin-bottom: 50px;
}
.social {
  display: flex;
  justify-content: center;
  margin-top: 30%;
}
.work-item-container {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  padding: 10px 10px 10px 0px;
  margin: 5px 5px 5px 0px;
}
.work-item {
  height: 150px;
  margin: 5px;
  background: #c9c9c9;
  display: flex;
  flex-direction: column-reverse;
  padding: 10px;
}
.item-action {
  width: 100%;
  /* display: flex; */
  /* background: red; */
}
.projects {
  margin-top: 50px;
}
ul li {
  list-style-type: circle;
  margin-left: 20px;
}

.project-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px 10px 10px 0px;
  margin: 5px 5px 5px 0px;
  height: auto;
}
.project-item {
  /* padding: 0px; */
  font-size: 30px;
  margin: 5px;
  text-align: center;
  background: #cacaca;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.overlay {
  opacity: 0;
  width: 100%;
  /* height: 200px; */
  height: 100%;
  position: absolute;
  top: 0;
  background: #00000085;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7em;
  font-weight: 500;
  color: #eee;
}
.project-item:hover .overlay {
  opacity: 1;
}
.social-icon {
  color: #fff;
}
.social-container {
  cursor: pointer;
  display: flex;
  color: #eee;
  margin-bottom: 10px;
  padding-left: 20px;
}
.social-container a {
  color: #eee;
  text-decoration: none;
}
</style>
