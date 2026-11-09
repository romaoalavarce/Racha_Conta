import fs from 'node:fs';
import pc from 'picocolors';

const texto = fs.readFileSync('src/data/conta.json', 'utf-8');
const conta = JSON.parse(texto);

const subtotal = conta.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);

const QuantSoma = conta.itens.reduce((total, item) => total + item.quantidade, 0);
const filtro = conta.itens.filter((item) => item.preco > 50);

const subtotalCentavos = Math.round(subtotal * 100);
const gorjetaCentavos = Math.round(subtotalCentavos * conta.gorjeta / 100);
const totalCentavos = subtotalCentavos + gorjetaCentavos;


console.log(pc.bold(pc.yellow(pc.underline(pc.italic(('Racha-conta:'))))), conta.restaurante);
console.log('Pessoas na mesa:', conta.pessoas);
console.log("itens na conta:", conta.itens.length);
console.log('Subtotal: R$', subtotal.toFixed(2));
console.table(conta.itens);
console.log(QuantSoma);
console.log("itens acima de 50:", filtro.length);


console.log(`Subtotal: R$ ${(subtotalCentavos / 100).toFixed(2)}`);
console.log(`Gorjeta (${conta.gorjeta}%): R$ ${(gorjetaCentavos / 100).toFixed(2)}`);
console.log(`Total: R$ ${(totalCentavos / 100).toFixed(2)}`);


console.log(`Por pessoa: R$ ${ ((totalCentavos/ 100) / conta.pessoas).toFixed(2)}`);
console.log(`Centavos que sobram: ${totalCentavos % conta.pessoas} centavos`);

