const uri = 'https://localhost:7173/Medicamento';
let medicamentos = [];

function obtenerMedicamentos() {
  fetch(uri)
    .then(response => response.json())
    .then(listaMedicamentos => mostrarMedicamentos(listaMedicamentos))
    .catch(error => console.error('Ha ocurrido un error al obtener los medicamentos.', error));
}

function mostrarMedicamentos(listaMedicamentos) {
  const tBody = document.getElementById('medicamentos');
  tBody.innerHTML = '';
  
  listaMedicamentos.forEach(medicamento => {
    let tr = tBody.insertRow();
    
    let td1 = tr.insertCell(0);
    let nombreMedicamento = document.createTextNode(medicamento.nombre);
    td1.appendChild(nombreMedicamento);

    let td2 = tr.insertCell(1);
    let composicionMedicamento = document.createTextNode(medicamento.composicion);
    td2.appendChild(composicionMedicamento);

    let td3 = tr.insertCell(2);
    letformaFarmaceuticaMedicamento = document.createTextNode(medicamento.formaFarmaceutica);
    td3.appendChild(letformaFarmaceuticaMedicamento);
  });

  medicamentos = listaMedicamentos;
}