  // When link is clicked
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      // Only handle internal links
      const url = link.getAttribute("href");
      if (!url.startsWith("#") && !url.startsWith("http")) {
        e.preventDefault(); // Prevent default navigation

        // Add fade-out class
        document.body.classList.add('fade-out');

        // Wait for fade-out to finish, then navigate
        setTimeout(() => {
          window.location.href = url;
        }, 500); // match CSS transition time
      }
    });
  });

  // When new page loads, fade-in
  window.addEventListener('load', () => {
    document.body.classList.remove('fade-out');
  });


