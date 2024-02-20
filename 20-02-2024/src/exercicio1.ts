//  Hospital Chega Doente Sai Bom
// Cadastro de Funcionários:
// Detalhes pessoais e profissionais dos colaboradores
class Funcionarios{
    nome: string;
    cargo: string;
    especialidade: string;
    equipe: string;
    email: string;
    dataNascimento: Date;

    constructor(nome: string, cargo: string,especialidade: string, equipe: string, email: string,dataNascimento: Date){
        this.nome = nome,
        this.cargo = cargo,
        this.especialidade = especialidade,
        this.equipe = equipe,
        this.email = email,
        this.dataNascimento =dataNascimento
    }
}

const funcionario1 = new Funcionarios('Jeremias', 'Medico', 'Ortopedista', 'Setor 04', 'jeremiaspontes@gmail.com',new Date("1993-02-01"))

console.log(funcionario1);

// Cadastro de Consultas:
// Dados específicos sobre cada consulta, incluindo informações importantes
class Consultas{
    especialidade: string;
    medico: Funcionarios;
    data: Date;
    horario: Date;
    paciente: string;
    plano: string;
    cpf: string;
    celular: string; 

    constructor(especialidade: string,medico: Funcionarios, data: Date, horario: Date, paciente: string, plano: string, cpf: string, celular: string){
        this.especialidade = especialidade,
        this.medico = medico,
        this.data = data,
        this.horario = horario,
        this.paciente = paciente,
        this.plano = plano,
        this.cpf = cpf,
        this.celular = celular
    }
}

const consulta2 = new Consultas('Ortopedista', funcionario1, new Date("2024,3,3"), new Date(14,30), 'Robervaldo', 'Gold', '123456798-20', '84981584195');

console.log(consulta2);

// Cadastro de Pacientes:
// Dados pessoais com informações relevantes que possam contatar o paciente
class Pacientes{
    nome: string;
    plano: string;
    cpf: string;
    telefone: string;
    setor: string;
    medico: Funcionarios;
    diagnostico: string;

    constructor(nome: string,plano: string,cpf: string,telefone: string,setor: string,medico: Funcionarios,diagnostico: string){
        this.nome = nome,
        this.plano = plano,
        this.cpf = cpf,
        this.telefone = telefone,
        this.setor = setor,
        this.medico = medico,
        this.diagnostico = diagnostico
    }
}

const paciente111 = new Pacientes('Malaquias', 'Gold', '54267880101','84956237845','Setor02',funcionario1,'A patela do joelho esta fora do lugar, paciente sentindo muita dor')

console.log(paciente111);



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

const contaCadastrada = new Contas('1442', '001512', '123', '01', 'conta corrente', 'Jean Carlo', '12345678912', 'jeansenac@edu.com.br', '84978452356', 'rua sao jose 100')