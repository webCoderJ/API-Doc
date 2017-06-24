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
          name: '查询动态评论',
          method: 'GET',
          url: '/moment/getComments',
          params: [
            {
              name: 'mid',
              type: 'String',
              required: true,
              description: '动态ID'
            }
          ],
          resDemo: {}
        }
      }
    }
  }
</script>
