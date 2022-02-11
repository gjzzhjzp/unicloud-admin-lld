<template>
	<view class="fix-top-window">
		<view class="uni-header">
			<view class="uni-group">
				<view class="uni-title">{{$t('user.text.userManager')}}</view>
				<view class="uni-sub-title"></view>
			</view>
			<view class="uni-group">
				<template v-if="isManager">
					<input class="uni-search" type="text" v-model="query" @confirm="search"
						:placeholder="$t('common.placeholder.query')" />
					<button class="uni-button" type="default" size="mini" @click="search">模糊搜索</button>
					<button class="uni-button" type="default" size="mini" @click="search1">精确搜索</button>
					<button class="uni-button" type="default" size="mini" @click="searchweibo">微博审核</button>
					<!-- <button class="uni-button" type="default" size="mini" @click="searchweibono">未审核通过</button> -->
					<button class="uni-button" type="default" size="mini" @click="searchweibono2">未审核通过</button>
					<button class="uni-button" type="default" size="mini" @click="searchweibono3">未审核</button>
					<!-- <button class="uni-button" type="default" size="mini" @click="createdYqm">生成邀请码</button> -->
				</template>
			</view>
		</view>
		<view class="uni-container">
			<!-- :getcount="true" -->
			<unicloud-db ref="udb" collection="uni-id-users"
				field="username,nickname,weiboname,weibocontent,isbdwb,resources,update_date,beizhu,status,dcloud_appid,register_date"
				:where="where" page-data="replace" :getcount="true" :orderby="orderby" :page-size="options.pageSize"
				:page-current="options.pageCurrent" v-slot:default="{data,pagination,loading,error,options}"
				:options="options" loadtime="manual" @load="onqueryload">
			
		<!-- 	<unicloud-db ref="udb" collection="uni-id-users,uni-id-roles"
				field="username,nickname,weiboname,weibocontent,isbdwb,resources,update_date,beizhu,status,role{role_name},dcloud_appid,register_date"
				:where="where" page-data="replace" :orderby="orderby" :page-size="options.pageSize"
				:page-current="options.pageCurrent" v-slot:default="{data,pagination,loading,error,options}"
				:options="options" loadtime="manual" @load="onqueryload"> -->
				<uni-table ref="table" :loading="loading" :emptyText="error.message || $t('common.empty')" border stripe
					type="selection" @selection-change="selectionChange" class="table-pc">
					<uni-tr>
						<uni-th width="50" align="center" filter-type="search"
							@filter-change="filterChange($event, 'username')" sortable
							@sort-change="sortChange($event, 'username')">用户名</uni-th>
						<uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'nickname')"
							sortable @sort-change="sortChange($event, 'nickname')">昵称</uni-th>

						<uni-th width="250" align="center" filter-type="search"
							@filter-change="filterChange($event, 'weiboname')" sortable
							@sort-change="sortChange($event, 'weiboname')">微博主页地址</uni-th>
						<uni-th align="center">微博验证</uni-th>
						<uni-th align="center" filter-type="select" :filter-data="options.filterData.isbdwb_localdata"
							@filter-change="filterChange($event, 'isbdwb')">微博验证状态</uni-th>
						<uni-th align="center" width="100">备注</uni-th>
						<!-- <uni-th align="center">可登录应用</uni-th> -->
						<uni-th align="center" filter-type="timestamp"
							@filter-change="filterChange($event, 'register_date')" sortable
							@sort-change="sortChange($event, 'register_date')">注册时间</uni-th>
						<uni-th align="center" filter-type="timestamp"
							@filter-change="filterChange($event, 'update_date')" sortable
							@sort-change="sortChange($event, 'update_date')">更新时间</uni-th>
						<uni-th v-if="isManager" align="center">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in data" :key="index">
						<uni-td align="center">
						<view style="width: 100px;">
						{{item.username}}
						</view>
						</uni-td>
						<uni-td align="center">
						<view style="width: 100px;">
						{{item.nickname}}
						</view></uni-td>

						<uni-td align="center">
							<view style="width: 200px;">
								{{item.weiboname}}
							</view>
						</uni-td>
						<uni-td align="center">
							<view style="width: 200px;">
							{{item.weibocontent}}
							</view>
						</uni-td>
						<uni-td align="center">
							<uni-td align="center">
								<checkbox-group @change="change_data(item,'isbdwb')">
									<checkbox value="isbdwb" :checked="item.isbdwb" />
								</checkbox-group>
							</uni-td>

							<!-- {{item.isbdwb}} -->
						</uni-td>
						<uni-td align="center">
							<view style="width: 150px;">
							{{item.beizhu}}
							</view>
						</uni-td>
						<uni-td align="center">
							<uni-dateformat :threshold="[0, 0]" :date="item.register_date"></uni-dateformat>
						</uni-td>
						<uni-td align="center">
							<uni-dateformat :threshold="[0, 0]" :date="item.update_date"></uni-dateformat>
						</uni-td>
						<uni-td align="center" v-if="isManager">
							<view class="uni-group">
								<button @click="navigateTo('./edit-shy?id='+item._id, false)" class="uni-button"
									size="mini" type="primary">{{$t('common.button.edit')}}</button>
								<button @click="sendinfo(item._id)" class="uni-button" size="mini"
									type="warn">发送消息</button>
								<button @click="lookUser(item._id)" class="uni-button" size="mini">邀请人</button>
								<button @click="lookYzzl(item)" class="uni-button" size="mini">验证资料</button>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<view class="uni-pagination-box">
					<!-- #ifndef MP -->
					<picker class="select-picker" mode="selector" :value="pageSizeIndex" :range="pageSizeOption"
						@change="changeSize">
						<button type="default" size="mini" :plain="true">
							<text>{{pageSizeOption[pageSizeIndex]}} {{$t('common.piecePerPage')}}</text>
							<uni-icons class="select-picker-icon" type="arrowdown" size="12" color="#999"></uni-icons>
						</button>
					</picker>
					<!-- #endif -->
					<uni-pagination :page-size="pagination.size" v-model="pagination.current" :total="pagination.count"
						@change="onPageChanged" />
				</view>
			</unicloud-db>
			<u-modal v-model="showinfo" width="500px" title="发送消息" @confirm="confirminfo" @cancel="openHistory" :mask-close-able="true" cancel-text="历史消息" :show-cancel-button="true">
				<view class="slot-content" style="padding: 10px;">
					<u-form ref="uForm" :label-width="160">
						<u-form-item label="消息类型">
							<u-radio-group v-model="radioinfo" @change="changexxtype">
								<u-radio v-for="(item, index) in radioList" :key="index" :name="item.value">
									{{ item.name }}
								</u-radio>
							</u-radio-group>
						</u-form-item>
						<u-form-item label="审核类型" v-if="showshType">
							<u-radio-group v-model="radioshinfo" @change="changeshtype">
								<u-radio v-for="(item, index) in radioshList" :key="index" :name="item.value">
									{{ item.name }}
								</u-radio>
							</u-radio-group>
						</u-form-item>
						<u-form-item label="内容">
							<u-input v-model="infoconent" type="textarea" :maxlength="1000" />
						</u-form-item>
					</u-form>
				</view>
			</u-modal>
			<u-modal v-model="showlookyqr" width="700px" title="邀请人信息" @confirm="confirmyqr">
				<view class="slot-content" style="padding: 20px;">
					<!-- 	<template v-if="allyqr.length==0">
						无邀请人
					</template> -->
					<u-form ref="uForm" :label-width="300">
						<u-form-item label="登录/用户名">
							{{yqrinfo.username||"无"}}
						</u-form-item>
						<u-form-item label="昵称">
							<view style="white-space: nowrap;">
								{{yqrinfo.nickname||"无"}}
							</view>
						</u-form-item>
						<u-form-item label="微博主页地址">
							{{yqrinfo.weiboname||"无"}}
						</u-form-item>
						<u-form-item label="该用户邀请的所有人">
							<u-table>
								<u-tr>
									<u-th class="u-th1">登录名</u-th>
									<u-th class="u-th2">昵称</u-th>
									<u-th class="u-th3">微博主页地址</u-th>
								</u-tr>
								<u-tr v-for="(item,index) in allyqr" :key="index">
									<u-td class="u-td1">{{item.byqr_id[0].username}}</u-td>
									<u-td class="u-td2">{{item.byqr_id[0].nickname}}</u-td>
									<u-td class="u-td3">{{item.byqr_id[0].weiboname}}</u-td>
								</u-tr>

							</u-table>
						</u-form-item>
					</u-form>
				</view>
			</u-modal>
			<u-modal v-model="showresources" :title="curitemtitle" width="500px" @confirm="moreresources==[]">
				<view class="slot-content">
					<template v-for="(file, j) in moreresources">
						<view class="file-picker">
							<uni-file-picker :value="file" :file-mediatype="file.fileType" :imageStyles="imageStyles"
								readonly>
							</uni-file-picker>
						</view>

					</template>
				</view>
			</u-modal>
			<u-modal @confirm="historyinfoList=[]" v-model="showhistory" title="历史消息" width="500px">
				<view class="slot-content" style="padding: 10px;">
					<u-table>
							<u-tr>
								<u-th>时间</u-th>
								<u-th>内容</u-th>
								<u-th>审核人</u-th>
							</u-tr>
							<u-tr v-for="item in historyinfoList">
								<u-td>{{$u.timeFormat(item.comment_date, 'yyyy-mm-dd hh:MM:ss')}}</u-td>
								<u-td>{{item.comment}}</u-td>
								<u-td>{{item.manager_id[0]?item.manager_id[0].nickname:''}}</u-td>
							</u-tr>
						</u-table>
				</view>
			</u-modal>
		</view>
		<!-- #ifndef H5 -->
		<fix-window />
		<!-- #endif -->
	</view>
</template>

<script>
	import {
		enumConverter,
		filterToWhere
	} from '../../../js_sdk/validator/uni-id-users.js';
	const BASE64 = require("../common/base64.js")
	const db = uniCloud.database()
	// 表查询配置
	const dbOrderBy = 'register_date desc' // 排序字段
	const dbSearchFields = ['username', "nickname", 'weiboname'] // 支持模糊搜索的字段列表
	// 分页配置'role.role_name'
	const pageSize = 20
	const pageCurrent = 1

	const orderByMapping = {
		"ascending": "asc",
		"descending": "desc"
	}

	export default {
		data() {
			return {
				showhistory:false,
				historyinfoList:[],///历史消息
				curitemtitle:"",
				showresources: false,
				moreresources: [], ///更多资料
				showshType: true, //显示审核类型
				currentId: "",
				radioinfo: 0,
				infoconent: "",
				radioList: [{
						name: '系统消息',
						value: 1
					},
					{
						name: '审核消息',
						value: 0
					}
				],
				radioshinfo: "", //审核信息
				radioshList:[
				// 	{
				// 	name: '耘影',
				// 	value: "宝，请使用注册时填写的微博主动联系@耘影 继续后续审核"
				// },{
				// 	name: '恶龙3388',
				// 	value: "宝，请使用注册时填写的微博主动联系@恶龙3388 继续后续审核"
				// },{
				// 	name: '宁阿蛮',
				// 	value: "宝，请使用注册时填写的微博主动联系@宁阿蛮 继续后续审核"
				// },{
				// 	name: '橘子女士s',
				// 	value: "宝，请使用注册时填写的微博主动联系@橘子女士s 继续后续审核"
				// },
				{
					name: '小宇宙审核_黑尾（黑尾吖）',
					value: "宝，请使用注册时填写的微博主动联系@小宇宙审核_黑尾 继续后续审核"
				},
				// {
				// 	name: '闲云51129',
				// 	value: "宝，请使用注册时填写的微博主动联系@闲云51129 继续后续审核"
				// },{
				// 	name: '大橘大利jz',
				// 	value: "宝，请使用注册时填写的微博主动联系@大橘大利jz 继续后续审核"
				// },{
				// 	name: '康庄大道·9291',
				// 	value: "宝，请使用注册时填写的微博主动联系@康庄大道·9291 继续后续审核"
				// },
				{
					name: '小宇宙审核_等一个五年2026(小主)',
					value: "宝，请使用注册时填写的微博主动联系@小宇宙审核_等一个五年2026 继续后续审核"
				},
				// {
				// 	name: '我家老爷子养了一只公主喵',
				// 	value: "宝，请使用注册时填写的微博主动联系@我家老爷子养了一只公主喵 继续后续审核"
				// },{
				// 	name: '落草为扣',
				// 	value: "宝，请使用注册时填写的微博主动联系@落草为扣 继续后续审核"
				// },{
				// 	name: '在晾衣架上练瑜伽',
				// 	value: "宝，请使用注册时填写的微博主动联系@在晾衣架上练瑜伽 继续后续审核"
				// },
				{
					name: '含含_1640',
					value: "宝，请使用注册时填写的微博主动联系@含含_1640 继续后续审核"
				},
				
				// {
				// 	name: '黑巧拌芹菜',
				// 	value: "宝，请使用注册时填写的微博主动联系@黑巧拌芹菜 继续后续审核"
				// },{
				// 	name: '·龚张得起·',
				// 	value: "宝，请使用注册时填写的微博主动联系@·龚张得起· 继续后续审核"
				// },{
				// 	name: '影子_0511291640',
				// 	value: "宝，请使用注册时填写的微博主动联系@影子_0511291640 继续后续审核"
				// },
				{
					name: '遇见银河_51129（风车）',
					value: "宝，请使用注册时填写的微博主动联系@遇见银河_51129 继续后续审核"
				},
				// {
				// 	name: '佩儒·1640',
				// 	value: "宝，请使用注册时填写的微博主动联系@佩儒·1640 继续后续审核"
				// },{
				// 	name: '小米吖哟',
				// 	value: "宝，请使用注册时填写的微博主动联系@小米吖哟 继续后续审核"
				// },{
				// 	name: '搞点高点',
				// 	value: "宝，请使用注册时填写的微博主动联系@搞点高点 继续后续审核"
				// },{
				// 	name: '三天夏日里',
				// 	value: "宝，请使用注册时填写的微博主动联系@三天夏日里 继续后续审核"
				// },{
				// 	name: '伤晴_等待',
				// 	value: "宝，请使用注册时填写的微博主动联系@伤晴_等待 继续后续审核"
				// },{
				// 	name: '小鱼真的喜欢橘子',
				// 	value: "宝，请使用注册时填写的微博主动联系@小鱼真的喜欢橘子 继续后续审核"
				// },
				{
					name: '嘟嘟3579',
					value: "宝，请使用注册时填写的微博主动联系@嘟嘟3579 继续后续审核"
				},
				// {
				// 	name: '小小西瓜1640',
				// 	value: "宝，请使用注册时填写的微博主动联系@小小西瓜1640 继续后续审核"
				// },{
				// 	name: '卿和鹿',
				// 	value: "宝，请使用注册时填写的微博主动联系@卿和鹿 继续后续审核"
				// },
				{
					name: '教程号勿cue（格格）',
					value: "宝，请使用注册时填写的微博主动联系@教程号勿cue 继续后续审核"
				},
				{
					name: '苏酒_小宇宙审核（苏酒）',
					value: "宝，请使用注册时填写的微博主动联系@苏酒_小宇宙审核 继续后续审核"
				}
				// ,{
				// 	name: '可乐and绿豆汤',
				// 	value: "宝，请使用注册时填写的微博主动联系@可乐and绿豆汤 继续后续审核"
				// },{
				// 	name: 'WSLHHYY',
				// 	value: "宝，请使用注册时填写的微博主动联系@WSLHHYY 继续后续审核"
				// },
				],
				// radioshList: [{
				// 	name: '微博链接不正确',
				// 	value: "宝，你的微博主页链接地址不对，请重新提交输入正确的主页地址"
				// }, {
				// 	name: '内容少和疑似小号',
				// 	value: "宝，请尽可能多的提供有关俊哲相关的痕迹截图（氪金、相册、云盘、其他平台的~均可）。请记得打码，并露出截图的系统时间与提交申请时间不超过半小时"
				// }, {
				// 	name: '图裂',
				// 	value: "宝，你上传的验证资料图裂未上传成功，请务必等待图片上传完成后点击提交"
				// }, {
				// 	name: '疑似唯粉',
				// 	value: "宝，我们发现你比较关注他俩中的某一个人，请你跟我们发邮件说明一下。如果确实是唯粉，带单人痕迹也可。审核邮箱：jzszd921129910511@163.com"
				// }, {
				// 	name: '关注/点赞/转发对家或雷点、头像昵称疑似对家（含各种有毒cp）',
				// 	value: "宝，很抱歉，你的审核未通过。如有疑虑，可重新提交申请"
				// }, {
				// 	name: '关注对家无互动',
				// 	value: "宝，这边审核发现您关注了(某先生/某超话)，如果您取消关注，可重新提交申请"
				// },{
				// 	name: '疑似仰卧起坐',
				// 	value: "宝，你的微博审核出现了一些问题，请带上自己的APP用户名（字母+数字），通过邮箱：jzszd921129910511@163.com与我们取得联系"
				// }, {
				// 	name: '言论过激',
				// 	value: "姐子您好，我们的预期是尽可能的优先准入温和佛系的铁血橘子皮，因为在初始阶段app还很脆弱，内外经不起任何风波。为了避免引起不必要的麻烦，你的微博审核没有通过，很抱歉"
				// }, {
				// 	name: '未发送验证微博',
				// 	value: "宝，请尽快发送微博验证内容，发送完成后，请重新提交申请"
				// }, {
				// 	name: '多次踩雷',
				// 	value: "宝，不好意思，官微已经明确说过我们婉拒关注橘域网的公认雷点，这边发现您仍然关注/转发某先生和某女士，不好意思基于您未事先尽到注意义务，您的审核不予通过"
				// },  {
				// 	name: '验证资料过少',
				// 	value: "宝，您的验证资料过少，请尽可能更多的提供有关俊哲相关的痕迹截图（氪金、相册、云盘、其他平台的~均可）。请记得打码，并露出截图的系统时间与提交申请时间不超过半小时"
				// },{
				// 	name: '邀请人连带责任',
				// 	value: "宝，您邀请进app的人中有宝最终审核未通过，目前已经取消您的权限，需要对您进行再次审核。"
				// }],
				showinfo: false,
				query: '',
				where: '',
				orderby: dbOrderBy,
				orderByFieldName: "",
				selectedIndexs: [],
				pageSizeIndex: 0,
				pageSizeOption: [20, 50, 100, 500],
				options: {
					pageSize,
					pageCurrent,
					filterData: {
						"status_localdata": [{
								"text": "正常",
								"value": 0
							},
							{
								"text": "禁用",
								"value": 1
							},
							{
								"text": "审核中",
								"value": 2
							},
							{
								"text": "审核拒绝",
								"value": 3
							}
						],
						"isbdwb_localdata": [{
								"text": "不通过",
								"value": false || null
							},
							{
								"text": "通过",
								"value": true
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
					"filename": "uni-id-users.xls",
					"type": "xls",
					"fields": {
						"用户名": "username",
						"手机号码": "mobile",
						"用户状态": "status",
						"邮箱": "email",
						"角色": "role",
						"register_date": "register_date"
					}
				},
				exportExcelData: [],
				noAppidWhatShouldIDoLink: 'https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid',
				roles: [], ///角色
				isManager: true,
				showlookyqr: false,
				yqrinfo: {}, ////邀请人信息
				allyqr: []
			}
		},
		onLoad() {
			this._filter = {}
		},
		onReady() {
			// this.roles = this.getUserRole();
			// 如果仅是上传资源
			if (this.roles.indexOf('only_zylist') != -1) {
				this.isManager = false;
				this.where = "_id==$cloudEnv_uid";
				this.$nextTick(() => {
					this.loadData()
				})
			} else {
				this.isManager = true;
				this.$refs.udb.loadData()
			}
		},
		watch: {
			pageSizeIndex: {
				immediate: true,
				handler(val, old) {
					this.options.pageSize = this.pageSizeOption[val]
					this.options.pageCurrent = 1
					this.$nextTick(() => {
						this.loadData()
					})
				}
			}
		},
		methods: {
			// 获取历史消息
			async getHistoryInfo(){
				// debugger;
				var that=this;
				console.log("currentid",that.currentId);
				var res=await db.collection("jz-custom-systeminfo,uni-id-users").where({
					type:0,
					user_id:that.currentId
				}).field("manager_id{nickname,username},comment_date,comment").get()
				
				var rows=res.result.data;
				this.historyinfoList=rows;
				console.log("historyinfoList",this.historyinfoList);
			},
			openHistory(){
				this.showhistory=true;
				this.getHistoryInfo();
			},
			// 查看验证资料
			lookYzzl(item) {
				this.curitemtitle=item.nickname+"("+item.username+")";
				this.showresources = true;
				this.moreresources = item.resources;
			},
			confirmyqr() {
				this.yqrinfo = {};
				this.allyqr = [];
			},
			// 查看邀请人
			async lookUser(id) {
				this.showlookyqr = true;

				var yqr = await db.collection("jz-custom-yhyqm,uni-id-users").where({
					byqr_id: id
				}).field("yqr_id{username,nickname,weiboname}").get();
				console.log("yqr", yqr);
				if (yqr.result.data && yqr.result.data.length > 0) {
					this.yqrinfo = yqr.result.data[0].yqr_id[0]
				}
				console.log("this.yqrinfo", this.yqrinfo);
				if (this.yqrinfo._id) {
					var allyqr = await db.collection("jz-custom-yhyqm,uni-id-users").where({
						yqr_id: this.yqrinfo._id
					}).field("byqr_id{username,nickname,weiboname}").get();
					if (allyqr.result.data && allyqr.result.data.length > 0) {
						this.allyqr = allyqr.result.data;
					}
				}

				console.log("this.allyqr", this.allyqr);
			},
			// 改变消息类型
			changexxtype(name) {
				// debugger;
				if (name == 1) {
					this.infoconent = "";
					this.showshType = false;
				} else {
					this.showshType = true;
				}
			},
			// 改变消息类型
			changeshtype(name) {
				// debugger;
				this.infoconent = name;
			},
			// 生成邀请码
			createdYqm() {
				uni.showModal({
					editable: true,
					title: "请输入尾号",
					success: (res) => {
						if (res.confirm) {
							// debugger;
							var content = res.content;
							var selects = this.selectedsUser();
							// var number = parseInt(res.content);
							var add_value = [];
							for (var i = 0; i < selects.length; i++) {
								add_value.push({
									status: true,
									user_type: 1,
									value: selects[i] + content
								})
							}
							return db.collection("jz-custom-yqm").add(add_value).then((res) => {
								uni.showToast({
									title: '新增成功'
								});

							}).catch((err) => {
								uni.showModal({
									content: err.message || '请求服务失败',
									showCancel: false
								})
							})
							// var add_value = {
							// 	user_id: id,
							// 	comment: content
							// }
							// return db.collection("jz-custom-systeminfo").add(add_value).then((res) => {
							// 	uni.showToast({
							// 		title: '发送成功'
							// 	});
							// }).catch((err) => {
							// 	uni.showModal({
							// 		content: err.message || '请求服务失败',
							// 		showCancel: false
							// 	})
							// })
						} else if (res.cancel) {
							console.log("取消");
						}
					}
				});
			},
			sendinfo(id) {
				this.showinfo = true;
				this.currentId = id;
				// uni.showModal({
				// 	editable: true,
				// 	title: "输入内容",
				// 	success: (res) => {
				// 		// debugger;
				// 		if (res.confirm) {
				// 			var content = res.content;
				// 			var add_value = {
				// 				user_id: id,
				// 				comment: content
				// 			}
				// 			return db.collection("jz-custom-systeminfo").add(add_value).then((res) => {
				// 				uni.showToast({
				// 					title: '发送成功'
				// 				});
				// 				// if (this.$refs.udb) {
				// 				// 	this.$refs.udb.loadData({
				// 				// 		clear: false
				// 				// 	}, () => {})
				// 				// }
				// 				// this.getOpenerEventChannel().emit('refreshData');
				// 			}).catch((err) => {
				// 				uni.showModal({
				// 					content: err.message || '请求服务失败',
				// 					showCancel: false
				// 				})
				// 			})
				// 		} else if (res.cancel) {
				// 			console.log("取消");
				// 		}
				// 	}
				// });
			},
			confirminfo() {
				// debugger;
				if (!this.infoconent) {
					uni.showToast({
						title: "请输入内容",
						icon: "none"
					});
					this.showinfo = true;
					return;
				}
				var add_value = {
					type: this.radioinfo,
					user_id: this.currentId,
					comment: this.infoconent
				}
				// return 
				return db.collection("jz-custom-systeminfo").add(add_value).then((res) => {
					uni.showToast({
						title: '发送成功'
					});
					this.infoconent = "";
					this.currentId = "";
				}).catch((err) => {
					uni.showModal({
						content: err.message || '请求服务失败',
						showCancel: false
					})
				})
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
				// debugger;
				var obj = {};
				obj[type] = item[type] == true ? false : true;
				console.log("obj", obj);
				this.$set(item, type, obj[type]);
				this.updateItem(item, obj);
			},
			updateItem(item, value) {
				return db.collection('uni-id-users').doc(item._id).update(value).then((res) => {
					uni.showToast({
						title: '修改成功'
					});
					// console.log("修改成功");
					this.getOpenerEventChannel().emit('refreshData');
				}).catch((err) => {
					uni.showModal({
						content: err.message || '请求服务失败',
						showCancel: false
					})
				});
			},
			onqueryload(data) {
				// for (var i = 0; i < data.length; i++) {
				// 	let item = data[i]
				// 	const roleArr = item.role.map(item => item.role_name)
				// 	item.role = roleArr.join('、')
				// 	if (Array.isArray(item.dcloud_appid)) {
				// 		item.dcloud_appid = item.dcloud_appid.join('、')
				// 	}
				// 	item.register_date = this.$formatDate(item.register_date)
				// }
				this.exportExcelData = data
			},
			changeSize(e) {
				this.pageSizeIndex = e.detail.value
			},
			getWhere() {
				// debugger;
				const query = this.query.trim()
				if (!query) {
					return ''
				}
				const queryRe = new RegExp(query, 'i')
				return dbSearchFields.map(name => queryRe + '.test(' + name + ')').join(' || ')
			},
			getWhere1() {
				// debugger;
				var query = this.query.trim()
				if (!query) {
					return ''
				}
				query = query.toLowerCase();
				var _search = "";
				dbSearchFields.forEach((item, index) => {
					if (index != dbSearchFields.length - 1) {
						_search += item + "=='" + query + "'||";
					} else {
						_search += item + "=='" + query + "'";
					}
				});
				return _search;

				// const queryRe = new RegExp(//, 'i')
				// return dbSearchFields.map(name => queryRe + '.test(' + name + ')').join(' || ')
			},
			search() {
				const newWhere = this.getWhere()
				this.where = newWhere;
				// 下一帧拿到查询条件
				this.$nextTick(() => {
					this.loadData();
				});
			},
			search1() {
				// debugger;
				const newWhere = this.getWhere1()
				this.where = newWhere;
				// 下一帧拿到查询条件
				this.$nextTick(() => {
					this.loadData();
				});
			},
			searchweibo() {
				const newWhere = "weiboname!=''&&weiboname!=null&&status!=1";
				this.where = newWhere
				// 下一帧拿到查询条件
				this.$nextTick(() => {
					this.loadData()
				})
			},
			searchweibono() {
				const newWhere = "weiboname!=''&&weiboname!=null&&isbdwb!=true&&status!=1";
				this.where = newWhere
				// 下一帧拿到查询条件
				this.$nextTick(() => {
					this.loadData()
				})
			},
			searchweibono2() {
				const newWhere =
					"weiboname!=''&&weiboname!=null&&isbdwb!=true&&status!=1&&(beizhu==''||beizhu==undefined||resources!=undefined)";
				this.where = newWhere
				// 下一帧拿到查询条件
				this.$nextTick(() => {
					this.loadData()
				})
			},
			searchweibono3() {
				const newWhere =
					"weiboname!=''&&weiboname!=null&&isbdwb!=true&&status!=1&&(beizhu==''||beizhu==undefined)";
				this.where = newWhere
				// 下一帧拿到查询条件
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
			selectedsUser() {
				var dataList = this.$refs.udb.dataList
				return this.selectedIndexs.map(i => dataList[i].username)
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
	
	uni-button[size=mini] {
	    padding: 0.2em !important;
	}
	.file-picker {
		display: inline-block;
	}

	th {
		max-width: 300px;
	}

	.u-th1,
	.u-th2,
	.u-td1,
	.u-td2 {
		max-width: 120px;
		width: 120px;
	}
</style>
