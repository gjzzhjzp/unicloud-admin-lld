<template>
	<view>
		<u-popup v-model="showPop" mode="bottom">
			<view class="cascader-head">
				<text class="cancel" @click="cancelSelect">取消</text>
				<text class="title">请选择</text>
				<text class="confirem" @click="confiremSelect">确定</text>
			</view>
			<view class="cascader">
				<!--<scroll-view class="item" style="width: 300rpx;" scroll-y="true">
					<view class="item-block" v-for="(item,index) in selectData" :key="index"
						:style="{'background':current==index?'white':'#f8f8f8','color':item.child_active?'#f44c01':'#333333'}"
						@click="selectOne(index)">
						 <u-checkbox active-color="#f44c01" v-if="oneSelect" @change="checkboxChange($event,index)"
							v-model="item.active">
						</u-checkbox>
						<view style="flex: 1;">
							<text>{{item.name}}</text>
						</view>
					</view>
				</scroll-view> -->
				<scroll-view class="item" style="background-color: white;" scroll-y="true">
					<block v-if="selectData.length>0&&selectData[current].children.length>0">
						<view class="item-cont" v-for="(item,index) in selectData[current].children" :key="index">
							<view class="item-cate" @click="selectTwo(item,index)">
								<text class="title"
									:style="{'color':item.child_active?'#f44c01':'#333333'}">{{item.name}}</text>
								<u-icon v-if="item.active" name="checkmark" color="#f44c01" size="28"></u-icon>
							</view>
							<view class="item-cellbox" v-if="item.children&&item.children.length>0">
								<text class="item-cell" v-for="(it,ix) in item.children" :key="ix"
									@click="selectTree(index,it,ix)"
									v-bind:style="{ color: it.active?'#ffffff':'#666666', background: it.active?'red':'#f8f8f8' }">{{it.name}}</text>
							</view>
						</view>
					</block>
				</scroll-view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: 'cascader',
		props: {
			activeIndex: {
				type: Number,
				default: 0
			},
			cascaderShow: {
				type: Boolean,
				default: false,
			},
			//开启一级选择
			oneSelect: {
				type: Boolean,
				default: true,
			},
			//开启二级选择
			twoSelect: {
				type: Boolean,
				default: true,
			},
			//label展示字段
			labelName: {
				type: String,
				default: 'name'
			},
			//value选中字段
			valueName: {
				type: String,
				default: 'id'
			},
			//初始选中值
			selectValue: {
				type: [Array,String],
				default: () => {
					return [];
				}
			},
			//选择数据
			cascaderData: {
				type: Array,
				default: () => {
					return [];
				}
			}
		},
		data() {
			return {
				current: this.activeIndex,
				showPop: this.cascaderShow,
				selectDataCopy: JSON.parse(JSON.stringify(this.cascaderData)),
				selectData: JSON.parse(JSON.stringify(this.cascaderData)),
			}
		},
		watch: {
			cascaderData(val, oldVal) {
				this.selectData = JSON.parse(JSON.stringify(val));
			}
		},
		mounted() {
			this.defaultSelect()
		},
		methods: {
			// 初始化选中
			defaultSelect() {
				// debugger;
				var that=this;
				var selectValue=this.selectValue;
				if(typeof selectValue=="string"){
					selectValue=selectValue.split(",");
				}
				let selectData = this.selectData;
				if(selectData&&selectData.length>0){
					setactive(selectData[0].children);
				}
				function setactive(ary){
					ary.forEach((item,index)=>{
						if(selectValue.indexOf(item[that.valueName])!=-1){
							// debugger;
							that.$set(item,"active",true);
						}else{
							that.$set(item,"active",false);
						}
						if(item.children&&item.children.length>0){
							setactive(item.children);
						}
					});
				}
				// for (let i = 0; i < selectValue.length; i++) {
				// 	for (let y = 0; y < selectData.length; y++) {
				// 		if (selectData[y][this.valueName] == selectValue[i]) {
				// 			selectData[y].active = true;
				// 			break;
				// 		} else {
				// 			for (let x = 0; x < selectData[y].children.length; x++) {
				// 				if (selectData[y].children[x][this.valueName] == selectValue[i]) {
				// 					selectData[y].children[x].active = true;
				// 					selectData[y].child_active = true;
				// 					break;
				// 				} else {
				// 					for (let z = 0; z < selectData[y].children[x].children.length; z++) {
				// 						if (selectData[y].children[x].children[x][this.valueName] == selectValue[i]) {
				// 							selectData[y].children[x].children[x].active = true;
				// 							selectData[y].child_active = true;
				// 							selectData[y].children[x].child_active = true;
				// 							break;
				// 						}
				// 					}
				// 				}
				// 			}
				// 		}
				// 	}
				// }
				return;
			},
			show() {
				// debugger;
				this.showPop = true;
				this.defaultSelect()
			},
			hide() {
				this.showPop = false;
			},
			checkboxChange(e, index) {
				let oneData = this.selectData[index];
				oneData.active = e.value;
				this.$set(this.selectData, index, oneData);
			},
			selectOne(index) {
				this.current = index;
			},
			selectTwo(item, index) {
				if (!this.twoSelect) return;
				let twoData = this.selectData[this.current];
				if (twoData.children[index].active) {
					twoData.children[index] = {
						...item,
						active: false
					};
					//判断兄弟中是否已无选中
					let status = false;
					twoData.children.map((cell) => {
						if (cell.active) {
							status = true;
						}
						if (cell.children && cell.children.length > 0) {
							cell.children.map((it) => {
								if (it.active) {
									status = true;
								}
							})
						}

					})
					if (!status) {
						twoData.child_active = false;
					}
				} else {
					twoData.children[index] = {
						...item,
						active: true
					};
					twoData.child_active = true;
				}
				this.$set(this.selectData, this.current, twoData);
			},
			selectTree(Pindex, item, index) {
				let twoData = this.selectData[this.current];
				let treeData = twoData.children[Pindex];
				if (treeData.children[index].active) {
					treeData.children[index] = {
						...item,
						active: false
					};
					//判断兄弟中是否已无选中
					let status = false;
					treeData.children.map((cell) => {
						if (cell.active) {
							status = true;
						}
					})
					if (!status) {
						treeData.child_active = false;
					}
					//查找父级下面是否有选中项
					let pstatus = false;
					twoData.children.map((cell) => {
						if (cell.active) {
							pstatus = true;
						}
						cell.children.map((it) => {
							if (it.active) {
								pstatus = true;
							}
						})
					})
					if (!pstatus) {
						twoData.child_active = false;
					}
				} else {
					treeData.children[index] = {
						...item,
						active: true
					};
					//标识父级下面选中
					treeData.child_active = true;
					twoData.child_active = true;
				}
				this.$set(this.selectData, this.current, twoData);
			},
			cancelSelect() {
				this.selectData = JSON.parse(JSON.stringify(this.selectDataCopy))
				this.showPop = false;
			},
			confiremSelect() {
				let data = this.selectData;
				let select_ids = [];
				let select_names = [];
				data.map((item, index) => {
					if (item.active) {
						select_ids.push(item[this.valueName]);
						select_names.push(item[this.labelName]);
					}
					if (item.children && item.children.length > 0) {
						item.children.map((it, ix) => {
							if (it.active) {
								select_ids.push(it[this.valueName]);
								select_names.push(it[this.labelName]);
							}
							if (it.children && it.children.length > 0) {
								it.children.map((itc, ixc) => {
									if (itc.active) {
										select_ids.push(itc[this.valueName]);
										select_names.push(itc[this.labelName]);
									}
								})
							}
						})
					}
				})
				this.$emit('confirem', {
					select_ids: select_ids,
					select_names: select_names
				});
				this.showPop = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cascader-head {
		height: 100rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		border-bottom: 1rpx solid #e6e6e6;

		.cancel {
			font-size: 30rpx;
			color: #666666;
		}

		.title {
			font-size: 30rpx;
			color: #333333;
		}

		.confirem {
			font-size: 30rpx;
			color: #666666;
		}
	}

	.cascader {
		display: flex;
		flex-direction: row;
		height: 800rpx;
		background-color: #F8F8F8;

		.item {
			height: 800rpx;

			.item-block {
				display: flex;
				flex-direction: row;
				align-items: center;

				height: 100rpx;
				padding: 20rpx;
				font-size: 26rpx;
				color: #333333;
			}

			.item-list {
				display: flex;
				flex-direction: row;
				align-items: center;
				height: 100rpx;
				border-bottom: 1rpx solid #e6e6e6;
				padding: 0 20rpx;
			}

			.item-cont {
				display: flex;
				flex-direction: column;
				padding: 20rpx;

				.item-cate {
					border-bottom: 1rpx solid #e6e6e6;
					padding: 20rpx 0;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;

					.title {
						font-size: 26rpx;
						color: #333333;
					}
				}

				.item-cellbox {
					display: flex;
					flex-direction: row;
					align-items: center;
					flex-wrap: wrap;

					.item-cell {
						width: 150rpx;
						height: 60rpx;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: center;
						background-color: #F8F8F8;
						margin-right: 15rpx;
						font-size: 25rpx;
						color: #666666;
						margin-top: 20rpx;
						border-radius: 10rpx;
					}

				}

				.active {
					color: '#ffffff';
					background: '#fa3534';
				}
			}
		}
	}
</style>
