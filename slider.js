let images=[
    'images/hd-8.jpg',
    'images/hd-6.jpg',
    'images/hp-5.jpg',
    'images/hd-9.jpg',
    'images/hd-10.jpeg'
]
let imgindex=0;
const img=document.getElementById('slider');
img.style.width='50%';
img.style.marginLeft='400px';
img.style.marginTop='30px';
setInterval( ()=>{
    if(imgindex==images.length){
        imgindex=0;
    }
    const imgLink=images[imgindex];
    img.setAttribute('src',imgLink);
    imgindex++;
},3000);















