export function App(){ 
    document.getElementById("root").innerHTML=
    `<div class="flex-container">
    <article id="form" class="caja c1">
        <h2>CONTACTANOS</h2>
        <p>Deja tus datos para comunicarnos contigo y resolver tus dudas</p>
        <p>Si eres menor de edad, todos los procesos deberán realizarse con tu acudiente</p>
        <form class="formulario" action="/my-handling-form-page" method="post">
            <ul>
                <li>
                    <input type="text" id="name" name="user_name" placeholder="Nombre:" class="input_txt" />
                </li>
                <li>
                    <input type="text" id="lastname" name="user_lastname" placeholder="Apellido:" class="input_txt"/>
                </li>
                <li>
                    <input type="text" id="number" name="user_number" placeholder="Número de celular:" class="input_txt"/>
                </li>
                <li>
                    <input type="email" id="mail" name="user_mail" placeholder="Correo electrónico:" class="input_txt"/>
                </li>
                <li>
                    <select name="sede">
                        <option value="0">Seleccione sede</option>
                        <option value="1">Medellin</option>
                        <option value="2">Bello</option>
                        <option value="3">Rionegro</option>
                    </select>
                </li>
                <li>
                    <select name="programa">
                        <option value="0">Seleccione programa</option>
                        <option value="1">Sotware</option>
                        <option value="2">Enfermeria</option>
                        <option value="3">Gastronomia</option>
                    </select>
                </li>
                <li>
                    <select name="medio">
                        <option value="0">Medio por el cual se enteró</option>
                        <option value="1">Instagram</option>
                        <option value="2">Facebook</option>
                        <option value="3">Comfama</option>
                    </select>
                </li>
                <li>
                    Politica de Tratamiento y protección de Datos Personales
                </li>
                <li>
                    <input type="checkbox" name="terminos" id="checkbox">He leído y aceptado la Política de Tratamiento y protección de Datos Personales
                </li>
                <button id="enviar">Enviar</button>
            </ul>
        </form>
    </article>
    <aside id="sedes" class="caja c2">
        <h1>Nuestras sedes</h1>
        <ul>
            <li><h2>Medellin</h2>Calle 49 41 - 9</li>
            <li><h2>Bello</h2>Diagonal 50a #38-20 (Tierragro), piso 5</li>
            <li><h2>Rionegro</h2>Carrera 51 51 - 42</li>
            <li><h2>La Pintada</h2>Kilometro 2 via puente iglesias</li>
            <li><h2>Apartadó</h2>Calle 104 101 - 15</li>
            <li><h2>Bogota</h2>AK 14 63 - 09</li>
        </ul>
    </aside>
</div>`
}
