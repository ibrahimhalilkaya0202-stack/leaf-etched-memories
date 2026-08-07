import { createFileRoute, Link } from "@tanstack/react-router";
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
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

import { SiteFooter, FloatingContact } from "@/components/site";
import { Reveal } from "@/components/reveal";
import { LeafPreview, PersonalizerForm, defaultConfig, type LeafConfig } from "@/components/personalizer";
import heroLeaf from "@/assets/hero-leaf.jpg";

import gQr from "@/assets/g-qr.jpg";
import gFrame from "@/assets/g-frame.jpg";
import gBox from "@/assets/g-box.jpg";
import gLeather from "@/assets/g-leather.jpg";
import gMetal from "@/assets/g-metal.jpg";

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
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Timoria — Doğanın Üzerine İşlenen Hatıralar" },
      {
        name: "description",
        content:
          "Gerçek yapraklara lazerle işlenen portre, isim, tarih, mesaj ve QR kod. Kişiye özel premium gravür hediyeler, Türkiye geneline kargo.",
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

const featured = [
  {
    img: heroLeaf,
    title: "Manolya Anı Yaprağı",
    desc: "Gerçek yaprak üzerine portre, isim ve tarih gravürü.",
    price: "1.450 ₺",
    tag: "En Çok Seçilen",
  },
  {
    img: gQr,
    title: "QR Kodlu Anı Yaprağı",
    desc: "Videonuza veya ses kaydınıza açılan gizli hatıra.",
    price: "1.650 ₺",
    tag: "Yeni",
  },
  {
    img: gFrame,
    title: "Çerçeveli Yaprak Tablo",
    desc: "Müze camlı çerçeve içinde sergilenmeye hazır.",
    price: "2.250 ₺",
  },
];

const categories = [
  { icon: Leaf, title: "Kişiye Özel Yaprak Gravürleri" },
  { icon: Frame, title: "Portre Gravürleri" },
  { icon: ScanLine, title: "QR Kodlu Anı Yaprakları" },
  { icon: Gift, title: "Düğün ve Nişan Hediyeleri" },
  { icon: Building2, title: "Kurumsal Hediyeler" },
  { icon: Wallet, title: "Deri Gravür" },
  { icon: TreePine, title: "Ahşap Gravür" },
  { icon: Sword, title: "Bıçak ve Metal Gravür" },
];

const steps = [
  { icon: Upload, title: "Fotoğrafını yükle", n: "01", d: "Net bir portre yeterli." },
  { icon: PenLine, title: "Yazını veya QR kodunu ekle", n: "02", d: "İsim, tarih, mesaj." },
  { icon: Sparkles, title: "Tasarımı hazırlayalım", n: "03", d: "Onayınıza sunulur." },
  { icon: Zap, title: "Lazerle işlensin", n: "04", d: "Mikron hassasiyetinde." },
  { icon: PackageCheck, title: "Kutusunda teslim", n: "05", d: "Hediyeye hazır gelir." },
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
  const [config, setConfig] = useState<LeafConfig>(defaultConfig);
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0]?.q ?? null);

  return (
    <div className="bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
          <a href="#hero" className="min-w-0">
            <span className="font-display text-2xl tracking-[0.35em] text-gold">TIMORIA</span>
          </a>
          <div className="hidden items-center gap-9 text-[0.7rem] uppercase tracking-[0.22em] text-cream/70 lg:flex">
            <a href="#nedir" className="transition-colors hover:text-gold">Timoria Nedir</a>
            <a href="#koleksiyon" className="transition-colors hover:text-gold">Koleksiyon</a>
            <a href="#nasil" className="transition-colors hover:text-gold">Nasıl Hazırlanıyor</a>
            <a href="#galeri" className="transition-colors hover:text-gold">Galeri</a>
            <a href="#sss" className="transition-colors hover:text-gold">SSS</a>
          </div>
          <Link to="/kisisellestir" className="btn-gold !px-5 !py-2.5 shrink-0">Kişiselleştir</Link>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="relative overflow-hidden bg-ink pt-28 pb-20 sm:pt-40 lg:pb-32">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 top-10 h-[38rem] w-[38rem] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--gold), transparent 65%)" }}
          />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
            <div className="reveal min-w-0">
              <p className="eyebrow">Zaman Geçer, Anılar Kalır.</p>
              <h1 className="mt-5 text-4xl leading-[1.06] text-cream sm:text-5xl lg:text-[4.25rem]">
                Doğanın Üzerine İşlenen{" "}
                <span className="italic text-gold">Hatıralar</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/65">
                Gerçek yapraklara portrenizi, isminizi, tarihinizi, mesajınızı ve QR kodunuzu lazerle
                işliyoruz. Doğanın zarafetini kişiye özel bir sanat eserine dönüştürüyoruz.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/kisisellestir" className="btn-gold min-h-11">Kendi Yaprağını Tasarla</Link>
                <a href="#koleksiyon" className="btn-outline-gold min-h-11">Koleksiyonu İncele</a>
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
                fetchPriority="high"
                className="relative mx-auto w-full max-w-md rounded-sm object-cover"
              />
            </div>
          </div>
        </section>

        {/* TIMORIA NEDIR */}
        <section id="nedir" className="bg-background py-24">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <Reveal>
              <p className="eyebrow">Timoria Nedir?</p>
              <p className="mt-8 font-display text-2xl leading-relaxed sm:text-[2rem]">
                Timoria, doğanın eşsiz güzelliğini ileri lazer teknolojisiyle buluşturarak unutulmaz
                anıları ömür boyu saklanabilecek sanat eserlerine dönüştüren bir premium kişiye özel
                hediye markasıdır.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-14 grid gap-10 sm:grid-cols-3">
                {reasons.slice(0, 3).map((r) => (
                  <div key={r.t} className="min-w-0">
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold/40">
                      <r.icon className="h-5 w-5 text-gold" strokeWidth={1.2} />
                    </span>
                    <h3 className="mt-5 text-xl">{r.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ÖNE ÇIKAN YAPRAKLAR */}
        <section id="koleksiyon" className="bg-cream py-24">
          <div className="mx-auto max-w-7xl px-5">
            <p className="eyebrow">Koleksiyon</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Öne Çıkan Kişiye Özel Yapraklar</h2>
            <div className="gold-rule mt-6" />

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p, i) => (
                <Reveal key={p.title} delay={i * 90} as="article" className="group min-w-0 border border-border bg-background">
                  <div className="relative overflow-hidden bg-ink">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={900}
                      height={900}
                      className="h-72 w-full object-cover opacity-95 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                    {p.tag && (
                      <span className="absolute left-4 top-4 border border-gold/60 bg-ink/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-gold backdrop-blur">
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span className="font-display text-2xl">{p.price}</span>
                      <Link
                        to="/kisisellestir"
                        className="inline-flex min-h-11 items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-forest transition-colors hover:text-gold"
                      >
                        Kişiselleştir <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((c) => (
                <Link
                  key={c.title}
                  to="/kisisellestir"
                  className="group flex min-h-11 items-center gap-4 bg-background p-6 transition-colors duration-500 hover:bg-cream"
                >
                  <c.icon className="h-5 w-5 shrink-0 text-forest transition-colors group-hover:text-gold" strokeWidth={1.2} />
                  <span className="min-w-0 text-sm leading-snug">{c.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* NASIL HAZIRLANIYOR */}
        <section id="nasil" className="bg-forest-deep py-24 text-cream">
          <div className="mx-auto max-w-7xl px-5">
            <p className="eyebrow">Süreç</p>
            <h2 className="mt-4 text-3xl text-cream sm:text-4xl">Nasıl Hazırlanıyor?</h2>
            <div className="gold-rule mt-6" />
            <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((s, i) => (
                <Reveal key={s.n} as="li" delay={i * 70} className="border-t border-cream/15 pt-6">
                  <span className="font-display text-3xl text-gold">{s.n}</span>
                  <s.icon className="mt-5 h-5 w-5 text-cream/60" strokeWidth={1.2} />
                  <h3 className="mt-4 text-lg text-cream">{s.title}</h3>
                  <p className="mt-2 text-sm text-cream/55">{s.d}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* GALERI */}
        <section id="galeri" className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-5">
            <p className="eyebrow">Galeri</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Gerçek Ürün Galerisi</h2>
            <div className="gold-rule mt-6" />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((g, i) => (
                <Reveal key={g.label} delay={(i % 3) * 80}>
                  <figure className="group relative overflow-hidden bg-ink">
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* KISISELLESTIRME */}
        <section id="kisisellestirme" className="bg-cream py-24">
          <div className="mx-auto max-w-7xl px-5">
            <p className="eyebrow">Kişiselleştirme</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Önce Görün, Sonra Sipariş Verin</h2>
            <div className="gold-rule mt-6" />
            <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
              <Reveal className="min-w-0">
                <PersonalizerForm config={config} onChange={setConfig} />
                <Link to="/kisisellestir" className="btn-gold mt-8 min-h-11">
                  Tasarımı Tamamla <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </Reveal>
              <Reveal delay={90} className="min-w-0">
                <LeafPreview config={config} />
              </Reveal>
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
              {reviews.map((r, i) => (
                <Reveal key={r.name} delay={i * 80}>
                  <blockquote className="h-full border border-cream/12 bg-cream/[0.03] p-8">
                    <div className="flex gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="mt-6 font-display text-xl leading-relaxed text-cream/85">“{r.text}”</p>
                    <footer className="mt-6 text-[0.7rem] uppercase tracking-[0.22em] text-cream/45">
                      {r.name} — {r.city}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SSS */}
        <section id="sss" className="bg-background py-24">
          <div className="mx-auto max-w-3xl px-5">
            <p className="eyebrow">Yardım</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Sık Sorulan Sorular</h2>
            <div className="gold-rule mt-6" />
            <div className="mt-12 divide-y divide-border border-y border-border">
              {faqs.map((f) => {
                const open = openFaq === f.q;
                return (
                  <div key={f.q}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : f.q)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-xl">{f.q}</span>
                      {open ? (
                        <Minus className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                      ) : (
                        <Plus className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                      )}
                    </button>
                    {open && (
                      <p className="-mt-1 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
            <Link to="/sss" className="mt-8 inline-flex min-h-11 items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-forest transition-colors hover:text-gold">
              Tüm sorular <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
            </Link>
          </div>
        </section>

        {/* SON CTA */}
        <section className="relative overflow-hidden bg-ink py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--gold), transparent 65%)" }}
          />
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <p className="eyebrow">Zaman Geçer, Anılar Kalır.</p>
            <h2 className="mt-6 text-3xl text-cream sm:text-5xl">
              Bir anıyı <span className="italic text-gold">ölümsüzleştirin</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-cream/60">
              Fotoğrafınızı yükleyin, tasarımınızı birlikte hazırlayalım. Üretim öncesi onay sizde.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/kisisellestir" className="btn-gold min-h-11">Hemen Tasarla</Link>
              <a href="#iletisim" className="btn-outline-gold min-h-11">Bize Yazın</a>
            </div>
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
                  className="btn-gold min-h-11"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> WhatsApp
                </a>
                <a
                  href="https://instagram.com/timoria"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-forest/30 px-8 py-[0.95rem] text-xs uppercase tracking-[0.22em] text-forest transition-colors hover:bg-forest hover:text-cream"
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
                  aria-label="Adınız Soyadınız"
                  placeholder="Adınız Soyadınız"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                />
                <input
                  required
                  type="email"
                  aria-label="E-posta adresiniz"
                  placeholder="E-posta adresiniz"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                />
                <textarea
                  required
                  rows={5}
                  aria-label="Mesajınız"
                  placeholder="Nasıl bir hatıra hayal ediyorsunuz?"
                  className="w-full resize-none border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                />
                <button type="submit" className="btn-gold min-h-11 w-full">
                  <Mail className="h-4 w-4" strokeWidth={1.5} /> Gönder
                </button>
                {sent && (
                  <p className="text-sm text-forest" role="status">
                    Teşekkürler! Mesajınız alındı, en kısa sürede dönüş yapacağız.
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingContact />
    </div>
  );
}
