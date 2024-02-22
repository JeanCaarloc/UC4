
//  Hospital Chega Doente Sai Bom
// Cadastro de Funcionários:
// Detalhes pessoais e profissionais dos colaboradores

class Pessoa{
    nome: string;
    telefone: string;
    cpf: string;
    data_nascimento: Date;
    email: string;
    endereco: string[];
    genero?: string;
    constructor(nome: string, telefone: string, cpf: string, data_nascimento: Date, email: string, endereco: string[], genero?: string){
        this.nome = nome,
        this.telefone = telefone,
        this.cpf = cpf,
        this.data_nascimento = data_nascimento,
        this.email = email,
        this.endereco = endereco,
        this.genero = genero
    }
    mostrarDados(){
        console.log('------------------Dados das Pessoas------------------');
        console.log(`Nome______________: ${this.nome}`);
        console.log(`Telefone__________: ${this.telefone}`);
        console.log(`CPF_______________: ${this.cpf}`);
        console.log(`Data de Nascimento: ${this.data_nascimento}`);
        console.log(`Email_____________: ${this.email}`);
        console.log(`Endereco__________: ${this.endereco}`);
        if (this.genero) {
            console.log(`Genero____________: ${this.genero}`);}

    }
}


//Classe funcionario
class Funcionarios extends Pessoa {

    matricula: string;
    cargo: string;

    constructor(nome: string, telefone: string, cpf: string, data_nascimento: Date, email: string, endereco: string[],matricula: string,cargo: string, genero?: string){
        super(nome,telefone, cpf, data_nascimento,email,endereco,genero)
        this.matricula = matricula,
        this.cargo = cargo
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`Cargo_____________: ${this.cargo}`);
        console.log(`Matricula_________: ${this.matricula}`)
        console.log('---------------------------------------------');
    }

}

const funcionario1 = new Funcionarios('Dr.Fulano', "84912457832",'12457823610',new Date("1993-18-12"),'fulano@gmail.com', ['Rua São Jose', '100'], '78526','medico', "Masculino" )
funcionario1.mostrarDados()


// Cadastro de Consultas:
// Dados específicos sobre cada consulta, incluindo informações importantes
class Consultas extends Pessoa{
    especialidade: string;
    horario: Date;
    plano: string;

    constructor(nome: string, telefone: string, cpf: string, data_nascimento: Date, email: string, endereco: string[], especialidade: string, horario: Date, plano: string, genero?: string){
        super(nome,telefone,cpf,data_nascimento,email,endereco,genero)
        this.especialidade = especialidade,
        this.horario = horario,
        this.plano = plano
    }
    mostrarDados() {
        super.mostrarDados()
        console.log(`Especialidade_____: ${this.especialidade}`);
        console.log(`Horario___________: ${this.horario.getTime}`);
        console.log(`Plano_____________: ${this.plano}`);   
        console.log('---------------------------------------------');
    }
        
}

const consulta2 = new Consultas('Ciclano', '84932786545', '78932146502',new Date("1990-05-03"), 'ciclano@gmail.com', ['Rua do senac', 'Numero 200','Bairro Senac','Cidade Senac'],'Ortopedista', new Date("13:30:30"), 'HapVidas')
consulta2.mostrarDados()

// Cadastro de Pacientes:
// Dados pessoais com informações relevantes que possam contatar o paciente
class Pacientes extends Pessoa {
   
    plano: string;
    setor: string;
    diagnostico: string;

    constructor(nome: string, telefone: string, cpf: string, data_nascimento: Date, email: string, endereco: string[], plano: string, setor: string, diagnostico: string, genero?: string, ){
        super(nome,telefone,cpf,data_nascimento,email,endereco,genero)
        this.plano = plano,
        this.setor = setor,
        this.diagnostico = diagnostico
    }
}

const paciente111 = new Pacientes('Beltrano', '84973194628', '79431646589', new Date('2000-02-10'), 'beltrano@gmail.com',['Rua das ostras','78','Mae Luiza','Natal'],'HapVida','Setor 04','Dor de Cabeça e Febre','Masculino')
paciente111.mostrarDados()



//  Desenvolvimento de Sistema de Gestão de Biblioteca para a Biblioteca Leitura Certa
// Cadastro de Livros:
// Detalhes sobre cada livro, incluindo título, autor, editora e categoria
// Registro da quantidade de cópias disponíveis de cada livro.

class Livros{
    letraInicial: string;
    titulo: string;
    autor: string;
    editora: string;
    categoria: string;
    data: Date;
    registro: number;
    quantidade: number;
    
    constructor(letraIncial: string, titulo: string, autor: string, editora: string, categoria: string, data: Date, registro: number, quantidade: number){
        this.letraInicial = letraIncial,
        this.titulo = titulo,
        this.autor = autor,
        this.editora = editora,
        this.categoria = categoria,
        this.data = data,
        this.registro = registro,
        this.quantidade = quantidade
    }
}

const livro1 = new Livros('D', 'Devolps Senac', 'Valtemir', 'Darkside Books', 'Desenvolvimento de Software', new Date('2023-10-28'), 4592,100)

console.log(livro1);


// Cadastro de Usuários:
// Informações pessoais dos usuários cadastrados na biblioteca, como nome, endereço e telefone
// Histórico de empréstimos e devoluções de cada usuário

class Usuários{
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    endereco: string;
    livroAlocado?: Livros;

    constructor(id: number, nome: string, cpf: string, telefone: string, email: string, endereco: string, livroAlocado?: Livros){
        this.id = id,
        this.nome = nome,
        this.cpf = cpf,
        this.telefone = telefone,
        this.email = email,
        this.endereco = endereco,
        this.livroAlocado = livroAlocado 
       }
}

const usuario10 = new Usuários(111, 'Jean', '12345678910', '84912459865', 'jeandevolpssenac@gmail.com', 'rua sao jose 10', livro1 )

console.log(usuario10);


// Empréstimo de Livros:
// Registro de empréstimos realizados, incluindo data de empréstimo, data de devolução e informações do usuário e do livro emprestado

class Emprestimo_Livros{
    registroEmprestimo: number;
    dataSaida: Date;
    dataDevolucao: Date;
    usuario: Usuários;
    livro: Livros;

    constructor(registroEmprestimo: number, dataSaida: Date, dataDevolucao: Date, usuario: Usuários, livro: Livros){
        this.registroEmprestimo = registroEmprestimo,
        this.dataSaida = dataSaida,
        this.dataDevolucao = dataDevolucao,
        this.usuario = usuario,
        this.livro = livro
    }
}

const livroEmprestado = new Emprestimo_Livros(55, new Date('2024-02-10'), new Date('2024-02-20'), usuario10, livro1)

console.log(livroEmprestado);




// Desenvolvimento de Sistema de Gerenciamento de Finanças Pessoais para o Banco Dinheiro Seguro
// Cadastro de Contas:
// Registro das contas bancárias dos clientes, incluindo informações como saldo, tipo de conta e titularidade
// Histórico de transações realizadas em cada conta

class Contas{
    banco: string;
    agencia: string;
    conta: string;
    digito: string;
    tipo: string;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    endereco: string;
    saldo: number;
    extrato: string;
    limiteCredito: number;
    emprestimo?: number;
    poupanca?: number;
  

    constructor(banco: string, agencia: string, conta: string, digito: string, tipo: string, nome: string, cpf: string, email: string, telefone: string, endereco: string, saldo: number, extrato: string, limiteCredito: number, emprestimo?: number, poupanca?: number){
        this.banco = banco,
        this.agencia = agencia,
        this.conta = conta,
        this.digito = digito,
        this.tipo = tipo,
        this.nome = nome,
        this.cpf = cpf,
        this.email = email,
        this.telefone = telefone,
        this.endereco = endereco,
        this.saldo = saldo,
        this.extrato = extrato,
        this.limiteCredito = limiteCredito,
        this.emprestimo = emprestimo,
        this.poupanca = poupanca
    }
}

const contasCadastrada = new Contas('1442', '001512', '123', '01', 'conta corrente', 'Jean Carlo', '12345678912', 'jeansenac@edu.com.br', '84978452356', 'rua sao jose 100', 1000.00,'Transferencia não concluida por falta de Saldo', 1500.00)

console.log(contasCadastrada);


// Controle de Despesas e Receitas:
// Registro de despesas e receitas de cada cliente, categorizando cada transação.
// Análise de gastos mensais e geração de relatórios sobre o fluxo financeiro.

class Despesas{
    cliente: Contas;
    descricao: string;
    data: Date;
    valor: number;
    formaDePagamento: string;


    constructor(cliente: Contas, descricao: string, data: Date, valor: number,formaDePagamento: string){
        this.cliente = cliente,
        this.descricao = descricao,
        this.data = data,
        this.valor = valor,
        this.formaDePagamento = formaDePagamento
    }
}

const despesasx = new Despesas(contasCadastrada,'Netflix', new Date("2024-02-20"), 45.00,'Debito Automatico')

console.log(despesasx);


class Receitas{
    cliente: Contas;
    descricao: string;
    data: Date;
    valor: number;
    categoria: string;
    origem: string;


    constructor(cliente: Contas, descricao: string, data: Date, valor: number, categoria: string, origem: string){
        this.cliente = cliente,
        this.descricao = descricao,
        this.data = data,
        this.valor = valor,
        this.categoria = categoria,
        this.origem = origem
    }
}

const receitasx = new Receitas(contasCadastrada, 'Fortune Tiger', new Date("2024-02-20"), 350.00, 'pix', 'Banco Daycoval-Conta 1626-cpf ***152345**')

console.log(receitasx);


// Planejamento Financeiro:
// Funcionalidade para estabelecer metas financeiras, como economizar para uma viagem ou pagar dívidas, e acompanhar o progresso.

class Financeiro{
    metas: string;
    valorInvestido: number;
    dataDaMeta: Date;
    descricao: string;
    rendimentoAnual: number;

    constructor(metas: string, valorInvestido: number, dataDaMeta: Date, descricao: string, rendimentoAnual: number){
        this.metas = metas;
        this.valorInvestido = valorInvestido;
        this.dataDaMeta = dataDaMeta;
        this.descricao = descricao;
        this.rendimentoAnual = rendimentoAnual
    }
}

const financeirox = new Financeiro('Viajar', 2000.00, new Date("2025-07-01"), 'Viagem para os E.U.A', 12.5)

console.log(financeirox);


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