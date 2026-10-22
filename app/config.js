// Launcher configuration. Edit this file, then run webos-launcher/install.sh.
// App ids: run `python3 sync-apps.py --list` (or look in app/apps.js after a sync).
window.CONFIG = {
  // Only these apps are shown, in exactly this order: the first `columns` of them fill the dock,
  // the rest the grid below. Remove this line to show every installed app (sorted by name).
  onlyApps: [
    'youtube.leanback.v4', 'netflix', 'com.wbd.stream', 'com.disney.disneyplus-prod',
    'amazon', 'com.telia.tv4', 'com.crunchyroll.webapp', 'se.svt.play.hbbtv.lg',
    'viaplay-lg', 'com.skyshowtime.tv'
  ],

  // Apps pinned to the dock row at the bottom, in this order. Missing apps are skipped.
  dockApps: ['youtube.leanback.v4', 'netflix', 'com.wbd.stream', 'com.disney.disneyplus-prod'],

  // Apps never shown as tiles (inputs and Live TV are already in the Inputs menu).
  hiddenApps: [
    'com.gathin.tvhome',
    'com.webos.app.livetv',
    'com.webos.app.hdmi1', 'com.webos.app.hdmi2', 'com.webos.app.hdmi3', 'com.webos.app.hdmi4',
    'com.webos.app.lgchannels',   // LG Channels
    'shortcutcopilot'             // Copilot
  ],

  // The Live TV app, offered at the end of the Inputs menu. Leave empty to omit.
  liveTvApp: 'com.webos.app.livetv',

  // Tiles per row in the grid; the dock always has this many slots.
  columns: 4,

  // Background photos (see backgrounds/CREDITS.md), crossfaded every `backgroundSeconds`.
  backgrounds: [
    'backgrounds/bg01.jpg', 'backgrounds/bg02.jpg', 'backgrounds/bg03.jpg', 'backgrounds/bg04.jpg',
    'backgrounds/bg05.jpg', 'backgrounds/bg06.jpg', 'backgrounds/bg07.jpg', 'backgrounds/bg08.jpg',
    'backgrounds/bg09.jpg', 'backgrounds/bg10.jpg', 'backgrounds/bg11.jpg'
  ],
  backgroundSeconds: 45,

  // Outdoor temperature next to the clock, from Open-Meteo (free, no key): Spånga, Stockholm.
  weather: { latitude: 59.38, longitude: 17.90, refreshMinutes: 15 }
};
