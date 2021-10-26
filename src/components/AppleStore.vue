<template>
  <div>


<el-card class="box-card">

<h3>欢迎光临大熊的苹果商店</h3>

<h4>苹果 {{price}} ￥/斤，折扣: &lt; 8折 &gt; </h4>

<p>
  输入购买斤数：<el-input type='number' style='width:50%;margin:15px 2px' v-model.number='count' @input="change"/>
</p>


<p>
  账单：
  总价：{{total}}  ￥,折后价：{{money}} ￥,<b style="color:red">省了 {{total-money}} ￥</b>。
</p>

<p style='margin-top:25px'>
  <el-button size='small' style='background:#fee'>购买</el-button>
</p>
  <div >
    
  </div>
</el-card>



  </div>
</template>

<script>
export default {

  data() {
    return {
      price:8,
      count:0
    }
  },

  computed:{
    originPrice(){
      return this.price/8*10
    },
    total(){
      return this.count*this.originPrice
    },
    money(){
      return this.count*this.price
    },


  },
  methods: {
    change(){
      if(this.count<0){
        this.count=0
      }
    }
  },

}
</script>

<style>
.box-card{
  width: 880px;
  height: 420px;
  background-color: #fefe;
  margin: 0 auto;
}

</style>