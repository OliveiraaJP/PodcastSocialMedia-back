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
        beginAt: "5/1/2021",
        finished: false,
        image: "https://i.imgur.com/KgulIBP.png",
        description: "O que os melhores psicanalistas do país têm a dizer sobre remédios, maternidade, depressão, síndrome do impostor e fetiches estranhos? No podcast 'Meu Inconsciente Coletivo', a escritora e colunista da Folha, Tati Bernardi, abre ao público alguns temas recorrentes em suas sessões de terapia. Nos episódios, as neuroses da paciente são as mesmas, mas o analista muda a cada sessão. O 'Meu Inconsciente Coletivo' está nos principais agregadores de podcast e tem novos episódios todas as sextas."
    },
    {
        name: "cuidando da alma",
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
    }
]

const podcast_like =[
    {
        userId:1,
        podcastId:4
    },
    {
        userId:1,
        podcastId:2
    }
]


async function main() {
    await prisma.$connect()
    await prisma.user.create({ data: user })
    await prisma.podcast.createMany({data: podcasts})
    await prisma.podcastLike.createMany({data: podcast_like})
}

main()
    .catch((err) => {
        console.log('error seed: ', err);
        process.exit(1)
    }).finally(async () => {
        await prisma.$disconnect()
    })