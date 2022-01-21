const judul= document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = '#ccc';
judul.innerHtml = 'Gilbert Owen';

const p =document.getElementsByTagName('p');
for ( let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}