<template>
  <div>
    

    <h3>请选择喜欢的专栏 </h3>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<input type="checkbox" id="mike" value="XiaoMing" v-model="checkedNames">
<label for="mike">XiaoMing</label>
<input type="checkbox" id="mike" value="dazhuang" v-model="checkedNames">
<label for="mike">dazhuang</label>

<ul>
  <li v-for='item in checkedNames' :key='item' >{{item}}</li>
</ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedNames:[]
    }
  },
}
</script>

<style>

</style>