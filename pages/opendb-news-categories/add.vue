<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="flbm" label="分类编码" required>
        <uni-easyinput placeholder="分类编码" v-model="formData.flbm" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="parent_flbm" label="父级分类编码">
        <uni-easyinput placeholder="父级分类编码" v-model="formData.parent_flbm"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="name" label="名称" required>
        <uni-easyinput placeholder="类别名称" v-model="formData.name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="description" label="描述">
        <uni-easyinput placeholder="类别描述" v-model="formData.description" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="icon" label="图标地址">
        <uni-file-picker limit="1" file-mediatype="image" return-type="array" v-model="formData.icon"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="path" label="点击跳转地址">
        <uni-easyinput placeholder="点击跳转地址" v-model="formData.path" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="sort" label="排序">
        <uni-easyinput placeholder="类别显示顺序" type="number" v-model="formData.sort"></uni-easyinput>
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
  import { validator } from '../../js_sdk/validator/opendb-news-categories.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'opendb-news-categories';

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
        "flbm": "",
        "parent_flbm": "",
        "name": "",
        "description": "",
        "icon": [],
        "path": "",
        "sort": null
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
      this.$refs.form.setRules(this.rules);
	  
    },
	onLoad(e){
		console.log("formData",e);
		this.$set(this.formData,"parent_flbm",e.parent_flbm);
		this.$set(this.formData,"flbm",e.next_flbm);
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
