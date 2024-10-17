window.addEventListener('load', function() {
  load_navbar();

  var maxWidth = 0;

  $('.input_span').each(function (i, val) {
    if (val.offsetWidth > maxWidth) {
      maxWidth = val.offsetWidth;
    }
  });

  $('.input_span').each(function (i, val) {
    $(val).css('width', maxWidth);
  });

  close_mask();
});

$(document).ready(function () {
  carregar_tabela();
  $("#form").on("submit", gravar_analise);
});

function carregar_tabela() {
  const tabela = $("#tabela").DataTable({ 
    destroy: true, 
    columnDefs: [
      { "targets": [11], "orderable": false }
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

  // Carrega os dados do localStorage
  carregar_dados(tabela);
}

function carregar_dados(tabela) {
  const dados = JSON.parse(localStorage.getItem('analises')) || [];

  tabela.clear();
  dados.forEach((val, index) => {
    const btnEditar = `<button class="btn btn-warning editar" data-index="${index}" title="Editar Análise"> <i class="fas fa-edit"></i> </button>`;
    const btnExcluir = `<button class="btn btn-danger excluir" data-index="${index}" title="Excluir Análise"> <i class="fas fa-trash"></i> </button>`;

    tabela.row.add([
      val.hibrido, val.data, val.amido, val.fdn, val.fda, val.ntd, val.mseca, val.prot, val.cnf, val.energia, val.qtprod, btnEditar + btnExcluir
    ]);
  });
  
  tabela.draw();
}

function gravar_analise(event) {
  event.preventDefault();

  const dados = JSON.parse(localStorage.getItem('analises')) || [];

  const novaAnalise = {
    hibrido: $("#hib").val(),
    data: $("input[name='data']").val(),
    amido: $("input[name='amido']").val(),
    fdn: $("input[name='fdn']").val(),
    fda: $("input[name='fda']").val(),
    ntd: $("input[name='ntd']").val(),
    mseca: $("input[name='mseca']").val(),
    prot: $("input[name='prot']").val(),
    cnf: $("input[name='cnf']").val(),
    energia: $("input[name='energia']").val(),
    qtprod: $("input[name='qtprod']").val()
  };

  // Adiciona nova análise
  dados.push(novaAnalise);

  // Salva no localStorage
  localStorage.setItem('analises', JSON.stringify(dados));

  // Recarrega a tabela
  carregar_tabela();
  
  // Limpa o formulário
  $("#form")[0].reset();
}

function editar_analise(index) {
  const dados = JSON.parse(localStorage.getItem('analises')) || [];
  const analise = dados[index];

  $("#hib").val(analise.hibrido);
  $("input[name='data']").val(analise.data);
  $("input[name='amido']").val(analise.amido);
  $("input[name='fdn']").val(analise.fdn);
  $("input[name='fda']").val(analise.fda);
  $("input[name='ntd']").val(analise.ntd);
  $("input[name='mseca']").val(analise.mseca);
  $("input[name='prot']").val(analise.prot);
  $("input[name='cnf']").val(analise.cnf);
  $("input[name='energia']").val(analise.energia);
  $("input[name='qtprod']").val(analise.qtprod);

  // Remove a análise para editar
  dados.splice(index, 1);
  localStorage.setItem('analises', JSON.stringify(dados));
  carregar_tabela();
}

function excluir_analise(index) {
  const dados = JSON.parse(localStorage.getItem('analises')) || [];

  // Remove a análise do array
  dados.splice(index, 1);

  // Atualiza o localStorage
  localStorage.setItem('analises', JSON.stringify(dados));

  // Recarrega a tabela
  carregar_tabela();
}

// Eventos para editar e excluir
$(document).on('click', '.editar', function() {
  const index = $(this).data('index');
  editar_analise(index);
});

$(document).on('click', '.excluir', function() {
  const index = $(this).data('index');
  excluir_analise(index);
});
