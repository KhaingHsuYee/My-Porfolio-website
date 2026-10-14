/*=============== MOBILE NAV TOGGLE ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

/*=============== TRAINING & DATASET CHARTS ===============*/
document.addEventListener('DOMContentLoaded', () => {
   Chart.defaults.color = '#9ca3af';
   Chart.defaults.font.family = "'Unbounded', sans-serif";
   Chart.defaults.font.size = 11;

   // 1. Dataset Label Share (Doughnut Chart)
   const pieCanvas = document.getElementById('datasetPieChart');
   if (pieCanvas) {
      new Chart(pieCanvas.getContext('2d'), {
         type: 'doughnut',
         data: {
            labels: ['Focused (21,194)', 'Active (16,111)', 'Disengaged (8,791)', 'Collaborative (5,545)'],
            datasets: [{
               data: [21194, 16111, 8791, 5545],
               backgroundColor: [
                  'rgba(56, 189, 248, 0.85)',  // Focused - Blue
                  'rgba(74, 222, 128, 0.85)',  // Active - Green
                  'rgba(248, 113, 113, 0.85)', // Disengaged - Red
                  'rgba(250, 204, 21, 0.85)'   // Collaborative - Yellow
               ],
               borderColor: '#191b22',
               borderWidth: 3,
               hoverOffset: 8
            }]
         },
         options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '62%',
            plugins: {
               legend: {
                  position: 'bottom',
                  labels: { padding: 16, boxWidth: 12 }
               }
            }
         }
      });
   }

   // 2. Class-Wise Precision, Recall & mAP@50 (Grouped Bar Chart)
   const barCanvas = document.getElementById('metricsBarChart');
   if (barCanvas) {
      new Chart(barCanvas.getContext('2d'), {
         type: 'bar',
         data: {
            labels: ['Active', 'Collaborative', 'Focused', 'Disengaged'],
            datasets: [
               {
                  label: 'Precision (%)',
                  data: [84.0, 85.7, 78.8, 84.9],
                  backgroundColor: 'rgba(56, 189, 248, 0.75)',
                  borderRadius: 5
               },
               {
                  label: 'Recall (%)',
                  data: [81.7, 85.9, 80.5, 89.5],
                  backgroundColor: 'rgba(168, 85, 247, 0.75)',
                  borderRadius: 5
               },
               {
                  label: 'mAP@50 (%)',
                  data: [86.7, 91.3, 83.5, 90.7],
                  backgroundColor: 'rgba(74, 222, 128, 0.85)',
                  borderRadius: 5
               }
            ]
         },
         options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
               y: {
                  min: 65,
                  max: 100,
                  grid: { color: 'rgba(255, 255, 255, 0.06)' },
                  ticks: { callback: (val) => val + '%' }
               },
               x: {
                  grid: { display: false }
               }
            },
            plugins: {
               legend: {
                  position: 'top',
                  labels: { boxWidth: 12, padding: 15 }
               }
            }
         }
      });
   }
});

/*=============== IMAGE LIGHTBOX / MODAL ===============*/
const modal = document.getElementById("imageModal"),
      modalImg = document.getElementById("expandedImg"),
      closeBtn = document.querySelector(".img-modal__close"),
      zoomableImages = document.querySelectorAll(".zoomable-img");

if(modal && modalImg) {
   // Open modal on image click
   zoomableImages.forEach(img => {
      img.addEventListener('click', function() {
         modal.style.display = "flex";
         // small delay to allow display:flex to apply before adding opacity class
         setTimeout(() => {
            modal.classList.add('show-modal');
         }, 10);
         modalImg.src = this.src;
      });
   });

   // Close modal on X click
   if(closeBtn) {
      closeBtn.addEventListener('click', closeModal);
   }

   // Close modal on outside click
   modal.addEventListener('click', (e) => {
      if(e.target === modal) {
         closeModal();
      }
   });

   function closeModal() {
      modal.classList.remove('show-modal');
      // wait for transition to finish before hiding element
      setTimeout(() => {
         modal.style.display = "none";
      }, 300);
   }
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
   const scrollUpButton = document.getElementById('scroll-up');
   
   // When the scroll is higher than 350 viewport height, add the show-scroll class
   if (window.scrollY >= 350) {
      scrollUpButton.classList.add('show-scroll');
   } else {
      scrollUpButton.classList.remove('show-scroll');
   }
}

window.addEventListener('scroll', scrollUp);