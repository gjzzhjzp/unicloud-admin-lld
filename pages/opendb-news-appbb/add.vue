<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="app_bbmc" label="版本名称" required>
        <uni-easyinput placeholder="版本名称" v-model="formData.app_bbmc"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="app_bbh" label="版本号" required>
        <uni-easyinput placeholder="版本号" type="number" v-model="formData.app_bbh"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="app_bbtp" label="二维码图片" required>
        <uni-file-picker limit="1" file-mediatype="image" return-type="array" v-model="formData.app_bbtp"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="app_bbdz" label="apk地址" required>
        <uni-easyinput placeholder="apk地址" v-model="formData.app_bbdz"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="app_bbsm" label="版本升级说明" required>
        <uni-easyinput type="textarea" placeholder="版本升级说明" v-model="formData.app_bbsm"></uni-easyinput>
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
  import { validator } from '../../js_sdk/validator/opendb-news-appbb.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'opendb-news-appbb';

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
        "app_bbmc": "",
        "app_bbh": null,
        "app_bbtp": [],
        "app_bbdz": "",
        "app_bbsm": ""
      }
      return {
        formData,
        formOptions: {},
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
