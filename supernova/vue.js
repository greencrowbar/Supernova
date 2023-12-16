const app = Vue.createApp({
    data() {
        return{
            idk: 'home'
        }
    },
    methods:{
        toggle(thing) {
            this.idk = thing
        }
    }
})

app.mount('#app')