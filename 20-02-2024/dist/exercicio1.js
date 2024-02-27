"use strict";
//  Hospital Chega Doente Sai Bom
// Cadastro de Funcionários:
// Detalhes pessoais e profissionais dos colaboradores
class Pessoa {
    nome;
    telefone;
    cpf;
    data_nascimento;
    email;
    endereco;
    genero;
    constructor(nome, telefone, cpf, data_nascimento, email, endereco, genero) {
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.email = email;
        this.endereco = endereco;
        this.genero = genero;
    }
    mostrarDados() {
        console.log('------------------Dados das Pessoas------------------');
        console.log(`Nome______________: ${this.nome}`);
        console.log(`Telefone__________: ${this.telefone}`);
        console.log(`CPF_______________: ${this.cpf}`);
        console.log(`Data de Nascimento: ${this.data_nascimento}`);
        console.log(`Email_____________: ${this.email}`);
        console.log(`Endereco__________: ${this.endereco}`);
        if (this.genero) {
            console.log(`Genero____________: ${this.genero}`);
        }
    }
}
//Classe funcionario
class Funcionarios extends Pessoa {
    matricula;
    cargo;
    constructor(nome, telefone, cpf, data_nascimento, email, endereco, matricula, cargo, genero) {
        super(nome, telefone, cpf, data_nascimento, email, endereco, genero);
        this.matricula = matricula,
            this.cargo = cargo;
    }
    mostrarDados() {
        super.mostrarDados();
        console.log(`Cargo_____________: ${this.cargo}`);
        console.log(`Matricula_________: ${this.matricula}`);
        console.log('---------------------------------------------');
    }
}
//const funcionario1 = new Funcionarios('Dr.Fulano', "84912457832",'12457823610',new Date("1993-18-12"),'fulano@gmail.com', ['Rua São Jose', '100'], '78526','medico', "Masculino" )
//funcionario1.mostrarDados()
// Cadastro de Pacientes:
// Dados pessoais com informações relevantes que possam contatar o paciente
class Pacientes extends Pessoa {
    plano;
    setor;
    diagnostico;
    constructor(nome, telefone, cpf, data_nascimento, email, endereco, plano, setor, diagnostico, genero) {
        super(nome, telefone, cpf, data_nascimento, email, endereco, genero);
        this.plano = plano,
            this.setor = setor,
            this.diagnostico = diagnostico;
    }
}
//const paciente111 = new Pacientes('Beltrano', '84973194628', '79431646589', new Date('2000-02-10'), 'beltrano@gmail.com',['Rua das ostras','78','Mae Luiza','Natal'],'HapVida','Setor 04','Dor de Cabeça e Febre','Masculino')
//paciente111.mostrarDados()
// Cadastro de Consultas:
// Dados específicos sobre cada consulta, incluindo informações importantes
class Consultas extends Pessoa {
    especialidade;
    horario;
    plano;
    constructor(nome, telefone, cpf, data_nascimento, email, endereco, especialidade, horario, plano, genero) {
        super(nome, telefone, cpf, data_nascimento, email, endereco, genero);
        this.especialidade = especialidade,
            this.horario = horario,
            this.plano = plano;
    }
    mostrarDados() {
        super.mostrarDados();
        console.log(`Especialidade_____: ${this.especialidade}`);
        console.log(`Horario___________: ${this.horario.getTime}`);
        console.log(`Plano_____________: ${this.plano}`);
        console.log('---------------------------------------------');
    }
}
const consulta2 = new Consultas('Ciclano', '84932786545', '78932146502', new Date("1990-05-03"), 'ciclano@gmail.com', ['Rua do senac', 'Numero 200', 'Bairro Senac', 'Cidade Senac'], 'Ortopedista', new Date("13:30:30"), 'HapVidas');
consulta2.mostrarDados();
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#formFuncionario');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const endereco = document.getElementById('endereco').value;
            const cpf = document.getElementById('cpf').value;
            const genero = document.getElementById('genero').value;
            const cargo = document.getElementById('cargo').value;
            const matricula = document.getElementById('matricula').value;
            // Armazenar os dados do funcionário no localStorage
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('telefone', telefone);
            localStorage.setItem('dataNascimento', dataNascimento);
            localStorage.setItem('endereco', endereco);
            localStorage.setItem('cpf', cpf);
            localStorage.setItem('genero', genero);
            localStorage.setItem('cargo', cargo);
            localStorage.setItem('matricula', matricula);
            // Redirecionar para a página da tabela
            window.location.href = './funcionario.html';
        });
    }
    else {
        console.error('O formulário não foi encontrado.');
    }
});
