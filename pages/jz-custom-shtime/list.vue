<template>
	<view>
		<view class="uni-header">
			<view class="uni-group">
				<view class="uni-title"></view>
				<view class="uni-sub-title"></view>
			</view>
			<view class="uni-group">
				<input class="uni-search" type="text" v-model="query" @confirm="search" placeholder="请输入搜索内容" />
				<button class="uni-button" type="default" size="mini" @click="search">搜索</button>
				<button class="uni-button" type="default" size="mini" @click="addshtime">新增</button>
				<button class="uni-button" type="default" size="mini" :disabled="!selectedIndexs.length"
					@click="delTable">批量删除</button>
				<download-excel class="hide-on-phone" :fields="exportExcel.fields" :data="exportExcelData"
					:type="exportExcel.type" :name="exportExcel.filename">
					<button class="uni-button" type="primary" size="mini">导出 Excel</button>
				</download-excel>
			</view>
		</view>
		<view class="uni-container">
			<unicloud-db ref="udb" :collection="collectionList" field="user_name,name,start_date,end_date,three_name,date" :where="where"
				page-data="replace" :orderby="orderby" :getcount="true" :page-size="options.pageSize"
				:page-current="options.pageCurrent" v-slot:default="{data,pagination,loading,error,options}"
				:options="options" loadtime="manual" @load="onqueryload">
				<uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe
					type="selection" @selection-change="selectionChange">
					<uni-tr>
						<uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'user_name')"
							sortable @sort-change="sortChange($event, 'user_name')">群昵称</uni-th>
						<uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'start_date')"
							sortable @sort-change="sortChange($event, 'start_date')">开始时间</uni-th>
						<uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'end_date')"
							sortable @sort-change="sortChange($event, 'end_date')">结束时间</uni-th>
							<uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'date')"
								sortable @sort-change="sortChange($event, 'date')">创建时间</uni-th>
							<!-- <uni-th align="center" >三审负责人</uni-th> -->
						<uni-th align="center">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in data" :key="index">
						<uni-td align="center">{{item.user_name}}</uni-td>
						<uni-td align="center">{{item.start_date}}</uni-td>
						<uni-td align="center">{{item.end_date}}</uni-td>
						<uni-td align="center">
							<uni-dateformat :threshold="[0, 0]" :date="item.date"></uni-dateformat>
						</uni-td>
						<!-- <uni-td align="center">{{item.three_name}}</uni-td> -->
						<uni-td align="center">
							<view class="uni-group">
								<button @click="editshtime(item._id)" class="uni-button" size="mini"
									type="primary">修改</button>
								<button @click="confirmDelete(item._id)" class="uni-button" size="mini"
									type="warn">删除</button>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<view class="uni-pagination-box">
					<uni-pagination show-icon :page-size="pagination.size" v-model="pagination.current"
						:total="pagination.count" @change="onPageChanged" />
				</view>
			</unicloud-db>
			<u-modal class="shtime_modal" v-model="showadd" :show-confirm-button="false" width="500px" title="新增审核时间段">
				<add ref="add" @confirm="confirmAdd"></add>
			</u-modal>
			<u-modal class="shtime_modal" v-model="showedit" :show-confirm-button="false" width="500px" title="编辑审核时间段">
				<edit ref="edit" :id="currentid" @confirm="confirmEdit"></edit>
			</u-modal>
		</view>
	</view>
</template>

<script>
	import {
		enumConverter,
		filterToWhere
	} from '../../js_sdk/validator/jz-custom-shtime.js';

	const db = uniCloud.database()
	// 表查询配置
	const dbOrderBy = '' // 排序字段
	const dbSearchFields = ["user_name"] // 模糊搜索字段，支持模糊搜索的字段列表。联表查询格式: 主表字段名.副表字段名，例如用户表关联角色表 role.role_name
	// 分页配置
	const pageSize = 20
	const pageCurrent = 1

	const orderByMapping = {
		"ascending": "asc",
		"descending": "desc"
	}
	import add from "./add.vue"
	import edit from "./edit.vue"
	export default {
		data() {
			return {
				currentid:"",
				showedit: false,
				showadd: false, ///显示新增
				collectionList: "jz-custom-shtime",
				query: '',
				where: '',
				orderby: dbOrderBy,
				orderByFieldName: "",
				selectedIndexs: [],
				options: {
					pageSize,
					pageCurrent,
					filterData: {},
					...enumConverter
				},
				imageStyles: {
					width: 64,
					height: 64
				},
				exportExcel: {
					"filename": "jz-custom-shtime.xls",
					"type": "xls",
					"fields": {
						"群昵称": "user_name",
						"开始时间": "start_date",
						"结束时间": "end_date"
					}
				},
				exportExcelData: []
			}
		},
		components: {
			add,
			edit
		},
		onLoad() {
			this._filter = {}
		},
		onReady() {
			this.$refs.udb.loadData()
		},
		methods: {
			confirmAdd(value) {
				console.log("value", value);
				this.showadd = false;
				this.$nextTick(() => {
					this.$refs.udb.loadData()
				})
			},
			confirmEdit(value) {
				console.log("value", value);
				this.showedit = false;
				this.$nextTick(() => {
					this.$refs.udb.loadData()
				})
			},
			// 新增审核时间
			addshtime() {
				this.showadd = true;
			},
			// 新增审核时间
			editshtime(id) {
				console.log("editshtime",id);
				this.currentid=id;
				this.showedit = true;
			},
			onqueryload(data) {
				this.exportExcelData = data
			},
			getWhere() {
				const query = this.query.trim()
				if (!query) {
					return ''
				}
				const queryRe = new RegExp(query, 'i')
				return dbSearchFields.map(name => queryRe + '.test(' + name + ')').join(' || ')
			},
			search() {
				const newWhere = this.getWhere()
				this.where = newWhere
				this.$nextTick(() => {
					this.loadData()
				})
			},
			loadData(clear = true) {
				this.$refs.udb.loadData({
					clear
				})
			},
			onPageChanged(e) {
				this.selectedIndexs.length = 0
				this.$refs.table.clearSelection()
				this.$refs.udb.loadData({
					current: e.current
				})
			},
			navigateTo(url, clear) {
				// clear 表示刷新列表时是否清除页码，true 表示刷新并回到列表第 1 页，默认为 true
				uni.navigateTo({
					url,
					events: {
						refreshData: () => {
							this.loadData(clear)
						}
					}
				})
			},
			// 多选处理
			selectedItems() {
				var dataList = this.$refs.udb.dataList
				return this.selectedIndexs.map(i => dataList[i]._id)
			},
			// 批量删除
			delTable() {
				this.$refs.udb.remove(this.selectedItems(), {
					success: (res) => {
						this.$refs.table.clearSelection()
					}
				})
			},
			// 多选
			selectionChange(e) {
				this.selectedIndexs = e.detail.index
			},
			confirmDelete(id) {
				this.$refs.udb.remove(id, {
					success: (res) => {
						this.$refs.table.clearSelection()
					}
				})
			},
			sortChange(e, name) {
				this.orderByFieldName = name;
				if (e.order) {
					this.orderby = name + ' ' + orderByMapping[e.order]
				} else {
					this.orderby = ''
				}
				this.$refs.table.clearSelection()
				this.$nextTick(() => {
					this.$refs.udb.loadData()
				})
			},
			filterChange(e, name) {
				this._filter[name] = {
					type: e.filterType,
					value: e.filter
				}
				let newWhere = filterToWhere(this._filter, db.command)
				if (Object.keys(newWhere).length) {
					this.where = newWhere
				} else {
					this.where = ''
				}
				this.$nextTick(() => {
					this.$refs.udb.loadData()
				})
			}
		}
	}
</script>

<style>
</style>
