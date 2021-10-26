<template>
  <div>


    <button :disabled='sec===""?false:true'>我已阅读用户协议 {{sec}}</button>


  </div>
</template>

<script>
let timer=null
export default {
  data() {
    return {
      sec:10
    }
  },

  mounted() {
  timer= setInterval(()=>{
    this.sec--
      if(this.sec===0){
        this.sec=''
        clearInterval(timer)
      }
    },1000)
  },
}

</script>

<style>

</style>