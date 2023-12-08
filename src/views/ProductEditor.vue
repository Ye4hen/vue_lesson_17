<template>
    <div class="editor">
        <div v-if="isLoading" class="loading">
            <v-progress-circular indeterminate color="purple"></v-progress-circular>
        </div>
        <div v-else-if="hasError">Error</div>
        <template v-else>
            <div class="container">
                <div class="product-editor__item editor-item">
                    <img :src="product.image" :alt="productTitle(product)" />
                    <v-text-field
                        v-model="product.image"
                        :label="$t('productInputs.imageInput')"
                        :rules="rules"
                        hide-details="auto"
                    ></v-text-field>
                </div>
                <div class="product-editor__item editor-item">
                    <v-text-field
                        v-model="product.name.ua"
                        :label="$t('productInputs.nameUaInput')"
                        :rules="rules"
                        hide-details="auto"
                    ></v-text-field>
                    <v-text-field
                        v-model="product.name.en"
                        :label="$t('productInputs.nameEnInput')"
                        :rules="rules"
                        hide-details="auto"
                    ></v-text-field>
                </div>
                <div class="product-editor__item editor-item">
                    <v-text-field
                        v-model="product.price"
                        :label="$t('productInputs.priceInput')"
                        :rules="rules"
                        hide-details="auto"
                        type="number"
                    ></v-text-field>
                </div>
                <div class="product-editor__item editor-item">
                    <v-text-field
                        v-model="product.brand"
                        :label="$t('productInputs.brandInput')"
                        :rules="rules"
                        hide-details="auto"
                        type="text"
                    ></v-text-field>
                </div>
                <div class="product-editor__item editor-item">
                    <v-text-field
                        v-model="product.seller"
                        :label="$t('productInputs.sellerInput')"
                        :rules="rules"
                        hide-details="auto"
                        type="text"
                    ></v-text-field>
                </div>
                <div class="editor-actions actions">
                    <v-btn class="list-button" elevation="8" @click="onAction">{{ buttonActionTitle }}</v-btn>
                    <router-link :to="{ name: 'products' }"
                        ><v-btn class="list-button" elevation="8">{{
                            $t('buttonActions.buttonCancel')
                        }}</v-btn></router-link
                    >
                </div>
            </div>
            <div v-if="errorMessage" class="err-msg">{{ errorMessage }}</div>
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'ProductEditor',

    data() {
        return {
            product: {},
            productImage: null,
            errorMessage: null,
        }
    },

    computed: {
        ...mapGetters('products', ['getItemById', 'hasError', 'isLoading']),
        productId() {
            return this.$route.params.productId
        },
        buttonActionTitle() {
            if (this.$i18n.locale === 'ua') {
                if (this.productId) return 'Зберегти'
                else return 'Додати'
            } else {
                if (this.productId) return 'Save'
                else return 'Add'
            }
        },
        productTitle() {
            return (product) => {
                if (this.productId) {
                    if (this.$i18n.locale === 'ua') {
                        return product.name.ua
                    } else return product.name.en
                }
            }
        },
    },

    created() {
        this.product = { ...this.getItemById(this.productId) }
        this.loadList()
        if (!this.productId) {
            this.product.name = {
                ua: '',
                en: '',
            }
        }
        console.log(this.product)
    },

    methods: {
        ...mapActions('products', ['updateItem', 'addItem', 'loadList']),
        // setProductImage() {},
        onAction() {
            const { name, image, price, brand, seller } = this.product

            if (!name.en || !name.ua || !image || !price || !brand || !seller) {
                if (this.$i18n.locale === 'ua') {
                    return (this.errorMessage = 'Всі поля мусять бути заповнені')
                } else return (this.errorMessage = 'All inputs should be filled')
            }

            this.errorMessage = null

            const action = this.productId ? this.updateItem : this.addItem
            const itemData = this.productId ? { itemId: this.product.id, data: this.product } : this.product

            action(itemData)
            this.$router.push({ name: 'products' })
        },
    },
}
</script>

<style lang="scss" scoped>
</style>