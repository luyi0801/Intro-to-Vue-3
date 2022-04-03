const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            //image: './assets/images/socks_blue.jpg',
            selectVariant: 0,
            //inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity:50,onsale:false },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' ,quantity:0,onsale:true },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        //updateImage(variantImage) {
        //    this.image = variantImage
        //}
        updateVariant(index) { 
            this.selectVariant = index
        }
    },
    computed: {
        name() { 
            return this.variants[this.selectVariant].onsale? this.brand+this.product+ " is onsale":this.brand + " " + this.product;
        },
        image() { 
            return this.variants[this.selectVariant].image;
        },
        inStock() { 
            return this.variants[this.selectVariant].quantity > 0 ? true: false;
        }
        
    }
})
