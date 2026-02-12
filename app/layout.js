import "./globals.css";

export const metadata = {
  title: "Dott.ssa Federica Gagliardi | Psicologa clinica online",
  description:
    "Psicologa clinica online. Supporto per adolescenti e adulti: ansia, difficoltà emotive e relazionali. Contatti: email e telefono.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
