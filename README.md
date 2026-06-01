# Evde Sağlık Mobil Uygulama Prototipi

Bu klasörde, evde sağlık hizmeti veren mobil APK fikri için çalışan bir arayüz prototipi bulunur.

## İçerik

- Ücretsiz üyelik ve kişisel bilgi paneli
- Kayıt sırasında geniş kapsamlı alerji taraması
- Mevcut konuma göre en yakın sağlık personeli listesi
- Doktor, hemşire, fizik tedavi uzmanı, doğum sonrası bakım ve yaşlı bakım kategorileri
- e-Nabız izin anahtarı
- İleride gerçek e-Nabız bağlantısına bağlanabilecek veri izin altyapısı
- Online ödeme paneli
- Mobil ekrana uygun banka uygulaması tarzında sade arayüz
- CareConnect / Google Stitch referansına uyumlu Public Sans, Material Symbols, açık mavi yüzeyler ve lacivert birincil renk sistemi

## Açma

`index.html` dosyasını tarayıcıda açmanız yeterlidir.

## Aktif simülasyon

- Uygulama ilk açıldığında üye girişi, şifremi unuttum ve yeni üyelik ekranı gösterilir.
- Giriş veya yeni üyelik tamamlandıktan sonra ana uygulama ekranı açılır.
- Alt menüden Ana Sayfa, SOS, Sağlık ve Profil ekranları arasında geçiş yapılabilir.
- Hizmet kategorileri değiştirilebilir; sağlık personeli listesi konum açılana kadar gizli kalır.
- Konum aktif edildiğinde Google Maps API için hazır harita alanı açılır; API anahtarı yoksa fotoğraflı demo harita görünür.
- Harita marker'ları sağlık personeli fotoğrafıyla işaretlenir; marker seçilince yıldız puanı ve kısa tecrübe özeti açılır.
- Her sağlık personeli için puan, ücret, ulaşım süresi, fotoğraf, brief ve koordinat alanları hazırdır.
- Demo anlaşmalı hastane örnekleri ana ekranda listelenir.
- Personel kartındaki Çağır düğmesi ödeme panelini açar.
- Öde ve çağır işleminden sonra personel çağrısı oluşturulur.
- e-Nabız anahtarı hasta paylaşım iznini simülasyon verisinde açıp kapatır.
- Akıllı saat/bileklik altyapısı nabız, SpO2, adım, uyku, düşme algılama, acil uyarı ve konum paylaşımı metrikleri için hazırdır.
- SOS ekranında Acil Yardım düğmesi 5 saniyelik geri sayım başlatır; sinyal bağlı hastane acil birimine ve 112'ye gönderilecek şekilde simüle edilir.
- Profil ekranında üyelik, alerji taraması ve hasta kayıt alanları düzenlenebilir.

## APK'ye dönüştürme yolu

Bu prototip bir PWA olarak hazırlanmıştır. Sonraki adımda aynı arayüz Capacitor veya React Native içine alınarak Android APK çıktısı üretilebilir. Gerçek yayın için ödeme sağlayıcısı, konum izni, kullanıcı girişi, hastane/e-Nabız entegrasyonu ve KVKK onay akışları sunucu tarafıyla bağlanmalıdır.

## e-Nabız entegrasyon hazırlığı

`app.js` içinde `patientProfile.enabizIntegration` alanı eklendi. Bu alan ileride gerçek servis bağlantısı geldiğinde bağlantı durumu, hasta onayı, izin verilen veri kapsamları, son senkronizasyon zamanı ve servis cevabı için kullanılabilir.

## Akıllı saat ve bileklik entegrasyon hazırlığı

`app.js` içinde `patientProfile.wearablesIntegration` alanı eklendi. Bu alan Apple HealthKit, Google Fit/Fitbit, Samsung Health, Huawei Health ve Xiaomi/Zepp gibi sağlayıcılar için bağlantı durumu, hasta onayı, izin verilen metrikler, son senkronizasyon zamanı ve servis cevabı saklamak üzere hazırlandı.

## Node ile çalıştırma

Bu proje ek paket gerektirmez. `module not found` hatası almamak için proje klasöründe şu komutları kullanın:

```powershell
npm start
```

Tarayıcıda açılacak adres:

```text
http://localhost:3000
```

Kod kontrolü:

```powershell
npm run check
```
