import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf,
  ScanLine,
  Frame,
  Gift,
  Building2,
  Wallet,
  TreePine,
  Sword,
  Upload,
  PenLine,
  Sparkles,
  Zap,
  PackageCheck,
  ShieldCheck,
  Truck,
  Instagram,
  MessageCircle,
  Mail,
  Star,
} from "lucide-react";

import heroLeaf from "@/assets/hero-leaf.jpg";
import gQr from "@/assets/g-qr.jpg";
import gFrame from "@/assets/g-frame.jpg";
import gBox from "@/assets/g-box.jpg";
import gLeather from "@/assets/g-leather.jpg";
import gMetal from "@/assets/g-metal.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Timoria — Gerçek Yapraklara İşlenen Ölümsüz Hatıralar" },
      {
        name: "description",
        content:
          "Fotoğrafınızı, mesajınızı veya QR kodunuzu gerçek yaprağa lazerle işliyoruz. Kişiye özel premium gravür hediyeler, Türkiye geneline kargo.",
      },
      { property: "og:title", content: "Timoria — Kişiye Özel Lazer Gravür Hediyeler" },
      {
        property: "og:description",
        content: "Zaman geçer, anılar kalır. Gerçek yaprak, deri, ahşap ve metal üzerine premium gravür.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "Timoria",
          slogan: "Zaman Geçer, Anılar Kalır.",
          description:
            "Gerçek yapraklara, deriye, ahşaba ve metale lazer gravürle işlenen kişiye özel premium hediyeler.",
          areaServed: "TR",
        }),
      },
    ],
  }),
});

const categories = [
  { icon: Leaf, title: "Kişiye Özel Yaprak Gravürleri", desc: "Gerçek yaprak üzerine isim, tarih ve mesaj." },
  { icon: Frame, title: "Portre Gravürleri", desc: "Fotoğrafınızdan hassas portre gravürü." },
  { icon: ScanLine, title: "QR Kodlu Anı Yaprakları", desc: "Videonuza veya sesinize açılan QR kod." },
  { icon: Gift, title: "Düğün ve Nişan Hediyeleri", desc: "Davetliler için zarif hatıralıklar." },
  { icon: Building2, title: "Kurumsal Hediyeler", desc: "Markanıza özel toplu üretim." },
  { icon: Wallet, title: "Deri Gravür", desc: "Cüzdan, kartlık ve deri aksesuar." },
  { icon: TreePine, title: "Ahşap Gravür", desc: "Kutu, tablo ve ahşap objeler." },
  { icon: Sword, title: "Bıçak ve Metal Gravür", desc: "Çelik yüzeylerde kalıcı işleme." },
];

const steps = [
  { icon: Upload, title: "Fotoğrafını yükle", n: "01" },
  { icon: PenLine, title: "Yazını veya QR kodunu ekle", n: "02" },
  { icon: Sparkles, title: "Timoria tasarımı hazırlasın", n: "03" },
  { icon: Zap, title: "Ürün lazerle işlensin", n: "04" },
  { icon: PackageCheck, title: "Özel kutusunda teslim edilsin", n: "05" },
];

const reasons = [
  { icon: Leaf, t: "Gerçek doğal yapraklar", d: "Tek tek seçilen, dayanıklılaştırılmış manolya yaprakları." },
  { icon: Zap, t: "Hassas lazer gravür", d: "Mikron seviyesinde detay, solmayan işçilik." },
  { icon: Sparkles, t: "Kişiye özel tasarım", d: "Her sipariş için tasarımcı dokunuşu." },
  { icon: Gift, t: "Premium hediye kutusu", d: "Hediyeye hazır, kadife dokulu özel kutu." },
  { icon: Truck, t: "Türkiye geneline kargo", d: "Hızlı ve sigortalı gönderim." },
  { icon: ShieldCheck, t: "Güvenli ödeme", d: "3D Secure ile korunan ödeme altyapısı." },
];

const reviews = [
  {
    name: "Elif Y.",
    city: "İstanbul",
    text: "Annemin fotoğrafını yaprağa işlettirdim. Kutusunu açtığında ağladı. Bu kadar zarif bir hediye beklemiyordum.",
  },
  {
    name: "Mert K.",
    city: "İzmir",
    text: "Düğünümüz için QR kodlu yapraklar hazırlattık, misafirler videomuzu okutunca çok etkilendi. İşçilik kusursuz.",
  },
  {
    name: "Selin A.",
    city: "Ankara",
    text: "Kurumsal hediyelerimizi Timoria hazırladı. Hem şık hem anlamlı; müşterilerimizden çok olumlu dönüş aldık.",
  },
];

const gallery = [
  { src: heroLeaf, alt: "Manolya yaprağı üzerine lazer gravür portre", label: "Yaprak Üzerine Portre" },
  { src: gQr, alt: "QR kod işlenmiş gerçek yaprak", label: "QR Kodlu Yaprak" },
  { src: gFrame, alt: "Çerçevelenmiş yaprak gravür tablosu", label: "Çerçeveli Yaprak" },
  { src: gBox, alt: "Premium ahşap hediye kutusu", label: "Ahşap Kutu" },
  { src: gLeather, alt: "Portre gravürlü deri kartlık", label: "Deri Gravür" },
  { src: gMetal, alt: "Lazerle işlenmiş metal bıçak yüzeyi", label: "Metal Gravür" },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
          <a href="#hero" className="min-w-0">
            <span className="font-display text-2xl tracking-[0.35em] text-gold">TIMORIA</span>
          </a>
          <div className="hidden items-center gap-9 text-[0.7rem] uppercase tracking-[0.22em] text-cream/70 lg:flex">
            <a href="#kategoriler" className="transition-colors hover:text-gold">Koleksiyon</a>
            <a href="#nasil" className="transition-colors hover:text-gold">Nasıl Çalışır</a>
            <a href="#galeri" className="transition-colors hover:text-gold">Galeri</a>
            <a href="#hakkimizda" className="transition-colors hover:text-gold">Hakkımızda</a>
            <a href="#iletisim" className="transition-colors hover:text-gold">İletişim</a>
          </div>
          <a href="#iletisim" className="btn-gold !px-5 !py-2.5 shrink-0">Sipariş Ver</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden bg-ink pt-28 pb-20 sm:pt-36 lg:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-10 h-[38rem] w-[38rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--gold), transparent 65%)" }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div className="reveal min-w-0">
            <p className="eyebrow">Zaman Geçer, Anılar Kalır.</p>
            <h1 className="mt-5 text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-6xl">
              Gerçek Yapraklara İşlenen{" "}
              <span className="italic text-gold">Ölümsüz Hatıralar</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/65">
              Fotoğrafınızı, mesajınızı veya QR kodunuzu gerçek yaprak üzerine lazer teknolojisiyle
              işliyoruz. Doğanın zarafetini kişiye özel sanat eserine dönüştürüyoruz.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#iletisim" className="btn-gold">Sipariş Ver</a>
              <a href="#kategoriler" className="btn-outline-gold">Ürünleri İncele</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-[0.7rem] uppercase tracking-[0.2em] text-cream/45">
              <span>El İşçiliği</span>
              <span>Premium Kutu</span>
              <span>Türkiye Geneli Kargo</span>
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute inset-6 rounded-full bg-forest/40 blur-3xl" aria-hidden />
            <img
              src={heroLeaf}
              alt="Manolya yaprağı üzerine lazerle işlenmiş portre, isim ve QR kod"
              width={1280}
              height={1600}
              className="relative mx-auto w-full max-w-md rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* KATEGORILER */}
      <section id="kategoriler" className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow">Koleksiyon</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Ürün Kategorileri</h2>
          <div className="gold-rule mt-6" />
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <article
                key={c.title}
                className="group bg-background p-8 transition-colors duration-500 hover:bg-cream"
              >
                <c.icon className="h-6 w-6 text-forest transition-colors group-hover:text-gold" strokeWidth={1.2} />
                <h3 className="mt-6 text-xl leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIR */}
      <section id="nasil" className="bg-forest-deep py-24 text-cream">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow">Süreç</p>
          <h2 className="mt-4 text-3xl text-cream sm:text-4xl">Nasıl Çalışır?</h2>
          <div className="gold-rule mt-6" />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n} className="border-t border-cream/15 pt-6">
                <span className="font-display text-3xl text-gold">{s.n}</span>
                <s.icon className="mt-5 h-5 w-5 text-cream/60" strokeWidth={1.2} />
                <h3 className="mt-4 text-lg text-cream">{s.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* NEDEN */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow">Fark</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Neden Timoria?</h2>
          <div className="gold-rule mt-6" />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.t} className="flex min-w-0 gap-5">
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40">
                  <r.icon className="h-5 w-5 text-gold" strokeWidth={1.2} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl">{r.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section id="galeri" className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow">Galeri</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Atölyeden Seçkiler</h2>
          <div className="gold-rule mt-6" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <figure key={g.label} className="group relative overflow-hidden bg-ink">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-80 w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-5 text-[0.7rem] uppercase tracking-[0.22em] text-cream/85">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* YORUMLAR */}
      <section className="bg-ink py-24">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow">Referanslar</p>
          <h2 className="mt-4 text-3xl text-cream sm:text-4xl">Müşteri Yorumları</h2>
          <div className="gold-rule mt-6" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {reviews.map((r) => (
              <blockquote key={r.name} className="border border-cream/12 bg-cream/[0.03] p-8">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-6 font-display text-xl leading-relaxed text-cream/85">“{r.text}”</p>
                <footer className="mt-6 text-[0.7rem] uppercase tracking-[0.22em] text-cream/45">
                  {r.name} — {r.city}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section id="hakkimizda" className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="eyebrow">Hakkımızda</p>
          <p className="mt-8 font-display text-2xl leading-relaxed sm:text-3xl">
            Timoria, doğanın eşsiz güzelliğini ileri lazer teknolojisiyle buluşturarak unutulmaz
            anıları ömür boyu saklanabilecek sanat eserlerine dönüştüren bir premium kişiye özel
            hediye markasıdır.
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-gold">Zaman Geçer, Anılar Kalır.</p>
        </div>
      </section>

      {/* ILETISIM */}
      <section id="iletisim" className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">
          <div className="min-w-0">
            <p className="eyebrow">İletişim</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Anınızı Birlikte Tasarlayalım</h2>
            <div className="gold-rule mt-6" />
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/905000000000"
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> WhatsApp
              </a>
              <a
                href="https://instagram.com/timoria"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-forest/30 px-8 py-[0.95rem] text-xs uppercase tracking-[0.22em] text-forest transition-colors hover:bg-forest hover:text-cream"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} /> Instagram
              </a>
            </div>
            <div className="mt-10 overflow-hidden rounded-sm border border-border">
              <iframe
                title="Timoria atölye konumu"
                src="https://www.openstreetmap.org/export/embed.html?bbox=28.94%2C41.0%2C29.06%2C41.06&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form
            className="min-w-0 border border-border bg-background p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h3 className="text-2xl">E-posta ile Yazın</h3>
            <div className="mt-6 space-y-4">
              <input
                required
                placeholder="Adınız Soyadınız"
                className="w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
              />
              <input
                required
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
              />
              <textarea
                required
                rows={5}
                placeholder="Nasıl bir hatıra hayal ediyorsunuz?"
                className="w-full resize-none border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
              />
              <button type="submit" className="btn-gold w-full">
                <Mail className="h-4 w-4" strokeWidth={1.5} /> Gönder
              </button>
              {sent && (
                <p className="text-sm text-forest">
                  Teşekkürler! Mesajınız alındı, en kısa sürede dönüş yapacağız.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />

    </div>
  );
}
