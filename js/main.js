Vue.component ('app-car', {
    data: function(){
        return {
            cars: [
                {model:"toyota"},
                {model:"bmw"},
                {model:"opel"},
                {model:"mazda"},
                {model:"nissan"},
                {model:"dodge"}
            ]
        }
    },
    template:'<div><div  class="car" v-for="car in cars"><p>{{car.model}}</p></div></div>'
});

new Vue({
    el:'#app'
});

new Vue({
    el:'#app2'
});

