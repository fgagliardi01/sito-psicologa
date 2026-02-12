export default function Home() {
  return (
    <div>
      <header>
        <div className="container nav">
          <div className="brand">Dott.ssa Federica Gagliardi</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <a href="#percorso">Percorso</a>
            <a href="#approccio">Approccio</a>
            <a href="#contatti">Contatti</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div>
            <h1>Psicologa clinica online</h1>

            <p className="sub">
              Accompagno adolescenti e adulti nei momenti di difficoltà emotiva,
              ansia e complessità relazionali. Uno spazio accogliente e
              professionale per comprendere meglio se stessi e costruire un
              equilibrio più stabile e consapevole.
            </p>

            <div className="badge">Ricevo esclusivamente online</div>

            <div className="actions">
              <a className="btn primary" href="#contatti">
                Contattami
              </a>
              <a
                className="btn"
                href="mailto:gagliardifederica02@gmail.com?subject=Richiesta%20di%20contatto%20-%20Sito%20web"
              >
                Scrivi una mail
              </a>
            </div>

            <p className="small" style={{ marginTop: 10 }}>
              Cliccando “Scrivi una mail” si aprirà l’app Email per completare
              l’invio.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="photo"
              src="/federica-gagliardi.jpg"
              alt="Dott.ssa Federica Gagliardi"
            />
          </div>
        </section>
      </main>

      <section id="percorso" className="section p1">
        <div className="container">
          <h2 className="title">Il mio percorso</h2>
          <div className="card">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>
                Laurea Triennale in Scienze e Tecniche di Psicologia Cognitiva –
                Università Magna Grecia di Catanzaro
              </li>
              <li>
                Laurea Magistrale in Psicologia Clinica (LM-51) – Università
                LUMSA di Roma
              </li>
              <li>
                Master di II livello in Psicodiagnostica Clinica dell’Età
                Adolescenziale e Adulta (in corso) – Università LUMSA
              </li>
              <li>Iscritta all’Albo degli Psicologi del Lazio n. 32609</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="approccio" className="section">
        <div className="container">
          <h2 className="title">A chi mi rivolgo</h2>

          <div className="grid3">
            <div className="mini p2">
              <h3>Ansia e stress</h3>
              <p>Gestione dell’ansia, stress e difficoltà emotive.</p>
            </div>
            <div className="mini p3">
              <h3>Relazioni</h3>
              <p>Dinamiche relazionali, comunicazione, confini.</p>
            </div>
            <div className="mini">
              <h3>Adolescenti e adulti</h3>
              <p>Percorsi di supporto e crescita personale.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contatti" className="section p2">
        <div className="container">
          <h2 className="title">Contatti</h2>

          <div className="card">
            <div className="kv">
              <div>
                <strong>Telefono:</strong>{" "}
                <a href="tel:+393934976217">+39 3934976217</a>
              </div>
              <div>
                <strong>Email:</strong>{" "}
                <a href="mailto:gagliardifederica02@gmail.com">
                  gagliardifederica02@gmail.com
                </a>
              </div>
            </div>

            <p className="small" style={{ marginTop: 14 }}>
              Se preferisci, puoi scrivermi direttamente cliccando “Scrivi una
              mail” (si aprirà l’app Email).
            </p>
          </div>
        </div>
      </section>

      <section id="privacy" className="section">
        <div className="container">
          <h2 className="title">Informativa privacy</h2>

          <div className="card">
            <p style={{ marginTop: 0 }}>
              I dati personali forniti tramite email saranno trattati nel
              rispetto del Regolamento UE 2016/679 (GDPR) e utilizzati
              esclusivamente per rispondere alle richieste di contatto e fornire
              informazioni sui servizi professionali.
            </p>
            <p>
              Il conferimento dei dati è facoltativo ma necessario per poter
              essere ricontattati. I dati non saranno ceduti a terzi e saranno
              conservati per il tempo strettamente necessario alla gestione
              della richiesta.
            </p>
            <p style={{ marginBottom: 0 }}>
              Titolare del trattamento: Dott.ssa Federica Gagliardi – Iscrizione
              Albo Psicologi Lazio n. 32609 – Email:
              gagliardifederica02@gmail.com
            </p>
          </div>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Dott.ssa Federica Gagliardi</footer>
    </div>
  );
}
