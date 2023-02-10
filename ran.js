var threads = ['4128749', '5128749', '3128749', ...];  
var random  = threads[Math.floor(Math.random() * threads.length)];

setTimeout(function(){
    window.location.href = 'http://somesite.xxx/showthread.php?tid=' + random;
}, 10000);
