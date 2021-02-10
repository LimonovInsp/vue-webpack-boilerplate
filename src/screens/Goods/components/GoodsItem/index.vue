<template>
    <li class="goods__item">{{item}}</li>
</template>

<script>
    export default {
        props: {
            item: String
        }
    }
</script>

<style lang="scss" scoped>
@import 'styles.module.scss';
</style>