<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
<uni-forms-item name="name" label="姓名" required>
  <uni-easyinput v-model="formData.name" trim="both" />
</uni-forms-item>
<uni-forms-item name="parent_id" label="父节点">
  <uni-easyinput placeholder="父id。不支持继父。可表示配偶" v-model="formData.parent_id" />
</uni-forms-item>
<uni-forms-item name="parent_relationship" label="与父节点的关系">
  <uni-data-checkbox disable="true" v-model="formData.parent_relationship" :localdata="formOptions.parent_relationship_localdata" />
</uni-forms-item>
<uni-forms-item name="parent_partner_id" label="">
  <uni-easyinput placeholder="母id。如果parent是女性，则本字段代表父亲" v-model="formData.parent_partner_id" />
</uni-forms-item>
<uni-forms-item name="gender" label="性别">
  <uni-data-checkbox v-model="formData.gender" :localdata="formOptions.gender_localdata" />
</uni-forms-item>
<uni-forms-item name="birthyear" label="出生年份">
  <uni-easyinput type="number" v-model="formData.birthyear" />
</uni-forms-item>
<uni-forms-item name="dieyear" label="死亡年份">
  <uni-easyinput type="number" v-model="formData.dieyear" />
</uni-forms-item>
<uni-forms-item name="birthlocation" label="出生地点">
  <uni-easyinput v-model="formData.birthlocation" trim="both" />
</uni-forms-item>
<uni-forms-item name="finallocation" label="最后地点">
  <uni-easyinput placeholder="未亡人填写现居住地" v-model="formData.finallocation" trim="both" />
</uni-forms-item>
<uni-forms-item name="idcard" label="身份证号">
  <uni-easyinput v-model="formData.idcard" trim="both" />
</uni-forms-item>
<uni-forms-item name="nation" label="民族">
  <uni-easyinput v-model="formData.nation" trim="both" />
</uni-forms-item>
<uni-forms-item name="policital_status" label="政治面貌">
  <uni-data-checkbox v-model="formData.policital_status" :localdata="formOptions.policital_status_localdata" />
</uni-forms-item>
<uni-forms-item name="school" label="毕业学校">
  <uni-easyinput v-model="formData.school" trim="both" />
</uni-forms-item>
<uni-forms-item name="education" label="学历">
  <uni-data-checkbox v-model="formData.education" :localdata="formOptions.education_localdata" />
</uni-forms-item>
<uni-forms-item name="professional_title" label="职称">
  <uni-data-checkbox v-model="formData.professional_title" :localdata="formOptions.professional_title_localdata" />
</uni-forms-item>
<uni-forms-item name="company" label="工作单位">
  <uni-easyinput v-model="formData.company" trim="both" />
</uni-forms-item>
<uni-forms-item name="worktitle" label="职务">
  <uni-easyinput v-model="formData.worktitle" trim="both" />
</uni-forms-item>
<uni-forms-item name="resume" label="简历">
  <textarea @input="binddata('resume', $event.detail.value)" class="uni-textarea-border" :value="formData.resume" trim="both"></textarea>
</uni-forms-item>
<uni-forms-item name="photo_person" label="个人照片">
  <uni-file-picker file-mediatype="image" :file-extname="jpg" return-type="object" v-model="formData.photo_person" />
</uni-forms-item>
<uni-forms-item name="photo_family" label="家庭照片">
  <uni-file-picker file-mediatype="image" :file-extname="jpg,png" return-type="object" v-model="formData.photo_family" />
</uni-forms-item>
<uni-forms-item name="comment" label="备注">
  <textarea @input="binddata('comment', $event.detail.value)" class="uni-textarea-border" :value="formData.comment" trim="both"></textarea>
</uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
            <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/familytree.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'familytree';

  function getValidator(fields) {
    let reuslt = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        reuslt[key] = validator[key]
      }
    }
    return reuslt
  }

  export default {
    data() {
      return {
        formData: {
  "nation": "汉族",
  "name": "",
  "parent_id": "",
  "parent_relationship": "",
  "parent_partner_id": "",
  "gender": 1,
  "birthyear": null,
  "dieyear": null,
  "birthlocation": "",
  "finallocation": "",
  "idcard": "",
  "policital_status": "群众",
  "school": "",
  "education": "",
  "professional_title": "",
  "company": "",
  "worktitle": "",
  "resume": "",
  "photo_person": null,
  "photo_family": null,
  "comment": ""
},
        formOptions: {
  "parent_relationship_localdata": [
    {
      "text": "子女",
      "value": "parent"
    },
    {
      "text": "配偶",
      "value": "partner"
    }
  ],
  "gender_localdata": [
    {
      "text": "男",
      "value": 1
    },
    {
      "text": "女",
      "value": 2
    }
  ],
  "policital_status_localdata": [
    {
      "text": "群众",
      "value": "群众"
    },
    {
      "text": "党员",
      "value": "党员"
    }
  ],
  "education_localdata": [
    {
      "text": "博士后",
      "value": "博士后"
    },
    {
      "text": "博士",
      "value": "博士"
    },
    {
      "text": "硕士",
      "value": "硕士"
    },
    {
      "text": "本科",
      "value": "本科"
    },
    {
      "text": "大专",
      "value": "大专"
    },
    {
      "text": "高中",
      "value": "高中"
    },
    {
      "text": "中专",
      "value": "中专"
    },
    {
      "text": "初中",
      "value": "初中"
    },
    {
      "text": "小学",
      "value": "小学"
    },
    {
      "text": "无",
      "value": "无"
    }
  ],
  "professional_title_localdata": [
    {
      "value": "无",
      "text": "无"
    },
    {
      "value": "正高级",
      "text": "正高级"
    },
    {
      "value": "副高级",
      "text": "副高级"
    },
    {
      "value": "中级",
      "text": "中级"
    },
    {
      "value": "初级",
      "text": "初级"
    }
  ]
},
        rules: {
          ...getValidator(["name","idcard","parent_id","parent_relationship","parent_partner_id","gender","birthyear","dieyear","birthlocation","finallocation","nation","policital_status","school","education","professional_title","company","worktitle","resume","photo_person","photo_family","comment"])
        }
      }
    },
    onLoad(e) {
      const id = e.id
      this.formDataId = id
      this.getDetail(id)
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      /**
       * 触发表单提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.submit().then((res) => {
          this.submitForm(res)
        }).catch((errors) => {
          uni.hideLoading()
        })
      },

      submitForm(value) {
        // 使用 clientDB 提交数据
        db.collection(dbCollectionName).doc(this.formDataId).update(value).then((res) => {
          uni.showToast({
            title: '修改成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 获取表单数据
       * @param {Object} id
       */
      getDetail(id) {
        uni.showLoading({
          mask: true
        })
        db.collection(dbCollectionName).doc(id).get().then((res) => {
          const data = res.result.data[0]
          if (data) {
            this.formData = data
          }
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      }
    }
  }
</script>
