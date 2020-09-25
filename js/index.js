/* Variable */


/* Sections */
let navBar = document.getElementById('navMenu');
let sectionPersonnage = document.getElementById('personnages');
let sectionEpisode = document.getElementById('episodes');
let sectionCitations = document.getElementById('citation');
let pageperso = document.getElementById('personnagesolo');

let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');
let section4 = document.getElementById('section4');
/* navBar */
let btnPersonnage = document.getElementById('navPersonnages');
let btnEpisode = document.getElementById('navEpisodes');
let btnCitations = document.getElementById('navCitations')


var Occup;
var Birth;
/* Mise en place du changement de section */

navBar.addEventListener('click', (event) => {
    console.log(event.target.id);
    if (event.target.id == 'navPersonnages') {
        section1.classList.remove('hidden');
        section2.classList.add('hidden');
        section3.classList.add('hidden');
        section4.classList.add('hidden');
        Occup.classList.add('hidden');
        Birth.classList.add('hidden');
        console.log('ok personnage');
    }
    else if (event.target.id == 'navEpisodes') {
        section1.classList.add('hidden');
        section2.classList.remove('hidden');
        section3.classList.add('hidden');
        section4.classList.add('hidden');
        Occup.classList.add('hidden');
        Birth.classList.add('hidden');
        console.log('ok episodes');
    }
    else if (event.target.id == 'navCitations') {
        section1.classList.add('hidden');
        section2.classList.add('hidden');
        section3.classList.remove('hidden');
        section4.classList.add('hidden');
        Occup.classList.add('hidden');
        Birth.classList.add('hidden');
        console.log('ok citations');
    }
})

/* Section Personnages */

var myObj;
let xmlhttp = new XMLHttpRequest;
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
           for (x = 0; x < myObj.length; x++) {
            //console.log(myObj[x].name);
            //console.log(myObj[x].nickname);
            //console.log(myObj[x].img);

            var newItem = document.createElement('div');
            newItem.id = x;


            sectionPersonnage.appendChild(newItem);

            var name = myObj[x].name;
            var nickname = myObj[x].nickname;
            var img = myObj[x].img;
            let birthday = myObj[x].birthday;
            let occupation = myObj[x].occupation;


            var newImg = document.createElement('img');
            newImg.setAttribute('src', img);

            var newName = document.createElement('p');
            var newnickname = document.createElement('p');



            var selectName = document.createElement('option');
            selectName.setAttribute('value', name);
            newName.innerText = name;
            selectName.innerText = name;
            newnickname.innerText = nickname;


            //console.log(newPersonnage);
            var newBirthday = document.createElement('p');
            var newOccupation = document.createElement('p');

            newBirthday.innerText = birthday;
            newOccupation.innerText = occupation;

            newBirthday.classList.add('hidden');
            newOccupation.classList.add('hidden');
            newBirthday.id = "birthday" + x;
            newOccupation.id = "occupation" + x;

            document.getElementById('select-personnage').appendChild(selectName);
            document.getElementById(x).appendChild(newImg);
            document.getElementById(x).appendChild(newnickname);
            document.getElementById(x).appendChild(newName);
            document.getElementById(x).appendChild(newOccupation);
            document.getElementById(x).appendChild(newBirthday);

            document.getElementById(x).classList.add('listesPersonnages');
        }
     
        document.getElementById('search_name').addEventListener("keyup", function () {
            sectionPersonnage.innerText = "";

            for (x = 0; x < myObj.length; x++) {
                var name = myObj[x].name;
                var nickname = myObj[x].nickname;
                var img = myObj[x].img;
                var birthday = myObj[x].birthday;
                var occupation = myObj[x].occupation;
                //console.log(name.indexOf(document.getElementById('search_name').value ))
                //console.log(name.indexOf(document.getElementById('search_name').value));
                var name2 = name.toLowerCase();
                var value = document.getElementById('search_name').value.toLowerCase();
                if ((name2.indexOf(value) != -1))
                {
                    console.log(name2.indexOf(document.getElementById('search_name').value));
                    console.log(x);
                    var newItem = document.createElement('div');
                    newItem.id = x;


                    sectionPersonnage.appendChild(newItem);

                    


                    var newImg = document.createElement('img');
                    newImg.setAttribute('src', img);

                    var newName = document.createElement('p');
                    var newnickname = document.createElement('p');



                    var selectName = document.createElement('option');
                    selectName.setAttribute('value', name);
                    newName.innerText = name;
                    selectName.innerText = name;
                    newnickname.innerText = nickname;


                    //console.log(newPersonnage);
                    var newBirthday = document.createElement('p');
                    var newOccupation = document.createElement('p');

                    newBirthday.innerText = birthday;
                    newOccupation.innerText = occupation;

                    newBirthday.classList.add('hidden');
                    newOccupation.classList.add('hidden');
                    newBirthday.id = "birthday" + x;
                    newOccupation.id = "occupation" + x;

                    document.getElementById('select-personnage').appendChild(selectName);
                    document.getElementById(x).appendChild(newImg);
                    document.getElementById(x).appendChild(newnickname);
                    document.getElementById(x).appendChild(newName);
                    document.getElementById(x).appendChild(newOccupation);
                    document.getElementById(x).appendChild(newBirthday);

                    document.getElementById(x).classList.add('listesPersonnages');
                }

                
            }

        })
    }
}
    xmlhttp.open("GET", "https://www.breakingbadapi.com/api/characters", true);
    xmlhttp.send();

    /* Récupération personnage */

    document.getElementById('personnages').addEventListener('click', (event) => {
        console.log(event);
        // let idZone = event.toElement.parentElement.id;
        Occup = document.getElementById('birthday' + event.toElement.parentElement.id);
        Birth = document.getElementById('occupation' + event.toElement.parentElement.id);
        document.getElementById('birthday' + event.toElement.parentElement.id).classList.remove('hidden');
        document.getElementById('occupation' + event.toElement.parentElement.id).classList.remove('hidden');

        let newPersonnage = event.toElement.parentElement.innerHTML;
        pageperso.innerHTML = newPersonnage;
        section1.classList.add('hidden');
        section2.classList.add('hidden');
        section3.classList.add('hidden');
        section4.classList.remove('hidden');

    })
    /* Section Citations */
    var myCitation;
    let requestCitation = new XMLHttpRequest;
    requestCitation.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myCitation = JSON.parse(this.responseText);
            for (x = 0; x < myCitation.length; x++) {
                //console.log(myCitation[x].quote)
                //console.log(myCitation[x].series)

                let quote = myCitation[x].quote;
                let series = myCitation[x].series;
                let author = myCitation[x].author;

                let newDiv = document.createElement('div');
                newDiv.classList.add('quote');
                newDiv.id = ('quote' + x);
                let idNewDiv = 'quote' + x;
                newDiv.setAttribute('value', author);
                let newQuote = document.createElement('p');
                let newSeries = document.createElement('p');

                newQuote.innerText = quote;
                newSeries.innerText = series;

                document.getElementById('fullcitation').appendChild(newDiv);
                document.getElementById(idNewDiv).appendChild(newQuote);
                document.getElementById(idNewDiv).appendChild(newSeries);


            }
            document.getElementById('select-personnage').addEventListener("change", () => {
                document.getElementById('fullcitation').innerHTML = '';
                var Nbmquote = 0;
                for (x = 0; x < myCitation.length; x++) {
                    //console.log(myCitation[x].quote)
                    //console.log(myCitation[x].series)

                    let quote = myCitation[x].quote;
                    let series = myCitation[x].series;
                    let author = myCitation[x].author;

                    let newDiv = document.createElement('div');
                    newDiv.classList.add('quote');
                    newDiv.id = ('quote' + x);
                    newDiv.setAttribute('value', author);

                    let idNewDiv = 'quote' + x;
                        
                    if (document.getElementById('select-personnage').value == author) {
                        
                       
                        let newQuote = document.createElement('p');
                        let newSeries = document.createElement('p');

                        newQuote.innerText = quote;
                        newSeries.innerText = series;

                        document.getElementById('fullcitation').appendChild(newDiv);
                        document.getElementById(idNewDiv).appendChild(newQuote);
                        document.getElementById(idNewDiv).appendChild(newSeries);
                        
                        Nbmquote ++;

                    }
                    else if (document.getElementById('select-personnage').value == 'personnages') {
                        console.log('personne');
                        let newQuote = document.createElement('p');
                        let newSeries = document.createElement('p');

                        newQuote.innerText = quote;
                        newSeries.innerText = series;

                        document.getElementById('fullcitation').appendChild(newDiv);
                        document.getElementById(idNewDiv).appendChild(newQuote);
                        document.getElementById(idNewDiv).appendChild(newSeries);
                    }
                    else
                    {
                       
                    }

                }
                 if (Nbmquote == 0)
                        {
                            console.log("plouf");

                            let quoteNul = document.createElement('div');
                            quoteNul.innerHTML = "<h1>"+" Ce personnages n'a aucune citations"+"</h1>"
                            quoteNul.className.add="quotenul";
                            document.getElementById('fullcitation').appendChild(quoteNul);
                        }
            })

        }
    }
    requestCitation.open("GET", "https://www.breakingbadapi.com/api/quotes", true);
    requestCitation.send();



    let requestCitationDay = new XMLHttpRequest;
    requestCitationDay.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var citationDay = JSON.parse(this.responseText);

            quoteDay = citationDay[0].quote;
            autorDay = citationDay[0].author;

            newQuoteDay = document.createElement('p');
            newAuthorDay = document.createElement('p');

            newQuoteDay.innerText = quoteDay;
            newAuthorDay.innerText = autorDay;

            document.getElementById('citationDay').appendChild(newQuoteDay);
            document.getElementById('citationDay').appendChild(newAuthorDay);

            //console.log(quoteDay);
            //console.log(autorDay);
        }
    }
    requestCitationDay.open("GET", "https://www.breakingbadapi.com/api/quote/random", true);
    requestCitationDay.send();

 /* Section Episodes */
    let requestEpisode = new XMLHttpRequest;
    requestEpisode.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var episode = JSON.parse(this.responseText);


            for (x = 0; x < episode.length; x++) {
                titleEpisode = episode[x].title;
                seasonEpisode = episode[x].season;
                numEpisode = episode[x].episode;
                characterEpisode = episode[x].characters;

                //console.log(characterEpisode);

                let itemNew = document.createElement('div');
                itemNew.id = ('episode' + x);
                itemNew.classList.add('episodefull');
                let titreEpisode = document.createElement('p');
                titreEpisode.classList.add('titreEpisode');
                titreEpisode.id = ('title' + x);


                titreEpisode.innerHTML = "<h1>" + titleEpisode + "</h1>" + "<p>" + "Episode n°" + numEpisode + "</p>" + "<p>" + "Saison :" + seasonEpisode + "</p>";



                let personnageEpisode = document.createElement('p');
                personnageEpisode.classList.add('episodepersonnages');
                personnageEpisode.id = ('perso' + x);
                personnageEpisode.innerHTML = "<h1>" + "Personnages :" + "</h1>";

                document.getElementById('episodes').appendChild(itemNew);
                document.getElementById('episode' + x).appendChild(titreEpisode);
                document.getElementById('episode' + x).appendChild(personnageEpisode);

                for (y = 0; y < characterEpisode.length; y++) {
                    let newPersoEpisode = document.createElement('p')
                    newPersoEpisode.id= 'solo' + x + y;
                    newPersoEpisode.innerHTML = characterEpisode[y];
                    document.getElementById('perso' + x).appendChild(newPersoEpisode);
                }



                //console.log(titleEpisode);
                //console.log(seasonEpisode);
                //console.log(numEpisode);
                //console.log(characterEpisode);
            }
        }
    }
    requestEpisode.open("GET", "https://www.breakingbadapi.com/api/episodes", true);
    requestEpisode.send();




section2.addEventListener('click', (event) => {

    console.log(event);

})

   
