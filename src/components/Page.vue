<template>
  <div id="page">
    <div class="title">文章的标题</div>
    <div class="img">  
    </div>
    <div class="content">
      文章的内容，富文本数据
    </div>
  </div>
</template>
<script>
export default {
  name:"page"
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

