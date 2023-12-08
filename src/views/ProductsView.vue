<template>
    <div class="product">
        <div class="product__container container">
            <h2 class="product__title title">{{ $t('titles.mainTitle') }}</h2>
            <div class="product__body">
                <products-filter />
                <products-list />
            </div>
        </div>
    </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue'
import { mapActions } from 'vuex'
import ProductsFilter from '@/components/ProductsFilter.vue'

export default {
    components: { ProductsList, ProductsFilter },
    name: 'ProductsView',

    computed: {},

    created() {
        this.loadList()
    },

    methods: {
        ...mapActions('products', ['loadList']),
    },
}
</script>

<style lang="scss" scoped>
</style>