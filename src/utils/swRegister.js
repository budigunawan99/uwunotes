import * as WorkboxWindow from "workbox-window";

const swRegister = async () => {
  if ("serviceWorker" in navigator) {
    const wb = new WorkboxWindow.Workbox("service-worker.js");
    try {
      await wb.register();
      console.log(`Service worker registered`);
    } catch (error) {
      console.log(`Service worker failed to register`, error);
    }
    return;
  }
  console.log("Service worker not supported in this browser");
};

export default swRegister;
