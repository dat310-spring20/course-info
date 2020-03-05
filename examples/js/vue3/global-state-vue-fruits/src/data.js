let store = new Vue({
    // el: "#app",
    data: {
        fruits: [
            { name: "Apple",   favorite: true },
            { name: "Banana",  favorite: true },
            { name: "Pear",    favorite: true },
            { name: "Grapes",  favorite: false },
            { name: "Oranges", favorite: false },
            { name: "Kiwi",    favorite: false }]
    },
    computed: {
        // getter
        favoriteFruits: function(){
            return this.fruits.filter(
                (fruit) => fruit.favorite);
        }
    },
    methods: {
        // setter
        addFruit(name, isFavorite){
            this.fruits.push({name: name, favorite: isFavorite});
        }
    }
})