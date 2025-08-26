'use strict'

import produto from './produtos/produtos.json' with { type: 'json' }

function criarGaleria(produto) {
    const galeria = document.getElementById('container')

    const img = document.createElement('img')
    img.src = './produtos/img/' + produto.imagem

    const container = document.createElement('div')
    container.className = 'box'

    const informacoes = document.createElement('div')
    informacoes.className = 'informacoes'

    const titulo = document.createElement('h1')
    titulo.className = 'nome'
    titulo.textContent =  produto.nome

    const descricao = document.createElement('p')
    descricao.className = 'descricao'
    descricao.textContent = produto.descricao

    const preco = document.createElement('h3')
    preco.className = 'preco'
    preco.textContent = produto.preco

    const categoria = document.createElement('h2')
    categoria.className = 'categoria'
    categoria.textContent = produto.categoria

    const botao = document.createElement('button')
    botao.className = 'botao'
    botao.textContent = 'Comprar'

    container.append(img, informacoes, botao)
    informacoes.append(titulo, categoria, preco, descricao)
    
    galeria.appendChild(container)
}

function carregarImagens() {
    produto.forEach(criarGaleria)
}

carregarImagens()