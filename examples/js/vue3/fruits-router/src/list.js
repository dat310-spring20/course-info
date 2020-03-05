// this component is now reactive
let myFavorites = Vue.component("my-favorites",{
    props: {
        showFavorites: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        fruits: function(){
            if (this.showFavorites){
                return store.favoriteFruits;
            } 
            return store.notFavoriteFruits;
        } 
    },
    template: `
    <div>
    <h1 v-if="showFavorites">Favorite fruites</h1>
    <h1 v-else>Fruites I do note like</h1>
    <ul>
        <li v-for="fruit in fruits">
            {{ fruit.name }}
        </li>
    </ul>
    </div>
    `
});

let allFruits = Vue.component("all-fruits",{
    computed: {
        fruits: function(){
            return store.fruits;
        } 
    },
    template: `
    <div>
    <h1>All fruits</h1>
    <ul>
        <li v-for="fruit in fruits">
            {{ fruit.name }}
        </li>
    </ul>
    </div>
    `
});