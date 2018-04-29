<template>
  <div id="addpage">
      <div class="title">
           <Select v-model="model1" style="width:20%" v-if="type==0">
                <Option v-for="item in cityList" :value="item.id" :key="item.id">{{ item.title }}</Option>
            </Select>
            <Input v-model="title" placeholder="请输入文章的标题" clearable style="width: 75%"></Input>
      </div>
      <div class="dec">
          <Input v-model="dec" type="textarea" :rows="4" placeholder="请输入文章的摘要"></Input>
      </div>
         <div class="demo-upload-list" v-for="item in uploadList">
        <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
        </template>
        <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
    </div>
    <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        type="drag"
        name="file"
        :data="{id:id}"
        :action="url+'/uploadimg.php'"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="camera" size="20"></Icon>
        </div>
    </Upload>
    <Modal title="View Image" v-model="visible">
        <img :src="url+'/img/'+id+'/'+imgName" v-if="visible" style="width: 100%">
    </Modal>
        <quill-editor v-model="content"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)">
        </quill-editor>
        <div class="bottombtn">
            <Button type="info" @click="submit">发表博客</Button>
            <router-link :to="'/home/'+id"><Button type="warning">返回</Button></router-link>
        </div>
        
  </div>
</template>

<script>
import Quill from "quill";
export default {
  name: "addpage",
  data() {
    return {
      content: "请输入文章的内容",
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"]
          ]
        }
      },
      cityList: [],
      model1: "",
      title: "",
      dec: "",
      defaultList: [],
      imgName: "",
      visible: false,
      uploadList: [],
      id: "",
      type: ""
    };
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur(quill) {

    },
    onEditorFocus(quill) {
 
    },
    onEditorReady(quill) {

    },
    onEditorChange({ quill, html, text }) {
 
      this.content = html;
    },
    submit() {
      if (this.title == "") {
        this.$Notice.error({
          title: "网站提示",
          desc: "文章标题不能为空 "
        });
      } else if (this.dec == "") {
        this.$Notice.error({
          title: "网站提示",
          desc: "文章摘要不能为空 "
        });
      } else if (this.uploadList.length == 0) {
        this.$Notice.error({
          title: "网站提示",
          desc: "文章封面图片不能为空 "
        });
      } else if (this.content == "") {
        this.$Notice.error({
          title: "网站提示",
          desc: "文章内容不能为空 "
        });
      } else {
        if (this.type == "0") {
          let params = {
            id: this.id,
            sortid: this.model1,
            scroe: 1,
            sortname: this.title,
            img: this.uploadList[0].name,
            content: this.content,
            dec: this.dec
          };
          this.$api.get("addsort.php", params, data => {
            this.$router.push("/home/" + this.id);
          });
        }else{
          let params = {
            id: this.id,
            sortid: -1,
            scroe: 1,
            sortname: this.title,
            img: this.uploadList[0].name,
            content: this.content,
            dec: this.dec
          };
          this.$api.get("addsort.php", params, data => {
            this.$router.push("/day/" + this.id);
          });
        }
      }
    },
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {

       file.url = this.url+'/img/' + this.id + "/" + res;
      file.name = res;
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
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 1;
      if (!check) {
        this.$Notice.warning({
          title: "只能上传一张图片"
        });
      }
      return check;
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    this.uploadList = this.$refs.upload.fileList;
    this.id = this.$route.params.id;
    this.type = this.$route.params.type;
    
    let id = this.id;
    if (this.type == "0") {
      this.$api.get("home.php", { id: id }, data => {
      
        this.cityList = data[0].pages;
        this.model1 = data[0].pages[0].id;
      });
    } else {
    }
  }
};
</script>
<style  scoped>
.quill-editor {
  width: 100%;
  height: 400px;
}
.bottombtn {
  margin-top: 80px;
}
.bottombtn button {
  margin-left: 20px;
}
.title,
.dec {
  margin: 10px 0;
}
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>



