const readline = require('node:readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {

    console.log('Calculadora JS');

    // 1. Entrada dos dados
    const n1 = Number(await rl.question('Digite o primeiro número: '));
    const operacao = await rl.question('Digite a operação (+, -, *, /): ');
    const n2 = Number(await rl.question('Digite o segundo número: '));

    let resultado;

    // 2. Validação dos números
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        console.log('Erro: digite números válidos.');
        rl.close();
        return;
    }

    // 3. Cálculos
    switch (operacao) {
        case '+':
            resultado = n1 + n2;
            break;

        case '-':
            resultado = n1 - n2;
            break;

        case '/':
            if (n2 === 0) {
                console.log('Erro: não é possível dividir por zero.');
                rl.close();
                return;
            }
            resultado = n1 / n2;
            break;

        case '*':
            resultado = n1 * n2;
            break;

        default:
            console.log('Erro: operação inválida.');
            rl.close();
            return;
    }

    // 4. Exibir resultado
    console.log(`Resultado: ${resultado}`);

    rl.close();
}

main();
