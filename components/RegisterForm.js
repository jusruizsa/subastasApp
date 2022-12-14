app.component('register-form', {
    template:
    /*html*/
    `
    <form class="login-form" @submit.prevent="login">

        <label for="email">Correo electrónico</label>
        <input id="email" type="email" v-model="email">

        <label for="username">Nombre de usuario:</label>
        <input id="username" v-model="username">
        
        <label for="password">Contraseña:</label>
        <input id="password" type="password" v-model="password">

        <input type="submit" value="Registrar">
        <p v-if="registered">Usuario {{ userRegistered }} has registered!!!</p>
    </form>
    `,
    data() {
        return {
            email: '',
            username: '',
            password: '',
            registered: false,
        }
    },
    methods: {
        login() {
            if (this.email === '' || this.username === '' || this.password === '') {
                alert('Por favor ingrese todos los campos')
                return
            }

            this.registered = true
        }
    },
    computed: {
        userRegistered() {
            
            if (this.registered) {
                let username = this.username
                this.username = ''
                this.password = '',
                this.email = ''
                return username
            }
        }
    }
})