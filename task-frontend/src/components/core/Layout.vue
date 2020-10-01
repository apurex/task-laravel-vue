<template>
    <div>
        <Header></Header>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>
<script>

    import Header from './Header'

    export default {
        name: 'Layout',
        components: {
            Header
        }
    }
</script>
<style scoped>

</style>