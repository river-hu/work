<template>
  <div id="page">
    <div class="title">{{page.title}}</div>
    <div class="img" :style="{'background-image':'url('+url+'/img/'+page.img+')'}">  
    </div>
    <div class="content" v-html="page.content">
    </div>
  </div>
</template>
<script>
export default {
  name:"page",
  data(){
    return{
      page:{},
      pageid:0
    }
  },
  created(){
    this.pageid = this.$route.query.pageid;
    this.$api.get("page.php",{id:'-1',sortid:'-1',pageid:this.pageid},(data)=>{
          this.page=data[0];
      })
  }
}
</script>
<style scoped>
  .title{
    font-size: 24px;
    color: #608a60;
    font-weight: bold;
    line-height: 50px;
    border-bottom: 1px solid #608a60;
    }
.img{
        max-width: 900px;  
        width: 100%;
        height: 400px;
        background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522948182831&di=9336a5c9e64f812228914dc5acb75fb1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f2a658f42d9ba8012049ef5c6598.jpg);
        background-position: center;
        background-size: cover;
        overflow: hidden;
        position: relative;
        margin: 30px auto 10px;
    }
</style>

