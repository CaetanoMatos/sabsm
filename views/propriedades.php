<!DOCTYPE HTML>

<html lang="pt-BR">

  <head>

    <?php echo(LINKS); ?>
    
    <script src="../js/propriedades.js"></script>

    <script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false&libraries=places"></script>
    <script type="text/javascript" src="https://rawgit.com/Logicify/jquery-locationpicker-plugin/master/dist/locationpicker.jquery.js"></script>

    <title>Propriedades</title>

  </head>

  <body>

  <div class="mascara" style="display: none;"></div>

  <script>
    $(".mascara").show();
  </script>

  <div class="container-fluid container_center text-center">

    <div class="mb-5" style="margin-top: 5vw;">
      <h1>Vínculo de Propriedades</h1>
    </div>

    <div class="row form">

      <div class="col-lg-2 col-md-1 col-sm-12"></div>

      <form id="form" class="col-lg-8 col-md-10 col-sm-12">

        <div class="form-group row" id="div_nome">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_nome">NOME</span>
            </div>
            <input type="text" class="form-control form_control_defs nome" aria-describedby="label_nome" name="nome" placeholder="Digite o nome (apelido) da propriedade" required>
          </div>          
        </div>

        <div class="form-group row" id="div_logra">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_logra">LOGRADOURO</span>
            </div>
            <input type="text" class="form-control form_control_defs logradouro" aria-describedby="label_logra" name="logradouro" placeholder="Digite o logradouro da propriedade" required>
          </div>          
        </div>

        <div class="form-group row" id="div_cid">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_cid">CIDADE</span>
            </div>
            <select id="cidade" class="form-control cidade" aria-describedby="label_cidade" name="cidade" required>
              
            </select>
          </div>    
        </div>

        <div class="form-group row" id="div_local">
            <div class="input-group mb-3">
              <div class="input-group-prepend w-100">
                   <span class="input-group-text input_span_100" id="label_local">LOCALIZAÇÃO</span>
              </div>
             <div id="location_map" style="width: 100%; height: 400px;"></div>
            <input type="text" id="local" name="local" class="form-control">
            </div>    
        </div>

  
        <div class="form-group text-center my-3">
          <button type="submit" id="gravar" class="btn btn_submit gravar">Cadastrar</button>
        </div>

      </form>

      <div class="col-lg-2 col-md-1 col-sm-12"></div>

    </div>

    <div class="my-3">

      <table id="tabela">

        <thead class="thead-dark">
          <th>NOME</th>
          <th>LOGRADOURO</th>
          <th>CIDADE</th>
          <th>LOCALIZAÇÃO</th>
          <th>AÇÕES</th>
        </thead>

        <tbody>
          <!-- CORPO DA TABELA CARREGADO NO JS -->
        </tbody>

      </table>

    </div>

  </div>

  </body>