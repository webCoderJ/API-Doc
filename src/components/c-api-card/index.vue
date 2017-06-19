<template>
  <div class="c-api-card">
    <el-card class="card">
      <div slot="header" class="card-header">
        <span>{{data.name}}</span>
        <el-button type="primary" class="mock-btn">来点假数据</el-button>      
      </div>
      <ul>
        <li>
          <span class="method-tag">{{data.method}}</span>
          <span>{{data.url}}</span>
          <el-button type="text">点击复制</el-button>        
        </li>
        <li>
          <span class="list-title">请求参数:</span>
          <el-table :data="data.params" border stripe>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="type" label="类型" width="110"></el-table-column>            
            <el-table-column label="是否必填" width="100">
              <template scope="scope">
                {{scope.row.required ? '是' : '否'}}
              </template>
            </el-table-column>            
            <el-table-column prop="description" label="描述"></el-table-column>            
          </el-table>
        </li>
        <li>
          <span class="list-title">返回示例:</span>
          <span>{{data.resDemo}}</span>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: {
          name: 'No Data',
          method: 'GET',
          url: '',
          params: [],
          resDemo: ''
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import './style.scss';
</style>
