

/*
############################################################
############################################################
######################## VARIÁVEIS #########################
############################################################
############################################################
*/

// Bluefish, Terminal, Node...

var JavaPc = [
"abstract","assert","boolean","break"," byte","case","catch","char"," class","const","continue","default"," do","double","else","enum"," extends","final","finally","float"," for","if","  goto","implements","import","instanceof"," int","interface","long","native"," new","package","private","protected"," public"," return","short"," static","strictfp"," super","switch"," synchonized","this"," throw","throws"," transient","try","void"," volatile","while",
];

var JavaRc = [
"abstrair","afirmar/declarar","boleano","quebrar"," byte","caso","pegar","caracteres"," classe","const","continuar","padrão"," fazer","duplo","senão","enum"," estende","final","finalmente","flutuar"," para","se","  vamos para","implemento"," importar","instancia de"," int","interface"," longo","nativo"," novo","pacote"," privado","protegido"," público","retornar"," curto","estático"," strictfp","super"," trocar/mudar"," synchonized"," isto","lançar"," lança","passageiro"," tentar","vazio"," volátil","enquanto",
];

var PhpPc = [
"abstract","and","array()","as"," break","case","catch","class"," clone","const","continue","declare"," default","do","else","elseif","  enddeclare","endfor","endforeach","endif"," endswitch","endwhile","extends","final"," for","foreach","function","global"," goto","if","implements","interface","  instanceof","namespace","new","or"," private","protected","public","static"," switch","throw","try","use","var","while","xor"," date()","readfile()","fopen()","fwrite()"," session_start()","array()","array_slice()","array_rand()"," array_sum()","array_values()","count()","current()"," chdir()","dir()","opendir()","scandir()","abs()","ceil()","floor()","exp()"," log()","pi()","pow()","rand()"," mt_rand()",
];

var PhpRc = [
"palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada","  palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada","  palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","  função","função","função","função"," função","função","função","função"," função","função","função","função"," função","função","função","função","  função","função","função","função"," função","função","função","função"," função","função","função","função"," função",
];

var blue3P = [
"File","Edit","View","Document","Go","Project","Tools","Tags","Dialogs","Help",
"New Window","Open Advanced",
"Snippets Menu",
"Find","Advanced Find & Replace",

"Toggle Bookmark",
"Paragraph","Preformatted Text",
"Spell Check","Language Mode",
"Show this language in the menu",

"Select Block","Word Count","Duplicate Line","Delete Line",
"Headings","Strong","Break","Comment",
"Previous Bookmark","Next Bookmark",
];


var blue3R = [
"File","Edit","View","Document","Go","Project","Tools","Tags","Dialogs","Help",
"","",
"Trechos (menu)",
"","",

"alternar marcador",
"","",
"Verificação Ortográfica","Modo de Linguagem",
"Mostrar esta linguagem no menu",

"","Contagem de palavras","","",
"títulos; Ctrl+Alt+1","","","",
"Marcador anterior","Próximo marcador",
];

var blue3RReEx = [	// UPDATE - CAMPO N EXISTE
"File","Edit","View","Document","Go","Project","Tools","Tags","Dialogs","Help",
"","",
"",
"Ctrl+F","Ctrl+H",

"Ctrl+K",
"Ctrl+Alt+P","Ctrl+Alt+F",
"","",
"",

"Ctrl+Shift+B","","Ctrl+D","Ctrl+Y",
"Ctrl+Alt+1","Ctrl+Alt+G","Ctrl+Alt+K","Comment; Ctrl+Alt+C",
"CtrlShiftJ","CtrlShiftK",
];



var term3P = [
"clear","present working directory, print working directory",
"list",
"Change Directory",
"Desktop","make directory",
"Remove","AND",
];

var term3R = [
"clarear; limpa (a tela).","Diretorio de trabalho atual; diretório atual.",
"listar; lista",
"mudar diretório (atual de trabalho)",
"área de trabalho","criar diretório (pasta)",
"Remover","&&",
];

var term3RReEx = [	// UPDATE - CAMPO N CRIADO
"","",
"Lista conteúdo do diretório atual.",
"",
"","",
"Excluir arquivo.","Executa multiplos comandos",
];

var node3P = [
"Node Package Manager",
"search",
"view",
"update",
"install",
"remove",
"list",
"publish",
"require()",
"Built-in Modules",
];
var node3R = [
"Gerenciador de Pacotes do Node","","","","","","","","","",
];


var node3RrEx = [		// UPDATE - CAMPO N CRIADO
"",
"Procura (o pacote)",
"visão (do pacote)",
"Atualiza a verSão do Módulo(pacote)",
"Instala um Módulo no projeto; Instala as dependências; ",
"Remove (desinstala) um Módulo(pacote) do projeto",
"Lista módulos existentes no projeto; instalados.",
"Publica o seu Módulo",
"Permite utilizar um pacote",
"módulos embutidos, módulos internos, módulos incorporados",
];

var cord3P = [
"build",
"create",
"platform",
"platform add",
"plugin list",
"requirements",
"run",
];

var cord3R = [
"construir; [cordova build]",
"criar; [cordova create]",
"plataforma",
"adicionar plataforma",
"lista de plugins",
"requisitos",
"executar, rodar [cordova run]",
];

	var LogPc = [
"true, false",
" if"," else"," else if",
" while"," for","do-while",

"Subroutine","Procedure","Function",

"Algorithm",
"Boolean algebra",
"Compiler",
"Debugger",
"Debugging",
"Declarative Language",

"DO-WHILE",
"Function",
"Inheritance",
"Line",
"loop",
"Modular Programming",
"OOPS Object-Oriented Programming System",

"Programming",
"Run",
"Source-code",
"Stack",
"String",

"Syntax",
"Syntax error",
];
	var LogRc = [
"verdadeiro / falso",
"se","senão","",
"enquanto","para","",

"Sub-rotina","Procedimento","Função",

"Algoritmo",
"Álgebra booleana",
"Compilador",
"Depurador",
"Depuração",
"Linguagem declarativa",

"",
"",
"Herança",
"Linha",
"",
"",
"Linguagem de programação baseada em objetos",

"Programação",
"Executar",
"Código-fonte",
"",
"",

"Sintaxe",
"Erro de sintaxe",
];

	var LogRcReEx = [		// UPDATE - CAMPO N EXISTE
"",
"Estrutura de Seleção"," ","Estrutura de Seleção",
"Estrutura de Repetição","Estrutura de Repetição","Estrutura de Repetição",

"Procedimento e função são os principais tipos de sub-rotina na programação estruturada.","Sub-rotina que executa uma tarefa.","Sub-rotina que executa uma tarefa, mas diferente do procedimento, ela retorna um resultado ao chamador.",

"Uma receita (tal como de bolo) para fazermos uma tarefa ou resolver um problema. É pegar um problema da vida real e criar uma rotina para solução desse problema.",
"Álgebra de Boole (séc. XIX). Álgebra que manipula valores do tipo verdadeiro/falso (ou 0/1).",
"Programa que traduz as instruções escritas em uma linguagem (ex:Pascal) em um programa executável que o computador consegue entender e processar diretamente.",
"Utilitário (normalmente incluído em compiladores ou interpretadores) visando ajudar programadores a identificar e corrigir erros de sintaxe e outros mais que possam existir no código-fonte.",
"Procedimentos de identificação e correção dos erros de programação.",
"Linguagem não procedural. Linguagem de programação que não obriga o programador a especificar os procedimentos exatos que o computador deve seguir para executar cada tarefa (bastando que indique a tarefa a ser realizada). Ex: SQL.",

"Uma estrutura de controle que repete as instruções existentes em seu interior enquanto uma condição externa for verdadeira.",
"Função linguagem de programação e BD. Rotina especial que produz sempre um resultado lógico ou numérico ou ainda alfanumérico (ao contrário do comando que produz operações).",
"Linguagem de programação baseada em ob. A passagem de uma mensagem para os níveis superiores da hierarquia (até ser alcançado um objeto que capte a msg).",
"Uma instrução de programa.",
"Uma estrutura de controle na qual um bloco de instruções se repete até que uma determinada condição seja atendida.",
"Programação Modular. Estilo de programação que divide as funções de um programa em vários módulos. Cada um deles voltado para uma única função (contendo todo o código e todas as variáveis necessárias à execução dessa função).",
"Linguagem de programação não-procedural na qual os elementos do programa são conceituados como objetos capazes de transmitir msgs entre si.",

"Processo de definição de instruções que direta ou indiretamente indicam ao microprocessador o que deve ser feito. A programação se divide em vários estágios (projeto/ codificação/ teste/ depuração...).",
"Processar as instruções de um algoritmo ou programa. O mesmo que Execute.",
"Linguagem de programação de alto nível. O programa na forma como a pessoa o escreveu e lê (antes de ser compilado ou interpretado e portanto transformado em instruções de máquina) de modo que possa ser executado	pelo computador.",
"Pilha. Estrutura de dados onde os primeiros elementos armazenados serão os últimos a sair.",
"Uma série de caracteres alfanuméricos.",

"Regras que especificam precisamente a forma como um comando ou instrução devem ser submetidos ao computador para que a máquina consiga reconhecer e processá-los corretamente.",
"Erro resultante da especificação de um comando ou suas opções sem obedecer às regras de sintaxe do programa a que pertence.",
];


var BootPc = [
"active","btn/ btn-primary/ btn-success",
"caret","collapse","container",
"dropdown","dropdown-toggle","dropdown-menu","icon-bar",

"navbar","navbar-collapse","navbar-nav","navbar-fixed-top",
"navbar-default","navbar-header","navbar-brand","navbar-toggle",
"row","table","table-striped","table-hover","table-responsive",
];

var BootRc = [
"ativo","botão/ botão-primário / botão-sucesso ",
"","desabar ruir desmoronar","vasilha, recipiente",
"","dropdown-alternância ","","ícone-barra",

"barra de navegação","barra de nav.-desabar"," ","(barra de nav. fixada no topo)",
"barra de nav. - padrão","barra de nav.-cabeçalho","barra de navegação - marcar","barra de nav.-alternância",
"linha","tabela","tabela - listrada"," ","tabela-responsiva",
];

var BootRcReEx = [		// UPDATE - CAMPO N CRIADO
"","(cria) / (azul) / (verde)",
"caret (seta indicando botão dropdown)","","recipiente (com igual margem na esquerda e direita)",
"dropdown (cria um toggleable menu)","usado no botão que esconde/mostra o dropdown menu","dropdown-menu (estilo padrão)","",

"barra de nav. (cria)","Esconde e substitui por icone)","(usado no <ul> que tem a <li> com links)"," ",
" "," "," "," ",
"(recipiente para colunas responsivas)","(estilo básico)"," "," "," ",
];



var mong3P = [
"Connect",
"View",
"Collection",
"Help",
"Databases","Performance",
"Database Name","Storage Size","Collections","Indexes",
"Collections","Filter your data",
"Create Database","Database Name","Collection Name","Use Custom Collection",
"Documents","Aggregations","Explain Plan","Validation","Schema",
"Insert Document","Edit Document","Update","Delete Document",
"Create Collections",
];

var mong3R = [
"conectar",
"visualizar",
"Collection",
"Help",
"Databases","Performance",
"Database Name","Storage Size","Collections","Indexes",
"Collections","Filter your data",
"Create Database","Database Name","Collection Name","Use Custom Collection",
"Documents","Aggregations","Explain Plan","Validation","Schema",
"Insert Document","Edit Document","Update","Delete Document",
"Create Collections",
];


var git3P = [
"branches","branch master",
"staging area","snapshot",

"help","clone",
"init","repository",

"add","commit",
"merge",];

var git3R = [
"ramos, galhos","branch 'padrão'",
"","",

"ajuda","",
"","repositório",

"adicionar","empenhar","fundir",
];


var git3RReEx = [	// UPDATE - CRIAR ELEMENTO
"São as copias dos projetos","",
"área para elencar. Equivale a montar o 'elenco', o que pode ser indefinitivo."," ",

"","",
"Cria novo repositório","Local de armazenamento, uma pasta; nela o projeto e suas alterações são mantidas.",

"adicionar a Staging Area","É a consolidação, confirmação.","Unir dois branches",
];



var data3P = [
"Create (insert), read (Retrieve,select), update, delete (Destroy) - CRUD","atomicity, consistency, isolation, durability  - ACID",
"Data Base Management System or Database Management System  - DBMS","DBMS",
"Data definition language (DDL)","Data manipulation language (DML)",
"Data control language (DCL)","modeling",

"Database design","Database model",
"relational model (RM)","relational database",
"Normalization",
"primary key","foreign key",
];

var data3R = [
"criação, consulta (Retrieve), atualização, destruição.","",
"sistema de gerenciamento de banco de dados (SGBD)"," ",
"LDD - Linguagem de definição de dados","LMD - Linguagem de manipulação de dados",
"LCD - Linguagem de Controle de Dados","Modelagem",

"design do banco de dados","modelo de banco de dados",
"modelo relacional","Banco de dados relacional",
"Normalização",
"Chave primária","Chave estrangeira",
];


var data3RReEx = [	// UPDATE - CAMPO N CRIADO
"criação, consulta (Retrieve), atualização, destruição.","",
"","Exemplos: MySQL, MariaDB, Oracle, SQL-Server, MongoDB, PostgreSQL...",
"","",
"","",

"","",
"modelo relacional","Banco de dados relacional",
"",
"","",
];



/*
############################################################
############################################################
############### FUNÇÔES PRINCIPAIS #########################
############################################################
############################################################
*/

// random, falar...

function ran (n) { return Math.floor(Math.random() * n); } // Cria nº aleatório; ran é random é n é number. Esta função ajuda a outras.

function falar() {			// Faz robô falar de forma padrão (sem mudança de velocidade, timbre, etc.)
var text = document.querySelector('#p6').innerHTML;
var speech = new SpeechSynthesisUtterance();
speech.text = text;
speechSynthesis.speak(speech);
}

function mudaPosicao() {	// Campo texto em inglês de forma aleatória.
var h1 = document.querySelector("#p6");
h1.style.position = "absolute";
var x = ran(25), y = ran(20);
h1.style.left = 0 + x + "%";
h1.style.top = 10 + y + "%";
}

function mudaPosicaoE() {		// Campo emoji de forma aleatória.
	var h1 = document.querySelector("#p5");
	h1.style.position = "absolute";
	var x = ran(38), y = ran(15);
	h1.style.left = 0 + x + "%";
	h1.style.top = 21 + y + "%";
}

function mCor () {				// Sorteia cor de fundo e cor de texto.
	var l = ["a","b","c","d","e","f"];
	var r = ran(6), g = ran(6), b = ran(6);
	document.querySelector("nav").style.color = "#" + l[r] + l[g] + l[b];
	var rr = ran(9), gg = ran(9), bb = ran(9);
	document.querySelector("nav").style.backgroundColor = "#" + rr + gg + bb;
}

function sA() {					// sA é sons aleatórios
  var x = Math.floor((Math.random() * 5) + 1);
    var sound = new Audio();
  switch (x) {
    case 1:
         sound.src = "a.mp3";
         break;
    case 2:
         sound.src = "a.mp3";
         break;
    case 3:
         sound.src = "a.mp3";
         break;
    case 4:
         sound.src = "a.mp3";
         break;
    case 5:
         sound.src = "b.mp3";
         break;
  }
    sound.play();
}


		function sor (a, b, c) { 	// Sorteia, sendo, a pergunta, b resposta, c emoji
var i = ran(a.length); // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= a[i]; // a é o array de pergunta
document.querySelector('#p7').innerHTML = b[i]; // b é o array de resposta
document.querySelector('#p5').innerHTML = c[i]; // c é o array emoji.
	}

/*
############################################################
############################################################
############ FUNÇÂO ESPECÍFICA PRA CADA BOTÂO ##############
############################################################
############################################################
*/

		function java3 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(JavaPc.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= JavaPc[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = JavaRc[i]; // Idem no display resposta.
document.querySelector('#p5').innerHTML = JavaRc[i]; // Idem no display emoji.
	}


	function php3() {
	//	var rndCor = Math.floor(Math.random()*(HarPc.length));
	//document.getElementById('p11').innerHTML = HarPc[rndCor];
	//document.getElementById('p12').innerHTML = HarRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(PhpPc.length));
		 var rndCor2 =  PhpPc[rndCor];
		
	    document.getElementById('p7').innerHTML = PhpRc[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function blue3() {
	//	var rndCor = Math.floor(Math.random()*(HarPc.length));
	//document.getElementById('p11').innerHTML = HarPc[rndCor];
	//document.getElementById('p12').innerHTML = HarRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(blue3P.length));
		 var rndCor2 =  blue3P[rndCor];
		
	    document.getElementById('p7').innerHTML = blue3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function term3() {
	//	var rndCor = Math.floor(Math.random()*(HarPc.length));
	//document.getElementById('p11').innerHTML = HarPc[rndCor];
	//document.getElementById('p12').innerHTML = HarRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(term3P.length));
		 var rndCor2 =  term3P[rndCor];
		
	    document.getElementById('p7').innerHTML = term3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}


	function node3() {
	//	var rndCor = Math.floor(Math.random()*(HarPc.length));
	//document.getElementById('p11').innerHTML = HarPc[rndCor];
	//document.getElementById('p12').innerHTML = HarRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(node3P.length));
		 var rndCor2 =  node3P[rndCor];
		
	    document.getElementById('p7').innerHTML = node3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function cord3() {
		 var rndCor = Math.floor(Math.random()*(cord3P.length));
		 var rndCor2 =  cord3P[rndCor];
		
	    document.getElementById('p7').innerHTML = cord3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function logi3() {
	//	var rndCor = Math.floor(Math.random()*(LogPc.length));
	//document.getElementById('p11').innerHTML = LogPc[rndCor];
	//document.getElementById('p12').innerHTML = LogRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(LogPc.length));
		 var rndCor2 =  LogPc[rndCor];
		
	    document.getElementById('p7').innerHTML = LogRc[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function boot3() {
	//	var rndCor = Math.floor(Math.random()*(HarPc.length));
	//document.getElementById('p11').innerHTML = HarPc[rndCor];
	//document.getElementById('p12').innerHTML = HarRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(BootPc.length));
		 var rndCor2 =  BootPc[rndCor];
		
	    document.getElementById('p7').innerHTML = BootRc[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function mong3() {
	//	var rndCor = Math.floor(Math.random()*(HarPc.length));
	//document.getElementById('p11').innerHTML = HarPc[rndCor];
	//document.getElementById('p12').innerHTML = HarRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(mong3P.length));
		 var rndCor2 =  mong3P[rndCor];
		
	    document.getElementById('p7').innerHTML = mong3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function git3() {
		 var rndCor = Math.floor(Math.random()*(git3P.length));
		 var rndCor2 =  git3P[rndCor];
		
	    document.getElementById('p7').innerHTML = git3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function data3() {
	//	var rndCor = Math.floor(Math.random()*(HarPc.length));
	//document.getElementById('p11').innerHTML = HarPc[rndCor];
	//document.getElementById('p12').innerHTML = HarRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(data3P.length));
		 var rndCor2 =  data3P[rndCor];
		
	    document.getElementById('p7').innerHTML = data3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}




/*
############################################################
############################################################
############### inicialização de eventos ###################
############################################################
############################################################
*/

			// inicialização de eventos; onclick.
	function addEvents () {
		// SCREEN 3		
		document.getElementById("node3").addEventListener("click",node3);
		document.querySelector('#node3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "NODE";});
		document.getElementById("blue3").addEventListener("click",blue3);
		document.querySelector('#blue3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "BLUEFISH";});
		document.getElementById("term3").addEventListener("click",term3);
		document.querySelector('#term3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "TERMINAL";});
		document.getElementById("cord3").addEventListener("click",cord3);
		document.querySelector('#cord3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "CORDOVA";});
		document.getElementById("java3").addEventListener("click",java3);
		document.querySelector('#java3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "JAVA";});
		document.getElementById("php3").addEventListener("click",php3);
		document.querySelector('#php3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "PHP";});

		document.getElementById("logi3").addEventListener("click",logi3);
		document.querySelector('#logi3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "LOGIC";});
		document.getElementById("boot3").addEventListener("click",boot3);
		document.querySelector('#boot3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "BOOTSTRAP";});
		document.getElementById("mong3").addEventListener("click",mong3);
		document.querySelector('#mong3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "MONGO DB";});
		document.getElementById("git3").addEventListener("click",git3);
		document.querySelector('#git3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "GIT";});
		document.getElementById("data3").addEventListener("click",data3);
		document.querySelector('#data3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "DATA BASE";});
	}
window.addEventListener("load",addEvents);



