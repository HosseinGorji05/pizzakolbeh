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

  document.addEventListener("DOMContentLoaded", function () {
    // your code here
    function toFarsiNumber(n) {
      const farsiDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
      return n.toString().replace(/\d/g, x => farsiDigits[x]);
    }
    
    function formatPrice(price) {
      return toFarsiNumber(price.toLocaleString('en-US')) + ' تومان';
    }
    
    document.querySelectorAll('.menu-item').forEach(item => {
      const select = item.querySelector('.choice');
      const priceDisplay = item.querySelector('.price');

          if (!select || !priceDisplay) return;
    
      function updatePrice() {
      let price = 0;
      if (select.value === "single") {
        price = parseInt(select.dataset.single);
      } else if (select.value === "double") {
        price = parseInt(select.dataset.double);
      }
      priceDisplay.innerText = formatPrice(price);
    }

    select.addEventListener('change', updatePrice);
    updatePrice();
      });
    });

  });

