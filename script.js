// =====================================================
// B.1 - DEFINIÇÃO DOS DADOS (JSON)
// =====================================================

const catalogo = [
    {
        id: 1,
        titulo: "Vingadores: Ultimato",
        tipo: "filme",
        ano: 2019,
        generos: ["ação", "aventura", "ficção científica"],
        nota: 9.0,
        assistido: true
    },
    {
        id: 2,
        titulo: "Thunderbolts*",
        tipo: "filme",
        ano: 2025,
        generos: ["ação", "aventura", "super-herói"],
        nota: 8.0,
        assistido: false
    },
    {
        id: 3,
        titulo: "Homem-Aranha: Um Novo Dia",
        tipo: "filme",
        ano: 2026,
        generos: ["ação", "aventura", "super-herói"],
        nota: 8.5,
        assistido: false
    },
    {
        id: 4,
        titulo: "Loki",
        tipo: "serie",
        ano: 2021,
        generos: ["ação", "fantasia", "ficção científica"],
        nota: 8.8,
        assistido: true
    },
    {
        id: 5,
        titulo: "Demolidor: Renascido",
        tipo: "serie",
        ano: 2025,
        generos: ["ação", "drama", "super-herói"],
        nota: 8.7,
        assistido: true
    },
    {
        id: 6,
        titulo: "WandaVision",
        tipo: "serie",
        ano: 2021,
        generos: ["drama", "fantasia", "super-herói"],
        nota: 8.5,
        assistido: false
    }
];


// =====================================================
// B.2 - ACESSO A PROPRIEDADES E ITENS
// =====================================================

console.log("Catálogo completo:", catalogo);

console.log("Título do primeiro item:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos.length >= 2) {
    console.log(
        "Segundo gênero do terceiro item:",
        catalogo[2].generos[1]
    );
} else {
    console.log("O terceiro item possui apenas um gênero.");
}


// =====================================================
// B.3 - ITERAÇÕES COM ITERATORS
// =====================================================

// A) Listagem com forEach

console.log("----- LISTA DE TÍTULOS -----");

catalogo.forEach(function (item) {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});


// B) Transformação com map

const titulosEmCaixaAlta = catalogo.map(function (item) {
    return item.titulo.toUpperCase();
});

console.log("----- TÍTULOS EM MAIÚSCULO -----");
console.log(titulosEmCaixaAlta);


// C) Seleção com filter

const naoAssistidos = catalogo.filter(function (item) {
    return item.assistido === false;
});

console.log("----- ITENS NÃO ASSISTIDOS -----");
console.log(naoAssistidos);

console.log(
    `Quantidade de itens não assistidos: ${naoAssistidos.length}`
);


// D) Busca com find

const itemNotaAlta = catalogo.find(function (item) {
    return item.nota >= 9;
});

console.log("----- PRIMEIRO ITEM COM NOTA >= 9 -----");

if (itemNotaAlta) {
    console.log("Título:", itemNotaAlta.titulo);
    console.log("Nota:", itemNotaAlta.nota);
} else {
    console.log("Nenhum item possui nota maior ou igual a 9.");
}

// E) Cálculo da média com reduce

const somaNotas = catalogo.reduce(function (total, item) {
    return total + item.nota;
}, 0);

const mediaNotas = somaNotas / catalogo.length;

console.log("----- MÉDIA DAS NOTAS -----");
console.log("Soma das notas:", somaNotas);
console.log("Média das notas:", mediaNotas.toFixed(2));




const assistidos = catalogo.filter(function (item) {
    return item.assistido === true;
});


const somaNotasAssistidos = assistidos.reduce(function (acumulador, item) {
    return acumulador + item.nota;
}, 0);


const mediaNotasAssistidos =
    assistidos.length > 0
        ? somaNotasAssistidos / assistidos.length
        : 0;


console.log("----- MÉDIAS -----");

console.log(
    `Média das notas do catálogo: ${mediaNotas.toFixed(2)}`
);

console.log(
    `Média das notas dos assistidos: ${mediaNotasAssistidos.toFixed(2)}`
);




// F) Checagens com some e every

const existeAntesDe2000 = catalogo.some(function (item) {
    return item.ano < 2000;
});


const todosTemGenero = catalogo.every(function (item) {
    return item.generos.length >= 1;
});


console.log("----- CHECAGENS -----");

console.log(
    "Existe algum item anterior ao ano 2000?",
    existeAntesDe2000
);

console.log(
    "Todos os itens possuem pelo menos um gênero?",
    todosTemGenero
);


// =====================================================
// B.4 - SAÍDA NA TELA (DOM SIMPLES)
// =====================================================

const quantidadeFilmes = catalogo.filter(function (item) {
    return item.tipo === "filme";
}).length;


const quantidadeSeries = catalogo.filter(function (item) {
    return item.tipo === "serie";
}).length;


// Ranking com os 3 maiores valores de nota

const ranking = [...catalogo]
    .sort(function (a, b) {
        return b.nota - a.nota;
    })
    .slice(0, 3);
    // Criação dos cards do catálogo

const cardsCatalogo = catalogo.map(function (item) {
    return `
        <div class="card">
            <span class="card-tipo">
                ${item.tipo === "filme" ? "🎬 FILME" : "📺 SÉRIE"}
            </span>

            <h4>${item.titulo}</h4>

            <p><strong>Ano:</strong> ${item.ano}</p>

            <p><strong>Nota:</strong> ${item.nota}</p>

            <p><strong>Gêneros:</strong> ${item.generos.join(", ")}</p>

            <p>
                <strong>Status:</strong>
                ${item.assistido ? "✅ Assistido" : "⏳ Não assistido"}
            </p>
        </div>
    `;
}).join("");


// Montagem do conteúdo da página

const output = document.getElementById("output");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p>
        <strong>Total de itens:</strong>
        ${catalogo.length}
    </p>

    <p>
        <strong>Quantidade de filmes:</strong>
        ${quantidadeFilmes}
    </p>

    <p>
        <strong>Quantidade de séries:</strong>
        ${quantidadeSeries}
    </p>

    <p>
        <strong>Quantidade de não assistidos:</strong>
        ${naoAssistidos.length}
    </p>

    <p>
        <strong>Média geral das notas:</strong>
        ${mediaNotas.toFixed(2)}
    </p>

    <h3>Top 3 maiores notas</h3>

    <ol>
        ${ranking.map(function (item) {
            return `
                <li>
                    ${item.titulo} - Nota: ${item.nota}
                </li>
            `;
        }).join("")}
    </ol>

    <h2>Catálogo Completo</h2>

    <div class="catalogo">
        ${cardsCatalogo}
    </div>
`;

console.log("----- RESUMO NA PÁGINA -----");

console.log(`Total de itens: ${catalogo.length}`);

console.log(`Filmes: ${quantidadeFilmes}`);

console.log(`Séries: ${quantidadeSeries}`);

console.log(`Não assistidos: ${naoAssistidos.length}`);

console.log(`Média geral: ${mediaNotas.toFixed(2)}`);