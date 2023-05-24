












/*
############################################################
############################################################
######################## VARIÁVEIS #########################
############################################################
############################################################
*/

	var andr3P = [
//Settings, network; Definições, redes
"Dual SIM Card","Mobile data",
"Call","Share & connect",
"Tethering & networks",
];

	var andr3R = [
"dual SIM, cartão duplo SIM","dados móveis",
"chamadas","compartilhar e conectar",
"conexões e redes",
];



	var ubun3P = [	//Linux
"Linux Architecture",
"Linux adopters.",
"Linux distribution (Distro)",

"Distros - examples",
"terminal or console",
"root (or superuser)",
"repository",

"GNU GRUB or GRUB (GRand Unified Bootloader)",
"kernel",
"package manager",
"GUI (Graphical User Interface)",

"Linus Torvalds and Richard Stallman",
];

	var ubun3R = [
"Arquitetura Linux",
"Adotadores do Linux",
"Distribuição Linux",

"",
"terminal ou console",
"raiz (ou superusuário)",
"repositório",

"",
"núcleo",
"gerenciador de pacotes",
"Interface Gráfica de Usuário",

"",
];

	var ubun3ReEx = [	// UPDATE: ESTE CAMPO AINDA NÃo FOI CRIADO NO DISPLAY.
"Estrutura. Partes na estrutura do sistema Unix/Linux:1. Kernel: o núcleo (máquina). <br>2. Shell: interpretação entre usuário máquina. 3. Ferramentas e Aplicativos: onde interage o usuário final.",
"Organizações que usam nos EUA: Bolsa de Valores (NY)/ NASA/ Submarinos militares/ Wikipedia/ Google/ Facebook... Outros países: Parlamento Francês/ Cuba/ Trem-bala (Japão)",
"É um sistema operacional com todo seu conjunto de softs e o núcleo Linux. Uma distribuição pode ser pra computador pessoal (Ex: ) ou mesmo  (Ex: ). Há centenas de distribuições (sistemas operacionais).",

"Computador pessoal: Linux Mint, Ubuntu; supercomputador: Scientific Linux;   smartphone/tablet:  Ubuntu Touch. Outros: Debian, Manjaro, Red Hat, SuSE...",
"Programa usado para dar comandos via teclado ao Linux.",
"Tipo de usuário o qual tem permissões especiais (para instalar programas por exemplo).",
"Conjunto de ligações e pacotes de software normalmente hospedados na internet.",

"É um carregador de boot.",
"É o núcleo do sistema.",
"Permite instalar e desinstalar aplicações junto com suas dependências. Pode ser do tipo gráfica ou em modo texto.",
"Parte gráfica dos programas.",

"Respectivamente, criador do Kernel Linux e o Fundador do movimento do software livre.",
];


/*

//Settings
"backgroun",
"dock",
"notifications",
"search",
"region & language",
"online accounts",
"privacy",
"sharing",
"sound",
"power",
"network",
"devices",
"detais",

//Settings, details
"about",
"date & time",
"users",
"default aplications",

//Settings, devices
"displays",
"keyboard",
"mouse & touchpad",
"printers",
"media removable",
"thunderbolt",
"wacom tablet",
"color",
"display mode",
"display arrangement",
"",

//Settings, sharing
"computer name",

*/

var Wind3P = [
"diamond","arrow","up arrow","down arrow"," five-point star","resize","edit colours","full screen"," show or hide","view","rulers","display"," fill with colour","picker","magnifier","close"," undo","redo","Not a fan.","I like it!","shut down","settings","restart"," file explorer","quick acess","desktop","documents"," pictures","music","help","file"," home","share","view","folder"," properties","history","select all","select none"," invert selection","search quick acess","name","size"," more","items","system","devices"," network & internet","personalisation","accounts","time & language"," ease of acess","privacy","update & security","about"," notifications","windows","processor"," system type","welcome","Remove from Quick acess","Send to","Create shortcut","Open file location",
];

var Wind3R = [
"diamante"," seta"," seta para cima"," seta para baixo"," estrela de cinco pontos"," redimensionar"," editar cores"," tela cheia"," mostrar ou ocultar"," visualizar"," regras"," exibir"," preencher com cor"," seletor"," lupa"," fechar"," desfazer"," refazer"," não é um fã."," eu gosto disso!"," desligar"," configurações"," reiniciar"," explorador de arquivos"," acesso rápido"," desktop"," documentos"," fotos"," música"," ajuda"," arquivo"," casa"," compartilhar"," visualizar"," pasta"," propriedades"," histórico"," selecione tudo"," selecione nenhum"," Inverter seleção"," procurar acesso rápido"," nome"," tamanho"," mais"," itens"," sistema"," dispositivos"," rede e internet"," personalização"," contas"," tempo e idioma"," facilidade de acesso"," privacidade"," atualização e segurança"," sobre"," notificações"," janelas"," processador"," Tipo de sistema"," bem-vindo"," Remover do acesso rápido"," Enviar para"," Criar atalho"," Abrir o local do arquivo",
];

	var comp3P = [
"plugin","stack","stream",
"means","pipe","template",
"string","parser","patch",
"path","thread",
];	
	var comp3R = [
"módulo-extensão","pilha","fluxo",
"meios","duto","modelo",
"","analisador","remendo",
"caminho","",
];

	var comp3ReEx = [ // UPDATE
"","","",
"","","",
"cadeia de caracteres-cadeia","analisador sintático","componente de atualização",
"fluxo de execução-linha de execução-processo leve-segmento",
];



	var hard3P = [
"hardware",
"processor",
"processor - examples",

"memory",
" Primary storage, main memory, internal memory, prime memory",
" Secondary storage, external memory, auxiliary storage",
" Tertiary storage, tertiary memory",

" Armazenamento Temporário",     // TERMO EM INGLESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
" virtual memory",
" Chipset",
" Input device",
" Output device",
" I/O device",
" Client",
" Server",
" Byte",
];
	var hard3R = [		// Somente resposta da tradução do termo.
"parte física (do computador)",
"processador",
"processador - exemplos",

"memória",
"Memória Principal",
"memória secundária",
"memória terciária",

"armazenamento temporário",
"memória virtual",
"",
"dispositivo de entrada",
"dispositivo de saída ",
"dispositivo de entrada/saída",
"cliente",
"servidor",
"byte (medida)",
];


	var hard3ReEx = [  //UPDATE: campo texto com resposta explicativa. ESTE CAMPO AINDA N EXISTE NO DISPLAY DO APP ! ! ! 
"Parte física do computador (ou outro equipamento digital). Refere-se as peças (chips/ processadores/ encaixes/ fios/ teclas...)",
"Cérebro do computador. Componente realmente ativo e que executa as instruções determinadas pelo soft do computador. Componentes internos (do processador). ULA (Unidade Lógica e Aritmética)/ UC (Unidade de controle)/ registradores e outras.",
"Intel, AMD, Fujitsu (SPARC), NVIDIA (Tegra), MCST...",

"Dispositivo que permite ao computador guardar dados temporariamente ou permanentemente. A Unidade básica de memória é o bit (digito binário).",
"RAM. Memória de trabalho. Guarda dados e programas enquanto estão sendo processados.",
"Exemplo: HD ou CD. Memória externa. Memória de armazenamento em massa; para armazenamento permanente (não volátil).",
"Memória secundária mas que depende de montagem. Ex: fitas magnéticas ou discos ópticos.",

"Memória Cache: Memória do microprocessador. Trabalha numa velocidade tão alta quanto ele consegue (está interligada diretamente nos processadores).",
"Técnica que usa a memória secundária como uma cache para armazenamento secundário. Consiste em recursos de hardware e software.",
"Distribui e gerencia informações e funções do PC para o processador/ RAM/ HD/ placa de áudio...",
"Exemplos: keyboard/ mouse/ microfone...",
"Exemplos: monitor/ printer/ caixa de som/alto-falante/",
"Dispositivo de I/O com ambas funcionalidades. Dispositivos para comunicação entre computadores (modems/ network cards)/ fita magnética/ drives (disquete/ CD/ DVD)/ disco rígido/ pendrive.",
"Usuário que acessa um site.",
"Onde um site está hospedado (guardado) e quem serve o conteúdo para o cliente.",
"Igual a 8 bit. Octeto. Nibble (semioctecto) é a metade de um byte.",
];

/* 
hard3P      !!! UPDATE

"32-bit - computer architecture, x86 architecture",
"64-bit - computer architecture",

hard3R - resposta explicativa

"Arquitetura 32-bit (X86). Processador que manipula 32 bits de uma só vez (num único ciclo de clock). É baseado na arquitetura da família Intel 8086.",
"Arquitetura 64-bit. Processador criado para lidar com sistemas operacionais e aplicativos de 64-bit. Athlon 64 (AMD/2003) foi o primeiro para computador pessoal. Nota: micro 32-bit não pode ter instalado SO de 64-bit.",
*/

var soft3P = [
"",
"",
"",
"",
"",
"",
"",
"",
"Plug-in/ Add-in/ Add-on/ Snap-ins(Windows)",
//Termos Comuns
"Adware (advertisement software)",
"Firmware",
//Soft quanto a aquisição e código
"Open Source/ OSI.",
"Free Software",
"Freeware",
"Open Source",
"",
"Shareware",
"",
//
"",
//Soft - Organizações
"FSF (Free Software Movement)",
"OSI (Open Source Initiative)",
"",
];

var soft3R = [
"Software Básico",
"Software de Sistema",
"Software Utilitário",
"Software Aplicativo",
"Software Utilitário (Exemplos)",
"Software Aplicativo (Exemplos)",
"SO (Sistema Operacional)",
"SO (Exemplos)",
"",
//Termos Comuns
"",
"",
//Soft quanto a aquisição e código
"",
"",
"",
"",
"Open Source (Exemplos)",
"",
"Software Livre",
//
"Soft - Licença GPL ou GNU GPL (GNU General Public License)",
//Soft - Organizações
"",
"",
"OSI (Open Source Initiative) (Exemplos)",
];


var soft3REx = [	// Resposta explicativa.   UPDATE ! ! ! EXTE CAMPO NÂo EXISTE No DISPLAY Do APP
"Software Básico. Vital; é básico/gerente. Gere todo hard e outros softs. Dá vida ao computador e sem ele não funciona. Ex: Windows/ Linux(incluso kernel).",
"Software de Sistema. Age no computador em baixo nível (num nível muito básico e diretamente com o hardware). Ex: sistema operacional/ firmware/ driver de dispositivo/interface gráfica.",
"Software Utilitário. Não é vital para funcionar o computador; muito útil ele supri o sistema operacional. Ex: Anti-vírus/ Backup.",
"Software Aplicativo. É dispensável para o computador. Oferece praticidade ou ajuda ao usuário. Ex: navegadores (como Firefox) ou softs de escritório (como LibreOffice).",
"Software Utilitário (Exemplos): Anti-vírus/ backup (online por exemplo)/ gerenciamento de arquivos (CLI)/ compressão de dados (zip ou rar...).",
"Software Aplicativo (Exemplos). Navegadores: Firefox/ Safari/ Chromium/ Blisk.",
"SO (Sistema Operacional). Gere memórias primárias/ secundárias/ dispositivos de entrada e saída/ etc. O SO é um conjunto de programas que inclui agregados como firewall ou navegador. Estes softs são instalados juntos com o próprio SO.",
"SO (Exemplos). Unix/ MacOS/ TRON project/ FreeBSD (Berkeley)/ diversas distribuições Linux/ Sistemas operacionais para dispositivos móveis (Firefox OS/Android/iOS).",
" Termos diferentes para módulo de extensão. O módulo aumenta os recursos doutro programa maior (trazendo uma função específica para o programa principal).",
//
"Adware (advertisement software). Software de propaganda/ software de anúncio.",
"Firmware. Soft armazenado no próprio CI (Circuito Integrado). Isto é feito na fabricação do componente. Ex: BIOS.",
//Soft quanto a aquisição e código
"Open Source/ OSI. Código Aberto",
"Free Software. Soft livre/ FSF.",
" Software gratuito. Uso não implica no pagamento de licenças de uso ou royalties. Funcionalidades completas por tempo ilimitado sem custo monetário. A licença pode restringir o tipo de uso (como uso para fins não lucrativos/ não comerciais/uso acadêmico entre outros). Indica licença gratuita para uso não comercial. Pode não ter código aberto.",
"Open Source: Código aberto. Modelo que permite que qualquer um consulte ou examine ou ainda modifique o produto.",
"Open Source (Exemplos): Vim (text editor)/ GIMP/ VLC media player. Organizações Apache Software Foundation (servidor Web Apache)/ a Linux Foundation/ a Fundação Eclipse (soft Eclipse)/ Projeto Debian (Debian GNU/Linux)/ Fundação Mozilla (browser Firefox)/ OW2 (comunidade europeia que desenvolve middleware)/ Wordpress.",
"Shareware. Gratuito mas com alguma limitação; ou após o tempo de uso gratuito o usuário é requisitado a pagar para acessar a funcionalidade completa ou continuar utilizando o programa. É protegido por direitos autorais.",
"Software Livre. Software Livre/ FSF.",
//
"Soft - Licença GPL ou GNU GPL (GNU General Public License). Licença Pública Geral GNU. Criada inicialmente para o Projeto GNU. Ex: LibreOffice/ GIMP/ Linux. Há outros tipos de lincenças (como BSD/ MIT/ MPL).",
//Soft - Organizações
"FSF (Free Software Movement). Movimento do Software Livre. Organização que usa o termo Software Livre voltado a liberdade bem como questões éticas ou direitos. Pode ter código aberto e possibilitado para modificações.",
" OSI (Open Source Initiative). Iniciativa pelo código aberto. Organização criada para incentivar uma aproximação de entidades comerciais com o software livre. Ela usa o termo Código Aberto sob ótica puramente técnica evitando (propositadamente) questões éticas. Argumenta-se que soft é prioritariamente algo técnico. Promove o software de código aberto ou software livre nesse contexto.",
"OSI (Open Source Initiative) (Exemplos).Iniciativa pelo código aberto. Ex: Linux Foundation/ Mozilla Foundation...",
];



	var SegPc = [
// Termos Comuns
/*
"Ameaça",
"Hacker",
//Princípios da Segurança
" Confidencialidade",
" Integridade",
" Disponibilidade",
" Autenticidade",
// Codificação
" Criptografia",
" Criptografia: Simétrica",
" Criptografia: Assimétrica",
//
" Assinatura Digital",
" Não-repúdio (Irretratabilidade)",
" Certificação Digital",
" Certificado Digital",
*/
//Malware
"malware (malicious software)",
"virus",
"worm",
"bot",

"zumbi (bot)",
"botnet (bot)",
"Trojan Horse",
"spyware",

"keylogger",
"backdoor",
"rootkit",
"sniffer",

"ransomware",

//Spam e tipo de Spam
"spam",
"spammer",
"spamming",
"spit",
"spim",
"spam zombie",

//Ataque, tipos de ataque
"scan",
"sniffing",
"spoofing",
"brute-force",
"defacement",
"DoS (Denial-of-service attack/DoS attack)",
"DDos (distributed denial-of-service, Distributed DoS)",

//Tipos de golpe
"phishing",
"pharming",
"hoax",

// Defesa
"firewall",
"Firewall Pessoal",
"Antimalware (antivirus)",
"Antispyware",
"Antispam",
];

	var SegRc = [
"software malicioso, programa malicioso.",
"vírus",
"verme",
"robô",

"",
"rede robô/ rede de bots/ rede de robôs",
"Cavalo de Troia",
"software espião",

"",
"porta dos fundos",
"",
"farejador",

"",

//Spam e tipo de Spam
"mensagem eletrônica não solicitada",
"autor de spam",
"",
"",
"",
"",

//Ataque, tipos de ataque
"varredura",
"",
"",
"força bruta",
"Desfiguração",
"Ataque de Negação de Serviço",
"Ataque Distribuído de Negação de Serviço",

//Tipos de golpe
"",
"",
"boato",

// Defesa
"parede de fogo",
"",
"Antivírus",
"",
"",
];


	var SegRcReEx = [	// UPDATE
// Termos Comuns
/*
"Tudo aquilo que vai contra os princípios da segurança.","Pode acessar nosso computador para furtar dados.","Sigilo. Garantia da informação ser lida ou acessada só por pessoas autorizadas (como por exemplo num banco). Recurso: Criptografia.","Íntegra. Informação sai da origem e chega no destino sem ser alterada. Recurso: Assinatura digital.","Disponível. Garantia da informação estar sempre disponível para o usuário autorizado buscar quando necessitar. Ex: Banco faz backup sempre.","Identidade. Garantia de que a informação seja autentica. Documentos autênticos/ verdadeiros. Esse princípio garante que a informação provém de quem realmente diz ser. Recurso: Login e senha/ assinatura digital.","Ela codifica ou embaralha os dados para se alguém ver ou interceptar não entender. Depois há a decriptação. Garante a confidencialidade (sigilo) na informação (dados).","Usa-se a mesma chave tanto para criptografar como descriptografar.","Usa-se chaves diferentes. Há um par de chaves. Uma criptografa e outra decodifica.","Chave Pública criptografa (pode ser conhecida por diversas pessoas). Chave Privada decodifica (guardada daquela única pessoa).","Garante: Autenticidade (a pessoa que assina é a própria/ é quem diz ser). Integridade (a assinatura é referene a tal documento/ mensagem/ transação). Não repúdio.","Garante autenticidade e integridade. ICP Brasil: é oficial e dá validade jurídica. Futuramente a pessoa que assinou não tem como dizer que não foi ela (pois o meio jurídico não concordará). Uma vez assinado não poderá negar perante o meio jurídico.","Identidade no mundo virtual. Pode-se criptografar documentos/ assinar digitalmente documentos. Permite a identificação segura do autor de uma mensagem ou transação feita em meios eletrônicos.","Permite desenvolver o processo de criptografia.Pode-se tanto criptografar como assinar digitalmente mensagens/ documentos/ transações.",
*/
// Malware
"Exemplo: vírus, worm, Cavalo de Troia, spyware...",
"Programa (ou parte). É diferente do Worm. Usa um arquivo hospedeiro pra funcionar. Não age de forma independente. Pode se replicar. Se multiplica utilizando-se doutros arquivos/programas. Se multiplicam/ se propagam infectando. Ex: vírus/ worms/ Cavalo de Troia...",
"É diferente do vírus. Não embuti cópias em outros programas. Não fica dentro de arquivos/programas. Não precisa de um hospedeiro pra funcionar. Não precisa estar dentro de um arquivo/programa. O worm é o próprio arquivo/programa. Pode-se replicar.",
"Abreviação de robot. Programa instalado no computador do usuário (por um hacker/ cracker). Se propaga usando a mesma ideia do worm (propagação automática explorando vulnerabilidades de segurança do sistema).",

"É o computador que tem um bot instalado e controlado pelo invasor. O dono do computador fica alheio.",
"Rede de computadores zumbis criados pelo invasor. Se comunica remotamente com o invasor que controla as ações do bot (dizendo o que ele vai executar).",
"Programa que parece inofensivo ou até um presente (como cartão virtual/ álbuns de foto/ protetor de tela/ jogo) e daí o instalamos. Um jogo além de jogo executará outras funções sem a ciência do dono.",
"Monitora (espiona) o sistema/computador. Tem uso ético ou não: exemplo: pais ou empresas monitorando seus filhos ou funcionários.",

"Tipo de spyware que registra o que digitamos no teclado e envia os dados pro espião. Ex: pode nos monitorar quando estamos num site de banco ou ecommerce. Para se defender os bancos criaram o teclado virtual o qual o cliente digita com mouse.",
"Recurso de programa que abre portas do computador e dá acesso remoto para retorno do invasor. Pode ser adquirido inocentemente executando Cavalo de Troia.",
"Kit de programas instalados no computador do usuário/ um conjunto de programas. Se esconde dos programas de segurança.",
"Farejador de pacote. Captura pacotes dentro de uma rede. Uso ético: monitora e analisa o tráfego de rede para detectar problemas e manter um fluxo eficiente. Uso malicioso: Pode ser instalado no computador do atacante (que vai monitorar um computador de usuário na rede).",

"Sequestra arquivos para serem devolvidos (mediante pagamento).",


//Spam e tipo de Spam
"Mensagem eletrônica não solicitada, normalmente enviada a muitas pessoas. Dissemina propaganda/ mitos/ lendas/ correntes/ boatos/ pornografia/ programas maliciosos/ golpes.",
"",
"envio em massa de mensagens não-solicitadas",
"Spam via telefonia ip.",
"Spam via aplicativos de trocas de mensagens instântânesas (icq/ msn).",
"Computadores infectados por worms ou bots, daí controlados por spammers.",

//Ataque, tipos de ataque
"Efetua buscas em redes. Verifica os computadores ativos e coleta informações sobre eles.",
"Fareja a rede e intercepta dados relevantes. Usa programa sniffer.",
"Mascara algo. Há o e-mail spoofing e o IP spoofing.",
"Atacante visa descobrir usuário e senha via tentativa/erro ou mesmo programas automáticos.",
"Deformação alterar/ desconfigurar ou pixar o conteúdo. Defacer é o atacante quem realiza.",
"Visa o servidor deixar de oferecer o serviço.",
"Ataque semelhante ao DoS porém simultâneo devido uso de botnet. Por sobre carga do sistema o servidor para.",

//Tipos de golpe
"Site falso onde usuário é induzido a ir para ele e passar dados pessoais.",
"Site falso devido servidor DNS ter sido atacado e consequentemente nos levando ao site falso. Mesmo se pesquisarmos na internet o site correto seremos levados ao falso.",
"Denigre imagem de pessoa ou empresa (onde autor aparentemente tem fidelidade/ credibilidade.",

// Defesa
"Um anti-hacker. Mecanismo que atua como defesa de um computador (ou rede). Age como barreira de proteção controlando o tráfego de dados entre seu computador e a internet (ou entre a rede onde está instalado seu computador e a internet). Visa permitir somente a transmissão e a recepção de dados autorizados.",
"Geralmente é implementado pelo sistema operacional ou soft de terceiros (incluíndo pacotes de antivírus do tipo Internet Security). O Windows Firewall por exemplo possui Regras de Entrada e Regras de Saída (além doutros recursos).",
"Verifica existência de vírus e remove.",
"Exemplo: Windows Defender (no Vista e Windows 7).",
"Protege contra mensagens não solicitadas (em parte por elas poderem conter algum malware).",
];



var RedPc = [
"O que é? (Rede)",
" O que pode ter ligado (na Rede)",
" O que a rede compartilha",
" Intranet (Rede)",
" Extranet (Rede)",
" Classificação (da Rede)",
" VPN (Virtual Private Network) (Rede)",

//Classificação - Extensão Geográfica
" LAN - Local Area Network",
" WAN - Wide Area Network",
" MAN - Metropolitan Area Network",
//
" Classificação - por Topologia",
//Topologia
" Bus",
" Ring",
" Estrela",
" Malha",
" Híbrida",
//Hardware
" Router",
" Switch",
" Hub",
" Gateway",
" Modem (caseiro)",
//
" Workstations",
" Servidor",
" Interface de Rede (placa de rede)",
" Cabos",
" Modelo OSI (Open Systems Interconnection)",
];

var RedRc = [
"",
"",
"",
"Rede interna",
"",
"",
"Rede Privada Virtual",

//Classificação - Extensão Geográfica
"Rede de Área Local",
"Rede de Área Alargada ou Rede de Longa Distância",
"Rede de Área Metropolitana",
//
"",
//Topologia
"Barramento",
"Anel",
"Estrela",
"",
"",
//Hardware
"Roteador",
"Comutador",
"Concentrador",
"Portão de entrada",
"Modulador/ demodulador",
//
"Estações de trabalho. ",
"",
"",
"",
"",
];





var RedRcReEx = [	//UPDATE
"Conjunto de dispositivos ligados que podem trocar informações entre si além de compartilhar recursos e aplicativos.",
"Computadores (PCs/ tablets/ smartphones...); impressora/ servidores de arquivo/ câmeras de vigilância...",
"Arquivos/ dados.",
"Rede privada usada num determinado local. Está assentada sobre protocolos da internet. É uma forma de internet (podendo ou não estar conectada).",
"Uma intranet que pode ser acessada via Web mas com restrições de segurança aos seus dados corporativos (por clientes ou outros usuários autorizados). Disponibiliza dados para fornecedores ou representantes ou ainda clientes.",
"Pode ser por extensão geográfica (é o tamanho da rede: LAN/WAN/MAN...). Pode ser por topologia (Ring/Mesh/Bus...). Pode ser pela transmissão (cabo/sem fio...) ou ainda arquitetura da rede (Ethernet/DSL...).",
"Rede de comunicações privada construída sobre uma rede de comunicações pública (ex: a Internet). O tráfego de dados é levado pela rede pública utilizando protocolos padrões (não necessariamente seguros).",

//Classificação - Extensão Geográfica
"Rede local/rede interna. A LAN é tudo que está do modem(roteador) para dentro de sua casa ou empresa. É grande ou pequena conforme a quantidade de computadores que nela está. Pode ser dispositivos como switch/ computadores clientes/ wireless/ servidor...",
"Exemplo: Internet (conglomerado de redes locais interconectadas globalmente).",
"Exemplo: cidades digitais.",
//
"  Topologia: forma como os dispositivos ficam colocados na rede. Layout da rede (desenho da rede).",
//Topologia
"Todos dispositivos (PCs) ligados no mesmo cabo. Comum em redes antigas de cabo coaxial.",
"Tem desenho circular. São ligados entre si (um micro ligado no outro). Comum em fibra ótica.",
"Usa concentrador no meio (onde o mais usado é o switch ou o roteador;	antigamente o hub). Vantagem: caso um cabo se rompa (ou portas do switch se queime) os demais micros continuarão a funcionar.",
"Comum em redes grandes (mais robustas e com vários dispositivos).",
"Uso de mais de uma topologia na mesma rede. Ex: barramento-estrela.",
//Hardware
"Camada 3 modelo OSI. Encaminha pacotes de dados entre redes de computadores. Roteadores são os responsáveis pelo tráfego na Internet",
"Camada 2 modelo OSI. Nele conecta-se computadores/impressora. Os computadores (estações) ficam ligados entre si. Pode ter dezenas de portas.",
"Camada 1 modelo OSI. Ele só repete o sinal elétrico e não lê as informações (dados/ frames/ pacotes...). O que entrada numa porta sai (é copiado) nas outras.",
"Máquina intermediária destinada geralmente a interligar redes/ separar domínios de colisão/ ou mesmo traduzir protocolos.",
"Conforme o modelo pode ter recursos de switch/ modem/ roteador/ hub...",
//
"Computadores clientes. São as estações nas quais os usuários trabalham acessando a rede/ impressora/ internet...",
"Computador que deixa algo disponível. Compartilha alguma coisa.",
"Dá acesso a rede (via conector RJ-45) pro cabo de rede. Notebook já vem embutida. Pra alto desempenho há conexão fibra ótica.",
"Coaxial (usado antigamente)/ UTP/ fibra ótica.",
"Um modelo abstrato ou uma ideia que visa ser um padrão. Descreve as regras que padronizam os diversos componentes em uma rede para que os dispositivos consigam se comunicar (como que cada parte da rede deve trabalhar). Fabricantes por exemplo a usa para desenvolverem seus produtos. Desenvolvimento anos 70 pela ISO.",
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

	function andr3() {
	//	var rndCor = Math.floor(Math.random()*(LinPc.length));
	//document.getElementById('p11').innerHTML = LinPc[rndCor];
	//document.getElementById('p12').innerHTML = LinRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(andr3P.length));
		 var rndCor2 =  andr3P[rndCor];
		
	    document.getElementById('p7').innerHTML = andr3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);	
	}

	function ubun3() {
	//	var rndCor = Math.floor(Math.random()*(LinPc.length));
	//document.getElementById('p11').innerHTML = LinPc[rndCor];
	//document.getElementById('p12').innerHTML = LinRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(ubun3P.length));
		 var rndCor2 =  ubun3P[rndCor];
		
	    document.getElementById('p7').innerHTML = ubun3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);	
	}

	function wind3() {
	//	var rndCor = Math.floor(Math.random()*(LinPc.length));
	//document.getElementById('p11').innerHTML = LinPc[rndCor];
	//document.getElementById('p12').innerHTML = LinRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(Wind3P.length));
		 var rndCor2 =  Wind3P[rndCor];
		
	    document.getElementById('p7').innerHTML = Wind3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);	
	}

	function comp3() {
	//	var rndCor = Math.floor(Math.random()*(LinPc.length));
	//document.getElementById('p11').innerHTML = LinPc[rndCor];
	//document.getElementById('p12').innerHTML = LinRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(comp3P.length));
		 var rndCor2 =  comp3P[rndCor];
		
	    document.getElementById('p7').innerHTML = comp3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);	
	}

	function hard3() {
	//	var rndCor = Math.floor(Math.random()*(LinPc.length));
	//document.getElementById('p11').innerHTML = LinPc[rndCor];
	//document.getElementById('p12').innerHTML = LinRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(hard3P.length));
		 var rndCor2 =  hard3P[rndCor];
		
	    document.getElementById('p7').innerHTML = hard3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function soft3() {
	//	var rndCor = Math.floor(Math.random()*(HarPc.length));
	//document.getElementById('p11').innerHTML = HarPc[rndCor];
	//document.getElementById('p12').innerHTML = HarRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(soft3P.length));
		 var rndCor2 =  soft3P[rndCor];
		
	    document.getElementById('p7').innerHTML = soft3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function segu3() {
	//	var rndCor = Math.floor(Math.random()*(SegPc.length));
	//document.getElementById('p11').innerHTML = SegPc[rndCor];
	//document.getElementById('p12').innerHTML = SegRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(SegPc.length));
		 var rndCor2 =  SegPc[rndCor];
		
	    document.getElementById('p7').innerHTML = SegRc[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function rede3() {
	//	var rndCor = Math.floor(Math.random()*(HarPc.length));
	//document.getElementById('p11').innerHTML = HarPc[rndCor];
	//document.getElementById('p12').innerHTML = HarRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(RedPc.length));
		 var rndCor2 =  RedPc[rndCor];
		
	    document.getElementById('p7').innerHTML = RedRc[rndCor];      // text2 display r
	    
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
		document.getElementById("hard3").addEventListener("click",hard3);
		document.querySelector('#hard3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "HARDWARE";});		
		document.getElementById("soft3").addEventListener("click",soft3);
		document.querySelector('#soft3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "SOFTWARE";});		

		document.getElementById("andr3").addEventListener("click",andr3);
		document.querySelector('#andr3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "ANDROID";});		
		document.getElementById("ubun3").addEventListener("click",ubun3);
		document.querySelector('#ubun3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "UBUNTO";});		
		document.getElementById("wind3").addEventListener("click",wind3);
		document.querySelector('#wind3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "WINDOWS";});		
		
		document.getElementById("comp3").addEventListener("click",comp3);
		document.querySelector('#comp3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "COMPUTING";});		
		document.getElementById("segu3").addEventListener("click",segu3);
		document.querySelector('#segu3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "SAFETY";});		
		
		document.getElementById("rede3").addEventListener("click",rede3);
		document.querySelector('#rede3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "WEB";});		
	}
window.addEventListener("load",addEvents);
