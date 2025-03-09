<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SolanaBozos - Meme Token</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/animations.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <script src="assets/js/ajax.js" defer></script>
    <script src="assets/js/main.js" defer></script>
    <script src="assets/js/effects.js" defer></script>
    <script src="assets/js/copy.js" defer></script>
</head>
<body>
<?php include 'includes/header.php'; ?>
<div id="main-content">
    <?php include 'pages/home.php'; ?>
</div>
<?php include 'includes/footer.php'; ?>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector('.hamburger');
        const neonNav = document.querySelector('.neon-nav');

        hamburger.addEventListener('click', () => {
            neonNav.classList.toggle('active');
        });
    });
</script>
</body>
</html>