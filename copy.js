document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.querySelector('.copy-btn');
    if (copyButton) {
        copyButton.addEventListener('click', copyContract);
    }
});

function copyContract() {
    const contractElement = document.getElementById('contractAddress');
    if (!contractElement) {
        console.error('Contract address element not found');
        showFeedback('Error: Contract address not found');
        return;
    }

    const textToCopy = contractElement.textContent.trim();
    if (!textToCopy) {
        console.error('No contract address found');
        showFeedback('Error: No contract address to copy');
        return;
    }

    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    textArea.style.position = 'fixed';
    textArea.style.opacity = 0;
    document.body.appendChild(textArea);

    try {
        textArea.select();
        textArea.setSelectionRange(0, 99999); // For mobile devices

        if (navigator.clipboard) {
            console.log('Using Clipboard API');
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    console.log('Clipboard API success');
                    showFeedback('Contract copied! 🤡');
                })
                .catch(err => {
                    console.error('Clipboard API error:', err);
                    showFeedback('Clipboard API failed, trying fallback');
                    fallbackCopy(textArea);
                });
        } else {
            console.log('Clipboard API not available, using fallback');
            fallbackCopy(textArea);
        }
    } catch (err) {
        console.error('Copy failed:', err);
        showFeedback('Copy failed: ' + err.message);
    } finally {
        document.body.removeChild(textArea);
    }
}

function fallbackCopy(textArea) {
    try {
        document.execCommand('copy');
        showFeedback('Contract copied! 🤡');
    } catch (err) {
        showFeedback('Press Ctrl+C to copy');
        textArea.focus();
    }
}

function showFeedback(message) {
    const feedback = document.createElement('div');
    feedback.className = 'copy-feedback';
    feedback.textContent = message;
    document.body.appendChild(feedback);

    setTimeout(() => {
        feedback.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 1700);
}