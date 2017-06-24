<template>
  <c-api-card :data='apiData'></c-api-card>
</template>

<script>
  import * as components from 'src/components'

  export default {
    components,
    data () {
      return {
        apiData: {
          name: '用户登录',
          method: 'POST',
          url: '/user/login',
          params: [
            {
              name: 'username',
              type: 'String',
              required: true,
              description: '昵称/手机号'
            },
            {
              name: 'password',
              type: 'String',
              required: true,
              description: '密码'
            }
          ],
          resDemo: {
            code: 0,
            msg: 'success',
            data: {
              nickname: '傻辉',
              phoneNumber: '13581887557',
              accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6Im5laWxsaW4iLCJwaG9uZU51bWJlciI6IjE0MTQxMjQ1NDU1IiwicmVnRGF0ZSI6IjIwMTctMDYtMjIgMjE6NTY6NTkiLCJpYXQiOjE0OTgxNDI2NjYsImV4cCI6MTQ5ODE0NjI2Nn0.54SNXB7IVU_pMPdmL44CB8ChLC7WjiycSy16klA5hHg'
            }
          }
        }
      }
    }
  }
</script>
