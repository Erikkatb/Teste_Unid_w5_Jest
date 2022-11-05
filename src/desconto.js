function aplicarDescontoTeste(){
    // Dá desconto de 5 reais no produto de preço 20
    return aplicarDesconto(20,5) === 15;
 }console.log('A aplicação de desconto está funcionando? ');console.log(aplicarDescontoTeste());

 function aplicarDesconto(preco,desconto){
    if (desconto>preco)
        return 0;     
 
    return preco-desconto;
 }