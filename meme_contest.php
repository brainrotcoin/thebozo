<section id="meme-contest" class="neon-section">
    <h1 class="glitch-text">Meme Contest</h1><br>
    <h1 class="glitch-text">Coming Soon Live , Stay Tuned ! </h1>
    <!-- Submission Form -->
    <div class="submission-form">
        <h2>Submit Your Meme</h2>
        <form id="memeForm" action="submit_meme.php" method="POST">
            <input type="url" name="meme_url" placeholder="Paste your meme link (e.g., imgur.com)" required>
            <input type="text" name="twitter_handle" placeholder="Your Twitter/X handle" required>
            <button type="submit" class="glow-hover">Submit</button>
        </form>
    </div>

    <!-- Meme Showcase -->
    <div class="meme-showcase">
        <h2>Featured Memes</h2>
        <div class="meme-grid">
            <?php
            // Manually add approved memes (replace with your links)
            $memes = [
                ['url' => 'assets/images/memes/meme1.jpg', 'user' => '@BozoKing'],
                ['url' => 'assets/images/memes/meme2.jpg', 'user' => '@DegenQueen'],
            ];
            foreach ($memes as $meme) {
                echo "<div class='meme-item'>
                        <img src='{$meme['url']}' alt='Contest Meme'>
                        <p>By {$meme['user']}</p>
                        <button class='vote-btn glow-hover' data-meme-id='1'>Vote</button>
                      </div>";
            }
            ?>
        </div>
    </div>
</section>