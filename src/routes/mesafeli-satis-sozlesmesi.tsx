import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site";

export const Route = createFileRoute("/mesafeli-satis-sozlesmesi")({
  component: MesafeliPage,
  head: () => ({
    meta: [
      { title: "Mesafeli Satış Sözleşmesi — Timoria" },
      {
        name: "description",
        content: "Timoria üzerinden verilen siparişlere ilişkin mesafeli satış sözleşmesi koşulları.",
      },
      { property: "og:title", content: "Mesafeli Satış Sözleşmesi — Timoria" },
      { property: "og:description", content: "Sipariş, ödeme ve teslimat koşullarına ilişkin sözleşme metni." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/mesafeli-satis-sozlesmesi" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mesafeli-satis-sozlesmesi" }],
  }),
});

function MesafeliPage() {
  return (
    <LegalPage eyebrow="Yasal" title="Mesafeli Satış Sözleşmesi">
      <h2>1. Taraflar</h2>
      <p>
        İşbu sözleşme, satıcı Timoria ile web sitesi üzerinden sipariş veren alıcı arasında
        elektronik ortamda kurulmuştur.
      </p>
      <h2>2. Sözleşme Konusu</h2>
      <p>
        Alıcının elektronik ortamda sipariş verdiği kişiye özel gravür ürünlerinin satışı ve
        teslimine ilişkin hak ve yükümlülüklerin belirlenmesidir.
      </p>
      <h2>3. Ödeme</h2>
      <p>
        Ödemeler 3D Secure destekli güvenli altyapı üzerinden alınır. Kart bilgileri Timoria
        tarafından saklanmaz.
      </p>
      <h2>4. Teslimat</h2>
      <p>
        Ürünler tasarım onayının ardından 2-4 iş günü içinde üretilir ve Türkiye geneline sigortalı
        kargo ile gönderilir. Kargo süresi bölgeye göre 1-3 iş günüdür.
      </p>
      <h2>5. Cayma Hakkı</h2>
      <p>
        Kişiye özel olarak üretilen ürünlerde mevzuat gereği cayma hakkı bulunmamaktadır. Ayıplı
        veya hasarlı ürünlerde iade politikamız uygulanır.
      </p>
      <h2>6. Uyuşmazlıklar</h2>
      <p>
        Uyuşmazlıklarda Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.
      </p>
    </LegalPage>
  );
}
