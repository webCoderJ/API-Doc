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
          name: '创建多人项目',
          method: 'POST',
          url: '/project/create',
          params: [
            {
              name: 'uid',
              type: 'String',
              required: true,
              description: '用户ID'
            },
            {
              name: 'name',
              type: 'String',
              required: true,
              description: '项目名称'
            },
            {
              name: 'avatar',
              type: 'String',
              required: true,
              description: '创建者头像文件地址'
            },
            {
              name: 'nickname',
              type: 'String',
              required: true,
              description: '创建者昵称'
            },
            {
              name: 'type',
              type: 'String',
              required: true,
              description: '项目类型'
            }
          ],
          resDemo: {
            code: 0,
            msg: '创建成功！'
          }
        }
      }
    }
  }
</script>
