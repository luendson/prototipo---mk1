// adicionarndo hovered class 

let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

 // MenuToggle 
 let toggle = document.querySelector('.toggle');
 let navigation = document.querySelector('.navigation');
 let main = document.querySelector('.main');

 toggle.onclick = function(){
     navigation.classList.toggle('active');
     main.classList.toggle('active');
 }

 // menu ususario
function MenuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}

 //Graficos
 const ctx = document.getElementById('myChart');
 const earning = document.getElementById('earning');

 new Chart(ctx, {
     type: 'polarArea',
     data: {
     labels: ['Red', 'Blue', 'Yellow', 'Green'],
         datasets: [{
             label: 'Traffic Source',
             data: [12, 19, 3, 5],
             borderWidth: 1
     }]
     },
     options: {
     Responsive: true
     }
 });

 new Chart(earning, {
     type: 'bar',
     data: {
         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
         datasets: [{
             label: '# of Votes',
             data: [12, 19, 3, 5, 2, 3],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         Responsive: true
     }
 });
