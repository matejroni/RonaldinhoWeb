var galIndex = localStorage.getItem('gal-broj');
    console.log(galIndex);
    if(galIndex === null) galIndex=1;
    var titles = [
        'Ronaldinho - Gallery Gremio',
        'Ronaldinho - Gallery PSG',
        'Ronaldinho - Gallery Barcelona',
        'Ronaldinho - Gallery Milan',
        'Ronaldinho - Gallery Flamengo',
        'Ronaldinho - Gallery A.Mineiro',
        'Ronaldinho - Gallery Querétaro',
        'Ronaldinho - Gallery Brasil'
    ];
    document.title = titles[galIndex-1];


    var slike = document.querySelectorAll('div.slike');
        var velikiDiv = document.querySelector('#veliki');
        var velika = document.querySelector('div.velikaSlika');
        var exit = document.querySelector('#veliki p');
        for (let i=0; i<slike.length; i++){
            slike[i].style.background = "url('Pics"+galIndex+"/galerija"+(i+1)+".png')";
            slike[i].style.backgroundPosition = 'center';
            slike[i].style.backgroundSize = 'cover';
            slike[i].style.backgroundRepeat = 'no-repeat';
        }

        for (let i=0; i<slike.length; i++){
            slike[i].addEventListener('click', function(){
                var url = slike[i].style.background;
                velika.style.background = url;
                velika.style.backgroundPosition = 'center';
                velika.style.backgroundSize = 'cover';
                velika.style.backgroundRepeat = 'no-repeat';
                velikiDiv.style.display = 'grid';
            });
        }

        exit.addEventListener('click', function(){
            velikiDiv.style.display = 'none';
        });