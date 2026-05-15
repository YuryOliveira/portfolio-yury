<?php
$nome = $_POST["nome"] ?? "";
$email = $_POST["email"] ?? "";
$telefone = $_POST["telefone"] ?? "";
$motivo = $_POST["motivo"] ?? "";
$mensagem = $_POST["mensagem"] ?? "";

$nome = trim($nome);
$email = trim($email);
$telefone = trim($telefone);
$motivo = trim($motivo);
$mensagem = trim($mensagem);

if (
    empty($nome) ||
    empty($email) ||
    empty($telefone) ||
    empty($motivo) ||
    empty($mensagem) ||
    strlen($mensagem) < 20
) {
    echo "<script>
        alert('Erro: preencha todos os campos obrigatórios.');
        window.location.href = 'index.html';
    </script>";
    exit;
}

echo "<script>
    alert('Obrigado, $nome!\\nSeu contato foi recebido com sucesso.\\nEmail: $email\\nTelefone: $telefone\\nMotivo: $motivo');
    window.location.href = 'index.html';
</script>";
?>