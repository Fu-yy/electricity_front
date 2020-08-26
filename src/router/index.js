import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/views/FirstPage'
import SecondPage from '@/views/SecondPage'
import ThirdPage from '@/views/ThirdPage'
import ForthPage from '@/views/ForthPage'
import FifthPage from '@/views/FifthPage'
import SixthPage from '@/views/SixthPage'
import testPage from '@/views/testPage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/first',
      name: 'FirstPage',
      component: FirstPage
    },{
      path: '/second',
      name: 'SecondPage',
      component: SecondPage
    },{
      path: '/third',
      name: 'ThirdPage',
      component: ThirdPage
    },{
      path: '/forth',
      name: 'ForthPage',
      component: ForthPage
    },{
      path: '/fifth',
      name: 'FifthPage',
      component: FifthPage
    },{
      path: '/sixth',
      name: 'SixthPage',
      component: SixthPage
    },{
      path: '/testPage',
      name: 'testPage',
      component: testPage
    },
    
  ]
})
