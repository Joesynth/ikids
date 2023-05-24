



/*
############################################################
############################################################
######################## VARIÁVEIS #########################
############################################################
############################################################
*/

	var verP = [	// verbos joão neném, app inventor, verbos novos	

"detail","scratch","protect","know","rain","fly","begin","sit","save","drown","sing","complete","connect","type",
"answer","let","leave","translate","guess","come back-go back","dance","fish","follow","mold/pattern","forge","array","wash","blow",
"spread","bite","find","research","step","work","plant","miss-lose","drive","place-put","drag","accept","live","shake","remember","allow",
"install","switch off-turn off","switch","agree","watch","sweep","hit","charge","beat","give","toy","answer","access","fun","round","make",

"help","slider","pedal","pick","rank","cross","quiz","enjoy","enable","has","use","apply","finalize","see","play","rent",
"sell","want","can","change","think","discover","lower","increase","alter","shift","be","need","get","dismiss","learn","rest",
"fix","fail","feel","fill","join","win","dream","say","scan","love","handle","warn","limit","check","control","process",
"store","set","tell","paint", "touch","appear","repeat","sleep","do","do it","done","call","eat","clean","reset","create","finish",

"customize","believe","push","pull","thank","release","attack","decay","sustain","keep","hold","try","show","hide","attempt","load",
"turn","clamp","pump","pitch","launch","smash","squeeze","stretch","brand","collapse","hover","match","champion",
"throw","assert","return"," import","extend","float","mind","split","purchase","sell buy rent","pay","take",
"fuel","rip","move","care","delay","warm","cloud","grow","rule","bring","instance","query","forget","cancel",

"detail","scratch","protect","rain","fly","begin","sit","like","drown","sing","complete","write","answer","let","leave","translate",
"guess","come back-go back","dance","fish","follow","mold/pattern","forge","array","wash","blow","spread","bite","find","research","step","work",
"plant","miss-lose","drive","place-put","drag","live","shake","remember","allow","install","switch","agree","watch","sweep","hit",
"charge","beat","give","toy","answer","access","fun","round","make","help","slider","pedal","pick","rank","cross","quiz",

"enjoy","enable","has","use","apply","finalize","see","play","rent","sell","want","can","change","think","discover","lower",
"increase","add","alter","shift","be","need","get","dismiss","learn","rest","fix","fail","join","win","dream","say",
"scan","love","handle","feel","fill","warn","limit","check","control","delete","process","store","set","tell","paint","touch",
"file","appear","open","measure","quit","reset","clear","display","cut","copy","paste","repeat","sleep","do","do it","done",

"call","eat","clean","reset","create","finish","customize","believe","push","pull","thank","release","attack","decay","sustain","keep",
"hold","try","show","hide","attempt"," to browse","travel","print","realease","rename","answer","swim","swing","debug","continue","blur","alert","enhance","highlight","occur",

"got","list","increase-decrease","recognize","retrieve","deal","buy","flow","compare","replace","split","trim","up","down","update",
"duplicate","position","welcome","deny","do - does - doing","go - goes - going","burn, fire","slice","splice","skip",

"hack","ransom, rescue","deface","sniff","route","dump",
// confirmar se up e down são verbos
];


	var verR = [

"detalhar","arranhar","proteger","saber", "chover","voar","começar","sentar","salvar","afogar", "cantar","completar","conectar","tipificar/escrever(com máquina)",
"responder","deixar","sair","traduzir","adivinhar","voltar","dançar","pescar","seguir","moldar/modelar","forjar", "arrumar","lavar","soprar/assoprar/ventar",
"espalhar","morder","encontrar/achar","pesquisar","pisar","trabalhar","plantar","perder","dirigir", "colocar/pôr","arrastar","aceitar","viver","agitar","lembrar","permitir",
"instalar","desligar","mudar/trocar","concordar","assistir","varrer","acertar/atingir","carregar","bater","dar","brincar","responder","acessar/cadastrar","brincar","arredondar","fazer",

"ajudar/socorrer","deslizar","pedalar","escolher","classificar","atravessar/cruzar","perguntar/interrogar","apreciar/desfrutar","habilitar","tem","usar","aplicar","finalizar","ver","brincar/jogar","alugar",
"vender","quer/querer","poder","alterar/mudar","pensar","descobrir","diminuir/baixar","aumentar","alterar","deslocar","ser/estar","precisar","obter","demitir","aprender","descansar/repousar",
"consertar/fixar","falhar","sentir","preencher","juntar","vencer/ganhar","sonhar","dizer","examinar","amar","manusear","advertir","limitar","verificar","controlar","processar",
"armazenar","acertar/determinar","contar/dizer","pintar","tocar","aparecer","repetir","dormir","fazer","faça","feito","chamar","comer","limpar/varrer", "redefinir","criar","terminar",

"customizar","crer/acreditar","empurrar","puxar", "agradecer","liberar/libertar","atacar","decair","sustentar","manter","segurar", "tentar/experimentar","mostrar","esconder","tentar","carregar",
"virar","apertar","bombear","lançar/arremessar","lançar","esmagar","espremer","esticar","marcar","desabar/cair/desmoronar","pairar","corresponder/combinar/igualar/condizer","defender/patrocinar",
"lançar","afirmar/declarar","retornar/voltar","importar","estender/ampliar","flutuar","lembrar-se/prestar atenção","partir","comprar","vender comprar alugar","pagar","pegar",
"abastecer","rasgar","mover","cuidar","demorar/atrasar","aquecer","nublar","crescer","reger/governar","trazer"," exemplificar/ilustrar","perguntar","esquecer","cancelar",

"detalhar","arranhar","proteger","chover","voar","começar","sentar","gostar","afogar","cantar","completar","tipificar/escrever(com máquina)","responder","deixar","sair","traduzir",
"adivinhar","voltar","dançar","pescar","seguir","moldar/modelar","forjar","arrumar","lavar","soprar/assoprar/ventar","espalhar","morder","encontrar/achar","pesquisar","pisar","trabalhar",
"plantar","perder","dirigir","colocar/pôr","arrastar","viver","agitar","lembrar","permitir","instalar","mudar/trocar","concordar","assistir","varrer","acertar/atingir",
"carregar","bater","dar","brincar","responder","acessar/cadastrar","brincar","arredondar","fazer","ajudar/socorrer","deslizar","pedalar","escolher","classificar","atravessar/cruzar","perguntar/interrogar",

"apreciar/desfrutar","habilitar","tem","usar","aplicar","finalizar","ver","brincar/jogar","alugar","vender","quer/querer","poder","alterar/mudar","pensar","descobrir","diminuir/baixar",
"aumentar","adicionar","alterar","deslocar","ser/estar","precisar","obter","demitir","aprender","descansar/repousar","consertar/fixar","falhar","juntar","vencer/ganhar","sonhar","dizer",
"examinar","amar","manusear","sentir","preencher","advertir","limitar","verificar"," controlar","excluir/apagar","processar","armazenar","acertar/determinar","contar/dizer","pintar", "tocar",
"arquivar","aparecer","abrir","medir","sair/desistir/partir","redefinir","clarear/remover","exibir","cortar","copiar","colar","repetir","dormir","fazer","faça","feito",

"chamar","comer","limpar/varrer","redefinir","criar","terminar","customizar","crer/acreditar","empurrar","puxar","agradecer","liberar/libertar","atacar","decair","sustentar","manter",
"segurar"," tentar/experimentar","mostrar","esconder","tentar"," navegar","viajar","imprimir","liberar","renomear","responder","nadar","balançar","depurar","continuar","manchar","alertar","realçar","realçar","ocorrer",

"obteve","alistar/registrar","aumentar/diminuir","reconhecer","recuperar","negociar/comprar","comprar","fluir","comparar","substituir","partir","aparar","levantar/subir","baixar/descer","atualizar",
"duplicar","posicionar","acolher","negar","fazer - faz - fazendo","ir - vai - indo","queimar","fatiar","emendar","pular",

"retalhar, cortar, picar","resgatar","desfigurar","farejar","rotear","despejar",
];

	var adjP = [	
"previous","beautiful-ugly","clever","new.-old","hard-soft","pretty-ugly","young-old","sweet-salt",
"great-little","large-small","loud-soft","quiet-noisy","quick-slow","strong-weak","far-near","good-bad",
"high-mid-low","long - short.","heavy-light","happy-sad","alive-dead","hot-cold","rich-poor","early-late",
"useful-useless","true, false.","full","tiny","serious","funny","dry-wet","striped",
"thin","slim","fixed","wide","enough","inner/outer","null","void",
];
	
	var adjR = [
"anterior","bonito-feio","esperto/inteligente","novo velho","duro-macio","bonito-feio","jovem-velho","doce-salgado",
"grande-pequeno","grande-pequeno","alto-suave","silencioso-ruidoso","rápido-lento","forte-fraco","longe-perto","bom-mau",
"alto-médio-baixo","longo-curto","pesado-leve","feliz-triste","vivo-morto","quente-frio","rico-pobre","cedo-atrasado",
"útil-inútil","verdadeiro-falso","cheio","minúsculo/ muito pequeno","grave/ sério","engraçado","seco-molhado","listrado",
"fino","fino","fixo","largo","suficiente","interior/exterior","nulo","vazio",
];

	var traf2P = [
//ft:https://www.inglesonline.com.br/placas-de-transito-em-ingles/
// Placas de trânsito em inglês
"traffic sign",
"Ahead only",
"Crossroads",
"Crosswalk (or pedestrian crossing)",
"Dead end street",
"Give way (or Yield)",
"Horn prohibited",
"Narrow bridge",
"No entry",
"No left turn",
"No overtaking",
"No parking",
"No pedestrians",
"No right turn",
"No U-turn",
"One way",
"Parking place",
"Road work",
"School crossing",
"Slippery road",
"Speed bump (or speed hump)",
"Speed Limit (or Maximum speed limit)",
"Stop",
"Traffic light ahead",
"Turn right ahead",
"Turn left ahead",
"Two way traffic",
"Uneven road",
"Wild animals",
"Wrong way ",
];

	var traf2R = [
"sinal de trânsito",
"Siga em frente",
"Cruzamento de Vias",
"Passagem sinalizada de pedestres ou faixa de pedestres",
"Rua sem saída",
"Dê a preferência",
"Proibido acionar buzina ou sinal sonoro",
"Ponte estreita",
"Não entre",
"Proibido virar à esquerda",
"Proibido ultrapassar",
"Proibido estacionar",
"Proibido trânsito de pedestres",
"Proibido virar à direita",
"Proibido Retornar",
"Sentido único ou obrigatório",
"Área de Estacionamento",
"Obras",
"Passagem sinalizada de escolares ou Área escolar",
"Pista escorregadia",
"Saliência ou lombada",
"Velocidade permitida ou velocidade máxima permitida",
"Pare",
"Semáforo à frente",
"Vire à direita a frente",
"Vire à esquerda a frente",
"Duplo sentido de circulação",
"Pista irregular",
"Animais selvagens",
"Sentido proibido, contramão",
];


/*
Placas de trânsito em inglês – Vocabulário

avenue, road, street
avenida, estrada, rua
bend, bridge, corner,sidewalk 
Curva ,ponte ,esquina ,calçada

Blind spot – Ponto cego
Block – Quadra ou quarteirão
Breathalyzer – Bafômetro

Accident – Acidente
Highway ou Freeway – Rodovia ou autoestrada
Bus stop – Ponto de ônibus
Car crash – Acidente de carro, Batida de carro

Crosswalk/Pedestrian crossing/Zebra crossing – Faixa de pedestres
Curb – Meio fio ou guia da calçada
Dead end street – Rua sem saída
Destination – Destino
Detour – Desvio
Downtown – Centro

driver – motorista
passenger – passageiro
pedestrian – pedestre


Driving under the influence (DUI) – Dirigir alcoolizado ou conduzir embriagado
Driver’s licence – Carteira de motorista ou habilitação
Exit – Saída
Gas station – Posto de combustível

Intersection ou Crossroad – Cruzamento
Lane – Pista ou faixa
License plate – Placa do carro
One-way street – Rua de mão única ou sentido único
Overtaking – Ultrapassagem

Parking lot – Estacionamento
Shoulder – Acostamento
Pile-up – Engavetamento
Road signs ou Traffic signs – Sinalização de trânsito ou Sinais de trânsito.
Rotary/Roundabout/Traffic circle – Rotatória
Rush hour – Horário de pico

Speed bump – Lombada
Speed camera – Radar fotográfico
Speed gun ou Radar gun – Radar ou medidor de velocidade manual
Speed limit – Limite de velocidade
Speed trap – Radar de velocidade montado em áreas ou trechos específicos

Ticket ou Fine – Multa
Toll – Pedágio
Traffic cone – Cone de trânsito
Traffic jam – Engarrafamento ou Congestionamento
Traffic lights ou Stoplights- Semáforo
Traffic violation – Infração de trânsito
Vehicle – Veículo
*/

	var comp2P = [	// R é de resposta: Ex: com comR
"kernel","core",
"worm","spy","backdoor","sniffer",
"zombie","scan","defacement","workstation",
"hoax","host",
"firewall",
"bus","ring",
"router","switch",
"open source","free software","freeware",
"bug","hardware",
"log",
"phishing",
];
	
	var comp2R = [
"núcleo","núcleo",
"rastejar-verme-minhoca-lombriga","espião","porta dos fundos-porta de serviço","farejador",
"zumbi","examinar","desfiguração-deformação","estação de trabalho",
"trote","hospedeiro-máquina-computador",
"parede de fogo",
"barramento","anel",
"roteador","interruptor",
"código aberto","soft livre","software gratuito",
"defeito-erro","parte física do computador-equipamento",
"registro",
"defraudar",
];





	var traP = [	// Train
"passenger","sundays and holidays","bathrooms: free use","mind the gap between train and platform",
"next station","boarding","business days: from 6 am to 8 pm","saturdays: from 6 am to 7 pm",
"dear user","the elevator is for exclusive use","to use the elevator please contact the station agent",
];	
//passenger, sundays and holidays, bathrooms: free use, mind the gap between train and platform, next station,boarding, business days, from 6 am to 8 pm, saturdays,  from 6 am to 7 pm, dear user, the elevator is for exclusive use, disabled people, to use the elevator, please contact the station agent, the ticket booth,
// 
	var traR = [
"passageiro","domingos e feriados","banheiros: uso gratuito","lembre-se da diferença entre o trem e a plataforma",
"próxima estação","embarque","dias úteis: das 6 (pré meio-dia) às 8 (pós meio-dia)","sábados: das 6 (pré meio-dia) às 7 (pós meio-dia)",
"prezado cliente/ querido usuário","o elevador é de uso exclusivo","para utilizar o elevador favor acionar o agente da estação",
];	
//passageiro, domingos e feriados, banheiros: uso gratuito, lembre-se da diferença entre o trem e a plataforma, próxima estação,embarque, dias úteis, das 6 (pré meio-dia) às 8 (pós meio-dia), sábados, das 6 (pré meio-dia) às 7 (pós meio-dia), prezado cliente/querido usuário, o elevador é de uso exclusivo, pessoas deficientes/inválidos,  para utilizar o elevador, favor acionar o agente da estação, a bilheteria,
	

/*
	var traP = [	// Train
"passenger","sundays and holidays","bathrooms: free use","mind the gap between train and platform",
"next station","boarding","business days: from 6 am to 8 pm","saturdays: from 6 am to 7 pm",
"dear user","the elevator is for exclusive use","to use the elevator please contact the station agent",
];	
//passenger, sundays and holidays, bathrooms: free use, mind the gap between train and platform, next station,boarding, business days, from 6 am to 8 pm, saturdays,  from 6 am to 7 pm, dear user, the elevator is for exclusive use, disabled people, to use the elevator, please contact the station agent, the ticket booth,
// 
	var traR = [
"passageiro","domingos e feriados","banheiros: uso gratuito","lembre-se da diferença entre o trem e a plataforma",
"próxima estação","embarque","dias úteis: das 6 (pré meio-dia) às 8 (pós meio-dia)","sábados: das 6 (pré meio-dia) às 7 (pós meio-dia)",
"prezado cliente/ querido usuário","o elevador é de uso exclusivo","para utilizar o elevador favor acionar o agente da estação",
];	
//passageiro, domingos e feriados, banheiros: uso gratuito, lembre-se da diferença entre o trem e a plataforma, próxima estação,embarque, dias úteis, das 6 (pré meio-dia) às 8 (pós meio-dia), sábados, das 6 (pré meio-dia) às 7 (pós meio-dia), prezado cliente/querido usuário, o elevador é de uso exclusivo, pessoas deficientes/inválidos,  para utilizar o elevador, favor acionar o agente da estação, a bilheteria,



	var traiiP = [	// Train
"passenger","sundays and holidays","bathrooms: free use","mind the gap between train and platform",
"next station","boarding","business days: from 6 am to 8 pm","saturdays: from 6 am to 7 pm",
"dear user","the elevator is for exclusive use","to use the elevator please contact the station agent",
];	

	var traiiR = [
"passageiro","domingos e feriados","banheiros: uso gratuito","lembre-se da diferença entre o trem e a plataforma",
"próxima estação","embarque","dias úteis: das 6 (pré meio-dia) às 8 (pós meio-dia)","sábados: das 6 (pré meio-dia) às 7 (pós meio-dia)",
"prezado cliente/ querido usuário","o elevador é de uso exclusivo","para utilizar o elevador favor acionar o agente da estação",
];	
*/

	var phrrPb = [

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

	var phrrRb = [

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

	var nouP = [
"snippet","width, height and length",
"log","root","hoax","network","ring",
"language",


"adult","child","kid","morning","afternoon","night","evening","father"," tag","path","row","tooth","girl","boy","person",
"mother","God","son","angel","answer","response","thing","clock",

"app"," date",
"canvas","screen","empty","void","tool"," device","message","city","school","street","square"," hospital","church","plant","field"," backpack"," sprite","  spring or summer","autumn or winter","fruits and flowers ","clock and hour"," trees and leaves","wind and beach","band and instruments","donkey or monkey"," pictures and text",
];	

	var nouR = [
"trecho, recorte","largura, altura e comprimento",
"registro","raiz","trote, farsa, boato,","rede","anel",
"idioma, linguagem",


"adulto","criança","criança","manhã","tarde","noite","noite","pai"," etiqueta"," caminho"," linha"," dente"," menina"," menino"," pessoa",
" mãe"," deus"," filho"," anjo"," resposta"," resposta"," coisa"," relógio",

" aplicativo"," data",
" tela"," tela"," vazio"," vazio"," ferramenta"," dispositivo"," mensagem"," cidade"," escola"," rua"," praça"," hospital"," igreja"," planta"," campo"," mochila"," espírito","  primavera ou verão","outono ou inverno","frutas e flores","relógio e hora"," árvores e folhas","vento e praia","banda e instrumentos","burro ou macaco"," figuras e texto",
];

	var EduP = [
"excuse","excuse me","good morning","good afternoon","good evening","good night","hi","hello"," welcome","sorry","bye","goodbye","thanks","thank you","thanks very much","thank you very much"," Good night. Sweet dreams.","please","ladies"," gentlemen"," gents",
];

	var EduR = [
"desculpa"," com licença"," bom dia"," boa tarde"," boa noite"," boa noite"," oi"," olá"," Bem-vindo"," desculpe"," tchau"," adeus"," obrigado"," obrigado"," muito obrigado"," muito obrigado"," Boa noite. Bons sonhos."," por favor"," senhoras"," cavalheiros"," cavalheiros",
];

	var traiiP = [	// Train
"passenger","sundays and holidays","bathrooms: free use","mind the gap between train and platform",
"next station","boarding","business days: from 6 am to 8 pm","saturdays: from 6 am to 7 pm",
"dear user","the elevator is for exclusive use","to use the elevator please contact the station agent",
];	

	var traiiR = [
"passageiro","domingos e feriados","banheiros: uso gratuito","lembre-se da diferença entre o trem e a plataforma",
"próxima estação","embarque","dias úteis: das 6 (pré meio-dia) às 8 (pós meio-dia)","sábados: das 6 (pré meio-dia) às 7 (pós meio-dia)",
"prezado cliente/ querido usuário","o elevador é de uso exclusivo","para utilizar o elevador favor acionar o agente da estação",
];	

//num
	var nummP = [
"eleven", "thirteen", "ninety", "seventy","nineteen", "two thousand", "three hundred", "eight", 
"eight hundred","thousand","four thousand","seven thousand","twelve","two hundred","nine hundred","ten", 
"forty nine", "fifty", "sixty", "seventy","number one", "three", "twenty thousand","one thousand and one",
];	
//eleven,thirteen,ninety,seventy, nineteen,two thousand,three hundred, eight,eight hundred,thousand,four thousand,seven thousand, twelve,two hundred,nine hundred, ten, forty nine,fifty,sixty,seventy, number one,three,twenty thousand,one thousand and one, ten dollars and fifty cents,twenty dollars and seventy cents,first,second, third,

	var nummR = [
"onze", "treze", "noventa", "setenta","dezenove", "dois mil", "trezentos", "oito", 
"oitocentos", "mil", "quatro mil", "sete mil","doze", "duzentos", "novecentos","dez", 
"quarenta e nove", "cinquenta", "sessenta", "setenta","número um", "três", "vinte mil","mil e um",
];
//onze,treze, noventa,setenta,dezenove,dois mil,trezentos, oito,oitocentos,mil,quatro mil,sete mil, doze, duzentos,novecentos, dez,quarenta e nove, cinquenta, sessenta, setenta, número um, três, vinte mil, mil e um, dez dólares e cinquenta centavos, vinte dólares e setenta centavos, primeiro, segundo, terceiro,

	var ProP = [	// Antes profissão, agora internet
"hacker",
"hoax",
"firewall",
"spam",
"spammer",
"bot",
"phishing",
];

	var ProR = [
"origem 'hack': cortar",
"boato",
"parede de fogo (um anti-hacker)",
"mensagem eletrônica não solicitada",
"autor de spam",
"robô",
"pescando, pescaria (um tipo de site falso)",
];

	var shirP = [
"The life is better when you relax",
"What goes around comes around",
];

	var shirR = [
"A vida é melhor quando você relaxa",
"O que vai volta",
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
		function verb2 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(verP.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= verP[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = verR[i]; // Idem no display resposta.
document.querySelector('#p5').innerHTML = verR[i]; // Idem no display emoji.
	}

		function adje2 () {
var i = `${ran(adjP.length)}`;
document.querySelector('#p6').innerHTML= adjP[i];
document.querySelector('#p7').innerHTML = adjR[i];
document.querySelector('#p5').innerHTML = adjR[i];
	}



	function noum2() {
	//	var rndCor = Math.floor(Math.random()*(nouP.length));
	//document.getElementById('p2').innerHTML = nouP[rndCor];
	//document.getElementById('p3').innerHTML = nouR[rndCor];
		 var rndCor = Math.floor(Math.random()*(nouP.length));
		 var rndCor2 =  nouP[rndCor];
		
	    document.getElementById('p7').innerHTML = nouR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function traf2() {
	//	var rndCor = Math.floor(Math.random()*(phrrPb.length));
	//document.getElementById('p2').innerHTML = phrrPb[rndCor];
	//document.getElementById('p3').innerHTML = phrrRb[rndCor];
		 var rndCor = Math.floor(Math.random()*(traf2P.length));
		 var rndCor2 =  traf2P[rndCor];
		
	    document.getElementById('p7').innerHTML = traf2R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function comp2() {
	//	var rndCor = Math.floor(Math.random()*(comP.length));
	//document.getElementById('p2').innerHTML = comP[rndCor];
	//document.getElementById('p3').innerHTML = comR[rndCor];
		 var rndCor = Math.floor(Math.random()*(comp2P.length));
		 var rndCor2 =  comp2P[rndCor];
		
	    document.getElementById('p7').innerHTML = comp2R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}





	function trai2() {
	//	var rndCor = Math.floor(Math.random()*(traP.length));
	//document.getElementById('p2').innerHTML = traP[rndCor];
	//document.getElementById('p3').innerHTML = traR[rndCor];
		 var rndCor = Math.floor(Math.random()*(traP.length));
		 var rndCor2 =  traP[rndCor];
		
	    document.getElementById('p7').innerHTML = traR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function phra2() {
	//	var rndCor = Math.floor(Math.random()*(phrrPb.length));
	//document.getElementById('p2').innerHTML = phrrPb[rndCor];
	//document.getElementById('p3').innerHTML = phrrRb[rndCor];
		 var rndCor = Math.floor(Math.random()*(phrrPb.length));
		 var rndCor2 =  phrrPb[rndCor];
		
	    document.getElementById('p7').innerHTML = phrrRb[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}


		function educ () {
		//var rndCor = Math.floor(Math.random()*(phrrP.length));
	//document.getElementById('p6').innerHTML = phrrP[rndCor];
	//document.getElementById('p7').innerHTML = phrrR[rndCor];
		 var rndCor = Math.floor(Math.random()*(EduP.length));
		 var rndCor2 =  EduP[rndCor];
		
	    document.getElementById('p7').innerHTML = EduR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

		function trai() {
		 var rndCor = Math.floor(Math.random()*(traiiP.length));
		 var rndCor2 =  traiiP[rndCor];
		
	    document.getElementById('p7').innerHTML = traiiR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
		}

		function nume() {
		 var rndCor = Math.floor(Math.random()*(nummP.length));
		 var rndCor2 =  nummP[rndCor];
		
	    document.getElementById('p7').innerHTML = nummR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
		}

		function prof () {
		//var rndCor = Math.floor(Math.random()*(phrrP.length));
	//document.getElementById('p6').innerHTML = phrrP[rndCor];
	//document.getElementById('p7').innerHTML = phrrR[rndCor];
		 var rndCor = Math.floor(Math.random()*(ProP.length));
		 var rndCor2 =  ProP[rndCor];
		
	    document.getElementById('p7').innerHTML = ProR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

			function shir () {
		 var rndCor = Math.floor(Math.random()*(shirP.length));
		 var rndCor2 =  shirP[rndCor];
		
	    document.getElementById('p7').innerHTML = shirR[rndCor];      // text2 display r
	    
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
		// SCREEN 2
		document.getElementById("shir").addEventListener("click",shir);
		document.querySelector('#shir').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "SHIRT";});
		document.getElementById("prof").addEventListener("click",prof);
		document.querySelector('#prof').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "INTERNET";});
		document.getElementById("nume").addEventListener("click",nume);
		document.querySelector('#nume').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "NUMBER";});
		document.getElementById("trai").addEventListener("click",trai);
		document.querySelector('#trai').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "TRAIN";});
		document.getElementById("educ").addEventListener("click",educ);
		document.querySelector('#educ').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "EDUCATION";});
		document.getElementById("verb2").addEventListener("click",verb2);
		document.querySelector('#verb2').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "VERB";});
		document.getElementById("adje2").addEventListener("click",adje2);
		document.querySelector('#adje2').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "ADJECTIVE";});

		document.getElementById("noum2").addEventListener("click",noum2);
		document.querySelector('#noum2').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "NOUM";});
		document.getElementById("traf2").addEventListener("click",traf2);		
		document.querySelector('#traf2').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "TRAFFIC SIGN";});
		document.getElementById("comp2").addEventListener("click",comp2);
		document.querySelector('#comp2').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "COMPUTER";});

		document.getElementById("trai2").addEventListener("click",trai2);
		document.querySelector('#trai2').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "TRAIN 2";});

		document.getElementById("phra2").addEventListener("click",phra2);
		document.querySelector('#phra2').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "PHRASES 2";});
	}
window.addEventListener("load",addEvents);