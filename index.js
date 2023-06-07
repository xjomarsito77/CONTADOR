let contador = 0;
let arr = ["mama","papá", "hijo", "hermana","tios",1,2,3,4,5]
let x = (-1);

const valor = document.querySelector('#Valor');
const botones = document.querySelectorAll('.Boton');
const inputE = document.getElementById('input')
const addboton = document.getElementById('botonsend')

botones.forEach(Boton => {
    Boton.addEventListener('click', function (e) {
        const estilos = e.currentTarget.classList;
        if (estilos.contains('Disminuir')) {
            x = x - 1
            contador = arr[x]
        } else if (estilos.contains('Recorrer')) {
            x = x + 1
            contador = arr[x]
        } 
        valor.textContent = contador
    }
    )
}
)

addboton.addEventListener('click',function(){
    const inputvalue = inputE.value;
    arr.push(inputvalue)
    inputE.value='';
})


if (contador > 0) {
    valor.style.color = '#fff'
} else if (contador == 0) {
    valor.style.color = '#fc0000'
} else {
    valor.style.color = '#ba215e'
}