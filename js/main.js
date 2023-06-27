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

        // função para carregar os dados do carrinho
        function carregarCarrinho() {
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

        // função para limpar todo o carrinho
        function limparCarrinho() {
            localStorage.removeItem("carrinho");
            // recarrega a página do carrinho
            location.reload();
        }



















/*<label for="quantity">Quantidade:</label>
            <input type="number" id="quantity" value="1">
            onclick="calcularTotal()"*/