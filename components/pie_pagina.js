Vue.component(
    'pie_pagina',
    {
        template://html 
        `
        <div>
        <footer :style="{ 'background-color' : configuracionPagina.footerColor }">

        </footer>
        </div>
        `,   
        data:function(){

            return{
                configuracionPagina:
                {
                    footerColor: "slategrey"
                }

            }
        }
    }

);