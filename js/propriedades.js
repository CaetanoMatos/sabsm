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
  
  $('.dismissButton').click();

});

document.addEventListener('DOMContentLoaded', function () {
  carregar_tabela();

  document.getElementById('form').addEventListener('submit', function (e) {
      e.preventDefault();
      cadastrarPropriedade();
  });

  fetch('/inc/brasil_cities.json') 
  .then(response => response.json())
  .then(data => {
    carregar_cidades(data);
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

  carregar_mapa(-28.649723913413382, -53.10415506362915);

  
});

function carregar_tabela() {
  
  const tabela = $("#tabela").DataTable({ 
                                          destroy: true, 
                                          columnDefs: [
                                            { "targets": [4],
                                              "orderable": false
                                            }
                                          ],
                                          language: {
                                            "sProcessing":    "Procesando...",
                                            "sLengthMenu":    "Exibindo _MENU_ registros",
                                            "sZeroRecords":   "Não foram encontrado resultados",
                                            "sEmptyTable":    "Nenhum dado disponível nesta tabela",
                                            "sInfo":          "Mostrando registros de _START_ a _END_ de um total de _TOTAL_ registros",
                                            "sInfoEmpty":     "Mostrando registros de 0 a 0 de um total de 0 registros",
                                            "sInfoFiltered":  "(filtrado de um total de _MAX_ registros)",
                                            "sInfoPostFix":   "",
                                            "sSearch":        "Pesquisar: ",
                                            "sUrl":           "",
                                            "sInfoThousands":  ",",
                                            "sLoadingRecords": "Carregando...",
                                            "oPaginate": {
                                                "sFirst":    "Primeiro",
                                                "sLast":    "Último",
                                                "sNext":    "Seguinte",
                                                "sPrevious": "Anterior"
                                            }
                                          }
                                        });
  // CARREGA OS DADOS NA TABELA
    carregar_dados(tabela);

}

function carregar_dados(tabela) {
  const propriedades = getPropriedades();
  tabela.clear();
  propriedades.forEach((propriedade, index) => {
      let btnEditar = `<button class="btn btn-warning" onclick="editarPropriedade(${index})">Editar</button>`;
      let btnExcluir = `<button class="btn btn-danger" onclick="excluirPropriedade(${index})">Excluir</button>`;
      tabela.row.add([propriedade.nome, propriedade.logradouro, propriedade.cidade, propriedade.local, btnEditar + btnExcluir]);
  });
  tabela.draw();
}

function getPropriedades() {
  const propriedades = localStorage.getItem('propriedades');
  return propriedades ? JSON.parse(propriedades) : [];
}

function setPropriedades(propriedades) {
  localStorage.setItem('propriedades', JSON.stringify(propriedades));
}

function cadastrarPropriedade() {
  const nome = document.querySelector('[name="nome"]').value;
  const logradouro = document.querySelector('[name="logradouro"]').value;
  const cidade = document.querySelector('[name="cidade"]').value;
  const local = document.getElementById('local').value;

  const propriedade = { nome, logradouro, cidade, local };

  let propriedades = getPropriedades();
  propriedades.push(propriedade);

  setPropriedades(propriedades);
  carregar_dados($('#tabela').DataTable());
  document.getElementById('form').reset();

  $.ajax({
    url: 'cadastrar_propriedades.php',
    type: 'POST',
    data: usuario,
    success: function(response) {
        console.log('Usuário cadastrado com sucesso:', response);
    },
    error: function(error) {
        console.error('Erro ao cadastrar usuário:', error);
    }
});
}

function editarPropriedade(index) {
  const propriedades = getPropriedades();
  const propriedade = propriedades[index];

  document.querySelector('[name="nome"]').value = propriedade.nome;
  document.querySelector('[name="logradouro"]').value = propriedade.logradouro;
  document.querySelector('[name="cidade"]').value = propriedade.cidade;
  document.getElementById('local').value = propriedade.local;

  excluirPropriedade(index);
}

function excluirPropriedade(index) {
  let propriedades = getPropriedades();
  propriedades.splice(index, 1);
  setPropriedades(propriedades);
  carregar_dados($('#tabela').DataTable());
}

function carregar_cidades(data) {
  let cidades = [];
  
  // Construindo o array de cidades para o Select2
  data.estados.forEach(estado => {
    estado.cidades.forEach(cidade => {
      cidades.push({ id: cidade, text: cidade });
    });
  });

  // Inicializando o Select2 com as cidades
  $(".cidade").select2({
    language: language_defs,
    multiple: false,
    placeholder: "Selecione a cidade do logradouro",
    minimumInputLength: 0,
    maximumResultsForSearch: 15,
    data: cidades
  });

  // Resetando a seleção inicial
  $(".cidade").val('').change();

  // Ajustando o mapa ao selecionar uma cidade
  $(".cidade").change(function () {
    var selectedCity = this.value;
    var cityData = cities_location_obj[selectedCity.toUpperCase()];

    if (cityData) {
      var [lat, lon] = cityData.split(';').map(coord => parseFloat(coord));

      // Reposicionando o mapa
      carregar_mapa(lat, lon);
    }
  });
}

function carregar_mapa(lat, lon) {
  $('#location_map').locationpicker({
    location: {latitude: lat, longitude: lon},   
    radius: 0,
    inputBinding: {
      latitudeInput: $('#lat'),
      longitudeInput: $('#lng')
    },
    enableAutocomplete: true,
    onchanged: function(currentLocation) {
      $('#local').val(currentLocation.latitude + ";" + currentLocation.longitude);
    },
    oninitialized: function(){
      var cb = function (event) {
          $('#location_map').locationpicker('location', {
              latitude: event.latLng.lat(),
              longitude: event.latLng.lng()
          })
      };
      $('#location_map').locationpicker('subscribe', {
          event: 'click',
          callback: cb
      });
  }
  });
}