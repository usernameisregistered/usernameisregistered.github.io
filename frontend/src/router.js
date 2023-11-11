import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./pages/Home.vue"
import Category from "./pages/Category.vue"
import Empty from "./pages/Empty.vue"
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/404",
            component: Empty
        },
        {
            path: "/:category",
            component: Category
        },
    ]
})