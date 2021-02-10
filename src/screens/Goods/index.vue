<template>
    <div class="goods">
        <GoodsList />
    </div>
    <AuthorPractical />
</template>

<script>
import AuthorPractical from './components/AuthorPractical';
import GoodsList from './components/GoodsList';
export default {
    components: {
        GoodsList,
        AuthorPractical
    }
}
</script>

<style lang="scss" scoped>
   @import 'styles.module.scss';
</style>