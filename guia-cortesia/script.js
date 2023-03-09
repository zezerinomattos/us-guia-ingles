function validarForm() {
    // Obter o valor do input
    let nome = $('form input#nome').val();
    let email = $('form input#email').val();
    let telefone = $('form input#telefone').val();
  
    // Verificar se o valor do input está vazio
    if (nome === '' || email === '' || telefone === '') {
      // Exibir o alerta
      alert('Por favor, Para ter o nosso Guia Gratuito você precisa informar seus dados corretamente.');
      return false;
    }else{
        $('div#guiaGratuito').css('display', 'flex');

        $('form input#nome').val('');
        $('form input#email').val('');
        $('form input#telefone').val('');
    }


}
