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
          name: '添加动态评论',
          method: 'POST',
          url: '/moment/addComments',
          params: [
            {
              name: 'uid',
              type: 'String',
              required: true,
              description: '用户ID'
            },
            {
              name: 'mid',
              type: 'String',
              required: true,
              description: '动态ID'
            },
            {
              name: 'nickname',
              type: 'String',
              required: true,
              description: '昵称'
            },
            {
              name: 'content',
              type: 'String',
              required: true,
              description: '评论内容'
            },
            {
              name: 'createTime',
              type: 'Date',
              required: true,
              description: '创建时间'
            }
          ],
          resDemo: {
            code: 0,
            msg: '评论成功！'
          }
        }
      }
    }
  }
</script>
