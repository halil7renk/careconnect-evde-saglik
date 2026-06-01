const patientProfile = {
  id: "patient-demo-001",
  fullName: "Ayşe Demir",
  nationalId: "12345678910",
  phone: "+90 555 123 45 67",
  address: "Bahçelievler, İstanbul",
  enabizIntegration: {
    status: "ready_for_connection",
    consentGiven: true,
    consentVersion: "demo-2026-05",
    lastSyncAt: null,
    allowedScopes: [
      "allergies",
      "active_medications",
      "chronic_conditions",
      "recent_lab_results",
      "imaging_reports",
      "vaccination_history"
    ],
    providerPayload: null
  },
  wearablesIntegration: {
    status: "not_connected",
    consentGiven: false,
    supportedProviders: [
      "Apple HealthKit",
      "Google Fit / Fitbit",
      "Samsung Health",
      "Huawei Health",
      "Xiaomi / Zepp"
    ],
    allowedMetrics: [
      "heart_rate",
      "spo2",
      "steps",
      "sleep",
      "fall_detection",
      "body_temperature",
      "emergency_alert",
      "location_share",
      "battery_level"
    ],
    lastSyncAt: null,
    latestVitals: {
      heartRate: null,
      spo2: null,
      steps: null,
      sleepHours: null,
      fallDetected: false
    },
    providerPayload: null
  }
};

const services = {
  doctor: {
    icon: "stethoscope",
    label: "Doktor ziyareti",
    tab: "Doktor",
    title: "Evde muayene ve reçete değerlendirme",
    text: "Şikayetinize göre en yakın uygun doktorla güvenli görüşme ve ev ziyareti planlayın.",
    staff: [
      ["Uzm. Dr. Elif Kaya", "Aile hekimliği • 1,8 km • 8 dk", "₺1.250", "8 dk"],
      ["Dr. Murat Şen", "Dahiliye • 2,4 km • 11 dk", "₺1.450", "11 dk"],
      ["Dr. Deniz Aral", "Acil değerlendirme • 3,1 km • 14 dk", "₺1.600", "14 dk"]
    ]
  },
  nurse: {
    icon: "medical_services",
    label: "Hemşire desteği",
    tab: "Hemşire",
    title: "Serum, enjeksiyon ve yara bakımı",
    text: "Hekim istemine uygun hemşirelik işlemleri için lisanslı personel çağırın.",
    staff: [
      ["Hem. Zeynep Akın", "Yara bakımı • 900 m • 4 dk", "₺650", "4 dk"],
      ["Hem. Kerem Yıldız", "Serum takibi • 1,6 km • 7 dk", "₺700", "7 dk"],
      ["Hem. Sude Er", "Enjeksiyon • 2,2 km • 10 dk", "₺550", "10 dk"]
    ]
  },
  physio: {
    icon: "exercise",
    label: "Fizik tedavi",
    tab: "Fizik Tedavi",
    title: "Evde rehabilitasyon seansı",
    text: "Ortopedik, nörolojik veya yaşlılık kaynaklı hareket kısıtları için uzman desteği alın.",
    staff: [
      ["Fzt. Can Öztürk", "Ortopedik rehab. • 1,2 km • 6 dk", "₺900", "6 dk"],
      ["Fzt. İrem Koç", "Nörolojik rehab. • 2,8 km • 13 dk", "₺1.050", "13 dk"],
      ["Fzt. Selin Tura", "Mobilite eğitimi • 3,0 km • 15 dk", "₺850", "15 dk"]
    ]
  },
  postpartum: {
    icon: "pregnant_woman",
    label: "Doğum sonrası bakım",
    tab: "Doğum Sonrası",
    title: "Anne ve bebek için evde destek",
    text: "Lohusalık takibi, emzirme danışmanlığı ve yenidoğan bakımı için güvenilir personel bulun.",
    staff: [
      ["Ebe Nisan Polat", "Yenidoğan • 1,1 km • 5 dk", "₺800", "5 dk"],
      ["Hem. Büşra İnce", "Emzirme desteği • 2,0 km • 9 dk", "₺750", "9 dk"],
      ["Ebe Derya Uslu", "Lohusa takibi • 3,2 km • 16 dk", "₺850", "16 dk"]
    ]
  },
  elder: {
    icon: "elderly",
    label: "Yaşlı bakım",
    tab: "Yaşlı Bakım",
    title: "Günlük bakım ve takip desteği",
    text: "Yaşlı bireyler için ilaç takibi, vital kontrol ve refakat hizmeti planlayın.",
    staff: [
      ["Bakım Uzm. Ece Gül", "Günlük bakım • 1,4 km • 7 dk", "₺700", "7 dk"],
      ["Bakım Uzm. Baran Eren", "Refakat • 2,1 km • 10 dk", "₺780", "10 dk"],
      ["Hem. Nil Avcı", "Vital takip • 2,7 km • 12 dk", "₺820", "12 dk"]
    ]
  }
};

let currentService = "doctor";
let activeView = "home";
let lastBooking = null;
let sosTimer = null;
let sosCount = 5;
const GOOGLE_MAPS_API_KEY = "";

const staffList = document.querySelector("#staffList");
const bookingSheet = document.querySelector("#bookingSheet");
const profilePanel = document.querySelector("#profilePanel");
const authScreen = document.querySelector("#authScreen");
const appScreen = document.querySelector("#appScreen");
const bottomNav = document.querySelector("#bottomNav");
const toast = document.querySelector("#toast");
const homeSections = [
  ".welcome-section",
  ".health-score-card",
  ".quick-actions",
  ".location-panel",
  ".partner-hospitals",
  ".tabs",
  ".service-card",
  ".enabiz-card",
  ".allergy-alert",
  ".section-head",
  ".staff-list"
];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2200);
}

function enterApp(message = "Giriş başarılı. Ana ekran açıldı.") {
  authScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");
  bottomNav.classList.remove("hidden");
  setView("home");
  showToast(message);
}

function setAuthMode(mode) {
  const isRegister = mode === "register";
  document.querySelector("#loginTab").classList.toggle("active", !isRegister);
  document.querySelector("#registerTab").classList.toggle("active", isRegister);
  document.querySelector("#loginForm").classList.toggle("hidden", isRegister);
  document.querySelector("#registerForm").classList.toggle("hidden", !isRegister);
}

function setView(view) {
  activeView = view;
  const isHome = view === "home";

  homeSections.forEach((selector) => {
    document.querySelector(selector).classList.toggle("hidden", !isHome);
  });

  document.querySelector("#healthView").classList.toggle("hidden", view !== "health");
  document.querySelector("#sosView").classList.toggle("hidden", view !== "sos");
  document.querySelector("#mapCard").classList.toggle("hidden", !isHome || !document.querySelector("#mapCard").dataset.active);

  document.querySelectorAll("[data-view-target]").forEach((button) => {
    const shouldActivate = button.dataset.viewTarget === view && button.closest(".bottom-nav");
    button.classList.toggle("active", shouldActivate);
  });

  appScreen.scrollTo({ top: 0, behavior: "smooth" });
}

function activateMap() {
  const mapCard = document.querySelector("#mapCard");
  mapCard.dataset.active = "true";
  mapCard.classList.remove("hidden");

  if (!GOOGLE_MAPS_API_KEY) {
    document.querySelector("#mapMode").textContent = "Demo harita";
    return;
  }

  document.querySelector("#mapMode").textContent = "Google Maps";

  if (window.google?.maps) {
    initGoogleMap();
    return;
  }

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initGoogleMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

window.initGoogleMap = function initGoogleMap() {
  const patientLocation = { lat: 41.0024, lng: 28.8594 };
  const map = new google.maps.Map(document.querySelector("#mapCanvas"), {
    center: patientLocation,
    zoom: 14,
    disableDefaultUI: true
  });

  new google.maps.Marker({
    position: patientLocation,
    map,
    title: "Hasta konumu"
  });

  [
    { title: "Uzm. Dr. Elif Kaya", lat: 41.0082, lng: 28.8521 },
    { title: "Hem. Zeynep Akın", lat: 41.0001, lng: 28.8712 },
    { title: "Fzt. Can Öztürk", lat: 40.9959, lng: 28.8648 }
  ].forEach((person) => {
    new google.maps.Marker({
      position: { lat: person.lat, lng: person.lng },
      map,
      title: person.title
    });
  });
};

function renderService(key) {
  const service = services[key];
  currentService = key;
  document.querySelector("#serviceIcon").textContent = service.icon;
  document.querySelector("#serviceType").textContent = service.label;
  document.querySelector("#serviceTitle").textContent = service.title;
  document.querySelector("#serviceText").textContent = service.text;

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.service === key);
  });

  staffList.innerHTML = service.staff
    .map((person, index) => {
      const initials = person[0]
        .split(" ")
        .filter(Boolean)
        .slice(-2)
        .map((part) => part[0])
        .join("");

      return `
        <article class="staff-card">
          <div class="staff-photo">${initials}</div>
          <div class="staff-main">
            <h3>${person[0]}</h3>
            <span class="staff-meta">${person[1]}</span>
          </div>
          <div class="staff-price">
            <strong>${person[2]}</strong>
            <button data-index="${index}">Çağır</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function openBooking(index) {
  const service = services[currentService];
  const person = service.staff[index];
  lastBooking = {
    name: person[0],
    service: service.tab,
    eta: person[3],
    price: person[2]
  };
  document.querySelector("#sheetName").textContent = person[0];
  document.querySelector("#summaryService").textContent = service.tab;
  document.querySelector("#summaryEta").textContent = person[3];
  document.querySelector("#summaryPrice").textContent = person[2];
  document.querySelector("#payBtn").textContent = "Öde ve çağır";
  document.querySelector("#payBtn").classList.remove("done");
  bookingSheet.classList.add("open");
  bookingSheet.setAttribute("aria-hidden", "false");
}

function openProfilePanel() {
  profilePanel.classList.add("open");
  profilePanel.setAttribute("aria-hidden", "false");
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => renderService(tab.dataset.service));
});

staffList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-index]");
  if (button) openBooking(Number(button.dataset.index));
});

document.querySelector("#closeSheet").addEventListener("click", () => {
  bookingSheet.classList.remove("open");
  bookingSheet.setAttribute("aria-hidden", "true");
});

document.querySelector("#payBtn").addEventListener("click", (event) => {
  event.currentTarget.textContent = "Talep gönderildi";
  event.currentTarget.classList.add("done");
  showToast("Ödeme alındı, personel çağrısı oluşturuldu.");
  setTimeout(() => {
    bookingSheet.classList.remove("open");
    setView("home");
  }, 900);
});

document.querySelector("#enabizToggle").addEventListener("change", (event) => {
  patientProfile.enabizIntegration.consentGiven = event.currentTarget.checked;
  patientProfile.enabizIntegration.status = event.currentTarget.checked
    ? "ready_for_connection"
    : "consent_revoked";
  showToast(event.currentTarget.checked ? "e-Nabız paylaşım izni aktif." : "e-Nabız paylaşım izni kapatıldı.");
});

document.querySelector("#connectWearableBtn").addEventListener("click", (event) => {
  patientProfile.wearablesIntegration.status = "ready_for_pairing";
  patientProfile.wearablesIntegration.consentGiven = true;
  event.currentTarget.textContent = "Hazır";
  document.querySelector("#wearableStatus").textContent = "Eşleşmeye hazır";
  showToast("Akıllı saat/bileklik bağlantı izni hazırlandı.");
});

document.querySelector("#syncWearableBtn").addEventListener("click", () => {
  patientProfile.wearablesIntegration.status = "synced";
  patientProfile.wearablesIntegration.lastSyncAt = new Date().toISOString();
  patientProfile.wearablesIntegration.latestVitals = {
    heartRate: 74,
    spo2: 98,
    steps: 4210,
    sleepHours: 7.4,
    fallDetected: false
  };
  document.querySelector("#wearableStatus").textContent = "Demo senkronize";
  showToast("Akıllı cihaz verileri demo olarak senkronize edildi.");
});

document.querySelector("#openProfile").addEventListener("click", openProfilePanel);
document.querySelector("#openProfileBottom").addEventListener("click", openProfilePanel);

document.querySelector("#closeProfile").addEventListener("click", () => {
  profilePanel.classList.remove("open");
  profilePanel.setAttribute("aria-hidden", "true");
});

document.querySelector("#locateBtn").addEventListener("click", (event) => {
  event.currentTarget.textContent = "Konum aktif";
  activateMap();
  showToast("Konum simülasyonu aktif: en yakın personeller güncellendi.");
});

document.querySelector("#refreshBtn").addEventListener("click", (event) => {
  event.currentTarget.textContent = "Güncellendi";
  showToast("Müsait personel listesi yenilendi.");
  setTimeout(() => {
    event.currentTarget.textContent = "Yenile";
  }, 1300);
});

document.querySelectorAll("[data-view-target]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.viewTarget));
});

document.querySelector("#sosButton").addEventListener("click", () => {
  const button = document.querySelector("#sosButton");
  const text = document.querySelector("#sosButtonText");
  const status = document.querySelector("#sosStatus");

  if (sosTimer) {
    clearInterval(sosTimer);
    sosTimer = null;
    sosCount = 5;
    button.classList.remove("counting");
    text.textContent = "Acil Yardım";
    status.textContent = "Hastane birimi ve 112 sinyali iptal edildi.";
    showToast("Acil yardım geri sayımı iptal edildi.");
    return;
  }

  sosCount = 5;
  button.classList.add("counting");
  text.textContent = `${sosCount}`;
  status.textContent = "Geri sayım başladı: hastane acil birimi ve 112 bilgilendirilecek.";

  sosTimer = setInterval(() => {
    sosCount -= 1;
    text.textContent = sosCount > 0 ? `${sosCount}` : "Gönderildi";

    if (sosCount <= 0) {
      clearInterval(sosTimer);
      sosTimer = null;
      button.classList.remove("counting");
      status.textContent = "Sinyal gönderildi: bağlı hastane acil birimi + 112.";
      showToast("SOS sinyali hastane birimine ve 112'ye gönderildi.");
    }
  }, 1000);
});

renderService(currentService);
setAuthMode("login");

document.querySelector("#loginTab").addEventListener("click", () => setAuthMode("login"));
document.querySelector("#registerTab").addEventListener("click", () => setAuthMode("register"));
document.querySelector("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  enterApp();
});
document.querySelector("#registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  enterApp("Ücretsiz üyelik oluşturuldu. Hoş geldiniz.");
});
document.querySelector("#forgotPasswordBtn").addEventListener("click", () => {
  showToast("Şifre sıfırlama bağlantısı demo olarak gönderildi.");
});
