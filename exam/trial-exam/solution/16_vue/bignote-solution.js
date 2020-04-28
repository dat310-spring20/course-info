Vue.component('big-note', {
    props: ['display'],
    template: `
    <div class="framed box bignote" v-bind:class="display.category">
            
        <h4>
            <span class="category">#{{ display.category }}</span>
            {{ display.text }}
        </h4>
        <button v-if="!display.done" v-on:click="mark">Mark as done</button>
        <span v-else>Done!</span>
    </div>
    `,
    methods: {
        mark: function(){
            this.$emit('done');
        }
    }
})