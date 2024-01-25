function noLayout() {
    document.getElementById('cards').classList.value = '';
}

function horizontalLayout() {
    noLayout();
    document.getElementById('cards').classList.add('horizontal');
}

function verticalLayout() {
    noLayout();
    document.getElementById('cards').classList.add('vertical');
}

function gridLayout() {
    noLayout();
    document.getElementById('cards').classList.add('grid');
}


function show1() {
    blankAll();
    document.getElementById('card1').innerHTML =/*html*/`
    <div class="innercard">
        De to viktigste verktøyene vi skal bruke er disse:
            <ul>
                <li>
                    Koderedigeringsprogrammet
                    <a href="https://code.visualstudio.com/" target="_new">Visual Studio Code</a>
                    <br />
                    Vi skal bruke noen <i>extensions:</i>
                    <ul>
                        <li>JavaScript-booster</li>
                        <li>es6-string-html</li>
                        <li>live-server</li>
                        <li>live-share</li>
                    </ul>
                </li>
                <li>Nettleseren
                    <a href="https://www.google.com/intl/no/chrome/" target="_new">Google Chrome</a>
                </li>
            </ul>
    </div>
        `;
}

function show2() {
    blankAll();
    document.getElementById('card2').innerHTML = /*html*/`
    <div class="innercard">
    Vi bruker HTML til å definere et dokument.
                <ul>
                    <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                    <li>Tagger for grunnleggende formatering av tekst</li>
                    <li><tt>&lt;div&gt;</tt></li>
                    <li><tt>&lt;input type="text"&gt;</tt></li>
                    <li><tt>&lt;button&gt;</tt></li>
                    <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
                    </li>
                    <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
                    </li>
                </ul >
            </div >
    </div >
        `;
}

function show3() {
    blankAll();
    document.getElementById('card3').innerHTML = /*html*/`
    <div id="innercard">
                Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
                <ul>
                    <li>background-color</li>
                    <li><tt>color</tt></li>
                    <li><tt>padding</tt></li>
                    <li><tt>margin</tt></li>
                    <li><tt>border</tt></li>
                    <li><tt>text-align</tt></li>
                    <li><tt>font-size</tt></li>
                    <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
                    <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
                    <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
                    </li>
                    <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
                    </li>
                </ul>
    </div>
    `;
}

function show4() {
    blankAll();
    document.getElementById('card4').innerHTML = /*html*/`
    <div id="innercard">
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
    ved
    å
    manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
    <ul>
        <li><tt>background-color</tt></li>
        <li><tt>color</tt></li>
        <li><tt>padding</tt></li>
        <li><tt>margin</tt></li>
        <li><tt>border</tt></li>
        <li><tt>border-radius</tt></li>
        <li><tt>text-align</tt></li>
        <li><tt>font-size</tt></li>
        <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
            Moodle.
        </li>
        <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                Reference</a></li>

    </ul>
</div>
    `;
}

function showcardgame() {
    blankAll();
    document.getElementById('cardgame').innerHTML = /*html*/`
    <div id="head"> class="bodypart"></div>
    <div id="body"> class="bodypart"></div>
    <div id="legs"> class="bodypart"></div>
    `;
    selecthead1();
    selectbody1();
    selectlegs1();
}

function blankAll() {
    document.getElementById('card1').innerHTML = '';
    document.getElementById('card2').innerHTML = '';
    document.getElementById('card3').innerHTML = '';
    document.getElementById('card4').innerHTML = '';
    document.getElementById('cardgame').innerHTML = '';
}

function selecthead1() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selecthead4()">◀</button>
        <img src="imghkb/head1.png" />
        <button onclick="selecthead2()">▶</button>
    `;
}

function selecthead2() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selecthead1()">◀</button>
        <img src="imghkb/head2.png" />
        <button onclick="selecthead3()">▶</button>
    `;
}

function selecthead3() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selecthead2()">◀</button>
        <img src="imghkb/head3.png" />
        <button onclick="selecthead4()">▶</button>
    `;
}

function selecthead4() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selecthead3()">◀</button>
        <img src="imghkb/head4.png" />
        <button onclick="selecthead1()">▶</button>
    `;
}

function selectbody1() {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectbody4()">◀</button>
        <img src="imghkb/body1.png" />
        <button onclick="selectbody2()">▶</button>
    `;
}

function selectbody2() {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectbody1()">◀</button>
        <img src="imghkb/body2.png" />
        <button onclick="selectbody3()">▶</button>
    `;
}

function selectbody3() {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectbody2()">◀</button>
        <img src="imghkb/body3.png" />
        <button onclick="selectbody4()">▶</button>
    `;
}

function selectbody4() {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectbody3()">◀</button>
        <img src="imghkb/body4.png" />
        <button onclick="selectbody1()">▶</button>
    `;
}

function selectlegs1() {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectlegs4()">◀</button>
        <img src="imghkb/legs1.png" />
        <button onclick="selectlegs2()">▶</button>
    `;
}

function selectlegs2() {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectlegs1()">◀</button>
        <img src="imghkb/legs2.png" />
        <button onclick="selectlegs3()">▶</button>
    `;
}

function selectlegs3() {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectlegs2()">◀</button>
        <img src="imghkb/legs3.png" />
        <button onclick="selectlegs4()">▶</button>
    `;
}

function selectlegs4() {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectlegs3()">◀</button>
        <img src="imghkb/legs4.png" />
        <button onclick="selectlegs1()">▶</button>
    `;
}

