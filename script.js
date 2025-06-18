const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.toggle-btn');
  const answer = item.querySelector('.faq-answer');

  btn.addEventListener('click', () => {
    const isVisible = answer.style.display === 'block';

    // Hide all answers
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.style.display = 'none';
    });

    // Reset all toggle buttons
    document.querySelectorAll('.toggle-btn').forEach(button => {
      button.textContent = '+';
    });

    // Toggle current
    if (!isVisible) {
      answer.style.display = 'block';
      btn.textContent = '×';
    }
  });
});
