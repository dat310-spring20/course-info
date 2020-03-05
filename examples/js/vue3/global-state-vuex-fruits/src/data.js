const vuexStore = new Vuex.Store({
    state: {
        // like data in the vue instance
        fruits: [
            { name: "Apple",   favorite: true },
            { name: "Banana",  favorite: true },
            { name: "Pear",    favorite: true },
            { name: "Grapes",  favorite: false },
            { name: "Oranges", favorite: false },
            { name: "Kiwi",    favorite: false }]
    },
    getters: {
        // like computed in vue instance, but use state argument instead of this.
        favoriteFruits: function(state){
            return state.fruits.filter(
                (fruit) => fruit.favorite);
        }
    },
    mutations: {
        // mutation takes state as argument, and one additional argument (payload)
        addFruit(state, newFruit){
            state.fruits.push(newFruit);
        }
    }
});