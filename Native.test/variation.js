function waitForElement(selector, trigger) {
    var interval = setInterval(function () {
        if (
            document &&
            document.querySelector(selector) &&
            document.querySelectorAll(selector).length > 0
        ) {
            clearInterval(interval);
            trigger();
        }
    }, 50);
    setTimeout(function () {
        clearInterval(interval);
    }, 15000);
}
// homepage 
waitForElement('.homepage .hero h1', function () {
    document.querySelector('.homepage .hero h1').innerHTML = 'Plane deinen JGA';
});
waitForElement('.homepage .hero h1', function () {

    const htmlElement = `
    <div class="trust-pilot-box">
        4.8 / 5
        <div class="stars " data-stars-value="5">
            <span class="star la la-star"></span>
            <span class="star la la-star"></span>
            <span class="star la la-star"></span>
            <span class="star la la-star"></span>
            <span class="star la la-star"></span>
        </div>
        <span> 7188 Bewertungen</span>
        
    </div>`;

    // heading ke upar show karne ke liye
    document.querySelector('.homepage .hero ').insertAdjacentHTML('beforebegin', htmlElement);

});
waitForElement('.hero', function () {
    const screencontent = `
    <section class="screen-section">
        <div class="container">
            <div class="content">
                <div class="heading">Mit Pissup wird die Planung easy</div>
                <div class="card">
                    <div class="card-content">
                        <div class="card-img">
                            <img src="https://i.postimg.cc/Xvxj3Pf2/Save-hours-of-planning-1.png" alt="planning">
                            </div>
                            <div class="card-body">
                                <h3>Spare dir Stunden Planung</h3>
                                <p>wir stellen euren JGA in Minuten zusammen (statt endlos zu googeln).</p>
                            </div>
                            
                        </div>
                        
                        
                    <div class="card-content">
                        <div class="card-img">
                            <img src="https://i.postimg.cc/fbbcM6GF/7-support-during-your-trip-1.png" alt="planning">
                            </div>
                            
                            <div class="card-body">
                                <h3>24/7 Support während eurer Reise</h3>
                                <p>wenn was hakt, sind wir sofort für euch da.</p>
                            </div>
                        </div>
                        
                    <div class="card-content">
                        <div class="card-img">
                            <img src="https://i.postimg.cc/8PDr12Wx/our-personal-bachelor-party-planner-1.png" alt="planning">
                            </div>
                            
                            <div class="card-body">
                                <h3>Dein persönlicher JGA-Planer</h3>
                                <p>lokale Tipps, perfekte Timings, keine 08/15-Listen.</p>
                            </div>
                        </div>
                        
                    <div class="card-content">
                        <div class="card-img">
                            <img src="https://i.postimg.cc/QdFNsm6v/Everyone-pays-their-share-online-1.png" alt="planning">
                            </div>
                            
                            <div class="card-body">
                                <h3>Jeder zahlt seinen Anteil selbst online</h3>
                                <p>kein Hinterherrennen, kein Stress mit Geld.</p>
                            </div>
                        </div>
                        
                    <div class="card-content">
                        <div class="card-img">
                            <img src="https://i.postimg.cc/ZYfhR3vD/Proven-reliable-1.png" alt="planning">
                            </div>
                           
                            <div class="card-body">
                                <h3>Bewährt & zuverlässig</h3>
                                <p>tausende JGAs organisiert und top bewertet.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>`

    document.querySelector('.hero').insertAdjacentHTML('afterend', screencontent);
});
waitForElement('.screen-section', function () {

    const clearInterval = ` <section class="screencapture-section">
        <div class="container">
                <div class="heading">
                    <h2>So planst du einen legendären JGA — ganz ohne Gruppenchat-Chaos</h2>
                    <p>Pissup macht's dir easy, ein legendäres Wochenende zu planen — ohne Tabellen, ohne peinliches Hinterherlaufen und ohne „Können wir das nochmal diskutieren?”.</p>
                </div>
                <div class="content">
                    <div class="card-group">
                        <div class="icon">
                            <div class="icon-body">
                            <img src="https://i.postimg.cc/tRvFkBn2/Mask-group.png">
                           </div>
                           
                        <div class="icon-text">
                            <h3>Sag uns kurz, was du dir vorstellst</h3>
                            <span>dauert ca. 5 Minuten</span>
                            <p>Wähle ein Reiseziel und ein paar Ideen, die dir gefallen — 
                                oder schick einfach eine kurze Anfrage mit grobem Plan, 
                                Gruppengröße und Budget.</p>
                                <div class="icon-footer">
                                    <span>Noch keine Verpflichtung.</span> Nur genug, damit wir direkt wissen, wo's hingehen soll,
                                </div>
                                
                                </div>
                              
                    
                    </div>
                    
                        <div class="icon">
                            <div class="icon-body">
                            <img src="https://i.postimg.cc/tRvFkBn2/Mask-group.png">
                            </div>
                            
                        
                        <div class="icon-text">
                            <h3>Wähle, wie du Unterstützung willst</h3>
                            <span>Expertenhilfe per Anruf / WhatsApp / E-Mail</span>
                            <p>Ein echter, lokaler JGA-Planer meldet sich bei dir 
                                so, wie du's willst und hilft dir, einen Plan zu bauen, 
                                der wirklich aufgeht..</p>
                                
                                <div class="icon-footer">
                            Kein Bock auf Telefon? Easy. Wenn du doch willst: alles
                             entspannt durchsprechen  so lange, wie du brauchst.
                                </div>
                                 </div>
                                

                        </div>
                    
                        <div class="icon">
                            <div class="icon-body">
                           <img src="https://i.postimg.cc/tRvFkBn2/Mask-group.png">
                            </div>
                        
                        <div class="icon-text">
                            <h3>Wir bauen einen ersten Entwurf, der dir Zeit und Geld spart</h3>
                           <P>Passende Aktivitäten + clevere Zeiten/Standorte (weniger Fahrerei & Warten) + lokale Deals/Bundles 
                            (geringere Gesamtkosten) + ein realistischer Ablauf für eure Gruppe.</P>
                              
                                <div class="icon-footer">
                                    Dann wird gemeinsam nachgeschärft, bis es sitzt.
                                </div>
                                </div>
                        
                </div>
            </div>
        </div>
    </section>`;

    document.querySelector('.screen-section')
        .insertAdjacentHTML('afterend', clearInterval);

waitForElement('.screencapture-section', function () {
    const nextsection = `
    <section class="accordion-section">
        <div class="container">
            <div class="content">
                <div class="heading">
                    <h2>Häufig gestellte Fragen</h2>
                </div>
                <div class="accordion">
                    <div class="accordion-text">
                        <div class="accordion-header">
                            <h3>Warum sollten wir unseren JGA über Pissup Reisen buchen?</h3>
                       

                        </div>
                        <div class="accordion-collapse">
                            <div class="accordion-body">Eine Reise zu organisieren ist immer eine Herausforderung – Und einen JGA für eine größere (oder auch kleine) Gruppe erst recht! Angebote einholen, Zeit und Programm abstimmen, Geld einsammeln: Stress & Frustration sind hier quasi vorprogrammiert! Unser Service setzt genau hier an: Wie nehmen euch den gesamten Planungsstress ab, passen euer Programm gemäß euren Wünschen (und Preisvorstellungen) an und sind auch vor Ort 24 Stunden 7 Tage die Woche für euch da! Mit uns kann auch der Trauzeuge den JGA genießen!
                              
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="accordion">
                    <div class="accordion-text">
                        <div class="accordion-header">Warum brauchen wir einen Re
                            iseberater?</h3>
                         

                        </div>
                        <div class="accordion-collapse">
                            <div class="accordion-body">Wir planen jeden Tag legendäre Junggesellenabschiede und das bereits seit 2001: Unsere Reiseberater helfen euch bei der Planung eures Programms, der Kostenkalkulation und der Kommunikation mit der Gruppe (falls gewünscht). Wir erstellen euch auch gerne verschiedene Angebote, sodass ihr vergleichen und abstimmen könnt, was euch gefällt.
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="accordion">
                    <div class="accordion-text">
                        <div class="accordion-header">
                            <h3>Können wir unser Programm nachträglich ändern?</h3>
                        

                        </div>
                        <div class="accordion-collapse">
                            <div class="accordion-body">Natürlich! Bis zur Anzahlung der Buchung (50 % des Gesamtpreises) sind alle Änderungen kostenfrei. Und natürlich könnt ihr jederzeit euren Reiseberater kontaktieren und Fragen stellen, ohne dass es euch einen Cent kostet!
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="accordion">
                    <div class="accordion-text">
                        <div class="accordion-header">
                            <h3>Wie sicher ist der Zahlungsvorgang?</h3>
                         

                        </div>
                        <div class="accordion-collapse">
                            <div class="accordion-body">Wir bieten euch unterschiedliche Zahlungsmöglichkeiten über eine sichere Verbindung (per Kreditkarte, Sofortüberweisung, etc.) nach den Datensicherheitsstandards des PCI Security Standards Council an. Sobald ihr den Zahlungsauftrag aufgegeben habt, bekommt ihr eine vorläufige Zahlungsbestätigung und wenn das Geld bei uns eingegangen ist, schicken wir euch eine abschließende Bestätigung, die ihr euch ausdrucken könnt.
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="accordion">
                    <div class="accordion-text">
                        <div class="accordion-header">
                            <h3>Was passiert nachdem wir euch eine Anfrage gesendet habe?</h3>
                        

                        </div>
                        <div class="accordion-collapse">
                            <div class="accordion-body">Euer persönlicher Reiseberater meldet sich innerhalb von 24 Stunden mit einem maßgeschneiderten Angebot zurück.
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>`;
    document.querySelector('.screencapture-section').insertAdjacentHTML('afterend', nextsection);

});
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".homepage .accordion-text");

    accordions.forEach((accordion) => {
        const header = accordion.querySelector(".accordion-header");

        header.addEventListener("click", function () {
            // close all other accordions
            accordions.forEach((item) => {
                if (item !== accordion) {
                    item.classList.remove("show");
                }
            });

            // toggle current accordion
            accordion.classList.toggle("show");
        });
    });
});
    waitForElement('.content h1',function(){
        document.querySelector('.content h1').innerHTML='Plane deinen Prag JGA';
    }); 

    
    waitForElement('.content h1', function () {

    const htmlElement = `
    <div class="trust-pilot-box">
        4.8 / 5
        <div class="stars " data-stars-value="5">
            <span class="star la la-star"></span>
            <span class="star la la-star"></span>
            <span class="star la la-star"></span>
            <span class="star la la-star"></span>
            <span class="star la la-star"></span>
        </div>
        <span> 7188 Bewertungen</span>
        
    </div>`;
  

    // heading ke upar show karne ke liye
    document.querySelector('.content h1 ').insertAdjacentHTML('beforebegin', htmlElement);

});


document.querySelector('h3.font-size-4.margin-bottom').style.display = 'none';

document.querySelector('.font-size-4.margin-top.margin-bottom').textContent =
"Tag 1: Dienstag, März 31, 2026";

const el = document.querySelectorAll('.font-size-4.margin-top.margin-bottom')[1];
el && (el.textContent = "Tag 2: Mittwoch, April 1, 2026");

const html = `
<div class="accordion-button">
    <a href="#" class="accordion-primary">Aktivitäten</a>
    <a href="#" class="accordion-secondary">Unterkunft</a>
</div>
`;

document.querySelector('.trip-data')
    .insertAdjacentHTML('beforebegin', html);



    $(document).ready(function () {
    $('.accordion-primary').addClass('active'); // primary black by default
    $('.row.day').show();                       // primary content show
    $('.accommodation').hide();                 // secondary content hide
});

$('.accordion-primary').click(function (e) {
    e.preventDefault();

    $('.row.day').fadeIn();   // now primary opens row.day
    $('.accommodation').hide();

    $('.accordion-button a').removeClass('active');
    $(this).addClass('active');
});

$('.accordion-secondary').click(function (e) {
    e.preventDefault();

    $('.accommodation').fadeIn();  // now secondary opens accommodation
    $('.row.day').hide();

    $('.accordion-button a').removeClass('active');
    $(this).addClass('active');
});
// col sidebar 


const classList = `
<div class="slidebar">
    <div class="slidebar-content">
        <div class="slidebar-head">
            <h2>Lerne kennen deinen persönlichen JGA-Planer.</h2>
        </div>
        <div class="avatar-image">
            <img src="https://i.postimg.cc/nz9nybLb/Rectangle-26.png" alt="Patrick S.">
        </div>
        <div class="slidebar-text">
            <p>
                Hi! Ich helfe dir dabei, einen richtig legendären JGA zu planen. 
                Und auch während eurer Reise bin ich 24/7 für euch da.<br>
                Ich lebe in Prag | 2.000+ JGAs für Pissup betreut
            </p>
        </div>
        <button class="button-small-dark">
            Sende mir eine Nachricht
        </button>
    </div>
</div>
`;


 waitForElement('.slidebar', function () {
    
document.querySelector('.sidebar').insertAdjacentHTML('beforebegin', classList);
 });
});
