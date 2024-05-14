const quotes = [
    "Anyone can understand the univers itself",
    "Happiness is a warm puppy",
    "Don't think or judge, just listen",
    "Do not fear failure but rather fear not trying",
    "So many books, so little time",
    "Reality continues to ruin my life",
    "Be yourself, everyone else is already taken",
    "Without music, life would be a mistake",
    "It is never too late to be what you might have been",
    "A day without sunshine is like, you know, night"
    ]

    // ak chceš random index použiť viackrát, urob si na neho funkcu 
    // a tú volaj na rôznych miestach

    //napr. const randomIndex = ()=> {
    //  return Math.floor(Math.random() * quotes.length)  
    //}
    // 
    
    export const randomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
    // keď budeš mať funkciu random index, tak ju môžeš použiť takto:
    // return quotes[randomIndex()]
    return quotes[randomIndex]
    }

    export const moveToTop = (index) => {
      // jak tam dostanu index už náhodně vybraného citátu z randomQuote???
      // zavoláš si randomIndex() a uložíš výsledok do premennej, a tú použiješ
      // ale muyslím, že presun na začiatok sa nevzťahuje na úlohu zobraziť náhodný quote, ale na pole, takže to nerob :)

      //keď ho iba zmažeme, tak oňho prídeme.
      // musíme uložiť do premennej, takto:
      // const quote = quotes.splice(index, 1)[0]
        quotes.splice(index, 1) // smaže ho na řádku, kde je
      // na začiatok poľa pridáva položky funkcia unshift()
      // dokumentácia tu: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
      // takže nad quotes zavoláš unshift a dáš jej do zátvoriek quote
        quotes.splice(index, 0, randomQuote) // přidá na začátek, 1.řádek = 0 index 
        // takto splice nefunguje
    }
    

    export const renderQuotes = () => {
      // toto nefunguje, lebo chceš vybrať eden element, ale voláš querySelectorAll, ktorý vyberá všetky a vracia pole elementov,
      // preto to spadne, lebo na pole nemôžeš zavolať .innerHTML
      // použi querySelector()
      // a nezabudni na zmenu v index.html popísanú v index.jsx
      const quote = document.querySelectorAll('#quote');
      quote.innerHTML = '';
      quotes.forEach((quote) => {
        return document.body.innerHTML += `
        <div class="quote">
        <p>${quote}</p>
        <div/>
        `;  
      })
      quotes = document.querySelectorAll('.quote');
      // querySelectorAll() vracia pole, 
      // eventListener nemôžeš zavesiť na pole, iba na jednotlivé elementy,
      // musíš to pole quotes prejsť forEach() a každému z nich dať eventListener

      // a move to top potrebuje index, takže forEach volaj ako
      // ... .forEach((item, index) => ....)
      // a moveTo Top dostane index ako argument
      quotes.addEventListener('click', moveToTop)
      // Čo je renderList???
      renderList();
    };
      
    
