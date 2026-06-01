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

const staffProfiles = {
  doctor: [
    {
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4.9,
      brief: "12 yıl deneyimli aile hekimi. Evde muayene, yaşlı hasta takibi ve reçete değerlendirmesinde uzman.",
      lat: 41.0082,
      lng: 28.8521,
      mapX: 30,
      mapY: 35
    },
    {
      photo: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4.7,
      brief: "Dahiliye alanında 15 yıl deneyim. Kronik hastalık ve ilaç düzeni kontrolünde güçlü klinik geçmiş.",
      lat: 41.0048,
      lng: 28.8724,
      mapX: 66,
      mapY: 42
    },
    {
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4.8,
      brief: "Acil değerlendirme ve evde ilk klinik kontrol konusunda deneyimli pratisyen hekim.",
      lat: 40.9967,
      lng: 28.8623,
      mapX: 58,
      mapY: 70
    }
  ],
  nurse: [
    {
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4.9,
      brief: "10 yıl klinik hemşireliği. Yara bakımı, pansuman ve evde serum uygulamalarında yüksek memnuniyet.",
      lat: 41.0032,
      lng: 28.8508,
      mapX: 28,
      mapY: 48
    },
    {
      photo: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 4.6,
      brief: "Yoğun bakım geçmişli hemşire. Serum takibi, vital kontrol ve enjeksiyon uygulamalarında deneyimli.",
      lat: 41.0104,
      lng: 28.8669,
      mapX: 64,
      mapY: 32
    },
    {
      photo: "https://randomuser.me/api/portraits/women/23.jpg",
      rating: 4.8,
      brief: "Evde enjeksiyon ve hasta eğitimi konusunda 7 yıl deneyimli lisanslı hemşire.",
      lat: 40.9988,
      lng: 28.8746,
      mapX: 72,
      mapY: 66
    }
  ],
  physio: [
    {
      photo: "https://randomuser.me/api/portraits/men/64.jpg",
      rating: 4.8,
      brief: "Ortopedik rehabilitasyonda 9 yıl deneyim. Diz, kalça ve omuz ameliyatı sonrası ev programları hazırlar.",
      lat: 41.0059,
      lng: 28.8537,
      mapX: 32,
      mapY: 40
    },
    {
      photo: "https://randomuser.me/api/portraits/women/55.jpg",
      rating: 4.9,
      brief: "Nörolojik rehabilitasyon ve denge egzersizleri alanında uzman fizyoterapist.",
      lat: 41.0007,
      lng: 28.8708,
      mapX: 62,
      mapY: 56
    },
    {
      photo: "https://randomuser.me/api/portraits/women/61.jpg",
      rating: 4.7,
      brief: "Yaşlı bireylerde mobilite, kuvvetlendirme ve düşme önleme egzersizlerinde deneyimli.",
      lat: 40.9955,
      lng: 28.8605,
      mapX: 48,
      mapY: 74
    }
  ],
  postpartum: [
    {
      photo: "https://randomuser.me/api/portraits/women/36.jpg",
      rating: 4.9,
      brief: "Yenidoğan bakımı ve lohusa takibinde 11 yıl deneyimli ebe.",
      lat: 41.0071,
      lng: 28.8589,
      mapX: 42,
      mapY: 34
    },
    {
      photo: "https://randomuser.me/api/portraits/women/48.jpg",
      rating: 4.8,
      brief: "Emzirme danışmanlığı ve anne-bebek uyum desteği konusunda uzman hemşire.",
      lat: 41.0014,
      lng: 28.8741,
      mapX: 70,
      mapY: 52
    },
    {
      photo: "https://randomuser.me/api/portraits/women/70.jpg",
      rating: 4.7,
      brief: "Lohusa psikoeğitimi, bebek banyosu ve günlük bakım eğitimlerinde deneyimli ebe.",
      lat: 40.9976,
      lng: 28.8544,
      mapX: 34,
      mapY: 68
    }
  ],
  elder: [
    {
      photo: "https://randomuser.me/api/portraits/women/29.jpg",
      rating: 4.8,
      brief: "Yaşlı bakımında 8 yıl deneyim. Günlük bakım, beslenme takibi ve güvenli transfer desteği sağlar.",
      lat: 41.0065,
      lng: 28.8498,
      mapX: 26,
      mapY: 38
    },
    {
      photo: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 4.6,
      brief: "Refakat ve ev içi güvenlik takibi alanında tecrübeli bakım uzmanı.",
      lat: 41.0028,
      lng: 28.8688,
      mapX: 61,
      mapY: 45
    },
    {
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4.9,
      brief: "Vital takip, ilaç hatırlatma ve yaşlı hasta aile bilgilendirmesinde deneyimli hemşire.",
      lat: 40.9961,
      lng: 28.8752,
      mapX: 73,
      mapY: 71
    }
  ]
};

let currentService = "doctor";
let activeView = "home";
let lastBooking = null;
let sosTimer = null;
let sosCount = 5;
let locationActivated = false;
let selectedMapStaffIndex = null;
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

function getStaffProfile(serviceKey, index) {
  const base = services[serviceKey].staff[index];
  const details = staffProfiles[serviceKey][index];

  return {
    name: base[0],
    meta: base[1],
    price: base[2],
    eta: base[3],
    ...details
  };
}

function renderStars(rating) {
  const rounded = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, index) => (index < rounded ? "★" : "☆")).join("");
  return `${stars} ${rating.toFixed(1)}`;
}

function openMapProfile(index) {
  const person = getStaffProfile(currentService, index);
  selectedMapStaffIndex = index;
  document.querySelector("#mapProfilePhoto").src = person.photo;
  document.querySelector("#mapProfilePhoto").alt = person.name;
  document.querySelector("#mapProfileName").textContent = person.name;
  document.querySelector("#mapProfileRating").textContent = renderStars(person.rating);
  document.querySelector("#mapProfileBrief").textContent = person.brief;
  document.querySelector("#mapProfile").classList.remove("hidden");
}

function renderDemoMapMarkers() {
  const mapCanvas = document.querySelector("#mapCanvas");
  mapCanvas.innerHTML = `
    <div class="map-grid"></div>
    <button class="map-pin patient" style="left: 48%; top: 52%;" aria-label="Hasta konumu">Siz</button>
  `;

  services[currentService].staff.forEach((_, index) => {
    const person = getStaffProfile(currentService, index);
    const button = document.createElement("button");
    button.className = "map-pin staff";
    button.style.left = `${person.mapX}%`;
    button.style.top = `${person.mapY}%`;
    button.setAttribute("aria-label", `${person.name} harita konumu`);
    button.dataset.index = index;
    button.innerHTML = `<img src="${person.photo}" alt="${person.name}" />`;
    button.addEventListener("click", () => openMapProfile(index));
    mapCanvas.appendChild(button);
  });
}

function activateMap() {
  const mapCard = document.querySelector("#mapCard");
  locationActivated = true;
  mapCard.dataset.active = "true";
  mapCard.classList.remove("hidden");
  renderService(currentService);
  renderDemoMapMarkers();

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

  services[currentService].staff.forEach((_, index) => {
    const person = getStaffProfile(currentService, index);
    const marker = new google.maps.Marker({
      position: { lat: person.lat, lng: person.lng },
      map,
      title: person.name,
      icon: {
        url: person.photo,
        scaledSize: new google.maps.Size(46, 46)
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="max-width:220px;font-family:Arial,sans-serif">
          <strong>${person.name}</strong>
          <div style="color:#c48a00;margin:4px 0">${renderStars(person.rating)}</div>
          <p style="margin:0;color:#424751">${person.brief}</p>
        </div>
      `
    });

    marker.addListener("click", () => {
      openMapProfile(index);
      infoWindow.open(map, marker);
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
  document.querySelector("#mapProfile").classList.add("hidden");
  selectedMapStaffIndex = null;

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.service === key);
  });

  if (locationActivated) {
    document.querySelector("#staffSectionTitle").textContent = "En yakın uygun personel";
  } else {
    document.querySelector("#staffSectionTitle").textContent = "Konumu açınca uygun personeller görünür";
    staffList.innerHTML = `<div class="staff-placeholder">Hasta konumu açılmadan sağlık personeli listesi gösterilmez.</div>`;
    return;
  }

  staffList.innerHTML = service.staff
    .map((_, index) => {
      const person = getStaffProfile(currentService, index);

      return `
        <article class="staff-card">
          <div class="staff-photo"><img src="${person.photo}" alt="${person.name}" /></div>
          <div class="staff-main">
            <h3>${person.name}</h3>
            <span class="staff-meta">${person.brief}</span>
            <div class="rating-row staff-rating">${renderStars(person.rating)}</div>
          </div>
          <div class="staff-price">
            <strong>${person.price}</strong>
            <button data-index="${index}">Çağır</button>
          </div>
        </article>
      `;
    })
    .join("");

  if (document.querySelector("#mapCard").dataset.active) {
    renderDemoMapMarkers();
    if (GOOGLE_MAPS_API_KEY && window.google?.maps) initGoogleMap();
  }
}

function openBooking(index) {
  const service = services[currentService];
  const person = getStaffProfile(currentService, index);
  lastBooking = {
    name: person.name,
    service: service.tab,
    eta: person.eta,
    price: person.price
  };
  document.querySelector("#sheetName").textContent = person.name;
  document.querySelector("#summaryService").textContent = service.tab;
  document.querySelector("#summaryEta").textContent = person.eta;
  document.querySelector("#summaryPrice").textContent = person.price;
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
  if (locationActivated) {
    renderService(currentService);
    showToast("Müsait personel listesi ve harita marker'ları yenilendi.");
  } else {
    showToast("Önce konum izni açılmalı.");
  }
  setTimeout(() => {
    event.currentTarget.textContent = "Yenile";
  }, 1300);
});

document.querySelector("#mapProfileBook").addEventListener("click", () => {
  if (selectedMapStaffIndex === null) return;
  openBooking(selectedMapStaffIndex);
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
