document.addEventListener('DOMContentLoaded', () => {

    // Target UI elements
    const formEngine = document.getElementById('cafeLeadForm');
    const feedbackWindow = document.getElementById('formStatusFeedback');

    // Handle Communication Box Submissions
    formEngine.addEventListener('submit', (event) => {
        event.preventDefault(); // Halt default browser refresh behaviors

        // Capture input snapshot values
        const customerName = document.getElementById('userName').value.trim();
        const customerEmail = document.getElementById('userEmail').value.trim();
        const customerMsg = document.getElementById('userMessage').value.trim();

        if (customerName && customerEmail && customerMsg) {
            // Update UI with feedback
            feedbackWindow.style.color = '#2E7D32'; // Secure Green
            feedbackWindow.innerText = `Thank you, ${customerName}! Your booking inquiry has been logged successfully.`;
            
            // Flush text fields completely
            formEngine.reset();
        } else {
            feedbackWindow.style.color = '#C62828'; // Warning Red
            feedbackWindow.innerText = 'Please ensure all entry fields are fully completed.';
        }
    });

    // Clean tracking logs for user anchors navigation flow path adjustments
    const menuAnchors = document.querySelectorAll('.nav-links a');
    menuAnchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            console.log(`Scroll navigation window moving straight towards: ${e.target.getAttribute('href')}`);
        });
    });
});