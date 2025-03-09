document.addEventListener("DOMContentLoaded", function () {
    console.log("SolanaBozos Loaded!");

    // Smooth Scroll for Internal Links
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const section = this.getAttribute("data-section");
            loadSection(section);
        });
    });

    // Hover Effect on Buttons
    document.querySelectorAll(".glow-hover").forEach((button) => {
        button.addEventListener("mouseenter", function () {
            this.classList.add("glow-effect");
        });
        button.addEventListener("mouseleave", function () {
            this.classList.remove("glow-effect");
        });
    });
});
// NFT Filtering
document.querySelectorAll('.nft-filters .neon-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.nft-filters .neon-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.nft-card').forEach(card => {
            card.style.display = (filter === 'all' || card.classList.contains(filter)) ? 'block' : 'none';
        });
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('open');
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});