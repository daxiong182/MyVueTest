<template>
  <div>

<table >
  <tr>
  <th>编号</th>
  <th>品牌名</th>
  <th>创立时间</th>
  <th>操作</th>
  </tr>

  <tr v-for='item in list' :key='item.id'>
<td>{{item.id}}</td>
<td>{{item.name}}</td>
<td>{{item.time}}</td>
<td><button @click='remove(item.id)'>删除</button></td>
  </tr>

</table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {id:101,name:'奔驰',time:'2020-08-01'},
        {id:102,name:'宝马',time:'2021-01-01'},
        {id:103,name:'奥迪',time:'2021-02-01'}
      ]
    }
  },
  methods:{
    remove(id){
     this.list= this.list.filter( element => element.id!=id );
    }
  }
}
</script>

<style>
table{
  width: 50%;
   top: 15vh;
  
 margin: 0 auto;
  border-collapse:collapse;
  cursor: pointer;
}
tr{
  height: 60px;
}
td,th{
  border: 1px solid #ccc;
  
}
th{
  background: #eee;
}
td{
  background: #fefefe;
}
button{
  cursor: pointer;
}
</style>