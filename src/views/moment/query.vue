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
          name: '查询动态',
          method: 'GET',
          url: '/moment/query',
          params: [
            {
              name: 'uid',
              type: 'String',
              required: false,
              description: '用户ID'
            }
          ],
          resDemo: {}
        }
      }
    }
  }
</script>
