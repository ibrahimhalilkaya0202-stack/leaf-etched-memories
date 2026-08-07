import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site";

export const Route = createFileRoute("/iade-politikasi")({
  component: IadePage,
  head: () => ({
    meta: [
      { title: "İade Politikası — Timoria" },
      {
        name: "description",
        content: "Timoria ürünlerinde iade, değişim ve hasarlı ürün süreçlerinin nasıl işlediğini öğrenin.",
      },
      { property: "og:title", content: "İade Politikası — Timoria" },
      { property: "og:description", content: "İade, değişim ve hasarlı ürün koşulları." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/iade-politikasi" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/iade-politikasi" }],
  }),
});

function IadePage() {
  return (
    <LegalPage eyebrow="Yasal" title="İade Politikası">
      <p>
        Her ürün sizin için tek tek üretildiğinden, memnuniyetiniz bizim için önceliklidir. Aşağıdaki
        koşullarda iade ve değişim taleplerinizi karşılıyoruz.
      </p>
      <h2>Hasarlı veya Ayıplı Ürün</h2>
      <p>
        Ürün elinize hasarlı ulaştıysa, teslimattan itibaren 7 gün içinde fotoğrafla birlikte bize
        ulaşın. Ürün ücretsiz olarak yeniden üretilir veya bedeli iade edilir.
      </p>
      <h2>Hatalı Üretim</h2>
      <p>
        Onayladığınız tasarımdan farklı üretilen ürünler kargo masrafı size ait olmadan yenilenir.
      </p>
      <h2>Kişiye Özel Ürünler</h2>
      <p>
        Kişiselleştirilmiş ürünlerde, üretim hatası dışındaki nedenlerle cayma hakkı bulunmaz. Bu
        nedenle tasarım onayı aşamasında tüm detayları kontrol etmenizi rica ederiz.
      </p>
      <h2>Süreç</h2>
      <ul>
        <li>info@timoria.com adresine sipariş numaranızla yazın</li>
        <li>Talebiniz 2 iş günü içinde değerlendirilir</li>
        <li>Onaylanan iadelerde ödeme 5-10 iş günü içinde kartınıza yansır</li>
      </ul>
    </LegalPage>
  );
}
