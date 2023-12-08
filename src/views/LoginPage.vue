<template>
    <div class="login">
        <h1>{{ $t('greeting.loginGreeting') }}</h1>
        <v-btn class="main-button" elevation="2" @click="onLogin">{{ $t('login.logIn') }}</v-btn>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'LoginPage',

    methods: {
        ...mapActions('auth', ['loginWithGoogle']),
        async onLogin() {
            try {
                await this.loginWithGoogle()
                this.$router.push({
                    name: 'home',
                })
            } catch (error) {
                alert(error.message)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.login {
    text-align: center;
}
</style>
