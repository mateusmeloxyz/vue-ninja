new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: 20,
        x: 0,
        y: 0,
        a: 0,
        b: 0
    },
    methods: {/*
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
        },
        add: function(val){
            console.log('executed for ' + val);
            return this.age + val;
        },*/
    },
    // when used computed the function will only run
    // if it's dependencies change
    computed: {
        addToA: function(){
            console.log('executed for A' );
            return this.age + this.a;
        },
        addToB: function(){
            console.log('executed for B' );
            return this.age + this.b;
        }
    }
});