Vue.component('greeting', {
    template: '<p>Hey there, I am a {{name}}. <button v-on:click="changeName">Change name</button></p>',
    data: function(){ // components require a function to data so that the data is diferent in each vue instance
        return {
            name: 'Yoshi'
        }
    },
    methods: {
        changeName: function(){
            this.name = "Mario"
        }
    }
});

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
})