<?php
include 'db_connection.php';

// Debug: Verifique se os dados estão sendo recebidos corretamente
echo 'Dados recebidos: ';
print_r($_POST);

$nome = $_POST['nome'];
$logradouro = $_POST['logradouro'];
$cidade = $_POST['cidade'];


try {
    // Prepare a query de inserção
    $stmt = $pdo->prepare("INSERT INTO propriedade (nome, logradouro, cidade) VALUES (:nome, :logradouro, :cidade)");

    // Vincule os parâmetros
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':logradouro', $logradouro);
    $stmt->bindParam(':cidade', $cidade);


    // Execute a query
    $stmt->execute();
    echo "Usuário cadastrado com sucesso!";
} catch (PDOException $e) {
    echo 'Erro ao cadastrar usuário: ' . $e->getMessage();
}
?>
