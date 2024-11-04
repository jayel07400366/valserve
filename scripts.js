document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButton = document.querySelector('.hero-button');
    const modal = document.getElementById('learnMoreModal');
    const closeModalButton = document.querySelector('.close');

    // Show modal when learn more button is clicked
    learnMoreButton.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });

    // Close modal when the close button is clicked
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
