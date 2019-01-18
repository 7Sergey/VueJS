Vue.filter ('capatilize', function(value){
    if(!value) return ''
    value = value.toString()
    return value.replace(/\b\w/g, function(l){return l.toUpperCase() })
});

new Vue ({
    el:'#app',
    data: {
        show: false,
        message: 'Hello, mister president',
        cars: [
            {model:"Турик вешка 2.5", speed:"300"},
            {model:"nissan", speed:"250"},
            {model:"audi", speed:"230"},
            {model:"bmw",speed:"170"}
        ],    
    },
    computed: {
        showMess(){
            return this.message.toUpperCase();
        } 
    },
    filters:{
        lowercase(value) {
            return value.toLowerCase();
        },
        uppercase(value) {
            return value.toUpperCase();
        }   
    }
});

