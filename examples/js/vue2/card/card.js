Vue.component('card', {
    template: `
    <div class="cardboard" style="width: 400px;">
        <div class="outer" v-on:click="flip">
            <div class="card front" v-bind:style="{ transform: flipped? 'rotateY(180deg)': 'none' }">
                <img src="images/css.jpg">
            </div>
            <div class="card back" v-bind:style="{ transform: flipped? 'rotateY(180deg)': 'none' }"></div>
        </div>
    </div>
    `,
    data: function() {
        return {
            flipped: false
        };
    },
    methods: {
        flip: function(){
            if (this.flipped){
                this.flipped = false;
            }
            else {
                this.flipped = true;
            }
        }
    }
})