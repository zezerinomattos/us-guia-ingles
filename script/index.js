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

$('header nav#nav-esquerda ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.solucao').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

$('header nav#nav-esquerda ul.menu-principal li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section.para-quem').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

$('header nav#nav-esquerda ul.menu-principal li:eq(4)').click(function(){
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

