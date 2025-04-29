export default function PoliticaDeConfidentialitate() {
  const data = [
    {
      title: "Politica de dezvăluire a informațiilor",
      desciption:
        "Dezvăluim informații personale dacă ni se impune prin lege sau prin ordin judecătoresc, la cererea unei organizații care asigură respectarea legislației, în măsura permisă de diferitele prevederi legale, pentru a furniza informații ori pentru o investigație pe subiecte legate de siguranța publică.\n\nDacă site-ul sau organizația noastră sunt preluate, vândute ori implicate într-o fuziune sau achiziție, e posibil ca detaliile tale să fie dezvăluite consultanților noștri și potențialilor cumpărători; ele vor fi predate noilor proprietari.\n\nAm încheiat un Acord de prelucrare a datelor cu Google.\nGoogle nu poate utiliza datele pentru alte servicii Google.",
    },
    {
      title: "Securitate",
      desciption:
        "Suntem dedicați securității datelor cu caracter personal. Luăm măsurile de securitate adecvate pentru a limita abuzul și accesul neautorizat la datele cu caracter personal. Astfel, ne asigurăm că numai persoanele necesare au acces la datele tale, că accesul la date este protejat și că măsurile noastre de securitate sunt revizuite în mod regulat.",
    },
    {
      title: "Site-uri ale unor terțe părți",
      desciption:
        "Această declarație de confidențialitate nu se aplică site-urilor unor terțe părți conectate prin linkuri pe site-ul nostru. Nu putem garanta că aceste terțe părți îți gestionează datele cu caracter personal într-un mod corect sau sigur. Îți recomandăm să citești declarațiile de confidențialitate ale acestor site-uri înainte de a le utiliza.",
    },
    {
      title: "Modificări la această Declarație de confidențialitate",
      desciption:
        "Ne rezervăm dreptul de a aduce modificări acestei Declarații de confidențialitate. Este recomandat să consulți în mod regulat această Declarație de confidențialitate, pentru a fi la curent cu orice modificare. În plus, te vom informa activ ori de câte ori este posibil.",
    },
    {
      title: "Accesarea și modificarea datelor tale",
      desciption:
        "Dacă ai întrebări sau dorești să știi exact ce date personale deținem despre tine, te rugăm să ne contactezi. Ne poți contacta folosind informațiile de mai jos. Ai următoarele drepturi:\n\n - Ai dreptul să știi de ce sunt necesare datele tale personale, ce se va întâmpla cu acestea și cât timp vor fi păstrate.\n- Dreptul de acces: Ai dreptul de a accesa datele tale personale pe care le cunoaștem.\n - Dreptul la rectificare: ai dreptul de a completa, corecta, șterge sau bloca datele tale personale ori de câte ori dorești.\n - Dacă ne dai consimțământul pentru a prelucra datele tale, ai dreptul de a revoca consimțământul respectiv și de a solicita ștergerea datelor personale.\n - Dreptul de a îți transfera datele: ai dreptul de a solicita toate datele tale personale de la operator și de a le transfera în întregime către alt operator.\n - Dreptul de a obiecta: te poți opune prelucrării datelor tale. Respectăm acest lucru, cu excepția cazului în care există motive justificate pentru prelucrare.",
    },
    {
      title: "Trimiterea unei reclamații",
      desciption:
        "Dacă ai o nemulțumire despre modul în care gestionăm prelucrarea datelor tale cu caracter personal, ori modul în care gestionăm o reclamație cu privire la prleucrarea acestor date, ai dreptul de a depune o reclamație la Autoritatea pentru Protecția Datelor cu Caracter Personal.",
    },
  ];
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Politica de confidențialitate
          </h1>
          <section class="mb-8">
            <div class="prose text-gray-600">
              <p>
                Această declarație de confidențialitate a fost actualizată
                ultima dată la august 13, 2024 și se aplică cetățenilor și
                rezidenților permanenți din Spațiul Economic European.
              </p>
            </div>
          </section>
          <section class="mb-8">
            <div class="prose text-gray-600">
              <p>
                În această Declarație de confidențialitate, vom explica ce facem
                cu datele pe care le obținem despre tine prin intermediul
                https://webdigit.ro. Își recomandăm să citești cu atenție
                această declarație. În procesarea noastră respectăm cerințele
                legislației privind confidențialitatea. Asta înseamnă, printre
                altele, că:
                <br />
                <br />
                - declarăm în mod clar scopurile pentru care prelucrăm datele cu
                caracter personal. Facem acest lucru prin intermediul acestei
                declarații de confidențialitate;
                <br />
                - ne propunem să ne limităm colectarea de date cu caracter
                personal doar la datele cu caracter personal solicitate în
                scopuri legitime;
                <br />- în situațiile care necesită consimțământul pentru
                prelucrarea datelor personale, mai întâi solicităm
                consimțământul tău explicit pentru prelucrarea datelor tale
                personale; <br />- luăm măsuri de securitate adecvate pentru a
                îți proteja datele cu caracter personal și, de asemenea, le
                solicităm părților care procesează datele cu caracter personal
                în numele nostru; <br />- îți respectăm dreptul de a accesa
                datele tale personale sau de a le corecta sau șterge, la cererea
                ta.
              </p>
            </div>
          </section>

          {data.map((item, index) => (
            <section className="mb-8" key={index}>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {index + 1}. {item.title}
              </h2>
              <div className="prose text-gray-600">
                <p style={{ whiteSpace: "pre-line" }}>{item.desciption}</p>
              </div>
            </section>
          ))}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              7. Informații de contact
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-between">
              <p className="text-gray-600">
                Acest site web este deținut și operat de Webdigit.
                <br /> Întrebări despre Termenii și condițiile?
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-500"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
