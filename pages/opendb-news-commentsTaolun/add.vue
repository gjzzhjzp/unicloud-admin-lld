<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="article_id" label="文章ID" required>
        <uni-easyinput placeholder="文章ID，jz-opendb-taolun 表中的`_id`字段" v-model="formData.article_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="comment_content" label="评论内容" required>
        <uni-easyinput placeholder="评论内容" v-model="formData.comment_content" trim="right"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="like_count" label="评论喜欢数、点赞数" required>
        <uni-easyinput placeholder="评论喜欢数、点赞数" type="number" v-model="formData.like_count"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="comment_type" label="回复类型" required>
        <uni-easyinput placeholder="回复类型： 0 针对文章的回复  1 针对评论的回复" type="number" v-model="formData.comment_type"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="reply_user_id" label="评论用户ID" required>
        <uni-easyinput placeholder="被回复的评论用户ID，comment_type为1时有效" v-model="formData.reply_user_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="reply_comment_id" label="被回复的评论ID" required>
        <uni-easyinput placeholder="被回复的评论ID，comment_type为1时有效" v-model="formData.reply_comment_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="all_reply_comment_id" label="所有被回复的评论ID">
        <uni-easyinput placeholder="所有被回复的评论ID，comment_type为1时有效" v-model="formData.all_reply_comment_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="comment_cj" label="评论层级">
        <uni-easyinput placeholder="评论层级" type="number" v-model="formData.comment_cj"></uni-easyinput>
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
  import { validator } from '../../js_sdk/validator/opendb-news-commentsTaolun.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'opendb-news-commentsTaolun';

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
        "article_id": "",
        "comment_content": "",
        "like_count": null,
        "comment_type": null,
        "reply_user_id": "",
        "reply_comment_id": "",
        "all_reply_comment_id": "",
        "comment_cj": null
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
