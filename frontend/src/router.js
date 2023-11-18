import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./pages/Home.vue"
import Category from "./pages/Category.vue"
import Empty from "./pages/Empty.vue"
import Book from "./pages/Book.vue"
import Study from "./pages/Study.vue"
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
            path: "/study",
            component: Study
        },
        {
            path: "/book/:id",
            component: Book
        },
        {
            path: "/:category",
            component: Category
        },
    ]
})