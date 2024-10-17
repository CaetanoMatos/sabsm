window.addEventListener('load', function() {

  load_navbar();

  var maxWidth = 0;

  $('.input_span').each(function (i, val) {

    if (val.offsetWidth > maxWidth) {
      maxWidth = val.offsetWidth;
    }

  });

  $('.input_span').each(function (i, val) {

    $(val).css('width',  maxWidth);

  });

  close_mask();

});

$(document).ready(function () {
  carregar_tabela();
  carregar_hibridos();

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    cadastrarPlantio();
  });
});

function carregar_tabela() {
  const tabela = $("#tabela").DataTable({ 
    destroy: true, 
    columnDefs: [
      { "targets": [3], "orderable": false }
    ],
    language: {
      "sProcessing":    "Procesando...",
      "sLengthMenu":    "Exibindo _MENU_ registros",
      "sZeroRecords":   "Não foram encontrado resultados",
      "sEmptyTable":    "Nenhum dado disponível nesta tabela",
      "sInfo":          "Mostrando registros de _START_ a _END_ de um total de _TOTAL_ registros",
      "sInfoEmpty":     "Mostrando registros de 0 a 0 de um total de 0 registros",
      "sInfoFiltered":  "(filtrado de um total de _MAX_ registros)",
      "sSearch":        "Pesquisar: ",
      "sLoadingRecords": "Carregando...",
      "oPaginate": {
          "sFirst":    "Primeiro",
          "sLast":     "Último",
          "sNext":     "Seguinte",
          "sPrevious": "Anterior"
      }
    }
  });
  
  carregar_dados(tabela);
}

function carregar_dados(tabela) {
  const plantios = getPlantios();
  tabela.clear();
  plantios.forEach((plantio, index) => {
    let btnEditar = `<button class="btn btn-warning" onclick="editarPlantio(${index})">Editar</button>`;
    let btnExcluir = `<button class="btn btn-danger" onclick="excluirPlantio(${index})">Excluir</button>`;
    tabela.row.add([
      plantio.desc,
      plantio.dataInicio,
      plantio.dataFim,
      btnEditar + ' ' + btnExcluir
    ]);
  });
  tabela.draw();
}

function getPlantios() {
  const plantios = localStorage.getItem('plantios');
  return plantios ? JSON.parse(plantios) : [];
}

function setPlantios(plantios) {
  localStorage.setItem('plantios', JSON.stringify(plantios));
}

function cadastrarPlantio() {
  const descricao = document.querySelector('[name="desc"]').value;
  const dataInicio = document.querySelector('[name="dataini"]').value;
  const dataFim = document.querySelector('[name="datafim"]').value;

  const plantio = { descricao, dataInicio, dataFim };

  let plantios = getPlantios();
  plantios.push(plantio);

  setPlantios(plantios);
  carregar_dados($('#tabela').DataTable());
  document.getElementById('form').reset();

  // Comentado para futura implementação
  /*
  $.ajax({
    url: 'cadastrar_plantio.php',
    type: 'POST',
    data: usuario,
    success: function(response) {
        console.log('Usuário cadastrado com sucesso:', response);
    },
    error: function(error) {
        console.error('Erro ao cadastrar usuário:', error);
    }
  });
  */
}

function editarPlantio(index) {
  const plantios = getPlantios();
  const plantio = plantios[index];

  document.querySelector('[name="desc"]').value = plantio.desc;
  document.querySelector('[name="dataini"]').value = plantio.dataInicio;
  document.querySelector('[name="datafim"]').value = plantio.dataFim;

  excluirPlantio(index);
}

function excluirPlantio(index) {
  let plantios = getPlantios();
  plantios.splice(index, 1);
  setPlantios(plantios);
  carregar_dados($('#tabela').DataTable());
}
