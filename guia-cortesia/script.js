// function validarForm() {
//     // Obter o valor do input
//     let nome = $('form input#nome').val();
//     let email = $('form input#email').val();
//     let telefone = $('form input#telefone').val();
  
//     // Verificar se o valor do input está vazio
//     if (nome === '' || email === '' || telefone === '') {
//       // Exibir o alerta
//       alert('Por favor, Para ter o nosso Guia Gratuito você precisa informar seus dados corretamente.');
//       return false;
//     }else{

        
//         /*--- Enviando email pelo FORMSPRE -------*/
//         $.ajax({
//             url: "https://formspree.io/f/mnqyznjq", 
//             method: "POST",
//             data: {
//                 nome: $("#nome").val(),
//                 email: $("#email").val(),
//                 telefone: $("#telefone").val(), 
//             },
//             dataType: "json"
//             }).done(function(){
//                 $("#nome").val("");
//                 $("#email").val("");
//                 $("#telefone").val("");
//                 alert("Email enviado com sucesso!");
//             }).fail(function(){
//                 alert("Erro ao enviar email!");
//         });

//         $('div#guiaGratuito').css('display', 'flex');

//         $('form input#nome').val('');
//         $('form input#email').val('');
//         $('form input#telefone').val('');

        
//     }


// }



/*--------------------------*/
/*  ELEMENTOS DO CONTATO    */
/*--------------------------*/
/*--- Enviando email pelo FORMSPRE -------*/
$(function($){

	$("form").submit(function(event) {

		event.preventDefault();

		$.ajax({
	    url: "https://formspree.io/f/mnqyznjq", 
	    method: "POST",
	    data: {
	    	nome: $("#nome").val(),
	    	email: $("#email").val(),
            telefone: $("#telefone").val(), 
	    },
	    dataType: "json"
		}).done(function(){
			$("#nome").val("");
			$("#email").val("");
            $("#telefone").val("");
            $('div#guiaGratuito').css('display', 'flex');
			alert("Email enviado com sucesso!");
		}).fail(function(){
			alert("Erro ao enviar email!");
		});
	});

}) ;