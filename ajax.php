<?php
// Sanitize and validate section parameter
$allowed_sections = ['home', 'games', 'meme_contest', 'about', 'roadmap', 'buy'];
if (isset($_GET['section'])) {
    $section = basename($_GET['section']);
    if (in_array($section, $allowed_sections)) {
        include "assets/ajax/load_$section.php";
    } else {
        echo "<h1 class='glitch-text'>404 - Section Not Found!</h1>";
    }
} else {
    echo "<h1 class='glitch-text'>Invalid Request!</h1>";
}
?>