import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Photo from '@/components/Photo'
import Day from '@/components/Day'
import Page from '@/components/Page'
import Massage from '@/components/Massage'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Addpage from '@/components/Addpage'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(Router)
Vue.use(VueQuillEditor, /* { default global options } */)

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
      path: "/page/:id",
      name: "page",
      component: Page
    },
    {
      path: "/addpage/:id",
      name: "addpage",
      component: Addpage
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
