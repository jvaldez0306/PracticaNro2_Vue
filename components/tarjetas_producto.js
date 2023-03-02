Vue.component(
    'tarjetas_producto',
    {
        template://html
        `
        <div>
        <div class="container ">
        
        <div class="row">
            <h4>Productos relacionados</h4>
        </div>
        <div class="row">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{productosRelacionados[0].nombre}}</h5>
                        <img :src="productosRelacionados[0].imagen"
                    alt="" width="100%">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                        <div class="producto-relacionado-precio">Precio: {{productosRelacionados[0].precio}} BOB</div>
                        <div>
                            <div>
                                <div class="color-box" :style="{ background: productosRelacionados[0].colores[0] }"></div>
                                <div class="color-box" :style="{ background: productosRelacionados[0].colores[1] }"></div>                              
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{productosRelacionados[1].nombre}}</h5>
                        <img :src="productosRelacionados[1].imagen"
                        alt="" width="100%">
                        <p class="card-text">{{productosRelacionados[1].descripcion}}</p>
                            <div class="producto-relacionado-precio">Precio: {{productosRelacionados[1].precio}} BOB</div>
                            <div>
                <div>
                <div class="color-box" :style="{ background: productosRelacionados[1].colores[0] }"></div>
                <div class="color-box" :style="{ background: productosRelacionados[1].colores[1] }"></div>
                
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="col">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{productosRelacionados[2].nombre}}</h5>
            <img :src="productosRelacionados[2].imagen"
            alt="" width="100%">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
                <div class="producto-relacionado-precio">Precio: {{productosRelacionados[2].precio}} BOB</div>
                <div>
                    <div>
                        <div class="color-box" :style="{ background: productosRelacionados[2].colores[0] }"></div>
                        <div class="color-box" :style="{ background: productosRelacionados[2].colores[1] }"></div>
                        <div class="color-box" :style="{ background: productosRelacionados[2].colores[2] }"></div>
                        <div class="color-box" :style="{ background: productosRelacionados[2].colores[3] }"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>`,
    
    data:function(){
            return{
                productosRelacionados: [
                    {
                        id:2,
                        imagen:"https://ae01.alicdn.com/kf/Hd59f72dd965d467dbbd499275a70b1d4z/Dron-plegable-KF102-con-Gps-8K-c-mara-Dual-HD-2-ejes-card-n-Motor-sin.jpg_Q90.jpg_.webp",
                        nombre: "KF102",
                        descripcion: "Dron plegable KF102 con Gps, 8K, cámara Dual HD, 2 ejes,cardán, Motor sin escobillas, fotografía aérea, 1200M de distancia, novedad de 2022",
                        precio:"1180",
                        colores: ["orange", "blue"]
                    },
                    {
                        id:3,
                        imagen:"https://ae01.alicdn.com/kf/S947d9284b5ea4531a1bec599a09a1f49K/KBDFA-Dron-E888-RC-cuadric-ptero-profesional-FPV-4K-HD-fotograf-a-a-rea-evitaci-n.jpg_Q90.jpg_.webp",
                        nombre: "KBDFA-Dron E888 RC",
                        descripcion: "KBDFA-Dron E888 RC, cuadricóptero profesional FPV, 4K HD,fotografía aérea, evitación de obstáculos, helicóptero, juguetes de distancia",
                        precio:"154",
                        colores: ["black", "midnightblue"]
                    },
                    {
                        id:4,
                        imagen:"https://ae01.alicdn.com/kf/S552326188797415ab6c729f850ab2639R/Dron-Profesional-4K-con-GPS-8K-c-mara-HD-3-ejes-card-n-antivibraci-n-evitaci.jpg_Q90.jpg_.webp",
                        nombre: "Dron Profesional 4K con GPS",
                        descripcion: "Dron Profesional 4K con GPS, 8K, cámara HD, 3 ejes, cardánantivibración, evitación de obstáculos, fotografía aérea, Quadcopter, nuevo",
                        precio:"1800",
                        colores: ["teal", "blue", "slategrey", "navy"]
                    }
                ],

            }
        },
        methods:{
            getProductos:function(){
                axios.get('basedatos/db.json').then(response =>{
                    this.productos = response.data
                })
            }
        }
    }

);