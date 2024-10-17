<?php
include 'db_connection.php';

// Debug: Verifique se os dados estão sendo recebidos corretamente
echo 'Dados recebidos: ';
print_r($_POST);

$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$fone = $_POST['fone'];
$tipo = $_POST['tipo'];
$tecnicos = isset($_POST['tecnicos']) ? $_POST['tecnicos'] : [];

// Transformar o array de técnicos em uma string compatível com o PostgreSQL
$tecnicos = '{' . implode(',', array_map(function($item) { return '"' . $item . '"'; }, $tecnicos)) . '}';

try {
    // Prepare a query de inserção
    $stmt = $pdo->prepare("INSERT INTO usuarios (nome, cpf, fone, tipo, tecnicos) VALUES (:nome, :cpf, :fone, :tipo, :tecnicos)");

    // Vincule os parâmetros
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':cpf', $cpf);
    $stmt->bindParam(':fone', $fone);
    $stmt->bindParam(':tipo', $tipo);
    $stmt->bindParam(':tecnicos', $tecnicos);

    // Execute a query
    $stmt->execute();
    echo "Usuário cadastrado com sucesso!";
} catch (PDOException $e) {
    echo 'Erro ao cadastrar usuário: ' . $e->getMessage();
}
?>
