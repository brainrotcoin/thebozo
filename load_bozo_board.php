<?php
$file = '/home/memejhqz/public_html/final1/pages/bozo_board.php';
if (file_exists($file)) {
    include $file;
} else {
    echo "<h1 class='glitch-text'>Error: File $file not found!</h1>";
}
?>