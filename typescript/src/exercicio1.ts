//  Hospital Chega Doente Sai Bom
// Cadastro de Funcionários:
// Detalhes pessoais e profissionais dos colaboradores
class Funcionarios{
    nome: string;
    cargo: string;
    especialidade: string;
    equipe: string;

    constructor(nome: string, cargo: string,especialidade: string, equipe: string){
        this.nome = nome,
        this.cargo = cargo,
        this.especialidade = especialidade,
        this.equipe = equipe
    }
}

const funcionario1 = new Funcionarios('Jeremias', 'Medico', 'Pediatra', 'Setor 04')

console.log(funcionario1);

// Cadastro de Consultas:
// Dados específicos sobre cada consulta, incluindo informações importantes
class Consultas{
    especialidade: string;
    profissional: string;
    data: Date;
    horario: Date;
    paciente: string;
    plano: string;
    cpf: string;
    celular: string; 

    constructor(especialidade: string,profissional: string, data: Date, horario: Date, paciente: string, plano: string, cpf: string, celular: string){
        this.especialidade = especialidade,
        this.profissional = profissional,
        this.data = data,
        this.horario = horario,
        this.paciente = paciente,
        this.plano = plano,
        this.cpf = cpf,
        this.celular = celular
    }
}

const consulta2 = new Consultas('Ortopedista', 'Dr.Daniel', new Date(2024,3,3), new Date(14,30), 'Robervaldo', 'Gold', '123456798-20', '84981584195');

console.log(consulta2);

// Cadastro de Pacientes
// Dados pessoais com informações relevantes que possam contatar o paciente
class Pacientes{
    nome
    plano
    cpf
    celular
    setor
    profissionalResponsavel
    constructor(){

    }
}