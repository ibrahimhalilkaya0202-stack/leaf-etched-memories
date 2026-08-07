import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site";

const faqs = [
  {
    q: "Yapraklar gerçekten doğal mı, ne kadar dayanır?",
    a: "Evet. Özenle seçilen manolya yaprakları özel bir işlemle kurutulup dayanıklılaştırılır. Nemden uzak tutulduğunda yıllarca formunu korur.",
  },
  {
    q: "Hangi fotoğrafları gönderebilirim?",
    a: "Yüz hatlarının net göründüğü, ışığı iyi bir fotoğraf yeterlidir. Tasarım ekibimiz gravüre uygun hale getirir ve onayınıza sunar.",
  },
  {
    q: "QR kod neye yönlendiriyor?",
    a: "Dilediğiniz video, ses kaydı, fotoğraf albümü veya web sayfasına. Bağlantıyı sonradan da güncelleyebilirsiniz.",
  },
  {
    q: "Sipariş ne kadar sürede hazırlanır?",
    a: "Tasarım onayından sonra 2-4 iş günü içinde üretilir, ardından kargoya verilir.",
  },
  {
    q: "Kurumsal toplu siparişler mümkün mü?",
    a: "Evet. 25 adet ve üzeri kurumsal siparişlerde özel fiyatlandırma ve markanıza özel tasarım sunuyoruz.",
  },
  {
    q: "Kargo ve teslimat nasıl işliyor?",
    a: "Türkiye geneline sigortalı kargo ile gönderim yapılır. Ürünler premium hediye kutusunda, koruma dolgusuyla teslim edilir.",
  },
];

export const Route = createFileRoute("/sss")({
  component: SssPage,
  head: () => ({
    meta: [
      { title: "Sık Sorulan Sorular — Timoria" },
      {
        name: "description",
        content:
          "Timoria yaprak gravür, QR kodlu anı yaprakları, teslimat ve kurumsal siparişler hakkında sık sorulan sorular.",
      },
      { property: "og:title", content: "Sık Sorulan Sorular — Timoria" },
      { property: "og:description", content: "Gravür süreci, teslimat ve siparişler hakkında merak edilenler." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/sss" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sss" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function SssPage() {
  return (
    <LegalPage eyebrow="Yardım" title="Sık Sorulan Sorular">
      {faqs.map((f) => (
        <div key={f.q} className="border-t border-border pt-6">
          <h2 className="!mt-0 font-display text-xl text-foreground">{f.q}</h2>
          <p className="mt-3">{f.a}</p>
        </div>
      ))}
    </LegalPage>
  );
}
