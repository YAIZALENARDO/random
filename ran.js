var threads = ['2023/02/gadis-hijaber-cantik-jogja.html', '2023/02/gadis-belia-berhijab-cantik-banget.html', '2023/02/hijaber-gadis-idaman-ibu.html', '2023/02/cewek-hijaber-gaul-cantik.html','2023/02/ig-cewek-cantik-berjilbab.html','2023/02/generasi-tiktok-cantik.html',,];  
var random  = threads[Math.floor(Math.random() * threads.length)];

setTimeout(function(){
    window.location.href = 'https://api-onyourway.blogspot.com/' + random;
}, 10000);
