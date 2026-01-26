// ====================================
// BANCO DE DADOS LOCAL (SIMULAÇÃO)
// ====================================
// Este array armazena os produtos temporariamente
// FUTURAMENTE: substituir por dados do Google Sheets
const produtos = [
  {
    id: 1,
    codigo: "VLV-001",
    nome: "Boné preto got",
    categoria: "brindes",
    quantidade: 45,
    estoqueMinimo: 10,
    localizacao: "A-12",
    imagem: "/filtro-de-oleo-volvo.jpg",
    fornecedor: "Volvo",
    descricao: "Filtro de óleo para motores Volvo.",
  },
  {
    id: 2,
    codigo: "VLV-002",
    nome: "Caneta got",
    categoria: "brindes",
    quantidade: 8,
    estoqueMinimo: 15,
    localizacao: "B-05",
    imagem: "/pastilha-de-freio-volvo.jpg",
    fornecedor: "Volvo",
    descricao: "Pastilha de freio para veículos Volvo.",
  },
  {
    id: 3,
    codigo: "VLV-003",
    nome: "Caminhão volvo fh",
    categoria: "merchandising",
    quantidade: 0,
    estoqueMinimo: 20,
    localizacao: "C-08",
    imagem: "/oleo-motor-volvo.jpg",
    fornecedor: "Volvo",
    descricao: "Óleo de motor 5W30 para motores Volvo.",
  },
  {
    id: 4,
    codigo: "VLV-004",
    nome: "Camisa uv",
    categoria: "roupas",
    quantidade: 25,
    estoqueMinimo: 5,
    localizacao: "D-15",
    imagem: "/bateria-automotiva-volvo.jpg",
    fornecedor: "Volvo",
    descricao: "Bateria de 60Ah para veículos Volvo.",
  },
  {
    id: 5,
    codigo: "VLV-005",
    nome: "Taça de vinho",
    categoria: "brindes especiais",
    quantidade: 30,
    estoqueMinimo: 10,
    localizacao: "A-20",
    imagem: "/correia-dentada-volvo.jpg",
    fornecedor: "Volvo",
    descricao: "Correia dentada para sistemas Volvo.",
  },
]

const usuarios = [
  {
    id: 1,
    nome: "Administrador",
    email: "admin@gotemburgo.com",
    senha: "admin123",
    nivel: "admin", // admin, operario, usuario
    cargo: "Gerente",
  },
  {
    id: 2,
    nome: "João Silva",
    email: "joao@gotemburgo.com",
    senha: "operario123",
    nivel: "operario",
    cargo: "Operador de Estoque",
  },
  {
    id: 3,
    nome: "Maria Santos",
    email: "maria@gotemburgo.com",
    senha: "usuario123",
    nivel: "usuario",
    cargo: "Mecânica",
  },
]

// ====================================
// BANCO DE DADOS - PEDIDOS
// ====================================
const pedidos = [
  {
    id: 1,
    produtoId: 1,
    produtoNome: "Filtro de Óleo",
    produtoCodigo: "VLV-001",
    quantidade: 5,
    solicitante: "Maria Santos",
    solicitanteEmail: "maria@gotemburgo.com",
    motivo: "Necessário para manutenção preventiva de frota",
    status: "pendente",
    dataSolicitacao: new Date("2025-01-15T10:30:00").toISOString(),
  },
  {
    id: 2,
    produtoId: 2,
    produtoNome: "Pastilha de Freio",
    produtoCodigo: "VLV-002",
    quantidade: 3,
    solicitante: "João Silva",
    solicitanteEmail: "joao@gotemburgo.com",
    motivo: "Substituição emergencial em veículo de entrega",
    status: "pendente",
    dataSolicitacao: new Date("2025-01-15T14:20:00").toISOString(),
  },
  {
    id: 3,
    produtoId: 5,
    produtoNome: "Correia Dentada",
    produtoCodigo: "VLV-005",
    quantidade: 2,
    solicitante: "Maria Santos",
    solicitanteEmail: "maria@gotemburgo.com",
    motivo: "Manutenção programada",
    status: "aprovada",
    dataSolicitacao: new Date("2025-01-14T09:15:00").toISOString(),
    dataAprovacao: new Date("2025-01-14T11:30:00").toISOString(),
  },
]

const solicitacoes = [
  {
    id: 1,
    produtoId: 1,
    produtoNome: "Filtro de Óleo",
    quantidade: 5,
    solicitante: "Maria Santos",
    solicitanteEmail: "maria@gotemburgo.com",
    motivo: "Necessário para manutenção preventiva",
    status: "pendente",
    dataSolicitacao: new Date().toISOString(),
  },
]

// Variável global para armazenar o usuário logado atual
let usuarioAtual = null

// ====================================
// ELEMENTOS DO DOM
// ====================================
// Captura referências dos elementos HTML
const tabelaProdutos = document.getElementById("tabelaProdutos")
const searchInput = document.getElementById("searchInput")
const btnAdicionar = document.getElementById("btnAdicionar")
const modal = document.getElementById("modal")
const btnFecharModal = document.getElementById("btnFecharModal")
const btnCancelar = document.getElementById("btnCancelar")
const formProduto = document.getElementById("formProduto")
const modalTitulo = document.getElementById("modalTitulo")
const loginForm = document.getElementById("loginForm")
const btnLogout = document.getElementById("btnLogout")
const navItems = document.querySelectorAll(".nav-item")
const pageContents = document.querySelectorAll(".page-content")

// Campos do formulário
const produtoId = document.getElementById("produtoId")
const codigo = document.getElementById("codigo")
const nome = document.getElementById("nome")
const categoria = document.getElementById("categoria")
const localizacao = document.getElementById("localizacao")
const quantidade = document.getElementById("quantidade")
const estoqueMinimo = document.getElementById("estoqueMinimo")
const imagemUpload = document.getElementById("imagemUpload")
const imagePreview = document.getElementById("imagePreview")
const imagem = document.getElementById("imagem") // Added for product image
const fornecedor = document.getElementById("fornecedor")
const descricao = document.getElementById("descricao")
const loginEmail = document.getElementById("loginEmail")
const loginPassword = document.getElementById("loginPassword")
const userName = document.getElementById("userName")
const filtroCategoria = document.getElementById("filtroCategoria")
const btnAdicionarProduto = document.getElementById("btnAdicionarProduto")
const btnExportarRelatorio = document.getElementById("btnExportarRelatorio")
const formPerfil = document.getElementById("formPerfil")
const btnSalvarIntegracao = document.getElementById("btnSalvarIntegracao")
const btnTestarConexao = document.getElementById("btnTestarConexao")
const btnSalvarSistema = document.getElementById("btnSalvarSistema")
const gridProdutos = document.getElementById("gridProdutos")
const chartContainer = document.getElementById("chartCategoria")

// ====================================
// ELEMENTOS DO DOM - PEDIDOS
// ====================================
const pedidosGrid = document.getElementById("pedidosGrid")
const mensagemSemPedidos = document.getElementById("mensagemSemPedidos")
const modalSolicitacao = document.getElementById("modalSolicitacao") // Corrected declaration
const btnFecharModalSolicitacao = document.getElementById("btnFecharModalSolicitacao") // Corrected declaration
const btnCancelarSolicitacao = document.getElementById("btnCancelarSolicitacao") // Corrected declaration
const formSolicitacao = document.getElementById("formSolicitacao") // Corrected declaration
const solicitacaoProdutoId = document.getElementById("solicitacaoProdutoId") // Corrected declaration
const solicitacaoProdutoNome = document.getElementById("solicitacaoProdutoNome") // Corrected declaration
const solicitacaoQuantidade = document.getElementById("solicitacaoQuantidade") // Corrected declaration
const solicitacaoMotivo = document.getElementById("solicitacaoMotivo") // Corrected declaration

// Variável para armazenar o filtro atual
let filtroAtualPedidos = "todos"

const btnAdicionarUsuario = document.getElementById("btnAdicionarUsuario")
const modalUsuario = document.getElementById("modalUsuario")
const btnFecharModalUsuario = document.getElementById("btnFecharModalUsuario")
const btnCancelarUsuario = document.getElementById("btnCancelarUsuario")
const formUsuario = document.getElementById("formUsuario")
const modalUsuarioTitulo = document.getElementById("modalUsuarioTitulo")
const listaUsuarios = document.getElementById("listaUsuarios")
const usuarioId = document.getElementById("usuarioId")
const usuarioNome = document.getElementById("usuarioNome")
const usuarioEmail = document.getElementById("usuarioEmail")
const usuarioSenha = document.getElementById("usuarioSenha")
const usuarioNivel = document.getElementById("usuarioNivel")
const usuarioCargo = document.getElementById("usuarioCargo")

// ====================================
// ELEMENTOS DO DOM - MOVIMENTAÇÃO
// ====================================
const produtoSelecionado = document.getElementById("produtoSelecionado")
const produtoInfoCard = document.getElementById("produtoInfoCard")
const produtoInfoNome = document.getElementById("produtoInfoNome")
const produtoInfoCategoria = document.getElementById("produtoInfoCategoria")
const produtoInfoCodigo = document.getElementById("produtoInfoCodigo")
const produtoInfoQtd = document.getElementById("produtoInfoQtd")
const produtoInfoCat = document.getElementById("produtoInfoCat")
const formEntrada = document.getElementById("formEntrada")
const formSaida = document.getElementById("formSaida")
const entradaQuantidade = document.getElementById("entradaQuantidade")
const entradaObservacao = document.getElementById("entradaObservacao")
const saidaQuantidade = document.getElementById("saidaQuantidade")
const saidaObservacao = document.getElementById("saidaObservacao")
const historicoTabela = document.getElementById("historicoTabela")
const filtroTipo = document.getElementById("filtroTipo")
const filtroProdutoHistorico = document.getElementById("filtroProdutoHistorico")
const userBadgeMovimentacao = document.getElementById("userBadgeMovimentacao")

// Banco de dados de movimentações
const movimentacoes = []

// ====================================
// VERIFICAÇÃO DE LOGIN AO CARREGAR
// ====================================
document.addEventListener("DOMContentLoaded", () => {
  // Verifica se usuário já está logado
  const usuarioLogadoJson = sessionStorage.getItem("usuarioLogado")

  if (usuarioLogadoJson) {
    // Se já estiver logado, mostra o sistema
    usuarioAtual = JSON.parse(usuarioLogadoJson)
    mostrarSistema(usuarioAtual)
    // Ativa a página dashboard por padrão
    navegarPara("dashboard")
  } else {
    // Se não estiver logado, mostra a tela de login
    document.getElementById("loginScreen").style.display = "flex"
    document.getElementById("mainSystem").style.display = "none"
  }
})

// ====================================
// PROCESSO DE LOGIN
// ====================================
loginForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = loginEmail.value
  const senha = loginPassword.value

  const usuario = usuarios.find((u) => u.email === email && u.senha === senha)

  if (usuario) {
    // Login bem-sucedido
    usuarioAtual = usuario
    sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario))
    mostrarSistema(usuario)
  } else {
    // Login falhou
    alert("E-mail ou senha incorretos. Tente novamente.")
  }
})

// ====================================
// FUNÇÃO PARA MOSTRAR O SISTEMA
// ====================================
function mostrarSistema(usuario) {
  // Oculta tela de login
  document.getElementById("loginScreen").style.display = "none"

  // Mostra sistema principal
  document.getElementById("mainSystem").style.display = "grid"

  // Atualiza informações do usuário
  userName.textContent = usuario.nome

  aplicarPermissoes(usuario.nivel)

  // Inicializa o sistema
  renderizarTabela()
  atualizarEstatisticas()
}

function aplicarPermissoes(nivel) {
  console.log("[v0] Aplicando permissões para nível:", nivel)

  // Card de gerenciamento de permissões só visível para admin
  const cardPermissoes = document.getElementById("cardPermissoes")
  if (cardPermissoes) {
    cardPermissoes.style.display = nivel === "admin" ? "block" : "none"
  }

  // Botões de adicionar produto
  if (btnAdicionar) btnAdicionar.style.display = nivel === "usuario" ? "none" : "inline-flex"
  if (btnAdicionarProduto) btnAdicionarProduto.style.display = nivel === "usuario" ? "none" : "inline-flex"

  // Controle de visibilidade das abas (nav items)
  const navMov = document.querySelector('[data-page="movimentacao"]')
  const navRel = document.querySelector('[data-page="relatorios"]')
  const navPedidos = document.querySelector('[data-page="pedidos"]')

  // Usuário comum (nivel "usuario") não vê Movimentação e Relatórios
  if (navMov) navMov.style.display = nivel === "usuario" ? "none" : ""
  if (navRel) navRel.style.display = nivel === "usuario" ? "none" : ""

  // Garante que Pedidos esteja visível para todos
  if (navPedidos) navPedidos.style.display = ""
}

// ====================================
// PROCESSO DE LOGOUT
// ====================================
btnLogout.addEventListener("click", () => {
  if (confirm("Deseja realmente sair do sistema?")) {
    // Remove dados da sessão
    sessionStorage.removeItem("usuarioLogado")
    usuarioAtual = null

    // Volta para tela de login
    document.getElementById("mainSystem").style.display = "none"
    document.getElementById("loginScreen").style.display = "flex"

    // Limpa formulário de login
    loginForm.reset()
  }
})

// ====================================
// RENDERIZAÇÃO DA TABELA
// ====================================
// Função que cria e exibe as linhas da tabela com os produtos
function renderizarTabela(produtosFiltrados = produtos) {
  tabelaProdutos.innerHTML = ""

  // Se não houver produtos, exibe mensagem
  if (produtosFiltrados.length === 0) {
    tabelaProdutos.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 2rem; color: #697a8d;">
                    Nenhum produto encontrado
                </td>
            </tr>
        `
    return
  }

  // Itera sobre cada produto e cria uma linha na tabela
  produtosFiltrados.forEach((produto) => {
    const tr = document.createElement("tr")

    // Determina o status baseado na quantidade
    let statusClass = "badge-success"
    let statusText = "Em estoque"

    if (produto.quantidade === 0) {
      statusClass = "badge-danger"
      statusText = "Sem estoque"
    } else if (produto.quantidade <= produto.estoqueMinimo) {
      statusClass = "badge-warning"
      statusText = "Estoque baixo"
    }

    let botoesAcao = ""
    if (usuarioAtual) {
      if (usuarioAtual.nivel === "admin" || usuarioAtual.nivel === "operario") {
        botoesAcao = `
          <button class="btn-action btn-edit" onclick="editarProduto(${produto.id})">
              ✏️ Editar
          </button>
          <button class="btn-action btn-delete" onclick="excluirProduto(${produto.id})">
              🗑️ Excluir
          </button>
        `
      } else if (usuarioAtual.nivel === "usuario") {
        botoesAcao = `
          <button class="btn-action" style="background: #dbeafe; color: #1e40af;" onclick="solicitarPeca(${produto.id})">
              📋 Solicitar
          </button>
        `
      }
    }

    // Cria o HTML da linha
    tr.innerHTML = `
            <td><strong>${produto.codigo}</strong></td>
            <td>${produto.nome}</td>
            <td>${produto.categoria}</td>
            <td><strong>${produto.quantidade}</strong></td>
            <td>${produto.estoqueMinimo}</td>
            <td>${produto.localizacao}</td>
            <td><span class="badge ${statusClass}">${statusText}</span></td>
            <td>${botoesAcao}</td>
        `

    tabelaProdutos.appendChild(tr)
  })
}

// ====================================
// ATUALIZAÇÃO DAS ESTATÍSTICAS
// ====================================
// Calcula e atualiza os cards de estatísticas no topo
function atualizarEstatisticas() {
  const total = produtos.length
  const emEstoque = produtos.filter((p) => p.quantidade > p.estoqueMinimo).length
  const estoqueMinimo = produtos.filter((p) => p.quantidade > 0 && p.quantidade <= p.estoqueMinimo).length
  const semEstoque = produtos.filter((p) => p.quantidade === 0).length

  document.getElementById("totalProdutos").textContent = total
  document.getElementById("emEstoque").textContent = emEstoque
  document.getElementById("estoqueMinimo").textContent = estoqueMinimo
  document.getElementById("semEstoque").textContent = semEstoque
}

// ====================================
// BUSCA/FILTRO DE PRODUTOS
// ====================================
// Filtra produtos conforme o usuário digita
searchInput.addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase()

  const produtosFiltrados = produtos.filter((produto) => {
    return (
      produto.codigo.toLowerCase().includes(termo) ||
      produto.nome.toLowerCase().includes(termo) ||
      produto.categoria.toLowerCase().includes(termo)
    )
  })

  renderizarTabela(produtosFiltrados)
})

// ====================================
// CONTROLE DO MODAL DE PRODUTOS
// ====================================
// Abre o modal para adicionar novo produto
btnAdicionar.addEventListener("click", () => {
  modalTitulo.textContent = "Adicionar Produto"
  formProduto.reset()
  produtoId.value = ""
  imagem.value = ""
  imagePreview.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
    <span>Nenhuma imagem selecionada</span>
  `
  modal.classList.add("active")
})

// Fecha o modal (botão X)
btnFecharModal.addEventListener("click", () => {
  modal.classList.remove("active")
})

// Fecha o modal (botão Cancelar)
btnCancelar.addEventListener("click", () => {
  modal.classList.remove("active")
})

// Fecha o modal ao clicar fora dele
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active")
  }
})

// ====================================
// SALVAR PRODUTO (ADICIONAR/EDITAR)
// ====================================
// Processa o formulário quando enviado
formProduto.addEventListener("submit", (e) => {
  e.preventDefault()

  const produto = {
    codigo: codigo.value,
    nome: nome.value,
    categoria: categoria.value,
    localizacao: localizacao.value,
    quantidade: Number.parseInt(quantidade.value),
    estoqueMinimo: Number.parseInt(estoqueMinimo.value),
    imagem: imagem.value,
    fornecedor: fornecedor.value,
    descricao: descricao.value,
  }

  // Se tem ID, é edição; se não, é novo produto
  if (produtoId.value) {
    // EDITAR PRODUTO EXISTENTE
    const id = Number.parseInt(produtoId.value)
    const index = produtos.findIndex((p) => p.id === id)
    produtos[index] = { ...produtos[index], ...produto }

    console.log("Produto editado:", produtos[index])
    // FUTURAMENTE: enviar atualização para Google Sheets
  } else {
    // ADICIONAR NOVO PRODUTO
    const novoProduto = {
      id: produtos.length > 0 ? Math.max(...produtos.map((p) => p.id)) + 1 : 1,
      ...produto,
    }
    produtos.push(novoProduto)

    console.log("Novo produto adicionado:", novoProduto)
    // FUTURAMENTE: enviar novo produto para Google Sheets
  }

  // Atualiza a interface
  renderizarTabela()
  atualizarEstatisticas()
  renderProductsGrid()
  modal.classList.remove("active")
  formProduto.reset()
})

// ====================================
// EDITAR PRODUTO
// ====================================
// Carrega os dados do produto no formulário
function editarProduto(id) {
  const produto = produtos.find((p) => p.id === id)

  if (produto) {
    modalTitulo.textContent = "Editar Produto"
    produtoId.value = produto.id
    codigo.value = produto.codigo
    nome.value = produto.nome
    categoria.value = produto.categoria
    localizacao.value = produto.localizacao
    quantidade.value = produto.quantidade
    estoqueMinimo.value = produto.estoqueMinimo
    imagem.value = produto.imagem
    fornecedor.value = produto.fornecedor || ""
    descricao.value = produto.descricao || ""

    if (produto.imagem) {
      imagePreview.innerHTML = `<img src="${produto.imagem}" alt="Preview">`
    } else {
      imagePreview.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <span>Nenhuma imagem selecionada</span>
      `
    }

    modal.classList.add("active")
  }
}

// ====================================
// EXCLUIR PRODUTO
// ====================================
// Remove um produto após confirmação
function excluirProduto(id) {
  if (confirm("Tem certeza que deseja excluir este produto?")) {
    const index = produtos.findIndex((p) => p.id === id)
    const produtoExcluido = produtos[index]

    produtos.splice(index, 1)

    console.log("Produto excluído:", produtoExcluido)
    // FUTURAMENTE: remover produto do Google Sheets

    renderizarTabela()
    atualizarEstatisticas()
  }
}

// ====================================
// NAVEGAÇÃO ENTRE PÁGINAS
// ====================================
function navegarPara(nomePagina) {
  // Bloqueio por permissão (se usuário for "usuario" impede acesso a páginas restritas)
  if (usuarioAtual && usuarioAtual.nivel === "usuario") {
    if (nomePagina === "movimentacao" || nomePagina === "relatorios") {
      alert("Você não tem permissão para acessar esta página.")
      return
    }
  }

  // Remove active de todos os itens de navegação
  navItems.forEach((item) => item.classList.remove("active"))

  // Remove active de todas as páginas
  pageContents.forEach((page) => page.classList.remove("active"))

  // Ativa o item de navegação correspondente
  const navItem = document.querySelector(`[data-page="${nomePagina}"]`)
  if (navItem) {
    navItem.classList.add("active")
  }

  // Ativa a página correspondente
  const page = document.getElementById(`page${nomePagina.charAt(0).toUpperCase() + nomePagina.slice(1)}`)
  if (page) {
    page.classList.add("active")
  }

  // Atualiza conteúdo específico da página
  atualizarConteudoPagina(nomePagina)
}

// Event listeners para navegação
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault()
    const pagina = item.getAttribute("data-page")
    navegarPara(pagina)
  })
})

// ====================================
// ATUALIZAÇÃO DE CONTEÚDO POR PÁGINA
// ====================================
function atualizarConteudoPagina(nomePagina) {
  switch (nomePagina) {
    case "dashboard":
      renderizarTabela()
      atualizarEstatisticas()
      break
    case "produtos":
      renderProductsGrid()
      break
    case "pedidos":
      atualizarEstatisticasPedidos()
      renderizarPedidos()
      break
    case "movimentacao":
      atualizarPaginaMovimentacao()
      break
    case "relatorios":
      renderizarRelatorios()
      break
    case "configuracoes":
      carregarConfiguracoes()
      break
  }
}

// ====================================
// PÁGINA DE PRODUTOS - GRID VIEW
// ====================================
function renderizarGridProdutos(produtosFiltrados = produtos) {
  gridProdutos.innerHTML = ""

  if (produtosFiltrados.length === 0) {
    gridProdutos.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #64748b;">
        Nenhum produto encontrado
      </div>
    `
    return
  }

  produtosFiltrados.forEach((produto) => {
    let statusClass = "badge-success"
    let statusText = "Em estoque"

    if (produto.quantidade === 0) {
      statusClass = "badge-danger"
      statusText = "Sem estoque"
    } else if (produto.quantidade <= produto.estoqueMinimo) {
      statusClass = "badge-warning"
      statusText = "Estoque baixo"
    }

    let botoesAcao = ""
    if (usuarioAtual) {
      if (usuarioAtual.nivel === "admin" || usuarioAtual.nivel === "operario") {
        botoesAcao = `
          <button class="btn-action btn-edit" onclick="editarProduto(${produto.id})" style="flex: 1;">
            Editar
          </button>
          <button class="btn-action btn-delete" onclick="excluirProduto(${produto.id})" style="flex: 1;">
            Excluir
          </button>
        `
      } else if (usuarioAtual.nivel === "usuario") {
        botoesAcao = `
          <button class="btn-action" style="flex: 1; background: #dbeafe; color: #1e40af;" onclick="solicitarPeca(${produto.id})">
            Solicitar Peça
          </button>
        `
      }
    }

    const card = document.createElement("div")
    card.className = "product-card"
    card.innerHTML = `
      <div class="product-image-container">
        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image" />
      </div>
      <div class="product-card-header">
        <span class="product-code">${produto.codigo}</span>
        <span class="badge ${statusClass}">${statusText}</span>
      </div>
      <div class="product-card-body">
        <h4>${produto.nome}</h4>
        <p class="product-category">${produto.categoria}</p>
        <div class="product-quantity">
          <span class="quantity-value">${produto.quantidade}</span>
          <span class="quantity-label">unidades</span>
        </div>
        <div class="product-location">
          <svg viewBox="0 0 24 24" fill="none" style="width: 16px; height: 16px;">
            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
          </svg>
          Localização: ${produto.localizacao}
        </div>
      </div>
      <div class="product-card-footer">
        ${botoesAcao}
      </div>
    `

    gridProdutos.appendChild(card)
  })
}

// Filtro por categoria na página de produtos
if (filtroCategoria) {
  filtroCategoria.addEventListener("change", (e) => {
    const categoria = e.target.value
    if (categoria === "") {
      renderizarGridProdutos()
    } else {
      const produtosFiltrados = produtos.filter((p) => p.categoria === categoria)
      renderizarGridProdutos(produtosFiltrados)
    }
  })
}

// Botão adicionar produto na página de produtos
if (btnAdicionarProduto) {
  btnAdicionarProduto.addEventListener("click", () => {
    modalTitulo.textContent = "Adicionar Produto"
    formProduto.reset()
    produtoId.value = ""
    imagem.value = "" // Reset product image input
    imagePreview.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span>Nenhuma imagem selecionada</span>
    `
    modal.classList.add("active")
  })
}

// ====================================
// PÁGINA DE PEDIDOS
// ====================================
// ====================================
// SOLICITAR PRODUTO (USUÁRIOS)
// ====================================
function solicitarPeca(produtoId) {
  const produto = produtos.find((p) => p.id === produtoId)

  if (!produto) return

  solicitacaoProdutoId.value = produto.id
  solicitacaoProdutoNome.value = `${produto.codigo} - ${produto.nome}`
  solicitacaoQuantidade.value = ""
  solicitacaoMotivo.value = ""

  modalSolicitacao.classList.add("active")
}

// ====================================
// CONTROLES DO MODAL DE SOLICITAÇÃO
// ====================================
btnFecharModalSolicitacao.addEventListener("click", () => {
  modalSolicitacao.classList.remove("active")
})

btnCancelarSolicitacao.addEventListener("click", () => {
  modalSolicitacao.classList.remove("active")
})

modalSolicitacao.addEventListener("click", (e) => {
  if (e.target === modalSolicitacao) {
    modalSolicitacao.classList.remove("active")
  }
})

// ====================================
// ENVIAR SOLICITAÇÃO
// ====================================
formSolicitacao.addEventListener("submit", (e) => {
  e.preventDefault()

  const prodId = Number.parseInt(solicitacaoProdutoId.value)
  const produto = produtos.find((p) => p.id === prodId)

  const novaSolicitacao = {
    id: solicitacoes.length > 0 ? Math.max(...solicitacoes.map((s) => s.id)) + 1 : 1,
    produtoId: prodId,
    produtoNome: produto.nome,
    quantidade: Number.parseInt(solicitacaoQuantidade.value),
    solicitante: usuarioAtual.nome,
    solicitanteEmail: usuarioAtual.email,
    motivo: solicitacaoMotivo.value,
    status: "pendente",
    dataSolicitacao: new Date().toISOString(),
  }

  solicitacoes.push(novaSolicitacao)
  console.log("[v0] Nova solicitação criada:", novaSolicitacao)

  alert("Solicitação enviada com sucesso!\n\nUm operário irá analisar sua solicitação em breve.")

  modalSolicitacao.classList.remove("active")
  formSolicitacao.reset()

  // Se estiver na página de pedidos, atualiza
  if (document.getElementById("pagePedidos").classList.contains("active")) {
    renderizarPedidos()
    atualizarEstatisticasPedidos()
  }
})

// ====================================
// PÁGINA DE PEDIDOS - FUNÇÕES
// ====================================

// Renderiza os pedidos na página
function renderizarPedidos(filtro = filtroAtualPedidos) {
  const pedidosGrid = document.getElementById("pedidosGrid")
  const mensagemSemPedidos = document.getElementById("mensagemSemPedidos")

  if (!pedidosGrid) return

  // Filtra pedidos
  let pedidosFiltrados = solicitacoes

  if (filtro !== "todos") {
    pedidosFiltrados = solicitacoes.filter((p) => p.status === filtro)
  }

  // Limpa a grid
  pedidosGrid.innerHTML = ""

  // Se não houver pedidos, mostra mensagem
  if (pedidosFiltrados.length === 0) {
    pedidosGrid.style.display = "none"
    mensagemSemPedidos.style.display = "flex"
    return
  }

  pedidosGrid.style.display = "grid"
  mensagemSemPedidos.style.display = "none"

  // Renderiza cada pedido
  pedidosFiltrados.forEach((pedido) => {
    const card = criarCardPedido(pedido)
    pedidosGrid.appendChild(card)
  })
}

// Cria o card HTML de um pedido
function criarCardPedido(pedido) {
  const card = document.createElement("div")
  card.className = "pedido-card"

  // Define o badge de status
  const statusInfo = obterStatusPedido(pedido.status)

  // Define os botões de ação baseado no status e permissão do usuário
  let botoesAcao = ""

  if (usuarioAtual && (usuarioAtual.nivel === "admin" || usuarioAtual.nivel === "operario")) {
    if (pedido.status === "pendente") {
      botoesAcao = `
        <button class="btn-iniciar" onclick="iniciarPedido(${pedido.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          Iniciar
        </button>
        <button class="btn-rejeitar" onclick="rejeitarPedido(${pedido.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
          Rejeitar
        </button>
      `
    } else if (pedido.status === "em-andamento") {
      botoesAcao = `
        <button class="btn-finalizar" onclick="finalizarPedido(${pedido.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Finalizar
        </button>
        <button class="btn-rejeitar" onclick="rejeitarPedido(${pedido.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
          Rejeitar
        </button>
      `
    } else {
      // Pedidos aprovados ou rejeitados podem ser finalizados (removidos)
      botoesAcao = `
        <button class="btn-finalizar" onclick="removerPedido(${pedido.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Finalizar
        </button>
      `
    }
  }

  // Formata a data
  const data = new Date(pedido.dataSolicitacao)
  const dataFormatada = `${data.getDate().toString().padStart(2, "0")}/${(data.getMonth() + 1).toString().padStart(2, "0")}/${data.getFullYear()}, ${data.getHours().toString().padStart(2, "0")}:${data.getMinutes().toString().padStart(2, "0")}`

  card.innerHTML = `
    <div class="pedido-card-header">
      <div class="pedido-info">
        <div class="pedido-produto">${pedido.produtoNome}</div>
        <div class="pedido-quantidade">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor"/>
            <path d="M3 9H21" stroke="currentColor"/>
          </svg>
          Qtd: ${pedido.quantidade} unidades
        </div>
      </div>
      <div class="pedido-status ${statusInfo.classe}">
        ${statusInfo.icone}
        ${statusInfo.texto}
      </div>
    </div>
    
    <div class="pedido-card-body">
      <div class="pedido-detalhe">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span><strong>Solicitante:</strong> ${pedido.solicitante}</span>
      </div>
      
      <div class="pedido-detalhe">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span>${dataFormatada}</span>
      </div>
      
      <div class="pedido-motivo">
        <div class="pedido-motivo-label">Motivo</div>
        <div class="pedido-motivo-texto">${pedido.motivo}</div>
      </div>
    </div>
    
    ${botoesAcao ? `<div class="pedido-card-footer">${botoesAcao}</div>` : ""}
  `

  return card
}

// Retorna informações de exibição do status
function obterStatusPedido(status) {
  const statusMap = {
    pendente: {
      texto: "Pendente",
      classe: "status-pendente",
      icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>`,
    },
    "em-andamento": {
      texto: "Em Andamento",
      classe: "status-em-andamento",
      icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>`,
    },
    aprovada: {
      texto: "Aprovado",
      classe: "status-aprovada",
      icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>`,
    },
    rejeitada: {
      texto: "Rejeitado",
      classe: "status-rejeitada",
      icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>`,
    },
  }

  return statusMap[status] || statusMap["pendente"]
}

// Atualiza as estatísticas dos pedidos
function atualizarEstatisticasPedidos() {
  const pendentes = solicitacoes.filter((p) => p.status === "pendente").length
  const aprovados = solicitacoes.filter((p) => p.status === "aprovada").length
  const rejeitados = solicitacoes.filter((p) => p.status === "rejeitada").length
  const total = solicitacoes.length

  const statPendentes = document.getElementById("statPendentes")
  const statAprovados = document.getElementById("statAprovados")
  const statRejeitados = document.getElementById("statRejeitados")
  const statTotalPedidos = document.getElementById("statTotalPedidos")

  if (statPendentes) statPendentes.textContent = pendentes
  if (statAprovados) statAprovados.textContent = aprovados
  if (statRejeitados) statRejeitados.textContent = rejeitados
  if (statTotalPedidos) statTotalPedidos.textContent = total
}

// Filtra pedidos por status
function filtrarPedidos(status) {
  filtroAtualPedidos = status

  // Atualiza botões de filtro
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  document.querySelector(`[data-status="${status}"]`).classList.add("active")

  // Renderiza com o novo filtro
  renderizarPedidos(status)
}

// Inicia um pedido (muda status para em-andamento)
function iniciarPedido(id) {
  if (usuarioAtual.nivel !== "admin" && usuarioAtual.nivel !== "operario") {
    alert("Apenas administradores e operários podem iniciar pedidos!")
    return
  }

  const pedido = solicitacoes.find((p) => p.id === id)
  if (!pedido) return

  pedido.status = "em-andamento"

  console.log("[v0] Pedido iniciado:", pedido)

  renderizarPedidos()
  atualizarEstatisticasPedidos()
}

// Finaliza um pedido (muda status para aprovada e deduz do estoque)
function finalizarPedido(id) {
  if (usuarioAtual.nivel !== "admin" && usuarioAtual.nivel !== "operario") {
    alert("Apenas administradores e operários podem finalizar pedidos!")
    return
  }

  const pedido = solicitacoes.find((p) => p.id === id)
  if (!pedido) return

  const produto = produtos.find((p) => p.id === pedido.produtoId)

  if (!produto) {
    alert("Produto não encontrado!")
    return
  }

  // Verifica se há quantidade suficiente
  if (produto.quantidade < pedido.quantidade) {
    if (
      !confirm(
        `Atenção: O estoque atual (${produto.quantidade}) é menor que a quantidade solicitada (${pedido.quantidade}).\n\nDeseja finalizar mesmo assim?`,
      )
    ) {
      return
    }
  }

  // Deduz do estoque
  produto.quantidade -= pedido.quantidade
  if (produto.quantidade < 0) produto.quantidade = 0

  // Atualiza status do pedido
  pedido.status = "aprovada"

  console.log("[v0] Pedido finalizado e aprovado:", pedido)
  console.log("[v0] Estoque atualizado:", produto)

  alert(
    `Pedido aprovado com sucesso!\n\n${pedido.quantidade} unidades de "${produto.nome}" foram deduzidas do estoque.\n\nEstoque atual: ${produto.quantidade} unidades`,
  )

  // Atualiza todas as visualizações
  renderizarPedidos()
  atualizarEstatisticasPedidos()
  renderizarTabela()
  atualizarEstatisticas()
  renderizarGridProdutos()
}

// Rejeita um pedido
function rejeitarPedido(id) {
  if (usuarioAtual.nivel !== "admin" && usuarioAtual.nivel !== "operario") {
    alert("Apenas administradores e operários podem rejeitar pedidos!")
    return
  }

  const motivo = prompt("Digite o motivo da rejeição:")

  if (!motivo || motivo.trim() === "") {
    alert("É necessário informar um motivo para rejeitar o pedido.")
    return
  }

  const pedido = solicitacoes.find((p) => p.id === id)
  if (!pedido) return

  pedido.status = "rejeitada"
  pedido.motivoRejeicao = motivo

  console.log("[v0] Pedido rejeitado:", pedido)

  alert("Pedido rejeitado com sucesso!")

  renderizarPedidos()
  atualizarEstatisticasPedidos()
}

// Remove um pedido finalizado ou rejeitado do sistema
function removerPedido(id) {
  if (usuarioAtual.nivel !== "admin" && usuarioAtual.nivel !== "operario") {
    alert("Apenas administradores e operários podem remover pedidos!")
    return
  }

  if (!confirm("Deseja remover este pedido do sistema?")) {
    return
  }

  const index = solicitacoes.findIndex((p) => p.id === id)
  if (index === -1) return

  const pedidoRemovido = solicitacoes[index]
  solicitacoes.splice(index, 1)

  console.log("[v0] Pedido removido:", pedidoRemovido)

  renderizarPedidos()
  atualizarEstatisticasPedidos()
}

// ====================================
// PÁGINA DE RELATÓRIOS
// ====================================
function renderizarRelatorios() {
  const total = produtos.length
  const emEstoque = produtos.filter((p) => p.quantidade > p.estoqueMinimo).length
  const estoqueMinimo = produtos.filter((p) => p.quantidade > 0 && p.quantidade <= p.estoqueMinimo).length
  const semEstoque = produtos.filter((p) => p.quantidade === 0).length

  document.getElementById("relTotalProdutos").textContent = total
  document.getElementById("relEmEstoque").textContent = emEstoque
  document.getElementById("relEstoqueBaixo").textContent = estoqueMinimo
  document.getElementById("relSemEstoque").textContent = semEstoque

  // Renderizar gráfico simples de categorias
  renderizarGraficoCategoria()
}

// Renderiza um "gráfico" simples de categorias
function renderizarGraficoCategoria() {
  const categorias = {}

  // Conta produtos por categoria
  produtos.forEach((produto) => {
    categorias[produto.categoria] = (categorias[produto.categoria] || 0) + 1
  })

  // Cria visualização simples
  let html = '<div style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">'

  for (const [categoria, quantidade] of Object.entries(categorias)) {
    const porcentagem = (quantidade / produtos.length) * 100
    html += `
      <div style="width: 100%;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="font-weight: 600; color: #0f1c2e;">${categoria}</span>
          <span style="color: #64748b;">${quantidade} produtos</span>
        </div>
        <div style="background: #e2e8f0; height: 12px; border-radius: 6px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0f1c2e 0%, #1a3049 100%); height: 100%; width: ${porcentagem}%; border-radius: 6px; transition: width 0.3s;"></div>
        </div>
      </div>
    `
  }

  html += "</div>"
  chartContainer.innerHTML = html
}

// Botão exportar relatório
if (btnExportarRelatorio) {
  btnExportarRelatorio.addEventListener("click", () => {
    alert("Funcionalidade de exportação em desenvolvimento!\n\nEm breve você poderá exportar relatórios em PDF.")
  })
}

// ====================================
// PÁGINA DE CONFIGURAÇÕES
// ====================================
function carregarConfiguracoes() {
  // Carrega configurações salvas do localStorage
  const config = JSON.parse(localStorage.getItem("configuracoes")) || {}

  if (config.nome) document.getElementById("configNome").value = config.nome
  if (config.email) document.getElementById("configEmail").value = config.email
  if (config.cargo) document.getElementById("configCargo").value = config.cargo
  if (config.sheetId) document.getElementById("configSheetId").value = config.sheetId
  if (config.apiKey) document.getElementById("configApiKey").value = config.apiKey

  renderizarListaUsuarios()
}

// Salvar perfil
if (formPerfil) {
  formPerfil.addEventListener("submit", (e) => {
    e.preventDefault()

    const config = JSON.parse(localStorage.getItem("configuracoes")) || {}
    config.nome = document.getElementById("configNome").value
    config.email = document.getElementById("configEmail").value
    config.cargo = document.getElementById("configCargo").value

    localStorage.setItem("configuracoes", JSON.stringify(config))

    // Atualiza nome do usuário na sidebar
    userName.textContent = config.nome

    alert("Perfil atualizado com sucesso!")
  })
}

// Salvar integração Google Sheets
if (btnSalvarIntegracao) {
  btnSalvarIntegracao.addEventListener("click", () => {
    const config = JSON.parse(localStorage.getItem("configuracoes")) || {}
    config.sheetId = document.getElementById("configSheetId").value
    config.apiKey = document.getElementById("configApiKey").value

    localStorage.setItem("configuracoes", JSON.stringify(config))
    alert("Integração salva com sucesso!")
  })
}

// Testar conexão
if (btnTestarConexao) {
  btnTestarConexao.addEventListener("click", () => {
    alert("Testando conexão com Google Sheets...\n\nFuncionalidade em desenvolvimento!")
  })
}

// Salvar preferências do sistema
if (btnSalvarSistema) {
  btnSalvarSistema.addEventListener("click", () => {
    const config = JSON.parse(localStorage.getItem("configuracoes")) || {}
    config.idioma = document.getElementById("configIdioma").value
    config.estoqueAlerta = document.getElementById("configEstoqueAlerta").value

    localStorage.setItem("configuracoes", JSON.stringify(config))
    alert("Preferências salvas com sucesso!")
  })
}

// ====================================
// GERENCIAMENTO DE USUÁRIOS
// ====================================

// Renderiza a lista de usuários
function renderizarListaUsuarios() {
  if (!listaUsuarios) return

  listaUsuarios.innerHTML = ""

  if (usuarios.length === 0) {
    listaUsuarios.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: #64748b;">
        Nenhum usuário cadastrado
      </div>
    `
    return
  }

  usuarios.forEach((usuario) => {
    const nivelBadge = obterBadgeNivel(usuario.nivel)

    const userCard = document.createElement("div")
    userCard.className = "user-card"
    userCard.style.cssText = `
      background: #f8fafc;
      padding: 1.25rem;
      border-radius: 12px;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #e2e8f0;
    `

    userCard.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
        <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #0f1c2e 0%, #1a3049 100%); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem;">
          ${usuario.nome.charAt(0).toUpperCase()}
        </div>
        <div style="flex: 1;">
          <div style="font-weight: 600; color: #0f1c2e; margin-bottom: 0.25rem;">${usuario.nome}</div>
          <div style="font-size: 0.875rem; color: #64748b;">${usuario.email}</div>
          <div style="font-size: 0.813rem; color: #94a3b8; margin-top: 0.25rem;">${usuario.cargo || "Sem cargo definido"}</div>
        </div>
        <div>
          ${nivelBadge}
        </div>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button class="btn-action btn-edit" onclick="editarUsuario(${usuario.id})" style="padding: 0.5rem 1rem;">
          Editar
        </button>
        ${usuario.id !== 1 ? `<button class="btn-action btn-delete" onclick="excluirUsuario(${usuario.id})" style="padding: 0.5rem 1rem;">Excluir</button>` : ""}
      </div>
    `

    listaUsuarios.appendChild(userCard)
  })
}

// Retorna o badge correto para cada nível
function obterBadgeNivel(nivel) {
  const badges = {
    admin: '<span class="badge badge-danger" style="font-size: 0.75rem;">Administrador</span>',
    operario: '<span class="badge badge-warning" style="font-size: 0.75rem;">Operário</span>',
    usuario: '<span class="badge badge-success" style="font-size: 0.75rem;">Usuário</span>',
  }
  return badges[nivel] || ""
}

// Abre modal para adicionar usuário
if (btnAdicionarUsuario) {
  btnAdicionarUsuario.addEventListener("click", () => {
    if (usuarioAtual.nivel !== "admin") {
      alert("Apenas administradores podem adicionar usuários!")
      return
    }

    modalUsuarioTitulo.textContent = "Adicionar Usuário"
    formUsuario.reset()
    usuarioId.value = ""
    usuarioSenha.required = true
    modalUsuario.classList.add("active")
  })
}

// Fecha modal de usuário
if (btnFecharModalUsuario) {
  btnFecharModalUsuario.addEventListener("click", () => {
    modalUsuario.classList.remove("active")
  })
}

if (btnCancelarUsuario) {
  btnCancelarUsuario.addEventListener("click", () => {
    modalUsuario.classList.remove("active")
  })
}

modalUsuario.addEventListener("click", (e) => {
  if (e.target === modalUsuario) {
    modalUsuario.classList.remove("active")
  }
})

// Salvar usuário (adicionar/editar)
if (formUsuario) {
  formUsuario.addEventListener("submit", (e) => {
    e.preventDefault()

    if (usuarioAtual.nivel !== "admin") {
      alert("Apenas administradores podem gerenciar usuários!")
      return
    }

    const usuario = {
      nome: usuarioNome.value,
      email: usuarioEmail.value,
      nivel: usuarioNivel.value,
      cargo: usuarioCargo.value || "",
    }

    // Se tem senha preenchida, atualiza/adiciona
    if (usuarioSenha.value) {
      usuario.senha = usuarioSenha.value
    }

    if (usuarioId.value) {
      // EDITAR USUÁRIO
      const id = Number.parseInt(usuarioId.value)
      const index = usuarios.findIndex((u) => u.id === id)

      // Mantém a senha antiga se não foi alterada
      if (!usuarioSenha.value) {
        usuario.senha = usuarios[index].senha
      }

      usuarios[index] = { ...usuarios[index], ...usuario }
      console.log("[v0] Usuário editado:", usuarios[index])
    } else {
      // ADICIONAR NOVO USUÁRIO
      const novoUsuario = {
        id: usuarios.length > 0 ? Math.max(...usuarios.map((u) => u.id)) + 1 : 1,
        ...usuario,
      }
      usuarios.push(novoUsuario)
      console.log("[v0] Novo usuário adicionado:", novoUsuario)
    }

    renderizarListaUsuarios()
    modalUsuario.classList.remove("active")
    formUsuario.reset()
  })
}

// Editar usuário
function editarUsuario(id) {
  if (usuarioAtual.nivel !== "admin") {
    alert("Apenas administradores podem editar usuários!")
    return
  }

  const usuario = usuarios.find((u) => u.id === id)

  if (usuario) {
    modalUsuarioTitulo.textContent = "Editar Usuário"
    usuarioId.value = usuario.id
    usuarioNome.value = usuario.nome
    usuarioEmail.value = usuario.email
    usuarioNivel.value = usuario.nivel
    usuarioCargo.value = usuario.cargo || ""
    usuarioSenha.value = ""
    usuarioSenha.required = false

    modalUsuario.classList.add("active")
  }
}

// Excluir usuário
function excluirUsuario(id) {
  if (usuarioAtual.nivel !== "admin") {
    alert("Apenas administradores podem excluir usuários!")
    return
  }

  if (id === 1) {
    alert("Não é possível excluir o administrador principal!")
    return
  }

  if (confirm("Tem certeza que deseja excluir este usuário?")) {
    const index = usuarios.findIndex((u) => u.id === id)
    const usuarioExcluido = usuarios[index]

    usuarios.splice(index, 1)
    console.log("[v0] Usuário excluído:", usuarioExcluido)

    renderizarListaUsuarios()
  }
}

// ====================================
// ====================================

// Abre modal de solicitação
// Removed redeclared function solicitarPeca
// The existing function is kept.

// Fecha modal de solicitação
if (btnFecharModalSolicitacao) {
  btnFecharModalSolicitacao.addEventListener("click", () => {
    modalSolicitacao.classList.remove("active")
  })
}

if (btnCancelarSolicitacao) {
  btnCancelarSolicitacao.addEventListener("click", () => {
    modalSolicitacao.classList.remove("active")
  })
}

modalSolicitacao.addEventListener("click", (e) => {
  if (e.target === modalSolicitacao) {
    modalSolicitacao.classList.remove("active")
  }
})

// Enviar solicitação
if (formSolicitacao) {
  formSolicitacao.addEventListener("submit", (e) => {
    e.preventDefault()

    const submitBtn = formSolicitacao.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    const produtoIdVal = Number(document.getElementById('solicitacaoProdutoId').value);
    const quantidadeVal = Number(document.getElementById('solicitacaoQuantidade').value);
    const motivoVal = document.getElementById('solicitacaoMotivo').value.trim();
    const produtoNomeVal = document.getElementById('solicitacaoProdutoNome').value;

    const solicitanteEmail = usuarioAtual ? usuarioAtual.email : (document.getElementById('loginEmail')?.value || '');
    const solicitanteNome = usuarioAtual ? usuarioAtual.nome : (document.getElementById('loginEmail')?.value || 'Usuário');

    // previne duplicidade: mesma solicitação pendente do mesmo usuário para o mesmo produto
    const duplicada = solicitacoes.some(s =>
      s.produtoId === produtoIdVal &&
      s.solicitanteEmail === solicitanteEmail &&
      s.status === 'pendente'
    );

    if (duplicada) {
      alert('Já existe uma solicitação pendente para este produto.');
      if (submitBtn) submitBtn.disabled = false;
      return;
    }

    const novoId = solicitacoes.length ? Math.max(...solicitacoes.map(s => s.id)) + 1 : 1;
    const novaSolicitacao = {
      id: novoId,
      produtoId: produtoIdVal,
      produtoNome: produtoNomeVal,
      quantidade: quantidadeVal,
      solicitante: solicitanteNome,
      solicitanteEmail,
      motivo: motivoVal,
      status: 'pendente',
      dataSolicitacao: new Date().toISOString()
    };

    solicitacoes.push(novaSolicitacao);

    // atualiza UI (chama função existente se houver)
    if (typeof renderPedidos === 'function') renderPedidos();
    if (typeof atualizarPedidosGrid === 'function') atualizarPedidosGrid();

    // fecha modal de solicitação se botão existir
    const btnFechar = document.getElementById('btnFecharModalSolicitacao');
    if (btnFechar) btnFechar.click();

    if (submitBtn) submitBtn.disabled = false;
  });
}

// ====================================
// PÁGINA DE MOVIMENTAÇÃO DE BRINDES
// ====================================

// ====================================
// PÁGINA DE MOVIMENTAÇÃO DE BRINDES
// ====================================

function atualizarPaginaMovimentacao() {
  // Atualiza o badge do usuário
  if (usuarioAtual && userBadgeMovimentacao) {
    userBadgeMovimentacao.textContent = `${usuarioAtual.nome} (${usuarioAtual.cargo})`
  }

  // Popula o select de produtos
  if (produtoSelecionado) {
    produtoSelecionado.innerHTML = '<option value="">Selecione um produto...</option>'
    produtos.forEach((produto) => {
      const option = document.createElement("option")
      option.value = produto.id
      option.textContent = `${produto.codigo} - ${produto.nome}`
      produtoSelecionado.appendChild(option)
    })
  }

  // Popula filtro de produtos no histórico
  if (filtroProdutoHistorico) {
    filtroProdutoHistorico.innerHTML = '<option value="todos">Todos os produtos</option>'
    produtos.forEach((produto) => {
      const option = document.createElement("option")
      option.value = produto.id
      option.textContent = `${produto.codigo} - ${produto.nome}`
      filtroProdutoHistorico.appendChild(option)
    })
  }

  // Atualiza estatísticas
  atualizarEstatisticasMovimentacao()

  // Renderiza histórico
  renderizarHistorico()
}

// Atualiza as estatísticas da página de movimentação
function atualizarEstatisticasMovimentacao() {
  // Calcula estoque total
  const estoqueTotal = produtos.reduce((acc, p) => acc + p.quantidade, 0)
  document.getElementById("estoqueTotal").textContent = estoqueTotal

  // Calcula entradas e saídas do dia
  const hoje = new Date()
  hoje.setHours(0, 0, 0, 0)

  const movimentacoesHoje = movimentacoes.filter((m) => {
    const dataMovimentacao = new Date(m.data)
    dataMovimentacao.setHours(0, 0, 0, 0)
    return dataMovimentacao.getTime() === hoje.getTime()
  })

  const entradasHoje = movimentacoesHoje.filter((m) => m.tipo === "entrada").reduce((acc, m) => acc + m.quantidade, 0)

  const saidasHoje = movimentacoesHoje.filter((m) => m.tipo === "saida").reduce((acc, m) => acc + m.quantidade, 0)

  document.getElementById("entradasDia").textContent = entradasHoje
  document.getElementById("saidasDia").textContent = saidasHoje

  // Calcula saldo (entradas - saídas do dia)
  const saldo = entradasHoje - saidasHoje
  const saldoElement = document.getElementById("saldoAtual")
  saldoElement.textContent = saldo >= 0 ? `+${saldo}` : saldo
  saldoElement.style.color = saldo >= 0 ? "#059669" : "#dc2626"
}

// Quando um produto é selecionado
if (produtoSelecionado) {
  produtoSelecionado.addEventListener("change", (e) => {
    const produtoId = Number.parseInt(e.target.value)

    if (produtoId) {
      const produto = produtos.find((p) => p.id === produtoId)

      if (produto) {
        // Mostra o card de informações
        produtoInfoCard.style.display = "block"

        // Preenche as informações
        produtoInfoNome.textContent = produto.nome
        produtoInfoCategoria.textContent = produto.categoria
        produtoInfoCodigo.textContent = produto.codigo
        produtoInfoQtd.textContent = `${produto.quantidade} unidades`
        produtoInfoCat.textContent = produto.categoria

        // Habilita os formulários
        if (formEntrada) {
          formEntrada.querySelector('button[type="submit"]').disabled = false
        }
        if (formSaida) {
          formSaida.querySelector('button[type="submit"]').disabled = false
        }
      }
    } else {
      // Esconde o card de informações
      produtoInfoCard.style.display = "none"

      // Desabilita os formulários
      if (formEntrada) {
        formEntrada.querySelector('button[type="submit"]').disabled = true
      }
      if (formSaida) {
        formSaida.querySelector('button[type="submit"]').disabled = true
      }
    }
  })
}

// Processamento de entrada
if (formEntrada) {
  formEntrada.addEventListener("submit", (e) => {
    e.preventDefault()

    const produtoId = Number.parseInt(produtoSelecionado.value)
    const quantidade = Number.parseInt(entradaQuantidade.value)
    const observacao = entradaObservacao.value

    if (!produtoId || !quantidade || quantidade <= 0) {
      alert("Por favor, selecione um produto e informe uma quantidade válida.")
      return
    }

    const produto = produtos.find((p) => p.id === produtoId)

    if (!produto) {
      alert("Produto não encontrado.")
      return
    }

    // Adiciona ao estoque
    produto.quantidade += quantidade

    // Registra a movimentação
    const movimentacao = {
      id: movimentacoes.length + 1,
      tipo: "entrada",
      produtoId: produto.id,
      produtoNome: produto.nome,
      produtoCodigo: produto.codigo,
      quantidade: quantidade,
      usuario: usuarioAtual.nome,
      usuarioPerfil: usuarioAtual.cargo,
      observacao: observacao,
      data: new Date().toISOString(),
    }

    movimentacoes.unshift(movimentacao)

    // Limpa o formulário
    formEntrada.reset()

    // Atualiza a interface
    atualizarPaginaMovimentacao()
    atualizarEstatisticas()
    renderizarTabela()

    // Mensagem de sucesso
    alert(
      `✅ Entrada registrada com sucesso!\n\n${quantidade} unidades de ${produto.nome} foram adicionadas ao estoque.`,
    )

    console.log("[v0] Entrada registrada:", movimentacao)
  })
}

// Processamento de saída
if (formSaida) {
  formSaida.addEventListener("submit", (e) => {
    e.preventDefault()

    const produtoId = Number.parseInt(produtoSelecionado.value)
    const quantidade = Number.parseInt(saidaQuantidade.value)
    const observacao = saidaObservacao.value

    if (!produtoId || !quantidade || quantidade <= 0) {
      alert("Por favor, selecione um produto e informe uma quantidade válida.")
      return
    }

    const produto = produtos.find((p) => p.id === produtoId)

    if (!produto) {
      alert("Produto não encontrado.")
      return
    }

    // Valida estoque disponível
    if (quantidade > produto.quantidade) {
      alert(
        `❌ Estoque insuficiente!\n\nQuantidade disponível: ${produto.quantidade} unidades\nQuantidade solicitada: ${quantidade} unidades`,
      )
      return
    }

    // Remove do estoque
    produto.quantidade -= quantidade

    // Registra a movimentação
    const movimentacao = {
      id: movimentacoes.length + 1,
      tipo: "saida",
      produtoId: produto.id,
      produtoNome: produto.nome,
      produtoCodigo: produto.codigo,
      quantidade: quantidade,
      usuario: usuarioAtual.nome,
      usuarioPerfil: usuarioAtual.cargo,
      observacao: observacao,
      data: new Date().toISOString(),
    }

    movimentacoes.unshift(movimentacao)

    // Limpa o formulário
    formSaida.reset()

    // Atualiza a interface
    atualizarPaginaMovimentacao()
    atualizarEstatisticas()
    renderizarTabela()

    // Mensagem de sucesso
    alert(`✅ Saída registrada com sucesso!\n\n${quantidade} unidades de ${produto.nome} foram retiradas do estoque.`)

    console.log("[v0] Saída registrada:", movimentacao)
  })
}

// Renderiza o histórico de movimentações
function renderizarHistorico() {
  if (!historicoTabela) return

  let movimentacoesFiltradas = [...movimentacoes]

  // Filtra por tipo
  const tipoFiltro = filtroTipo?.value
  if (tipoFiltro && tipoFiltro !== "todos") {
    movimentacoesFiltradas = movimentacoesFiltradas.filter((m) => m.tipo === tipoFiltro)
  }

  // Filtra por produto
  const produtoFiltro = filtroProdutoHistorico?.value
  if (produtoFiltro && produtoFiltro !== "todos") {
    const produtoIdFiltro = Number.parseInt(produtoFiltro)
    movimentacoesFiltradas = movimentacoesFiltradas.filter((m) => m.produtoId === produtoIdFiltro)
  }

  historicoTabela.innerHTML = ""

  if (movimentacoesFiltradas.length === 0) {
    historicoTabela.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 2rem; color: #64748b;">
          Nenhuma movimentação registrada
        </td>
      </tr>
    `
    return
  }

  movimentacoesFiltradas.forEach((mov) => {
    const tr = document.createElement("tr")

    const tipoBadge =
      mov.tipo === "entrada"
        ? `
      <span class="tipo-badge tipo-entrada">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        Entrada
      </span>
    `
        : `
      <span class="tipo-badge tipo-saida">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        Saída
      </span>
    `

    const dataFormatada = new Date(mov.data).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    tr.innerHTML = `
      <td>${tipoBadge}</td>
      <td><strong>${mov.produtoCodigo}</strong> - ${mov.produtoNome}</td>
      <td><strong>${mov.quantidade}</strong> unidades</td>
      <td>${mov.usuario}</td>
      <td>${mov.usuarioPerfil}</td>
      <td>${dataFormatada}</td>
      <td>${mov.observacao}</td>
    `

    historicoTabela.appendChild(tr)
  })
}

// Event listeners para filtros
if (filtroTipo) {
  filtroTipo.addEventListener("change", renderizarHistorico)
}

if (filtroProdutoHistorico) {
  filtroProdutoHistorico.addEventListener("change", renderizarHistorico)
}

// ====================================
// GOOGLE SHEETS INTEGRATION (FUTURO)
// ====================================
/*
INSTRUÇÕES PARA INTEGRAÇÃO COM GOOGLE SHEETS:

1. Criar uma planilha no Google Sheets
2. Ativar a Google Sheets API no console do Google Cloud
3. Obter a API Key
4. Copiar o ID da planilha (está na URL)
5. Configurar nas Configurações do sistema
6. Usar o seguinte código para buscar dados:

const SPREADSHEET_ID = 'seu_id_aqui';
const API_KEY = 'sua_api_key_aqui';
const RANGE = 'Sheet1!A:G'; // Ajuste conforme necessário

async function carregarDadosGoogleSheets() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.values) {
      // Processa os dados da planilha
      const [headers, ...rows] = data.values;
      
      produtos = rows.map((row, index) => ({
        id: index + 1,
        codigo: row[0],
        nome: row[1],
        categoria: row[2],
        quantidade: parseInt(row[3]),
        estoqueMinimo: parseInt(row[4]),
        localizacao: row[5],
        imagem: row[6]
      }));
      
      renderizarTabela();
      atualizarEstatisticas();
    }
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    alert('Erro ao conectar com Google Sheets!');
  }
}

// Para adicionar/editar dados no Google Sheets, use a API com método POST
// Documentação: https://developers.google.com/sheets/api/guides/values
*/

imagemUpload.addEventListener("change", (e) => {
  const file = e.target.files[0]

  if (file) {
    // Verifica se é uma imagem
    if (!file.type.startsWith("image/")) {
      alert("Por favor, selecione apenas arquivos de imagem.")
      return
    }

    // Cria URL temporária para preview
    const reader = new FileReader()

    reader.onload = (event) => {
      imagePreview.innerHTML = `<img src="${event.target.result}" alt="Preview">`
      imagem.value = event.target.result // Armazena o base64 da imagem
    }

    reader.readAsDataURL(file)
  }
})

// Função para renderizar a grid de produtos
function renderProductsGrid() {
  // Implementação da função para renderizar a grid de produtos
  renderizarGridProdutos()
}

const SUPABASE_URL = 'https://zrxsciwsabehmicbhctd.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_GNUdGfkOQaOfdMhHN1GWig_0v_D22YD'
const supabase = supabaseLib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
