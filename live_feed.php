<!-- live_feed.php - Live Meme Feed Section -->
<?php include 'includes/db.php'; ?>
<section id="live_feed">
    <h1 class="glitch-text">Live Meme Feed</h1>
    <p>Real-time trades by the biggest Bozos around the world:</p>
    <?php
    $query = "SELECT username, trade_amount FROM trades ORDER BY trade_amount DESC LIMIT 5";
    $result = mysqli_query($conn, $query);
    if ($result && mysqli_num_rows($result) > 0) {
        echo "<ul>";
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<li>" . htmlspecialchars($row['username']) . ": " . $row['trade_amount'] . " SOL</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>No trades yet. Be the first Bozo!</p>";
    }
    ?>
    <img src="assets/images/section_live_feed.png" alt="Bozo Live Feed" class="floating">
</section>