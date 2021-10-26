<template>
  <div>


  <h3>名字是啥：{{name}}</h3>

<p>
  <button style='margin:0 5px' @click='start'>开始</button>
  <button style='margin:0 5px' @click='end'>结束</button>
</p>

  </div>
</template>

<script>

const start_value='这里显示姓名'

const names=['吕布','赵云','关羽','张飞','秦琼','小乔','韩立']

let timer=null

export default {
  data() {
    return {
      name:start_value
    }

  },
  methods:{
    start(){
     timer= setInterval(()=>{
      const idx=Math.floor(Math.random()*names.length)
      this.name=names[idx]
      },50)
 },
    end(){
      clearInterval(timer)
    }

  }




}


</script>

<style>

</style>