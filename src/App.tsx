import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  // Si esta ruta renderiza con normalidad, se limpia la bandera de
  // "recarga por versión desactualizada" (ver RouteError.tsx) para que un
  // futuro despliegue nuevo pueda volver a auto-recuperarse una vez más.
  useEffect(() => {
    sessionStorage.removeItem("madamu-matcha:stale-reload");
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
