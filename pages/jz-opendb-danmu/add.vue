<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="resource_id" label="资源id" required>
        <uni-easyinput placeholder="资源id" v-model="formData.resource_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="danmu_time" label="弹幕时间">
        <uni-easyinput placeholder="弹幕时间" type="number" v-model="formData.danmu_time"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="danmu_color" label="弹幕颜色">
        <uni-easyinput placeholder="弹幕颜色" v-model="formData.danmu_color" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="danmu_text" label="弹幕内容">
        <uni-easyinput placeholder="弹幕内容" v-model="formData.danmu_text" trim="both"></uni-easyinput>
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
  import { validator } from '../../js_sdk/validator/jz-opendb-danmu.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'jz-opendb-danmu';

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
        "resource_id": "",
        "danmu_time": null,
        "danmu_color": "",
        "danmu_text": ""
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
