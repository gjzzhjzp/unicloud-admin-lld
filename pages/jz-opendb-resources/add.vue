<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="categories" label="分类">
        <uni-easyinput placeholder="分类" v-model="formData.categories" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="categorieszw" label="分类中文">
        <uni-easyinput placeholder="分类中文" v-model="formData.categorieszw" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="labels" label="标签">
        <uni-easyinput placeholder="多个标签以逗号隔开" v-model="formData.labels" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="author" label="作者" required>
        <uni-easyinput placeholder="请输入作者" v-model="formData.author" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="title" label="标题" required>
        <uni-easyinput placeholder="请输入标题" v-model="formData.title" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="article_status" label="文章状态">
        <uni-data-checkbox v-model="formData.article_status" :localdata="formOptions.article_status_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="comment_status" label="开放评论">
        <uni-data-checkbox v-model="formData.comment_status" :localdata="formOptions.comment_status_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="avatar" label="封面大图">
        <uni-file-picker file-mediatype="image" return-type="object" v-model="formData.avatar"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="resources" label="附件资源">
        <uni-file-picker file-mediatype="all" return-type="array" v-model="formData.resources"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="zy_gs" label="资源格式">
        <uni-easyinput placeholder="资源格式，如img图集,text文章，MP3音乐，mp4视频" v-model="formData.zy_gs"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="excerpt" label="摘要">
        <uni-easyinput placeholder="请输入摘要" v-model="formData.excerpt" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="content" label="内容">
        <uni-easyinput placeholder="请输入内容" v-model="formData.content" trim="right"></uni-easyinput>
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
  import { validator } from '../../js_sdk/validator/jz-opendb-resources.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'jz-opendb-resources';

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
        "categories": "",
        "categorieszw": "",
        "labels": "",
        "author": "",
        "title": "",
        "article_status": 0,
        "comment_status": 0,
        "avatar": null,
        "resources": [],
        "zy_gs": "",
        "excerpt": "",
        "content": ""
      }
      return {
        formData,
        formOptions: {
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
          "comment_status_localdata": [
            {
              "value": 0,
              "text": "关闭"
            },
            {
              "value": 1,
              "text": "开放"
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
