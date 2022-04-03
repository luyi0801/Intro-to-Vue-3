app.component('review-form', {
    template:
    /*html*/
    `
    <form class="review-form" action="" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <label for="recomend">Would you recomend this product?</label>
        <select id="recomend" v-model="recomend">
        <option>Yes</option>
        <option>No</option>
        </select>
        <br>
        <input class="button" type="submit" value="Submit">

    </form>
    `,
    data() { 
        return {
            name: '',
            review: '',
            rating: null,
            recomend:null
        }
    },
    methods: {
        onSubmit() { 
            if (this.name === "" || this.review === "" || this.rating === null || this.recomend === null) { 
                alert("the review is incomplshed.please fill the fields!")
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recomend:this.recomend
            }
            console.log(this.rating)
            this.$emit("review-submitted", productReview)
            this.name = ""
            this.review = ""
            this.rating = null
            this.recomend=null
        }
    }
})