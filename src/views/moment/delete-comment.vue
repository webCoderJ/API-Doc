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
          name: '删除动态评论',
          method: 'DELETE',
          url: '/moment/deleteComments',
          params: [
            {
              name: 'cid',
              type: 'String',
              required: true,
              description: '动态ID'
            },
            {
              name: 'mid',
              type: 'String',
              required: true,
              description: '评论ID'
            }
          ],
          resDemo: {
            code: 0,
            msg: '删除成功！'
          }
        }
      }
    }
  }
</script>
