//Implemente a função ao lado que recebe 2 números como parâmetros e retorna um array contendo os números consecutivos ao 1o parâmetro até o valor em que, ao somar todos os números no array, temos o valor passado no 2o parâmetro.

//Exemplo: se for passado os valores “2” e “12”, a função deve retornar o array [3,4,5], pois 3+4+5=12 que é a meta passada no 2o parâmetro

//Exemplo: se for passado os valores “12” e “58”, a função deve retornar o array [13,14,15,16], pois 13+14+15+16=58 que é a meta informada no 2o parâmetro

// receber a variavel inicial
// 

function somarAteMeta (num, meta) {

  let result = []; // variavel para anexar os numero da sequencia e retornar no final
  let soma = 0; //definicao da variavel soma que sera acrescentada a cada loop
  
  for (let i = num + 1; soma < meta; i++) {
    soma += i
    result.push (i);
    
  }
  return result;
  
}