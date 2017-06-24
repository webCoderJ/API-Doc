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
          name: '删除动态',
          method: 'DELETE',
          url: '/moment/delete',
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
