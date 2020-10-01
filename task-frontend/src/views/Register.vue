<template>
    <div>
        <div class="row d-flex justify-content-center align-items-center">
            <form @submit.prevent="register(form)" class="col-md-6">
                <div class="form-group">
                    <label for="exampleInputName1">Nombre</label>
                    <input v-model="form.name" required type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp">
                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Correo</label>
                    <input v-model="form.email" required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Contrasena</label>
                    <input v-model="form.password" required type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <!-- <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    </div>
</template>
<script>

import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(['register'])
        }
    }
</script>
<style scoped>

</style>