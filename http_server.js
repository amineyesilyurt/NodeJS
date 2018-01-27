var http=require('http');
var filesystem=require('fs');
function myfun(request,response){
	//roota erişildiğinde
	if(request.url=='/'){
		
		//console.log(request); //alınan paketin içeriği konsola yazdirildi

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
	else if(request.url=='/teapot'){
			response.writeHeader(200,{'Context-Tpe':'text-plain'});
			filesystem.createReadStream('./teapot.html').pipe(response);
			//dosyadan okuduklarım respons'a aktarılır
			
	}
	else{
		response.writeHeader(404,{'Context-Tpe':'text-plain'});	
		response.write('Sory we don\'t understand where would you go?');
		response.end();
	}

 
}
http.createServer(myfun).listen(8000);
console.log('server working');
/* 
http paketler seklinde calisir(paket alir,paket gönderir),
application layerda calisir
*/