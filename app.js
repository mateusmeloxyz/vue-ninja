new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: '',
        x: 0,
        y: 0
    },
    methods: {
        add: function(val){
            this.age+=val;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        alert: function(){
            alert('You clicked me!');
        },
        logName: function(){
            console.log("You entered your name");
        },
        logAge: function(){
            console.log("You entered your age");
        }   
    }
});