const app = Vue.createApp({
    // template:`
    // <h1>Hola Mundo</h1>
    // <p> desde index.js </p>
    // `

    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote(){
            this.author = "Bruno Díaz"
            console.log(this.author)
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    },

})

app.mount('#myApp')