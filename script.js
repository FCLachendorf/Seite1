// Hier können wir später die Navigation, Slideshow usw. einbauen
console.log("Seite geladen");

const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('navOverlay');

function openSidebar() {
  sidebar.removeAttribute('hidden');
  overlay.removeAttribute('hidden');
  setTimeout(() => sidebar.classList.add('open'), 10);
}

function closeSidebar() {
  sidebar.classList.remove('open');
  setTimeout(() => {
    sidebar.setAttribute('hidden', '');
    overlay.setAttribute('hidden', '');
  }, 300);
}

menuBtn.addEventListener('click', openSidebar);
overlay.addEventListener('click', closeSidebar);

document.getElementById('btn-liveticker')?.addEventListener('click', () => {
  window.location.href = 'pages/liveticker.html';
});
document.getElementById('btn-torschuetze')?.addEventListener('click', () => {
  window.location.href = 'pages/scorer.html';
});
document.getElementById('btn-spielplan')?.addEventListener('click', () => {
  window.location.href = 'pages/schedule.html';
});
document.getElementById('btn-gegner')?.addEventListener('click', ()=>{
  window.location.href = './pages/opponents.html';
});

// ==== Datum & Uhrzeit (Europe/Berlin) ====
const elDTDate = document.getElementById('dtbar-date');
const elDTTime = document.getElementById('dtbar-time');
const TZ_BERLIN = 'Europe/Berlin';

function updateDTBar(){
  const now = new Date();

  const dateStr = now.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: TZ_BERLIN
  }); // => DD.MM.YYYY

  const timeStr = now.toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: TZ_BERLIN
  }); // => HH:MM

  if (elDTDate) elDTDate.textContent = dateStr;
  if (elDTTime) elDTTime.textContent = `${timeStr} UHR`;
}

// sofort setzen & minütlich aktualisieren
updateDTBar();
setInterval(updateDTBar, 1000); // kannst du auf 60000 erhöhen, wenn Sekundengenauigkeit egal ist
