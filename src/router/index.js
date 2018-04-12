import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Photo from '@/components/Photo'
import Img from '@/components/Img'
import Day from '@/components/Day'
import Page from '@/components/Page'
import Massage from '@/components/Massage'
import Login from '@/components/Login'
import Reg from '@/components/Reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home/:id',
      name: 'home',
      component: Home
    },
    {
      path: "/about/:id",
      name: "about",
      component: About
    },
    {
      path: "/photo/:id",
      name: "photo",
      component: Photo
    },
    {
      path: "/img/:imgid",
      name: "img",
      component: Img
    },
    {
      path: "/day/:id",
      name: "day",
      component: Day
    },
    {
      path: "/massage/:id",
      name: "massage",
      component: Massage
    },
    {
      path: "/page/:pageid",
      name: "page",
      component: Page
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/reg",
      name: "reg",
      component: Reg
    }
  ]
})
