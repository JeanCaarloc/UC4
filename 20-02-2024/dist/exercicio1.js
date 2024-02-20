"use strict";
//  Hospital Chega Doente Sai Bom
// Cadastro de Funcionários:
// Detalhes pessoais e profissionais dos colaboradores
class Funcionarios {
    nome;
    cargo;
    especialidade;
    equipe;
    email;
    dataNascimento;
    constructor(nome, cargo, especialidade, equipe, email, dataNascimento) {
        this.nome = nome,
            this.cargo = cargo,
            this.especialidade = especialidade,
            this.equipe = equipe,
            this.email = email,
            this.dataNascimento = dataNascimento;
    }
}
const funcionario1 = new Funcionarios('Jeremias', 'Medico', 'Ortopedista', 'Setor 04', 'jeremiaspontes@gmail.com', new Date("1993-02-01"));
console.log(funcionario1);
// Cadastro de Consultas:
// Dados específicos sobre cada consulta, incluindo informações importantes
class Consultas {
    especialidade;
    medico;
    data;
    horario;
    paciente;
    plano;
    cpf;
    celular;
    constructor(especialidade, medico, data, horario, paciente, plano, cpf, celular) {
        this.especialidade = especialidade,
            this.medico = medico,
            this.data = data,
            this.horario = horario,
            this.paciente = paciente,
            this.plano = plano,
            this.cpf = cpf,
            this.celular = celular;
    }
}
const consulta2 = new Consultas('Ortopedista', funcionario1, new Date("2024,3,3"), new Date(14, 30), 'Robervaldo', 'Gold', '123456798-20', '84981584195');
console.log(consulta2);
// Cadastro de Pacientes:
// Dados pessoais com informações relevantes que possam contatar o paciente
class Pacientes {
    nome;
    plano;
    cpf;
    telefone;
    setor;
    medico;
    diagnostico;
    constructor(nome, plano, cpf, telefone, setor, medico, diagnostico) {
        this.nome = nome,
            this.plano = plano,
            this.cpf = cpf,
            this.telefone = telefone,
            this.setor = setor,
            this.medico = medico,
            this.diagnostico = diagnostico;
    }
}
const paciente111 = new Pacientes('Malaquias', 'Gold', '54267880101', '84956237845', 'Setor02', funcionario1, 'A patela do joelho esta fora do lugar, paciente sentindo muita dor');
console.log(paciente111);
//  Desenvolvimento de Sistema de Gestão de Biblioteca para a Biblioteca Leitura Certa
// Cadastro de Livros:
// Detalhes sobre cada livro, incluindo título, autor, editora e categoria
// Registro da quantidade de cópias disponíveis de cada livro.
class Livros {
    letraInicial;
    titulo;
    autor;
    editora;
    categoria;
    data;
    registro;
    quantidade;
    constructor(letraIncial, titulo, autor, editora, categoria, data, registro, quantidade) {
        this.letraInicial = letraIncial,
            this.titulo = titulo,
            this.autor = autor,
            this.editora = editora,
            this.categoria = categoria,
            this.data = data,
            this.registro = registro,
            this.quantidade = quantidade;
    }
}
const livro1 = new Livros('D', 'Devolps Senac', 'Valtemir', 'Darkside Books', 'Desenvolvimento de Software', new Date('2023-10-28'), 4592, 100);
console.log(livro1);
// Cadastro de Usuários:
// Informações pessoais dos usuários cadastrados na biblioteca, como nome, endereço e telefone
// Histórico de empréstimos e devoluções de cada usuário
class Usuários {
    id;
    nome;
    cpf;
    telefone;
    email;
    endereco;
    livroAlocado;
    constructor(id, nome, cpf, telefone, email, endereco, livroAlocado) {
        this.id = id,
            this.nome = nome,
            this.cpf = cpf,
            this.telefone = telefone,
            this.email = email,
            this.endereco = endereco,
            this.livroAlocado = livroAlocado;
    }
}
const usuario10 = new Usuários(111, 'Jean', '12345678910', '84912459865', 'jeandevolpssenac@gmail.com', 'rua sao jose 10', livro1);
console.log(usuario10);
// Empréstimo de Livros:
// Registro de empréstimos realizados, incluindo data de empréstimo, data de devolução e informações do usuário e do livro emprestado
class Emprestimo_Livros {
    registroEmprestimo;
    dataSaida;
    dataDevolucao;
    usuario;
    livro;
    constructor(registroEmprestimo, dataSaida, dataDevolucao, usuario, livro) {
        this.registroEmprestimo = registroEmprestimo,
            this.dataSaida = dataSaida,
            this.dataDevolucao = dataDevolucao,
            this.usuario = usuario,
            this.livro = livro;
    }
}
const livroEmprestado = new Emprestimo_Livros(55, new Date('2024-02-10'), new Date('2024-02-20'), usuario10, livro1);
console.log(livroEmprestado);
// Desenvolvimento de Sistema de Gerenciamento de Finanças Pessoais para o Banco Dinheiro Seguro
// Cadastro de Contas:
// Registro das contas bancárias dos clientes, incluindo informações como saldo, tipo de conta e titularidade
// Histórico de transações realizadas em cada conta
class Contas {
    banco;
    agencia;
    conta;
    digito;
    nome;
    cpf;
    email;
    telefone;
    endereco;
    saldo;
    extrato;
    limeteCredito;
    emprestimo;
    poupanca;
    constructor() { }
}
