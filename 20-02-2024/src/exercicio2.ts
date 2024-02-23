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