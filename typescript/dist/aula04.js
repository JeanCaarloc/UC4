"use strict";
class Carro {
    modelo;
    ano;
    marca;
    preco;
    motor;
    cor;
    constructor(modelo, ano, marca, preco, motor, cor) {
        this.ano = ano,
            this.modelo = modelo,
            this.marca = marca,
            this.preco = preco,
            this.motor = motor,
            this.cor = cor;
    }
}
const carrodev = new Carro('Opala', 2000, 'Chevrolet', 45000, 4.1, 'Vermelho');
