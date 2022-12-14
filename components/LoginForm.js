app.component('login-form', {
    template:
    /*html*/
    `
    <form class="login-form" @submit.prevent="login">
        <label for="username">Nombre de usuario:</label>
        <input id="username" v-model="username">
        
        <label for="password">Contraseña:</label>
        <input id="password" type="password" v-model="password">

        <input type="submit" value="Iniciar Sesión">
        <p v-if="logged">Usuario {{ userLogged }} has logged!!!</p>
    </form>
    `,
    data() {
        return {
            username: '',
            password: '',
            logged: false,
        }
    },
    methods: {
        login() {
            if (this.username === '' || this.password === '') {
                alert('Por favor ingrese todos los campos')
                return
            }

            this.logged = true
        }
    },
    computed: {
        userLogged() {
            
            if (this.logged) {
                let username = this.username
                this.username = ''
                this.password = ''
                return username
            }
        }
    }
})