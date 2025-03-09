// particles.js - Simple particle animation
var Particles = (function() {
    function init(options) {
        const canvas = document.getElementById(options.selector);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const maxParticles = options.maxParticles || 50;
        const color = options.color || ['#ffffff'];
        const sizeVariations = options.sizeVariations || 3;
        const speed = options.speed || 0.5;
        const connectParticles = options.connectParticles || false;

        function createParticle() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * sizeVariations + 1,
                speedX: (Math.random() - 0.5) * speed,
                speedY: (Math.random() - 0.5) * speed,
                color: color[Math.floor(Math.random() * color.length)]
            };
        }

        for (let i = 0; i < maxParticles; i++) {
            particles.push(createParticle());
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            });

            if (connectParticles) {
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < 100) {
                            ctx.beginPath();
                            ctx.strokeStyle = 'rgba(0, 255, 153, 0.1)';
                            ctx.lineWidth = 0.5;
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            requestAnimationFrame(draw);
        }

        draw();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    return { init };
})();