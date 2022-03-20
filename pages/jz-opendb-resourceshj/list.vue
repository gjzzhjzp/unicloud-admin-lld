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
				<button class="uni-button" type="default" size="mini" @click="addHj()">新增</button>
				<!-- <button class="uni-button" type="default" size="mini" @click="navigateTo('./add')">新增</button> -->
				<button class="uni-button" type="default" size="mini" :disabled="!selectedIndexs.length"
					@click="delTable">批量删除</button>
				<!-- <download-excel class="hide-on-phone" :fields="exportExcel.fields" :data="exportExcelData" :type="exportExcel.type" :name="exportExcel.filename">
          <button class="uni-button" type="primary" size="mini">导出 Excel</button>
        </download-excel> -->
			</view>
		</view>
		<view class="uni-container">
			<unicloud-db ref="udb" collection="jz-opendb-resourceshj"
				field="hj_id,status,parent_id,resourceshj_title,sort" :where="where" page-data="replace"
				:orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
				v-slot:default="{data,pagination,loading,error,options}" :options="options" loadtime="manual"
				@load="onqueryload">
				<uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe
					type="selection" @selection-change="selectionChange">
					<uni-tr>
						<uni-th align="center" filter-type="search"
							@filter-change="filterChange($event, 'resourceshj_title')" sortable
							@sort-change="sortChange($event, 'resourceshj_title')">合集标题</uni-th>
							<uni-th align="center" sortable @sort-change="sortChange($event, 'status')">生效状态</uni-th>
						<uni-th align="center">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in data" :key="index">
						<uni-td align="center">{{item.resourceshj_title}}</uni-td>
						 <uni-td align="center">{{item.status != 0 ? '✅' : '❌'}}</uni-td>
						<uni-td align="center">
							<view class="uni-group">
								<button @click="navigateTo('./edit?id='+item._id, false)" class="uni-button" size="mini"
									type="primary">修改</button>
								<button @click="openhjgl(item.hj_id)" class="uni-button" size="mini"
									type="warn">合集管理</button>
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
			<u-modal v-model="showaddhj" width="600px" @cancel="showaddhj==false" :show-cancel-button="true"
				title="新增合集" @confirm="confirmaddhj">
				<view class="uni-container">
					<uni-forms-item label="合集标题">
						<uni-easyinput placeholder="合集标题" v-model="addtitle"></uni-easyinput>
					</uni-forms-item>
				</view>
			</u-modal>
			<u-modal v-model="showaddhjzy" width="800px" @cancel="showaddhjzy==false" :show-cancel-button="true"
				title="新增合集资源" @confirm="confirmaddhjzy">
				<view class="uni-container" style="height: 500px;overflow: auto;">
					<unicloud-db ref="listudb" collection="jz-opendb-resources" field="title,zy_gs,author"
						:where="listwhere" page-data="replace" orderby="publish_date desc" :getcount="true"
						:page-size="100" :page-current="options.pageCurrent"
						v-slot:default="{data,pagination,loading,error,options}" :options="options" loadtime="manual">
						<uni-table ref="listtable" :loading="loading" :emptyText="error.message || '没有更多数据'" border
							stripe type="selection" @selection-change="listselectionChange">
							<uni-tr>
								<uni-th align="center" filter-type="search"
									@filter-change="listfilterChange($event, 'title')">标题</uni-th>
								<uni-th align="center" width="200" filter-type="search"
									@filter-change="listfilterChange($event, 'author')">来源</uni-th>
								<uni-th align="center" style="width: 100px;">格式</uni-th>
								<uni-th align="center">排序</uni-th>
							</uni-tr>
							<uni-tr v-for="(item,index) in data" :key="index">
								<uni-td align="center">{{item.title}}</uni-td>
								<uni-td align="center">{{item.author}}</uni-td>
								<uni-td align="center">{{zy_gs_localdata[item.zy_gs].text}}</uni-td>
								<uni-td align="center">
									<view class="uni-group">
										<uni-easyinput placeholder="排序号" type="number" v-model="item.sort">
										</uni-easyinput>
									</view>
								</uni-td>
							</uni-tr>
						</uni-table>
						<view class="uni-pagination-box">
							<uni-pagination show-icon :page-size="pagination.size" v-model="pagination.current"
								:total="pagination.count" @change="listonPageChanged" />
						</view>
					</unicloud-db>
				</view>
			</u-modal>
			<u-modal v-model="showhjManage" width="800px" @cancel="showhjManage==false" :show-cancel-button="true"
				title="合集管理" @confirm="addhjzy" confirm-text="添加">
				<view style="color: red;padding: 0px 10px;">
					提示：右击排序号修改，再次右击保存
				</view>
				<view class="uni-container" style="height: 500px;overflow: auto;">
					<uni-table ref="table1" emptyText="'没有更多数据'" border stripe>
						<uni-tr>
							<uni-th align="center">资源标题</uni-th>
							<uni-th align="center">来源</uni-th>
							<uni-th align="center">格式</uni-th>
							<uni-th align="center" style="width: 100px;">排序</uni-th>
							<uni-th align="center">操作</uni-th>
						</uni-tr>
						<uni-tr v-for="(item,index) in hjdata" :key="index">
							<uni-td align="center">{{item.article_id[0]?item.article_id[0].title:''}}</uni-td>
							<uni-td align="center">{{item.article_id[0]?item.article_id[0].author:''}}</uni-td>
							<uni-td align="center">
								{{zy_gs_localdata[item.article_id[0]?item.article_id[0].zy_gs:''].text}}
							</uni-td>
							<uni-td align="center" >
							<view class="px" @contextmenu.stop.prevent="changepx(item)">
								<uni-easyinput v-if="item.xgpx" placeholder="排序号" type="number" v-model="item.sort">
								</uni-easyinput>
								<view v-else>
									{{item.sort}}
								</view>
							</view>
							
							</uni-td>
							<uni-td align="center">
								<view class="uni-group">
									<button @click="deletehjzy(item._id)" class="uni-button" size="mini"
										type="warn">删除</button>
								</view>
							</uni-td>
						</uni-tr>
					</uni-table>
				</view>
			</u-modal>
		</view>
	</view>
</template>
<script>
	import {
		enumConverter,
		filterToWhere
	} from '../../js_sdk/validator/jz-opendb-resourceshj.js';

	const db = uniCloud.database()
	// 表查询配置
	const dbOrderBy = '' // 排序字段
	const dbSearchFields = ["resourceshj_title"] // 模糊搜索字段，支持模糊搜索的字段列表。联表查询格式: 主表字段名.副表字段名，例如用户表关联角色表 role.role_name
	// 分页配置
	const pageSize = 20
	const pageCurrent = 1

	const orderByMapping = {
		"ascending": "asc",
		"descending": "desc"
	}

	export default {
		data() {
			return {
				xgpx:false,
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
				curhjid: "", ///当前合集id
				showaddhjzy: false,
				hjdata: [],
				showhjManage: false,
				collectionList: "jz-opendb-resourceshj,jz-opendb-resources",
				query: '',
				where: "parent_id==null",
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
					"filename": "jz-opendb-resourceshj.xls",
					"type": "xls",
					"fields": {
						"资源id": "article_id",
						"合集标题": "resourceshj_title",
						"排序": "sort"
					}
				},
				exportExcelData: [],
				showaddhj: false,
				listwhere: "",
				listselectedIndexs: [], ///多选处理
				addtitle: "" ///合集标题
			}
		},
		onLoad() {
			this._filter = {}
		},
		onReady() {
			this.$refs.udb.loadData()
		},
		methods: {
			async changepx(item){
				
				this.$set(item,"xgpx",!(item.xgpx))
				if(!item.xgpx){
					await db.collection("jz-opendb-resourceshj").where({
						"_id": item._id
					}).update({
						sort:parseInt(item.sort)
					})
					// debugger;
					this.openhjgl(item.parent_id);
				}
				// item.xgpx=!(item.xgpx);
			},
			addhjzy() {
				this.showaddhjzy = true;
			},
			async openhjgl(hj_id) {
				this.showhjManage = true;
				this.curhjid = hj_id;
				// 获取合集数据
				var res = await db.collection("jz-opendb-resourceshj,jz-opendb-resources").where({
					"parent_id": hj_id
				}).field("resourceshj_title,parent_id,sort,article_id{title,zy_gs,author},hj_id").orderBy("sort asc").get();
				console.log("合集数据", res);
				if (res.result && res.result.data && res.result.data.length > 0) {
					this.hjdata = res.result.data;
				}else{
					this.hjdata = [];
				}
			},
			// 多选处理
			listselectedItems(hj_id) {
				// debugger;
				var list = [];
				var dataList = this.$refs.listudb.dataList;
				// var sortinit = this.hjdata.length - 1 || 0;
				dataList.forEach((item, index) => {
					if (this.selectedIndexs.indexOf(index) != -1) {
						list.push({
							parent_id: hj_id,
							hj_id: hj_id + index,
							sort: parseInt(item.sort) || 0,
							article_id: item._id
						});
					}
				});
				return list;
			},
			// 多选
			listselectionChange(e) {
				this.selectedIndexs = e.detail.index
			},
			async confirmaddhj() {
				this.showaddhj = true;
				if (!this.addtitle) {
					uni.showToast({
						title: "请输入合集标题",
						icon: "none"
					});
					return;
				}
				var hj_id = Math.random().toString(36).substr(2);
				uni.showLoading({
					title: '操作中'
				});
				this.showaddhj = false;
				await db.collection("jz-opendb-resourceshj").add({
					hj_id,
					resourceshj_title: this.addtitle,
					status:1
				});
				this.$refs.udb.loadData({
					current: 1
				});
				this.addtitle="";
				uni.hideLoading();
			},
			async confirmaddhjzy() {
				
				this.showhjManage = true;
				this.showaddhjzy = true;
				var lists = this.listselectedItems(this.curhjid);
				if (lists.length == 0) {
					uni.showToast({
						title: "请选择资源",
						icon: "none"
					});
					return;
				}
				uni.showLoading({
					title: '操作中'
				});
				this.showaddhjzy = false;
				await db.collection("jz-opendb-resourceshj").add(lists);
				this.$refs.udb.loadData({
					current: 1
				});
				this.openhjgl(this.curhjid);
				uni.hideLoading();
				console.log("lists", lists);
			},
			listonPageChanged(e) {
				this.listselectedIndexs.length = 0;
				if (this.$refs.listtable) {
					this.$refs.listtable.clearSelection()
				}
				this.$refs.listudb.loadData({
					current: e.current
				})
			},
			listfilterChange(e, name) {
				// debugger;
				this._filter[name] = {
					type: e.filterType,
					value: e.filter
				}
				let newWhere = filterToWhere(this._filter, db.command)
				if (Object.keys(newWhere).length) {
					this.listwhere = newWhere
				} else {
					this.listwhere = ''
				}
				Object.assign(this.listwhere, {
					is_off: db.command.neq(1),
					article_status: db.command.neq(0)
				})
				this.$nextTick(() => {
					this.$refs.listudb.loadData()
				})
			},
			///新增合集
			addHj() {
				this.showaddhj = true;
				// setTimeout(()=>{
				// 	this.$refs.listudb.loadData()
				// },500)

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
				this.where = newWhere;
				console.log("this.where", this.where);
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
				// debugger;
				this.$refs.udb.remove(id, {
					success: (res) => {
						// debugger;
						if(this.$refs.table){
							this.$refs.table.clearSelection()
						}
					}
				})
			},
			async deletehjzy(id) {
				var that = this;
				uni.showModal({
					title: '提示',
					content: '确认删除吗？',
					success: async function(res) {
						if (res.confirm) {
							uni.showLoading({
								title: '操作中'
							});
							await db.collection("jz-opendb-resourceshj").where({
								"_id": id
							}).remove();
							that.openhjgl(that.curhjid);
							uni.hideLoading();
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
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
