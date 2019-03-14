function snimi(kontakt){
			var ls_kontakt;
			if (localStorage.getItem('kontakti') == null){
				ls_kontakt = [];
			} else {
				ls_kontakt = JSON.parse(localStorage.getItem('kontakti'));
			} 
			ls_kontakt.push(kontakt);
			localStorage.setItem('kontakti', JSON.stringify(ls_kontakt));
			document.querySelector('#fname').value = '';
			document.querySelector('#lname').value = '';
			document.querySelector('#subject').value = '';
		}

		document.querySelector('#posalji').addEventListener('click', function(e){
			e.preventDefault();
			var ime = document.querySelector('#fname').value; 
			var prezime = document.querySelector('#lname').value;	
			var poruka = document.querySelector('#subject').value;
			var opcija = parseInt(document.querySelector('#country').value);
			var kontinent;
			switch(opcija){
				case 1: kontinent = 'Asia';break;
				case 2: kontinent = 'Europe';break;
				case 3: kontinent = 'USA';break;
				case 4: kontinent = 'Australia';break;
				case 5: kontinent = 'Africa';break;
				default: kontinent = 'Asia' ;
			}

			var kontakt = {
				ime:ime,
				prezime: prezime,
				kontinent:kontinent,
				poruka: poruka
			};
			snimi(kontakt);
			// console.log(kontakt);
		});
		
		var galLink = document.querySelectorAll('a[href="galerija.html"]');
		// alert(galLink.length);
		for(let i=0; i<galLink.length; i++){
			galLink[i].onclick = function(){
				localStorage.setItem('gal-broj', (i+1));
			}
		}