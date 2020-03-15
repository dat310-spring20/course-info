Vue.component('card', {
    props: ["card"],
    template: `
    <div class="outer" v-on:click="$emit('flip')" 
        v-bind:style="{ visibility: card.matched? 'hidden': 'visible'}"
        >
        <div class="card front" v-bind:style="{ transform: card.flipped? 'rotateY(180deg)': 'none' }">
            <img v-bind:src="card.img">
        </div>
        <div class="card back" v-bind:style="{ transform: card.flipped? 'rotateY(180deg)': 'none' }"></div>
    </div>
    `
})