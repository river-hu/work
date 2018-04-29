<template>
  <div id="about">
      <div class="header">
          关于博主
          <div class="addpage" v-if="off">
                    <!-- <Icon type="compose"></Icon> -->
                    <router-link :to="'/setuser/'+id">
                        <Button class="addbtn" shape="circle" icon="compose"></Button>
                        <Button type="text" size="small">修改个人信息</Button>
                    </router-link>
                   
          </div>
      </div>
      <Row :gutter="32" class="body">
          <Col span="6">
                <img :src="url+'/img/'+id+'/'+user.header" alt="">
          </Col>
          <Col span="18">
                <div class="title">个人简介</div>
                <div class="content" v-if="!setoff" @dblclick="setcontent"> {{user.dec}} </div>
                <div class="setcontent" v-if="setoff">
                    <Input v-model="user.dec" type="textarea" @on-blur="submit"  placeholder="输入个人简介"></Input>
                </div>
               <Row>
                   <Col span="12">
                        <div class="title">
                            工作经验
                            <span class="add" v-if="off" @click="addworkf"><Icon type="plus-round"></Icon></span>
                        </div>
                        <div class="list" v-for="(v,index) in workarr">
                            <div v-if="index!=workindex" @dblclick="setoffwork(index)">
                                {{v.content}}
                            </div>
                            <Input v-else v-model="workarr[index].content" placeholder="请输入你的工作经验" clearable style="width: 100%" @on-blur="updatawork(index)"></Input>
                        </div>
                        <div class="list" v-if="workoff">
                           <Input v-model="addwork" placeholder="请输入你的工作经验" clearable style="width: 100%" @on-blur="submitwork"></Input>
                        </div>
                   </Col>
                   <Col span="12">
                        <div class="title">
                            项目经验
                            <span class="add" v-if="off" @click="addprof"><Icon type="plus-round"></Icon></span>
                        </div>
                       <div class="list" v-for="(v,index) in proarr">
                            <div v-if="index!=proindex" @dblclick="setoffpro(index)">
                                {{v.content}}
                            </div>
                            <Input v-else v-model="proarr[index].content" placeholder="请输入你的项目经验" clearable style="width: 100%"  @on-blur="updatapro(index)"></Input>
                        </div>
                        <div class="list" v-if="prooff">
                           <Input @on-blur="submitpro" v-model="addpro" placeholder="请输入你的项目经验" clearable style="width: 100%"></Input>
                        </div>
                   </Col>
               </Row>
          </Col>
      </Row>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      id: "",
      user: {},
      setoff: false,
      workindex: -1,
      proindex: -1,
      workarr: [],
      proarr: [],
      workoff: false,
      prooff: false,
      addwork: "",
      addpro: "",
      off: true
    };
  },
  methods: {
    setcontent() {
      if (this.off) {
        this.setoff = true;
      }
    },
    addworkf() {
      if (this.off) {
      this.workoff = true;
      }
    },
    setoffwork(index) {
      if (this.off) {
      this.workindex = index;
      }
    },
    setoffpro(index) {
      if (this.off) {
      this.proindex = index;
      }
    },
    addprof() {
      if (this.off) {
      this.prooff = true;
      }
    },
    submitwork() {
      if (this.addwork == "") {
        this.workoff = false;
      } else {
        this.$api.get(
          "experience.php",
          { userid: this.id, sortid: 0, type: 0, content: this.addwork },
          data => {
            this.workarr = data;
            this.workoff = false;
          }
        );
      }
    },
    submitpro() {
      if (this.addpro == "") {
        this.prooff = false;
      } else {
        this.$api.get(
          "experience.php",
          { userid: this.id, sortid: 1, type: 0, content: this.addpro },
          data => {
            this.proarr = data;
            this.prooff = false;
          }
        );
      }
    },
    submit() {
      this.$api.get(
        "setuser.php",
        { id: this.id, name: "dec", value: this.user.dec },
        data => {
          this.user = data[0];
          this.setoff = false;
        }
      );
    },
    updatawork(index) {
      if (this.workarr[index].content == "") {
        if (confirm("是否确认删除")) {
          let id = this.workarr[index].id;
          this.$api.get(
            "experience.php",
            { id: id, userid: this.id, sortid: 0, type: 2 },
            data => {
              this.workarr = data;
              this.workindex = -1;
            }
          );
        } else {
          this.$api.get(
            "experience.php",
            { userid: this.id, sortid: 0, type: 3 },
            data => {
              this.workarr = data;
              this.workindex = -1;
            }
          );
        }
      } else {
        let id = this.workarr[index].id;
        let content = this.workarr[index].content;
        this.$api.get(
          "experience.php",
          { id: id, userid: this.id, sortid: 0, type: 1, content: content },
          data => {
            console.log(data);
            this.workarr = data;
            this.workindex = -1;
          }
        );
      }
    },
    updatapro(index) {
      if (this.proarr[index].content == "") {
        if (confirm("是否确认删除")) {
          let id = this.proarr[index].id;
          this.$api.get(
            "experience.php",
            { id: id, userid: this.id, sortid: 1, type: 2 },
            data => {
              this.proarr = data;
              this.proindex = -1;
            }
          );
        } else {
          this.$api.get(
            "experience.php",
            { userid: this.id, sortid: 1, type: 3 },
            data => {
              this.proarr = data;
              this.proindex = -1;
            }
          );
        }
      } else {
        let id = this.proarr[index].id;
        let content = this.proarr[index].content;
        this.$api.get(
          "experience.php",
          { id: id, userid: this.id, sortid: 1, type: 1, content: content },
          data => {
            this.proarr = data;
            this.proindex = -1;
          }
        );
      }
    }
  },
  created() {
    this.id = this.$route.params.id;
    let id = this.id;
    this.$api.get("home.php", { id: id }, data => {
      this.user = data[0];
    });
    this.$api.get(
      "experience.php",
      { userid: id, sortid: 0, type: 3 },
      data => {
        this.workarr = data;
      }
    );
    this.$api.get(
      "experience.php",
      { userid: id, sortid: 1, type: 3 },
      data => {
        this.proarr = data;
      }
    );
    this.off = this.$api.login(this.id);

  }
};
</script>
<style scoped>
.header {
  color: #666;
  font-size: 18px;
  line-height: 50px;
  border-bottom: 2px solid #608a60;
  margin-top: 10px;
}
.body {
  padding-top: 20px;
}
.body img {
  width: 100%;
}
.title {
  font-size: 15px;
  color: #333;
  line-height: 50px;
}
.add {
  float: right;
  font-size: 20px;
  margin-right: 15px;
}
.add:hover {
  color: #ed3f14;
}

.list {
  font-size: 14px;
  color: #666;
}
.content {
  font-size: 15px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #ccc;
  line-height: 22px;
}
.addbtn {
  background: #608a60;
  color: #fff;
}
.addpage {
  text-align: right;
  float: right;
  display: inline-block;
  
}
.addpage button {
  outline: none;
}
</style>

