import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, ShieldCheck, Truck, Gift } from "lucide-react";

import { SiteHeader, SiteFooter, FloatingContact } from "@/components/site";
import { Reveal } from "@/components/reveal";
import { LeafPreview, PersonalizerForm, defaultConfig, type LeafConfig } from "@/components/personalizer";

export const Route = createFileRoute("/kisisellestir")({
  component: KisisellestirPage,
  head: () => ({
    meta: [
      { title: "Kişiselleştir — Yaprak Gravürünüzü Tasarlayın | Timoria" },
      {
        name: "description",
        content:
          "Fotoğrafınızı yükleyin, isim, tarih, mesaj ve QR kod ekleyin; gerçek yaprak gravürünüzün canlı önizlemesini anında görün.",
      },
      { property: "og:title", content: "Kişiselleştir — Timoria Yaprak Gravürü" },
      {
        property: "og:description",
        content: "Fotoğraf, isim, tarih, mesaj ve QR kod ile kendi anı yaprağınızı canlı önizlemeyle tasarlayın.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kisisellestir" }],
  }),
});

function KisisellestirPage() {
  const [config, setConfig] = useState<LeafConfig>(defaultConfig);

  const summary = [
    `İsim: ${config.name || "—"}`,
    `Tarih: ${config.date || "—"}`,
    `Mesaj: ${config.message || "—"}`,
    `QR: ${config.qr ? config.qrLink || "eklenecek" : "yok"}`,
    `Fotoğraf: ${config.photo ? "yüklendi" : "yok"}`,
  ].join("\n");

  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        <section className="bg-cream py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <p className="eyebrow">Kişiselleştirme</p>
            <h1 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-5xl">
              Anı Yaprağınızı <span className="italic text-gold">Tasarlayın</span>
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Beş adımda tamamlayın: fotoğraf, isim, tarih, mesaj ve QR kod. Sağdaki önizleme
              seçimlerinizle birlikte anında güncellenir.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <Reveal className="min-w-0">
              <PersonalizerForm config={config} onChange={setConfig} />
            </Reveal>

            <Reveal delay={80} className="min-w-0">
              <div className="lg:sticky lg:top-28">
                <LeafPreview config={config} />
                <div className="mt-8 border border-border p-6">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                      Manolya Anı Yaprağı
                    </span>
                    <span className="font-display text-2xl">1.450 ₺</span>
                  </div>
                  <a
                    href={`https://wa.me/905000000000?text=${encodeURIComponent(
                      "Timoria kişiselleştirme talebim:\n" + summary,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold mt-6 w-full"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> Tasarımı Gönder
                  </a>
                  <Link to="/" hash="iletisim" className="btn-outline-gold mt-3 w-full !border-forest/30 !text-forest">
                    E-posta ile İlet
                  </Link>
                  <ul className="mt-6 space-y-3 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" strokeWidth={1.4} /> Üretim öncesi ücretsiz tasarım onayı</li>
                    <li className="flex items-center gap-2"><Gift className="h-4 w-4 text-gold" strokeWidth={1.4} /> Premium hediye kutusu dahil</li>
                    <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-gold" strokeWidth={1.4} /> Türkiye geneline sigortalı kargo</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}
