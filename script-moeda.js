var valorEmDolar = 64
var cotacaoEmReal = 4.91

var valorEmReal = valorEmDolar * cotacaoEmReal
valorEmReal = valorEmReal.toFixed([2])
alert('R$' + valorEmReal)