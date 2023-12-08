<template>
    <div class="filters-container">
        <div class="filter">
            <ul class="filter-list">
                <h5 class="small-title">{{ $t('filters.seller') }}</h5>
                <li v-for="seller in getSellersList" :key="seller" class="filter-item">
                    <label class="filter-label">
                        <input type="checkbox" v-model="filter.seller" :value="seller" />
                        {{ seller }}
                    </label>
                </li>
            </ul>
        </div>
        <div class="search">
            <v-text-field
                class="search-input"
                v-model="searchFilterText"
                :placeholder="$t('filters.searchPlaceholder')"
                hide-details="auto"
            ></v-text-field>
        </div>
        <div class="filter">
            <ul v-if="searchFilter.length" class="filter-list">
                <h5 class="small-title">{{ $t('filters.brand') }}</h5>
                <li v-for="brand in searchFilter" :key="brand" class="filter-item">
                    <label class="filter-label">
                        <input type="checkbox" v-model="filter.brand" :value="brand" />
                        {{ brand }}
                    </label>
                </li>
            </ul>
        </div>
        <v-btn class="main-button" elevation="2" @click="dropFilters">{{ $t('filters.dropFilters') }}</v-btn>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProductsFilter',

    data() {
        return {
            searchFilterText: null,
            filter: {
                brand: [],
                seller: [],
            },
        }
    },

    computed: {
        ...mapGetters('products', ['getBrandsList', 'getSellersList']),
        searchFilter() {
            if (!this.searchFilterText) {
                return this.getBrandsList
            } else {
                const searchParam = this.searchFilterText.toLowerCase()
                return this.getBrandsList.filter((brand) => {
                    return brand && brand.toLowerCase().includes(searchParam)
                })
            }
        },
    },

    watch: {
        filter: {
            handler(newVal) {
                this.updateFilter(newVal)
            },
            deep: true,
        },
    },

    methods: {
        ...mapActions('products', ['updateFilter']),
        dropFilters() {
            this.filter.brand = []
            this.filter.seller = []
            this.searchFilterText = null
        },
    },
}
</script>

<style lang="scss" scoped>
</style>