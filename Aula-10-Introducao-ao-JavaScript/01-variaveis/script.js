// JavaScript
// VARIÁVEIS
/* Variáveis podem ser declaradas de 3 formas: 
VAR, LET e CONST.
*/

// VAR - No geral, evite seu uso, pode não ser muito seguro;
// LET - Utilize quando for necessário reatribuir um valor a variável;
// CONST - Utilize quando NÃO precisar reatribuir o valor da variável.


// prettier é a extensão que formata o código, deixando ele mais organizado e legível.
var nome = "Laura";
 nome = "Gabriela"; // Reatribuição de valor, mas o nome da variável é o mesmo, o que pode causar confusão.
var nome = "Rafaela"; // Reatribuição de valor, mas o nome da variável é o mesmo, o que pode causar confusão.

//LET 
let cidade = "São Paulo";
cidade = "Rio de Janeiro"; // Reatribuição de valor, mas o nome da variável é o mesmo, o que pode causar confusão. 
// let cidade = "Belo Horizonte"; // ele não permite redeclarar a variável, ou seja, não é possível criar uma nova variável com o mesmo nome.

//CONST 
const user = "laurajulia408@gmail.com";
// user = "laurajulia408@gmail.com"; // Não é possível reatribuir um valor a uma variável declarada com const, ou seja, não é possível criar uma nova variável com o mesmo nome.
// np entanto, embora o vscode acuse o erro, o código não vai funcionar

//Funções do elemento Window
// Disparando uma janla de alerta no site 
window.alert("Bem vindo ao JavaScript!");
