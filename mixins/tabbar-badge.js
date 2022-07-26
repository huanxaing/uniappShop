import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters('m_cart', ['total'])
	},
	onShow() {
		// 在页面刚展示的时候，设置数字徽标
		this.getTotal()
	},
	watch: {
		total() {
			this.getTotal()
		}
	},
	methods: {
		getTotal() {
			// 调用 uni.setTabBarBadge() 方法，为购物车设置右上角的徽标
			uni.setTabBarBadge({
				index: 2, // 索引
				text: this.total + '' // 注意：text 的值必须是字符串，不能是数字
			})
		}
	}
}

