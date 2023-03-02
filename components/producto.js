Vue.component(
    'producto',
    {
        template://html
        `
        <div>
            <div class="container">
        
                <div class="row">
                    <h3>{{producto.nombre}}</h3>
                </div>
                    <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 ">
                    <img :src="producto.imagen"
                    alt="" width="100%">
                    </div>
                    <div class="col-12 col-sm-6  col-md-8">
                    <h6 v-html="textoHtml">{{producto.descripcion}}</h6>
                    <div class="p-3 mb-2 text-white" :style="producto.precioEstilos">
                    Precio: {{producto.precio}} BOB
                    </div>
                <h5>Color</h5>
                <div>                    
            <div class="color-box clic" :style="{ background: producto.colores[0] }" @click="miClick('Eligió el color: producto.colores[0]')"></div>
            <div class="color-box clic" :style="{ background: producto.colores[1] }" @click="miClick('Eligió el color: producto.colores[1]')"></div>
            <div class="color-box clic" :style="{ background: producto.colores[2] }" @click="miClick('Eligió el color: producto.colores[2]')"></div>
            <div class="color-box clic" :style="{ background: producto.colores[3] }" @click="miClick('Eligió el color: producto.colores[3]')"></div>


                    </div>
                <h5>Cantidad</h5>
                    <div class="quantity">
                        <button @click="subnum">-</button> <div>{{counter}}</div> <button v-on:click="addnum">+</button>
                    </div>
                    <div class="buy-box">
                    <button type="button" class="btn btn-primary" v-on:click.once="miClick2('pedido')">Comprar</button>
                    </div>
                
                </div>
                </div>
            </div>
        </div>`,
        data:function(){
            
            return{

                producto:
                {
                    id:1,
                    imagen: "https://ae01.alicdn.com/kf/Sc3cc58f2a441419f970cc01f9e5358fbw/Dron-LU3-MAX-GPS-8K-HD-profesional-con-c-mara-Dual-card-n-autoestabilizador-Motor-sin.jpg_Q90.jpg_.webp",
                    nombre: "Dron LU3 MAX GPS 8K HD",
                    descripcion: "Dron LU3 MAX GPS 8K HD profesional con <b>cámara Dual</b>,cardán autoestabilizador, Motor sin escobillas para evitar obstáculos, cuadricópteroplegable",
                    precio: "620",
                    colores: ["red", "blue", "black", "yellow"],
                    precioEstilos: "background: orangered; color: white; font-weight: bold",
                },
                textoHtml: `Dron LU3 MAX GPS 8K HD profesional con <b>cámara Dual</b>,cardán autoestabilizador, Motor sin escobillas para evitar obstáculos, cuadricópteroplegable"`,
                counter:1,
                pedido:{
                    id:null,
                    cantidad: 1,
                    color:null
                }
            }
        },
        methods: {
            miClick: function(mensaje){
                alert(mensaje);  
            },
            miClick2: function(mensaje){
                alert(mensaje,this.pedido);
            },
            addnum: function(){
                this.counter++;
            },
            subnum: function(){
                if(this.counter>1){
                    this.counter--;
            } 
            },  
            getProductos:function(){
                axios.get('db.json').then(response =>{
                    this.productos = response.data
                })
            }
        }
    }

);