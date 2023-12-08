
import DbOperations from './DbOperations'

import { getFiltersList } from './helpers'

function getModuleSettingsObject(collectionTitle) {
	const collectionDB = new DbOperations(collectionTitle)
	return {
		namespaced: true,

		state: () => ({
			[collectionTitle]: [],
			loading: false,
			error: null,
			filter: {
				brand: [],
				seller: [],
			},
		}),

		getters: {
			isLoading: state => state.loading,
			hasError: state => state.error,

			getItemsList: (state) => state[collectionTitle],
			getSellersList: (state) => getFiltersList(state[collectionTitle], "seller"),
			getBrandsList: (state) => getFiltersList(state[collectionTitle], "brand"),
			getItemById: (state) => (itemId) => state[collectionTitle].find((item) => item.id == itemId),
			getFilteredList: state => {
				let filteredList = state[collectionTitle]
				filteredList = state[collectionTitle].filter(item => {
					const brandMatch = state.filter.brand.length === 0 || state.filter.brand.includes(item.brand)
					const sellerMatch = state.filter.seller.length === 0 || state.filter.seller.includes(item.seller)

					return brandMatch && sellerMatch
				})
				return filteredList
			},
		},

		mutations: {
			setItemsList(state, itemsList) {
				state[collectionTitle] = itemsList
			},
			addItem(state, item) {
				state[collectionTitle].push(item)
			},
			deleteItem(state, deleteItemId) {
				state[collectionTitle] = state[collectionTitle].filter((item) => item.id !== deleteItemId)
			},
			setLoading(state, value) {
				state.loading = value
			},
			setError(state, error) {
				state.error = error
			},
			setFilter(state, filterData) {
				state.filter = { ...state.filter, ...filterData }
			},
		},

		actions: {
			loadList({ commit }) {
				commit('setError', null)
				commit('setLoading', true)
				collectionDB
					.loadItemsList()
					.then((list) => {
						commit('setItemsList', list)
					})
					.catch((error) => {
						commit('setError', error)
					})
					.finally(() => {
						commit('setLoading', false)
					})
			},
			addItem({ commit, dispatch }, item) {
				commit('setError', null)
				commit('setLoading', true)
				collectionDB
					.addItem(item)
					.then(() => {
						dispatch('loadList')
					})
					.catch((error) => {
						commit('setError', error)
					})
					.finally(() => {
						commit('setLoading', false)
					})
			},
			deleteItem({ commit, dispatch }, itemId) {
				commit('setError', null)
				commit('setLoading', true)

				collectionDB
					.deleteItem(itemId)
					.then(() => {
						dispatch('loadList')
					})
					.catch((error) => {
						commit('setError', error)
					})
					.finally(() => {
						commit('setLoading', false)
					})
			},
			updateItem({ commit, dispatch }, { itemId, data }) {
				commit('setError', null)
				commit('setLoading', true)

				collectionDB
					.updateItem(itemId, data)
					.then(() => {
						dispatch('loadList')
					})
					.catch((error) => {
						commit('setError', error)
					})
					.finally(() => {
						commit('setLoading', false)
					})
			},
			updateFilter({ commit }, filterData) {
				commit('setFilter', filterData)
			},

		},

	}
}

export default getModuleSettingsObject

