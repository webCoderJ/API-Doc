<template>
  <c-api-card :data="apiData"></c-api-card>
</template>

<script>
  import * as components from 'src/components'

  export default {
    components,
    data () {
      return {
        apiData: {
          name: '用户注册',
          method: 'POST',
          url: '/member/register',
          params: [
            {
              name: 'phoneNumber',
              type: 'String',
              required: true,
              description: '手机号码'
            },
            {
              name: 'nickname',
              type: 'String',
              required: true,
              description: '昵称'
            },
            {
              name: 'password',
              type: 'String',
              required: true,
              description: '密码'
            }
          ],
          resDemo: {
            'code': 0,
            'msg': '注册成功',
            'data': {}
          }
        }
      }
    }
  }
</script>
