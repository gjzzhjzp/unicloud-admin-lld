<template>
	<view class="uni-container">
		<uni-forms ref="form" :value="formData" validateTrigger="bind">
			<uni-forms-item label="群昵称">
				<lauwen-select :options="options" :defaultIndex="'one'" :height="45" :padding="15" :fontSize="'1rem'"
					@getValue="getValue"></lauwen-select>
				<!-- <uni-easyinput placeholder="群昵称" v-model="formData.user_name"></uni-easyinput> -->
			</uni-forms-item>
			<uni-forms-item name="start_date" label="开始时间">
				<uni-easyinput placeholder="开始时间" v-model="formData.start_date"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="end_date" label="结束时间">
				<uni-easyinput placeholder="结束时间" v-model="formData.end_date"></uni-easyinput>
			</uni-forms-item>
			<!-- <uni-forms-item name="three_name" label="三审负责人">
				<lauwen-select :options="three_options" :defaultIndex="'one'" :height="45" :padding="15" :fontSize="'1rem'"
					@getValue="getValue_three"></lauwen-select>
			</uni-forms-item> -->
			<view class="uni-button-group">
				<button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
				<button class="uni-button" @click="cancel" style="width: 100px;">返回</button>
			</view>
		</uni-forms>
	</view>
</template>

<script>
	import {
		validator
	} from '../../js_sdk/validator/jz-custom-shtime.js';
	import lauwenSelect from "@/components/lauwen-select/lauwenSelect.vue"
	const db = uniCloud.database();
	const dbCmd = db.command;
	const dbCollectionName = 'jz-custom-shtime';

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
				"user_name": "",
				"name": "",
				"start_date": "",
				"end_date": "",
				"three":"",
				"three_name":""
			}
			return {
				options: {
					'jz0511290404': "叶辞",
					'nongnong51129': "nongnong",
					'ft040805': "枫糖",
					'song20020411': "佩儒",
					'cqjzp1989': "皮皮",
					'sdd333': "瑶宝贝",
					'gjzzh460841568': "浪浪",
					'ndsms186181': "小孩",
					'cherish3': "崽崽",
					'qqh2249199237': "空空",
					'zhangjiawenlovejunzhe51129': "炮炮",
					'jzpmtdkx1640': "喝水",
					'jugjug1640': "点微博",
					'songqing12': "桃子",
					'ww51129': "缺点啥",
					'xiaodai': "小呆",
					'li012500': "川哥",
					'zyan02': "滟滟",
					'gyll0527': "霖霖",
					'jz0511291640v': "影子",
					'puppytae0926': "风车",
					'sujiujiu51129': "苏酒",
					'wuyu1640': "黑尾",
					'xiaomizhou310': "小米粥",
					'hyh0511291314': "十一⁵¹¹²⁹",
					'zyq20021011': "格格",
					'01271640jz': "含含",
					'gjzzh1640051129': "肖肖",
					'elfhome6': "欢小主",
					'peggie0006': "嘟嘟",
					'gjzzh051129193': "天天",
					'5112903yu': "jo",
					'jz5112916409192jz': "面团",
					'zuoeryazuoer123': "左耳",
					'wuhai233': "无害",
					'g511291640z': "葡萄",
					'jjsel1640': "恶龙",
					'jzp520579': "坑坑",
					'jz0511291640jz': "羲亭",
					'junzheyuzhoush1': "审核组公号1",
					'junzheyuzhoush2': "审核组公号2"
				},
				three_options:{
					'puppytae0926': "风车",
					'sujiujiu51129': "苏酒",
					'wuyu1640': "黑尾",
					'xiaomizhou310': "小米粥",
					'hyh0511291314': "十一⁵¹¹²⁹",
					'zyq20021011': "格格",
					'01271640jz': "含含",
					'gjzzh1640051129': "肖肖",
					'elfhome6': "欢小主",
					'peggie0006': "嘟嘟",
				},
				formData,
				formOptions: {},
				rules: {
					...getValidator(Object.keys(formData))
				}
			}
		},
		components: {
			lauwenSelect
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		methods: {
			getValue(value) {
				this.$set(this.formData, "user_name", this.options[value]);
				this.$set(this.formData, "name", value);
			},
			getValue_three(value) {
				this.$set(this.formData, "three_name", this.three_options[value]);
				this.$set(this.formData, "three", value);
			},
			/**
			 * 验证表单并提交
			 */
			submit() {
				uni.showLoading({
					mask: true
				})
				this.$refs.form.validate().then((res) => {
					Object.assign(res,this.formData);
					delete res._id;
					return this.submitForm(res)
				}).catch(() => {}).finally(() => {
					uni.hideLoading()
				})
			},
			cancel() {
				this.$emit("confirm");
			},

			/**
			 * 提交表单
			 */
			submitForm(value) {
				// 使用 clientDB 提交数据
				console.log("value", value);
				return db.collection(dbCollectionName).add(value).then((res) => {
					uni.showToast({
						title: '新增成功'
					})
					this.$emit("confirm", value);
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
