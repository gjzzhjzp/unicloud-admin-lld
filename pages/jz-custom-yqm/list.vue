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
        <button class="uni-button" type="default" size="mini" @click="adddYqm">新增</button>
        <button class="uni-button" type="default" size="mini" :disabled="!selectedIndexs.length" @click="delTable">批量删除</button>
        <download-excel class="hide-on-phone" :fields="exportExcel.fields" :data="exportExcelData" :type="exportExcel.type" :name="exportExcel.filename">
          <button class="uni-button" type="primary" size="mini">导出 Excel</button>
        </download-excel>
      </view>
    </view>
    <view class="uni-container">
      <unicloud-db ref="udb" collection="jz-custom-yqm,uni-id-users" field="user_name_type,user_name,value,status,user_id.nickname" :where="where" page-data="replace"
        :orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
        v-slot:default="{data,pagination,loading,error,options}" :options="options" loadtime="manual" @load="onqueryload">
		<uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe type="selection" @selection-change="selectionChange">
          <uni-tr>
			<uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'user_id')" sortable @sort-change="sortChange($event, 'user_id')">申请人</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.user_name_type_localdata" @filter-change="filterChange($event, 'user_name_type')">账号平台</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'user_name')" sortable @sort-change="sortChange($event, 'user_name')">账号昵称</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'value')" sortable @sort-change="sortChange($event, 'value')">邀请码</uni-th>
            <uni-th align="center" sortable @sort-change="sortChange($event, 'status')">生效状态</uni-th>
			<!-- <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'manager_id')" sortable @sort-change="sortChange($event, 'manager_id')">创建人</uni-th> -->
            <uni-th align="center">操作</uni-th>
          </uni-tr>
          <uni-tr v-for="(item,index) in data" :key="index">
			    <uni-td align="center">{{(item.user_id&&item.user_id.length)>0?item.user_id[0].nickname:''}}</uni-td>
            <uni-td align="center">{{options.user_name_type_valuetotext[item.user_name_type]}}</uni-td>
            <uni-td align="center">{{item.user_name}}</uni-td>
            <uni-td align="center">{{item.value}}</uni-td>
			<uni-td align="center"><checkbox-group @change="change_data(item,'status')"><checkbox value="status" :checked="item.status == true" /></checkbox-group></uni-td>
			<!-- <uni-td align="center">{{(item.manager_id&&item.manager_id.length)>0?item.manager_id[0].username:''}}</uni-td> -->
            <uni-td align="center">
              <view class="uni-group">
                <button v-show="!item.value" @click="createQym(item)" class="uni-button" size="mini" type="primary">生成邀请码</button>
                <button @click="confirmDelete(item._id)" class="uni-button" size="mini" type="warn">删除</button>
              </view>
            </uni-td>
          </uni-tr>	
        </uni-table>
        <view class="uni-pagination-box">
          <uni-pagination show-icon :page-size="pagination.size" v-model="pagination.current" :total="pagination.count" @change="onPageChanged" />
        </view>
      </unicloud-db>
    </view>
  </view>
</template>

<script>
  import { enumConverter, filterToWhere } from '../../js_sdk/validator/jz-custom-yqm.js';

  const db = uniCloud.database()
  // 表查询配置
  const dbOrderBy = '' // 排序字段
  const dbSearchFields = ["user_name"] // 模糊搜索字段，支持模糊搜索的字段列表。联表查询格式: 主表字段名.副表字段名，例如用户表关联角色表 role.role_name
  // 分页配置
  const pageSize = 20
  const pageCurrent = 1
  const dbCollectionName = 'jz-custom-yqm';
  const orderByMapping = {
    "ascending": "asc",
    "descending": "desc"
  }

  export default {
    data() {
      return {
        query: '',
        where: '',
        orderby: dbOrderBy,
        orderByFieldName: "",
        selectedIndexs: [],
        options: {
          pageSize,
          pageCurrent,
          filterData: {
            "user_name_type_localdata": [
              {
                "value": 0,
                "text": "微博"
              },
              {
                "value": 1,
                "text": "抖音"
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
          "filename": "jz-custom-yqm.xls",
          "type": "xls",
          "fields": {
            "账号平台": "user_name_type",
            "账号昵称": "user_name",
            "邀请码": "value",
            "生效状态": "status"
          }
        },
        exportExcelData: []
      }
    },
    onLoad() {
      this._filter = {}
    },
    onReady() {
      this.$refs.udb.loadData()
    },
    methods: {
		// 生成邀请码
		createQym(item){
			var yqm=Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2);
			this.updateItem(item,{
				value:yqm
			}).then(()=>{
				if (this.$refs.udb) {
					this.$refs.udb.loadData({
						clear: false
					}, () => {})
				}
			});
		},
		change_data(item,type){
			// debugger;
			var obj={};
			obj[type]=item[type]==true?false:true;
			console.log("obj",obj);
			this.$set(item,type,obj[type]);
			this.updateItem(item,obj);
		},
		updateItem(item,value){
			return new Promise((r)=>{
				db.collection(dbCollectionName).doc(item._id).update(value).then((res) => {
				  uni.showToast({
				    title: '操作成功'
				  });
				  this.getOpenerEventChannel().emit('refreshData');
				  r();
				}).catch((err) => {
				  uni.showModal({
				    content: err.message || '请求服务失败',
				    showCancel: false
				  })
				});
			})
		},
		adddYqm(){
			var value={
				status:true,
				value:Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2)
				// manager_id:db.getCloudEnv('$cloudEnv_uid')
			};
			console.log(value)
			return db.collection(dbCollectionName).add(value).then((res) => {
			  uni.showToast({
			    title: '新增成功'
			  });
			  if (this.$refs.udb) {
			  	this.$refs.udb.loadData({
			  		clear: false
			  	}, () => {})
			  }
			  this.getOpenerEventChannel().emit('refreshData');
			}).catch((err) => {
			  uni.showModal({
			    content: err.message || '请求服务失败',
			    showCancel: false
			  })
			})
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
          success:(res) => {
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
          success:(res) => {
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
