import Vue from 'vue'
import Router from 'vue-router'

import UsersLayout from 'src/views/users/layout'
import UsersReg from 'src/views/users/reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      component: UsersLayout,
      children: [
        {
          path: 'reg',
          component: UsersReg
        }
      ]
    }
  ]
})
