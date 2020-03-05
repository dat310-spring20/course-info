// this component is not reactive
Vue.component("my-favorites",{
    computed: {
        favorites: function(){
            return store.favoriteFruits();
        } 
    },
    template: `
    <div>
    <h1>Favorite fruites</h1>
    <ul>
        <li v-for="fruit in favorites">
            {{ fruit.name }}
        </li>
    </ul>
    </div>
    `
});

// this component is reactive
Vue.component("my-favorites2",{
    data: function(){
        return {
            fruits: store.fruits,
        };
    },
    computed: {
        favorites: function(){
            return this.fruits.filter(
                (fruit) => fruit.favorite);
        } 
    },
    template: `
    <div>
    <h1>Favorite fruites</h1>
    <ul>
        <li v-for="fruit in favorites">
            {{ fruit.name }}
        </li>
    </ul>
    </div>
    `
});
