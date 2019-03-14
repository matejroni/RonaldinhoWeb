function Proizvod( slikaURL, ime, cena, barkod){
			this.slika = slikaURL;
			this.ime =  ime;
			this.cena = cena;
			var barkod = barkod;
			this.getBarkod = function(){
				return barkod;
			}
		} 
		var proizvodi = {
			dresovi: [],
			patike: [],
			suveniri: []
			// stavka4: [],
			// stavka5: [],
			// stavka6: []
		}
		var dres1 = new Proizvod("slike/dres1.png", "Barcelona", 8000, 256347);
		proizvodi.dresovi.push(dres1);
		var dres2 = new Proizvod("slike/dres2.png", "Brasil", 9000, 723431);
		proizvodi.dresovi.push(dres2);
		var dres3 = new Proizvod("slike/dres3.png", "Paris-SG", 7000, 725431);
		proizvodi.dresovi.push(dres3);
		var dres4 = new Proizvod("slike/dres4.png", "Milan", 7500, 722431);
		proizvodi.dresovi.push(dres4);
		var dres5 = new Proizvod("slike/dres5.png", "A.Mineiro", 6900, 722441);
		proizvodi.dresovi.push(dres5);
		var dres6 = new Proizvod("slike/dres6.png", "Flamengo", 6800, 722431);
		proizvodi.dresovi.push(dres6)
		var dres7 = new Proizvod("slike/dres7.png", "Queretaro", 6500, 722831);
		proizvodi.dresovi.push(dres7);
		var dres8 = new Proizvod("slike/dres8.png", "Gremio", 6300, 722438);
		proizvodi.dresovi.push(dres8);
		
		var patika1 = new Proizvod("slike/patike1.png", "Nike1", 8000, 256347);
		proizvodi.patike.push(patika1);
		var patika2 = new Proizvod("slike/patike2.png", "Nike2", 7000, 744431);
		proizvodi.patike.push(patika2);
		var patika3 = new Proizvod("slike/patike3.png", "Nike3", 6000, 725434);
		proizvodi.patike.push(patika3);
		var patika4 = new Proizvod("slike/patike4.png", "Nike4", 3500, 724431);
		proizvodi.patike.push(patika4);
		var patika5 = new Proizvod("slike/patike5.png", "Nike5", 3900, 799441);
		proizvodi.patike.push(patika5);
		var patika6 = new Proizvod("slike/patike6.png", "Nike6", 3800, 729931);
		proizvodi.patike.push(patika6)
		var patika7 = new Proizvod("slike/patike7.png", "Nike7", 4500, 728831);
		proizvodi.patike.push(patika7);
		var patika8 = new Proizvod("slike/patike8.png", "Nike8", 5300, 727738);
		proizvodi.patike.push(patika8);
		
		var suvenir1 = new Proizvod("slike/suvenir1.png", "Figura Brasil", 1200, 336347);
		proizvodi.suveniri.push(suvenir1);
		var suvenir2 = new Proizvod("slike/suvenir2.png", "Figura Milan", 1000, 443431);
		proizvodi.suveniri.push(suvenir2);
		var suvenir3 = new Proizvod("slike/suvenir3.png", "Figura Barca", 900, 555431);
		proizvodi.suveniri.push(suvenir3);
		var suvenir4 = new Proizvod("slike/suvenir4.png", "Figura A.Mineiro", 750, 662431);
		proizvodi.suveniri.push(suvenir4);
		var suvenir5 = new Proizvod("slike/suvenir5.png", "Figura Barca", 800, 772441);
		proizvodi.suveniri.push(suvenir5);
		var suvenir6 = new Proizvod("slike/suvenir6.png", "Solja", 400, 932431);
		proizvodi.suveniri.push(suvenir6)
		var suvenir7 = new Proizvod("slike/suvenir7.png", "Privezak", 250, 793831);
		proizvodi.suveniri.push(suvenir7);
		var suvenir8 = new Proizvod("slike/suvenir8.png", "Bedz", 300, 722218);
		proizvodi.suveniri.push(suvenir8);

		var begin = document.getElementById('begin');
		var firstPage = document.getElementById('firstPage');
		var mainMenu = document.getElementById('mainMenu');
		var menuPics = document.querySelectorAll('.menuPics');
		var section = document.querySelectorAll('section');
		var products = document.querySelectorAll('.products');
		var menuX = document.getElementById('menuExit');
		var menuXOpen = false;

		begin.addEventListener('click', function(){
			mainMenu.style.display = 'grid';
			firstPage.style.opacity = '0';
			setTimeout(function(){
				firstPage.style.display = 'none'
			}, 1000);
		});
		
		
		// for (let i=0; i<menuPics.length; i++){
			for (let i=0; i<3; i++){ // obzirom da samo prve 3 stavke imaju sadržaj zato ovde nije menuPics.length nego <3 da se ne bi aktivirao listener za prazne stavke
			menuPics[i].addEventListener('click', function(){
				section[i].style.display = 'grid';
				section[i].style.left = '0';
				menuXOpen = true;
			});
		}
		window.addEventListener('click', function(){
			if (menuXOpen)
				menuX.style.transform = 'scale(1,1) rotate(90deg)';
			else 
				menuX.style.transform = 'scale(0,0) rotate(0deg)';
		});
		menuX.addEventListener('click', function(){
			for (let i=0; i<menuPics.length; i++){
				section[i].style.left = '100%';
				// section[i].style.display = 'none';
			}
			menuXOpen = false;
		});
	
		var elementiDresovi = [];
		var elementiKopacke = [];
		var elementiSuveniri = [];
		

		function ubaciProizvod(grupaProizvoda, nizElemenata, brojGrupe){
			for (let i=0; i<grupaProizvoda.length; i++){
				nizElemenata[i] = document.createElement('div');
				var div = document.createElement('div');
				div.classList.add('pic');
				div.style.background = 'url('+grupaProizvoda[i].slika+') no-repeat';
				div.style.backgroundPosition = 'center';
				div.style.backgroundSize = 'cover';
				nizElemenata[i].appendChild(div);
				var pIme = document.createElement('p');
				pIme.classList.add('name');
				pIme.innerHTML = grupaProizvoda[i].ime;
				nizElemenata[i].appendChild(pIme);
				var pCena = document.createElement('p');
				pCena.classList.add('price');
				pCena.innerHTML = grupaProizvoda[i].cena;
				nizElemenata[i].appendChild(pCena);
				var kupi = document.createElement('button');
				kupi.innerHTML = 'Dodaj u korpu <i class="fas fa-cart-plus"></i>';
				nizElemenata[i].appendChild(kupi);
				products[brojGrupe].appendChild(nizElemenata[i]);
			}
		}
		
		ubaciProizvod(proizvodi.dresovi, elementiDresovi, 0);
		ubaciProizvod(proizvodi.patike, elementiKopacke, 1);
		ubaciProizvod(proizvodi.suveniri, elementiSuveniri, 2);
		
		function korpaLs(){
      var lskorpa;
      if (localStorage.getItem('korpa') == null){
        var korpa = lskorpa = [];
      } else {
        var korpa = lskorpa = JSON.parse(localStorage.getItem('korpa'));
      }
      return korpa;
    }

    var kupiPdres = document.querySelectorAll('#dresovi .products div button');
    for ( let i=0; i<kupiPdres.length; i++) {
      kupiPdres[i].addEventListener('click', function() {
        var lskorpa = korpaLs();
        lskorpa.push(proizvodi.dresovi[i]);
        localStorage.setItem('korpa', JSON.stringify(lskorpa));
      });
    }

    var kupiPpatike = document.querySelectorAll('#patike .products div button');
    for ( let i=0; i<kupiPpatike.length; i++) {
      kupiPpatike[i].addEventListener('click', function() {
        var lskorpa = korpaLs();
        lskorpa.push(proizvodi.patike[i]);
        localStorage.setItem('korpa', JSON.stringify(lskorpa));
      });
    }

    var kupiPsuvenir = document.querySelectorAll('#suveniri .products div button');
    for ( let i=0; i<kupiPsuvenir.length; i++) {
      kupiPsuvenir[i].addEventListener('click', function() {
        var lskorpa = korpaLs();
        lskorpa.push(proizvodi.suveniri[i]);
        localStorage.setItem('korpa', JSON.stringify(lskorpa));
      });
    }