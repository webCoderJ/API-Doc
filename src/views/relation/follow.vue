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
          name: '关注用户',
          method: 'POST',
          url: '/relation/follow',
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
            msg: '关注成功！'
          }
        }
      }
    }
  }
</script>
