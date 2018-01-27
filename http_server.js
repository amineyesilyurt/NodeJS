 var http=require('http');

 function myfun(request,response){
	 console.log(request); //alınan paketin içeriği yazdirildi
	 
	 //repsonse paketi olusturma
	 response.writeHeader(200,{'Context-Tpe':'text-plain'});
	 //paketin icerigi
	 var icerik= '<html><body><h1>';
	 for(i=1; i<=10;++i)
		icerik += i+'. Computer Science<br>';
	 icerik += '</h1></body></html>';
	 
	 response.write(icerik);
	 response.end();
	 
 }
 http.createServer(myfun).listen(8000);
 console.log('server working');
 /* 
 http paketler seklinde calisir(paket alir,paket gönderir),
 application layerda calisir
 */