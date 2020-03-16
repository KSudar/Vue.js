import Home from './components/Home.vue'
import E404 from './components/404.vue'
import Stocks from './components/stocks/Stocks.vue'
import Portfolio from './components/portfolio/Portfolio.vue'

export const routes = [
	{
		path: '/', component: Home
	},
	{
		path: '/stocks', component: Stocks
	},
	{
		path: '/portfolio', component: Portfolio
	},
	{
		path: '*', component: E404
	},
]