<template>
    <div class="cart">
        <h2 class="cart__title title">{{ $t('cart.cartTitle') }}</h2>
        <ul class="cart__list">
            <li v-for="product in getUser.cart" :key="product.id" class="cart__item item-product">
                <div class="item-product__info">
                    <h4 class="item-product__name">{{ productTitle(product) }}</h4>
                    <strong class="item-product__price">{{ product.price }}₴</strong>
                </div>
                <div class="item-product__image">
                    <img :src="product.image" :alt="productTitle(product)" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {}
    },

    computed: {
        ...mapGetters('auth', ['getUser']),
        ...mapGetters('cart', ['getItemsList']),
        productTitle() {
            return (product) => (this.$i18n.locale === 'ua' ? product.name.ua : product.name.en)
        },
    },

    created() {
        this.loadList()
    },

    methods: {
        ...mapActions('cart', ['loadList']),
    },
}
</script>
