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
          name: '创建动态',
          method: 'POST',
          url: '/moment/create',
          params: [
            {
              name: 'uid',
              type: 'String',
              required: true,
              description: '用户ID'
            },
            {
              name: 'nickname',
              type: 'String',
              required: true,
              description: '昵称'
            },
            {
              name: 'avatar',
              type: 'String',
              required: true,
              description: '头像文件地址'
            },
            {
              name: 'location',
              type: 'String',
              required: true,
              description: '地理位置'
            },
            {
              name: 'createTime',
              type: 'Date',
              required: true,
              description: '创建时间'
            },
            {
              name: 'image',
              type: 'String',
              required: false,
              description: '动态图片地址'
            },
            {
              name: 'content',
              type: 'String',
              required: true,
              description: '动态文本内容'
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
