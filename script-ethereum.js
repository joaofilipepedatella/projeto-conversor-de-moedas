var nomeUsuario = "Rafaela";
var valorEmEthereum = 3;

var cotacaoEmEthereum = 8109.71;

var valorEmReal = (valorEmEthereum * cotacaoEmEthereum).toFixed(2);
// valorEmReal = valorEmReal.toFixed(2);

alert('Olá ' + nomeUsuario + '! O valor em reais é de R$ '+ valorEmReal);