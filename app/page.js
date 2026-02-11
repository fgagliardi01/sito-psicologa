// ✅ FILE DA USARE IN NEXT.JS (App Router)
// Incolla QUESTO contenuto in: app/page.js
// Metti la tua foto in: public/federica-gagliardi.jpg

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfcfa] text-gray-800">
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Dott.ssa Federica Gagliardi
          </h1>

          <p className="text-lg leading-relaxed mb-6">
            Psicologa clinica.
            <br />
            Accompagno adolescenti e adulti nei momenti di difficoltà emotiva, ansia e complessità relazionali.
            Offro uno spazio accogliente e professionale in cui comprendere meglio se stessi, dare senso alle proprie esperienze e costruire un equilibrio più stabile e consapevole.
            <br />
            Il percorso online permette di accedere a uno spazio di ascolto sicuro e riservato, ovunque tu sia.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#contatti"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium shadow-sm bg-gray-900 text-white hover:opacity-90"
            >
              Contattami
            </a>
            <a
              href="mailto:gagliardifederica02@gmail.com"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium border border-gray-200 hover:bg-white"
            >
              Scrivi una mail
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Ricevo esclusivamente online.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/federica-gagliardi.jpg"
            alt="Dott.ssa Federica Gagliardi"
            className="rounded-2xl shadow-lg object-cover w-[320px] h-[420px] md:w-[380px] md:h-[480px]"
          />
        </div>
      </section>

      {/* PERCORSO */}
      <section className="bg-[#f3eefe] py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Il mio percorso</h2>

          <div className="rounded-2xl shadow-md bg-white p-8 text-lg leading-relaxed">
            <p className="mb-4">
              Ho conseguito la Laurea Triennale in Scienze e Tecniche di Psicologia Cognitiva presso l’Università Magna Graecia di Catanzaro.
              Successivamente ho ottenuto la Laurea Magistrale in Psicologia Clinica (LM-51) presso l’Università LUMSA di Roma.
            </p>
            <p className="mb-4">
              Attualmente sto frequentando un Master di II livello in Psicodiagnostica Clinica dell’Età Adolescenziale e Adulta presso l’Università LUMSA.
            </p>
            <p>
              Sono iscritta all’Albo degli Psicologi del Lazio n. 32609.
            </p>
          </div>
        </div>
      </section>

      {/* IMMAGINI */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Il mio approccio</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80"
            alt="Studio psicologico"
            className="rounded-2xl shadow-md object-cover h-64 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
            alt="Colloquio psicologico"
            className="rounded-2xl shadow-md object-cover h-64 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1200&q=80"
            alt="Benessere mentale"
            className="rounded-2xl shadow-md object-cover h-64 w-full"
          />
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center">
          Immagini: Unsplash (solo a scopo illustrativo).
        </p>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="bg-[#e6f4f1] py-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Contatti</h2>

          <div className="space-y-3 text-lg">
            <p>
              <span className="font-medium">Telefono:</span> +39 3934976217
            </p>
            <p>
              <span className="font-medium">Email:</span> gagliardifederica02@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* MODULO */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Scrivimi un messaggio</h2>

          <div className="rounded-2xl shadow-md bg-white p-8">
            {/*
              ✅ Per renderlo “pronto” senza backend:
              - crea un account gratuito su Formspree.io
              - crea un form e copia qui l’action, es: https://formspree.io/f/xxxxxx
            */}
            <form className="space-y-6" method="POST" action="">
              <input
                name="nome"
                type="text"
                placeholder="Nome e Cognome"
                className="w-full p-4 rounded-2xl border border-gray-200"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-2xl border border-gray-200"
                required
              />
              <textarea
                name="messaggio"
                placeholder="Scrivi qui il tuo messaggio"
                rows={5}
                className="w-full p-4 rounded-2xl border border-gray-200"
                required
              />

              <label className="flex items-start gap-3">
                <input name="consenso" type="checkbox" className="mt-1" required />
                <span className="text-sm text-gray-600">
                  Acconsento al trattamento dei miei dati personali secondo l'informativa privacy.
                </span>
              </label>

              <button
                type="submit"
                className="rounded-2xl px-6 py-4 text-base w-full shadow-sm bg-gray-900 text-white hover:opacity-90"
              >
                Invia messaggio
              </button>
            <a
  href="mailto:gagliardifederica02@gmail.com"
  className="rounded-2xl px-6 py-4 text-base w-full shadow-sm bg-gray-900 text-white hover:opacity-90 text-center block"
>
  Scrivimi una email
</a>
            </p>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="py-16 px-6 md:px-20 bg-[#f9f6ff]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Informativa Privacy</h2>

          <div className="rounded-2xl shadow-md bg-white p-8 text-base leading-relaxed space-y-4">
            <p>
              I dati personali forniti tramite email o modulo di contatto saranno trattati nel rispetto del Regolamento UE 2016/679 (GDPR)
              e utilizzati esclusivamente per rispondere alle richieste di contatto e fornire informazioni sui servizi professionali.
            </p>
            <p>
              Il conferimento dei dati è facoltativo ma necessario per poter essere ricontattati. I dati non saranno ceduti a terzi e saranno
              conservati per il tempo strettamente necessario alla gestione della richiesta.
            </p>
            <p>
              Titolare del trattamento: Dott.ssa Federica Gagliardi – Iscrizione Albo Psicologi Lazio n. 32609 –
              Email: gagliardifederica02@gmail.com
            </p>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dott.ssa Federica Gagliardi – Tutti i diritti riservati
      </footer>
    </div>
  );
}
