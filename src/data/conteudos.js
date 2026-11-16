export const conteudos = [
  {
    id: 1,
    numero: "01",
    titulo: "Git e GitHub",
    explicacao: "Git é um sistema de controle de versão instalado localmente no seu computador. O GitHub é um serviço de hospedagem de repositórios Git na nuvem (remoto). O commit grava alterações no repositório local. O push envia os commits locais para o repositório remoto no GitHub. A branch é uma linha independente de desenvolvimento dentro do repositório.",
    exemplo: "$ git init\n$ git add .\n$ git commit -m \"inicia projeto\"\n$ git branch -M main\n$ git remote add origin https://github.com/usuario/repo.git\n$ git push -u origin main"
  },
  {
    id: 2,
    numero: "02",
    titulo: "Node.js e npm",
    explicacao: "Node.js é um ambiente de execução que permite rodar JavaScript fora do navegador. O npm é o gerenciador de pacotes do Node.js, usado para instalar bibliotecas e ferramentas. O comando npm install instala dependências do projeto. Os comandos node -v e npm -v exibem as versões instaladas do Node.js e do npm.",
    exemplo: "$ node -v\nv22.12.0\n$ npm -v\n10.9.0\n$ npm install react"
  },
  {
    id: 3,
    numero: "03",
    titulo: "React e JSX",
    explicacao: "React é uma biblioteca JavaScript para construir interfaces de usuário de forma declarativa e baseada em componentes. JSX é uma extensão de sintaxe que permite escrever estruturas semelhantes a HTML dentro do JavaScript. O JSX é transformado em chamadas a React.createElement antes de ser executado no navegador.",
    exemplo: "function App() {\n  return <h1>Olá, mundo!</h1>;\n}"
  },
  {
    id: 4,
    numero: "04",
    titulo: "Componentes e props",
    explicacao: "Componentes são funções JavaScript que retornam JSX e devem começar com letra maiúscula (PascalCase). Props são propriedades passadas de um componente pai para um componente filho, permitindo reutilização com dados diferentes. O componente filho acessa os dados através do parâmetro props.",
    exemplo: "function BoasVindas(props) {\n  return <h1>Olá, {props.nome}!</h1>;\n}\n\n<BoasVindas nome=\"Maria\" />",
    erroComum: "Criar um componente com nome começando por letra minúscula, como function saudacao(), ou receber props e não utilizar o parâmetro recebido dentro do JSX.",
    correcao: "Nomeie o componente com letra maiúscula, exemplo function Saudacao(), e utilize o parâmetro props nos elementos JSX, como {props.nome}."
  },
  {
    id: 5,
    numero: "05",
    titulo: "Estado e Hooks",
    explicacao: "useState é um Hook do React que permite adicionar estado a componentes funcionais. O estado controla dados que mudam ao longo do tempo e causam re-renderização da interface de forma declarativa. Para atualizar o estado baseado no valor anterior, use a forma funcional: setContador(prev => prev + 1). As regras dos Hooks exigem que useState seja chamado no nível superior do componente, nunca dentro de if, for ou funções aninhadas.",
    exemplo: "const [contador, setContador] = useState(0);\n\nfunction incrementar() {\n  setContador(prev => prev + 1);\n}",
    erroComum: "Declarar useState dentro de um bloco if ou alterar a variável de estado diretamente (ex.: contador = contador + 1) sem usar o setter setContador.",
    correcao: "Chame useState sempre no topo do componente, fora de condições e laços. Para atualizar, use sempre a função setter: setContador(novoValor)."
  },
  {
    id: 6,
    numero: "06",
    titulo: "Eventos e validação",
    explicacao: "O React usa atributos como onClick para ouvir eventos no DOM. No onClick, você deve passar a referência da função (sem parênteses) para que o React a chame quando o evento ocorrer. O método trim() remove espaços em branco do início e do fim de uma string, sendo útil para validar campos de texto antes de processá-los.",
    exemplo: "function validar(texto) {\n  return texto.trim() !== \"\";\n}\n\n<button onClick={handleClique}>Clique</button>",
    erroComum: "Escrever onClick={minhaFuncao()} com parênteses, o que executa a função imediatamente durante a renderização em vez de apenas passar a referência para ser chamada no clique.",
    correcao: "Passe apenas a referência da função sem parênteses: onClick={minhaFuncao}. Se precisar passar argumentos, use uma arrow function: onClick={() => minhaFuncao(id)}."
  },
  {
    id: 7,
    numero: "07",
    titulo: "Listas e imutabilidade",
    explicacao: "O método map() percorre um array e retorna um novo array com os elementos transformados, ideal para renderizar listas de componentes no React. Cada item da lista precisa de uma key estável e única para ajudar o React a identificar quais itens mudaram. Para atualizar arrays no estado sem mutação, crie um novo array usando o operador spread: [...prev, novoItem]. Nunca use push() diretamente no estado.",
    exemplo: "const itens = lista.map(item => <li key={item.id}>{item.texto}</li>);\n\nsetLista(prev => [...prev, { id: Date.now(), texto: \"novo\" }]);",
    erroComum: "Usar push() diretamente no array do estado (ex.: lista.push(novoItem)) ou omitir a key na lista renderizada com map().",
    correcao: "Use spread operator para criar um novo array: setLista(prev => [...prev, novoItem]). E sempre inclua key={item.id} em cada elemento renderizado pelo map()."
  },
  {
    id: 8,
    numero: "08",
    titulo: "Arquitetura web",
    explicacao: "Frontend é a parte da aplicação com a qual o usuário interage diretamente no navegador (HTML, CSS, React). Backend é a parte executada no servidor que processa lógica de negócio e acessa banco de dados. API é a interface que permite comunicação entre frontend e backend, geralmente via HTTP. localStorage é um armazenamento simples de chave-valor no navegador do usuário. SPA (Single Page Application) é uma aplicação que carrega uma única página e atualiza o conteúdo dinamicamente sem recarregar. PWA (Progressive Web App) é uma aplicação web que pode ser instalada e funcionar off-line, usando service workers.",
    exemplo: "O usuário clica em um botão no frontend → o frontend chama a API → a API consulta o backend → o backend retorna dados → o frontend exibe o resultado sem recarregar a página (SPA)."
  }
];