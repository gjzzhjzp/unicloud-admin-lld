const db = uniCloud.database();
export default{
	data(){
		return {
			categorieszw: "",
			cascaderData: [],
		}
	},
	watch:{
		
	},
	onReady() {
		this.getcategories();
	},
	methods:{
		// 获取分类
		async getcategories() {
			var categories = await db.collection("opendb-news-categories").get({
				getTree: {
					startWith: "flbm=='100000'" ////分类顶级编码
				}
			});
			console.log("categories", categories);
			if (categories.result && categories.result.data.length > 0) {
				this.cascaderData = categories.result.data;
			}
		},
		cascaderConfirem(e) {
			console.log("eee",e);
			var select_names = e.select_names;
			var select_ids = e.select_ids;
			this.$set(this.formData, "categories", select_ids.join(","));
			this.$set(this.formData, "categorieszw", select_names.join(","));
		},
		opencategories() {
			// debugger;
			this.$refs.cascader.show();
		}
	}
}