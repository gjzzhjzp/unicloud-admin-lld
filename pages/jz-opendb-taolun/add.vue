<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="categories" label="分类">
        <uni-data-checkbox v-model="formData.categories" :localdata="formOptions.categories_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="article_status" label="文章状态">
        <uni-data-checkbox v-model="formData.article_status" :localdata="formOptions.article_status_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="pl_count" label="评论数">
        <uni-easyinput placeholder="评论数" type="number" v-model="formData.pl_count"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="resources" label="附件资源">
        <uni-file-picker file-mediatype="all" return-type="array" v-model="formData.resources"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="last_modify_date" label="最后修改时间">
        <uni-datetime-picker return-type="timestamp" v-model="formData.last_modify_date"></uni-datetime-picker>
      </uni-forms-item>
      <uni-forms-item name="excerpt" label="详情">
        <uni-easyinput placeholder="请输入详情" v-model="formData.excerpt" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="is_recommend" label="是否推荐">
        <uni-data-checkbox v-model="formData.is_recommend" :localdata="formOptions.is_recommend_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="is_off" label="是否下架">
        <uni-data-checkbox v-model="formData.is_off" :localdata="formOptions.is_off_localdata"></uni-data-checkbox>
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
  import { validator } from '../../js_sdk/validator/jz-opendb-taolun.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'jz-opendb-taolun';

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
        "categories": 0,
        "article_status": 0,
        "pl_count": null,
        "resources": [],
        "last_modify_date": null,
        "excerpt": "",
        "is_recommend": 0,
        "is_off": 0
      }
      return {
        formData,
        formOptions: {
          "categories_localdata": [
            {
              "value": 0,
              "text": "闲聊"
            },
            {
              "value": 1,
              "text": "磕糖"
            },
            {
              "value": 2,
              "text": "分享"
            },
            {
              "value": 3,
              "text": "其他"
            }
          ],
          "article_status_localdata": [
            {
              "value": 0,
              "text": "锁定"
            },
            {
              "value": 1,
              "text": "启用"
            }
          ],
          "is_recommend_localdata": [
            {
              "value": 0,
              "text": "不推荐"
            },
            {
              "value": 1,
              "text": "推荐"
            }
          ],
          "is_off_localdata": [
            {
              "value": 0,
              "text": "不下架"
            },
            {
              "value": 1,
              "text": "下架"
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
