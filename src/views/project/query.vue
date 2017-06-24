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
          name: '查询项目信息',
          method: 'GET',
          url: '/project/query',
          params: [
            {
              name: 'uid',
              type: 'String',
              required: true,
              description: '用户ID'
            },
            {
              name: 'type',
              type: 'String',
              required: true,
              description: '查询类型 (0:个人项目, 1:所有项目)'
            }
          ],
          resDemo: {}
        }
      }
    }
  }
</script>
