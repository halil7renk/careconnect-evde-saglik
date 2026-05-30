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

- Alt menüden Ana Sayfa, Ziyaretler, SOS ve Sağlık ekranları arasında geçiş yapılabilir.
- Hizmet kategorileri değiştirilebilir ve en yakın personel listesi canlı güncellenir.
- Personel kartındaki Çağır düğmesi ödeme panelini açar.
- Öde ve çağır işleminden sonra randevu Ziyaretler ekranına düşer.
- e-Nabız anahtarı hasta paylaşım iznini simülasyon verisinde açıp kapatır.
- SOS ekranında Acil Yardım düğmesi 5 saniyelik geri sayım başlatır; tekrar dokunulursa iptal eder.
- Profil ekranında üyelik, alerji taraması ve hasta kayıt alanları düzenlenebilir.

## APK'ye dönüştürme yolu

Bu prototip bir PWA olarak hazırlanmıştır. Sonraki adımda aynı arayüz Capacitor veya React Native içine alınarak Android APK çıktısı üretilebilir. Gerçek yayın için ödeme sağlayıcısı, konum izni, kullanıcı girişi, hastane/e-Nabız entegrasyonu ve KVKK onay akışları sunucu tarafıyla bağlanmalıdır.

## e-Nabız entegrasyon hazırlığı

`app.js` içinde `patientProfile.enabizIntegration` alanı eklendi. Bu alan ileride gerçek servis bağlantısı geldiğinde bağlantı durumu, hasta onayı, izin verilen veri kapsamları, son senkronizasyon zamanı ve servis cevabı için kullanılabilir.
