import { createApp } from 'vue'
import "normalize.css"
import "./assets/js/iconfont.js"
import "./assets/style/var.less"
import router from './router';
import App from './App.vue';
const instance = createApp(App);
instance.use(router);
instance.mount('#app');
