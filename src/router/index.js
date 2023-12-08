import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from '@/store'

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
		meta: {
			requireAuth: false,
		},
	},
	{
		path: "/products",
		name: "products",
		component: () =>
			import(/* webpackChunkName: "products" */ "../views/ProductsView.vue"),
		meta: {
			requireAuth: false,
		},
	},
	{
		path: "/product_editor/:productId?",
		name: "product_editor",
		component: () =>
			import(/* webpackChunkName: "product_editor" */ "../views/ProductEditor.vue"),
		meta: {
			requireAuth: true,
		},
	},
	{
		path: "/cart",
		name: "cart",
		component: () =>
			import(/* webpackChunkName: "cart" */ "../views/CartView.vue"),
		meta: {
			requireAuth: true,
		},
	},

	{
		path: "/login",
		name: "login",
		component: () =>
			import(/* webpackChunkName: "login" */ "../views/LoginPage.vue"),
		meta: {
			requireAuth: false,
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach(async (to) => {
	if (to.meta?.requireAuth) {
		let isAuthenticated = store.state.auth.user

		if (!isAuthenticated) isAuthenticated = await store.dispatch('auth/loginWithCredential')

		if (!isAuthenticated)
			return {
				name: 'login',
			}
	}
})

export default router;
