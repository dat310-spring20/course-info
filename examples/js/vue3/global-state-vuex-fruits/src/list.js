// this component is now reactive
Vue.component("my-favorites",{
    computed: {
        favorites: function(){
            return this.$store.getters.favoriteFruits;
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