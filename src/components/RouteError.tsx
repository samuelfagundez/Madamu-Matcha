import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { content } from "../content";

// Cada build de vite-react-ssg genera un nombre de archivo distinto para
// static-loader-data-manifest-<hash>.json (el hash es aleatorio, no
// depende del contenido). Si una pestaña se quedó abierta con una versión
// anterior del sitio (o el navegador sirvió un index.html en caché) justo
// después de un nuevo despliegue, el router intenta pedir ese archivo con
// el hash viejo, que ya no existe: GitHub Pages devuelve su 404.html (que
// es el index.html actual) en su lugar, y al intentar leerlo como JSON
// salta "Unexpected token '<' ... is not valid JSON". Un único recargo
// forzado trae la versión vigente y resuelve el problema sin que el
// visitante llegue a ver el error.
const RELOAD_FLAG = "madamu-matcha:stale-reload";

function isStaleDeployError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return /is not valid JSON|Unexpected token '<'/i.test(message);
}

export default function RouteError() {
  const error = useRouteError();
  const isStale = !isRouteErrorResponse(error) && isStaleDeployError(error);
  // Si ya se intentó un recargo automático en esta pestaña y el error
  // persiste, no es un caché desactualizado puntual — es un fallo real.
  // En ese caso hay que mostrar la UI de respaldo, no quedarse en blanco.
  const alreadyReloaded = sessionStorage.getItem(RELOAD_FLAG) === "1";
  const shouldAutoReload = isStale && !alreadyReloaded;

  useEffect(() => {
    if (!shouldAutoReload) return;
    sessionStorage.setItem(RELOAD_FLAG, "1");
    window.location.reload();
  }, [shouldAutoReload]);

  // Mientras se recarga no hay nada útil que mostrar.
  if (shouldAutoReload) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[var(--color-paper)] px-4 text-center text-[var(--color-ink)]">
      <p className="font-display text-2xl font-bold">{content.name}</p>
      <p className="max-w-sm text-[var(--color-ink)]/70">
        Algo ha fallado al cargar esta página. Prueba a recargarla o vuelve
        al inicio.
      </p>
      <a href={import.meta.env.BASE_URL} className="btn-primary">
        Volver al inicio
      </a>
    </div>
  );
}
