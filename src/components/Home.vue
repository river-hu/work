<template>
  <div id="home">
      <Row :gutter="16">
           <Col span="6">
            <div class="title">
                博客分类
            </div>
            <div class="list">
                最新博客
            </div>
            <div class="list">
                热门
            </div>
            <div class="list">
                vue
            </div>
            <div class="list">
                微信小程序
            </div>
            <div class="title">
                关于博主
            </div>
            <div class="about">
                <img src="http://ccdn.goodq.top/caches/b2ac3c765e8751bf8ed83348310feed1/aHR0cDovLzU2YjAwNTk3MGNmYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xZGUwMGQzM2U0YjQ3YjYyMjU3ZjhiYjllODA2MTU5ZC5wbmc_p_p100_p_3D.png" alt="">
                <div class="about_body">
                    <div class="listr">
                        姓名：测试姓名
                    </div>
                    <div class="listr">
                        出生日期：2012-08-21
                    </div>
                    <div class="listr">
                        星座：处女座                        
                    </div>
                    <div class="listr">
                        现居城市：郑州
                    </div>
                    <div class="listr">
                        职业：web开发工程师
                    </div>
                    <div class="listr">
                        爱好：美食、旅行、电影
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
            </div>
            </Col>
      </Row>
  </div>
</template>
<script>
export default {
  name:"Home"
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
</style>


