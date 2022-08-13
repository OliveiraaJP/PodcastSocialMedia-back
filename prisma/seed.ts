import prisma from "../src/config/database.js";
import bcrypt from "bcrypt"

const cryptpass = bcrypt.hashSync('123', 10)

const user = 
    {
        email: "carol@email.com",
        username: "Carolinda Hazzan",
        password: cryptpass,
        image: "https://i.imgur.com/5JS4bOL.png"
    }

const podcasts = [
    {
        name: "Paciente 63",
        episodes: 20,
        beginAt: "03/06/2021",
        finished: false,
        image: "https://i.imgur.com/mhuyBpx.png",
        description: "Ano de 2022. A psiquiatra Elisa Amaral grava as sessões de um enigmático paciente — registrado como Paciente 63 — que diz ser um viajante no tempo. Aquilo que começa como sessões terapêuticas de rotina se transforma rapidamente num relato que ameaça as fronteiras do possível e do real. Uma história que transita entre o futuro e o passado de dois personagens que podem ter nas mãos o futuro da humanidade. Protagonizada por Mel Lisboa e Seu Jorge, Paciente 63 é um podcast Original Spotify."
    },
    {
        name: "Meu Insconsciente Coletivo",
        episodes: 34,
        beginAt: "05/01/2021",
        finished: false,
        image: "https://i.imgur.com/KgulIBP.png",
        description: "O que os melhores psicanalistas do país têm a dizer sobre remédios, maternidade, depressão, síndrome do impostor e fetiches estranhos? No podcast 'Meu Inconsciente Coletivo', a escritora e colunista da Folha, Tati Bernardi, abre ao público alguns temas recorrentes em suas sessões de terapia. Nos episódios, as neuroses da paciente são as mesmas, mas o analista muda a cada sessão. O 'Meu Inconsciente Coletivo' está nos principais agregadores de podcast e tem novos episódios todas as sextas."
    },
    {
        name: "Cuidando da alma",
        episodes: 67,
        beginAt: "15/11/2021",
        finished: false,
        image: "https://i.imgur.com/7Aa9EGS.png",
        description: "Podcast do Rossandro Klinjey"
    },
    {
        name: "Mulher da casa abandonada",
        episodes: 9,
        beginAt: "01/06/2021",
        finished: false,
        image: "https://i.imgur.com/jrdcE6A.png",
        description: "A Mulher da Casa Abandonada é um podcast narrativo da Folha que investiga a história de vida de uma figura misteriosa. Uma mulher que mora em uma mansão em pandarecos em Higienópolis, um dos bairros mais ricos de São Paulo, e se apresenta como Mari. Mas Mari não é quem diz ser. É o que descobre o repórter Chico Felitti, em uma apuração de seis meses que passa por uma praça de São Paulo, por um subúrbio de Washington e por uma empresa que faz foguetes e satélites para a Nasa. Por trás do nome inventado e de uma camada de pomada branca que passa na cara, Mari esconde a acusação de ter cometido nos Estados Unidos, vinte anos atrás, um crime hediondo. Essa pessoa escapou de um julgamento nos EUA e do FBI, e tem sua história contada pela primeira vez."
    },
    {
        name: "Mano a mano",
        episodes: 43,
        beginAt: "13/08/2021",
        finished: false,
        image: "https://i.imgur.com/2WGN6ug.png",
        description: "Salve rapa! Salve massa! Mano Brown vem para ampliar a visão e o debate trazendo diversidade de ideias e pensamentos com profundidade e respeito. Se prepare para ouvir assuntos importantes, interessantes, relatos inéditos e controversos com convidados amados ou odiados - você decide! Todas as quintas-feiras já estão reservadas para esse papo no melhor estilo Mano a Mano, um original Spotify."
    },
    {
        name: "Respondendo em voz alta",
        episodes: 63,
        beginAt: "13/03/2019",
        finished: false,
        image: "https://i.imgur.com/Gr88wTu.png",
        description: "Laurinha Lero responde em voz alta, toda quinzena, as melhores perguntas dos ouvintes. Se você nunca ouviu o Respondendo, comece pelo 12 da primeira temporada ou por qualquer outro que não seja o piloto, pelo amor de deus. Arte por @mttscz, música por @bacaliau. Se você quiser aparecer no Respondendo, manda a sua pergunta lá no t.me/laurinhalero mas se for muito longa eu não vou ouvir"
    },
    {
        name: "Central de astrologia",
        episodes: 26,
        beginAt: "20/09/2021",
        finished: false,
        image: "https://i.imgur.com/GyeHhT0.png",
        description: "E se você pudesse ligar no 0800-astral pra reclamar de ter nascido com seu mapa natal? Ou pedir para devolver um Mercúrio que atrapalha, uma Lua sensível demais, ou uma Vênus que não ajuda nos dates? Hoje você está com sorte! Na Central de Astrologia, a Madama Brona, sua astróloga desmotivacional, vai ouvir reclamações e dar conselhos para planejar sua semana - sem nenhuma garantia de sucesso! Um Original Spotify, com episódio novo toda segunda-feira."
    },
    {
        name: "Hangar 18",
        episodes: 123,
        beginAt: "10/12/2018",
        finished: true,
        image: "https://i.imgur.com/740Kqkn.png",
        description: "Hangar 18 é um podcast sobre ufologia e casos do insólito criado por Cristiano Zoucas e Fernando Ribas, dois amigos que dividem o mesmo interesse pelo assunto e discutem os mais diversos temas e casos num bate papo informal, com seriedade e descontração na medida certa."
    },
    {
        name: "Os crimes da ditadura",
        episodes: 42,
        beginAt: "12/11/2020",
        finished: false,
        image: "https://i.imgur.com/yqMHszU.png",
        description: "Relatos dos crimes cometidos pelo estado brasileiro em nome do regime militar, que existiu oficialmente no Brasil no período de 1964 a 1985. Episódios novos a cada 15 dias, sempre às segundas-feiras!"
    },
    {
        name: "Modus operandi",
        episodes: 128,
        beginAt: "02/12/2019",
        finished: false,
        image: "https://i.imgur.com/3J3C3IP.png",
        description: "Podcast de true crime feito por Carol Moreira e Mabê."
    }


]

const podcast_like = [
    {
        userId: 1,
        podcastId: 4
    },
    {
        userId: 1,
        podcastId: 2
    }
]


async function main() {
    await prisma.$connect()
    await prisma.user.create({ data: user })
    await prisma.podcast.createMany({ data: podcasts })
    await prisma.podcastLike.createMany({ data: podcast_like })
}

main()
    .catch((err) => {
        console.log('error seed: ', err);
        process.exit(1)
    }).finally(async () => {
        await prisma.$disconnect()
    })