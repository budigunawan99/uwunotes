/* eslint-disable no-restricted-globals */

import { precacheAndRoute } from "workbox-precaching";
import CONFIG from "./globals/config";

const assets = self.__WB_MANIFEST;

const additionalAssets = [
  { url: "./" },
  { url: "./uwulogo.ico" },
  { url: "./manifest.json" },
  { url: "./img/nodata.png" },
  { url: "./img/uwulogo.png" },
];

const mergedAssets = [...assets, ...additionalAssets].map((asset) => ({
  revision: CONFIG.VERSION,
  url: asset.url,
}));

precacheAndRoute(mergedAssets);

self.addEventListener("install", () => {
  console.log("Service Worker: Installed");
  self.skipWaiting();
});
