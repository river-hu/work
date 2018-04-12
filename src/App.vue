<template>
  <div id="app">
           <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">测试名称</div>
                    <div class="layout-nav">
                        <router-link to="/home/1">
                         <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            主页
                        </MenuItem>
                        </router-link>
                       <router-link to="/about/1">
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            个人简介
                        </MenuItem>
                        </router-link>
                       <router-link to="/photo/1">
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            我的相册
                        </MenuItem>
                        </router-link>
                       <router-link to="/day/1">
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            我的日志
                        </MenuItem>
                        </router-link>
                       <router-link to="/massage/1">
                         <MenuItem name="5">
                            <Icon type="compose"></Icon>
                            留言板
                        </MenuItem>
                        </router-link>
                       
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
               <Row class="btop">
                   <router-link to="/login">
                            <Tag class="login">登录／注册</Tag>
                   </router-link>
                    
               </Row>
                <div class="body">
                    <transition name="slide-fade" mode="out-in">
                        <router-view class="child-view"></router-view>
                    </transition>
                    
                </div>            
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
   

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
　　　　　　transitionName: 'slide-right'  // 默认动态路由变化为slide-right
　　　　}
  }
}
</script>

<style>
.child-view{
     transition: all .6s linear;
     position: relative;
}
.slide-fade-enter-active {
  transition: all .3s linear;
}
.slide-fade-leave-active {
  transition: all .6s linear;
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(-1020px);
  opacity: 0;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
.btop{
    padding: 10px 50px;
}
.body{
    width: 100%;
    max-width: 1020px;
    margin: 0 auto;
    background: #fff;
    padding: 20px 20px;
    position: relative;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.ivu-layout-header,.ivu-menu-dark{
    background: #f5f7f9;
   
}
.ivu-layout-header{
    border-bottom: 1px solid #608a60;
}
.ivu-menu-dark .ivu-menu-item{
    color: #608a60!important;
}
.layout-logo{
    width: 150px;
    height: 40px;
    border:1px solid #608a60;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 10px;
    left: 20px;
    color: #608a60;
    font-size: 1.4em;
    line-height: 40px;
    text-align: center;
}
.layout-nav{
    width: 545px;
    margin: 0 auto;
    margin-right: 10px;
}
.layout-footer-center{
    text-align: center;
}
.login{
    float: right;
}
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover{
    color: #ed3f14!important;
}
</style>
