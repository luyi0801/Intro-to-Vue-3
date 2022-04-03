const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        reduceCart(id) {
            console.log(id)
            this.cart.pop()
            console.log(this.cart)
        }
    }
})
