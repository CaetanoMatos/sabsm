<!DOCTYPE HTML>

<html lang="pt-BR">

  <head>

    <?php echo(LINKS); ?>

    <script src="../js/analises.js"></script>

    <title>Análises</title>

  </head>

  <body>

  <div class="mascara" style="display: none;"></div>

  <script>
    $(".mascara").show();
  </script>

  <div class="container-fluid container_center text-center">

    <div class="mb-5" style="margin-top: 5vw;">
      <h1>Registro de Análises</h1>
    </div>

    <div class="row form">

      <div class="col-lg-2 col-md-1 col-sm-12"></div>

      <form id="form" class="col-lg-8 col-md-10 col-sm-12">

      <div class="form-group row" id="div_hib">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text input_span" id="label_hib">HÍBRIDO</span>
                        </div>
                        <input type="text" id="hib" class="form-control hib" aria-describedby="label_hib" name="hib" placeholder="Digite o nome do híbrido" required>
                    </div>    
                </div>

        <div class="form-group row" id="div_dataini">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_dataini">DATA</span>
            </div>
            <input type="date" class="form-control form_control_defs data" aria-describedby="label_data" name="data" required>
          </div>          
        </div>

        <div class="form-group row" id="div_amido">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_amido">AMIDO</span>
            </div>
            <input type="text" class="form-control form_control_defs amido" aria-describedby="label_amido" name="amido" placeholder="Digite o valor de amido na análise" required>
          </div>          
        </div>

        <div class="form-group row" id="div_fdn">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_fdn">FDN</span>
            </div>
            <input type="text" class="form-control form_control_defs fdn" aria-describedby="label_fdn" name="fdn" placeholder="Digite o valor de FDN na análise" required>
          </div>          
        </div>

        <div class="form-group row" id="div_fda">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_fda">FDA</span>
            </div>
            <input type="text" class="form-control form_control_defs fda" aria-describedby="label_fda" name="fda" placeholder="Digite o valor de FDA na análise" required>
          </div>          
        </div>

        <div class="form-group row" id="div_ntd">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_ntd">NTD</span>
            </div>
            <input type="text" class="form-control form_control_defs ntd" aria-describedby="label_ntd" name="ntd" placeholder="Digite o valor de NTD na análise" required>
          </div>          
        </div>

        <div class="form-group row" id="div_mseca">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_mseca">MATÉRIA SECA</span>
            </div>
            <input type="text" class="form-control form_control_defs mseca" aria-describedby="label_mseca" name="mseca" placeholder="Digite o valor de matéria seca na análise" required>
          </div>          
        </div>

        <div class="form-group row" id="div_prot">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_prot">PROTEÍNA</span>
            </div>
            <input type="text" class="form-control form_control_defs prot" aria-describedby="label_prot" name="prot" placeholder="Digite o valor de proteína na análise" required>
          </div>          
        </div>

        <div class="form-group row" id="div_cnf">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_cnf">CNF</span>
            </div>
            <input type="text" class="form-control form_control_defs cnf" aria-describedby="label_cnf" name="cnf" placeholder="Digite o valor de CNF na análise" required>
          </div>          
        </div>

        <div class="form-group row" id="div_energia">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_energia">ENERGIA DE LACTÂNCIA</span>
            </div>
            <input type="text" class="form-control form_control_defs energia" aria-describedby="label_energia" name="energia" placeholder="Digite o valor de energia de lactância na análise" required>
          </div>          
        </div>

        <div class="form-group row" id="div_qtprod">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text input_span" id="label_qtprod">QUANTIDADE PRODUZIDA</span>
            </div>
            <input type="text" class="form-control form_control_defs qtprod" aria-describedby="label_qtprod" name="qtprod" placeholder="Digite o valor total de produção na análise" required>
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
          <th>HÍBRIDO</th>
          <th>DATA DA ANÁLISE</th>
          <th>AMIDO</th>
          <th>FDN</th>
          <th>FDA</th>
          <th>NTD</th>
          <th>MATÉRIA SECA</th>
          <th>PROTEÍNA</th>
          <th>CNF</th>
          <th>ENERGIA LAC</th>
          <th>QUANTIDADE</th>
          <th>AÇÕES</th>
        </thead>

        <tbody>
          <!-- CORPO DA TABELA CARREGADO NO JS -->
        </tbody>

      </table>

    </div>

  </div>

  </body>