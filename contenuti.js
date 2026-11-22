/* ==========================================================
   Sulmona – contenuti della landing page dell'itinerario
   Per cambiare testi, foto o video basta modificare questo oggetto.

   MEDIA: ogni riquadro ha questa forma
     { tipo: "video" | "foto", file: "nome-file.mp4 o .jpg", poster: "immagine.jpg", didascalia: "..." }
   - Se "file" è vuoto compare un segnaposto con la didascalia.
   - Per i video "poster" è l'immagine mostrata finché il video non parte.
   ========================================================== */
const CONTENUTI = {
  /* ---------- Apertura a tutto schermo ---------- */
  apertura: {
    citta: "Sulmona",
    titoloItinerario: "Titolo dell'itinerario",           // ← da sostituire con il titolo della locandina
    sottotitolo: "Un itinerario in 7 tappe nel cuore della Valle Peligna",
    video: {
      tipo: "video",
      file: "",                                           // es. "apertura.mp4"
      poster: "panorama-sulmona.jpg",
      didascalia: "Veduta di Sulmona nella Valle Peligna, con il Morrone sullo sfondo"
    }
  },

  /* ---------- Introduzione all'itinerario ---------- */
  introduzione:
    "Sulmona sorge nel cuore dell'Abruzzo, al centro della Valle Peligna tra il torrente Vella e il fiume Gizio, sovrastata dalle montagne della Maiella e del Morrone. Celebre nel mondo per aver dato i natali al poeta latino Ovidio e per la sua secolare tradizione nella produzione dei confetti, è anche sede vescovile della diocesi di Sulmona-Valva.",

  /* ---------- L'itinerario in breve (da completare) ----------
     Scrivi i dati al posto di "Da inserire". */
  percorso: {
    dati: [
      { etichetta: "Tappe", valore: "7" },
      { etichetta: "Lunghezza", valore: "Da inserire" },
      { etichetta: "Durata", valore: "Da inserire" },
      { etichetta: "Dislivello", valore: "Da inserire" },
      { etichetta: "Difficoltà", valore: "Da inserire" },
      { etichetta: "Fondo", valore: "Da inserire" }
    ],
    partenza: { luogo: "Viale Roosevelt, 3", nota: "" },
    arrivo: { luogo: "Cimitero Monumentale", nota: "", tempo: "", distanza: "" }, // l'arrivo coincide con l'ultima tappa
    mapsUrl: "https://www.google.com/maps/dir/Viale+Roosevelt,+3,+67039+Sulmona+AQ/Statua+di+Ovidio,+Piazza+20+Settembre,+67039+Sulmona+AQ/Cattedrale+di+San+Panfilo,+Viale+Giacomo+Matteotti,+67039+Sulmona+AQ/Complesso+della+Santissima+Annunziata,+Corso+Ovidio,+231,+67039+Sulmona+AQ/Piazza+Garibaldi,+67039+Sulmona+AQ/Uscita+Pedonale+Parcheggio+Coperto+%22Santa+Chiara%22,+Piazza+Giuseppe+Garibaldi,+54,+67039+Sulmona+AQ/Corso+Ovidio,+183,+67039+Sulmona+AQ/Cimitero,+SR487,+1,+67039+Sulmona+AQ/@42.0442478,13.9273916,14.54z/data=!4m52!4m51!1m5!1m1!1s0x1330407d9662c013:0xca50ff0332d1d1f3!2m2!1d13.9220628!2d42.05086!1m5!1m1!1s0x1330407ce600cf33:0xeff0533ba4649be4!2m2!1d13.92421!2d42.0486735!1m5!1m1!1s0x1330408732fe3e7f:0x9e8afeacabeee3af!2m2!1d13.9205357!2d42.0537816!1m5!1m1!1s0x1330407cdb09997f:0x70dc9b48714c9a28!2m2!1d13.9234808!2d42.049282!1m5!1m1!1s0x1330406334e777e7:0x66b0b7778e4832f3!2m2!1d13.9260939!2d42.0479678!1m5!1m1!1s0x13304100695212ef:0xf119497e88f70a77!2m2!1d13.926524!2d42.0477082!1m5!1m1!1s0x1330407cc6fffa3f:0x64213d84da32b34e!2m2!1d13.9249979!2d42.0481114!1m5!1m1!1s0x133041abef70a13f:0x3e2297018dffcd06!2m2!1d13.9434707!2d42.0355781!2m1!10b1!3e2",
    mappa: {
      tipo: "foto",
      file: "",             // es. "mappa.jpg" – mappa disegnata dall'autore
      didascalia: "Mappa del percorso"
    }
  },

  /* ---------- Le tappe dell'itinerario ---------- */
  tappe: [
    {
      nome: "Statua di Ovidio",
      luogo: "Piazza XX Settembre",
      tempo: "Da inserire",        // a piedi dal punto precedente
      distanza: "Da inserire",
      orari: null,                  // link a orari e biglietti (null se non servono)
      testo:
        "Inaugurata nel 1925 su progetto dello scultore Ettore Ferrari, raffigura in bronzo il celebre poeta latino nato a Sulmona, nell'atto pensoso di meditare.",
      media: {
        tipo: "foto",
        file: "statua-ovidio.jpg",
        didascalia: "La statua in bronzo di Ovidio in Piazza XX Settembre"
      }
    },
    {
      nome: "Cattedrale di San Panfilo",
      luogo: "Sede vescovile",
      tempo: "Da inserire",        // a piedi dal punto precedente
      distanza: "Da inserire",
      orari: null,                  // link a orari e biglietti (null se non servono)
      testo:
        "È il principale luogo di culto della città e sede vescovile della diocesi di Sulmona-Valva. Custodisce un prezioso fonte battesimale marmoreo del XVIII secolo.",
      media: {
        tipo: "video",
        file: "",
        poster: "",
        didascalia: "Video: la Cattedrale di San Panfilo e il fonte battesimale marmoreo"
      }
    },
    {
      nome: "Complesso della Santissima Annunziata",
      luogo: "Musei civici",
      tempo: "Da inserire",        // a piedi dal punto precedente
      distanza: "Da inserire",
      orari: { url: "" },                  // link a orari e biglietti (null se non servono)
      testo:
        "Fondato nel 1320 come ospedale per pellegrini, unisce la chiesa barocca al palazzo gotico-rinascimentale, sede dei musei civici, affiancato dal campanile più alto della città.",
      media: {
        tipo: "foto",
        file: "annunziata.jpg",
        didascalia: "La chiesa barocca e il palazzo gotico-rinascimentale della Santissima Annunziata"
      }
    },
    {
      nome: "Piazza Garibaldi",
      luogo: "Già “piazza del Mercato”",
      tempo: "Da inserire",        // a piedi dal punto precedente
      distanza: "Da inserire",
      orari: null,                  // link a orari e biglietti (null se non servono)
      testo:
        "Chiamata “piazza del Mercato” fino al 1880, è la piazza principale di Sulmona, incorniciata dall'acquedotto medievale e teatro delle più importanti manifestazioni cittadine.",
      media: {
        tipo: "foto",
        file: "acquedotto-piazza-garibaldi.jpg",
        didascalia: "Gli archi dell'acquedotto medievale in Piazza Garibaldi"
      }
    },
    {
      nome: "Monastero di Santa Chiara",
      luogo: "Museo Diocesano",
      tempo: "Da inserire",        // a piedi dal punto precedente
      distanza: "Da inserire",
      orari: { url: "" },                  // link a orari e biglietti (null se non servono)
      testo:
        "Risalente al 1269 e legato alla tradizione artistica dei confetti delle monache di clausura, ospita oggi il Museo Diocesano e il Polo Culturale Civico Diocesano.",
      media: {
        tipo: "video",
        file: "",
        poster: "",
        didascalia: "Video: l'ex Monastero di Santa Chiara"
      }
    },
    {
      nome: "Antica Confetteria Del Corso",
      luogo: "Bottega storica",
      tempo: "Da inserire",        // a piedi dal punto precedente
      distanza: "Da inserire",
      orari: { url: "" },                  // link a orari e biglietti (null se non servono)
      testo:
        "Custode di una storia artigianale tramandata da oltre trecento anni a partire dal confettaro Panfilo La Civita, offre esperienze dedicate alla storia e alla lavorazione dei confetti e delle composizioni artistiche.",
      media: {
        tipo: "foto",
        file: "confetti-lavorazione.jpg",
        didascalia: "La lavorazione a mano di un fiore di confetti"
      }
    },
    {
      nome: "Cimitero Monumentale",
      luogo: "Luogo della memoria",
      tempo: "Da inserire",        // a piedi dal punto precedente
      distanza: "Da inserire",
      orari: null,                  // link a orari e biglietti (null se non servono)
      testo:
        "Luogo simbolico della memoria collettiva cittadina, raccoglie monumenti funerari e architetture che raccontano la storia delle famiglie e della comunità sulmonese.",
      media: {
        tipo: "video",
        file: "",
        poster: "",
        didascalia: "Video: monumenti funerari e architetture del Cimitero Monumentale"
      }
    }
  ],

  prosegui: {
    ancheInCitta: [
      "Chiesa di Santa Maria della Tomba",
      "Teatro Comunale Maria Caniglia",
      "Le storiche confetterie"
    ],
    neiDintorni: [
      "Eremo di Sant'Onofrio al Morrone",
      "Badia Morronese",
      "Santuario di Ercole Curino"
    ]
  },

  /* ---------- Info utili (da completare) ----------
     Scrivi i testi al posto di "Da inserire". Le voci vuote non vengono mostrate. */
  infoUtili: {
    accessibilita: {
      titolo: "Itinerario accessibile",
      testo: "Da inserire: informazioni su percorso, pendenze, gradini, bagni e punti di sosta accessibili."
    },
    abbigliamento: {
      titolo: "Abbigliamento",
      voci: ["Da inserire", "Da inserire", "Da inserire"]
    },
    escursione: {
      titolo: "Escursione",
      testo: "Da inserire: indicazioni pratiche sull'escursione."
    },
    portare: ["Da inserire", "Da inserire", "Da inserire"],
    nonPortare: ["Da inserire", "Da inserire"]
  },

  /* ---------- Approfondimenti ---------- */
  confetto: {
    paragrafi: [
      "La tradizione confettiera di Sulmona ha origini secolari. È legata alle monache clarisse, alle quali si devono raffinate composizioni decorative come fiori, spighe e grappoli, e ad antiche dinastie di maestri confettieri: Panfilo La Civita, attestato già nel 1698, e lo stabilimento della famiglia Pelino, documentato dal 1783.",
      "Oggi il confetto sulmonese è un'eccellenza dell'artigianato locale, da ammirare attraverso dimostrazioni pratiche e degustazioni. È il simbolo per eccellenza delle celebrazioni della vita: dai battesimi ai matrimoni, fino a ogni grande ricorrenza."
    ],
    punti: [
      { numero: "1698", testo: "Panfilo La Civita, maestro confettiere" },
      { numero: "1783", testo: "Lo stabilimento della famiglia Pelino" }
    ],
    media: {
      tipo: "foto",
      file: "confetti-fiori.jpg",
      didascalia: "Composizioni artistiche di confetti a forma di fiori"
    }
  },

  storia: [
    { data: "III sec. a.C.", titolo: "Capitale dei Peligni", testo: "Sulmona era la capitale fortificata dei Peligni italici, situata in origine sulle alture del monte Mitra; si spostò nell'attuale posizione in età romana." },
    { data: "81 a.C.", titolo: "Distrutta da Silla", testo: "Con il nome di Sulmo era uno dei tre municipi peligni. Venne distrutta da Silla dopo una ribellione per l'applicazione della Lex Cornelia de Suffragiis." },
    { data: "43 a.C.", titolo: "Nasce Ovidio", testo: "Nel municipio romano di Sulmo nasce il poeta latino Publio Ovidio Nasone." },
    { data: "1233", titolo: "Capitale con Federico II", testo: "In età sveva Federico II la nomina capitale del Giustizierato d'Abruzzo (1233-1273): nascono nuovi borghi fuori dalle antiche mura, insieme a zecca e oreficeria." },
    { data: "1302", titolo: "Le nuove mura", testo: "Viene completato il nuovo perimetro murario settentrionale, con nuove porte: la città assume il caratteristico aspetto fusiforme che conserva ancora oggi." },
    { data: "1443", titolo: "I torrioni aragonesi", testo: "Sotto Alfonso I d'Aragona vengono edificati torrioni angolari con muratura a scarpa. Oggi resta visibile la torre presso Porta Iapasseri." },
    { data: "1610 – 1656", titolo: "I Borghese e la peste", testo: "Dopo il dominio cinquecentesco dei De Lannoy, la città passa con titolo principesco ai Borghese (1610). Nel 1656 una terribile peste e la mancanza di cavalieri portano alla sospensione dell'antica giostra cavalleresca." },
    { data: "1706", titolo: "Il terremoto", testo: "Un disastroso terremoto provoca la caduta di alcune porte cittadine. Le ricostruzioni successive inglobano tratti delle antiche mura nelle abitazioni." },
    { data: "XX secolo", titolo: "Medaglia d'Argento", testo: "Per la lotta partigiana nella Seconda Guerra Mondiale, Sulmona è decorata con la Medaglia d'Argento al Valor Militare." },
    { data: "1995", titolo: "Rinasce la Giostra", testo: "Dopo la sospensione seicentesca, torna la Giostra Cavalleresca di Sulmona." }
  ],

  sapori: {
    intro:
      "Il protagonista indiscusso è il confetto di Sulmona, in molte tipologie, composizioni artistiche e lavorazioni artigianali. Ma la tavola sulmonese ha molto altro da offrire.",
    gruppi: [
      { titolo: "In tavola", voci: ["Maccheroni alla chitarra con sugo d'agnello", "Sagne e fagioli", "Arrosticini"] },
      { titolo: "Dolci della tradizione", voci: ["Torroni artigianali", "Scarponi e ceci ripieni, a Natale", "Fiadoni al pecorino, a Pasqua", "Cassata sulmonese"] },
      { titolo: "Dal territorio", voci: ["Aglio rosso di Sulmona", "Vini DOC della Valle Peligna"] }
    ],
    evidenza:
      "La cassata sulmonese è considerata la regina dei dolci locali, grazie al suo goloso incontro di pan di Spagna, creme e croccante.",
    media: {
      tipo: "foto",
      file: "confetti-composizione.jpg",
      didascalia: "Un fiore di confetti con petali e foglie, composto a mano"
    }
  },

  eventi: [
    { quando: "Settimana Santa", nome: "La Madonna che scappa", testo: "Le tradizioni pasquali culminano con la suggestiva Processione del Venerdì Santo e il celebre rito de La Madonna che scappa in piazza." },
    { quando: "Inizio giugno", nome: "La Cordesca", testo: "La “Giostra” dedicata ai bambini, protagonisti assoluti di sfilate e gare: il futuro della tradizione cavalleresca cittadina." },
    { quando: "Fine luglio – inizio agosto", nome: "Giostra Cavalleresca", testo: "Rinata nel 1995 dopo la sospensione seicentesca, è una spettacolare sfilata storica seguita da un'emozionante gara tra cavalieri." }
  ],

  faq: [
    { domanda: "Dove si trova Sulmona e qual è il suo contesto naturale?", risposta: "Sulmona sorge nel cuore dell'Abruzzo, al centro della Valle Peligna tra il torrente Vella e il fiume Gizio, ed è sovrastata dalle montagne della Maiella e del Morrone. È inoltre sede amministrativa del Parco Nazionale della Maiella, che offre numerose opportunità per l'escursionismo." },
    { domanda: "Perché Sulmona è così famosa nel mondo?", risposta: "Soprattutto per aver dato i natali, nel 43 a.C., al poeta latino Publio Ovidio Nasone e per la sua secolare tradizione nella produzione artigianale dei confetti, legata sia al sapere delle monache clarisse sia alle storiche confetterie locali." },
    { domanda: "Quali altri luoghi meritano una visita?", risposta: "Oltre alle tappe dell'itinerario: la Chiesa di Santa Maria della Tomba e il Teatro Comunale Maria Caniglia. Nei dintorni: la Badia Morronese, l'Eremo di Sant'Onofrio e il Santuario di Ercole Curino." },
    { domanda: "Quali sono gli eventi più importanti dell'anno?", risposta: "Le celebrazioni della Settimana Santa, con la Processione del Venerdì Santo e La Madonna che scappa in piazza. In estate la Giostra Cavalleresca di Sulmona, preceduta a giugno da La Cordesca dedicata ai bambini." },
    { domanda: "Cosa assaggiare oltre ai confetti?", risposta: "Maccheroni alla chitarra con sugo d'agnello, sagne e fagioli e arrosticini, con l'aglio rosso di Sulmona e i vini DOC della Valle Peligna. Tra i dolci: torroni, scarponi, ceci ripieni, fiadoni e la cassata sulmonese." },
    { domanda: "Dove trovo orari e biglietti?", risposta: "Nel percorso, accanto alle tappe che li prevedono, trovi il link a orari e biglietti.", link: true }
  ],

  /* ---------- Nota sul progetto ---------- */
  notaProgetto: {
    testo: "Questa pagina è un progetto didattico realizzato per un esame universitario e non è un sito ufficiale.",
    dettaglio: "",          // es. "Corso di … – Università di …" (facoltativo)
    crediti: "Foto e video: tutti i diritti riservati all'autore."
  }
};

/* ==========================================================
   Costruzione della pagina
   ========================================================== */
(function () {
  // Se un elemento manca, non blocca il resto della pagina
  const $ = (s) => document.querySelector(s) || document.createElement("div");
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const C = CONTENUTI;
  const ridotto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Riquadro media: video, foto o segnaposto */
  function media(m, extra = "") {
    const did = esc(m.didascalia || "");
    if (m.tipo === "video" && m.file) {
      return `<figure class="media ${extra}">
        <video class="auto" muted loop playsinline preload="metadata" ${m.poster ? `poster="${esc(m.poster)}"` : ""} aria-label="${did}">
          <source src="${esc(m.file)}" type="video/mp4">
        </video><figcaption>${did}</figcaption></figure>`;
    }
    if (m.file) {
      return `<figure class="media ${extra}"><img src="${esc(m.file)}" alt="${did}" loading="lazy"><figcaption>${did}</figcaption></figure>`;
    }
    const etichetta = m.tipo === "video" ? "Video" : "Foto";
    return `<figure class="media segnaposto ${m.tipo === "video" ? "is-video" : ""} ${extra}" role="img" aria-label="Segnaposto: ${did}">
      <div class="segnaposto-area"><span class="segnaposto-icona" aria-hidden="true"></span><span class="segnaposto-etichetta">${etichetta}</span></div>
      <figcaption>${did}</figcaption></figure>`;
  }

  /* ---------- Apertura ---------- */
  const ap = C.apertura;
  $("#ap-citta").innerHTML = [...ap.citta].map((l, i) => `<span style="--i:${i}">${esc(l)}</span>`).join("");
  $("#ap-titolo").textContent = ap.titoloItinerario;
  $("#ap-sottotitolo").textContent = ap.sottotitolo;
  document.title = `${ap.citta} – ${ap.titoloItinerario}`;
  const fondo = $("#ap-fondo");
  if (ap.video.file) {
    fondo.innerHTML = `<video autoplay muted loop playsinline ${ap.video.poster ? `poster="${esc(ap.video.poster)}"` : ""} aria-label="${esc(ap.video.didascalia)}"><source src="${esc(ap.video.file)}" type="video/mp4"></video>`;
  } else if (ap.video.poster) {
    fondo.innerHTML = `<img class="kenburns" src="${esc(ap.video.poster)}" alt="${esc(ap.video.didascalia)}">`;
  }

  /* ---------- Introduzione ---------- */
  $("#intro-testo").textContent = C.introduzione;

  /* ---------- L'itinerario in breve ---------- */
  const P = C.percorso;
  const pieno = (x) => x != null && String(x).trim() !== "";
  const da = (x) => /^da inserire/i.test(String(x).trim());
  const val = (x) => `<span class="${da(x) ? "da-inserire" : ""}">${esc(x)}</span>`;
  const tratto = (tempo, dist) => {
    const parti = [tempo, dist].filter(pieno);
    return parti.length ? `<li class="tratto"><span class="tratto-freccia" aria-hidden="true">↓</span>${parti.map(val).join(" · ")}</li>` : "";
  };
  const linkOrari = (o, cls = "") => {
    if (!o) return "";
    return o.url
      ? `<a class="orari ${cls}" href="${esc(o.url)}" target="_blank" rel="noopener">Orari e biglietti ↗</a>`
      : `<span class="orari da-inserire ${cls}">Orari: link da inserire</span>`;
  };
  $("#percorso-dati").innerHTML = P.dati.filter((d) => pieno(d.valore))
    .map((d) => `<div><dt>${esc(d.etichetta)}</dt><dd>${val(d.valore)}</dd></div>`).join("");
  $("#percorso-lista").innerHTML =
    `<li class="estremo"><span class="etichetta-mini">Partenza</span><span class="luogo-estremo">${val(P.partenza.luogo)}</span>${pieno(P.partenza.nota) ? `<span class="nota">${esc(P.partenza.nota)}</span>` : ""}</li>` +
    C.tappe.map((t, i) => tratto(t.tempo, t.distanza) +
      `<li class="fermata ${i === C.tappe.length - 1 && P.arrivo.luogo === t.nome ? "ultima" : ""}">${i === C.tappe.length - 1 && P.arrivo.luogo === t.nome ? `<span class="etichetta-mini arrivo-mini">Arrivo</span>` : ""}<a href="#tappa-${i + 1}"><span class="n">${pad(i + 1)}</span><span class="t">${esc(t.nome)}</span></a>${linkOrari(t.orari)}</li>`).join("") +
    (P.arrivo.luogo === C.tappe[C.tappe.length - 1].nome
      ? "" // l'arrivo coincide con l'ultima tappa: niente riga doppia
      : tratto(P.arrivo.tempo, P.arrivo.distanza) +
        `<li class="estremo"><span class="etichetta-mini">Arrivo</span><span class="luogo-estremo">${val(P.arrivo.luogo)}</span>${pieno(P.arrivo.nota) ? `<span class="nota">${esc(P.arrivo.nota)}</span>` : ""}</li>`);
  document.querySelectorAll(".link-maps").forEach((a) => {
    if (P.mapsUrl) { a.href = P.mapsUrl; }
    else { a.removeAttribute("href"); a.classList.add("disattivo"); a.textContent = "Link Google Maps da inserire"; }
  });
  $("#percorso-mappa").innerHTML = media(P.mappa);

  /* ---------- Tappe ---------- */
  const tot = C.tappe.length;
  $("#tappe").innerHTML = C.tappe
    .map((t, i) => `<article class="capitolo ${i % 2 ? "inverso" : ""}" id="tappa-${i + 1}" data-n="${i + 1}" data-nome="${esc(t.nome)}">
        <div class="capitolo-media rivela-media">${media(t.media)}</div>
        <div class="capitolo-testo rivela">
          <p class="capitolo-num"><span>${pad(i + 1)}</span><span class="di">/ ${pad(tot)}</span></p>
          <p class="etichetta">${esc(t.luogo)}</p>
          <h3>${esc(t.nome)}</h3>
          <p>${esc(t.testo)}</p>
          ${linkOrari(t.orari, "in-capitolo")}
          ${i < tot - 1 ? `<a class="prossima" href="#tappa-${i + 2}">Tappa successiva <span aria-hidden="true">↓</span></a>` : `<a class="prossima" href="#approfondisci">Approfondisci <span aria-hidden="true">↓</span></a>`}
        </div>
      </article>`)
    .join("");
  $("#anche-citta").innerHTML = C.prosegui.ancheInCitta.map((x) => `<li>${esc(x)}</li>`).join("");
  $("#dintorni").innerHTML = C.prosegui.neiDintorni.map((x) => `<li>${esc(x)}</li>`).join("");

  /* ---------- Info utili ---------- */
  const iu = C.infoUtili;
  const voce = (x) => `<li class="${da(x) ? "da-inserire" : ""}">${esc(x)}</li>`;
  $("#info-accessibile").innerHTML = `<p class="etichetta">${esc(iu.accessibilita.titolo)}</p><p class="${da(iu.accessibilita.testo) ? "da-inserire" : ""}">${esc(iu.accessibilita.testo)}</p>`;
  $("#info-abbigliamento").innerHTML = `<p class="etichetta">${esc(iu.abbigliamento.titolo)}</p><ul>${iu.abbigliamento.voci.filter(pieno).map(voce).join("")}</ul>`;
  $("#info-escursione").innerHTML = `<p class="etichetta">${esc(iu.escursione.titolo)}</p><p class="${da(iu.escursione.testo) ? "da-inserire" : ""}">${esc(iu.escursione.testo)}</p>`;
  $("#info-portare").innerHTML = iu.portare.filter(pieno).map(voce).join("");
  $("#info-non-portare").innerHTML = iu.nonPortare.filter(pieno).map(voce).join("");

  /* ---------- Approfondimenti ---------- */
  $("#confetto-testo").innerHTML = C.confetto.paragrafi.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#confetto-punti").innerHTML = C.confetto.punti
    .map((p) => `<li><strong>${esc(p.numero)}</strong><span>${esc(p.testo)}</span></li>`).join("");
  $("#confetto-media").innerHTML = media(C.confetto.media);

  $("#timeline").innerHTML = C.storia
    .map((t) => `<li class="rivela"><span class="data">${esc(t.data)}</span><div><h4>${esc(t.titolo)}</h4><p>${esc(t.testo)}</p></div></li>`).join("");

  $("#sapori-intro").textContent = C.sapori.intro;
  $("#sapori-gruppi").innerHTML = C.sapori.gruppi
    .map((g) => `<div class="gruppo"><p class="etichetta">${esc(g.titolo)}</p><ul>${g.voci.map((v) => `<li>${esc(v)}</li>`).join("")}</ul></div>`).join("");
  $("#sapori-evidenza").textContent = C.sapori.evidenza;
  $("#sapori-media").innerHTML = media(C.sapori.media);

  $("#eventi-elenco").innerHTML = C.eventi
    .map((e) => `<article class="evento rivela"><p class="etichetta">${esc(e.quando)}</p><h4>${esc(e.nome)}</h4><p>${esc(e.testo)}</p></article>`).join("");

  $("#faq-elenco").innerHTML = C.faq
    .map((f) => `<details><summary>${esc(f.domanda)}</summary><div class="risposta"><p>${esc(f.risposta)}${
      f.link ? ` <a href="#percorso">Vai al percorso</a>` : ""}</p></div></details>`).join("");

  $("#piede-titolo").textContent = `${ap.citta} · ${ap.titoloItinerario}`;

  /* ---------- Menu ---------- */
  const btn = $("#menu-btn"), menu = $("#menu");
  $("#menu-tappe").innerHTML = C.tappe.map((t, i) => `<li><a href="#tappa-${i + 1}"><span>${pad(i + 1)}</span>${esc(t.nome)}</a></li>`).join("");
  const chiudi = () => { menu.classList.remove("aperto"); btn.setAttribute("aria-expanded", "false"); document.body.classList.remove("bloccato"); };
  btn.addEventListener("click", () => {
    const aperto = menu.classList.toggle("aperto");
    btn.setAttribute("aria-expanded", aperto);
    document.body.classList.toggle("bloccato", aperto);
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", chiudi));

  /* ---------- Barra: diventa piena dopo l'apertura ---------- */
  const barra = $("#barra");
  const suScroll = () => barra.classList.toggle("piena", window.scrollY > window.innerHeight * 0.6);
  window.addEventListener("scroll", suScroll, { passive: true }); suScroll();

  /* ---------- Comparsa allo scorrimento ---------- */
  const daRivelare = document.querySelectorAll(".rivela, .rivela-media");
  if (ridotto || !("IntersectionObserver" in window)) {
    daRivelare.forEach((el) => el.classList.add("visibile"));
  } else {
    const io = new IntersectionObserver((voci) => voci.forEach((v) => {
      if (v.isIntersecting) { v.target.classList.add("visibile"); io.unobserve(v.target); }
    }), { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    daRivelare.forEach((el) => io.observe(el));
  }

  /* ---------- Video: partono solo quando sono sullo schermo ---------- */
  const video = document.querySelectorAll("video.auto");
  if ("IntersectionObserver" in window) {
    const iv = new IntersectionObserver((voci) => voci.forEach((v) => {
      if (v.isIntersecting && !ridotto) v.target.play().catch(() => {}); else v.target.pause();
    }), { threshold: 0.25 });
    video.forEach((v) => iv.observe(v));
  }

  /* ---------- Indicatore della tappa corrente ---------- */
  const ind = $("#progresso"), indN = $("#progresso-n"), indNome = $("#progresso-nome"), linea = $("#progresso-linea");
  const capitoli = document.querySelectorAll(".capitolo");
  if ("IntersectionObserver" in window) {
    const ic = new IntersectionObserver((voci) => voci.forEach((v) => {
      if (v.isIntersecting) {
        const n = +v.target.dataset.n;
        indN.textContent = `${pad(n)} / ${pad(tot)}`;
        indNome.textContent = v.target.dataset.nome;
        linea.style.transform = `scaleX(${n / tot})`;
      }
    }), { rootMargin: "-45% 0px -45% 0px" });
    capitoli.forEach((c) => ic.observe(c));
  }
  const sezTappe = $("#itinerario");
  const mostraInd = () => {
    const r = sezTappe.getBoundingClientRect();
    ind.classList.toggle("attivo", r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.5);
  };
  window.addEventListener("scroll", mostraInd, { passive: true }); mostraInd();

  const np = C.notaProgetto;
  $("#nota-progetto").innerHTML = [np.testo, np.dettaglio, np.crediti].filter((x) => x && x.trim())
    .map((x) => `<p>${esc(x)}</p>`).join("");
  $("#menu-nota").textContent = np.testo;
  $("#anno").textContent = new Date().getFullYear();
})();
