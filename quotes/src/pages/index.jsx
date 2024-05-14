import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { randomQuote } from "./quotes.js"
import { renderQuotes } from './quotes.js';
import { moveToTop } from './quotes.js';
// keď zavoláš takto tie 3 funkcie na ten istý element(#quote),
// tak bude zobrazená len tá posledná,
// čo je renderQuotes(), pretože moveToTop() spadne

// prosím uprav index.html a priprav si tam dva rôzne div s rôznymi id, 
// nad jedným budeš volať randomQuote(), nad druhým renderQuotes().
// môžeš ich vizuálne oddeliť, aby potom nevyzeralo, že to nefunguje,
// pretože ten random na sebe nebude mať event listener

// moveToTop sa bude volať event listenerom, tu nie.
document.querySelector("#quote").textContent = randomQuote()
document.querySelector("#quote").textContent = renderQuotes()
document.querySelector("#quote").textContent = moveToTop()

