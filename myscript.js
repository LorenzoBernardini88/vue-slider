let app = new Vue({

    el: '#myapp',
    data : {
        corrente:0,
        scorri : null,
        oggetti : [
            {
                'img':'img/01.jpg',
                'title':'Svezia',
                'text':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                'img':'img/02.jpg',
                'title':'Svizzera',
                'text':'Lorem ipsum'
            },
            {
                'img':'img/03.jpg',
                'title':'Gran Bretagna',
                'text':'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                'img':'img/04.jpg',
                'title':'Germania',
                'text':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                'img':'img/05.jpg',
                'title':'Paradise',
                'text':'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ]
        
    },
    mounted: function(){
        this.imgIntervall();
    },
    methods :{
        
        imgActive : function(imgIndice){
            if(imgIndice == this.corrente){
                return 'active'
            }
            return ''
        },
        imgPrev : function(){
            this.corrente--;
            if(this.corrente < 0){
                this.corrente = 4;
            }
        },
        imgNext : function(){
            this.corrente++;
            if(this.corrente == this.oggetti.length) {
                this.corrente = 0 ; 
            }
        },
        borderActive : function(imgIndice){
            if(imgIndice == this.corrente){
                return 'border_active'
            }
            return ''
        },
        imgView : function(indiceView){
            this.corrente = indiceView
        },
        imgIntervall : function(){
            this.scorri = setInterval(this.imgNext,3000);
        },
        stopIntervall : function(){
            clearInterval(this.scorri);
            this.scorri= null;
        }

    } 
    
})


/*
// Seleziono contenitore sistra e destra
const rightImagesContainer = document.querySelector('.ms_container2');
const leftImagesContainer = document.querySelector('.ms_anteprima');

// ciclo for contenitore sinistra per inserire immagini e testo [items]
for(let count=0; count<items.length; count++)
{
    leftImagesContainer.innerHTML += `<div class=" ms_left_img " id="sx_img_${count}">
        <div class="img_testo">
            <h1>${title[count]}</h1>
            <p>${text[count]}</p>
        </div>
        <img src="${items[count]}">  
    </div>`
}

// ciclo for contenitore destra per inserire immagini [items]
for( let count = 0; count < items.length; count++ )
{
    rightImagesContainer.innerHTML += `<div class="col p-0 ms_img_cont" id="dx_img_${count}">
            <img src="${items[count]}">          
    </div>`
}

let idIncrem = 0; //creo variabile incremento per img id dinamico
let imgActive = document.getElementById('sx_img_'+idIncrem);
imgActive.classList.add('active');//assegno classe .active a primo contenitore 0 sinistra

let imgBorder = document.getElementById('dx_img_'+idIncrem);
imgBorder.classList.add('border_active');//assegno classe .border_active a primo contenitore 0 destra


// creo variabili per button up e down
const prev = document.getElementById('up');
const next = document.getElementById('down');

// funzione per gestire evento 'click' su button down
next.addEventListener('click',function(){

    idIncrem++;

    if(idIncrem > 4){
        idIncrem = 0;
    }

    imgActive.classList.remove('active');
    imgActive = document.getElementById('sx_img_'+idIncrem);
    imgActive.classList.add('active');
    imgBorder.classList.remove('border_active');
    imgBorder = document.getElementById('dx_img_'+idIncrem);
    imgBorder.classList.add('border_active');
    
})

// funzione per gestire evento 'click' su button up
prev.addEventListener('click',function(){

    idIncrem--;

    if(idIncrem < 0){
        idIncrem = 4;
    }

    imgActive.classList.remove('active');
    imgActive = document.getElementById('sx_img_'+idIncrem);
    imgActive.classList.add('active');
    imgBorder.classList.remove('border_active');
    imgBorder = document.getElementById('dx_img_'+idIncrem);
    imgBorder.classList.add('border_active');
    
}) */
