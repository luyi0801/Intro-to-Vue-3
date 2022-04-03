app.component('review-form', {
    template:
    /*html*/
    `
    <form action="" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option value="">5</option>
            <option value="">4</option>
            <option value="">3</option>
            <option value="">2</option>
            <option value="">1</option>
        </select>
        <br>
        <input class="button" type="submit" value="Submit">

    </form>
    `,
    data() { 
        return {
            name: '',
            review: '',
            rating:null
        }
    },
    methods: {
        onSubmit() { 
            if (this.name == "" || this.review == "" || this.rating == "") { 
                alert("please fill the form!")
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            console.log(this.rating)
            this.$emit("review-submitted", productReview)
            this.name = ""
            this.review = ""
            this.rating = null
        }
    }
})