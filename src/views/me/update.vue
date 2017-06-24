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
          name: '修改用户信息',
          method: 'PUT',
          url: '/me/update',
          params: [
            {
              name: 'uid',
              type: 'String',
              required: true,
              description: '用户ID'
            },
            {
              name: 'nickname',
              type: 'String',
              required: false,
              description: '昵称'
            },
            {
              name: 'phoneNumber',
              type: 'String',
              required: false,
              description: '手机号码'
            },
            {
              name: 'password',
              type: 'String',
              required: false,
              description: '密码'
            },
            {
              name: 'avatar',
              type: 'String',
              required: false,
              description: '头像文件地址'
            },
            {
              name: 'location',
              type: 'String',
              required: false,
              description: '地理位置'
            },
            {
              name: 'motto',
              type: 'String',
              required: false,
              description: '个性签名'
            },
            {
              name: 'fields',
              type: 'Array',
              required: false,
              description: '擅长领域'
            }
          ],
          resDemo: {
            code: 0,
            msg: '修改用户信息成功！'
          }
        }
      }
    }
  }
</script>
