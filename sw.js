/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-32822a0782ac3e930097.js"
  },
  {
    "url": "app.59193f867c89c229b2e5.css"
  },
  {
    "url": "app-784c29085910f1357e7f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9a7e5b2e54c200829c38.js"
  },
  {
    "url": "index.html",
    "revision": "a70b710cc0762f459a8b7bab6d01de83"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0782f2f86b4e1e4ec893a8edcb9da4c8"
  },
  {
    "url": "component---src-pages-index-js.9294ba9e965171e1433e.css"
  },
  {
    "url": "0-7a67b540d0ee7c75e6f1.js"
  },
  {
    "url": "component---src-pages-index-js-3347a9d8fd9dad4aad61.js"
  },
  {
    "url": "static/d/47/path---index-6a9-jA12JXfO0eA3zNerEqMAFU7PBNU.json",
    "revision": "f1bbb942e9b0ba4c69b834a732357d24"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "911d83f510f0b94e8e2c61e5a048326f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/hundred-days-diary/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});