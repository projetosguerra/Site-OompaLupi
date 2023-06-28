/* function calcularTotal() {
    const qtd = document.getElementById("quantity").value;
    const preco = document.getElementById("price").value;
    const total = qtd * preco;
    document.getElementById("total").innerHTML = "Total: R$" + total.toFixed(2);
}

function adicionarAoCarrinho(nomeProduto, price){
            var carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};
            if(carrinho[nomeProduto]){
                carrinho[nomeProduto].quantidade += 1;
            } else {
                carrinho[nomeProduto] = {
                    preco: precoProduto,
                    quantidade: 1
                };
            }
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            alert("O produto " + nomeProduto + " foi adicionado ao seu carrinho!");
} */

        // função para adicionar um produto ao carrinho
        function adicionarAoCarrinho(nomeProduto, precoProduto) {
            // busca o carrinho no Local Storage ou cria um novo objeto vazio
            var carrinho = JSON.parse(localStorage.getItem("carrinho") || "{}");
            // verifica se o produto já existe no carrinho
            if (carrinho[nomeProduto]) {
                // se sim, incrementa a quantidade
                carrinho[nomeProduto].quantidade++;
            } else {
                // se não, adiciona o produto com a quantidade 1
                carrinho[nomeProduto] = {preco: precoProduto, quantidade: 1};
            }
            // salva o carrinho atualizado no Local Storage
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            alert("O produto " + nomeProduto + " foi adicionado ao seu carrinho!");
        }

        // função para atualizar a quantidade de um item no carrinho
        function atualizarQuantidade(nome, quantidade) {
            // busca o carrinho no Local Storage
            var carrinho = JSON.parse(localStorage.getItem("carrinho"));
            // atualiza a quantidade para este item
            carrinho[nome].quantidade = parseInt(quantidade);
            // salva o carrinho atualizado no Local Storage
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            // recarrega a página do carrinho
            carregarCarrinho();
        }

        // Função para carregar os itens do carrinho
        function carregarCarrinho() {
            // Código para carregar itens aqui
            var carrinho = JSON.parse(localStorage.getItem("carrinho") || "{}");
            // seleciona a tabela do carrinho
            var tbody = document.getElementById("itens-carrinho");
            // limpa o conteúdo anterior da tabela
            tbody.innerHTML = "";
            // variável para armazenar o total da compra
            var total = 0;
            // percorre todos os itens do carrinho
            for (var nome in carrinho) {
                var produto = carrinho[nome];
                // calcula o subtotal deste item
                var subtotal = produto.quantidade * produto.preco;
                total += subtotal;
                // adiciona este item na tabela do carrinho
                var tr = document.createElement("tr");
                tr.innerHTML = "<td>" + nome + "</td>" +
                               '<td><input type="number" value="' + produto.quantidade + '" onchange="atualizarQuantidade(\'' + nome + '\', this.value)"></td>' +
                               "<td>R$ " + subtotal.toFixed(2) + "</td>";
                tbody.appendChild(tr);
            }
            // atualiza o valor total da compra
            document.getElementById("total-carrinho").innerHTML = "Total: R$ " + total.toFixed(2);

            // Adiciona a classe de animação aos elementos da tabela
            const elementosTabela = document.querySelectorAll("#itens-carrinho tr");
            elementosTabela.forEach((elemento) => elemento.classList.add("fade-in"));
        }

            // Função para limpar o carrinho
            function limparCarrinho() {
            // Código para limpar o carrinho aqui
            localStorage.removeItem("carrinho");
            // recarrega a página do carrinho
            location.reload();

            // Remove todos os elementos filhos da tabela (exceto o footer)
            const tbody = document.getElementById("itens-carrinho");
            while (tbody.firstChild && tbody.firstChild.tagName !== "TR") {
            tbody.removeChild(tbody.firstChild);
            }

            // Atualiza o total do carrinho
            const total = document.getElementById("total-carrinho");
            total.innerHTML = "Total: R$ 0,00";
        }

        function aplicarDesconto() {
        var cupomInput = document.getElementById("cupom");
        var cupom = cupomInput.value;
        var valorTotalElement = document.getElementById("total-carrinho");
        var valorTotal = parseFloat(valorTotalElement.innerText.replace("Total: R$ ", ""));
        if (cupom === "EtecMCM") {
            var desconto = valorTotal * 0.1;
            var novoValorTotal = valorTotal - desconto;
            valorTotalElement.innerText = "Total: R$" + novoValorTotal.toFixed(2);
            cupomInput.disabled = true;
        } else {
            alert("Cupom inválido!");
        }
        }
        
        function finalizarPagamento() {
            var formaPagamento = document.querySelector('input[name="pagamento"]:checked');
            if (formaPagamento) {
              // Armazenar dados do carrinho no LocalStorage
              localStorage.setItem("formaPagamento", formaPagamento.value);
        
              // Redirecionar para a página de finalização de pagamento
              window.location.href = "pagina-finalizacao-pagamento.html";
            } else {
              alert("Por favor, selecione uma forma de pagamento!");
            }
        }

        document.getElementById("filtro").addEventListener("change", function() {
            this.classList.add("animar");
          });
          



















/*<label for="quantity">Quantidade:</label>
            <input type="number" id="quantity" value="1">
            onclick="calcularTotal()"*/