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
        <button class="uni-button" type="default" size="mini" :disabled="!selectedIndexs.length" @click="delTable">批量删除</button>
        <download-excel class="hide-on-phone" :fields="exportExcel.fields" :data="exportExcelData" :type="exportExcel.type" :name="exportExcel.filename">
          <button class="uni-button" type="primary" size="mini">导出 Excel</button>
        </download-excel>
      </view>
    </view>
    <view class="uni-container">
      <unicloud-db ref="udb" collection="jz-opendb-resources,uni-id-users" field="categories,categorieszw,labels,author,title,article_status,is_grant,is_encryption,is_login,avatar,resources,zy_gs,excerpt,content,user_id{nickname}" :where="where" page-data="replace"
        :orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
        v-slot:default="{data,pagination,loading,error,options}" :options="options" loadtime="manual" @load="onqueryload">
        <uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe type="selection" @selection-change="selectionChange">
          <uni-tr>
			   <uni-th align="center" sortable @sort-change="sortChange($event, 'avatar')">封面</uni-th>
			  <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'title')" sortable @sort-change="sortChange($event, 'title')">标题</uni-th>
			  
            <!-- <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'categories')" sortable @sort-change="sortChange($event, 'categories')">分类</uni-th> -->
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'categorieszw')" sortable @sort-change="sortChange($event, 'categorieszw')">分类</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'labels')" sortable @sort-change="sortChange($event, 'labels')">标签</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'author')" sortable @sort-change="sortChange($event, 'author')">作者</uni-th>
			<uni-th align="center" width="80px">投稿人</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.article_status_localdata" @filter-change="filterChange($event, 'article_status')">状态</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.is_grant_localdata" @filter-change="filterChange($event, 'is_grant')">授权</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.is_encryption_localdata" @filter-change="filterChange($event, 'is_encryption')">加密</uni-th>
              <uni-th align="center">操作</uni-th>
          </uni-tr>
          <uni-tr v-for="(item,index) in data" :key="index">
			  <uni-td align="center">
			    <uni-file-picker v-if="item.avatar && item.avatar.fileType == 'image'" :value="item.avatar" :file-mediatype="item.avatar && item.avatar.fileType" return-type="object" :imageStyles="imageStyles" readonly></uni-file-picker>
			    <uni-link v-else :href="item.avatar && item.avatar.url" :text="item.avatar && item.avatar.url"></uni-link>
			  </uni-td>
			   <uni-td align="center">{{item.title}}</uni-td>
            <!-- <uni-td align="center">{{item.categories}}</uni-td> -->
            <uni-td align="center">{{item.categorieszw}}</uni-td>
            <uni-td align="center">{{item.labels}}</uni-td>
            <uni-td align="center">{{item.author}}</uni-td>
			<!-- {{item}} -->
			 <uni-td align="center">{{item.user_id[0].nickname}}</uni-td>
            <!-- <uni-td align="center">{{options.article_status_valuetotext[item.article_status]}}</uni-td> -->
            <uni-td align="center">  <checkbox-group @change="change_data(item,'article_status')"><checkbox value="article_status" :checked="item.article_status==1" /></checkbox-group></uni-td>
			<uni-td align="center"> <checkbox-group @change="change_data(item,'is_grant')"><checkbox value="is_grant" :checked="item.is_grant==1" /></checkbox-group></uni-td>
			<uni-td align="center"> <checkbox-group @change="change_data(item,'is_encryption')"><checkbox value="is_encryption" :checked="item.is_encryption==1" /></checkbox-group></uni-td>
			
            <!-- <uni-td align="center">{{item.excerpt}}</uni-td> -->
            <!-- <uni-td align="center">{{item.content}}</uni-td> -->
            <uni-td align="center">
              <view class="uni-group">
                <button @click="navigateTo('./edit?id='+item._id, false)" class="uni-button" size="mini" type="primary">修改</button>
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
  import { enumConverter, filterToWhere } from '../../js_sdk/validator/jz-opendb-resources.js';

  const db = uniCloud.database()
  // 表查询配置
  const dbOrderBy = '' // 排序字段
  const dbSearchFields = [] // 模糊搜索字段，支持模糊搜索的字段列表。联表查询格式: 主表字段名.副表字段名，例如用户表关联角色表 role.role_name
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
        query: '',
        where: '',
        orderby: dbOrderBy,
        orderByFieldName: "",
        selectedIndexs: [],
        options: {
          pageSize,
          pageCurrent,
          filterData: {
            "article_status_localdata": [
              {
                "value": 0,
                "text": "锁定"
              },
              {
                "value": 1,
                "text": "启用"
              }
            ],
            "is_grant_localdata": [
              {
                "value": 0,
                "text": "未授权"
              },
              {
                "value": 1,
                "text": "已授权"
              }
            ],
            "is_encryption_localdata": [
              {
                "value": 0,
                "text": "不加密"
              },
              {
                "value": 1,
                "text": "加密"
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
            "作者": "author",
            "标题": "title",
            "文章状态": "article_status",
            "是否授权": "is_grant",
            "是否加密": "is_encryption",
            "封面大图": "avatar",
            "附件资源": "resources",
            "摘要": "excerpt",
            "内容": "content"
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
		change_data(item,type){
			// debugger;
			var obj={};
			obj[type]=item[type]==1?0:1;
			console.log("obj",obj);
			this.$set(item,type,obj[type]);
			this.updateItem(item,obj);
		},
		updateItem(item,value){
			return db.collection('jz-opendb-resources').doc(item._id).update(value).then((res) => {
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
