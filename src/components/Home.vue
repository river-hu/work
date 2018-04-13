<template>
  <div id="home">
      <Row :gutter="16">
           <Col span="6">
            <div class="title">
                博客分类 <span class="add" @click="addsort"><Icon type="plus-round"></Icon></span>
            </div>
            <div class="list" :class="{active:pageindex==index}" v-for="(v,index) in user.pages" @click="togglesort(index)">
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
                <div class="addpage">
                    <!-- <Icon type="compose"></Icon> -->
                    <router-link :to="'/addpage/'+id">
                        <Button class="addbtn" shape="circle" icon="compose"></Button>
                        <Button type="text" size="small">写博客</Button>
                    </router-link>
                   
                </div>
                <div class="listr" v-for="v in pagearr">
                    <div class="title1">
                        <router-link  :to="'/page/'+id+'?pageid='+v.id">{{v.title}}</router-link>
                    </div>
                    <router-link :to="'/page/'+id+'?pageid='+v.id">
                    <div class="img" :style="{'background-image':'url(http://127.0.0.1/workphp/img/'+v.img+')'}">  
                    </div>
                     </router-link>
                     <div class="dec">
                         {{v.dec}}
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
          id:0,
          pagearr:[],
          pageindex:-1
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
        this.$api.get("addsort.php",{id:id,scroe:0,sortname:name,sortid:'-1'},(data)=>{
            console.log(data);
          this.user.pages=data;
           this.sortoff = false;
           this.sortname = '';
      })
      },
      togglesort(index){
          let sortid = this.user.pages[index].id;
          this.pageindex = index;
            this.$api.get("page.php",{id:this.id,sortid:sortid,pageid:'-1'},(data)=>{
          console.log(data);
          this.pagearr=data;
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
      this.$api.get("page.php",{id:id,sortid:'-1',pageid:'-1'},(data)=>{
          console.log(data);
          this.pagearr=data;
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
    .active{
        color: #ed3f14;
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
        cursor: pointer;
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
    .addbtn{
        background: #608a60;
        color: #fff;
    }
    .addpage{
        text-align: right;
    }
    .addpage button{
        outline: none;
    }
</style>


