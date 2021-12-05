<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="type" label="留言类型" required>
        <uni-data-checkbox v-model="formData.type" :localdata="formOptions.type_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="content" label="留言内容/回复内容" required>
        <textarea @input="binddata('content', $event.detail.value)" class="uni-textarea-border" v-model="formData.content" trim="right"></textarea>
      </uni-forms-item>
      <uni-forms-item name="imgs" label="图片列表">
        <uni-file-picker file-mediatype="image" return-type="array" v-model="formData.imgs"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="contact" label="联系人">
        <uni-easyinput v-model="formData.contact" trim="both"></uni-easyinput>
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
  import { validator } from '../../js_sdk/validator/opendb-feedback.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'opendb-feedback';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        result[key] = validator[key]
      }
    }
    return result
  }

  export default {
    data() {
      let formData = {
        "type": 0,
        "content": "",
        "imgs": [],
        "contact": ""
      }
      return {
        formData,
        formOptions: {
          "type_localdata": [
            {
              "value": 0,
              "text": "系统bug"
            },
            {
              "value": 1,
              "text": "意见建议"
            },
            {
              "value": 2,
              "text": "版权质疑"
            },
            {
              "value": 3,
              "text": "我有话说"
            }
          ]
        },
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      }
    }
  }
</script>
