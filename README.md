# Teste_Unid_w5_Jest

Durante o curso de Testes de Software fizemos este exercício

Inicialmente foi-nos indicado um código onde, após executado, apresentaria erro pq a função aplicarDesconto() não existe.

function aplicarDescontoTeste(){
   // Dá desconto de 5 reais no produto de preço 20
   return aplicarDesconto(20,5) === 15;
}console.log('A aplicação de desconto está funcionando? ');console.log(aplicarDescontoTeste());

Aplicando a função abaixo, obtive o resultado esperado

function aplicarDesconto(preco,desconto){
   return preco-desconto;
}

Seguindo as etapas do TDD, refatoramos o código e foi apresentado condições 
que garantam que o código funcione da maneira mais adequada. 
Um exemplo de melhoria que pode ser implementado é garantir que o preço do desconto oferecido 
seja menor que o valor do produto. Caso contrário, teremos um desconto maior que o permitido, gerando um valor negativo como resultado.

Refatorando o código definido inicialmente, chegamos ao seguinte resultado:

function aplicarDesconto(preco,desconto){
   if (desconto>preco)
       return 0;     

   return preco-desconto;
}


*material extraído do conteúdo do curso de Análise de Testes de Software Última School
