var app = new Vue ({
    el: "#app", 
    data: {
        listaProducto: []
    },
    methods: {
        getProducto(){
            axios
            .get('http://localhost:3000/producto')
            .then(response => {
                console.log(response.data);
                this.listaProducto = response.data;
            })
            .catch(e => console.log("catch",e));    
        }
    },
    mounted() {
        this.getProducto();                
    },
    
    })