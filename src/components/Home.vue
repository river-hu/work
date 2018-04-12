<template>
  <div id="home">
      <Row :gutter="16">
           <Col span="6">
            <div class="title">
                博客分类 <span class="add" @click="addsort"><Icon type="plus-round"></Icon></span>
            </div>
            <div class="list" v-for="v in user.pages">
                {{v.title}}
            </div>
            <div class="list" v-show="sortoff">
                <Input v-model="sortname" placeholder="输入分类名" clearable style="width:90%"></Input>
                <Button type="info" size="small" @click="confirm">确定</Button>
                <Button size="small" @click="cancel">取消</Button>
            </div>
            <div class="title">
                关于博主
            </div>
            <div class="about">
                <img :src="user.header" alt="">
                <div class="about_body">
                    <div class="listr">
                        姓名：{{user.name}}
                    </div>
                    <div class="listr">
                        出生日期：{{user.days}}
                    </div>
                    <div class="listr">
                        邮箱：{{user.email}}                      
                    </div>
                    <div class="listr">
                        现居城市：{{user.city}}  
                    </div>
                    <div class="listr">
                        性别：{{user.sex==1?'男':'女'}}
                    </div>
                    <div class="listr">
                        爱好：{{user.liker}}
                    </div>
                </div>
            </div>
            </Col>
            <Col span="18">
            <div class="content">
                <div class="listr">
                    <div class="title1">
                        <router-link to="page">个人网站搭建技术</router-link>
                    </div>
                    <router-link to="page">
                    <div class="img">  
                    </div>
                     </router-link>
                     <div class="dec">
                         普通青年的空余时间，大部分都会交付给游戏，他们喜欢厮杀和战斗，来消磨无处释放的压力和精力，而文艺青年空闲时，会冲上一杯清爽的绿茶，抱着一本极文艺的书籍，慢慢地细细品味，整个身心都徜徉在美轮美奂的幻想里。
                     </div>
                </div>
                <div class="listr">
                    <div class="title1">
                        <router-link to="page/1">个人网站搭建技术</router-link>
                        
                    </div>
                    <router-link to="page/1">
                    <div class="img">  
                    </div>
                     </router-link>
                     <div class="dec">
                         普通青年的空余时间，大部分都会交付给游戏，他们喜欢厮杀和战斗，来消磨无处释放的压力和精力，而文艺青年空闲时，会冲上一杯清爽的绿茶，抱着一本极文艺的书籍，慢慢地细细品味，整个身心都徜徉在美轮美奂的幻想里。
                     </div>
                </div>
                <div class="listr">
                    <div class="title1">
                        <router-link to="page/1">个人网站搭建技术</router-link>
                        
                    </div>
                    <router-link to="page/1">
                    <div class="img">  
                    </div>
                     </router-link>
                     <div class="dec">
                         普通青年的空余时间，大部分都会交付给游戏，他们喜欢厮杀和战斗，来消磨无处释放的压力和精力，而文艺青年空闲时，会冲上一杯清爽的绿茶，抱着一本极文艺的书籍，慢慢地细细品味，整个身心都徜徉在美轮美奂的幻想里。
                     </div>
                </div>
                <div class="listr">
                    <div class="title1">
                        <router-link to="page/1">个人网站搭建技术</router-link>
                        
                    </div>
                    <router-link to="page/1">
                    <div class="img">  
                    </div>
                     </router-link>
                     <div class="dec/1">
                         普通青年的空余时间，大部分都会交付给游戏，他们喜欢厮杀和战斗，来消磨无处释放的压力和精力，而文艺青年空闲时，会冲上一杯清爽的绿茶，抱着一本极文艺的书籍，慢慢地细细品味，整个身心都徜徉在美轮美奂的幻想里。
                     </div>
                </div>
            </div>
            </Col>
      </Row>
  </div>
</template>
<script>
export default {
  name:"Home",
  data(){
      return {
          user:{},
          sortname:'',
          sortoff:false,
          id:0
      }
  },
  methods:{
      addsort(){
          this.sortoff = true;
      },
      cancel(){
           this.sortoff = false;
           this.sortname = '';
      },
      confirm(){
         let id= this.id;
         var name = this.sortname;
        this.$api.get("addsort.php",{id:id,scroe:0,sortname:name},(data)=>{
          this.user.pages=data;
           this.sortoff = false;
           this.sortname = '';
      })
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
    .title{
        color: #666;       
        font-size: 18px;
        line-height: 30px;
        border-bottom: 2px solid #608a60;
        margin-top: 10px;
    }
    .title1{
        font-size: 22px;
        line-height: 50px;
        /* padding-left: 10px; */

    }
    .title1>a{
        color: #608a60;
        font-weight: bold;
    }
    .list{
        line-height: 35px;
        padding-left: 10px;
        font-size: 15px;
    }
    .about img{
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .about .listr{
        padding-left: 5px;
    }
    .content .img img{
        width: 600px;   
    }
    .content .img{
        width: 600px;  
        height: 240px;
        background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522948182831&di=9336a5c9e64f812228914dc5acb75fb1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f2a658f42d9ba8012049ef5c6598.jpg);
        background-position: center;
        background-size: cover;
        overflow: hidden;
        position: relative;
    }
    .content{
        padding-top: 0px;
        padding-left: 30px;
    }
    .content .dec{
        font-size: 14px;
        margin-top: 20px;
    }
    .add{
        float: right;
        font-size: 20px;
        margin-right: 5px;
    }
    .add:hover{
        color: #ed3f14;
    }
</style>


