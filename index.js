let level1 =['Casa','Jet','Tenis','Space','Tesla','Llave','Run'];
let level2 =['Ventilador','Espacio','Orwell','Maleta','Recibo','Everlong'];
let level3 =['Alexander Dumas','Yuri Gagarin','Montaña Helada','Quentin tarantino','Foo Fighters','These days'];
let quemados=[];
let aciertos = 0;
let desaciertos = 0;
let level = 1;

const Iniciar = () =>{
    let indice;
    let tam_arreglo = level1.length;
    indice = Aleatorio(0,tam_arreglo);
    document.getElementById('Palabra').removeAttribute('hidden');
    document.getElementById('btnPalabra').removeAttribute('hidden');
    document.getElementById('lblPalabra').innerHTML=level1[indice];
    document.getElementById('btnIniciar').setAttribute('hidden','');
    setTimeout(ocultarPalabra,1000);
};

const comprobarRespuesta = ()=>{
    let respuesta = document.getElementById("Palabra").value;
    let palabra = document.getElementById('lblPalabra').textContent;
    if (respuesta==palabra){
        return true;
    }else{
        return false;
    }
};


const verificarRespuesta = ()=>{
    let campoRespuesta = document.getElementById("Palabra").value;
    if (campoRespuesta != ''){
        if (comprobarRespuesta()){
            alert('Respuesta Correcta-Prepárate para la siguiente');
            aciertos+=1;
            if (aciertos<3){
                nuevaPalabra(level);
            }else{
                level+=1;
                aciertos=0;
                nuevaPalabra(level);
            }
        }else{
            alert('Respuesta Inorrecta-Prepárate para la siguiente');
            aciertos=0;
            desaciertos+=1;
            if(level>1){
                level-=1;
            }
            nuevaPalabra(level);
        }
        document.getElementById('Palabra').value='';
    }else{
        alert('Por favor ingresa una respuesta');
    }
};

const nuevaPalabra=(level)=>{
    let indice;
    let arreglo;
    let wordTime;
    if(level==1){
        arreglo = level1;
        wordTime = 1500;
    }else if(level==2){
        arreglo = level2;
        wordTime = 1000;
    }else{
        arreglo = level3;
        wordTime = 900;
    }
    let tam_arreglo = arreglo.length;
    indice = Aleatorio(0,tam_arreglo);
    document.getElementById('Palabra').removeAttribute('hidden');
    document.getElementById('lblPalabra').removeAttribute('hidden');
    document.getElementById('btnPalabra').removeAttribute('hidden');
    document.getElementById('lblPalabra').innerHTML=arreglo[indice];
    setTimeout(ocultarPalabra,wordTime);    
};

const Aleatorio = (min,max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const ocultarPalabra = () =>{
    document.getElementById('lblPalabra').setAttribute('hidden','');
};