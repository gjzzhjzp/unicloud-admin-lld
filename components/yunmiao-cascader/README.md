1. 引入文件
```
import cascader from '@/components/yunmiao-cascader.vue';
export default {
		components: {
			cascader
		},
		..............
```
2.使用组件
```
<cascader ref="cascader" :cascaderData="cascaderData" @confirem="cascaderConfirem"></cascader>
```
3.调用显示隐藏
```
this.$refs.cascader.show()
this.$refs.cascader.hide()
```
4.参数说明
|  参数   | 默认值  | 说明  | 类型 |
|  ----  | ----  | ---- | ---- |
| cascaderData  | [ ]  | 选择数据 | Array |
| activeIndex  | 0 | 展开选中项  | Int |
| oneSelect  | true | 开启一级选择  | Boolean |
| twoSelect  | true | 开启二级选择  | Boolean |
| labelName  | 'name' | label展示字段  | String |
| valueName  | 'id' | value选中字段  | String |
| selectValue  | [] | 默认选中  | Array |
5.事件说明
|  方法   |  说明  |
|  ----  |  ---- |
| @confirem  | 返回选中id集合和name集合{select_ids: select_ids,select_names: select_names} |
6.完整示例
```
<template>
	<view>
		<view class="rowcell" @click="showCate"></view>
		<cascader ref="cascader" :cascaderData="cascaderData" @confirem="cascaderConfirem"></cascader>
	</view>
</template>
<script>
	import cascader from '@/components/yunmiao-cascader/yunmiao-cascader.vue';
	export default {
		components: {
			cascader
		},
		data() {
			return {
				cascaderData: [{
					id: 1,
					name: '分类1',
					children: [{
						id: 3,
						name: '分类-1',
						children: [{
							id: 4,
							name: '分类-1-1',
						}, {
							id: 5,
							name: '分类-1-2',
						}, {
							id: 6,
							name: '分类-1-3',
						}]
					}, {
						id: 15,
						name: '分类-2',
						children: [{
							id: 10,
							name: '分类-2-1',
						}, {
							id: 11,
							name: '分类-2-2',
						}, {
							id: 12,
							name: '分类-2-3',
						}]
					}]
				}, {
					id: 2,
					name: '分类2',
					children: [{
						id: 5,
						name: '分类2-1',
						children: [{
							id: 6,
							name: '分类2-1-1',
						}]
					}]
				}, {
					id: 7,
					name: '分类3',
					children: []
				}],
				category_name: [],
			};
		},
		onLoad() {

		},
		methods: {
			showCate() {
				this.$refs.cascader.show()
			},
			cascaderConfirem(e) {
				console.log(e)
				this.form['category_ids'] = e.select_ids;
				this.category_name = e.select_names;
			}
		}
	}
</script>
<style lang="scss" scoped>
</style>
```