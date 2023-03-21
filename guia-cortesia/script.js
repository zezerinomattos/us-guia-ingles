
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
		}).fail(function(){
			alert("Erro ao enviar email!");
		});
	});

}) ;