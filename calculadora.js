function calcularPagamento() {

    let valorConta = parseFloat(document.getElementById("valor").value);
    let numeroPessoas = parseInt(document.getElementById("pessoas").value);
    let metodo = parseInt(document.getElementById("metodo").value);
    let gorjeta = document.getElementById("gorjeta").checked ? valorConta * 0.1 : 0;
    let pagamentoCliente = valorConta / numeroPessoas;

   

    while (true) {
        console.log("Método de pagamento:");
        if (metodo === 1) {
            //  no modo pix sem gorjeta
            let valcomdezmenos = valorConta * 0.9;
            let valcomdezmenospp = valcomdezmenos / numeroPessoas;

            //  no modo pix com gorjta
            if (gorjeta > 0) {
                let valtotalcomgorjeta = valcomdezmenos + gorjeta;
                let valtotalcomgorjetapp = valtotalcomgorjeta / numeroPessoas;
                alert("\nAdicionando a GORJETA não fornecemos desconto no PIX/Dinheiro \n\nTotal da mesa: R$" + valtotalcomgorjeta.toFixed(2) + ". E por pessoa " + valtotalcomgorjetapp.toFixed(2));
            }
            else {
                alert("Calculando os 10% de desconto do PIX / Dinheiro...\nO total da mesa é: R$" + valcomdezmenos.toFixed(2) + ". E por pessoa " + valcomdezmenospp.toFixed(2));
            }
            break;


        }
        else if (metodo === 2) {
            //com gorjeta
            if (gorjeta > 0) {
                let valtotalcomgorjeta = valorConta + gorjeta;
                let valtotalcomgorjetapp = valtotalcomgorjeta / numeroPessoas;
                alert("\nAdicionando a GORJETA\nTotal da mesa: R$" + valtotalcomgorjeta.toFixed(2) + ". E por pessoa " + valtotalcomgorjetapp.toFixed(2));
                break;
            }
            else {
                //semgorjeta
                alert("O total da mesa é: R$" + valorConta.toFixed(2) + ". E por pessoa " + pagamentoCliente.toFixed(2));
                break;
            }
        }
    }
}



calcularPagamento();