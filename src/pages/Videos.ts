import { importRemote } from "module-federation-import-remote";

export default function Videos() {
  const element = document.createElement("div");

  // importa dinamicamente o componente remoto Videos
  const remoteVideosPage = async () => {
    try {
      await importRemote({
        url: process?.env?.MF_VIDEOS_URL!,
        scope: "mfVideos",
        remoteEntryFileName: "dist/remoteEntry.js",
        module: "./mfVideos",
      });

      const remoteModule = await import("mfVideos/mfVideos")
        .then((res) => {
          if (res.default() === null) {
            return { default: () => res };
          }

          element.appendChild(res.default());
          return res;
        })
        .catch((err) => {
          return err;
        });

      return remoteModule.default();
    } catch (err) {
      alert("Erro ao importar modulo remoto: " + err);
    }
  };

  remoteVideosPage();

  return element;
}
