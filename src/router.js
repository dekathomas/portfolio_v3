import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    linkExactActiveClass: 'menu__item-active',
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import(/* webpackChunkName: "HomePage" */ './views/HomePage'),
            alias: '/home'
        },
        {
            path: "/experience",
            name: "Experience",
            component: () => import(/* webpackChunkName: "ExperiencePage" */ './views/ExperiencePage'),
        },
        {
            path: "/project",
            name: "Project",
            component: () => import(/* webpackChunkName: "ProjectPage" */ './views/ProjectPage'),
        },
        {
            path: "/profile",
            name: "Profile",
            component: () => import(/* webpackChunkName: "ProfilePage" */ './views/ProfilePage'),
        },
    ]
})