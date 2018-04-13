<template>
  <div id="about">
      <div class="header">
          关于博主
      </div>
      <Row :gutter="32" class="body">
          <Col span="6">
                <img :src="user.header" alt="">
          </Col>
          <Col span="18">
                <div class="title">个人简介</div>
                <div class="content" v-if="!setoff" @dblclick="setcontent"> {{user.dec}} </div>
                <div class="setcontent" v-if="setoff">
                    <Input v-model="user.dec" type="textarea" @blur="submit"  placeholder="输入个人简介"></Input>
                </div>
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
  name:"about",
  data(){
      return{
          id:'',
          user:{},
          setoff:false
      }
  },
  methods:{
      setcontent(){
          let id = localStorage.getItem("userid");
          if(id==this.id){
              this.setoff=true;
          }
      },
      submit(){
          
      }
  },
  created(){
      this.id = this.$route.params.id;
      let id = this.id;
      this.$api.get("home.php",{id:id},(data)=>{
          console.log(data);
          this.user=data[0];
      })
  }
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

