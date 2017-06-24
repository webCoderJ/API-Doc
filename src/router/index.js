import Vue from 'vue'
import Router from 'vue-router'

import Index from 'src/views/index'
// 用户
import UserLayout from 'src/views/users/layout'
import UserReg from 'src/views/users/reg'
import UserLogin from 'src/views/users/login'
// 我的
import MeLayout from 'src/views/me/layout'
import MeQuery from 'src/views/me/query'
import MeUpdate from 'src/views/me/update'
// 运动记录
import RecordLayout from 'src/views/record/layout'
import RecordQuery from 'src/views/record/query'
import RecordQueryRank from 'src/views/record/rank'
// 用户关系
import RelationLayout from 'src/views/relation/layout'
import RelationFollow from 'src/views/relation/follow'
import RelationUnfollow from 'src/views/relation/unfollow'
// 运动项目
import ProjectLayout from 'src/views/project/layout'
import ProjectQuery from 'src/views/project/query'
import ProjectCreate from 'src/views/project/create'
// 动态
import MomentLayout from 'src/views/moment/layout'
import MomentQuery from 'src/views/moment/query'
import MomentCreate from 'src/views/moment/create'
import MomentDelete from 'src/views/moment/delete'
import MomentQueryComment from 'src/views/moment/query-comment'
import MomentAddComment from 'src/views/moment/add-comment.vue'
import MomentDeleteComment from 'src/views/moment/delete-comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/users',
      component: UserLayout,
      children: [
        {
          path: 'reg',
          component: UserReg
        },
        {
          path: 'login',
          component: UserLogin
        }
      ]
    },
    {
      path: '/me',
      component: MeLayout,
      children: [
        {
          path: 'query',
          component: MeQuery
        },
        {
          path: 'update',
          component: MeUpdate
        }
      ]
    },
    {
      path: '/record',
      component: RecordLayout,
      children: [
        {
          path: 'query',
          component: RecordQuery
        },
        {
          path: 'rank',
          component: RecordQueryRank
        }
      ]
    },
    {
      path: '/relation',
      component: RelationLayout,
      children: [
        {
          path: 'follow',
          component: RelationFollow
        },
        {
          path: 'unfollow',
          component: RelationUnfollow
        }
      ]
    },
    {
      path: '/project',
      component: ProjectLayout,
      children: [
        {
          path: 'query',
          component: ProjectQuery
        },
        {
          path: 'create',
          component: ProjectCreate
        }
      ]
    },
    {
      path: '/moment',
      component: MomentLayout,
      children: [
        {
          path: 'query',
          component: MomentQuery
        },
        {
          path: 'create',
          component: MomentCreate
        },
        {
          path: 'delete',
          component: MomentDelete
        },
        {
          path: 'query-comment',
          component: MomentQueryComment
        },
        {
          path: 'add-comment',
          component: MomentAddComment
        },
        {
          path: 'delete-comment',
          component: MomentDeleteComment
        }
      ]
    }
  ]
})
