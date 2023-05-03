let LAST_IFRAME: HTMLIFrameElement | null = null;

export function generatePDFFromElementWithId(id: string): Promise<string> {
  const element = document.getElementById(id) as HTMLElement;

  return new Promise((resolve, reject) => {
    //@ts-ignore
    html2pdf()
      .from(element)
      .set({
        html2canvas: { scale: 4 },
        jsPDF: { orientation: "landscape" },
      })
      .outputImg("dataurlstring")
      .then((uri: string) => {
        const byteCharacters = window.atob(uri.split(",")[1]);
        const byteNumbers = new Uint8Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const blob = new Blob([byteNumbers], { type: "image/jpeg" });
        const blobURI = URL.createObjectURL(blob);

        console.log(blobURI, uri);

        resolve(blobURI);
      });
  });
}

export function printFromPDFURI(URI: string) {
  const iframe = document.createElement("iframe");

  if (LAST_IFRAME) LAST_IFRAME.remove();
  LAST_IFRAME = iframe;

  iframe.style.display = "none";

  document.body.appendChild(iframe);

  const iframeWindow = iframe.contentWindow;

  if (!iframeWindow) return;

  iframe.src = URI;

  iframe.onload = function () {
    const img = iframeWindow.document.querySelector("img") as HTMLImageElement;
    img.style.width = "100%";

    iframe.focus();
    iframeWindow.print();
    iframeWindow.close();
  };
}
