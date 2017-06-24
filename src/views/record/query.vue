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
          name: '查询运动记录',
          method: 'GET',
          url: '/record/query',
          params: [
            {
              name: 'uid',
              type: 'String',
              required: true,
              description: '用户ID'
            }
          ],
          resDemo: {}
        }
      }
    }
  }
</script>
