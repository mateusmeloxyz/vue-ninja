new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'ninja',
        website: 'https://www.thenetninja.co.uk/',
        websiteTag: '<a href="https://www.thenetninja.co.uk/">The Net Ninja Website</a>'
    },
    methods: {
        greet: function(time){
            // time = this.name; // accessing Data inside the function
            return 'Good ' + time + ', ' + this.name + '!';
        }
    }
});