// Desenvolvimento de Sistema de Gerenciamento de Projetos para a Empresa Sem Bagunça
// Cadastro de Projetos:
// Registro de projetos em andamento, incluindo informações como nome, descrição e equipe responsável.
//  Acompanhamento do progresso de cada projeto, com a definição de marcos e prazos.


class Projetos{
    nome: string;
    descricao: string;
    equipe: string;
    situacao: string;
    dataInicial: Date;
    dataFinal: Date;
    porcentagemConcluida: number;
    valor: number;


    constructor(nome: string, descricao: string, equipe: string, situacao: string, dataInicial: Date, dataFinal: Date, porcentagemConcluida: number, valor: number){
        this.nome = nome,
        this.equipe = equipe,
        this.descricao = descricao,
        this.situacao = situacao,
        this.dataInicial = dataInicial,
        this.dataFinal = dataFinal,
        this.porcentagemConcluida = porcentagemConcluida,
        this.valor = valor  
    }
}

const projeto1000 = new Projetos('Aplicativo de identificação', 'Programadores', 'Criar um aplicativo, que faça identificação dos funcioarios ao registrar entrada e saida da empresa', 'Em produção', new Date('2023-10-23'), new Date('2024-06-25'), 60,2500.00)

console.log(projeto1000);


// Controle de Tarefas:
// Divisão de projetos em tarefas individuais, com atribuição de responsáveis e prazos para conclusão.
// Acompanhamento do status de cada tarefa e notificação de prazos vencidos.

class Tarefas{
    tipoDeTarefa: string;
    projeto: Projetos;
    responsavel: string;
    equipe: string;
    prazoEstipulado: Date;
    statusDaTarefa: string;


    constructor(tipoDeTarefa: string, projeto: Projetos, responsavel: string, equipe: string, prazoEstipulado: Date, statusDaTarefa: string){
    this.tipoDeTarefa = tipoDeTarefa,
    this.projeto = projeto,
    this.responsavel = responsavel,
    this.equipe = equipe,
    this.prazoEstipulado = prazoEstipulado,
    this.statusDaTarefa = statusDaTarefa  
    }
}

const tarefa4 = new Tarefas('Desenvolver banco de dados do aplicativo', projeto1000, 'João Pedro', 'Backend', new Date('2024-01-25'), 'Em Producao')

console.log(tarefa4);


// Comunicação Interna:
// Facilidade para comunicação entre os membros da equipe de cada projeto, através de mensagens e compartilhamento de arquivos
// Registro de discussões e decisões importantes relacionadas aos projetos

class Comunicacao{

    constructor(){}
}