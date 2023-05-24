
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

//html (tags somente, creio que exceto DOCTYPE)

	var htmP = [
"html head body","audio video","br hr img input","embed link meta source","track area base col param wbr",
"header nav section article aside footer","ol; ordered list","col; column","colgroup; group of columns",

//appinventor
"span","tr; table row; row in a table","th; table header","td; table data","ul; unordered list","li; list item","dl; description list","dt; term; term/name in a description list",
"dd; description","a; anchor","abbr; abbreviation","address","area","article","aside","b; bold",
"base"," bdo; bi-bi-directional override","blockquote","br; break","button","canvas","caption","cite",
"code","del; deleted","details>","dfn; defining"," dialog","div; division","!DOCTYPE; document type","em; emphasized",

"embed","fieldset","figcaption","figure","footer","form","frame; NO HTML5","frameset; NO HTML5",
"header","h1...h6; headings","hr; horizontal rule; thematic change in the content","i; italic","iframe; inline frame"," img;image","input","ins; inserted",
"kbd; keyboard","keygen","label","legend","li; list item","link","main","map; image-map","mark; marked",
"menu","menuitem","meta; metadata","meter; measurement","object","optgroup; group of related options"," option","output",

"p; paragraph","param; parameter","pre; preformatted","q; quotation","samp; sample","section","select"," small",
"source","strong","style","sub; subscripted","sup; superscripted","table","textarea","time; date/time",
"title"," tr; row in a table","track; text tracks","ul; unordered list","var; variable","video",

//appinventor (HTML - atributos)
"action","src alt title","autocomplete","autofocus","autoplay","border","charset","checked",
"cite","class","content","controls","disabled","download","height","high",
"href","id","kind","label","lang","low","max","maxlength",
"minlength","media","method","min","name","placeholder","rel","required",
"rows","selected","size","style","target","type","value","width",
	];
	
	var htmR = [

"tags html cabeça e corpo","tags áudio e vídeo",
"tags vazias (ou elementos vazios (Empty element))","tags vazias (ou elementos vazios (Empty element))","tags vazias (ou elementos vazios (Empty element))",
"elementos semânticos (semantic elements)","lista ordenada","coluna","grupo de colunas",

// appinventor
"palmo/período/pequena distância","linha da tabela","cabeçalho da tabela","dados da tabela"," lista desordenada"," Item da lista","lista de descrição","termo/nome em uma lista de descrição",
"descrição","âncora/hiperlink"," abreviação","endereço","área"," artigo","a parte/de lado","negrito",
"base (URI)"," bi-directional override","bloco de citação"," quebrar/pausa"," botão","tela (de pintura)","título/subtítulo"," citar",
"código","excluído"," detalhes","definindo"," diálogo","divisão","tipo de documento","enfatizado",

"embutir","fieldset"," figcaption","figura","rodapé","formulário","  quadro (NO HTML5)","conjunto de molduras (NO HTML5)",
"cabeçalho","  posições","mudança temática no conteúdo","itálico","inline frame"," imagem","entrada","inserido",
"teclado"," keygen","rótulo","legenda","item da lista","ligação","principal","mapa de imagem","marcado",
"cardápio","item do menu"," metadados","medição"," objeto","grupo de opções"," opção","saída",

"parágrafo","parâmetro","pré-formatado"," cotação"," amostra","seção","selecionar"," pequeno",
"fonte","forte","estilo"," subscrito"," superscripted","tabela","área de texto"," data hora",
"título"," linha em uma tabela","faixas de texto"," lista desordenada","variável","vídeo",
//appinventor (HTML - atributos)
"atributo","atributos usados em imgs","atributo","atributo","atributo","atributo","atributo","atributo",
"atributo","atributo","atributo","atributo","atributo","atributo","atributo","atributo",
"atributo","atributo","atributo","atributo","atributo","atributo","atributo","atributo",
"atributo","atributo","atributo","atributo","atributo","atributo","atributo","atributo",
"atributo","atributo","atributo","atributo","atributo","atributo","atributo","atributo",
];







	var cssP = [	// css, incluso app inventor
"background:","background-image:","background-color:","background-repeat:","background-position:","background-size:","background-attachment:",
"border:","border-style","border-width","border-color","border-top | border-bottom","border-radius:",
"font:","font-size:","font-family:","font-weight:","font-style","line-height:",
"position:","color:","top:","left:", "right:","bottom:","clear:","clip:",
"width:","cursor:","direction:","float:","box-shadow",
"font-weight","height:","margin:","overflow:",
"text-align:","text-decoration:","text-indent:",
"width: | height:","padding:","padding-top:","box-sizing:","margin-right:","list-style:","transition:","display:","z-index",
];
	var cssR = [
"fundo","imagem de fundo","cor de fundo","repetição de fundo","posição de fundo","tamanho de fundo","anexo de fundo",
"borda","estilo de borda","largura da borda","cor da borda","fronteira superior | fronteira inferior","raio da borda",
"fonte","tamanho da fonte","família de fontes","espessura da fonte","estilo de fonte","altura da linha",
"posição:","cor","topo","esquerda","direita","inferior","claro","grampo",
"largura","cursor","direção","flutuar","sombra da caixa",
"peso da fonte", "altura", "margem","transbordar",
"alinhamento de texto","decoração de texto","recuo do texto",
"largura | altura","preenchimento","propriedade","propriedade","margem direita","estilo de lista","transição","exibir, exibição","ordem-z",
];



	var verP = [	// verbos joão neném, app inventor, verbos novos	

"detail","scratch","protect","know","rain","fly","begin","sit","save","drown","sing","complete","connect","type",
"answer","let","leave","translate","guess","come back-go back","dance","fish","follow","mold/pattern","forge","array","wash","blow",

"spread","bite","find","research","step","work","plant","miss-lose","drive","place-put","drag","accept","live","shake","remember","allow",
"install","switch off-turn off","switch","agree","watch","sweep","hit","charge","beat","give","toy","answer","access","fun","round","make",
"help","slider","pedal","pick","rank","cross","quiz","enjoy","enable","has","use","apply","finalize","see","play","rent",
"sell","want","can","change","think","discover","lower","increase","alter","shift","be","need","get","dismiss","learn","rest",

"fix","fail","join",
"win","dream","say","scan","love","handle","feel",
"fill","warn","limit","check","control","process",

"store","set","tell","paint", "touch","appear","repeat","sleep","do","do it","done",
"call","eat","clean","reset","create","finish",

"customize","believe","push","pull","thank","release","attack","decay",
"sustain","keep","hold","try","show","hide",
"attempt","load",

"turn","clamp","pump","pitch","launch","smash","squeeze",
"stretch","brand","collapse","hover","match","champion","throw","assert",
"return"," import","extend","float","mind","split","purchase","sell buy rent",
"pay","take","fuel","rip","move","care","delay","warm",

"cloud","grow","rule","bring","instance","query","forget","cancel",
"got","list","increase-decrease","recognize","retrieve","deal","buy","flow",
"compare","replace","split","trim","up","down","update",
"duplicate","position","welcome","deny","do - does - doing","go - goes - going",

"detail","scratch","protect","rain","fly","begin","sit","like","drown","sing","complete","write","answer","let","leave","translate",
"guess","come back-go back","dance","fish","follow","mold/pattern","forge","array","wash","blow","spread","bite","find","research","step","work",
"plant","miss-lose","drive","place-put","drag","accept","live","shake","remember","allow","install","switch","agree","watch","sweep","hit",
"charge","beat","give","toy","answer","access","fun","round","make","help","slider","pedal","pick","rank","cross","quiz",

"enjoy","enable","has","use","apply","finalize","see","play","rent","sell","want","can","change","think","discover","lower",
"increase","add","alter","shift","be","need","get","dismiss","learn","rest","fix","fail","join","win","dream","say",
"scan","love","handle","feel","fill","warn","limit","check","control","delete","process","store","set","tell","paint","touch",
"file","appear","open","measure","quit","reset","clear","display","cut","copy","paste","repeat","sleep","do","do it","done",

"call","eat","clean","reset","create","finish","customize","believe","push","pull","thank","release","attack","decay","sustain","keep",
"hold","try","show","hide","attempt"," to browse","travel","print","realease","rename","answer","swim","swing",

// confirmar se up e down são verbos
];


	var verR = [

"detalhar","arranhar","proteger","saber", "chover","voar","começar","sentar","salvar","afogar", "cantar","completar","conectar","tipificar/escrever(com máquina)",
"responder","deixar","sair","traduzir","adivinhar","voltar","dançar","pescar","seguir","moldar/modelar","forjar", "arrumar","lavar","soprar/assoprar/ventar",

"espalhar","morder","encontrar/achar","pesquisar","pisar","trabalhar","plantar","perder","dirigir", "colocar/pôr","arrastar","aceitar","viver","agitar","lembrar","permitir",
"instalar","desligar","mudar/trocar","concordar","assistir","varrer","acertar/atingir","carregar","bater","dar","brincar","responder","acessar/cadastrar","brincar","arredondar","fazer",
"ajudar/socorrer","deslizar","pedalar","escolher","classificar","atravessar/cruzar","perguntar/interrogar","apreciar/desfrutar","habilitar","tem","usar","aplicar","finalizar","ver","brincar/jogar","alugar",
"vender","quer/querer","poder","alterar/mudar","pensar","descobrir","diminuir/baixar","aumentar","alterar","deslocar","ser/estar","precisar","obter","demitir","aprender","descansar/repousar",

"consertar/fixar","falhar","juntar",
"vencer/ganhar","sonhar","dizer","examinar","amar","manusear","sentir",
"preencher","advertir","limitar","verificar","controlar","processar",

"armazenar","acertar/determinar","contar/dizer","pintar","tocar","aparecer","repetir","dormir","fazer","faça","feito",
"chamar","comer","limpar/varrer", "redefinir","criar","terminar",

"customizar","crer/acreditar","empurrar","puxar", "agradecer","liberar/libertar","atacar","decair",
"sustentar","manter","segurar", "tentar/experimentar","mostrar","esconder",
"tentar","carregar",

"virar","apertar","bombear","lançar/arremessar","lançar","esmagar","espremer", 
"esticar","marcar","collapse/cair/desmoronar","pairar","corresponder/combinar/igualar/condizer","defender/patrocinar","lançar","afirmar/declarar",
"retornar/voltar","importar","estender/ampliar","flutuar","lembrar-se/prestar atenção","partir","comprar","vender comprar alugar",
"pagar","pegar","abastecer","rasgar","mover","cuidar","demorar/atrasar","aquecer",

"nublar","crescer","reger/governar","trazer"," exemplificar/ilustrar","perguntar","esquecer","cancelar",
"obteve","alistar/registrar","aumentar/diminuir","reconhecer","recuperar","negociar/comprar","comprar","fluir",
"comparar","substituir","partir","aparar","levantar/subir","baixar/descer","atualizar",
"duplicar","posicionar","acolher","negar","fazer - faz - fazendo","ir - vai - indo",

"detalhar","arranhar","proteger","chover","voar","começar","sentar","gostar","afogar","cantar","completar","tipificar/escrever(com máquina)","responder","deixar","sair","traduzir",
"adivinhar","voltar","dançar","pescar","seguir","moldar/modelar","forjar","arrumar","lavar","soprar/assoprar/ventar","espalhar","morder","encontrar/achar","pesquisar","pisar","trabalhar",
"plantar","perder","dirigir","colocar/pôr","arrastar","aceitar","viver","agitar","lembrar","permitir","instalar","mudar/trocar","concordar","assistir","varrer","acertar/atingir",
"carregar","bater","dar","brincar","responder","acessar/cadastrar","brincar","arredondar","fazer","ajudar/socorrer","deslizar","pedalar","escolher","classificar","atravessar/cruzar","perguntar/interrogar",

"apreciar/desfrutar","habilitar","tem","usar","aplicar","finalizar","ver","brincar/jogar","alugar","vender","quer/querer","poder","alterar/mudar","pensar","descobrir","diminuir/baixar",
"aumentar","adicionar","alterar","deslocar","ser/estar","precisar","obter","demitir","aprender","descansar/repousar","consertar/fixar","falhar","juntar","vencer/ganhar","sonhar","dizer",
"examinar","amar","manusear","sentir","preencher","advertir","limitar","verificar"," controlar","excluir/apagar","processar","armazenar","acertar/determinar","contar/dizer","pintar", "tocar",
"arquivar","aparecer","abrir","medir","sair/desistir/partir","redefinir","clarear/remover","exibir","cortar","copiar","colar","repetir","dormir","fazer","faça","feito",

"chamar","comer","limpar/varrer","redefinir","criar","terminar","customizar","crer/acreditar","empurrar","puxar","agradecer","liberar/libertar","atacar","decair","sustentar","manter",
"segurar"," tentar/experimentar","mostrar","esconder","tentar"," navegar","viajar","imprimir","liberar","renomear","responder","nadar","balançar",

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
	ElementById('p3').innerHTML = verR[rndCor];
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
		document.getElementById("Ve").a
	function Ver() {
		var rndCor = Math.floor(Math.random()*(verP.length));
	document.getElementById('p2').innerHTML = verP[rndCor];
	document.getddEventListener("click",Ver);
		document.getElementById("Ad").addEventListener("click",Adj);
		document.getElementById("Tr").addEventListener("click",Tra);
	}
window.addEventListener("load",addEvents);
	
	