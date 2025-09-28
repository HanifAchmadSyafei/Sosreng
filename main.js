// Class Active Menu
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  // Toggle menu untuk mobile
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      setTimeout(() => {
        menu.classList.add('opacity-100', 'scale-y-100');
        menu.classList.remove('opacity-0', 'scale-y-0');
      }, 10);
    } else {
      menu.classList.add('opacity-0', 'scale-y-0');
      menu.classList.remove('opacity-100', 'scale-y-100');
      setTimeout(() => {
        if (window.innerWidth < 768) {
          menu.classList.add('hidden');
        }
      }, 300); // tunggu animasi selesai
    }
  });

  // Tutup menu kalau klik di luar (mobile saja)
  document.addEventListener('click', (e) => {
    if (window.innerWidth < 768 && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
      menu.classList.add('opacity-0', 'scale-y-0');
      menu.classList.remove('opacity-100', 'scale-y-100');
      setTimeout(() => {
        if (window.innerWidth < 768) {
          menu.classList.add('hidden');
        }
      }, 300);
    }
  });

  // Saat resize → reset kondisi
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      menu.classList.remove('hidden', 'opacity-0', 'scale-y-0');
      menu.classList.add('opacity-100', 'scale-y-100');
     } else {
      menu.classList.add('hidden', 'opacity-0', 'scale-y-0');
      menu.classList.remove('opacity-100', 'scale-y-100');
     }
   });


  // Animate Modal
  const gallery = document.getElementById("autoScrollGallery");
  let autoScrollInterval;
  let userScrolling;

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(() => {
      gallery.scrollBy({ left: 250, behavior: "smooth" });

      // jika sudah di akhir, balik ke awal
      if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
        gallery.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 2000); // setiap 2 detik scroll
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  // hentikan auto scroll saat user scroll manual
  gallery.addEventListener("scroll", () => {
    stopAutoScroll();
    clearTimeout(userScrolling);
    userScrolling = setTimeout(() => {
      startAutoScroll();
    }, 3000); // tunggu 3 detik baru jalan lagi
  });

  // mulai auto scroll ketika halaman load
  startAutoScroll();

  // Kirim pesan ke Admin
 function sendToWhatsApp() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var telepon = document.getElementById("telepon").value;

  // Ganti dengan nomor WhatsApp kamu tanpa + atau 0 di depan
  var noWA = "6283872261184"; 

  var pesan = 
    "Assalamualaikum Mas Hanif Aku mau beli jajan dong...🙏🏻😊 %0A" ;
    // "Nama: " + nama + "%0A" +
    // "Email: " + email + "%0A" +
    // "No HP: " + telepon
    // "Saya ingin beli jajan %0A";

  var url = "https://wa.me/" + noWA + "?text=" + pesan;
  window.open(url, "_blank");
}

