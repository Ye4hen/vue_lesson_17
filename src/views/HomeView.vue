<template>
    <div class="home">
        <h1 class="home__title title">{{ $t('greeting.greetingTitle') }}</h1>
        <h4 class="home__sub-title small-title">{{ $t('greeting.greetingSubTitle') }}</h4>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'HomeView',
    components: {},
}
</script>

<style lang="scss" scoped>
.home {
    text-align: center;
}
</style>
