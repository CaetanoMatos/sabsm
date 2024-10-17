<!DOCTYPE HTML>
<html lang="pt-BR">
<head>
    <?php echo(LINKS); ?>
    <script src="../js/usuarios.js"></script>
    <title>Users</title>
    <style>
        .label_disabled { color: #ccc; }
        .field_disabled { background-color: #eee; cursor: not-allowed; }
    </style>
</head>
<body>
<div class="mascara" style="display: none;"></div>
<script>
    $(".mascara").show();
</script>
<div class="container-fluid container_center text-center">
    <div class="mb-5" style="margin-top: 5vw;">
        <h1>Cadastro de Usuários</h1>
    </div>
    <div class="row form">
        <div class="col-lg-2 col-md-1 col-sm-12"></div>
        <form id="form" class="col-lg-8 col-md-10 col-sm-12">
            <input type="hidden" id="userId" name="userId">
            <div class="form-group row" id="div_nome">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text input_span" id="label_nome">NOME</span>
                    </div>
                    <input type="text" class="form-control form_control_defs nome" aria-describedby="label_nome" name="nome" placeholder="Digite o nome do cliente" required>
                </div>          
            </div>
            <div class="form-group row" id="div_cpf">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text input_span" id="label_cpf">CPF</span>
                    </div>
                    <input type="text" class="form-control form_control_defs cpf" aria-describedby="label_cpf" name="cpf" placeholder="Digite o CPF do cliente" required>
                </div>    
            </div>
            <div class="form-group row" id="div_fone">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text input_span" id="label_fone">FONE</span>
                    </div>
                    <input type="text" class="form-control form_control_defs cpf" aria-describedby="label_fone" name="fone" placeholder="Digite o número de telefone ou celular do cliente" required>
                </div>    
            </div>
            <div class="form-group row" id="div_tipo">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text input_span" id="label_tipo">TIPO</span>
                    </div>
                    <select id="tipo" class="form-control tipo" aria-describedby="label_tipo" name="tipo" required></select>
                </div>    
            </div>
            <div class="form-group row" id="div_tec">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text input_span label_disabled" id="label_tec">TÉCNICO</span>
                    </div>
                    <select id="tec" class="form-control tec" aria-describedby="label_tec" name="tec" multiple disabled></select>
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
                <th>CLIENTE</th>
                <th>CPF</th>
                <th>FONE</th>
                <th>TÉCNICOS</th>
                <th>AÇÕES</th>
            </thead>
            <tbody>
                <!-- CORPO DA TABELA CARREGADO NO JS -->
            </tbody>
        </table>
    </div>
</div>
</body>
</html>
