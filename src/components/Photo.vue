<template>
  <div id="photo">
      <div @click="show" v-for="(v,index) in num">
        <Card style="width:300px" class="card" >
        <div style="text-align:center">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522997246719&di=518843bb199039901578ceefcd37367d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f2a658f42d9ba8012049ef5c6598.jpg">
            <h3>我的相册</h3>
        </div>
        </Card>
      </div>
   
    <div class="meng" v-show="visible"  @click="hide"></div>
      <transition name="side">
        <div class="modal" v-show="visible">
           <img class="bgimg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522997246719&di=94abc903f69971d4542cb0d3ba4c2310&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Faa64034f78f0f736414c872c0155b319ebc41369.jpg" alt="">
      </div> 
      </transition>



  </div>
</template>
<script>
export default {
  name: "photo",
   data(){
      return{
          model:false,
          num:8,
          visible:false
      }
  },
  methods: {
      show(index){
          this.visible = true;
          console.log(12)
      },
      hide(){
          this.visible = false;
      }
  }
};
</script>
<style scoped>
.card img {
  width: 100%;
}
#photo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  margin: 10px;
}
.card h3{
    color: #666;
}
.side-enter-active {
  animation: side-in .5s;
}
.side-leave-active {
  animation: side-in .5s reverse;
}
@keyframes side-in {
  0% {
    transform: scale(.5);
  }
  100% {
    transform: scale(1);
  }
}
.meng{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(55,55,55,.6);
    height: 100%;
    z-index: 1000;
}
.modal {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    position: absolute;
    padding: 10px;
    border-radius: 8px;
    outline: 0;
    top: 0px;
    background: #fff;
    z-index: 1001;
}
.img{
    width: 300px;
    height: 200px;
    background-position: center;
    background-size: cover;
    margin: 10px;   
}
.bgimg{
    max-width: 100%;

}
</style>


