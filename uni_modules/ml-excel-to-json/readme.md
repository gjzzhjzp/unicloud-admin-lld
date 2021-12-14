# ml-excel-to-json
=================

该云函数可以直接将EXCEL表格数据转为JSON数据,无需调用文件上传插件,简单实用

### 云函数示例
```javascript
const {
	Controller
} = require("uni-cloud-router");
const excelTojson = require('ml-excel-to-json')
module.exports = class apiController extends(
	Controller
) {
	async addCustom(){
		let res;
		let data = excelTojson(this.ctx.event.params)
		return {
			code:0,
			data
		}
	}

}
```

### 以下是文件转base64的js

```javascript
function urlTobase64(url, callback) {
	uni.request({
		url: url,
		method: 'GET',
		responseType: 'arraybuffer',
		success: res => {
			let base64 = uni.arrayBufferToBase64(res.data); //把arraybuffer转成base64
			callback(base64)
		}
	});
}
```

### 前端示例

```javascript
//首先获取需要解析的excel文件
uni.chooseFile({
	count: 1,
	extension: ['.xls', '.xlsx', '.csv'],
	success: res => {
		//此处是我将上一步的文件转base64做了全局
		this.$urlTobase64(res.tempFilePaths[0], base => {
			//此处采用的是uni-admin封装的uniCloud.callfunction
			this.$request(
							'v1/upload/handleData/addCustom',//第一步传参,我采用的路由框架
							{
								data:base,
								sheetList:[{
									index:0,
									keys:['姓名','电话'],
									keysIndex:0,
									startIndex:1,
									endIndex:8
								},{
									index:0,
									keys:['姓名1','电话2'],
									keysIndex:0,
									startIndex:1,
									endIndex:-1
								}]
							},//具体作用下方表格有描述
							{
								functionName: 'api-admin'
							}//使用的云函数名
						)
						.then(res =>{
							console.log(res)
							//查看获取到的数据
						})
					});
				}
			});
```

### 传参
| 属性 | 类型 | 默认值 | 说明 |
| data | String | null | 这里传入文件的base64 |
| sheetList | Array | [] | excel表格sheet页,当Array存在多个sheet时，会按照每个sheet的定义来合并所获取到的数据。也就是所有的数据会合并到一个数组中。 |
| sheetList.index | int | null | sheet页的索引号，例如excel表格第一页为0 |
| sheetList.keys | Array | null | keys对应excel表格的cols keys[0]对应cols[0],当与keysIndex同时存在时,keys生效 |
| sheetList.keysIndex | int | null | keysIndex可以指定excel表内哪一行作为表头来使用,当与keys同时存在时,keys生效 |
| sheetList.startIndex | int | null | startIndex可以决定你需要从第几行开始来获取数据 |
| sheetList.endtIndex | int | null或-1 | endIndex可以决定你的数据到第几行来结尾 |