
//                                    c.js     SCREEN A (amarelo)     AAAA


/*
############################################################
############################################################
######################## VARIÁVEIS #########################
############################################################
############################################################
*/

		var verrP = [		// verbos joão neném
	"record","delete","process","store","set","tell","paint","touch", 
	"sequence","file","open","measure","quit","reset","clear","display", 
	"cut","copy","paste","save",
	"load","write","start | begin","stop","close","walk","run",
	"see","know","add","seek","comment","exit",
	"switch off | turn off","switch on | turn on","switch","brush","have | has","drop","draw | design ","jump",
	"smile","speak","catch","drink","break",	
	"float","fall","get up","click",	
	"increase | decrease","look","hear","sort","view",	
	"choose","build","wait","study","read","spin",
	];
		var verrR = [
	"gravar | registrar","excluir | apagar","processar","armazenar","configurar","contar","pintar","tocar", 
	"sequenciar","arquivar","abrir","medir","desistir","reiniciar","limpar","exibir", 
	"cortar", "copiar", "colar", "salvar", 
	"carregar","escrever","iniciar-começar","parar","fechar","andar","correr",
	"ver","saber","adicionar","procurar","apagar","selecionar",
	"conectar","compartilhar","gostar | apreciar","comentar","sair",
	"desligar","ligar","mudar","escovar | varrer | pintar","ter | tem","soltar","desenhar","pular",
	"sorrir","falar","pegar","beber","quebrar",	
	"flutuar","cair","sair(da cama)/levantar/levante-se","clicar",	
	"aumentar | diminuir","olhar","ouvir","ordenar","ver | watch",	
	"escolher","construir","esperar","estudar","ler","girar",
	];

/* VERIFICAR SE ESTES CONSTAM AQUI -  verbos joão neném
 ideal é que esses verbos (joão neném) estejam, ao menos os mais óbvios, na seção de emoji
	"record","delete","process","set", 
	"sequence","file","open","measure","quit","reset","clear","display", 
	"copy","paste","save",
	"load","start | begin","stop","close",
	"know","comment","exit",
	"switch off | turn off","switch on | turn on","switch","brush","have | has","drop","jump",
	"catch","drink",	
	"fall","get up",	
	"increase | decrease","sort",	
	"choose","wait","spin",

	"gravar | registrar","excluir | apagar","processar","configurar", 
	"sequenciar","arquivar","abrir","medir","desistir","reiniciar","limpar","exibir", 
	"copiar", "colar", "salvar", 
	"carregar","iniciar-começar","parar","fechar",
	"saber","apagar","selecionar",
	"conectar","compartilhar","gostar | apreciar","comentar","sair",
	"desligar","ligar","mudar","escovar | varrer | pintar","ter | tem","soltar","pular",
	"pegar","beber",
	"cair","sair(da cama)/levantar/levante-se",
	"aumentar | diminuir","ordenar",	
	"escolher","esperar","girar",

*/
	

//	var verP
// vide expert.js, appjoC









	var compP = [
"window","virus","switch","hardware","upgrade","tablets","notebook",
];	
	var compR = [
"janela","vírus","interruptor","parte física","atualização","telefone inteligente","tabletes","caderno, bloco de notas, agenda",
];

	var comp2P = [	// R é de resposta: Ex: com comR
"kernel","core","worm","spy","backdoor","sniffer",
"zombie","scan","defacement","workstation","hoax","host",
"firewall","bus","ring","router","switch",
"open source","free software","freeware",
"bug","hardware","log","phishing",
];
	
	var comp2R = [
"núcleo","núcleo","rastejar-verme-minhoca-lombriga","espião","porta dos fundos-porta de serviço","farejador",
"zumbi","examinar","desfiguração-deformação","estação de trabalho","trote","hospedeiro-máquina-computador",
"parede de fogo","barramento","anel","roteador","interruptor",
"código aberto","soft livre","software gratuito",
"defeito-erro","parte física do computador-equipamento","registro","defraudar",
];



//	var comp3P
// vide ti.js, appjoC





	var nouuP = [
 "button","switch","toggle","data","set","storage","processing","wallpaper","start","wire","store",
];	

	var nouuR = [
"botão","interruptor","alternância","dado","conjunto","armazenamento","processamento","papel de parede","início-partida-começo","fio","loja",
];

//	var nouP
// vide expert.js, appjoC








//arte ok + instr.musicais ok
// var arttP: vide art.js, appjoC







//no



//html (tags somente, creio que exceto DOCTYPE)


//	var html2P
// vide expert.js, appjoC

//	var html3P
// vide ti.js, appjoC






//	var css3P
// vide ti.js, appjoC


	var adjjP = [
"dead","previous","clever","hard-soft","young","sweet-salt",
"great-little","large-small","loud-soft","strong-weak","far-near",
"high-mid-low","long.-short.","alive","rich-poor","early-late",
"useful-useless","full","tiny","serious",
"fixed","wide","enough","inner/outer","amazing",
];
	
	var adjjR = [
"morto","anterior","esperto/inteligente","duro-macio","jovem","doce-salgado",
"grande-pequeno","grande-pequeno","alto-suave","forte-fraco","longe-perto",
"alto-médio-baixo","longo-curto","vivo","rico-pobre","cedo-atrasado",
"útil-inútil","cheio","minúsculo/ muito pequeno","grave/ sério",
"fixo","largo","suficiente","interior/exterior","surpreendente",
];


//	var adjP
//	var css2P
// vide expert.js, appjoC


/*
AdjP (existe acima esta var mas é diferente desta aki)
"previous","beautiful-ugly","clever","new-old"," pretty-ugly","young-old","sweet-salt","great-little"," large-small","loud-soft","quiet-noisy","quick-slow"," strong-weak","far-near","good or bad","high-mid-low","  long-short","heavy-light","happy-sad","alive-dead"," hot-cold","rich-poor","early-late","useful-useless"," true-false","full","tiny","serious"," funny","dry-wet","striped","thin","  slim","fixed","wide","enough","inner, outer"," proud or humble","certain or uncertain","true or false","present or absent"," visible or invisible","new or old","hard or soft","pretty or ugly"," sweet or salt","great or little","cold or hot","tall or short"," high or low","ugly or beautiful","old or young",

AdjR
"anterior","bonito-feio","esperto/inteligente","novo velho"," bonito-feio","jovem-velho","doce-salgado","grande-pequeno"," grande-pequeno","alto-suave","silencioso-ruidoso","rápido-lento"," forte-fraco","longe-perto","bom ou mau","alto-médio-baixo","  longo-curto","pesado-leve","feliz-triste","vivo-morto"," quente-frio","rico-pobre","cedo-atrasado","útil-inútil"," verdadeiro-falso","cheio","minúsculo/muito pequeno","grave/sério"," engraçado","seco-molhado","listrado","fino","  fino","fixo","largo","suficiente","interior/exterior"," orgulhoso ou humilde/modesto","certo ou incerto","verdadeiro ou falso","presente ou ausente"," visível ou invisível","novo ou velho","duro ou suave/macio","bonito ou feio"," doce ou salgado","grande ou pequeno/miudo","frio ou quente","alto (pessoas) ou baixo"," alto ou baixo","feio ou bonito","velho ou jovem",
*/




//      appinventor
	var phrrP = [
"no entry","no problem",
"short answers","negative sentences","important words",
"great number"," review test","text comprehension","old man",
"young sailor"," long neck","red color","short legs",
"red flowers"," long ears","short ears","fill in the blanks",
"follow the model","complete the sentences","say in english","answer these questions",
"write these sentences","match the words",
"I want a coffee.",
"entrance","toilets","vacant","occupied - engaged","emergency exit","I understand","I don't understand","I don't know",
"Move your body.",
];
	var phrrR = [
"sem entrada/entrada proibida","sem problema",
"respostas curtas","sentenças negativas","palavras importantes",
"grande número","teste de revisão","compreensão de texto","homem velho/idoso",
"jovem marinheiro","pescoço longo","cor vermelha","pernas curtas",
"flores vermelhas","orelhas longas","orelhas curtas","preencha os espaços em branco",
"siga o modelo","complete as frases","diga em inglês","responda estas perguntas/questões",
"escreva estas frases","combine as palavras",
"Eu quero um café.",
"entrada","banheiros","vago","ocupado - ocupado","saída de emergência","Eu entendo","Não entendo","Eu não sei/Não sei",
"Mova seu corpo/Mexa seu corpo",
];

/*
//      appinventor
	var phrrP = [
"Hi","I don't speak English",
"no entry","no problem",
"I’m going to bed","short answers","negative sentences","important words",
"great number"," review test","text comprehension","old man",
"young sailor"," long neck","red color","short legs",
"red flowers"," long ears","short ears","fill in the blanks",
"follow the model","complete the sentences","say in english","answer these questions",
"write these sentences","match the words",
"call me","I want a coffee.",
"entrance","toilets","vacant","occupied - engaged","emergency exit","I understand","I don't understand","I don't know","excuse me",
"Move your body.","I believe.","big fun",
];
	var phrrR = [
"Oi","Eu não falo Inglês",
"sem entrada/entrada proibida","sem problema",
"Vou dormir","  respostas curtas","sentenças negativas","palavras importantes",
"grande número","teste de revisão","compreensão de texto","homem velho/idoso",
"jovem marinheiro","pescoço longo","cor vermelha","pernas curtas",
"flores vermelhas","orelhas longas","orelhas curtas","preencha os espaços em branco",
"siga o modelo","complete as frases","diga em inglês","responda estas perguntas/questões",
"escreva estas frases","combine as palavras",
"ligue-me/me liga","Eu quero um café.",
"entrada","banheiros","vago","ocupado - ocupado","saída de emergência","Eu entendo","Não entendo","Eu não sei/Não sei","desculpe-me",
"Mova seu corpo/Mexa seu corpo","Eu acredito","Grande diversão",
];
*/

/*
//      appinventor
	var phra2P = [

"What time is it?","I’m going to bed","You doing OK?",
"How are you getting on?","What’s up?","Can you switch the light on?",
"How are you? - How are you doing?","Where are we going?","Take it easy!","keep calm",
"Do you want a glass of water?","Do you want...?","I feel good.",
"gonna make you sweat","Can You Feel It",
"Please Don't Go","Together Forever","Sending All My Love","Do you want me",
"I'm Alone","Tell It To My Heart","Gonna Catch You",
"I Can't Stand It","A Little Respect","do you speak English?","It’s out of order",
"Are you sure?","maybe - perhaps","not at all","please write it down",
"Could you please repeat that?","I don't speak much English","I only speak very little English",
"please speak more slowly","I speak a little English","don't mention it",
"Where's the Gents?",
"excuse me","where's the toilet?",
"see you later!","see you soon!","see you!",
"it's OK - that's OK","don't worry about it","What time is it?","I’m hungry.",
"Do you want some water?","Can you switch the light on?","I have to wake up at 7.",

];
	var phra2R = [

"Que horas são?"," Vou dormir","Você está bem?",
"Como você está indo ?"," Estás bem?","Você pode ligar a luz?",
"Como você está? - Como você está?","Onde estamos indo ?","Se acalme!","mantenha a calma",
"Quer um copo de água?","Você quer...?","Eu me sinto bem.",
"vou fazer você suar","você pode sentir isso",
"Por favor não vá","Juntos para sempre","Enviando todo o meu amor"," Você me quer",
"Eu estou sozinho/Estou sozinho","Diga isso ao meu coração"," Vou pegar você",
"não posso aguentar","Um pouco de respeito"," você fala inglês ?","está fora de ordem",
"Você tem certeza ?"," talvez - talvez"," na verdade"," por favor escreva",
"Você poderia por favor repetir isso?","não falo muito Inglês","Eu só falo muito pouco Inglês",
"Por favor fale mais devagar","Eu falo um pouco de inglês","não o mencione",
"Onde estão os cavalheiros ?",
"desculpe","Onde está o banheiro ?",
"até mais tarde!","em breve!","vejo você",
"está tudo bem - está tudo bem","não se preocupe","Que horas são?","Estou com fome.",
"Deseja um pouco de água?","Você pode ligar a luz?","Tenho que acordar às 7",
];
*/


// a_iKidsTech_h e um outro



	var TranP = [        // (já existe esta var"," porém é referente a trem)
"glider","jet plane"," rollerblades","mountain bike",
];


	var TranR = [
"planador"," avião a jato"," patins","bicicleta de montanha",
];



	var HomP = [
"window","door","gate","wall"," ceiling","living room","WC (water closet)"," room","floor"," ladder","pool"," garden","hall","people","garage","rubber","colour",
];

	var HomR = [
"janela"," porta"," portão"," parede"," teto"," sala de estar"," WC (banheiro)"," quarto"," andar"," escada"," piscina"," jardim"," corredor"," pessoas"," garagem"," borracha"," cor",
];



	var ToyP = [
"to skip rope","hall of mirrors",
"float","bucket","ball pool","trampoline","zipline","see-saw","slide","puzzle","swing",
"chess","king","tower","queen",
];

	var ToyR = [
"pular corda","casa de espelhos",
"bóia de piscina","balde","piscina de bolinha","cama elástica","tiroleza","gangorra","escorregador","quebra-cabeca","balanço",
" xadrez","rei","torre","rainha",
];

	var MatP = [

"line","curve","rectangle","triangle","pentagon","rounded rectangle","size","equal","less-than","plus-minus","less-than-or-equal-to","greater-than","percent","exponentiation","geometry","length","area","circle","triangle"," square","rectangle","trapezium","cube","volume","shape","integer","radius",
];

	var MatR = [
"linha"," curva"," retângulo"," triângulo"," pentágono"," retângulo arredondado"," tamanho"," igual"," menor que"," mais-menos"," menos que ou igual a"," maior do que"," por cento"," exponenciação"," geometria"," comprimento"," área"," círculo"," triângulo"," quadrado"," retângulo"," trapézio"," cubo"," volume"," forma"," inteiro"," raio",
];


	var NatP = [
"iron","silver","emerald","diamond","gold","lightning","river","tree","rock","stone","earth","water","fire","air","wind","vortex","rain","star","thunder","wood","comet","bird","virus","sea"," island","cloud","heaven","mountain","snow","jungle","bush","cell"," sea","sea","thunder","earth","ant","penguin","fish"," seahorse","starfish","whale","dolphin","octopus","shark","seal","cricket"," bat","manta ray","jaguar","panther","parrot"," ox","chicken","cock","duck","eagle","hawk","owl","dragon","bee","beetle","butterfly","mosquito","fly","pigeon","vulture","tiger","frog","snake"," goose","tooth","deer","louse","worm","human","branch","virus","worm",
];


	var NatR = [
"ferro"," prata"," esmeralda"," diamante"," ouro"," relampago"," rio"," árvore"," pedra"," pedra"," terra"," água"," fogo"," ar"," vento"," vórtice","chuva"," estrela"," trovão"," madeira"," cometa"," pássaro"," vírus"," mar"," ilha"," nuvem"," céu"," montanha"," neve"," selva"," arbusto"," célula"," mar"," mar"," trovão"," terra"," formiga"," pinguim"," peixe"," cavalo-marinho"," estrela do mar"," baleia"," golfinho"," polvo"," tubarão"," foca"," grilo"," morcego"," arraia"," jaguar"," pantera"," papagaio"," boi"," frango"," galo"," pato"," águia"," falcão"," coruja"," dragão"," abelha"," besouro"," borboleta"," mosquito"," mosca","pombo"," abutre"," tigre"," sapo"," cobra"," ganso","dente","cervo","piolho","verme/minhoca","humano","ramo, galho","virus","verme",
];


	var MusP = [
"If You’re Happy And You Know It!"," Itsy Bitsy Spider"," Happy Birthday To You"," Twinkle Twinkle Little Star",
" Girls Just Want To Have Fun"," Love Yourself"," I Will Always Love You"," My Heart Will Go On"," You Are Not Alone"," She's Out of My Life"," Rock With You"," Human Nature"," Don’t Stop 'Til You Get Enough"," We are the World"," Like A Prayer"," Express Yourself"," Hung Up"," Deeper And Deeper"," I´ll Remember"," Crazy For You"," Give It 2 Me"," Miles Away"," November Rain"," Hot N Cold"," Losing My Religion"," Everybody Hurts"," Shiny Happy People"," Say It Right"," It Must Have Been Love"," Another Day In Paradise"," This Is How We Do It"," Because You Loved Me"," Falling In Love With You"," Just Another Day"," I Feel Good"," Back To Life"," Wind Of Change"," Nothing Else Matters"," Start Me Up"," Dust in the Wind"," Rock Around The Clock"," So Far Away"," Money For Nothing"," Walk Of Life"," Why Worry"," Brothers In Arms"," What's Up"," With Or Without You"," Enjoy The Silence"," Don't You (Forget About Me)"," Smells Like Teen Spirit"," Who Can It Be Now?"," More Than Words"," All I Ask of You"," I Feel Love"," Everybody Dance"," Good Times"," Stayin' Alive"," Saturday Night Fever - More Than A Woman"," I Started A Joke"," The Hardest Part"," A Sky Full Of Stars"," Speed Of Sound"," Always On My Mind"," Being Boring"," Forever Young"," Never Gonna Give You Up"," Big in Japan"," Everybody Wants To Rule The World"," I Want To Know What Love Is"," Un-Break My Heart"," I Like Chopin"," 12 O´Clock"," The Music of the Cosmos"," Chariots of Fire"," Conquest of Paradise"," Keep On Movin'",
"guitar","piano","acoustic bass","synthesizer","drum machine","organ","whistle",
"percussion","battery","drum","sound effect","strings","rain sound","flute","electric piano", 
];

	var MusR = [
"Se você é feliz e você sabe disso!"," A dona Aranha"," Parabéns pra você"," Brilha Brilha Estrelinha",
" As meninas apenas querem se divertir"," ame a si mesmo"," Eu vou sempre amar voce"," Meu coração vai continuar"," Você não está sozinho"," Ela está fora da minha vida"," Dançar com você"," Natureza humana"," Não pare até que você obtenha o suficiente"," Nós somos o mundo"," Como uma oração"," Expresse-se"," Desligar"," Mais profundo e profundo"," Lembrarei"," Louco por você"," Me dê isto"," A milhas de distância"," Chuvas de novembro"," Quente e frio"," Perdendo minha fé"," Todo mundo sofre"," Pessoas brilhantes e felizes"," Diga isso certo"," Deve ter sido amor"," Outro dia no paraíso"," É assim que nós fazemos"," Porque você me amava"," Me apaixonando por você"," Apenas outro dia"," Eu me sinto bem"," De volta à vida"," Ventos de mudança"," Nada mais importa"," Comece comigo"," Poeira no vento"," Rock Around The Clock"," Tão longe"," Dinheiro para nada"," Caminhada da vida"," Por que se preocupar"," Irmãos de armas"," Estás bem"," Com ou sem você"," Aproveite o silêncio"," Você não (esquecer-se de mim)"," Cheira a espírito adolescente"," Quem poderia ser agora?"," Mais do que palavras"," Tudo o que eu pergunto para você"," Eu sinto amor"," Todos dançam"," Bons tempos"," Mantendo-se vivo"," Febre de Sábado a Noite - Mais do que uma mulher"," Eu comecei uma piada"," A parte mais difícil"," Um céu cheio de estrelas"," Velocidade do som"," Sempre na minha mente"," Sendo chato"," Para sempre jovem"," Nunca vou desistir de você"," Grande no Japão"," Todo mundo quer governar o mundo"," Eu quero saber o que é o amor"," Não quebre meu coração"," Eu gosto de Chopin"," 12 horas"," A Música do Cosmos"," Carruagens de fogo"," Conquista do Paraíso"," Continue se movendo",
"violão","piano","baixo acústico","sintetizador","bateria eletrônica","órgão","apito",
"percussão","bateria","tambor","efeito sonoro","cordas","som de chuva","flauta","piano elétrico",
];



//                                    c.js    SCREEN B (preto)





//html (tags somente, creio que exceto DOCTYPE)
















//	var traf2P
//	var traP
//	var phrrPb
// vide expert.js, appjoC






//                                    c.js    SCREEN C






//	var ubun3P
//	var andr3P
//	var JsPc
// vide ti.js, appjoC


// app inventor








//	var SegPc
//	var hard3P
// var soft3P
//	var LogPc
// var JavaPc
// var PhpPc
// vide ti.js, appjoC




var WinPc = [
"diamond","arrow","up arrow","down arrow"," five-point star","resize","edit colours","full screen"," show or hide","view","rulers","display"," fill with colour","picker","magnifier","close"," undo","redo","Not a fan.","I like it!","shut down","settings","restart"," file explorer","quick acess","desktop","documents"," pictures","music","help","file"," home","share","view","folder"," properties","history","select all","select none"," invert selection","search quick acess","name","size"," more","items","system","devices"," network & internet","personalisation","accounts","time & language"," ease of acess","privacy","update & security","about"," notifications","windows","processor"," system type","welcome","Remove from Quick acess","Send to","Create shortcut","Open file location",
];

var WinRc = [
"diamante"," seta"," seta para cima"," seta para baixo"," estrela de cinco pontas"," redimensionar"," editar cores"," tela cheia"," mostrar ou ocultar"," visualizar"," regras"," exibir"," preencher com cor"," seletor"," lupa"," fechar"," desfazer"," refazer"," não é um fã."," eu gosto disso!"," desligar"," configurações"," reiniciar"," explorador de arquivos"," acesso rápido"," desktop"," documentos"," fotos"," música"," ajuda"," arquivo"," casa"," compartilhar"," visualizar"," pasta"," propriedades"," histórico"," selecione tudo"," selecione nenhum"," Inverter seleção"," procurar acesso rápido"," nome"," tamanho"," mais"," itens"," sistema"," dispositivos"," rede e internet"," personalização"," contas"," tempo e idioma"," facilidade de acesso"," privacidade"," atualização e segurança"," sobre"," notificações"," janelas"," processador"," Tipo de sistema"," bem-vindo"," Remover do acesso rápido"," Enviar para"," Criar atalho"," Abrir o local do arquivo",
];

//var Wind3P
// var RedPc
// var BootPc
// vide ti.js, appjoC


	var arttP = [
"photography","lens","frame","gallery","ink","story",
];	

	var arttR = [
"fotografia","lente","quadro","galeria","tinta","estória",
];

var BootPc = [
"active","btn/ btn-primary/ btn-success"," caret","collapse"," container","dropdown"," dropdown-toggle","dropdown-menu","  icon-bar","navbar","navbar-collapse","navbar-nav"," navbar-fixed-top","navbar-default","navbar-header","navbar-brand"," navbar-toggle","row","table","table-striped"," table-hover","table-responsive",
];

var BootRc = [
"ativo","botão (cria)/ botão-primário (azul)/ botão-sucesso (verde)"," caret (seta indicando botão dropdown)","desabar ruir desmoronar"," vasilha recipiente (com igual margem na esquerda e direita)","dropdown (cria um toggleable menu)"," dropdown-alternância (usado no botão que esconde/mostra o dropdown menu)","dropdown-menu (estilo padrão)","  ícone-barra","barra de nav. (cria)","barra de nav.-desabar (esconde e substitui por icone)","(usado no <ul> que tem a <li> com links)"," (barra de nav. fixada no topo)","barra de nav. - padrão","barra de nav.-cabeçalho","barra de navegação - marcar","barra de nav.-alternância","linha  (recipiente para colunas responsivas)","tabela (estilo básico)","(tabela listrada)","table-hover","tabela-responsiva",
];

// var blue3P
// var term3P
// var node3P
// vide ti.js, appjoC




// var open3P
//var kolo3P
//var gimp3P
//var auda3P
//var wave3P 
//var midi3P
// var cuba3P
// var reak3P
//var frui3P
// vide art.js, appjoC



// var data3P
// var mong3P
// var cord3P
// var git3P
// vide ti.js, appjoC


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

		function noum () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(nouuP.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= nouuP[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = nouuR[i]; // Idem no display resposta.
document.querySelector('#p5').innerHTML = nouuR[i]; // Idem no display emoji.
	}

		function comp () {
var i = `${ran(compP.length)}`;
document.querySelector('#p6').innerHTML= compP[i];
document.querySelector('#p7').innerHTML = compR[i];
document.querySelector('#p5').innerHTML = compR[i];
	}

		function verb() { 	
var i = `${ran(verrP.length)}`;  
document.querySelector('#p6').innerHTML= verrP[i];
document.querySelector('#p7').innerHTML = verrR[i];
document.querySelector('#p5').innerHTML = verrR[i];
	}
	
		function adje() { 	
var i = `${ran(adjjP.length)}`;  
document.querySelector('#p6').innerHTML= adjjP[i];
document.querySelector('#p7').innerHTML = adjjR[i];
document.querySelector('#p5').innerHTML = adjjR[i];
	}

		function phra() { 	
var i = `${ran(phrrP.length)}`;  
document.querySelector('#p6').innerHTML= phrrP[i];
document.querySelector('#p7').innerHTML = phrrR[i];
document.querySelector('#p5').innerHTML = phrrR[i];
	}
		
		function tran() { 	
var i = `${ran(TranP.length)}`;  
document.querySelector('#p6').innerHTML= TranP[i];
document.querySelector('#p7').innerHTML = TranR[i];
document.querySelector('#p5').innerHTML = TranR[i];
	}

		function home() { 	
var i = `${ran(HomP.length)}`;  
document.querySelector('#p6').innerHTML= HomP[i];
document.querySelector('#p7').innerHTML = HomR[i];
document.querySelector('#p5').innerHTML = HomR[i];
	}

		function toys() { 	
var i = `${ran(ToyP.length)}`;  
document.querySelector('#p6').innerHTML= ToyP[i];
document.querySelector('#p7').innerHTML = ToyR[i];
document.querySelector('#p5').innerHTML = ToyR[i];
	}

		function math() { 	
var i = `${ran(MatP.length)}`;  
document.querySelector('#p6').innerHTML= MatP[i];
document.querySelector('#p7').innerHTML = MatR[i];
document.querySelector('#p5').innerHTML = MatR[i];
	}


		function natu() { 	
var i = `${ran(NatP.length)}`;  
document.querySelector('#p6').innerHTML= NatP[i];
document.querySelector('#p7').innerHTML = NatR[i];
document.querySelector('#p5').innerHTML = NatR[i];
	}

		function musi() { 	
var i = `${ran(MusP.length)}`;  
document.querySelector('#p6').innerHTML= MusP[i];
document.querySelector('#p7').innerHTML = MusR[i];
document.querySelector('#p5').innerHTML = MusR[i];
	}
			
		//  FUNÇÇÔES APP PRETO
		


	
// function verb2
//	function adje2
//	function comp2
//	function html2
//	function trai2
// vide expert.js, appjoC
	





	function Foo() {                                    
	//	var rndCor = Math.floor(Math.random()*(fooP.length));
	//document.getElementById('p2').innerHTML = fooP[rndCor];
	//document.getElementById('p3').innerHTML = fooR[rndCor];
		 var rndCor = Math.floor(Math.random()*(fooP.length));
		 var rndCor2 =  fooP[rndCor];
		
	    document.getElementById('p3').innerHTML = fooR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p2');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}
	
	function Num() {
	//	var rndCor = Math.floor(Math.random()*(numP.length));
	//document.getElementById('p2').innerHTML = numP[rndCor];
	//document.getElementById('p3').innerHTML = numR[rndCor];
		 var rndCor = Math.floor(Math.random()*(numP.length));
		 var rndCor2 =  numP[rndCor];
		
	    document.getElementById('p3').innerHTML = numR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p2');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}
	
//	function noum2
//	function css2
// vide expert.js, appjoC


	
	function Ani() {
	//	var rndCor = Math.floor(Math.random()*(aniP.length));
	//document.getElementById('p2').innerHTML = aniP[rndCor];
	//document.getElementById('p3').innerHTML = aniR[rndCor];
		 var rndCor = Math.floor(Math.random()*(aniP.length));
		 var rndCor2 =  aniP[rndCor];
		
	    document.getElementById('p3').innerHTML = aniR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p2');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}


		function art() { 	
var i = `${ran(arttP.length)}`;  
document.querySelector('#p6').innerHTML= arttP[i];
document.querySelector('#p7').innerHTML = arttR[i];
document.querySelector('#p5').innerHTML = arttR[i];
	}





//	function traf2
//	function phra2
// vide expert.js, appjoC


//            b.js #### APP SCREEN C
		




//	function segu3		
//	function hard3
//	function soft3 
//	function css3() {
//	function andr3
//	function ubun3()
//	function wind3
//	function comp3
//	function logi3
//	function html3
//	function js3
//	function java3
//	function php3
// vide ti.js, appjoC	


//	function rede3
//	function boot3
//	function blue3
//	function term3
//	function node3
//	function data3
//	function mong3
//	function git3
//	function cord3
// vide ti.js, appjoC
	
	





	


	
		//  FUNÇÇÔES APP ART
//		function art()
//		function open3
//		function kolo3
//			function gimp3
//			function auda3
//				function wave3
//				function midi3
//				function cuba3
//				function reak3
//				function frui3
// vide art.js			
	



/*
############################################################
############################################################
############### inicialização de eventos ###################
############################################################
############################################################
*/
	
			// inicialização de eventos; onclick.
	function addEvents () {
		// SCREEN A - app amarelo

document.querySelector("#art").addEventListener("click",art);
document.querySelector('#art').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "ART";});
document.querySelector("#art").addEventListener("click",mudaPosicao);
document.querySelector('#art').addEventListener("click", falar);

document.querySelector("#verb").addEventListener("click",verb);
document.querySelector('#verb').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "VERB";});
document.querySelector("#verb").addEventListener("click",mudaPosicao);
document.querySelector('#verb').addEventListener("click", falar);

document.querySelector("#adje").addEventListener("click",adje);
document.querySelector('#adje').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "ADJECTIVE";});
document.querySelector("#adje").addEventListener("click",mudaPosicao);
document.querySelector('#adje').addEventListener("click", falar);

document.querySelector("#noum").addEventListener("click",noum);
document.querySelector('#noum').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "NOUNS";});
document.querySelector("#noum").addEventListener("click",mudaPosicao);
document.querySelector('#noum').addEventListener("click", falar);

document.querySelector("#comp").addEventListener("click",comp);
document.querySelector('#comp').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "COMPUTER";});
document.querySelector("#comp").addEventListener("click",mudaPosicao);
document.querySelector('#comp').addEventListener("click", falar);

document.querySelector("#phra").addEventListener("click",phra);
document.querySelector('#phra').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "PHRASES";});
document.querySelector("#phra").addEventListener("click",mudaPosicao);
document.querySelector('#phra').addEventListener("click", falar);

document.querySelector("#tran").addEventListener("click",tran);
document.querySelector('#tran').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "TRAIN";});
document.querySelector("#tran").addEventListener("click",mudaPosicao);
document.querySelector('#tran').addEventListener("click", falar);

document.querySelector("#home").addEventListener("click",home);
document.querySelector('#home').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "HOME";});
document.querySelector("#home").addEventListener("click",mudaPosicao);
document.querySelector('#home').addEventListener("click", falar);

document.querySelector("#toys").addEventListener("click",toys);
document.querySelector('#toys').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "TOYS";});
document.querySelector("#toys").addEventListener("click",mudaPosicao);
document.querySelector('#toys').addEventListener("click", falar);

document.querySelector("#math").addEventListener("click",math);
document.querySelector('#math').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "MATH";});
document.querySelector("#math").addEventListener("click",mudaPosicao);
document.querySelector('#math').addEventListener("click", falar);	
	
document.querySelector("#natu").addEventListener("click",natu);
document.querySelector('#natu').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "NATURE";});
document.querySelector("#natu").addEventListener("click",mudaPosicao);
document.querySelector('#natu').addEventListener("click", falar);

document.querySelector("#musi").addEventListener("click",musi);
document.querySelector('#musi').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "MUSIC";});
document.querySelector("#musi").addEventListener("click",mudaPosicao);
document.querySelector('#musi').addEventListener("click", falar);

	}
window.addEventListener("load",addEvents);

/*

app inventor




iTech
screen 1 (modo fácil)
---
camera,education,file,folder, headphone,home,lock,music, shut down,picture,print,send, cart,trash,dowload/upload,user, volume,

câmera, educação, arquivo, pasta, fone de ouvido, casa, trancar/travar, música, desligar, imagem, imprimir, enviar, carrinho, lixo, baixar / carregar, usuário, volume,
---
camera,CPU,headphone,in-ear, joystick,mouse,pen drive,print, USB,virus,

câmera,CPU,fone de ouvido,fone(auricular) , joystick,mouse,pen drive,impressão, USB,vírus,
---
rainbow, trees, waterfall, sky, stars, flowers, forest, island, winter, lake, moon, sea, snow, autumn, plants, beach, spring, river, summer, sun, summer,

arco íris, árvores, cachoeira, céu, estrelas, flores, floresta, ilha, inverno, lago, lua, mar, neve, outono, plantas, praia, primavera, rio, verão, sol, verão,

###

CDN Content Delivery Network Rede de Distribuição de Conteúdo











//settings, sound; definições, som
"Sound profile","Volume", 
"SIM1 ringtone","Sound with vibration", 
"Do not disturb. Have no interruptions from notifications", 
"Lock screen. Show all notifications.",
"Apps. Set notifications for apps", 
"Vibrate on tap. Vibrate when tapping the Home touch buttons, dialpad, etc.", 
"sound effects", 
"Message/call voice notifications. Read caller info and messages out loud", 

"perfis de som","volume",
"tom SIM1","som com vibração",
"Não perturbe. Não existem interrupções de notificações",
"Bloquear o tela. Mostrar",
"Aplicações. Definir notificações de aplicações.",
"Vibrar ao tocar. Vibra ao tocar nos botões táteis do tela principal, teclado, ec",
"efeitos sonoros",
"Notificações por voz de mensagens/chamadas. Lê a informação do autor da chamada e as mensagens em alta voz",


//settings, display; definições, tela
"home screen","lock screen","home touch buttons",
"font type","font size", 
"brightness","night brightness", 
"set brightness at 0% automatically between 12:00 AM~06:00 AM",
"auto-ratate screen", 
"screen timeout","screen-off effect", 
"daydream",

"tela inicial","bloqueio do tela","botões de toque do tela principal",
"tipo de letra","tamanho da letra",
"brilho","brilho da noite",
"definir automaticamente a lminosidade para 0% entre as 12:00 AM~06:00 AM",
"girar tela automaticamente",
"limite de tempo de tela","efeito ao desligar a tela",
"protetor de tela, sonhar acordado",


//Settings, general; definições, geral
"Language & input","Location", 
"Accounts & sync", 
"Accessibility",
"One-handed operation", 
"Shortcut key",
"Security",
"Guest mode", 
"Gestures", 
"QuickCircle cse. Open some apps on a small portions of the screen with cover closed", 
"Date & time", 
"Storage", 
"Battery",
"Default message app",
"Backup & reset", 
"developer options",
"About phone",

"idioma e entrada","localização",
"contas e sincronização",
"acessibilidade",
"operação de uma mão",
"tecla de atalho",
"segurança",
"modo convidado",
"gestos",
"Capa QuickCircle. Abre algumas aplicações numa pequena parte do tela com a capa fechada",
"hora e data",
"aramazenamento",
"bateria",
"aplicação de mensagens predefinidas",
"cópia de segurança e reposição",
"opções de programador",
"sobre o telefone",


"Battery status",
"battery level",
"Hardware info", 
"Software info. Software version", 
"Legal info. Agreement of rights too use LG apps, Open source licences, Google legal", 

"estado da bateria",
"nível da bateria",
"informações de hardware",
"informações de software, versão software",
"Informações legais. Acordo de direitos para usar as aplicações LG, licenças de fonte aberta, Google legal",


//Stetings, general, About phone, cartão SIM1, Network
"Network",
"Signal strength", 
"Mobile network type", 
"Operator info", 
"Service state", 
"Roaming", 
"Mobile network state", 
"IP address", 

"Rede",
"intensidade do sinal",
"tipo de rede móvel",
"informações da operadora",
"estado do serviço",
"roaming",
"estado da rede móvel",
"endereço IP",


//Stetings, general, About phone, cartão SIM1, status
"Status",
"My phone number", 

"Estado",
"meu número de telefone",


//Settings, general, About phone, commum
"Phone name", 
"Update Center. Check for app and software updates provided by LG Electronics", 

"nome do telefone",
"Centro de Atualização. Verifique as atualizações para aplicativos e software oferecidos pela LG Electronics",


//Settings, general, Backup & reset
"Back up my data", 
"Backup account", 
"Automatic restore", 
"Factory data reset", 

"fazer cópia de segurança dos meus dados",
"conta de cópia de segurança",
"restauração atomática",
"restaurar dados de fábrica",


//Settings, general, Battery
"Discharging", 
"Battery usage", 
"Battery percentage on status bar", 
"Battery saver", 
"Help", 

"descarregando",
"uso da bateria",
"percentual de bateria na barra de estado",
"economia de energia",
"ajuda",


//Ajustes, geral, armazenamento, internal storage (armazenamento interno)
"Total space", 
"storage low",
"Available",
"apps",
"Pictures, videos", 
"Audio (music, ringtones, podcasts, etc)",
"Downloads",
"Cached data", 
"Misc",

"espaço total",
"baixo armazenamento",
"disponível",
"aplicativos",
"foto, vídeo",
"áudio (músicas, toques, podcasts, etc)",
"downloads",
"dados armazenados em cache",
"vários",


//Ajustes, geral, Smart cleaning
"Temporary files", 
"Download folder", 
"Idle apps",

"arquivos temporário",
"pasta de Download",
"aplicativos ociosos",

//File manager
"File manager",
"phone storage",
"All files",
"music, image, video, document",
"cloud storage",

"Administrador de arquivos",
"armazenamento do telefone",
"todos os arquivos",
"música, imagem, vídeos, documento",
"armazenamento na nuvem",




http://anonymousmg.comunidades.net/dicionario-hacker
https://pt.wikipedia.org/wiki/Cracker
https://pt.wikipedia.org/wiki/Hacker
https://pt.wikipedia.org/wiki/Jargon_File

speed acelerar; speed up, acelerar
speed velocidade, speed of audio, velocidade do áudio
*/