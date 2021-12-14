var xlsx = require("node-xlsx");
module.exports = function(event) {
	const dataBuffer = new Buffer(event.data, 'base64'); //把base64码转成buffer对象
	let sheetList = xlsx.parse(dataBuffer);
	let data = [];
	event.sheetList.forEach(sheetItem => {
		try{
			let keys = [];
			if(sheetItem.keys && sheetItem.keys.length > 0){
				keys = sheetItem.keys
			}else{
				keys = sheetList[sheetItem.index].data.find((item,rowIndex) =>{
					return rowIndex ===sheetItem.keysIndex
				})
			}
			sheetList[sheetItem.index].data.forEach((rowItem, rowIndex) => {
				if (rowIndex < sheetItem.startIndex) return false;
				if (rowIndex > sheetItem.endIndex && sheetItem.endIndex !== -1) throw new Error('end forEach');
				let obj = {};
				rowItem.forEach((colItem, colIndex) => {
					obj[keys[colIndex]] = colItem
				})
				data.push(obj)
			})
		}catch(e){}
	})
	return data
}
