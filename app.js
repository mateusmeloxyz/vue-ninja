new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'ninja'
    },
    methods: {
        greet: function(time){
            // time = this.name; // accessing Data inside the function
            return 'Good ' + time + ', ' + this.name + '!';
        }
    }
});