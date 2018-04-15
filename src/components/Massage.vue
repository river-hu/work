<template>
  <div id="massage">
    <div v-for="(v,index) in msgarr">
<Card class="list" >
         <p class="title">
           <span class="name">{{v.name}}</span>
           <span class="time"> {{v.intime}}</span>
         </p>  
         <p class="content">
           {{v.content}}
           </p>    
    </Card>
    </div>
    
     <Card class="list">
           <Form :model="formItem" :label-width="80">
        <FormItem label="您的大名">
            <Input v-model="formItem.input" placeholder="输入你的大名"></Input>
        </FormItem>
        <FormItem label="您的留言">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="输入留言内容"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="submit()">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>  
    </Card>
    
  </div>
</template>
<script>
export default {
  name: "massage",
  data() {
    return {
      formItem: {
        input: "",
        textarea: ""
      },
      id:'',
      msgarr:[]
    };
  },
  methods:{
    submit(){
       this.$api.get("photo.php", { userid: this.id, sortid: 1, type: 3,content:this.formItem.textarea,name:this.formItem.input}, data => {
            console.log(data);
            this.msgarr = data;
            this.formItem.textarea='';
            this.formItem.input='';
        });
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.$api.get("photo.php", { userid: this.id, sortid: 1, type: 4}, data => {
            console.log(data);
            this.msgarr = data;
        });
  }
};
</script>
<style scoped>
#massage {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.title {
  border-bottom: 1px solid #608a60;
  overflow: hidden;
}
.name {
  line-height: 30px;
  font-size: 16px;
}
.time {
  float: right;
  margin-right: 10px;
  line-height: 20px;
  margin-top: 10px;
}
.list {
  margin-bottom: 10px;
}
.content{
  padding-top: 10px;
}
</style>


