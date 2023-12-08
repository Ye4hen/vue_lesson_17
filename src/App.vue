<template>
    <header class="header">
        <div class="header__container container">
            <nav>
                <router-link :to="{ name: 'home' }">{{ $t('menu.home') }}</router-link>
                <router-link :to="{ name: 'products' }">{{ $t('menu.products') }}</router-link>
                <router-link :to="{ name: 'cart' }">{{ $t('menu.cart') }}</router-link>
            </nav>
            <div class="header__lang">
                <span>{{ $t('languages.currentLanguage') }} : {{ currentLanguage }}</span>
                <div class="header__buttons actions">
                    <v-btn class="main-button" elevation="2" @click="changeLocale('ua')">Укр.</v-btn>
                    <v-btn class="main-button" elevation="2" @click="changeLocale('en')">Eng.</v-btn>
                </div>
            </div>
            <div class="header__auth">
                <span v-if="getUser" class="user">
                    <span>{{ getUser.displayName }}</span>
                    <img :src="getUser.photoURL" />
                    <v-btn class="main-button" elevation="2" @click="onLogout">{{ $t('login.logOut') }}</v-btn>
                </span>
                <v-btn v-else class="main-button" elevation="2" @click="loginWithGoogle">{{ $t('login.logIn') }}</v-btn>
            </div>
        </div>
    </header>
    <router-view />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters('auth', ['getUser']),
        currentLanguage() {
            return this.$i18n.locale === 'ua' ? 'Українська' : 'English'
        },
    },
    created() {
        this.$i18n.locale = localStorage.getItem('lastLocale') ?? process.env.VUE_APP_I18N_LOCALE

        const self = this
        window.addEventListener('storage', function () {
            if (self.$i18n.locale !== localStorage.getItem('lastLocale')) {
                self.$i18n.locale = localStorage.getItem('lastLocale')
                self.$router.go()
            }
        })
    },

    methods: {
        ...mapActions('auth', ['loginWithGoogle', 'logout']),
        changeLocale(lang) {
            this.$i18n.locale = lang
            localStorage.setItem('lastLocale', lang)
        },
        onLogout() {
            this.logout()
            this.$router.push({
                name: 'home',
            })
        },
    },
}
</script>

<style lang="scss">
@import '@/assets/style';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
    display: flex;
    gap: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
