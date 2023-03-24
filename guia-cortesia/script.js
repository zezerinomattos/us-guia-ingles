
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
            // $('div#guiaGratuito').css('display', 'flex');

			$('div#texto-instrucoes span#porque-form').css('display', 'none');
			$('div#texto-instrucoes span#pos-solicitacao').css('display', 'flex');
		$('section.oferta').css('display', 'block');

		}).fail(function(){
			alert("Erro ao enviar email!");
		});

		// $('div#texto-instrucoes span#porque-form').css('display', 'none');
		// $('div#texto-instrucoes span#pos-solicitacao').css('display', 'flex');
		// $('section.oferta').css('display', 'block');
		
		startCountdown()
		
	});

}) ;

function startCountdown() {
	var count = 600; // tempo em segundos (10 minutos)
	var interval = setInterval(function() {
	  count--;
	  var hours = Math.floor(count / 3600);
	  var minutes = Math.floor((count % 3600) / 60);
	  var seconds = count % 60;
  
	  var display = $("#countdown");
	  display.text(
		(hours < 10 ? "0" : "") +
		  hours +
		  ":" +
		  (minutes < 10 ? "0" : "") +
		  minutes +
		  ":" +
		  (seconds < 10 ? "0" : "") +
		  seconds
	  );
  
	  if (count === 0) {
		clearInterval(interval);
		alert("O tempo acabou!");
	  }
	}, 1000);
  }