/* eslint-disable no-restricted-globals */

import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import CONFIG from "./globals/config";

const assets = self.__WB_MANIFEST;

const additionalAssets = [
  { url: "./manifest.json" },
  { url: "./img/nodata.png" },
];

const mergedAssets = [...assets, ...additionalAssets].map((asset) => ({
  revision: CONFIG.VERSION,
  url: asset.url,
}));

precacheAndRoute(mergedAssets, {
  // Ignore all URL parameters.
  ignoreURLParametersMatching: [/.*/],
});

registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|ico|webp)$/,
  new CacheFirst({
    cacheName: "runtime-images",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

self.addEventListener("install", () => {
  console.log("Service Worker: Installed");
  self.skipWaiting();
});
