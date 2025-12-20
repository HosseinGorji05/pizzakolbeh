  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      const url = link.getAttribute("href");
      if (!url.startsWith("#") && !url.startsWith("http")) {
        e.preventDefault(); 

        document.body.classList.add('fade-out');
        document.body.classList.remove('fade-in');


        setTimeout(() => {
          window.location.href = url;
        }, 500); 
      }
    });
  });

  window.addEventListener('load', () => {
    document.body.classList.remove('fade-out');
      document.body.classList.add("fade-in");
  });

  document.addEventListener("DOMContentLoaded", function () {
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
      if (select.value === "medium") {
        price = parseInt(select.dataset.medium);
      } else if (select.value === "family") {
        price = parseInt(select.dataset.double);
      }
      priceDisplay.innerText = formatPrice(price);
    }

    select.addEventListener('change', updatePrice);
    updatePrice();
      });
    });



