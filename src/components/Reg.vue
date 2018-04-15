<template>
  <div id="reg">
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <Form-item label="姓名" prop="name">
      <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
    </Form-item>
    <Form-item label="邮箱" prop="mail">
      <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
    </Form-item>
    <Form-item label="现居城市" prop="city">
      <Input v-model="formValidate.city" placeholder="请输入所在地"></Input>
    </Form-item>
    <Form-item label="密码" prop="password">
      <Input v-model="formValidate.password" type="password" placeholder="请输入密码"></Input>
    </Form-item>
    <Form-item label="出生日期">
      <Row>
        <Col span="11">
        <Form-item prop="date">
          <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
        </Form-item>
        </Col>
      </Row>
    </Form-item>
    <Form-item label="性别" prop="gender">
      <Radio-group v-model="formValidate.gender">
        <Radio label="1">男</Radio>
        <Radio label="2">女</Radio>
      </Radio-group>
    </Form-item>
    <Form-item label="爱好" prop="interest">
      <Checkbox-group v-model="formValidate.interest">
        <Checkbox label="美食"></Checkbox>
        <Checkbox label="睡觉"></Checkbox>
        <Checkbox label="健身"></Checkbox>
        <Checkbox label="看电影"></Checkbox>
        <Checkbox label="旅游"></Checkbox>
        <Checkbox label="看书"></Checkbox>
        <Checkbox label="看电视剧"></Checkbox>
        <Checkbox label="动漫"></Checkbox>
        <Checkbox label="逛街"></Checkbox>
        <Checkbox label="学习"></Checkbox>
      </Checkbox-group>
    </Form-item>
    <Form-item label="介绍" prop="desc">
      <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
    </Form-item>
    <Form-item label="上传照片" prop="head">
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
        multiple
        :data="{id:id}"
        type="drag"
        :action="url+'/uploadimg.php'"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
          <Icon type="camera" size="20"></Icon>
        </div>
      </Upload>
      <Modal title="查看图片" v-model="visible">
        <img :src="url+'/img/'+id+'/' + imgName" v-if="visible" style="width: 100%">
      </Modal>
    </Form-item>
    <Form-item>
      <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
      <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
    </Form-item>
  </Form>
  </div>
</template>
<script>
  export default {
      name:"reg",
    data () {
      return {
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],//数组需要转换成字符串
          date: '',//时间戳需要转换
          time: '',
          desc: '',
          password:''
        },
        defaultList: [

        ],
        imgName: '',
        visible: false,
        uploadList: [],
        ruleValidate: {
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
          city: [
            { required: true, message: '请输入城市', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' }
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          interest: [
            { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
            { type: 'array', max: 4, message: '最多选择四个爱好', trigger: 'change' }
          ],
          date: [
            { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请输入个人介绍', trigger: 'blur' },
            { type: 'string', min: 30, message: '介绍不能少于30字', trigger: 'blur' }
          ]
        },
        id:''
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {

            this.$Message.success('提交成功!');
            let params = new URLSearchParams();
            params.append('id', this.id);
            params.append('type', 1);
            params.append('name', this.formValidate.name);
            params.append('email', this.formValidate.mail);
            params.append('city', this.formValidate.city);
            this.formValidate.date
            let a = new Date(this.formValidate.date);
            let monum = Number(a.getMonth())+1;
            let mouth = monum>10?monum:'0'+monum;
            let day = Number(a.getDate());
            day = day>10?day:'0'+day;
            let time = a.getFullYear()+'-'+mouth+'-'+day;
            params.append('days', time);
            params.append('sex', this.formValidate.gender);
            params.append('liker', this.formValidate.interest.toString());
            params.append('dec', this.formValidate.desc);
            params.append('header', this.imgName);
            params.append('password', this.formValidate.password);
            this.$api.post("regs.php", params, data => {
                console.log(data);
              });
          } else {
            this.$Message.error('表单验证失败!');
            console.log(this.formValidate.date)
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      handleView (name) {
        this.imgName = name;
        this.visible = true;
      },
      handleRemove (file) {
        // 从 upload 实例删除数据
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess (res, file) {
        // 因为上传过程为实例，这里模拟添加 url
        file.url = this.url+'/img/'+this.id+'/' +res;
        this.imgName = res;
        file.name = res;
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
        });
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: '超出文件大小限制',
          desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
        });
      },
      handleBeforeUpload () {
        const check = this.uploadList.length < 1;
        if (!check) {
          this.$Notice.warning({
            title: '最多只能上传 1 张图片。'
          });
        }
        return check;
      }
    },
    mounted(){
      this.uploadList = this.$refs.upload.fileList;
      let params = new URLSearchParams();
      params.append('type', 0);
      this.$api.post("regs.php", params, data => {
      console.log(data);
      this.id = data;
    });
    }
  }
</script>
<style scoped>
  .demo-upload-list{
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
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>
