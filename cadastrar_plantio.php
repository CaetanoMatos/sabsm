<?php
include 'db_connection.php';

// Debug: Verifique se os dados estão sendo recebidos corretamente
echo 'Dados recebidos: ';
print_r($_POST);

$descricao = $_POST['desc'];
$dataini = $_POST['dataini'];
$datafim = $_POST['datafim'];


try {
    // Prepare a query de inserção
    $stmt = $pdo->prepare("INSERT INTO plantio (desc, dataini, datafim) VALUES (:desc, :dataini, :datafim)");

    // Vincule os parâmetros
    $stmt->bindParam(':desc', $desc);
    $stmt->bindParam(':dataini', $dataini);
    $stmt->bindParam(':datafim', $datafim);


    // Execute a query
    $stmt->execute();
    echo "Usuário cadastrado com sucesso!";
} catch (PDOException $e) {
    echo 'Erro ao cadastrar usuário: ' . $e->getMessage();
}
?>
