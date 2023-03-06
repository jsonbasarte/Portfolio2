import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone);

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(VueViewer);
app.use(vuetify).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
