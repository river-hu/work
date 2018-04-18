<template>
  <div id="day">
    <div class="addpage" v-if="off">
    <router-link :to="'/addpage/'+id+'/type/1'">
                        <Button class="addbtn" shape="circle" icon="compose"></Button>
                        <Button type="text" size="small">发日志</Button>
                    </router-link>
    </div> 
     <Timeline pending class="day">
        <TimelineItem v-for="(v,index) in pagearr" :key="index" >
            <p class="time">{{v.datein|sub}}</p>
            <p class="content">{{v.title}}</p>
        </TimelineItem>
    </Timeline>
  </div>
</template>
<script>
export default {
  name:"day",
  data(){
    return{
      id:'',
      pagearr:[],
      off:true
    }
  },
  filters:{
    sub: function (value) {
          if (!value) return '';
          return value.substr(0,10);
        }
  },
  created(){
    this.id = this.$route.params.id;
     this.off = this.$api.login(this.id);
    this.$api.get("page.php",{id:this.id,sortid:'-1',pageid:'-1'},(data)=>{
          console.log(data);
          this.pagearr=data;
      })
  }
}
</script>
<style scoped>
.day{
  padding-left: 40%;
}
  .time{
    font-size: 16px;
  }
  .content{
    font-size: 18px;
  }
  .more{
    font-size: 18px;
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


