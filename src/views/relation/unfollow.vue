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
          name: '取关用户',
          method: 'DELETE',
          url: '/relation/unfollow',
          params: [
            {
              name: 'from',
              type: 'String',
              required: true,
              description: '用户ID'
            },
            {
              name: 'to',
              type: 'String',
              required: true,
              description: '被关注用户ID'
            }
          ],
          resDemo: {
            code: 0,
            msg: '取消关注成功！'
          }
        }
      }
    }
  }
</script>
