import { importRemote } from "module-federation-import-remote";

export default function Favorites() {
  const element = document.createElement("div");

  const remoteFavoritesPage = async () => {
    try {
      const remoteModule = await importRemote({
        url: process.env.MF_VIDEOS_URL!,
        scope: "mfVideos",
        remoteEntryFileName: "remoteEntry.js",
        module: "./Favorites",
      });

      const module = await import("mfVideos/Favorites");

      // Verifique se o módulo remoto tem um elemento padrão e adicione ao DOM
      if (module.default) {
        element.appendChild(module.default());
      } else {
        console.error("O módulo remoto não contém um elemento padrão.");
      }
    } catch (err) {
      console.error("Erro ao importar o módulo remoto:", err);
      alert("Erro ao importar o módulo remoto: " + err);
    }
  };

  remoteFavoritesPage();

  return element;
}