
    
    let imagesRonaldo = [ 'r1.jpg','r2.jpg','r3.jpg','r4.jpg',

    ];

    let imagesMessi = ['m1.jpg','m2.jpg','m3.jpg','m4.jpg',

    ];



    let img = document.querySelector('img');
    let generateRonaldo = document.querySelector('.btn-gen-r');
    let generateMessi = document.querySelector('.btn-gen-m');
    let reset = document.querySelector('.reset');

    generateRonaldo.addEventListener('click', () =>{

       let randomNumber = Math.floor(Math.random() * imagesRonaldo.length);

        img.src = imagesRonaldo[randomNumber];



    });

    generateMessi.addEventListener('click', () =>{

        let randomNumber = Math.floor(Math.random() * imagesMessi.length);
 
         img.src = imagesMessi[randomNumber];
 
 
 
     });


        reset.addEventListener('click', () =>{
    
            if(img.src != " ")
            {
                img.src = " ";
            }
        });
