var cities_location_obj = new Object;

window.addEventListener('load', function() {

  load_navbar();

  close_mask();

});

function router(link) {
  active = link;
  window.location.href = `/${link}`;
}

function load_navbar() {
  return $.ajax({
    url: "../templates/navbar.html",
    success: (dados) => {
      $('body').append(dados);
      $('.btn_menu, .btn_menu_logo').click(function() {
        router($(this).data('view'));
        $('.btn_menu').removeClass('btn_menu_active');
        $(`.btn_menu[data-view="${$(this).data('view')}"`).addClass('btn_menu_active');
      });
      verify_active();
    }
  });
};

function verify_active() {
  var url = window.location.href;
  var active = url.replace(/.*\/([^\/]+)$/, "$1");
  $('.btn_menu').removeClass('btn_menu_active');
  $(`.btn_menu[data-view="${active}"`).addClass('btn_menu_active');
}

function close_mask() {
  myIntervalDesp = setInterval(async function() {
    clearInterval(myIntervalDesp);
    $(".mascara").hide();
  }, 3000);
}

var language_defs = {
  inputTooShort: function(args) {
    return "Digite 4 ou mais carácteres";
  },
  noResults: function() {
    return "Não foi encontrado nenhum resultado";
  },
  errorLoading: function() {
    return "Erro ao carregar os resultados";
  },
  searching: function() {
    return "Procurando...";
  },
}

function load_json_brasil_cities() {
  var formattedData = [];
  $.ajax({
      url: '../inc/brasil_cities.json',
      dataType: 'json',
      async: false,
      success: function(data) {
          $.each(data.estados, function(index, estado) {
              var estadoData = {
                  text: estado.sigla + ' - ' + estado.nome,
                  children: []
              };
              $.each(estado.cidades, function(index, cidade) {
                  estadoData.children.push({
                      id: cidade,
                      text: cidade
                  });
              });
              formattedData.push(estadoData);
          });
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.error('Error fetching data:', errorThrown);
      }
  });
  return formattedData;
}

function load_json_brasil_cities_location() {
  $.ajax({
      url: '../inc/brasil_cities_location.json',
      dataType: 'json',
      async: false,
      success: function(data) {
          $.each(data, function(index, cidade) {
            cities_location_obj[cidade.nome] = cidade.lat + ';' + cidade.lon
          });
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.error('Error fetching data:', errorThrown);
      }
  });
}