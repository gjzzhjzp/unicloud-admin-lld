<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="user_name_type" label="账号平台">
        <uni-data-checkbox v-model="formData.user_name_type" :localdata="formOptions.user_name_type_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="user_type" label="使用状态">
        <uni-data-checkbox v-model="formData.user_type" :localdata="formOptions.user_type_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="user_name" label="账号昵称">
        <uni-easyinput placeholder="账号昵称" v-model="formData.user_name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="value" label="邀请码">
        <uni-easyinput placeholder="邀请码" v-model="formData.value" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="status" label="生效状态">
        <switch @change="binddata('status', $event.detail.value)" :checked="formData.status"></switch>
      </uni-forms-item>
      <uni-forms-item name="date" label="创建时间">
        <uni-easyinput placeholder="创建时间" v-model="formData.date"></uni-easyinput>
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
  import { validator } from '../../js_sdk/validator/jz-custom-yqm.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'jz-custom-yqm';

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
        "user_name_type": 0,
        "user_type": 0,
        "user_name": "",
        "value": "",
        "status": false,
        "date": ""
      }
      return {
        formData,
        formOptions: {
          "user_name_type_localdata": [
            {
              "value": 0,
              "text": "微博"
            },
            {
              "value": 1,
              "text": "抖音"
            }
          ],
          "user_type_localdata": [
            {
              "value": 0,
              "text": "资源"
            },
            {
              "value": 1,
              "text": "平台"
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
