app.component('product-details', {
    props: {
        details:{ 
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `
    <p>{{ details }}</p>
    `,
    methods: {
    },
    computed: {
    }
})