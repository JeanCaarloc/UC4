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