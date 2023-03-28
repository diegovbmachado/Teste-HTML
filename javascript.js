
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // previne o recarregamento da página

    // Selecionando os valores dos campos do formulário
    let bill = parseFloat(document.querySelector('#bill').value);
    let serviceQual = parseFloat(document.querySelector('#serviceQual').value);
    let people = parseInt(document.querySelector('#people').value);

    // Calculando a gorjeta e o valor total da conta
    let tipAmount = bill * serviceQual;
    let totalAmount = bill + tipAmount;
    let tipAmountPerPerson = tipAmount / people;
    let totalAmountPerPerson = totalAmount / people;

    // Exibindo os resultados no elemento com id "totalTip"
    document.querySelector('#totalTip').innerHTML = `
      <p>Gorjeta por pessoa: R$${tipAmountPerPerson.toFixed(2)}</p>
      <p>Total por pessoa: R$${totalAmountPerPerson.toFixed(2)}</p>
    `;
  });
  const form = document.querySelector('form');


  form.addEventListener('submit', function(event) {
    // Impede o comportamento padrão do formulário
    event.preventDefault();

    // Seleciona os elementos do formulário
    const billInput = document.querySelector('#bill');
    const serviceQualSelect = document.querySelector('#serviceQual');
    const peopleInput = document.querySelector('#people');

    // Obtém os valores dos elementos do formulário
    const bill = parseFloat(billInput.value);
    const serviceQual = parseFloat(serviceQualSelect.value);
    const people = parseInt(peopleInput.value);

    // Calcula a gorjeta e o total da conta
    const tipAmount = bill * serviceQual;
    const total = bill + tipAmount;
    const totalPerPerson = total / people;

    // Exibe os resultados na página
    const resultsDiv = document.createElement('div');
    resultsDiv.innerHTML = `
      <p>Gorjeta: R$ ${tipAmount.toFixed(2)}</p>
      <p>Total: R$ ${total.toFixed(2)}</p>
      <p>Total por pessoa: R$ ${totalPerPerson.toFixed(2)}</p>
    `;
    form.appendChild(resultsDiv);
  });

