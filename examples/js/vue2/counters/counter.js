Vue.component('counter',{
    props: {
        initCount: {
            type: Number,
            default: 0,
        }
    },
    template: `
        <div class="counter">
            <span id="count" class="count">{{ count }}, {{ initCount }}</span>
            <button v-on:click="increment">Add</button>
        </div>`,
    data: function(){
        return {count: 0};
    }, 
    methods: {
        increment: function(){
            this.initCount++;
        }
    },
    computed: {
        totalCount: function(){
            return this.initCount + this.count;
        }
    }
})