<?php
include 'db_connection.php';

// Debug: Verifique se os dados estão sendo recebidos corretamente
echo 'Dados recebidos: ';
print_r($_POST);

$hibrido = $_POST['hibrido'];
$data = $_POST['data'];
$amido = $_POST['amido'];
$fdn = $_POST['fdn'];
$fda = $_POST['fda'];
$ntd = $_POST['ntd'];
$mseca = $_POST['mseca'];
$prot = $_POST['prot'];
$cnf = $_POST['cnf'];
$energia = $_POST['energia'];
$qtprod = $_POST['qtprod'];

try {
    // Prepare a query de inserção
    $stmt = $pdo->prepare("INSERT INTO analises (hibrido, data, amido, fdn, fda, ntd, mseca, prot, cnf, energia, qtprod) VALUES (:hibrido, :data, :amido, :fdn, :fda, :ntd, :mseca, :prot, :cnf, :energia, :qtprod)");

    // Vincule os parâmetros
    $stmt->bindParam(':hibrido', $hibrido);
    $stmt->bindParam(':data', $data);
    $stmt->bindParam(':amido', $amido);
    $stmt->bindParam(':fdn', $fdn);
    $stmt->bindParam(':fda', $fda);
    $stmt->bindParam(':ntd', $ntd);
    $stmt->bindParam(':mseca', $mseca);
    $stmt->bindParam(':prot', $prot);
    $stmt->bindParam(':cnf', $cnf);
    $stmt->bindParam(':energia', $energia);
    $stmt->bindParam(':qtprod', $qtprod);

    // Execute a query
    $stmt->execute();
    echo "Análise cadastrada com sucesso!";
} catch (PDOException $e) {
    echo 'Erro ao cadastrar análise: ' . $e->getMessage();
}
?>
