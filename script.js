// URL da sua planilha publicada como CSV
const URL_CSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS50Z_u-P7rE9nE2V9m95pXm0m9-D_X100-Yv69C_GBCxw7uAuNCxF51XbeJgU9q5g3-Iw/pub?output=csv";

async function carregarDados() {
    const response = await fetch(URL_CSV);
    const data = await response.text();
    
    // Converte CSV em Array
    const linhas = data.split("\n").map(linha => linha.split(","));
    const cabecalho = linhas[0];
    const itens = linhas.slice(1);

    const cabecalhoHmtl = document.getElementById('cabecalho');
    cabecalhoHmtl.innerHTML = cabecalho.map(col => `<th>${col}</th>`).join('');

    const renderizarTabela = (dados) => {
        const corpo = document.getElementById('corpoTabela');
        corpo.innerHTML = dados.map(linha => `<tr>${linha.map(celula => `<td>${celula}</td>`).join('')}</tr>`).join('');
    };

    renderizarTabela(itens);

    // Lógica de busca em tempo real
    document.getElementById('busca').addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase();
        const filtrados = itens.filter(linha => 
            linha.some(celula => celula.toLowerCase().includes(termo))
        );
        renderizarTabela(filtrados);
    });
}

carregarDados();
