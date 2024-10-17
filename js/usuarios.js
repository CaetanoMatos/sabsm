document.addEventListener('DOMContentLoaded', function () {
  load_navbar();
  ajustarLarguraInputSpan();
  carregar_tabela();
  carregar_tipo();
  carregar_tecnicos();
  close_mask();

  document.getElementById('form').addEventListener('submit', function (e) {
      e.preventDefault();
      cadastrarUsuario();
  });
});

function ajustarLarguraInputSpan() {
  var maxWidth = 0;
  $('.input_span').each(function (i, val) {
      if (val.offsetWidth > maxWidth) {
          maxWidth = val.offsetWidth;
      }
  });
  $('.input_span').each(function (i, val) {
      $(val).css('width', maxWidth);
  });
}

function carregar_tabela() {
  const tabela = $("#tabela").DataTable({
      destroy: true,
      columnDefs: [
          { "targets": [4], "orderable": false }
      ],
      language: {
          "sProcessing": "Procesando...",
          "sLengthMenu": "Exibindo _MENU_ registros",
          "sZeroRecords": "Não foram encontrado resultados",
          "sEmptyTable": "Nenhum dado disponível nesta tabela",
          "sInfo": "Mostrando registros de _START_ a _END_ de um total de _TOTAL_ registros",
          "sInfoEmpty": "Mostrando registros de 0 a 0 de um total de 0 registros",
          "sInfoFiltered": "(filtrado de um total de _MAX_ registros)",
          "sSearch": "Pesquisar: ",
          "oPaginate": {
              "sFirst": "Primeiro",
              "sLast": "Último",
              "sNext": "Seguinte",
              "sPrevious": "Anterior"
          }
      }
  });
  carregar_dados(tabela);
}

function carregar_dados(tabela) {
  const usuarios = getUsuarios();
  tabela.clear();
  usuarios.forEach((usuario, index) => {
      let btnEditar = `<button class="btn btn-warning" onclick="editarUsuario(${index})">Editar</button>`;
      let btnExcluir = `<button class="btn btn-danger" onclick="excluirUsuario(${index})">Excluir</button>`;
      tabela.row.add([usuario.nome, usuario.cpf, usuario.fone, usuario.tipo, btnEditar + btnExcluir]);
  });
  tabela.draw();
}

function getUsuarios() {
  const usuarios = localStorage.getItem('usuarios');
  return usuarios ? JSON.parse(usuarios) : [];
}

function setUsuarios(usuarios) {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function cadastrarUsuario() {
  const userId = document.getElementById('userId').value;
  const nome = document.querySelector('[name="nome"]').value;
  const cpf = document.querySelector('[name="cpf"]').value;
  const fone = document.querySelector('[name="fone"]').value;
  const tipo = document.querySelector('[name="tipo"]').value;
  let tecnicos = $('#tec').val() || []; // Use um array vazio se tecnicos for null

  const usuario = { nome, cpf, fone, tipo, tecnicos };

  let usuarios = getUsuarios();

  if (userId) {
      usuarios[userId] = usuario;
      document.getElementById('userId').value = '';
  } else {
      usuarios.push(usuario);
  }

  setUsuarios(usuarios);
  carregar_dados($('#tabela').DataTable());
  document.getElementById('form').reset();
  $('#tec').attr('disabled', true).val(null).trigger('change');

  console.log('Enviando dados:', usuario);

  $.ajax({
      url: 'cadastrar_usuario.php',
      type: 'POST',
      data: usuario,
      success: function(response) {
          console.log('Usuário cadastrado com sucesso:', response);
      },
      error: function(xhr, status, error) {
          console.error('Erro ao cadastrar usuário:', error);
      }
  });
}




function editarUsuario(index) {
  const usuarios = getUsuarios();
  const usuario = usuarios[index];

  document.getElementById('userId').value = index;
  document.querySelector('[name="nome"]').value = usuario.nome;
  document.querySelector('[name="cpf"]').value = usuario.cpf;
  document.querySelector('[name="fone"]').value = usuario.fone;
  document.querySelector('[name="tipo"]').value = usuario.tipo;
  $('#tec').val(usuario.tecnicos).trigger('change');

  $('#tipo').removeClass('option_disabled');
  if (usuario.tipo == 'P') {
      $('#tec').attr('disabled', false).removeClass('field_disabled');
      $('#label_tec').removeClass('label_disabled');
  } else {
      $('#tec').attr('disabled', true).addClass('field_disabled');
      $('#label_tec').addClass('label_disabled');
  }
}

function excluirUsuario(index) {
  let usuarios = getUsuarios();
  usuarios.splice(index, 1);
  setUsuarios(usuarios);
  carregar_dados($('#tabela').DataTable());
}

function carregar_tipo() {
  var options = [
      { id: "A", text: 'Administrador' },
      { id: "P", text: 'Produtor' },
      { id: "T", text: 'Técnico' }
  ];
  $(".tipo").select2({
      language: language_defs,
      multiple: false,
      placeholder: "Selecione o tipo deste usuário",
      minimumInputLength: 0,
      maximumResultsForSearch: 15,
      data: options
  });
  $(".tipo").val('').change();
}

function carregar_tecnicos() {
  $(".tec").select2({
      language: language_defs,
      multiple: false,
      placeholder: "Selecione um Técnico para vincular a este Produtor",
      minimumInputLength: 0,
      maximumResultsForSearch: 15
  });
}

$('#tipo').change(function () {
  $(this).removeClass('option_disabled');
  if ($(this).val() == 'P') {
      $('#tec').attr('disabled', false).removeClass('field_disabled');
      $('#label_tec').removeClass('label_disabled');
  } else {
      $('#tec').attr('disabled', true).addClass('field_disabled');
      $('#label_tec').addClass('label_disabled');
  }
});
