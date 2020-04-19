/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import LinksOverview from '../components/links/LinksOverview'
import CreateLink from '../components/links/CreateLink'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'LinksOverview',
			component: LinksOverview,
			meta: {
			},
		},
		{
			path: '/createlink',
			name: 'CreateLink',
			component: CreateLink,
			meta: {
			},
		},
		{
			path: '*',
			redirect: '/'
		},
	]
})

export default router;
