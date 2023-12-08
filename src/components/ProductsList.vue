<template>
    <div class="products__wrapper">
        <div v-if="isLoading" class="loading">
            <v-progress-circular indeterminate color="purple"></v-progress-circular>
        </div>
        <div v-else-if="hasError">Error</div>
        <template v-else>
            <ul class="product__list">
                <template v-if="getFilteredList.length">
                    <li v-for="product in getFilteredList" :key="product.id" class="product__item item-product">
                        <div class="item-product__info">
                            <h4 class="item-product__name">{{ productTitle(product) }}</h4>
                            <strong class="item-product__price">{{ product.price }}₴</strong>
                            <div class="actions item-product__actions">
                                <v-btn elevation="2" v-if="userPermissions.update" @click="onEdit(product.id)">{{
                                    $t('buttonActions.buttonEdit')
                                }}</v-btn>
                                <v-btn elevation="2" v-if="userPermissions.delete" @click="deleteItem(product.id)">{{
                                    $t('buttonActions.buttonDelete')
                                }}</v-btn>
                            </div>
                        </div>
                        <div class="item-product__image">
                            <img :src="product.image" :alt="productTitle(product)" />
                            <font-awesome-icon
                                :icon="['fas', 'cart-shopping']"
                                class="item-product__icon"
                                v-if="getUser"
                                @click="addItemToTheCart(product)"
                            />
                        </div>
                    </li>
                </template>
            </ul>
            <router-link v-if="userPermissions.update" :to="{ name: 'product_editor' }">
                <v-btn class="button-add" block elevation="2">{{ $t('buttonActions.buttonAdd') }}</v-btn>
            </router-link>
            <strong v-if="!getFilteredList.length && getItemsList" class="err-msg">{{
                $t('errors.noProductsError')
            }}</strong>
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ProductsList',
    computed: {
        ...mapGetters('products', ['getItemsList', 'getFilteredList', 'hasError', 'isLoading']),
        ...mapGetters('auth', ['getUser']),
        ...mapGetters('users', ['userPermissions']),
        productTitle() {
            return (product) => (this.$i18n.locale === 'ua' ? product.name.ua : product.name.en)
        },
    },

    created() {
        console.log(this.getUser)
    },

    methods: {
        ...mapActions('cart', ['addItem']),
        ...mapActions('products', ['deleteItem', 'updateItem']),
        onEdit(id) {
            this.$router.push({
                name: 'product_editor',
                params: {
                    productId: id,
                },
            })
        },
        addItemToTheCart(product) {
            this.getUser.cart.push(product)
        },
    },
}
</script>

<style lang="scss" scoped>
</style>