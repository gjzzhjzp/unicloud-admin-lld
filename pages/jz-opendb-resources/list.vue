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
				<button class="uni-button" type="default" size="mini" @click="navigateTo('./add')">新增</button>
				<button class="uni-button" type="default" size="mini" :disabled="!selectedIndexs.length"
					@click="delTable">批量删除</button>
				<download-excel v-if="isManger" class="hide-on-phone" :fields="exportExcel.fields"
					:data="exportExcelData" :type="exportExcel.type" :name="exportExcel.filename">
					<button class="uni-button" type="primary" size="mini">导出 Excel</button>
				</download-excel>
				<button class="uni-button" @click="opendanmumodel=true" type="primary" size="mini">生成弹幕Excel</button>

			</view>
		</view>
		<view class="uni-container">
			<unicloud-db ref="udb" :collection="collection" :field="field" :where="where" page-data="replace"
				:orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
				v-slot:default="{data,pagination,loading,error,options}" :options="options" loadtime="manual"
				@load="onqueryload">
				<uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe
					type="selection" @selection-change="selectionChange">
					<uni-tr>
						<uni-th align="center" sortable @sort-change="sortChange($event, 'avatar')">封面</uni-th>
						<uni-th align="center" filter-type="select" :filter-data="options.filterData.zy_gs_localdata"
							@filter-change="filterChange($event, 'zy_gs')">资源类型</uni-th>

						<uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'title')"
							sortable @sort-change="sortChange($event, 'title')">标题</uni-th>

						<!-- <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'categories')" sortable @sort-change="sortChange($event, 'categories')">分类</uni-th> -->
						<uni-th align="center" filter-type="search"
							@filter-change="filterChange($event, 'categorieszw')" sortable
							@sort-change="sortChange($event, 'categorieszw')">分类</uni-th>
						<uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'labels')"
							sortable @sort-change="sortChange($event, 'labels')">标签</uni-th>
						<uni-th align="center" width="200" filter-type="search"
							@filter-change="filterChange($event, 'author')" sortable
							@sort-change="sortChange($event, 'author')">来源</uni-th>
						<uni-th align="center" v-if="isManger" width="80px">投稿人</uni-th>
						<uni-th align="center" filter-type="select"
							:filter-data="options.filterData.article_status_localdata"
							@filter-change="filterChange($event, 'article_status')">状态</uni-th>
						<uni-th align="center" v-if="isManger" filter-type="select"
							:filter-data="options.filterData.is_recommend_localdata"
							@filter-change="filterChange($event, 'is_recommend')">推荐</uni-th>
						<uni-th align="center" filter-type="select" :filter-data="options.filterData.is_grant_localdata"
							@filter-change="filterChange($event, 'is_grant')">授权</uni-th>
						<uni-th align="center" filter-type="select"
							:filter-data="options.filterData.is_encryption_localdata"
							@filter-change="filterChange($event, 'is_encryption')">加密</uni-th>
						<uni-th align="center" filter-type="select"
							:filter-data="options.filterData.is_gonggao_localdata"
							@filter-change="filterChange($event, 'is_gonggao')">公告</uni-th>
						<uni-th align="center" filter-type="select" :filter-data="options.filterData.is_danmu_localdata"
							@filter-change="filterChange($event, 'is_danmu')">弹幕</uni-th>

						<uni-th align="center">发表时间</uni-th>
						<uni-th align="center">更新时间</uni-th>
						<uni-th align="center">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in data" :key="index">
						<uni-td align="center">
							<template v-if="Array.isArray(item.avatar)">
								<template v-for="(file, j) in item.avatar">
									<u-image width="100%" height="140rpx" mode="widthFix" border-radius="10"
										:src="file.url"></u-image>
								</template>
							</template>
							<template v-else>
								<u-image width="100%" height="140rpx" mode="widthFix" border-radius="10"
									:src="item.avatar.url"></u-image>
							</template>
						</uni-td>
						<uni-td align="center">{{options.zy_gs_valuetotext[item.zy_gs]}}</uni-td>
						<uni-td align="center">{{item.title}}</uni-td>
						<!-- <uni-td align="center">{{item.categories}}</uni-td> -->
						<uni-td align="center">{{item.categorieszw}}</uni-td>
						<uni-td align="center">{{item.labels}}</uni-td>
						<uni-td align="center">
							<view style="width: 200px;">{{item.author}}</view>
						</uni-td>
						<uni-td v-if="isManger" align="center">{{item.user_id[0]?item.user_id[0].nickname:''}}</uni-td>

						<uni-td align="center">
							<checkbox-group @change="change_data(item,'article_status')">
								<checkbox value="article_status" :checked="item.article_status==1" />
							</checkbox-group>
						</uni-td>
						<uni-td align="center" v-if="isManger">
							<checkbox-group @change="change_data(item,'is_recommend')">
								<checkbox value="is_recommend" :checked="item.is_recommend==1" />
							</checkbox-group>
						</uni-td>

						<uni-td align="center">
							<checkbox-group @change="change_data(item,'is_grant')">
								<checkbox value="is_grant" :checked="item.is_grant==1" />
							</checkbox-group>
						</uni-td>
						<uni-td align="center">
							<checkbox-group @change="change_data(item,'is_encryption')">
								<checkbox value="is_encryption" :checked="item.is_encryption==1" />
							</checkbox-group>
						</uni-td>
						<uni-td align="center">
							<checkbox-group @change="change_data(item,'is_gonggao')">
								<checkbox value="is_gonggao" :checked="item.is_gonggao==1" />
							</checkbox-group>
						</uni-td>
						<uni-td align="center">
							<checkbox-group @change="change_data(item,'is_danmu')">
								<checkbox value="is_danmu" :checked="item.is_danmu==1" />
							</checkbox-group>
						</uni-td>

						<uni-td align="center">
							<uni-dateformat :threshold="[0, 0]" :date="item.publish_date"></uni-dateformat>
						</uni-td>
						<uni-td align="center">
							<uni-dateformat :threshold="[0, 0]" :date="item.last_modify_date"></uni-dateformat>
						</uni-td>
						<uni-td align="center">
							<view class="uni-group">
								<button @click="navigateTo('./edit?id='+item._id, false)" class="uni-button" size="mini"
									type="primary">修改</button>
								<button @click="confirmDelete(item._id)" class="uni-button" size="mini"
									type="warn">删除</button>
								<button v-if="item.zy_gs==1" @click="importExcel(item._id)" class="uni-button"
									size="mini" type="warn">导入弹幕Excel</button>
								<button v-if="item.zy_gs==2" @click="importGechi(item._id)" class="uni-button"
									size="mini" type="warn">输入歌词</button>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<view class="uni-pagination-box">
					<uni-pagination show-icon :page-size="pagination.size" v-model="pagination.current"
						:total="pagination.count" @change="onPageChanged" />
				</view>
			</unicloud-db>
		</view>
		<u-modal v-model="showgechi" width="500px" @cancel="gechi==''" :show-cancel-button="true" title="输入歌词"
			@confirm="confirmGechi">
			<view style="padding: 10px;" class="slot-gonggao_content">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
					<u-input :maxlength="10000" type="textarea" v-model="gechi"></u-input>
				</scroll-view>
			</view>

		</u-modal>
		<u-modal v-model="opendanmumodel" width="800px" @cancel="danmuvalue==''" :show-cancel-button="true"
			title="输入json">
			<view style="padding: 10px;" class="slot-gonggao_content">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
					<u-input :maxlength="1000000" type="textarea" v-model="danmuvalue"></u-input>
				</scroll-view>
			</view>
			<view style="display: flex;">
				<button class="uni-button" type="primary" size="mini" @click="confirmdanmu">生成步骤1</button>
				<download-excel class="hide-on-phone" :fields="exportExcel1.fields" :data="exportExcelData1"
					:type="exportExcel1.type" name="俊哲宇宙">
					<button class="uni-button" type="primary" size="mini">生成步骤2</button>
				</download-excel>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		enumConverter,
		filterToWhere
	} from '../../js_sdk/validator/jz-opendb-resources.js';

	const db = uniCloud.database();
	const BASE64 = require("../system/common/base64.js")
	// 表查询配置
	const dbOrderBy = 'publish_date desc' // 排序字段
	const dbSearchFields = ["title", "categorieszw",
		"labels"] // 模糊搜索字段，支持模糊搜索的字段列表。联表查询格式: 主表字段名.副表字段名，例如用户表关联角色表 role.role_name
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
				danmuvalue: "",
				opendanmumodel: false,
				gechiiscz: false, ////歌词是否存在
				scrollTop: 0,
				currentId: "",
				showgechi: false,
				gechi: "",
				query: '',
				where: '',
				orderby: dbOrderBy,
				orderByFieldName: "",
				selectedIndexs: [],
				collection: "jz-opendb-resources,uni-id-users",
				field: "publish_date,last_modify_date,categories,categorieszw,labels,author,title,article_status,is_recommend,is_grant,is_encryption,is_gonggao,is_danmu,is_login,avatar,resources,zy_gs,excerpt,content,user_id{nickname}",
				options: {
					pageSize,
					pageCurrent,
					filterData: {
						"article_status_localdata": [{
								"value": 0,
								"text": "锁定"
							},
							{
								"value": 1,
								"text": "启用"
							}
						],
						"is_recommend_localdata": [{
								"value": 0,
								"text": "不推荐"
							},
							{
								"value": 1,
								"text": "推荐"
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
						],
						"is_gonggao_localdata": [{
								"value": 0,
								"text": "否"
							},
							{
								"value": 1,
								"text": "是"
							}
						],
						"is_danmu": [{
								"value": 0,
								"text": "无"
							},
							{
								"value": 1,
								"text": "有"
							}
						]
					},
					...enumConverter
				},
				imageStyles: {
					width: 64,
					height: 64
				},
				exportExcel: {
					"filename": "jz-opendb-resources.xls",
					"type": "xls",
					"fields": {
						"分类": "categories",
						"分类中文": "categorieszw",
						"标签": "labels",
						"来源": "author",
						"标题": "title",
						"状态": "article_status",
						"是否推荐": "is_recommend",
						"是否授权": "is_grant",
						"是否加密": "is_encryption",
						"封面大图": "avatar",
						"资源类型": "zy_gs",
						"附件资源": "resources",
						"摘要": "excerpt",
						"内容": "content"
					}
				},
				exportExcel1: {
					"type": "xlsx",
					"fields": {
						"d": "content",
						"p": "offset"
					}
				},
				exportExcelData: [],
				exportExcelData1: [],
				isManger: true
			}
		},
		onLoad() {
			this._filter = {}
		},
		onReady() {
			var roles = this.getUserRole();
			// 如果仅是上传资源
			if (roles.indexOf('only_zylist') != -1) {
				this.isManger = false;
				this.collection = "jz-opendb-resources",
					this.field =
					"publish_date,last_modify_date,categories,categorieszw,labels,author,title,article_status,is_recommend,is_grant,is_encryption,is_gonggao,is_danmu,is_login,avatar,resources,zy_gs,excerpt,content",

					this.where = "user_id==$cloudEnv_uid";
				this.$nextTick(() => {
					this.loadData()
				})
			} else {
				this.isManger = true;
				this.$refs.udb.loadData()
			}
		},
		methods: {
			confirmdanmu() {
				// debugger;
				var ary = [];
				var danmus = [];
				danmus = this.danmuvalue.split("\n");
				danmus.forEach((idanmu) => {
					var data = {};
					data = JSON.parse(idanmu);
					if (data.data && data.data.list && data.data.list.length > 0) {
						data.data.list.forEach((item) => {
							item.content = item.content.replace(
								/<img[\u4e00-\u9fa5_a-zA-Z0-9\s\S\/\\._\[\]\"=]*\/>/g, "");
							if (item.content) {
								ary.push({
									content: item.content,
									offset: item.offset / 1000
								})
							}
						});
					}
				})
				this.exportExcelData1 = ary;
				uni.showToast({
					title: "操作成功"
				})
				console.log("ary", ary);
			},
			// 输入歌词
			async importGechi(id) {
				// debugger;
				this.currentId = id;
				this.showgechi = true;
				// 获取歌词
				var _gechi = await db.collection("jz-custom-gechi").where({
					resources_id: id
				}).get();
				console.log("_gechi", _gechi);
				if (_gechi.result.data && _gechi.result.data.length > 0) {
					this.gechiiscz = true;
					this.gechi = _gechi.result.data[0].comment;
				} else {
					this.gechiiscz = false;
					this.gechi = "";
				}
			},
			// 确认输入歌词（可编辑歌词）
			async confirmGechi() {
				if (this.gechiiscz) {
					await db.collection("jz-custom-gechi").where({
						resources_id: this.currentId
					}).update({
						comment: this.gechi
					});
				} else {
					await db.collection("jz-custom-gechi").add({
						resources_id: this.currentId,
						comment: this.gechi
					});
				}
				this.gechi = "";
				uni.showToast({
					title: "操作成功"
				})
			},
			// 导入excel
			importExcel(id) {
				uni.chooseFile({
					count: 1,
					extension: ['.xls', '.xlsx', '.csv'],
					success: res => {
						//此处是我将上一步的文件转base64做了全局
						this.urlTobase64(res.tempFilePaths[0], base => {
							uniCloud.callFunction({
								name: 'jzexcel',
								data: {
									action: 'excel/importExcel',
									data: {
										base: base,
										id: id
									}
								},
							}).then((res) => {
								if (res.result.state == "0000") {
									uni.showToast({
										title: "导入成功"
									})
								} else {
									uni.showToast({
										title: "导入失败",
										icon: "none"
									})
								}
							});
						});
					}
				});
			},
			urlTobase64(url, callback) {
				uni.request({
					url: url,
					method: 'GET',
					responseType: 'arraybuffer',
					success: res => {
						let base64 = uni.arrayBufferToBase64(res.data); //把arraybuffer转成base64
						// var _base=BASE64.decode(base64);
						// console.log("_base",_base);
						callback(base64);
					}
				});
			},
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
			change_data(item, type) {
				var obj = {};
				obj[type] = item[type] == 1 ? 0 : 1;
				console.log("obj", obj);
				this.$set(item, type, obj[type]);
				this.updateItem(item, obj);
			},
			updateItem(item, value) {
				Object.assign(value, {
					last_modify_date: db.env.now
				})
				return db.collection('jz-opendb-resources').doc(item._id).update(value).then((res) => {
					uni.showToast({
						title: '修改成功'
					});
					// console.log("修改成功");
					this.getOpenerEventChannel().emit('refreshData');
					// this.search();
				}).catch((err) => {
					uni.showModal({
						content: err.message || '请求服务失败',
						showCancel: false
					});
				});
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
				// debugger;
				const newWhere = this.getWhere()
				this.where = newWhere;
				var roles = this.getUserRole();
				// 如果仅是上传资源
				if (roles.indexOf('only_zylist') != -1) {
					if (this.where) {
						this.where = "(" + this.where + ")&& user_id == $cloudEnv_uid";
					} else {
						this.where += "user_id == $cloudEnv_uid";
					}
				}
				this.$nextTick(() => {
					this.loadData()
				});
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
			// 多选
			selectionChange(e) {
				this.selectedIndexs = e.detail.index
			},
			// 批量删除
			delTable() {
				this.$refs.udb.remove(this.selectedItems(), {
					success: (res) => {
						this.$refs.table.clearSelection()
					}
				})
			},
			
			confirmDelete(id) {
				this.$refs.udb.remove(id, {
					"confirmContent":"删除后不可恢复，确定删除？",
					success: async (res) => {
						await db.collection("opendb-news-like").where({
							"article_id": id
						}).remove();
						await db.collection("opendb-news-likepl").where({
							"article_id": id
						}).remove();
						await db.collection("opendb-news-favorite").where({
							"article_id": id
						}).remove();
						await db.collection("opendb-news-history").where({
							"article_id": id
						}).remove();
						await db.collection("opendb-news-comments").where({
							"article_id": id
						}).remove();
						await db.collection("opendb-news-jubaopl").where({
							"article_id": id
						}).remove();
						await db.collection("jz-opendb-danmu").where({
							"resource_id": id
						}).remove();
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
	.slot-gonggao_content {

		overflow: auto;
		/* padding: 10px; */
	}

	.slot-gonggao_content>uni-scroll-view {
		max-height: 50vh;

	}
</style>
