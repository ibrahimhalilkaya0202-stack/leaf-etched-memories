import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site";

export const Route = createFileRoute("/gizlilik-politikasi")({
  component: GizlilikPage,
  head: () => ({
    meta: [
      { title: "Gizlilik Politikası — Timoria" },
      {
        name: "description",
        content: "Timoria olarak kişisel verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklıyoruz.",
      },
      { property: "og:title", content: "Gizlilik Politikası — Timoria" },
      { property: "og:description", content: "Kişisel verilerin işlenmesi ve korunması hakkında bilgilendirme." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/gizlilik-politikasi" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gizlilik-politikasi" }],
  }),
});

function GizlilikPage() {
  return (
    <LegalPage eyebrow="Yasal" title="Gizlilik Politikası">
      <p>
        Timoria olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu politika, web sitemiz
        üzerinden paylaştığınız bilgilerin hangi amaçlarla işlendiğini açıklar.
      </p>
      <h2>Toplanan Veriler</h2>
      <ul>
        <li>Ad, soyad, e-posta ve telefon gibi iletişim bilgileri</li>
        <li>Teslimat adresi ve sipariş bilgileri</li>
        <li>Gravür için yüklediğiniz fotoğraf, metin ve QR bağlantıları</li>
      </ul>
      <h2>Kullanım Amaçları</h2>
      <p>
        Veriler yalnızca siparişinizin hazırlanması, teslim edilmesi ve sizinle iletişim kurulması
        amacıyla kullanılır. Üçüncü taraflarla pazarlama amacıyla paylaşılmaz.
      </p>
      <h2>Görsellerin Saklanması</h2>
      <p>
        Yüklediğiniz fotoğraflar üretim tamamlandıktan sonra en geç 30 gün içinde sistemlerimizden
        silinir. Onayınız olmadan tanıtım amacıyla kullanılmaz.
      </p>
      <h2>Haklarınız</h2>
      <p>
        KVKK kapsamında verilerinize erişme, düzeltme ve silinmesini talep etme hakkına sahipsiniz.
        Talepleriniz için info@timoria.com adresine yazabilirsiniz.
      </p>
    </LegalPage>
  );
}
