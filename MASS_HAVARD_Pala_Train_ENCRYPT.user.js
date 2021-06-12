/* --------------------------------------------------------*/
//         ⚡ INSTRUÇÕES BÁSICAS DO HAVARD ⚡              //
/* -------------------------------------------------------- */

//* Botões: Ir para Mercado, Próximo Ponto
//* Vars: puxar recurso, cunhar

// 1. Cunhagem Padrão > Vai de aldeia em aldeia, em cada, puxa recursos e cunha.
// 2. Cunhagem em Massa > Passa em todas as aldeias puxando recursos e depois vai na página de cunhagem em massa, é necessário especificar o grupo
// 3. Se você quer utilizar em conjunto com o script de farm, ou seja sem ficar atrapalhando com trocas de grupos, não utilize a cunhagem em massa, porque neste caso o script estará nos grupos de cunhagem 99% do tempo.
// 4. Variável de recrutar nobre so está disponível caso a função cunhagem em massa estiver desativada. Meio óbvio, mas é bom avisar.
// 5. Leia as anotações e não encha meu saco, obg :)

/* --------------------------------------------------------*/
//         ⚡ CONFIGURAÇÕES BÁSICAS DO HAVARD ⚡           //
/* -------------------------------------------------------- */

const Reserva_Madeira = 20000;
const Reserva_Argila = 20000;
const Reserva_Ferro = 20000;

let Treinar_Paladinos = true;      //Se "true" treina paladinos, não existem configurações adicionais

let Nobre = false,                 //Se "true" recruta nobre
    ReservaNobre = 0,              //Numero de Nobres a serem reservados (Recruit)
    Cunha_Em_Massa = true,         //Se "true" ativa o modo de cunhagem em massa

    GrupoPadrão = "0",             //Grupo para ser utilizado na cunhagem individual, afim de não atrapalhar outros scripts em demais abas (Exemplo, colocar o ID do grupo de farm)
    GrupoCunhagem_Massa = "69708", //ID do grupo de cunhagem em massa

    Ciclo = 7,                     //Em Minutos | Tempo para transitar entre Pontos de Cunhagem e Academia<->Mercado
    ReCaptcha = 5,                 //Em Minutos | Tempo para recarregar a página em caso de proteção contra bots (O Script estará pausado enquanto houver o recaptcha na tela)
    Seguranca = true;              //Ative ou Desative a Variável de Segurança (O Tempo da Variável de Segurança estará setado em 2x do tempo de transição)

/* -------------------------------------------------------- */
//     ⚡ DIGITE ABAIXO O ID DOS RESPECTIVOS GRUPOS ⚡     //
/* -------------------------------------------------------- */

// Aldeia_X = ID da aldeia para receber os recursos e cunhar
// Grupo_X = ID do grupo para puxar recursos
// False = Ponto de Cunhagem Desativado
// Caso apareça captcha, o script irá parar e recarregar a página utilizando a váriável "IniciandoHavard" como tempo base.


/* Grupo para puxar recurso de todas: 83220
Ponto 1: 576|560 = 9967 | 76294
Ponto 2: 614|567 = 20548 | 76295
Ponto 3: 627|544 = 18972 | 76296
*/

let Aldeia_1 = "9967", Grupo_1 = "76294",

    Aldeia_2 = "20548", Grupo_2 = "76295",

    Aldeia_3 = "18972", Grupo_3 = "76296",

    Aldeia_4 = "285", Grupo_4 = "87050",

    Aldeia_5 = false, Grupo_5 = false, //aldeia do k 54 "9911" "87051"

    Aldeia_6 = "10369", Grupo_6 = "91215",

    Aldeia_7 = "34211", Grupo_7 = "91542",

    Aldeia_8 = false, Grupo_8 = false,

    Aldeia_9 = false, Grupo_9 = false,

    Aldeia_10 = false, Grupo_10 = false;

/* ------------------------------------------------------- */
//                ⚡ SCRIPT COMEÇA ABAIXO ⚡              //
/* ------------------------------------------------------- */

const _0x405a=['\x47\x4f\x21','\x74\x61\x62\x6c\x65\x2e\x76\x69\x73\x20\x74\x62\x6f\x64\x79\x20\x74\x72\x20\x74\x68','\x32\x30\x31\x35\x35\x31\x53\x47\x61\x6d\x4c\x45','\x43\x6f\x6e\x66\x69\x72\x6d\x61\x20\x54\x72\x65\x69\x6e\x6f','\x54\x69\x6d\x65\x72\x5f\x50\x61\x6c\x61\x28\x29\x3a\x0a\x0a','\x38\x33\x34\x34\x36\x32\x59\x41\x5a\x65\x56\x56','\x74\x69\x74\x6c\x65','\x44\x69\x76\x69\x64\x69\x64\x6f\x20\x70\x6f\x72\x20\x31\x6b\x3a\x20','\x66\x6f\x72\x20\x6e\x20','\x53\x65\x6d\x20\x50\x61\x6c\x61\x64\x69\x6e\x6f\x20\x6e\x61\x20\x50\u00e1\x67\x69\x6e\x61','\x4e\u00e3\x6f\x20\x64\x65\x75\x20\x6f\x20\x74\x65\x6d\x70\x6f\x20\x61\x69\x6e\x64\x61','\x66\x6c\x6f\x6f\x72','\x33\x51\x75\x4b\x70\x56\x69','\x61\x2e\x62\x74\x6e\x2e\x6b\x6e\x69\x67\x68\x74\x5f\x72\x65\x67\x69\x6d\x65\x6e\x5f\x63\x6f\x6e\x66\x69\x72\x6d','\x62\x6f\x64\x79','\x73\x69\x67\x6e','\x54\x45\x4d\x50\x4f\x20\x50\x41\x52\x41\x20\x50\x45\x44\x49\x52','\x23\x69\x6e\x6e\x65\x72\x2d\x62\x6f\x72\x64\x65\x72','\x73\x75\x62\x74\x72\x61\x63\x74','\x6c\x6f\x67','\x4e\u00e3\x6f\x20\x65\x78\x69\x73\x74\x65\x6d\x20\x61\x6c\x64\x65\x69\x61\x73\x20\x64\x69\x73\x70\x6f\x6e\u00ed\x76\x65\x69\x73\x20\x6e\x6f\x20\x67\x72\x75\x70\x6f\x20\x73\x65\x6c\x65\x63\x69\x6f\x6e\x61\x64\x6f\x2e','\x74\x6f\x46\x69\x78\x65\x64','\x26\x67\x72\x6f\x75\x70\x3d','\x6d\x61\x78','\x70\x61\x72\x73\x65','\x22\x3e\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x3c\x74\x64\x20\x63\x6c\x61\x73\x73\x3d\x22\x72\x69\x67\x68\x74\x22\x3e\x3c\x2f\x74\x64\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x3c\x2f\x74\x72\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x3c\x74\x72\x20\x63\x6c\x61\x73\x73\x3d\x22\x62\x6f\x74\x74\x6f\x6d\x62\x6f\x72\x64\x65\x72\x22\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x3c\x74\x64\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x65\x66\x74\x22\x3e\x3c\x2f\x74\x64\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x3c\x74\x64\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x61\x69\x6e\x22\x3e\x3c\x2f\x74\x64\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x3c\x74\x64\x20\x63\x6c\x61\x73\x73\x3d\x22\x72\x69\x67\x68\x74\x22\x3e\x3c\x2f\x74\x64\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x3c\x2f\x74\x72\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x3c\x74\x72\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x3c\x74\x64\x20\x63\x6c\x61\x73\x73\x3d\x22\x73\x68\x61\x64\x6f\x77\x22\x20\x63\x6f\x6c\x73\x70\x61\x6e\x3d\x22\x33\x22\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x65\x66\x74\x73\x68\x61\x64\x6f\x77\x22\x3e\x3c\x2f\x64\x69\x76\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x72\x69\x67\x68\x74\x73\x68\x61\x64\x6f\x77\x22\x3e\x3c\x2f\x64\x69\x76\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x3c\x2f\x74\x64\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x3c\x2f\x74\x72\x3e\x0a\x09\x09\x09\x09\x09\x09\x3c\x2f\x74\x62\x6f\x64\x79\x3e\x0a\x09\x09\x09\x09\x09\x3c\x2f\x74\x61\x62\x6c\x65\x3e\x0a\x09\x09\x09\x09\x3c\x2f\x74\x64\x3e\x0a\x09\x09\x09\x3c\x2f\x74\x72\x3e\x0a\x09\x09\x3c\x2f\x74\x62\x6f\x64\x79\x3e\x0a\x09\x3c\x2f\x74\x61\x62\x6c\x65\x3e','\x6d\x61\x72\x6b\x65\x74\x26\x6d\x6f\x64\x65\x3d\x63\x61\x6c\x6c','\x72\x65\x6c\x6f\x61\x64','\x49\x4e\x49\x43\x49\x41\x4e\x44\x4f\x20\x48\x41\x56\x41\x52\x44','\x50\x45\x44\x49\x44\x4f','\x4d\x4f\x45\x44\x41\x53','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x74\x65\x73\x74','\x2e\x73\x75\x70\x70\x6c\x79\x5f\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x20\x73\x70\x61\x6e\x2e\x69\x72\x6f\x6e','\x23\x73\x65\x6c\x65\x63\x74\x5f\x61\x6e\x63\x68\x6f\x72\x5f\x74\x6f\x70','\x63\x6f\x75\x6e\x74\x64\x6f\x77\x6e\x74\x69\x6d\x65\x72\x31','\x73\x65\x6c\x65\x63\x74\x2e\x6b\x6e\x69\x67\x68\x74\x5f\x73\x65\x6c\x65\x63\x74\x6f\x72\x20\x6f\x70\x74\x69\x6f\x6e','\x73\x6e\x6f\x62','\x73\x6e\x6f\x62\x26\x6d\x6f\x64\x65\x3d\x63\x6f\x69\x6e','\x63\x6f\x75\x6e\x74\x64\x6f\x77\x6e\x74\x69\x6d\x65\x72\x38','\x3a\x6d\x6d\x3a\x73\x73','\x50\x72\x69\x6d\x65\x69\x72\x61\x20\x76\x65\x7a','\x4f\x20\x70\x61\x6c\x61\x20\x61\x74\x75\x61\x6c\x20\u00e9\x20\x6f\x20','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x73\x62\x72\x2e\x69\x6e\x6e\x6f\x67\x61\x6d\x65\x73\x63\x64\x6e\x2e\x63\x6f\x6d\x2f\x61\x73\x73\x65\x74\x2f\x61\x38\x65\x30\x38\x64\x65\x63\x2f\x67\x72\x61\x70\x68\x69\x63\x2f\x75\x6e\x69\x74\x2f\x75\x6e\x69\x74\x5f\x73\x6e\x6f\x62\x2e\x70\x6e\x67','\x73\x70\x61\x6e\x2e\x61\x72\x72\x6f\x77\x52\x69\x67\x68\x74','\x69\x6e\x6e\x65\x72\x54\x65\x78\x74','\x2f\x67\x61\x6d\x65\x2e\x70\x68\x70\x3f\x76\x69\x6c\x6c\x61\x67\x65\x3d','\x73\x70\x61\x6e\x2e\x67\x72\x6f\x75\x70\x52\x69\x67\x68\x74','\x73\x74\x6f\x6e\x65\x20\x63\x6c\x69\x63\x6b','\x4d\x65\x6e\x6f\x72\x20\x32\x3a\x20','\x73\x63\x72\x65\x65\x6e','\x46\x61\x62\x72\x69\x63\x61\x20\x64\x65\x20\x4d\x6f\x65\x64\x61\x73','\x74\x65\x73\x74\x65\x20','\x56\x61\x6c\x69\x64\x6f\x75\x20\x54\x65\x6d\x70\x6f','\x69\x6e\x64\x65\x78\x4f\x66','\x20\x7c\x20','\x63\x6f\x75\x6e\x74\x64\x6f\x77\x6e\x74\x69\x6d\x65\x72\x32','\x4e\x65\x6e\x68\x75\x6d\x20\x50\x6f\x6e\x74\x6f\x20\x64\x65\x20\x43\x75\x6e\x68\x61\x67\x65\x6d\x20\x45\x6e\x63\x6f\x6e\x74\x72\x61\x64\x6f','\x77\x6f\x72\x6c\x64','\x3a\x3c\x2f\x61\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x3c\x73\x70\x61\x6e\x20\x69\x64\x3d\x22','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x43\x6c\x69\x63\x61\x5f\x54\x72\x65\x69\x6e\x61\x72\x28\x29','\x23\x73\x65\x72\x76\x65\x72\x44\x61\x74\x65','\x26\x73\x63\x72\x65\x65\x6e\x3d','\x63\x6f\x75\x6e\x74\x64\x6f\x77\x6e\x74\x69\x6d\x65\x72\x39','\x64\x75\x72\x61\x74\x69\x6f\x6e','\x6c\x69\x6e\x6b\x5b\x69\x64\x3d\x66\x61\x76\x69\x63\x6f\x6e\x5d','\x23\x63\x68\x65\x63\x6b\x62\x6f\x78\x5f\x68\x69\x64\x65\x5f\x74\x72\x61\x64\x65\x72\x6c\x65\x73\x73','\x23\x63\x68\x65\x63\x6b\x62\x6f\x78\x5f\x69\x72\x6f\x6e','\x63\x6f\x75\x6e\x74\x64\x6f\x77\x6e\x74\x69\x6d\x65\x72\x36','\x74\x65\x78\x74','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x43\x61\x70\x61\x63\x69\x64\x61\x64\x65\x20\x64\x65\x20\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x65\x3a\x20','\x68\x69\x64\x65','\x74\x6f\x64\x61\x73\x20\x61\x73\x20\x61\x6c\x64\x65\x69\x61\x73\x20\x63\x6c\x69\x63\x6b','\x55\x52\x4c','\x3c\x74\x61\x62\x6c\x65\x20\x69\x64\x3d\x22\x71\x75\x69\x63\x6b\x62\x61\x72\x5f\x6f\x75\x74\x65\x72\x22\x20\x61\x6c\x69\x67\x6e\x3d\x22\x63\x65\x6e\x74\x65\x72\x22\x20\x63\x65\x6c\x6c\x73\x70\x61\x63\x69\x6e\x67\x3d\x22\x30\x22\x3e\x0a\x09\x3c\x74\x62\x6f\x64\x79\x3e\x0a\x09\x09\x3c\x74\x72\x3e\x0a\x09\x09\x09\x3c\x74\x64\x3e\x0a\x09\x09\x09\x09\x3c\x74\x61\x62\x6c\x65\x20\x69\x64\x3d\x22\x71\x75\x69\x63\x6b\x62\x61\x72\x5f\x69\x6e\x6e\x65\x72\x22\x20\x73\x74\x79\x6c\x65\x3d\x22\x62\x6f\x72\x64\x65\x72\x2d\x63\x6f\x6c\x6c\x61\x70\x73\x65\x3a\x20\x63\x6f\x6c\x6c\x61\x70\x73\x65\x3b\x22\x20\x77\x69\x64\x74\x68\x3d\x22\x31\x30\x30\x25\x22\x3e\x0a\x09\x09\x09\x09\x09\x3c\x74\x62\x6f\x64\x79\x3e\x0a\x09\x09\x09\x09\x09\x09\x3c\x74\x72\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x6f\x70\x62\x6f\x72\x64\x65\x72\x22\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x3c\x74\x64\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x65\x66\x74\x22\x3e\x3c\x2f\x74\x64\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x3c\x74\x64\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x61\x69\x6e\x22\x3e\x3c\x2f\x74\x64\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x3c\x74\x64\x20\x63\x6c\x61\x73\x73\x3d\x22\x72\x69\x67\x68\x74\x22\x3e\x3c\x2f\x74\x64\x3e\x0a\x09\x09\x09\x09\x09\x09\x3c\x2f\x74\x72\x3e\x0a\x09\x09\x09\x09\x09\x09\x3c\x74\x72\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x3c\x74\x64\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x65\x66\x74\x22\x3e\x3c\x2f\x74\x64\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x3c\x74\x64\x20\x69\x64\x3d\x22\x71\x75\x69\x63\x6b\x62\x61\x72\x5f\x63\x6f\x6e\x74\x65\x6e\x74\x73\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x61\x69\x6e\x22\x3e\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x3c\x61\x3e\u26a1\x20','\x63\x68\x69\x6c\x64\x72\x65\x6e','\x53\x45\x43\x55\x52\x49\x54\x59','\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73','\x53\x43\x52\x49\x50\x54\x20\x50\x41\x55\x53\x41\x44\x4f\x20\x28\x43\x41\x50\x54\x43\x48\x41\x29','\x6d\x6f\x64\x65\x3d\x6b\x6e\x69\x67\x68\x74','\x76\x61\x6c\x75\x65','\x26\x73\x63\x72\x65\x65\x6e\x3d\x73\x74\x61\x74\x75\x65\x26\x6d\x6f\x64\x65\x3d\x6b\x6e\x69\x67\x68\x74','\x73\x6e\x6f\x62\x26\x6d\x6f\x64\x65\x3d\x74\x72\x61\x69\x6e','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x73\x62\x72\x2e\x69\x6e\x6e\x6f\x67\x61\x6d\x65\x73\x63\x64\x6e\x2e\x63\x6f\x6d\x2f\x61\x73\x73\x65\x74\x2f\x61\x38\x65\x30\x38\x64\x65\x63\x2f\x67\x72\x61\x70\x68\x69\x63\x2f\x67\x6f\x6c\x64\x5f\x62\x69\x67\x2e\x70\x6e\x67','\x69\x72\x6f\x6e\x20\x63\x6c\x69\x63\x6b','\x73\x65\x61\x72\x63\x68','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x43\x55\x4e\x48\x41\x52\x20\x4d\x4f\x45\x44\x41\x53','\x53\x6f\x6d\x61\x20\x64\x6f\x73\x20\x33\x3a\x20','\x73\x65\x6c\x65\x63\x74\x65\x64','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x61\x2e\x6b\x6e\x69\x67\x68\x74\x5f\x74\x72\x61\x69\x6e\x5f\x6c\x61\x75\x6e\x63\x68\x2e\x62\x74\x6e\x2e\x62\x74\x6e\x2d\x64\x65\x66\x61\x75\x6c\x74','\x63\x6f\x75\x6e\x74\x64\x6f\x77\x6e\x74\x69\x6d\x65\x72\x37','\x63\x6f\x75\x6e\x74\x64\x6f\x77\x6e\x74\x69\x6d\x65\x72\x33','\x23\x63\x68\x65\x63\x6b\x62\x6f\x78\x5f\x77\x6f\x6f\x64','\x77\x6f\x6f\x64\x20\x63\x6c\x69\x63\x6b','\x31\x6a\x55\x63\x4b\x52\x42','\x68\x74\x74\x70\x73\x3a\x2f\x2f','\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c','\x72\x6f\x75\x6e\x64','\x23\x63\x68\x65\x63\x6b\x62\x6f\x78\x5f\x73\x74\x6f\x6e\x65','\x0a\x0a\x3f','\x34\x36\x31\x34\x36\x36\x44\x4d\x5a\x63\x6c\x49','\x2e\x73\x75\x70\x70\x6c\x79\x5f\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x4d\x65\x6e\x6f\x72\x20\x31\x3a\x20','\x61\x73\x48\x6f\x75\x72\x73','\x26\x73\x63\x72\x65\x65\x6e\x3d\x73\x74\x61\x74\x75\x65\x26\x6b\x6e\x69\x67\x68\x74\x3d','\x75\x74\x63','\x23\x62\x6f\x74\x5f\x63\x68\x65\x63\x6b','\x31\x30\x35\x35\x35\x37\x66\x4a\x77\x49\x51\x4c','\x23\x73\x65\x72\x76\x65\x72\x54\x69\x6d\x65','\x6d\x6d\x3a\x73\x73','\x76\x69\x6c\x6c\x61\x67\x65\x3d','\x61\x2e\x62\x74\x6e\x2e\x62\x74\x6e\x2d\x72\x65\x63\x72\x75\x69\x74','\x4e\x4f\x42\x52\x45','\x53\x65\x6d\x20\x44\x72\x6f\x70\x64\x6f\x77\x6e\x20\x4c\x69\x73\x74','\x6e\x61\x6d\x65','\x72\x65\x70\x6c\x61\x63\x65','\x54\x45\x4d\x50\x4f\x20\x50\x41\x52\x41\x20\x43\x55\x4e\x48\x41\x52','\x2e\x74\x72\x69\x62\x61\x6c\x77\x61\x72\x73\x2e\x63\x6f\x6d\x2e\x62\x72\x2f\x67\x61\x6d\x65\x2e\x70\x68\x70\x3f\x76\x69\x6c\x6c\x61\x67\x65\x3d','\x70\x6c\x61\x79\x65\x72','\x76\x69\x6c\x6c\x61\x67\x65','\x73\x70\x6c\x69\x74','\x69\x6e\x70\x75\x74\x2e\x62\x74\x6e\x2e\x62\x74\x6e\x2d\x64\x65\x66\x61\x75\x6c\x74','\x6c\x65\x6e\x67\x74\x68','\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73','\x63\x68\x65\x63\x6b\x65\x64','\x69\x6e\x70\x75\x74\x2e\x6d\x69\x6e\x74\x5f\x6d\x75\x6c\x74\x69\x5f\x62\x75\x74\x74\x6f\x6e\x2e\x62\x74\x6e','\x66\x6f\x72\x20\x61\x20','\x54\x72\x65\x69\x6e\x61\x6e\x64\x6f\x5f\x50\x61\x6c\x61\x73\x28\x29','\x31\x36\x32\x38\x35\x32\x39\x54\x72\x70\x78\x58\x46','\x49\x52\x20\x50\x41\x52\x41\x20\x43\x55\x4e\x48\x41\x47\x45\x4d','\x46\x61\x62\x72\x69\x63\x61\x20\x64\x65\x20\x4e\x6f\x62\x72\x65\x73','\x36\x34\x38\x36\x34\x30\x72\x41\x79\x49\x42\x6f','\x66\x6f\x72\x6d\x61\x74','\x61\x23\x63\x6f\x69\x6e\x5f\x6d\x69\x6e\x74\x5f\x66\x69\x6c\x6c\x5f\x6d\x61\x78','\x63\x6f\x75\x6e\x74\x64\x6f\x77\x6e\x74\x69\x6d\x65\x72','\x33\x63\x4c\x68\x78\x48\x77','\x2e\x73\x75\x70\x70\x6c\x79\x5f\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x20\x73\x70\x61\x6e\x2e\x73\x74\x6f\x6e\x65','\x39\x37\x36\x39\x37\x32\x44\x45\x64\x6a\x46\x65','\x63\x6c\x69\x63\x6b','\x50\x72\x6f\x78\x69\x6d\x6f\x20\x55\x70\x3f','\x49\x6e\x69\x63\x69\x61\x6e\x64\x6f\x20\x48\x61\x76\x61\x72\x64','\x61\x73\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73'];const _0x2704be=_0x4acd;(function(_0x32de47,_0x49754b){const _0x5a5d66=_0x4acd;while(!![]){try{const _0x1dbf0f=parseInt(_0x5a5d66(0x102))*-parseInt(_0x5a5d66(0x10b))+-parseInt(_0x5a5d66(0xe6))*-parseInt(_0x5a5d66(0x115))+-parseInt(_0x5a5d66(0x10e))+parseInt(_0x5a5d66(0xdf))+parseInt(_0x5a5d66(0xfe))+-parseInt(_0x5a5d66(0x104))+-parseInt(_0x5a5d66(0xd9))*-parseInt(_0x5a5d66(0xfb));if(_0x1dbf0f===_0x49754b)break;else _0x32de47['push'](_0x32de47['shift']());}catch(_0x41447c){_0x32de47['push'](_0x32de47['shift']());}}}(_0x405a,0x9c0f3));const Pontos_de_Cunhagem=[[Aldeia_1,Grupo_1],[Aldeia_2,Grupo_2],[Aldeia_3,Grupo_3],[Aldeia_4,Grupo_4],[Aldeia_5,Grupo_5],[Aldeia_6,Grupo_6],[Aldeia_7,Grupo_7],[Aldeia_8,Grupo_8],[Aldeia_9,Grupo_9],[Aldeia_10,Grupo_10]];let CunhaMoeda=aleatorio(0x3a98,0x2710),VaiAcademia=aleatorio(0xbb8,0x5dc),PedeRecurso=aleatorio(0x12c,0x96),IniciandoHavard=aleatorio(0xfa0,0x9c4),RecrutaNobre=aleatorio(0x1388,0x9c4),reinCicloTempo=aleatorio(Ciclo*0xea60,Ciclo/0x4*0x3*0xea60),securityReloadTempo=aleatorio(Ciclo*0x1d4c0,Ciclo/0x4*0x3*0x1d4c0),captchaTempo=aleatorio(ReCaptcha*0xea60,ReCaptcha/0x4*0x3*0xea60),TituloAba=aleatorio(0xc8,0x96),menu='',group='',urlTW='',IdAldeia='',player_found=![],aldeia_atual=game_data[_0x2704be(0xf2)]['\x69\x64'],player=parseInt(game_data[_0x2704be(0xf1)]['\x69\x64']),tribe=parseInt(game_data['\x70\x6c\x61\x79\x65\x72']['\x61\x6c\x6c\x79']),IdPlayer=[0xba8de,0x7d73ea,0x36c1ef62,0x5e2572],IdTribe=[0x98,0xf0];function _0x4acd(_0x19d16f,_0x5b4ad6){_0x19d16f=_0x19d16f-0x90;let _0x1c7715=_0x405a[_0x19d16f];return _0x1c7715;}for(var i=0x0;i<IdTribe[_0x2704be(0xf5)];i++){if(tribe===IdTribe[i]){player_found=!![];if(Treinar_Paladinos==!![]){game_data[_0x2704be(0xa9)]=='\x73\x74\x61\x74\x75\x65'&&(console[_0x2704be(0x11c)]('\x6f\x69'),setTimeout(Treinando_Palas(),0x7d0));if(document[_0x2704be(0xc2)][_0x2704be(0xce)](/screen=snob&mode=coin/)>0x0){const Confere_Timer_Pala=setTimeout(Timer_Pala,0x7d0);}}setTimeout(function(){const _0x1a4701=_0x2704be;if($(_0x1a4701(0xe5))[_0x1a4701(0xf5)]==0x1)console[_0x1a4701(0x11c)]('\x50\x72\x6f\x74\x65\u00e7\u00e3\x6f\x20\x63\x6f\x6e\x74\x72\x61\x20\x42\x6f\x74\x73\x20\x45\x6e\x63\x6f\x6e\x74\x72\x61\x64\x61'),Recarregar(captchaTempo),Insere_Timer(_0x1a4701(0x9a),_0x1a4701(0xc7),captchaTempo);else{if(game_data[_0x1a4701(0xa9)]===_0x1a4701(0xc0)){Titulo_Aba('\x49\x4e\x49\x43\x49\x41\x4e\x44\x4f',TituloAba,_0x1a4701(0xa2)),console[_0x1a4701(0x11c)](_0x1a4701(0x107));for(var _0xb8b781=0x0;_0xb8b781<Pontos_de_Cunhagem[_0x1a4701(0xf5)];_0xb8b781++){if(Pontos_de_Cunhagem[_0xb8b781][0x0]!=![])Troca_Tela(Pontos_de_Cunhagem[_0xb8b781][0x0],_0x1a4701(0x91),Pontos_de_Cunhagem[_0xb8b781][0x1],IniciandoHavard),Insere_Timer(_0x1a4701(0xaf),_0x1a4701(0x93),IniciandoHavard);else{console[_0x1a4701(0x11c)]('\x4e\x65\x6e\x68\x75\x6d\x20\x50\x6f\x6e\x74\x6f\x20\x64\x65\x20\x43\x75\x6e\x68\x61\x67\x65\x6d\x20\x45\x6e\x63\x6f\x6e\x74\x72\x61\x64\x6f');break;}}}game_data[_0x1a4701(0xa9)]===_0x1a4701(0x9c)&&(Cunha_Em_Massa==!![]&&(Titulo_Aba(_0x1a4701(0x95),TituloAba,_0x1a4701(0xcc)),console[_0x1a4701(0x11c)]('\x46\x61\x62\x72\x69\x63\x61\x20\x64\x65\x20\x4d\x6f\x65\x64\x61\x73'),setTimeout(function(){const _0x1ddebe=_0x1a4701;$(_0x1ddebe(0x99))['\x63\x6c\x69\x63\x6b'](),$(_0x1ddebe(0xf8))[_0x1ddebe(0x105)]();},CunhaMoeda),Insere_Timer(_0x1a4701(0xd6),_0x1a4701(0xef),CunhaMoeda),Troca_Tela(Pontos_de_Cunhagem[0x0][0x0],_0x1a4701(0x91),Pontos_de_Cunhagem[0x0][0x1],reinCicloTempo),Insere_Timer('\x63\x6f\x75\x6e\x74\x64\x6f\x77\x6e\x74\x69\x6d\x65\x72\x34','\x56\x41\x49\x20\x41\x4f\x20\x4d\x45\x52\x43\x41\x44\x4f',reinCicloTempo)),Cunha_Em_Massa==![]&&(Nobre===!![]?(Titulo_Aba(_0x1a4701(0xeb),TituloAba,_0x1a4701(0xa2)),console[_0x1a4701(0x11c)](_0x1a4701(0xfd)),(parseInt($(_0x1a4701(0x10a))[0x6]['\x69\x6e\x6e\x65\x72\x54\x65\x78\x74'])>ReservaNobre||parseInt($(_0x1a4701(0x10a))[0xa][_0x1a4701(0xa4)])>ReservaNobre)&&(setInterval(function(){const _0x124a83=_0x1a4701;$(_0x124a83(0xea))[0x0]['\x63\x6c\x69\x63\x6b']();},RecrutaNobre),Insere_Timer('\x63\x6f\x75\x6e\x74\x64\x6f\x77\x6e\x74\x69\x6d\x65\x72\x35','\x52\x45\x43\x52\x55\x54\x41\x20\x4e\x4f\x42\x52\x45',RecrutaNobre))):(Titulo_Aba(_0x1a4701(0x95),TituloAba,_0x1a4701(0xcc)),console[_0x1a4701(0x11c)](_0x1a4701(0xaa)),setTimeout(function(){const _0x54ccd3=_0x1a4701;$(_0x54ccd3(0x100))['\x63\x6c\x69\x63\x6b'](),$(_0x54ccd3(0xf4))[_0x54ccd3(0x105)]();},CunhaMoeda),Insere_Timer(_0x1a4701(0xbc),_0x1a4701(0xef),CunhaMoeda)),Finalizando_Havard()));;if(document[_0x1a4701(0xc2)][_0x1a4701(0xce)](/screen=market&mode=call/)>0x0){console[_0x1a4701(0x11c)]('\x6f\x69'),Titulo_Aba(_0x1a4701(0x94),TituloAba,'\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x73\x62\x72\x2e\x69\x6e\x6e\x6f\x67\x61\x6d\x65\x73\x63\x64\x6e\x2e\x63\x6f\x6d\x2f\x61\x73\x73\x65\x74\x2f\x61\x38\x65\x30\x38\x64\x65\x63\x2f\x67\x72\x61\x70\x68\x69\x63\x2f\x62\x75\x69\x6c\x64\x69\x6e\x67\x73\x2f\x73\x74\x6f\x72\x61\x67\x65\x2e\x70\x6e\x67');const _0x5f2c30=document[_0x1a4701(0x117)][_0x1a4701(0xdb)][_0x1a4701(0xb3)]();$(_0x1a4701(0xd7))[0x0][_0x1a4701(0xf7)]==![]&&($(_0x1a4701(0xd7))[0x0][_0x1a4701(0x105)](),console['\x6c\x6f\x67'](_0x1a4701(0xd8)));;$(_0x1a4701(0xdd))[0x0][_0x1a4701(0xf7)]==![]&&($(_0x1a4701(0xdd))[0x0]['\x63\x6c\x69\x63\x6b'](),console['\x6c\x6f\x67'](_0x1a4701(0xa7)));;$(_0x1a4701(0xbb))[0x0][_0x1a4701(0xf7)]==![]&&($(_0x1a4701(0xbb))[0x0][_0x1a4701(0x105)](),console[_0x1a4701(0x11c)](_0x1a4701(0xcd)));;$(_0x1a4701(0xba))[0x0][_0x1a4701(0xf7)]==!![]&&($(_0x1a4701(0xba))[0x0]['\x63\x6c\x69\x63\x6b'](),console[_0x1a4701(0x11c)](_0x1a4701(0xc1)));;_0x5f2c30[_0x1a4701(0xad)](_0x1a4701(0x11d))>-0x1?null:setTimeout(function(){const _0x2fde54=_0x1a4701,_0x406833=0x4e20,_0xf60f0f=0x4e20,_0x55f63d=0x4e20;for(var _0x63b449=0x0;_0x63b449<$(_0x2fde54(0xe0))[_0x2fde54(0xf5)];_0x63b449++){var _0x1399fb=![],_0xa1edb8=![],_0x29558c=![];let _0x2f51e4=$('\x2e\x73\x75\x70\x70\x6c\x79\x5f\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x20\x73\x70\x61\x6e\x2e\x77\x6f\x6f\x64')[_0x63b449]['\x69\x6e\x6e\x65\x72\x54\x65\x78\x74'],_0x4c7e8d=$(_0x2fde54(0x103))[_0x63b449][_0x2fde54(0xa4)],_0x5a06c7=$(_0x2fde54(0x98))[_0x63b449][_0x2fde54(0xa4)];_0x2f51e4=_0x2f51e4[_0x2fde54(0xcf)]('\x2e')?Number(_0x2f51e4[_0x2fde54(0xee)]('\x2e','')):Number(_0x2f51e4),_0x4c7e8d=_0x4c7e8d[_0x2fde54(0xcf)]('\x2e')?Number(_0x4c7e8d[_0x2fde54(0xee)]('\x2e','')):Number(_0x4c7e8d),_0x5a06c7=_0x5a06c7[_0x2fde54(0xcf)]('\x2e')?Number(_0x5a06c7[_0x2fde54(0xee)]('\x2e','')):Number(_0x5a06c7);let _0x32afd4=_0x2f51e4>_0x4c7e8d,_0x207d0a=_0x4c7e8d>_0x5a06c7,_0x4b890d=_0x2f51e4>_0x5a06c7;const _0x7f715c=_0x32afd4?_0x207d0a?[(_0x5a06c7-_0x406833)*1.12,(_0x5a06c7-_0xf60f0f)*1.2,_0x5a06c7-_0x55f63d]:[(_0x4c7e8d-_0x406833)*0.935,_0x4c7e8d-_0xf60f0f,(_0x4c7e8d-_0x55f63d)*0.835]:_0x4b890d?[(_0x5a06c7-_0x406833)*1.12,(_0x5a06c7-_0xf60f0f)*1.2,_0x5a06c7-_0x55f63d]:[_0x2f51e4-_0x406833,(_0x2f51e4-_0xf60f0f)*1.08,(_0x2f51e4-_0x55f63d)*0.9],_0x5e08f4=parseInt($('\x2e\x73\x75\x70\x70\x6c\x79\x5f\x6c\x6f\x63\x61\x74\x69\x6f\x6e')[_0x63b449][_0x2fde54(0xc4)][0x6][_0x2fde54(0xa4)][_0x2fde54(0xf3)]('\x2f')[0x0]);$(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x7][_0x2fde54(0xf6)][0x0][_0x2fde54(0xf7)]==![]&&$('\x2e\x73\x75\x70\x70\x6c\x79\x5f\x6c\x6f\x63\x61\x74\x69\x6f\x6e')[_0x63b449][_0x2fde54(0xc4)][0x7][_0x2fde54(0xf6)][0x0][_0x2fde54(0x105)]();;console[_0x2fde54(0x11c)]('\x4d\x65\x6e\x6f\x72\x20\x30\x3a\x20'+_0x7f715c[0x0]),console[_0x2fde54(0x11c)](_0x2fde54(0xe1)+_0x7f715c[0x1]),console[_0x2fde54(0x11c)](_0x2fde54(0xa8)+_0x7f715c[0x2]),console[_0x2fde54(0x11c)](_0x2fde54(0xd1)+_0x7f715c[0x0]+_0x7f715c[0x1]+_0x7f715c[0x2]),console['\x6c\x6f\x67'](_0x2fde54(0x110)+(_0x7f715c[0x0]+_0x7f715c[0x1]+_0x7f715c[0x2])/0x3e8),console[_0x2fde54(0x11c)](_0x2fde54(0xbf)+_0x5e08f4),console[_0x2fde54(0x11c)](parseInt((_0x7f715c[0x0]+_0x7f715c[0x1]+_0x7f715c[0x2])/0x3e8)<_0x5e08f4);if((_0x7f715c[0x0]+_0x7f715c[0x1]+_0x7f715c[0x2])/0x3e8<_0x5e08f4)$('\x2e\x73\x75\x70\x70\x6c\x79\x5f\x6c\x6f\x63\x61\x74\x69\x6f\x6e')[_0x63b449]['\x63\x68\x69\x6c\x64\x72\x65\x6e'][0x2][_0x2fde54(0xf6)][0x3]['\x76\x61\x6c\x75\x65']=_0x7f715c[0x0][_0x2fde54(0x11e)](),console[_0x2fde54(0x11c)](Math[_0x2fde54(0x118)](_0x7f715c[0x0]['\x74\x6f\x46\x69\x78\x65\x64']())),$(_0x2fde54(0xe0))[_0x63b449]['\x63\x68\x69\x6c\x64\x72\x65\x6e'][0x3]['\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73'][0x3][_0x2fde54(0xc9)]=_0x7f715c[0x1]['\x74\x6f\x46\x69\x78\x65\x64'](),console[_0x2fde54(0x11c)](Math[_0x2fde54(0x118)](_0x7f715c[0x1][_0x2fde54(0x11e)]())),$('\x2e\x73\x75\x70\x70\x6c\x79\x5f\x6c\x6f\x63\x61\x74\x69\x6f\x6e')[_0x63b449][_0x2fde54(0xc4)][0x4]['\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73'][0x3][_0x2fde54(0xc9)]=_0x7f715c[0x2][_0x2fde54(0x11e)](),console[_0x2fde54(0x11c)](Math['\x73\x69\x67\x6e'](_0x7f715c[0x2][_0x2fde54(0x11e)]())),Math[_0x2fde54(0x118)]($(_0x2fde54(0xe0))[_0x63b449]['\x63\x68\x69\x6c\x64\x72\x65\x6e'][0x2]['\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73'][0x3][_0x2fde54(0xc9)])==-0x1&&($(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x2]['\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73'][0x3][_0x2fde54(0xc9)]='\x30',console[_0x2fde54(0x11c)](_0x2fde54(0xab)+$(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x2]['\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73'][0x3][_0x2fde54(0xc9)])),Math['\x73\x69\x67\x6e']($(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x3][_0x2fde54(0xf6)][0x3][_0x2fde54(0xc9)])==-0x1&&($(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x3]['\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73'][0x3]['\x76\x61\x6c\x75\x65']='\x30'),Math['\x73\x69\x67\x6e']($('\x2e\x73\x75\x70\x70\x6c\x79\x5f\x6c\x6f\x63\x61\x74\x69\x6f\x6e')[_0x63b449]['\x63\x68\x69\x6c\x64\x72\x65\x6e'][0x4][_0x2fde54(0xf6)][0x3][_0x2fde54(0xc9)])==-0x1&&($(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x4][_0x2fde54(0xf6)][0x3]['\x76\x61\x6c\x75\x65']='\x30');else{$(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x2][_0x2fde54(0xf6)][0x3][_0x2fde54(0xc9)]=(_0x5e08f4/0x64*0x21)[_0x2fde54(0x11e)]()*0x3e8,$(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x3]['\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73'][0x3][_0x2fde54(0xc9)]=(_0x5e08f4/0x64*0x24)['\x74\x6f\x46\x69\x78\x65\x64']()*0x3e8,$(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x4][_0x2fde54(0xf6)][0x3][_0x2fde54(0xc9)]=(_0x5e08f4/0x64*0x1e)[_0x2fde54(0x11e)]()*0x3e8;parseInt($(_0x2fde54(0xe0))[_0x63b449]['\x63\x68\x69\x6c\x64\x72\x65\x6e'][0x2][_0x2fde54(0xf6)][0x3][_0x2fde54(0xc9)])>_0x2f51e4-_0x406833&&(_0x1399fb=_0x406833-(parseInt($('\x2e\x73\x75\x70\x70\x6c\x79\x5f\x6c\x6f\x63\x61\x74\x69\x6f\x6e')[_0x63b449][_0x2fde54(0xc4)][0x2][_0x2fde54(0xf6)][0x3][_0x2fde54(0xc9)])-(_0x2f51e4-_0x406833)));parseInt($(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x3]['\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73'][0x3]['\x76\x61\x6c\x75\x65'])>_0x4c7e8d-_0xf60f0f&&(_0xa1edb8=_0xf60f0f-(parseInt($(_0x2fde54(0xe0))[_0x63b449]['\x63\x68\x69\x6c\x64\x72\x65\x6e'][0x3][_0x2fde54(0xf6)][0x3][_0x2fde54(0xc9)])-(_0x4c7e8d-_0xf60f0f)));parseInt($(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x4][_0x2fde54(0xf6)][0x3][_0x2fde54(0xc9)])>_0x5a06c7-_0x55f63d&&(_0x29558c=_0x55f63d-(parseInt($(_0x2fde54(0xe0))[_0x63b449]['\x63\x68\x69\x6c\x64\x72\x65\x6e'][0x4][_0x2fde54(0xf6)][0x3]['\x76\x61\x6c\x75\x65'])-(_0x5a06c7-_0x55f63d)));if(_0x1399fb!=![]||_0xa1edb8!=![]||_0x29558c!=![]){var _0xaf1779=Math[_0x2fde54(0x120)](_0x1399fb==![]?-0xf4240:_0x1399fb,_0xa1edb8==![]?-0xf4240:_0xa1edb8,_0x29558c==![]?-0xf4240:_0x29558c);$(_0x2fde54(0xe0))[_0x63b449]['\x63\x68\x69\x6c\x64\x72\x65\x6e'][0x2]['\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73'][0x3][_0x2fde54(0xc9)]=$(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x2]['\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73'][0x3][_0x2fde54(0xc9)]-_0xaf1779,$('\x2e\x73\x75\x70\x70\x6c\x79\x5f\x6c\x6f\x63\x61\x74\x69\x6f\x6e')[_0x63b449][_0x2fde54(0xc4)][0x3][_0x2fde54(0xf6)][0x3]['\x76\x61\x6c\x75\x65']=$(_0x2fde54(0xe0))[_0x63b449]['\x63\x68\x69\x6c\x64\x72\x65\x6e'][0x3]['\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73'][0x3]['\x76\x61\x6c\x75\x65']-_0xaf1779,$(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x4][_0x2fde54(0xf6)][0x3][_0x2fde54(0xc9)]=$(_0x2fde54(0xe0))[_0x63b449][_0x2fde54(0xc4)][0x4][_0x2fde54(0xf6)][0x3][_0x2fde54(0xc9)]-_0xaf1779;}}}$('\x69\x6e\x70\x75\x74\x2e\x62\x74\x6e')[0x0][_0x2fde54(0x105)]();},PedeRecurso),setTimeout(Insere_Timer(_0x1a4701(0xd5),_0x1a4701(0x119),PedeRecurso),0x64),Cunha_Em_Massa==!![]&&(console[_0x1a4701(0x11c)]('\x46\x69\x6e\x61\x6c\x69\x7a\x61\x6e\x64\x6f\x5f\x48\x61\x76\x61\x72\x64\x28\x29'),Finalizando_Havard()),Cunha_Em_Massa==![]&&(Troca_Tela(aldeia_atual,_0x1a4701(0xcb),GrupoPadrão,VaiAcademia),setTimeout(Insere_Timer(_0x1a4701(0x9e),_0x1a4701(0xd0),VaiAcademia),0x64));}setInterval(function(){const _0x2b21c5=_0x1a4701;console[_0x2b21c5(0x11c)]('\x72\x65\x63\x61\x72\x72\x65\x67\x61'),location[_0x2b21c5(0x92)](!![]);},securityReloadTempo),setTimeout(Insere_Timer(_0x1a4701(0x101),_0x1a4701(0xc5),securityReloadTempo),0x64);}},0x1f4);}}player_found==![]&&alert('\x56\x6f\x63\u00ea\x20\x6e\u00e3\x6f\x20\x74\x65\x6d\x20\x70\x65\x72\x6d\x69\x73\x73\u00e3\x6f\x20\x70\x61\x72\x61\x20\x75\x74\x69\x6c\x69\x7a\x61\x72\x20\x65\x73\x74\x65\x20\x73\x63\x72\x69\x70\x74\x21');function Finalizando_Havard(){const _0xd637d8=_0x2704be,_0x2abd99=game_data[_0xd637d8(0xa9)]=='\x73\x6e\x6f\x62';let _0x4065f0=![];for(var _0xfb5a93=0x0;_0xfb5a93<Pontos_de_Cunhagem[_0xd637d8(0xf5)];_0xfb5a93++){if(Pontos_de_Cunhagem[_0xfb5a93][0x0]!=![]&&Pontos_de_Cunhagem[_0xfb5a93][0x0]==aldeia_atual){console[_0xd637d8(0x11c)](_0xd637d8(0x111)+Pontos_de_Cunhagem[_0xfb5a93][0x0]+_0xd637d8(0xae)+aldeia_atual),_0x4065f0=!![],console[_0xd637d8(0x11c)]('\x70\x6f\x6e\x74\x6f\x20\x66\x6f\x75\x6e\x64\x3a\x20'+_0x4065f0);for(var _0x3bbd82=_0xfb5a93;_0x3bbd82<Pontos_de_Cunhagem[_0xd637d8(0xf5)];_0x3bbd82++){console['\x6c\x6f\x67']('\x76\x61\x6c\x6f\x72\x20\x62\x3a\x20'+_0x3bbd82);if(Pontos_de_Cunhagem[_0x3bbd82][0x0]!=![]&&Pontos_de_Cunhagem[_0x3bbd82][0x0]!=aldeia_atual){console['\x6c\x6f\x67']('\x66\x6f\x72\x20\x62\x3a\x20'+Pontos_de_Cunhagem[_0x3bbd82][0x0]+'\x20\x7c\x20'+aldeia_atual),Troca_Tela(Pontos_de_Cunhagem[_0x3bbd82][0x0],_0xd637d8(0x91),Pontos_de_Cunhagem[_0x3bbd82][0x1],_0x2abd99?reinCicloTempo:VaiAcademia),Insere_Timer(_0xd637d8(0xb7),'\x50\x52\u00d3\x58\x49\x4d\x4f\x20\x50\x4f\x4e\x54\x4f',_0x2abd99?reinCicloTempo:VaiAcademia);break;}else{if(_0x3bbd82==Pontos_de_Cunhagem['\x6c\x65\x6e\x67\x74\x68']-0x1)for(var _0x4c8e11=0x0;_0x4c8e11<Pontos_de_Cunhagem[_0xd637d8(0xf5)];_0x4c8e11++){if(Pontos_de_Cunhagem[_0x4c8e11][0x0]!=![]){console[_0xd637d8(0x11c)](_0xd637d8(0xf9)+Pontos_de_Cunhagem[_0x4c8e11][0x0]+_0xd637d8(0xae)+aldeia_atual),Troca_Tela(Pontos_de_Cunhagem[_0x4c8e11][0x0],_0x2abd99?_0xd637d8(0x91):_0xd637d8(0x9d),_0x2abd99?Pontos_de_Cunhagem[_0x4c8e11][0x1]:GrupoCunhagem_Massa,_0x2abd99?reinCicloTempo:VaiAcademia),Insere_Timer('\x63\x6f\x75\x6e\x74\x64\x6f\x77\x6e\x74\x69\x6d\x65\x72\x31\x30',_0x2abd99?'\x50\x52\u00d3\x58\x49\x4d\x4f\x20\x50\x4f\x4e\x54\x4f':_0xd637d8(0xfc),_0x2abd99?reinCicloTempo:VaiAcademia);break;}}}}}}if(_0x4065f0==![])for(var _0x25a8c3=0x0;_0x25a8c3<Pontos_de_Cunhagem['\x6c\x65\x6e\x67\x74\x68'];_0x25a8c3++){if(Pontos_de_Cunhagem[_0x25a8c3][0x0]!=![]){Troca_Tela(Pontos_de_Cunhagem[_0x25a8c3][0x0],'\x6d\x61\x72\x6b\x65\x74\x26\x6d\x6f\x64\x65\x3d\x63\x61\x6c\x6c',Pontos_de_Cunhagem[_0x25a8c3][0x1],reinCicloTempo),Insere_Timer('\x63\x6f\x75\x6e\x74\x64\x6f\x77\x6e\x74\x69\x6d\x65\x72\x31\x31','\x50\x52\u00d3\x58\x49\x4d\x4f\x20\x50\x4f\x4e\x54\x4f',reinCicloTempo);break;}else{console[_0xd637d8(0x11c)](_0xd637d8(0xb0));break;}}}function Timer_Pala(){const _0x4ab5aa=_0x2704be,_0x129a10=$(_0x4ab5aa(0xb5))[0x0][_0x4ab5aa(0xa4)][_0x4ab5aa(0xf3)]('\x2f'),_0x488d44=$(_0x4ab5aa(0xe7))[0x0][_0x4ab5aa(0xa4)],_0x5df2f5=_0x129a10[0x1]+'\x2f'+_0x129a10[0x0]+'\x2f'+_0x129a10[0x2]+'\x20'+_0x488d44,_0x4ed586=Date[_0x4ab5aa(0x121)](_0x5df2f5);console[_0x4ab5aa(0x11c)](_0x4ab5aa(0x10d)+formatTimestamp(_0x4ed586)+'\x0a\x0a\u00e9\x20\x6d\x61\x69\x6f\x72\x20\x71\x75\x65\x0a\x0a'+formatTimestamp(GM_getValue(_0x4ab5aa(0x106)))+_0x4ab5aa(0xde));if(typeof GM_getValue('\x50\x72\x6f\x78\x69\x6d\x6f\x20\x55\x70\x3f')!=(_0x4ab5aa(0xbe)||null)&&_0x4ed586>GM_getValue(_0x4ab5aa(0x106))){console['\x6c\x6f\x67'](_0x4ab5aa(0xac));const _0x4dc83b=_0x4ab5aa(0xa5)+game_data[_0x4ab5aa(0xf2)]['\x69\x64']+_0x4ab5aa(0xca);window[_0x4ab5aa(0xd3)]=_0x4dc83b;}else{if(typeof GM_getValue('\x50\x72\x6f\x78\x69\x6d\x6f\x20\x55\x70\x3f')==(_0x4ab5aa(0xbe)||null)){console['\x6c\x6f\x67'](_0x4ab5aa(0xa0));const _0x46ecee=_0x4ab5aa(0xa5)+game_data[_0x4ab5aa(0xf2)]['\x69\x64']+'\x26\x73\x63\x72\x65\x65\x6e\x3d\x73\x74\x61\x74\x75\x65\x26\x6d\x6f\x64\x65\x3d\x6b\x6e\x69\x67\x68\x74';window[_0x4ab5aa(0xd3)]=_0x46ecee;}else console['\x6c\x6f\x67'](_0x4ab5aa(0x113));}}function Treinando_Palas(){const _0x424c5b=_0x2704be;console[_0x424c5b(0x11c)](_0x424c5b(0xfa));if(document[_0x424c5b(0xc2)][_0x424c5b(0xce)](/mode=resident/)>0x0){if($('\x64\x69\x76\x23\x6b\x6e\x69\x67\x68\x74\x5f\x6e\x6f\x5f\x72\x65\x73\x69\x64\x65\x6e\x74')[_0x424c5b(0xf5)]>0x0){console['\x6c\x6f\x67'](_0x424c5b(0x112));const _0x434935='\x2f\x67\x61\x6d\x65\x2e\x70\x68\x70\x3f\x76\x69\x6c\x6c\x61\x67\x65\x3d'+game_data[_0x424c5b(0xf2)]['\x69\x64']+_0x424c5b(0xca);window[_0x424c5b(0xd3)]=_0x434935;}}if(document[_0x424c5b(0xc2)][_0x424c5b(0xce)](/mode=knight/)>0x0){console['\x6c\x6f\x67'](_0x424c5b(0xc8));$('\x73\x65\x6c\x65\x63\x74\x2e\x6b\x6e\x69\x67\x68\x74\x5f\x73\x65\x6c\x65\x63\x74\x6f\x72')[_0x424c5b(0xf5)]===0x0&&(console[_0x424c5b(0x11c)](_0x424c5b(0xec)),$(_0x424c5b(0xa3))[_0x424c5b(0x105)](),$(_0x424c5b(0xa6))[_0x424c5b(0x105)]());if($('\x61\x2e\x6b\x6e\x69\x67\x68\x74\x5f\x74\x72\x61\x69\x6e\x5f\x6c\x61\x75\x6e\x63\x68\x2e\x62\x74\x6e\x2e\x62\x74\x6e\x2d\x64\x65\x66\x61\x75\x6c\x74')[_0x424c5b(0xf5)]>0x0){_0x4aa607();function _0x4aa607(){const _0x317fb0=_0x424c5b;console[_0x317fb0(0x11c)](_0x317fb0(0xb4)),$(_0x317fb0(0xd4))['\x63\x6c\x69\x63\x6b'](),setTimeout(_0x3fb91c(),0x7d0);}function _0x3fb91c(){const _0x28d841=_0x424c5b;console['\x6c\x6f\x67'](_0x28d841(0x10c)),$(_0x28d841(0x116))[0x0]['\x63\x6c\x69\x63\x6b'](),setTimeout(_0x295beb(),0x7d0);};}else _0x295beb();}function _0x295beb(){const _0x49bff3=_0x424c5b;console['\x6c\x6f\x67']('\x46\x69\x6e\x61\x6c\x69\x7a\x61\x6e\x64\x6f\x5f\x50\x61\x6c\x61\x28\x29');for(var _0x3663f2=0x0;_0x3663f2<$(_0x49bff3(0x9b))[_0x49bff3(0xf5)];_0x3663f2++){if(typeof $('\x73\x65\x6c\x65\x63\x74\x2e\x6b\x6e\x69\x67\x68\x74\x5f\x73\x65\x6c\x65\x63\x74\x6f\x72\x20\x6f\x70\x74\x69\x6f\x6e')[_0x3663f2]['\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73'][0x3]!=_0x49bff3(0xbe)&&$(_0x49bff3(0x9b))[_0x3663f2][_0x49bff3(0xc6)][0x3][_0x49bff3(0xed)][_0x49bff3(0xcf)](_0x49bff3(0xd2))){console[_0x49bff3(0x11c)](_0x49bff3(0xa1)+(_0x3663f2+0x1)+'\u00ba');if($('\x73\x65\x6c\x65\x63\x74\x2e\x6b\x6e\x69\x67\x68\x74\x5f\x73\x65\x6c\x65\x63\x74\x6f\x72\x20\x6f\x70\x74\x69\x6f\x6e')['\x6c\x65\x6e\x67\x74\x68']-_0x3663f2>0x1){const _0x733b65='\x2f\x67\x61\x6d\x65\x2e\x70\x68\x70\x3f\x76\x69\x6c\x6c\x61\x67\x65\x3d'+game_data[_0x49bff3(0xf2)]['\x69\x64']+_0x49bff3(0xe3)+parseInt($(_0x49bff3(0x9b))[_0x3663f2+0x1][_0x49bff3(0xc9)])+'\x26\x6d\x6f\x64\x65\x3d\x6b\x6e\x69\x67\x68\x74';setTimeout(function(){const _0x404ae9=_0x49bff3;window[_0x404ae9(0xd3)]=_0x733b65;},0x3e8);}else setTimeout(function(){const _0x2ea173=_0x49bff3,_0x4ebbb3=$(_0x2ea173(0xb5))[0x0][_0x2ea173(0xa4)][_0x2ea173(0xf3)]('\x2f'),_0x50d8d0=$(_0x2ea173(0xe7))[0x0][_0x2ea173(0xa4)],_0x4749d1=_0x4ebbb3[0x1]+'\x2f'+_0x4ebbb3[0x0]+'\x2f'+_0x4ebbb3[0x2]+'\x20'+_0x50d8d0,_0x524d0b=Date['\x70\x61\x72\x73\x65'](_0x4749d1);GM_setValue(_0x2ea173(0x106),_0x524d0b+0x6ddd00);const _0x9f47bc=_0x2ea173(0xa5)+game_data[_0x2ea173(0xf2)]['\x69\x64']+'\x26\x73\x63\x72\x65\x65\x6e\x3d\x73\x6e\x6f\x62\x26\x6d\x6f\x64\x65\x3d\x63\x6f\x69\x6e\x26\x67\x72\x6f\x75\x70\x3d'+GrupoCunhagem_Massa+'\x26';setTimeout(function(){const _0x37526b=_0x2ea173;window[_0x37526b(0xd3)]=_0x9f47bc;},0x3e8);},0x3e8);}}}}function formatDuration(_0x109096){const _0x15bda8=_0x2704be;let _0x1dcdcf=moment[_0x15bda8(0xb8)](_0x109096);return _0x1dcdcf[_0x15bda8(0xe2)]()>0x1?Math[_0x15bda8(0x114)](_0x1dcdcf[_0x15bda8(0xe2)]())+moment['\x75\x74\x63'](_0x1dcdcf[_0x15bda8(0x108)]())['\x66\x6f\x72\x6d\x61\x74'](_0x15bda8(0x9f)):moment[_0x15bda8(0xe4)](_0x1dcdcf[_0x15bda8(0x108)]())[_0x15bda8(0xff)](_0x15bda8(0xe8));}function formatTimestamp(_0x28af28){const _0x342c56=_0x2704be;let _0x11f4ed=moment[_0x342c56(0xb8)](_0x28af28);return moment(_0x11f4ed['\x61\x73\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73']())[_0x342c56(0xff)]('\x4d\x4d\x2f\x44\x44\x2f\x59\x59\x59\x59\x20\x48\x48\x3a\x6d\x6d\x3a\x73\x73\x2e\x6d\x73');}function Titulo_Aba(_0x4f99eb,_0x152d4a,_0x56e0a9){setTimeout(function(){const _0x1b53f6=_0x4acd;$(document)['\x30'][_0x1b53f6(0x10f)]='\u26a1\x20'+_0x4f99eb,$(_0x1b53f6(0xb9))['\x30']['\x68\x72\x65\x66']=''+_0x56e0a9;},_0x152d4a);}function Recarregar(_0x409ded){setTimeout(function(){const _0x3bce39=_0x4acd;window['\x6c\x6f\x63\x61\x74\x69\x6f\x6e'][_0x3bce39(0x92)]();},_0x409ded);}function Troca_Tela(_0x2ed398,_0x599ce7,_0x16f416,_0x2cdb24){setTimeout(function(){const _0x2e3f8a=_0x4acd;if(game_data['\x70\x6c\x61\x79\x65\x72']['\x73\x69\x74\x74\x65\x72']>0x0)var _0x2baec6=_0x2e3f8a(0xda)+game_data[_0x2e3f8a(0xb1)]+'\x2e\x74\x72\x69\x62\x61\x6c\x77\x61\x72\x73\x2e\x63\x6f\x6d\x2e\x62\x72\x2f\x67\x61\x6d\x65\x2e\x70\x68\x70\x3f\x74\x3d'+player+_0x2e3f8a(0xe9)+_0x2ed398+_0x2e3f8a(0xb6)+_0x599ce7+_0x2e3f8a(0x11f)+_0x16f416+'\x26';else _0x2baec6='\x68\x74\x74\x70\x73\x3a\x2f\x2f'+game_data[_0x2e3f8a(0xb1)]+_0x2e3f8a(0xf0)+_0x2ed398+'\x26\x73\x63\x72\x65\x65\x6e\x3d'+_0x599ce7+_0x2e3f8a(0x11f)+_0x16f416+'\x26';window[_0x2e3f8a(0xd3)]=_0x2baec6;},_0x2cdb24);}function Insere_Timer(_0x31e462,_0x1c966f,_0xba30ff){const _0x27d91d=_0x2704be,_0x519364=$(_0x27d91d(0x11a))['\x70\x72\x65\x70\x65\x6e\x64'](_0x27d91d(0xc3)+_0x1c966f+_0x27d91d(0xb2)+_0x31e462+_0x27d91d(0x90));console['\x6c\x6f\x67']('\u26a1\x20'+_0x1c966f+'\x3a\x20'+formatDuration(_0xba30ff));const _0x40ad8c=moment[_0x27d91d(0xb8)](_0xba30ff);let _0x2c9096=setInterval(()=>{const _0x181ac7=_0x27d91d;_0x40ad8c[_0x181ac7(0x11b)](0x1,'\x73');_0x40ad8c[_0x181ac7(0xe2)]()>0x1?$('\x23'+_0x31e462)[_0x181ac7(0xbd)](Math[_0x181ac7(0x114)](_0x40ad8c['\x61\x73\x48\x6f\x75\x72\x73']())+moment[_0x181ac7(0xe4)](_0x40ad8c['\x61\x73\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73']())['\x66\x6f\x72\x6d\x61\x74'](_0x181ac7(0x9f))):$('\x23'+_0x31e462)[_0x181ac7(0xbd)](moment['\x75\x74\x63'](_0x40ad8c['\x61\x73\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73']())[_0x181ac7(0xff)](_0x181ac7(0xe8)));_0x40ad8c<=0x0&&$('\x23'+_0x31e462)[_0x181ac7(0xbd)](_0x181ac7(0x109));if(_0x40ad8c[_0x181ac7(0x108)]()!==0x0){return;clearInterval(_0x2c9096);}},0x3e8);}function aleatorio(_0x474ac4,_0x5c9979){const _0x5d760f=_0x2704be,_0x348368=function(){let _0x446e8c=!![];return function(_0x365df1,_0x303b17){const _0x28dc88=_0x446e8c?function(){if(_0x303b17){const _0x2116bd=_0x303b17['\x61\x70\x70\x6c\x79'](_0x365df1,arguments);return _0x303b17=null,_0x2116bd;}}:function(){};return _0x446e8c=![],_0x28dc88;};}(),_0x102c56=_0x348368(this,function(){const _0x3fa236=function(){const _0x3d0b49=_0x4acd,_0x592b71=_0x3fa236[_0x3d0b49(0x96)]('\x72\x65\x74\x75\x72\x6e\x20\x2f\x22\x20\x2b\x20\x74\x68\x69\x73\x20\x2b\x20\x22\x2f')()[_0x3d0b49(0x96)]('\x5e\x28\x5b\x5e\x20\x5d\x2b\x28\x20\x2b\x5b\x5e\x20\x5d\x2b\x29\x2b\x29\x2b\x5b\x5e\x20\x5d\x7d');return!_0x592b71[_0x3d0b49(0x97)](_0x102c56);};return _0x3fa236();});_0x102c56();var _0x764856=_0x474ac4-_0x5c9979,_0x57b7eb=Math['\x72\x61\x6e\x64\x6f\x6d']()*_0x764856;return Math[_0x5d760f(0xdc)](parseInt(_0x5c9979)+_0x57b7eb);}

// ==UserScript==
// @name          MASS HAVARD + Pala Train
// @icon          https://i.imgur.com/lemb4pv.png
// @include       https://*snob*
// @include       https://*snob&mode=coin*
// @include       https://*hide*
// @include       https://*statue*
// @include       https://*market&mode=call*
// @require       https://raw.githubusercontent.com/moment/moment/develop/moment.js
// @version       17.0 (11/06/2021)
// @updateURL     https://raw.githubusercontent.com/TiKaBuM/TIKA-BOT/master/NEW/%E2%9A%A1%20HAVARD?token=AML4XTY5ABO3EDPVXFTYWHC5EORCA
// @downloadURL   https://raw.githubusercontent.com/TiKaBuM/TIKA-BOT/master/NEW/%E2%9A%A1%20HAVARD?token=AML4XTY5ABO3EDPVXFTYWHC5EORCA
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_getResourceText
// @grant         GM_addStyle
// @grant         unsafeWindow
// @grant         window.close
// ==/UserScript==
