<template>
  <div class="layout-container">
    <div class="column-one">
      <div class="logo-container">
        <div class="logo"></div>
      </div>
      <div class="title">Frontend Developer</div>
      <div class="social">
        <svg-icon size class="social-icon" type="mdi" :path="path"></svg-icon>
        <svg-icon class="social-icon" type="mdi" :path="linkedin"></svg-icon>
      </div>
    </div>
    <div class="column-two">
      <div class="about">
        <h2>About</h2>
        Highly motivated frontend developer based in Philippines with a passion
        for creating user interfaces and a collaborative team member.
      </div>
      <!-- <div class="dev-tools">
        <h2>Development tools</h2>
        <ul>
          <li>Git</li>
          <li>Github</li>
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>VS Code</li>
          <li>Sourcetree</li>
        </ul>
      </div> -->
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
            <div class="overlay"></div>
          </div>
        </div>
      </div>
      <!-- <button type="button" @click="show">Click to show</button> -->
    </div>
  </div>
</template>
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiGithub, mdiLinkedin } from "@mdi/js";
export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      projects: [1, 2, 23, 4],
      path: mdiGithub,
      linkedin: mdiLinkedin,
      images: [
        "../../dash-login.png",
        "../../vue-dashboard.png",
        "../../call-config.png",
        "../../call-logs.png",
        "../../qvoice-login.png",
      ],
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
.layout-container {
  display: flex;
}
.column-one {
  width: 300px;
  height: calc(100vh);
  background: #1f8a70;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}
.column-two {
  padding: 20px;
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
  margin-top: 80px;
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
.column-two {
  flex: 1;
  background: #eee;
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
.projects {
  margin-top: 100px;
}
ul li {
  list-style-type: circle;
  margin-left: 20px;
}

.project-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  margin: 5px;
  padding-left: 0px;
  margin-left: 0px;
}
.project-item {
  /* padding: 0px; */
  font-size: 30px;
  margin: 5px;
  text-align: center;
  background: #cacaca;
  height: 200px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.overlay {
  opacity: 0;
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  background: #00000085;
}
.project-item:hover .overlay {
  opacity: 1;
}
.social-icon {
  color: #fff;
}
</style>
