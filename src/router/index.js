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
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/photo",
      name: "photo",
      component: Photo
    },
    {
      path: "/img",
      name: "img",
      component: Img
    },
    {
      path: "/day",
      name: "day",
      component: Day
    },
    {
      path: "/massage",
      name: "massage",
      component: Massage
    },
    {
      path: "/page",
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
