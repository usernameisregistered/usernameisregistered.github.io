import { createApp } from 'vue'
import "./assets/js/iconfont.js"
import "./assets/style/var.less"
import 'ant-design-vue/dist/reset.css';
import router from './router';
import App from './App.vue';
const instance = createApp(App);
instance.use(router);
instance.mount('#app');
