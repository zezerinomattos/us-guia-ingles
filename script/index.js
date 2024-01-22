// Ativando o menu mobile

function mostrarMenu(){
    $('nav#nav-esquerda ul.menu-principal').css('display', 'flex');
    $('nav#nav-esquerda ul.menu-principal').addClass('animate__animated animate__fadeInRight animate__slow');

    $('nav#nav-esquerda ul#icone-menu li#menu').css('display', 'none');
    $('nav#nav-esquerda ul#icone-menu li#menuX').css('display', 'flex');
}

function esconderMunu(){
    $('nav#nav-esquerda ul.menu-principal').css('display', 'none');
    
    $('nav#nav-esquerda ul#icone-menu li#menu').css('display', 'flex');
    $('nav#nav-esquerda ul#icone-menu li#menuX').css('display', 'none');
}

let controle = true;

$('nav#nav-esquerda ul#icone-menu').click(function(){
    if(controle == true){
        mostrarMenu();
        controle = false;
    }else{
        esconderMunu();
        controle = true;       
    }
})

// açoes de navegacao hader-nav-menu
$('header nav#nav-esquerda ul.menu-principal li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section.apresentacao').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

// $('header nav#nav-esquerda ul.menu-principal li:eq(2)').click(function(){
//     $('html, body').animate({scrollTop:$('section.solucao').offset().top}, 1000, function(){
//        if($(window).width() < 812){
//         esconderMenu();
//         controle = true;
//        }
//     })
// })

$('header nav#nav-esquerda ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.para-quem').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

$('header nav#nav-esquerda ul.menu-principal li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section.produto').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})


// açoes de navegacao footer

$('footer div.footer-mestre div.footer-inf nav.nav-footer ul.menu-principal li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})

$('footer div.footer-mestre div.footer-inf nav.nav-footer ul.menu-principal li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section.apresentacao').offset().top}, 1000)
})

$('footer div.footer-mestre div.footer-inf nav.nav-footer ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.solucao').offset().top}, 1000)
})

$('footer div.footer-mestre div.footer-inf nav.nav-footer ul.menu-principal li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section.para-quem').offset().top}, 1000)
})

$('footer div.footer-mestre div.footer-inf nav.nav-footer ul.menu-principal li:eq(4)').click(function(){
    $('html, body').animate({scrollTop:$('section.produto').offset().top}, 1000)
})

$('footer div.footer-mestre div.logo').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})



 // Defina a contagem regressiva em segundos
 var segundosRestantes = 600; // 10 minutos = 600 segundos

 function atualizarContador() {
     var minutos = Math.floor(segundosRestantes / 60);
     var segundos = segundosRestantes % 60;

     // Adicione zeros à esquerda se os minutos ou segundos forem menores que 10
     minutos = minutos < 10 ? "0" + minutos : minutos;
     segundos = segundos < 10 ? "0" + segundos : segundos;

     // Atualize o conteúdo da div
     document.getElementById("contador").innerHTML = minutos + ":" + segundos;

     // Reduza os segundos restantes
     segundosRestantes--;

     // Verifique se o tempo chegou a zero
     if (segundosRestantes < 0) {
         clearInterval(contadorInterval);
         document.getElementById("contador").innerHTML = "Tempo encerrado!";
     }
 }

 // Chame a função inicialmente para evitar um atraso de um segundo
 atualizarContador();

 // Configurar um intervalo para chamar a função a cada segundo
 var contadorInterval = setInterval(atualizarContador, 1000);
