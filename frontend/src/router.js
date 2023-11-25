import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./pages/Home.vue"
import Category from "./pages/Category.vue"
import Empty from "./pages/Empty.vue"
import Book from "./pages/Book.vue"
import Study from "./pages/Study.vue"
import BlogList from "./pages/blog/index.vue"
import Blog from "./pages/blog/detail.vue"
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
            path: "/blogList",
            component: BlogList
        },
        {
            path: "/blog/:id/:title",
            component: Blog
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