
	var comP = [	// R é de resposta: Ex: com comR
"kernel","core","window","virus",
"worm","spy","backdoor","sniffer",
"zombie","scan","defacement","workstation",
"hoax","host","smartphone","tablets",
"firewall","notebook","router","switch",
"bus","ring","open source","free software",
"freeware","plugin","stack","stream",
"string","bug","thread","hardware",
"parser","patch","path","log",
"means","pipe","template","upgrade",
"phishing",
];
	
	var comR = [
"núcleo","núcleo","janela","vírus",
"rastejar-verme-minhoca-lombriga","espião","porta dos fundos-porta de serviço","farejador",
"zumbi","examinar","desfiguração-deformação","estação de trabalho",
"trote","hospedeiro-máquina-computador","telefone inteligente","tabletes",
"parede de fogo","caderno-bloco de notas-agenda","roteador","interruptor",
"barramento","anel","código aberto","soft livre",
"software gratuito","módulo-extensão","pilha","fluxo",
"cadeia de caracteres-cadeia","defeito-erro","fluxo de execução-linha de execução-processo leve-segmento","parte física do computador-equipamento",
"analisador-analisador sintático","remendo-componente de atualização","caminho","registro",
"meios","duto","modelo","atualização",
"defraudar",
];


	var htmP = [	//html (tags somente, creio que exceto DOCTYPE)
"a>anchor","abbr>abbreviation","address","area","article","aside","audio","b>bold",
"base","bdo>Bi-bi-directional override","body","blockquote","br>break","button","canvas","caption",
"cite","code","col","colgroup","dd","del","details","dfn>defining",
"dialog","div>division","dl>description list","!DOCTYPE> document type","dt>term/name in a description list","em>emphasized","embed>","fieldset>",

"figcaption","figure","footer","form","frame>NO HTML5","frameset>NO HTML5","head","header",
"h1>h6>headings","hr>thematic change in the content","i>italic","iframe>inline frame","img>image","input>","ins>inserted","kbd>keyboard",
"keygen","label","legend","li>list item","link","main","map>image-map","mark>marked",
"menu","menuitem","meta>metadata","meter>measurement","object","ol","optgroup>group of related options","option",

"output","p>paragraph","param>parameter","pre>preformatted","q>quotation","samp>sample","section","select",
"small","source","strong","style","sub>subscripted","sup>superscripted","table","textarea",
"time>date/time","title","tr>row in a table","track>text tracks",
"ul>unordered list","var>variable","video",
];

	var htmR = [
"âncora/hiperlink","abreviação","endereço","área","artigo","a parte/de lado","áudio","negrito",
"base (URI)","bi-directional override","corpo","bloco de citação","quebrar/pausa","botão","tela (de pintura)","título/subtítulo",
"citar","código","col","colgroup","dd","del","detalhes","definindo",
"diálogo","divisão","lista de descrição","tipo de documento","termo/nome em uma lista de descrição","enfatizado","embutir","fieldset",

"figcaption","figura","rodapé","formulário","quadro (NO HTML5)","conjunto de molduras (NO HTML5)","cabeça","cabeçalho",
"posições","mudança temática no conteúdo","itálico","inline frame","imagem","entrada","inserido","teclado",
"keygen","rótulo","legenda","item da lista","ligação","principal","mapa de imagem","marcado",
"cardápio","item do menu","metadados","medição","objeto","ol","grupo de opções","opção",

"saída","parágrafo","parâmetro","pré-formatado","cotação","amostra","seção","selecionar",
"pequeno","fonte","forte","estilo","subscrito","superscripted","tabela","área de texto",
"data hora","título","linha em uma tabela","faixas de texto",
"lista desordenada","variável","vídeo",
];

	var cssP = [	// css
"background", "attachment", "image", "position","repeat", "collapse", "color", "spacing", 
"style", "top", "left", "right","bottom", "content", "clear", "clip", 

"width", "lenght", "counter", "increment","cue", "after", "before", "cursor", 
"direction", "elevation", "empty", "cells","to float", "font", "family", "size", 

"variant", "weight", "height", "margin","overflow", "padding", "page", "break", 
"inside", "pause", "pitch", "range","play", "during", "speak", "header", 

"text", "align", "decoration", "indent","volume", "space", "word", "index", 
];	
	
	var cssR = [
"fundo", "anexo", "imagem", "posição","repetir", "colapso", "cor", "espaçamento", 
"estilo", "topo", "esquerda", "direita","inferior", "conteúdo", "claro", "grampo", 

"largura", "comprimento", "contador", "incremento","sugestão", "após", "antes", "cursor", 
"direção", "elevação", "vazio", "células","flutuar", "fonte", "família", "tamanho", 

"variante", "peso", "altura", "margem","transbordar", "preenchimento", "página", "break", 
"dentro", "pausa", "arremesso", "alcance","toque", "durante", "falar", "cabeçalho", 

"texto", "alinhar", "decoração", "recuar","volume", "espaço", "palavra", "índice", 
];	



	var verP = [	// primeiro grupo: verbos joão neném // demais: // verbos novos	
/*
"record","delete","process","store","set","tell","to paint","touch", 
"sequence","file","open","measure","quit","reset","clear","display", 
"cut","copy","paste","save", 

"spin","turn","clamp","pump","pitch","launch","smash","squeeze",
"stretch","brand","collapse","hover","match","champion","throw","assert",
"return","import","extend","float","mind","split","purchase","sell buy rent",
"pay","take","fuel","rip","move","care","delay","warm",

"cloud","grow","rule","bring","instance","query","forget","cancel",
"got","list","increase-decrease","recognize","retrieve","deal","buy","flow",
"compare","replace","split","share","trim","up","down","update",
"duplicate","position","welcome","deny","get up","have-has","do-does-doing","go-goes-going",

"detail","scratch","protect","know","rain","catch","fly","begin",
"sit","like","save","drown","sing","complete","connect","type",
"write","answer","let","leave","translate","guess","come back-go back","dance",
"fish","follow","mold/pattern","forge","array","wash","fall","blow",

"spread","bite","find","research"," seek-search","step","read","study",
"work","plant","miss-lose","drive","place-put","drag","drop","accept",
"live","shake","remember","allow","install","switch off-turn off","switch","turn on",
"agree","watch","brush","sweep","hit","charge","beat","drink",

"give","toy","answer","access","fun","round","make","help",
"slider","pedal","choose","pick","rank","cross","quiz","enjoy",
"enable","has","use","apply","finalize","see","look","play",
"rent","sell","want","can","sort","change","think","discover",

"lower","increase","add","alter","shift","have","be","need",
"get","dismiss","learn","rest","hear","fix","fail","join",
"win","dream","run","say","scan","love","handle","feel",
"fill","warn","limit","check","control","record","delete.","process",

"store","set","tell","paint", "touch","file","appear","open",
"measure","quit","reset","clear", "display","cut","copy","paste",
"jump","repeat","sleep","draw","do.","do. it","done","build",
"call","speak","eat","clean","reset","draw","create","finish",

"customize","believe","push","pull","thank","release","attack","decay",
"sustain","keep","wait","hold","try","show","walk","hide",
"attempt","load","start","stop",
*/



//appinventor
"spin","turn","clamp","pump","pitch","launch","smash","squeeze"," stretch","brand","collapse","hover","match","champion","throw","assert","return"," import","extend","float","mind","split","purchase","sell buy rent","pay","take","fuel","rip","  move","care","delay","warm","cloud","grow","rule","bring"," instance","query","forget","cancel","got","list","increase-decrease","recognize"," retrieve","deal","buy","flow","compare","replace","split","share","  trim","up","down","update","duplicate","position","welcome","deny", "get up","have-has","do - does - doing","go - goes - going","detail","scratch","protect","know"," 		rain","catch","fly","begin","sit","like","save","drown"," sing","complete","connect","type","write","answer","let","leave","   translate","guess","come back-go back","dance","fish","follow","mold/pattern","forge"," array","wash","fall","blow","spread","bite","find","research"," seek-search","step","read","study","work","plant","miss-lose","drive"," place-put","drag","drop","accept","live","shake","remember","allow","  install","switch off-turn off","switch","turn on","agree","watch","brush","sweep"," hit","charge","beat","drink","give","toy","answer","access"," fun","round","make","help","slider","pedal","choose","pick"," rank","cross","quiz","enjoy","enable","has","use","apply","  finalize","see","look","play","rent","sell","want","can"," sort","change","think","discover","lower","increase","add","alter"," shift","have","be","need","get","dismiss","learn","rest","  hear","fix","fail","join","win","dream","run","say","  scan","love","handle","feel","fill","warn","limit","check","  control","record","delete","process","store","set","tell","paint"," touch","file","appear","open","measure","quit","reset","clear"," display","cut","copy","paste","jump","repeat","sleep","draw","  do","do it","done","build","call","speak","eat","clean"," reset","draw","create","finish","customize","believe","push","pull","  thank","release","attack","decay","sustain","keep","wait","hold"," try","show","walk","hide","attempt"," to browse","travel",
];

	var verR = [
/*
"gravar","apagar","processar","armazenar","configurar","contar","pintar","tocar", 
"sequenciar","arquivar","abri","medir","desistir","reiniciar","limpar","exibir", 
"cortar", "copiar", "colar", "salvar", 	

"girar","virar","apertar","bombear","lançar/arremessar","lançar","esmagar","espremer",
"esticar","marcar","collapse/cair/desmoronar","pairar","corresponder/igualar/condizer","defender/patrocinar","lançar","afirmar/declarar",
"retornar/voltar","importar","estender/ampliar","flutuar","lembrar-se/prestar atenção","partir","comprar","vender comprar alugar",
"pagar","pegar","abastecer","rasgar","mover","cuidar","demorar/atrasar","aquecer",

"nublar","crescer","reger/governar","trazer","exemplificar/ilustrar","perguntar","esquecer","cancelar",
"obteve","alistar/registrar","aumentar/diminuir","reconhecer","recuperar","negociar/comprar","comprar","fluir",
"comparar","substituir","partir","compartilhar","aparar","levantar/subir","baixar/descer","atualizar",
"duplicar","posicionar","acolher","negar","sair(da cama)/levantar/levante-se","ter - tem","fazer - faz - fazendo","ir - vai - indo",

"detalhar","arranhar","proteger","saber", "chover","pegar","voar","começar",
"sentar","gostar","salvar","afogar", "cantar","completar","conectar","tipificar/escrever(com máquina)",
"escrever","responder","deixar","sair","traduzir","adivinhar","voltar","dançar",
"pescar","seguir","moldar/modelar","forjar", "arrumar","lavar","cair","soprar/assoprar/ventar",

"espalhar","morder","encontrar/achar","pesquisar","procurar","pisar","ler","estudar",
"trabalhar","plantar","perder","dirigir", "colocar/pôr","arrastar","soltar","aceitar",
"viver","agitar","lembrar","permitir", "instalar","desligar","mudar/trocar","ligar",
"concordar","assistir","escovar/varrer/pintar","varrer","acertar/atingir","carregar","bater","beber",

"dar","brincar","responder","acessar/cadastrar","brincar","arredondar","fazer","ajudar/socorrer",
"deslizar","pedalar","escolher","escolher","classificar","atravessar/cruzar","perguntar/interrogar","apreciar/desfrutar",
"habilitar","tem","usar","aplicar","finalizar","ver","olhar","brincar/jogar",
"alugar","vender","quer/querer","poder","classificar/ordenar","alterar/mudar","pensar","descobrir",

"diminuir/baixar","aumentar","adicionar","alterar","deslocar","ter","ser/estar","precisar",
"obter","demitir","aprender","descansar/repousar"," ouvir","consertar/fixar","falhar","juntar",
"vencer/ganhar","sonhar","correr","dizer","examinar","amar","manusear","sentir",
"preencher","advertir","limitar","verificar","controlar","gravar/registrar","excluir/apagar","processar",

"armazenar","acertar/determinar","contar/dizer","pintar","tocar","arquivar","aparecer","abrir",
"medir","sair/desistir/partir","redefinir","clarear/remover","exibir","cortar","copiar","colar",
"saltar","repetir","dormir","desenhar","fazer","faça","feito","construir",
"chamar","falar","comer","limpar/varrer", "redefinir","desenhar","criar","terminar",

"customizar","crer/acreditar","empurrar","puxar", "agradecer","liberar/libertar","atacar","decair",
"sustentar","manter","esperar","segurar", "tentar/experimentar","mostrar","andar","esconder",
"tentar","carregar","iniciar-começar","parar",
*/

//appinventor
"girar","virar","apertar","bombear","lançar/arremessar","lançar","esmagar","espremer", "esticar","marcar","collapse/cair/desmoronar","pairar","corresponder/igualar/condizer","defender/patrocinar","lançar","afirmar/declarar","retornar/voltar","importar","estender/ampliar","flutuar","lembrar-se/prestar atenção","partir","comprar","vender comprar alugar","pagar","pegar","abastecer","rasgar"," mover","cuidar","demorar/atrasar","aquecer","nublar","crescer","reger/governar","trazer"," exemplificar/ilustrar","perguntar","esquecer","cancelar","obteve","alistar/registrar","aumentar/diminuir","reconhecer","recuperar","negociar/comprar","comprar","fluir","comparar","substituir","partir","compartilhar"," aparar","levantar/subir","baixar/descer","atualizar","duplicar","posicionar","acolher","negar","sair(da cama)/levantar/levante-se","ter - tem","fazer - faz - fazendo","ir - vai - indo","detalhar","arranhar","proteger","saber"," chover","pegar","voar","começar","sentar","gostar","salvar","afogar"," cantar","completar","conectar","tipificar/escrever(com máquina)","escrever","responder","deixar","sair","  traduzir","adivinhar","voltar","dançar","pescar","seguir","moldar/modelar","forjar", "arrumar","lavar","cair","soprar/assoprar/ventar","espalhar","morder","encontrar/achar","pesquisar"," procurar","pisar","ler","estudar","trabalhar","plantar","perder","dirigir"," colocar/pôr","arrastar","soltar","aceitar","viver","agitar","lembrar","permitir","  instalar","desligar","mudar/trocar","ligar","concordar","assistir","escovar/varrer/pintar","varrer"," acertar/atingir","carregar","bater","beber","dar","brincar","responder","acessar/cadastrar"," brincar","arredondar","fazer","ajudar/socorrer","deslizar","pedalar","escolher","escolher"," classificar","atravessar/cruzar","perguntar/interrogar","apreciar/desfrutar","habilitar","tem","usar","aplicar","  finalizar","ver","olhar","brincar/jogar","alugar","vender","quer/querer","poder"," classificar/ordenar","alterar/mudar","pensar","descobrir","diminuir/baixar","aumentar","adicionar","alterar"," deslocar","ter","ser/estar","precisar","obter","demitir","aprender","descansar/repousar"," ouvir","consertar/fixar","falhar","juntar","vencer/ganhar","sonhar","correr","dizer",  "examinar","amar","manusear","sentir","preencher","advertir","limitar","verificar"," controlar","gravar/registrar","excluir/apagar","processar","armazenar","acertar/determinar","contar/dizer","pintar", "tocar","arquivar","aparecer","abrir","medir","sair/desistir/partir","redefinir","clarear/remover", "exibir","cortar","copiar","colar","saltar","repetir","dormir","desenhar",  "fazer","faça","feito","construir","chamar","falar","comer","limpar/varrer", "redefinir","desenhar","criar","terminar","customizar","crer/acreditar","empurrar","puxar"," agradecer","liberar/libertar","atacar","decair","sustentar","manter","esperar","segurar"," tentar/experimentar","mostrar","andar","esconder","tentar"," navegar","viajar"

];


	var adjP = [	//adj
"previous","beautiful-ugly","clever","new.-old","hard-soft","pretty-ugly","young-old","sweet-salt",
"great-little","large-small","loud-soft","quiet-noisy","quick-slow","strong-weak","far-near","good-bad",
"high-mid-low","long.-short.","heavy-light","happy-sad","alive-dead","hot-cold","rich-poor","early-late",
"useful-useless","true.-false.","full","tiny","serious","funny","dry-wet","striped",
"thin","slim","fixed","wide","enough","inner/outer",
];
	
	var adjR = [
"anterior","bonito-feio","esperto/inteligente","novo velho","duro-macio","bonito-feio","jovem-velho","doce-salgado",
"grande-pequeno","grande-pequeno","alto-suave","silencioso-ruidoso","rápido-lento","forte-fraco","longe-perto","bom-mau",
"alto-médio-baixo","longo-curto","pesado-leve","feliz-triste","vivo-morto","quente-frio","rico-pobre","cedo-atrasado",
"útil-inútil","verdadeiro-falso","cheio","minúsculo/ muito pequeno","grave/ sério","engraçado","seco-molhado","listrado",
"fino","fino","fixo","largo","suficiente","interior/exterior",
];
	

	var traP = [	// Train
"passenger","sundays and holidays","bathrooms: free use","mind the gap between train and platform",
"next station","boarding","business days: from 6 am to 8 pm","saturdays: from 6 am to 7 pm",
"dear user","the elevator is for exclusive use","to use the elevator please contact the station agent",
];	

// 
	var traR = [
"passageiro","domingos e feriados","banheiros: uso gratuito","lembre-se da diferença entre o trem e a plataforma",
"próxima estação","embarque","dias úteis: das 6 (pré meio-dia) às 8 (pós meio-dia)","sábados: das 6 (pré meio-dia) às 7 (pós meio-dia)",
"prezado cliente/ querido usuário","o elevador é de uso exclusivo","para utilizar o elevador favor acionar o agente da estação",
];	

	






	function Com() {
		var rndCor = Math.floor(Math.random()*(comP.length));
	document.getElementById('p2').innerHTML = comP[rndCor];
	document.getElementById('p3').innerHTML = comR[rndCor];
	}
	
	function Ver() {
		var rndCor = Math.floor(Math.random()*(verP.length));
	document.getElementById('p2').innerHTML = verP[rndCor];
	document.getElementById('p3').innerHTML = verR[rndCor];
	}
	
	function Adj() {
		var rndCor = Math.floor(Math.random()*(adjP.length));
	document.getElementById('p2').innerHTML = adjP[rndCor];
	document.getElementById('p3').innerHTML = adjR[rndCor];
	}

	function Htm() {
		var rndCor = Math.floor(Math.random()*(htmP.length));
	document.getElementById('p2').innerHTML = htmP[rndCor];
	document.getElementById('p3').innerHTML = htmR[rndCor];
	}

	function Toy() {
		var rndCor = Math.floor(Math.random()*(toyP.length));
	document.getElementById('p2').innerHTML = toyP[rndCor];
	document.getElementById('p3').innerHTML = toyR[rndCor];
	}

	function Tra() {
		var rndCor = Math.floor(Math.random()*(traP.length));
	document.getElementById('p2').innerHTML = traP[rndCor];
	document.getElementById('p3').innerHTML = traR[rndCor];
	}

	function Art() {
		var rndCor = Math.floor(Math.random()*(artP.length));
	document.getElementById('p2').innerHTML = artP[rndCor];
	document.getElementById('p3').innerHTML = artR[rndCor];
	}

	function Foo() {
		var rndCor = Math.floor(Math.random()*(fooP.length));
	document.getElementById('p2').innerHTML = fooP[rndCor];
	document.getElementById('p3').innerHTML = fooR[rndCor];
	}
	
	function Num() {
		var rndCor = Math.floor(Math.random()*(numP.length));
	document.getElementById('p2').innerHTML = numP[rndCor];
	document.getElementById('p3').innerHTML = numR[rndCor];
	}
	
	function Nou() {
		var rndCor = Math.floor(Math.random()*(nouP.length));
	document.getElementById('p2').innerHTML = nouP[rndCor];
	document.getElementById('p3').innerHTML = nouR[rndCor];
	}

	function Css() {
		var rndCor = Math.floor(Math.random()*(cssP.length));
	document.getElementById('p2').innerHTML = cssP[rndCor];
	document.getElementById('p3').innerHTML = cssR[rndCor];
	}
	
	function Ani() {
		var rndCor = Math.floor(Math.random()*(aniP.length));
	document.getElementById('p2').innerHTML = aniP[rndCor];
	document.getElementById('p3').innerHTML = aniR[rndCor];
	}
	

	

	
	
			// inicialização de eventos; onclick.
	function addEvents () {
		document.getElementById("Co").addEventListener("click",Com);
		document.getElementById("Ht").addEventListener("click",Htm);
		document.getElementById("Cs").addEventListener("click",Css);
		document.getElementById("Ve").addEventListener("click",Ver);
		document.getElementById("Ad").addEventListener("click",Adj);
		document.getElementById("Tr").addEventListener("click",Tra);
	}
window.addEventListener("load",addEvents);
	
	