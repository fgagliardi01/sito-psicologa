export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfcfa] text-gray-800">
      {/* HERO */}
      <section className="px-6 md:px-20 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Dott.ssa Federica Gagliardi
            </h1>

            <p className="mt-6 text-lg leading-relaxed">
              Sono una psicologa clinica e accompagno adolescenti e adulti nei momenti di difficoltà emotiva,
              ansia e complessità relazionali. Offro uno spazio accogliente e professionale in cui comprendere
              meglio se stessi, dare senso alle proprie esperienze e costruire un equilibrio più stabile e consapevole.
            </p>

            <p className="mt-4 text-sm text-gray-600">
              Ricevo esclusivamente online.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contatti"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium shadow-sm bg-gray-900 text-white hover:opacity-90"
              >
                Contattami
              </a>

              <a
                href="mailto:gagliardifederica02@gmail.com?subject=Richiesta%20di%20contatto%20-%20Sito%20web"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium border border-gray-200 hover:bg-white"
              >
                Scrivi una mail
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/federica-gagliardi.jpg"
              alt="Dott.ssa Federica Gagliardi"
              className="rounded-2xl shadow-lg object-cover w-[320px] h-[420px] md:w-[380px] md:h-[480px]"
            />
          </div>
        </div>
      </section>

      {/* PERCORSO */}
      <section className="bg-[#f3eefe] px-6 md:px-20 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">Il mio percorso</h2>

          <div className="mt-8 rounded-2xl bg-white shadow-sm p-8 leading-relaxed">
            <ul className="space-y-4">
              <li>
                <span className="font-medium">Laurea Triennale</span> in Scienze e Tecniche di Psicologia Cognitiva
                (Università Magna Grecia di Catanzaro)
              </li>
              <li>
                <span className="font-medium">Laurea Magistrale</span> in Psicologia Clinica (LM-51)
                (Università LUMSA di Roma)
              </li>
              <li>
                <span className="font-medium">Master di II livello</span> in Psicodiagnostica Clinica dell’Età Adolescenziale e Adulta
                (in corso, Università LUMSA)
              </li>
              <li>
                <span className="font-medium">Iscrizione</span> all’Albo degli Psicologi del Lazio n. <span className="font-medium">32609</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* A CHI MI RIVOLGO */}
      <section className="px-6 md:px-20 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">A chi mi rivolgo</h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-[#e6f4f1] p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Ansia e stress</h3>
              <p className="mt-2 text-sm text-gray-700">
                Gestione dell’ansia, periodi di stress, difficoltà emotive e momenti di blocco.
              </p>
            </div>
            <div className="rounded-2xl bg-[#fff2d9] p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Relazioni</h3>
              <p className="mt-2 text-sm text-gray-700">
                Difficoltà relazionali, comunicazione, confini, dinamiche familiari e di coppia.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f9f6ff] p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Adolescenti e adulti</h3>
              <p className="mt-2 text-sm text-gray-700">
                Percorsi di supporto e crescita personale in modo graduale e rispettoso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="bg-[#e6f4f1] px-6 md:px-20 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Contatti</h2>

          <div className="mt-8 space-y-3 text-lg">
            <p>
              <span className="font-medium">Telefono:</span>{" "}
              <a className="underline" href="tel:+393934976217">+39 3934976217</a>
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a className="underline" href="mailto:gagliardifederica02@gmail.com">gagliardifederica02@gmail.com</a>
            </p>
          </div>

          <p className="mt-6 text-xs text-gray-600">
            Cliccando “Scrivi una mail” si aprirà l’app Email per completare l’invio.
          </p>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="px-6 md:px-20 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">Informativa Privacy</h2>

          <div className="mt-8 rounded-2xl bg-white shadow-sm p-8 text-base leading-relaxed space-y-4">
            <p>
              I dati personali forniti tramite email saranno trattati nel rispetto del Regolamento UE 2016/679 (GDPR)
              e utilizzati esclusivamente per rispondere alle richieste di contatto e fornire informazioni sui servizi professionali.
            </p>
            <p>
              Il conferimento dei dati è facoltativo ma necessario per poter essere ricontattati. I dati non saranno ceduti a terzi e saranno
              conservati per il tempo strettamente necessario alla gestione della richiesta.
            </p>
            <p>
              Titolare del trattamento: Dott.ssa Federica Gagliardi – Iscrizione Albo Psicologi Lazio n. 32609 – Email: gagliardifederica02@gmail.com
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dott.ssa Federica Gagliardi – Tutti i diritti riservati
      </footer>
    </div>
  );
}
