<template>
	<view class="uni-container">
		<uni-forms ref="form" :value="formData" validateTrigger="bind">
			<uni-forms-item name="title" label="标题" required>
				<uni-easyinput placeholder="请输入标题" v-model="formData.title" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="author" label="来源" required>
				<uni-easyinput placeholder="请输入来源" v-model="formData.author" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="categorieszw" label="分类">
				<uni-easyinput placeholder="请选择分类" v-model="formData.categorieszw" trim="both" @focus="opencategories">
				</uni-easyinput>
				<yunmiao-cascader :select-value="formData.categories" ref="cascader" value-name="flbm"
					:cascaderData="cascaderData" @confirem="cascaderConfirem"></yunmiao-cascader>
				<!-- <uni-easyinput placeholder="分类" v-model="formData.categories" trim="both"></uni-easyinput> -->
			</uni-forms-item>
			<!-- <uni-forms-item name="categorieszw" label="分类中文">
        <uni-easyinput placeholder="分类中文" v-model="formData.categorieszw" trim="both"></uni-easyinput>
      </uni-forms-item> -->
			<uni-forms-item name="labels" label="标签">
				<uni-easyinput placeholder="多个标签以逗号隔开" v-model="formData.labels" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="article_status" label="状态">
				<uni-data-checkbox v-model="formData.article_status" :localdata="formOptions.article_status_localdata">
				</uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item name="avatar" label="封面大图" required>
				<uni-file-picker limit="1" file-mediatype="image" return-type="array" v-model="formData.avatar">
				</uni-file-picker>
			</uni-forms-item>
			<uni-forms-item name="zy_gs" label="资源类型">
				<uni-data-checkbox v-model="formData.zy_gs" :localdata="formOptions.zy_gs_localdata">
				</uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item name="resources" label="附件资源">
				<template v-if="formData.zy_gs==0">
					<uni-file-picker file-mediatype="image" return-type="array" v-model="formData.resources">
					</uni-file-picker>
				</template>
				<template v-else>
					<uni-file-picker file-mediatype="all" :limit="1" return-type="array" v-model="formData.resources">
					</uni-file-picker>
				</template>
			</uni-forms-item>
			<!-- <uni-forms-item name="resources" label="附件资源">
        <uni-file-picker file-mediatype="all" return-type="array" v-model="formData.resources"></uni-file-picker>
      </uni-forms-item> -->
			<uni-forms-item name="aliyun_dz" label="外链">
				<uni-easyinput placeholder="请输入外链地址" v-model="formData.aliyun_dz" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="excerpt" label="内容">
				<uni-easyinput placeholder="请输入内容" v-model="formData.excerpt" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="is_grant" label="是否授权">
				<uni-data-checkbox v-model="formData.is_grant" :localdata="formOptions.is_grant_localdata">
				</uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item name="is_encryption" label="是否加密">
				<uni-data-checkbox v-model="formData.is_encryption" :localdata="formOptions.is_encryption_localdata">
				</uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item v-if="isManger" name="is_off" label="是否下架">
				<uni-data-checkbox v-model="formData.is_off" :localdata="formOptions.is_off_localdata">
				</uni-data-checkbox>
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
	import {
		validator
	} from '../../js_sdk/validator/jz-opendb-resources.js';
const BASE64 = require("../system/common/base64.js")
	const db = uniCloud.database();
	const dbCmd = db.command;
	const dbCollectionName = 'jz-opendb-resources';
	import zycommon from "./zycommon.js"

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
		mixins: [zycommon],
		data() {
			let formData = {
				"title": "",
				"author": "",
				"categories": "",
				"categorieszw": "",
				"labels": "",
				"article_status": 0,
				"avatar": null,
				"zy_gs": 0,
				"resources": [],
				"aliyun_dz": "",
				"excerpt": "",
				"is_grant": 0,
				"is_encryption": 0
			}
			return {
				formData,
				formOptions: {
					"article_status_localdata": [{
							"value": 0,
							"text": "锁定"
						},
						{
							"value": 1,
							"text": "启用"
						}
					],
					"is_off_localdata": [{
							"value": 0,
							"text": "不下架"
						},
						{
							"value": 1,
							"text": "下架"

						}
					],
					"zy_gs_localdata": [{
							"value": 0,
							"text": "图片"
						},
						{
							"value": 1,
							"text": "视频"
						},
						{
							"value": 2,
							"text": "音乐"
						},
						{
							"value": 3,
							"text": "文章"
						}
					],
					"is_grant_localdata": [{
							"value": 0,
							"text": "未授权"
						},
						{
							"value": 1,
							"text": "已授权"
						}
					],
					"is_encryption_localdata": [{
							"value": 0,
							"text": "不加密"
						},
						{
							"value": 1,
							"text": "加密"
						}
					]
				},
				rules: {
					...getValidator(Object.keys(formData))
				},
				isManger:true
			}
		},
		onLoad(e) {
			if (e.id) {
				const id = e.id
				this.formDataId = id
				this.getDetail(id)
			}
		},
		onReady() {
			var roles=this.getUserRole();
			// 如果仅是上传资源
			if(roles.indexOf('only_zylist')!=-1){
				this.isManger=false;
			}else{
				this.isManger=true;
			}
			this.$refs.form.setRules(this.rules)
		},
		methods: {
			getUserRole() {
				var _token = uni.getStorageSync("uni_id_token");
				var __token = {};
				if (_token) {
					_token = _token.split(".")[1];
					var __token = BASE64.decode(_token);
					__token = JSON.parse(__token.split("}")[0] + "}");
				}
				return __token.role;
			},
			/**
			 * 验证表单并提交
			 */
			submit() {
				uni.showLoading({
					mask: true
				})
				this.$refs.form.validate().then((res) => {
					return this.submitForm(res)
				}).catch(() => {}).finally(() => {
					uni.hideLoading()
				})
			},

			/**
			 * 提交表单
			 */
			submitForm(value) {
				// 使用 clientDB 提交数据
				// debugger;
				Object.assign(value, {
					categories: this.formData.categories,
					last_modify_date:db.env.now
				});
				return db.collection(dbCollectionName).doc(this.formDataId).update(value).then((res) => {
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
				db.collection(dbCollectionName).doc(id).field(
					"title,author,categories,categorieszw,labels,is_off,article_status,avatar,zy_gs,resources,aliyun_dz,excerpt,is_grant,is_encryption"
					).get().then((res) => {
					const data = res.result.data[0];
					if (!Array.isArray(data.avatar)) {
						data.avatar = [data.avatar];
					}
					if (data) {
						this.formData = data;
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
