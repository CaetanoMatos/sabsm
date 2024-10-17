<!DOCTYPE HTML>

<html lang="pt-BR">

  <head>

    <?php echo(LINKS); ?>

    <script src="../js/plantio.js"></script>

    <title>Plantio</title>

  </head>

  <body>

  <div class="mascara" style="display: none;"></div>

  <script>
    $(".mascara").show();
  </script>

  <div class="container-fluid container_center text-center">

    <div class="mb-5" style="margin-top: 5vw;">
      <h1>Cadastro Plantio</h1>
    </div>

    <div class="row form">

      <div class="col-lg-2 col-md-1 col-sm-12"></div>

      <form id="form" class="col-lg-8 col-md-10 col-sm-12">


        <div class="form-group row" id="div_desc">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_desc">DESCRIÇÃO</span>
            </div>
            <input type="text" class="form-control form_control_defs desc" aria-describedby="label_desc" name="desc" placeholder="Defina uma descrição para este plantio (opcional)">
          </div>          
        </div>

        <div class="form-group row" id="div_dataini">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_dataini">DATA DE INÍCIO</span>
            </div>
            <input type="date" class="form-control form_control_defs dataini" aria-describedby="label_dataini" name="dataini" required>
          </div>          
        </div>

        <div class="form-group row" id="div_datafim">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_datafim">DATA DE FIM</span>
            </div>
            <input type="date" class="form-control form_control_defs datafim" aria-describedby="label_datafim" name="datafim" required>
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
          
          <th>DESCRIÇÃO</th>
          <th>DATA DE INÍCIO</th>
          <th>DATA DE FIM</th>
          <th>AÇÕES</th>
        </thead>

        <tbody>
          <!-- CORPO DA TABELA CARREGADO NO JS -->
        </tbody>

      </table>

    </div>

  </div>

  </body>