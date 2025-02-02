const form = document.getElementById("form");
const corpoTabela = document.querySelector("tbody");
let linhas = "";
let contador = 0;

function criarTabela(nome, telefone) {
  function cabecalho() {
    const tHeader = document.querySelector("thead");
    const trHeader = document.querySelector("tr");
    const tdNome = document.createElement("th");
    const tdTel = document.createElement("th");
    tdNome.innerHTML = "Nome:";
    tdTel.innerHTML = "Telefone:";
    trHeader.appendChild(tdNome);
    trHeader.appendChild(tdTel);
    tHeader.style.textAlign = "left";
    tHeader.style.color = "#235a20";
    tHeader.style.letterSpacing = "2";
  }
  if (contador <= 1) {
    cabecalho();
  }
  function corpo(nome, telefone) {
    let linha = `<tr>`;
    linha += `<td>${nome}</td>`;
    linha += `<td>${telefone}</td>`;
    linha += `</tr>`;
    linhas += linha;
    corpoTabela.innerHTML = linhas;
    
    
  }
  corpo(nome, telefone);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  contador++;
  const nome = document.getElementById("nome");
  const tel = document.getElementById("tel");
  criarTabela(nome.value, tel.value);
  nome.value = "";
  tel.value = "";
});
