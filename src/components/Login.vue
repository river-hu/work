<template>
  <div id="login">
    <Row>
      <Col span="12" class="left">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523177468697&di=6c467d117201bd874061b598a2a4ab9a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D96e25ce18d5494ee8777071d18c5ccc8%2Feaf81a4c510fd9f9b2168837242dd42a2834a46f.jpg" alt="">
      </Col>
      <Col span="12">
      <Form ref="formInline" class="from">
        <Form-item prop="user">
          <Input type="text" v-model="user"  placeholder="邮箱">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input type="password" v-model="pass"  placeholder="密码">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click="login">登录</Button>
          <router-link to="/reg">
            <Button type="primary">注册</Button>
          </router-link>
        </Form-item>
      </Form>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default{
      name:"login",
      data(){
        return{
          user:'',
          pass:''
        }
      },
      methods:{
        login(){
             var params =  "name="+this.user+ "&password="+this.pass;
            this.$api.post('login.php', params, (data) => {
              if(data.length==1){
                this.$Message.success('登陆成功');
                localStorage.setItem("userid",data[0].id);
                this.$router.push('/home/'+data[0].id);
              }else{
                this.$Message.error('账号密码错误');
              }
          })
        }
      },
      created(){
        this.off =false;
      }
  }
</script>
<style scoped>
  .left img{
    width: 100%;
  }
  .ivu-input-group {
    display: table;
    width: 100%;
    border-collapse: separate;
    position: relative;
    font-size: 18px;
    top: 1px;
  }
  .from{
    text-align: center;
    padding: 10px;
    width: 80%;
    min-width: 400px;
    margin: 20px auto;
  }
</style>
