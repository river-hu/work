<template>
  <div id="about">
      <div class="header">
          关于博主
      </div>
      <Row :gutter="32" class="body">
          <Col span="6">
                <img src="http://ccdn.goodq.top/caches/b2ac3c765e8751bf8ed83348310feed1/aHR0cDovLzU2YjAwNTk3MGNmYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xZGUwMGQzM2U0YjQ3YjYyMjU3ZjhiYjllODA2MTU5ZC5wbmc_p_p100_p_3D.png" alt="">
          </Col>
          <Col span="18">
                <div class="title">个人简介</div>
                <div class="content"> 这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。<br>
 
这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。 </div>
               <Row>
                   <Col span="12">
                        <div class="title">
                            工作经验
                        </div>
                        <div class="list">
                            2017年－2018年 郑州广之迪点子科技有限公司
                        </div>
                        <div class="list">
                            2017年－2018年 郑州广之迪点子科技有限公司                            
                        </div>
                        <div class="list">
                            2017年－2018年 郑州广之迪点子科技有限公司
                        </div>
                        <div class="list">
                            2017年－2018年 郑州广之迪点子科技有限公司
                        </div>
                        <div class="list">
                            2017年－2018年 郑州广之迪点子科技有限公司
                        </div>
                   </Col>
                   <Col span="12">
                        <div class="title">
                            项目经验
                        </div>
                        <div class="list">
                            2017年－2018年 郑州广之迪点子科技有限公司
                        </div>
                        <div class="list">
                            2017年－2018年 郑州广之迪点子科技有限公司
                        </div>
                        <div class="list">
                            2017年－2018年 郑州广之迪点子科技有限公司
                        </div>
                        <div class="list">
                            2017年－2018年 郑州广之迪点子科技有限公司
                        </div>
                        <div class="list">
                            2017年－2018年 郑州广之迪点子科技有限公司
                        </div>
                   </Col>
               </Row>
          </Col>
      </Row>
  </div>
</template>
<script>
export default {
  name:"about"
}
</script>
<style scoped>
.header{
    color: #666;       
    font-size: 18px;
    line-height: 30px;
    border-bottom: 2px solid #608a60;
    margin-top: 10px;
}
.body{
    padding-top: 20px;
}
.body img{
    width: 100%;
}
.title{
    font-size: 15px;
    color: #333;
    line-height: 50px;
}
.list{
    font-size: 14px;
    color: #666;
}
.content{
    font-size: 15px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #ccc;
    line-height: 22px;
}
</style>

