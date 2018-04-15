<template>
  <div id="photo">
      <div  v-for="(v,index) in imgarr">
        <Card style="width:300px" class="card" >
        <div style="text-align:center">
            <img :src="url+'/img/'+id+'/'+v.content" @click="show(index)">
            <h3 v-if="index!=imgindex" @dblclick="setname(index)">{{v.name==''?'无标题':v.name}}</h3>
            <Input v-else v-model="imgarr[index].name" @on-blur="updataimg(index)"  placeholder="输入图片的名称" clearable></Input>
        </div>
        </Card>
      </div>
<Card style="width:300px" class="card" >
         <Upload
        ref="upload"
        :show-upload-list="false"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        type="drag"
        name="file"
        :data="{id:id}"
        action="http://127.0.0.1/workphp/uploadimg.php">
         
        <div style="padding: 20px 0;height:185px;">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff;margin-top:35px;"></Icon>
            <p>点击或者拖拽图片到此处，完成图片上传</p>
        </div>
        
    </Upload>
    </Card>
    <div class="meng" v-show="visible"  @click="hide"></div>
      <transition name="side">
        <div class="modal" v-show="visible">
           <img class="bgimg" :src="url+'/img/'+id+'/'+model.content"  @dblclick="del(model.id)"  alt="">
      </div> 
      </transition>
  </div>
</template>
<script>
export default {
  name: "photo",
  data() {
    return {
      model: false,
      num: 8,
      visible: false,
      id: 0,
      imgarr: [],
      model: {},
      imgindex: -1
    };
  },
  methods: {
    show(index) {
      this.visible = true;
      this.model = this.imgarr[index];
    },
    hide() {
      this.visible = false;
    },
    setname(index) {
      this.imgindex = index;
    },
    del(id) {
      if (confirm("是否确认删除图片")) {
        this.$api.get(
          "photo.php",
          { id: id, userid: this.id, sortid: 0, type: 2 },
          data => {
            console.log(data);
            this.imgarr = data;
            this.imgindex = -1;
            this.visible = false;
          }
        );
      }
    },
    updataimg(index) {
      let id = this.imgarr[index].id;
      let name = this.imgarr[index].name;
      this.$api.get(
        "photo.php",
        { id: id, userid: this.id, sortid: 0, type: 1, name: name },
        data => {
          console.log(data);
          this.imgarr = data;
          this.imgindex = -1;
        }
      );
    },
    handleSuccess(res) {
        this.$api.get("photo.php", { userid: this.id, sortid: 0, type: 0,content:res }, data => {
            this.imgarr = data;
        });
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "文件类型错误",
        desc: "文件 " + file.name + " 类型是错误的, 请选择PNG或者jpg类型图片."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "图片过大",
        desc: "文件  " + file.name + " 太大了, 不能超过 2M."
      });
    }
  },
  created() {
    this.id = this.$route.params.id;
    let id = this.id;
    this.$api.get("photo.php", { userid: id, sortid: 0, type: 3 }, data => {
      this.imgarr = data;
    });
  }
};
</script>
<style scoped>
.card img {
  width: 100%;
}
#photo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  margin: 10px;
}
.card h3 {
  color: #666;
}
.side-enter-active {
  animation: side-in 0.5s;
}
.side-leave-active {
  animation: side-in 0.5s reverse;
}
@keyframes side-in {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
.meng {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(55, 55, 55, 0.6);
  height: 100%;
  z-index: 1000;
}
.modal {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: absolute;
  padding: 10px;
  border-radius: 8px;
  outline: 0;
  top: 0px;
  background: #fff;
  z-index: 1001;
}
.img {
  width: 300px;
  height: 200px;
  background-position: center;
  background-size: cover;
  margin: 10px;
}
.bgimg {
  max-width: 100%;
}
</style>


