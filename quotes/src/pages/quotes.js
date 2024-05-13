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
    
    export const randomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
    
    return quotes[randomIndex]
    }

    export const moveToTop = (index) => {
      // jak tam dostanu index už náhodně vybraného citátu z randomQuote???
        quotes.splice(index, 1) // smaže ho na řádku, kde je
        quotes.splice(index, 0, randomQuote) // přidá na začátek, 1.řádek = 0 index 
    }
    

    export const renderQuotes = () => {
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
      quotes.addEventListener('click', moveToTop)
      renderList();
    };
      
    
