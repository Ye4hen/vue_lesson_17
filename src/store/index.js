import { createStore } from "vuex";
import products from "./modules/products";
import auth from "./modules/auth";
import users from "./modules/users";

export default createStore({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		products,
		auth,
		users,
	},
});
