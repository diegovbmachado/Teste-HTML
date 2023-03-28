<script>
  // Seleciona o formulário HTML
  const form = document.querySelector('form');

  // Adiciona um listener de evento para o submit do formulário
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
</script>
