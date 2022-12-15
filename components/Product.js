app.component('product', {
    template:
    /*html*/
    `
    <div class="product">
        <img src="https://i.pinimg.com/originals/f6/22/88/f622880615a333910cddad5311087936.jpg" alt="imagen" width="250">
        <div class="historical-bid">
            <h3>Historico de pujas</h3>
            <ul>
                <li v-for="i in [1, 2, 3, 4, 5]">{{i}}</li>
            </ul>
        </div>
        <p>
            Lorem ipsum, dolor sit amet 
            consectetur adipisicing elit. Ab 
            nobis quae minima perspiciatis, 
            voluptatum natus accusamus enim, 
            consequuntur ad doloremque sunt 
            quasi voluptates reiciendis distinctio 
            libero, saepe nihil recusandae error? 
        </p>
        <button>PUJAR</button>
    </div>
    `
})