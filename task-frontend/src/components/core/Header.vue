<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">TaskTo</router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li v-if="isLogin" @click="logout" class="nav-item font-weight-bold">
                        <a class="nav-link" href="javascript:void(0)">Salir</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Header',
    computed: {
        ...mapGetters(['isLogin'])
    },
    methods: {
        ...mapActions(['logout'])
    }
}
</script>
<style scoped>

</style>