<template>
	<view>
		<view class="uni-header">
			<!-- <view class="uni-group">
				<view class="uni-title"></view>
				<view class="uni-sub-title"></view>
			</view> -->
			<view class="uni-group">
				<input class="uni-search" type="text" v-model="query" @confirm="search" placeholder="请输入搜索内容" />
				<button class="uni-button" type="default" size="mini" @click="search">搜索</button>
				<button class="uni-button" type="default" size="mini" @click="navigateTo('./add')">新增根数据</button>
				<button class="uni-button" type="default" size="mini" @click="delTable">批量删除</button>
				
			</view>
		</view>
		<ly-tree :tree-data="treeData" :ready="ready" :props="props" node-key="flbm" highlightCurrent showNodeIcon defaultExpandAll 
			:expandOnClickNode="false" @node-expand="handleNodeExpand" @node-click="handleNodeClick" @node-extbutton-click="handleNodeExtButtonClick" 
		>
		</ly-tree>
	</view>	
</template>

<script>
	const db = uniCloud.database()
	// 表查询配置
	const dbSearchFields = ["name"] // 模糊搜索字段，支持模糊搜索的字段列表

	export default {
		data() {
			return {	
				query: '',
				where: '',
				treeData: [],
				personCount: 0,
				ready: false, // 这里用于自主控制LyTree 的 loading加载状态，避免异步正在加载数据的空档显示“暂无数据”
				props: function() {
					return {
						// 这里的label就可以使用函数进行自定义的渲染了
						// label(data, node) {
						// 	return (node.data.parent_relationship=="partner"?"配偶：":"") + node.data.name ;
						// },
						label: 'name', // 指把数据中的‘personName’当做label也就是节点名称
						icon(data, node) { // 设置夫妻子女的图标
							if (node.data.parent_id == "") {
								return ""
							}
						}
					}
				},
			}
		},
		onLoad() {
			this.loadData();
		},
		onShow(){
			this.loadData();
		},
		methods: {
			getWhere() {
				const query = this.query.trim()
				if (!query) {
					return ''
				}
				const queryRe = new RegExp(query, 'i')
				return dbSearchFields.map(name => queryRe + '.test(' + name + ')').join(' || ')
			},
			search() {
				// debugger;
				const newWhere = this.getWhere()
				const isSameWhere = newWhere === this.where
				this.where = newWhere
				// if (isSameWhere) { // 相同条件时，手动强制刷新
					this.loadData()
				// }
			},
			loadData() {
				var that = this;
				var dbw=db.collection("opendb-news-categories");
				if(this.where){
					dbw=db.collection("opendb-news-categories").where(this.where);
				}
				dbw
					.get({
						getTree: true
					})
					.then((res) => {
						that.treeData = res.result.data;
					}).catch((err) => {
						uni.showModal({
							content: err.message || '请求服务失败',
							showCancel: false
						})
					}).finally(() => {
						// uni.hideLoading()
						// console.log("finally")
						that.ready = true // 关闭tree控件的等待loading
					})
			},
			navigateTo(url, clear) {
				// clear 表示刷新是否自动刷新，true 表示刷新
				uni.navigateTo({
					url,
					events: {
						refreshData: () => {
							if (clear) {
								this.loadData()
							}
						}
					}
				})
			},
			// 多选处理
			selectedItems() {
				// var dataList = this.$refs.udb.dataList
				// return this.selectedIndexs.map(i => dataList[i]._id)
			},
			//批量删除
			delTable() {
				// this.$refs.udb.remove(this.selectedItems())
			},
			// 多选
			selectionChange(e) {
				// this.selectedIndexs = e.detail.index
			},
			confirmDelete(id) {
				// this.$refs.udb.remove(id)
			},
			handleNodeClick(obj) { // 点主节点文字，进入修改页面
				// console.log('handleNodeClick', JSON.stringify(obj));
				this.navigateTo('./edit?id=' + obj.data._id, true)
			},
			handleNodeExpand(obj) {
				// console.log('handleNodeExpand', JSON.stringify(obj));
			},
			handleNodeExtButtonClick(obj) {
				var that = this;
				
				// console.log('handleNodeExtButtonClick', JSON.stringify(obj));
				switch (obj.buttonvalue) {
					case "del": //删除
						// console.log("delid",obj.data._id);
						// this.$refs.udb.remove(obj.data._id)
						uni.showModal({
							content: "删除该分类下的子分类将一起删除，确认删除？",
							success: function(res) {
								if (res.confirm) {
									uni.showLoading();
									const dbCmd = db.command;
									db.collection("opendb-news-categories").where(dbCmd.or({
										      flbm:obj.data.flbm
										    },{
										      parent_flbm:obj.data.flbm
										    })).remove()
										.then((res) => {
											that.loadData()
											//console.log("删除成功，删除条数为: ",res.deleted);
										})
										.catch((err) => {
											console.log(err.message)
										})
										.finally(() => {
											uni.hideLoading()
										})
								}
							}
						})
						break;
					case "newchildren": // 新增子女
						this.navigateTo('./add?parent_flbm=' + obj.data.flbm + '&parent_name=' + obj.data.name +
							'&parent_relationship=parent', true)
						break;
					default:
						break;
				}
			}
		}
	}
</script>
<style>
</style>
