<template>
  <div>
    <ul>
      <li v-for='(item,index) in arr' :key='item'>
        <span>{{item}}</span>
        <button @click='remove(index)'>删除</button>
      </li>
    </ul>
    <button @click='add'>生成</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      arr:[1,5,3]
    }
  },
  methods:{
    add(){
      const num=Math.floor(Math.random()*10)
      this.arr.push(num)
    },
    remove(id){
      this.arr=this.arr.filter((item,index)=>index!=id)
    }
  }
}
</script>

<style>

</style>