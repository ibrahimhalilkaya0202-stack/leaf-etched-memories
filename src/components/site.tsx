import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import type { ReactNode } from "react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/905000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile yazın"
        className="grid h-12 w-12 place-items-center rounded-full bg-forest text-cream shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-forest-deep"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
      </a>
      <a
        href="https://instagram.com/timoria"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram hesabımız"
        className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 bg-ink/90 text-gold shadow-lg backdrop-blur transition-transform hover:-translate-y-0.5"
      >
        <Instagram className="h-5 w-5" strokeWidth={1.5} />
      </a>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-ink">
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
        <Link to="/" className="min-w-0">
          <span className="font-display text-2xl tracking-[0.35em] text-gold">TIMORIA</span>
        </Link>
        <div className="flex shrink-0 items-center gap-3">
          <Link to="/" className="hidden text-[0.7rem] uppercase tracking-[0.22em] text-cream/70 transition-colors hover:text-gold sm:inline">
            Ana Sayfa
          </Link>
          <Link to="/kisisellestir" className="btn-gold !px-5 !py-2.5">
            Kişiselleştir
          </Link>
        </div>
      </nav>
    </header>
  );
}


export function SiteFooter() {
  return (
    <footer className="bg-ink py-16 text-cream/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-2xl tracking-[0.35em] text-gold">TIMORIA</span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Zaman geçer, anılar kalır. Kişiye özel lazer gravür hediyeler.
          </p>
          <div className="mt-5 flex gap-4">
            <a href="https://instagram.com/timoria" aria-label="Instagram" className="transition-colors hover:text-gold">
              <Instagram className="h-5 w-5" strokeWidth={1.3} />
            </a>
            <a href="https://wa.me/905000000000" aria-label="WhatsApp" className="transition-colors hover:text-gold">
              <MessageCircle className="h-5 w-5" strokeWidth={1.3} />
            </a>
            <a href="mailto:info@timoria.com" aria-label="E-posta" className="transition-colors hover:text-gold">
              <Mail className="h-5 w-5" strokeWidth={1.3} />
            </a>
          </div>
        </div>
        <nav className="text-sm">
          <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-cream/80">Koleksiyon</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to="/" hash="kategoriler" className="hover:text-gold">Yaprak Gravürleri</Link></li>
            <li><Link to="/" hash="kategoriler" className="hover:text-gold">Portre Gravürleri</Link></li>
            <li><Link to="/" hash="galeri" className="hover:text-gold">Galeri</Link></li>
          </ul>
        </nav>
        <nav className="text-sm">
          <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-cream/80">Kurumsal</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to="/" hash="hakkimizda" className="hover:text-gold">Hakkımızda</Link></li>
            <li><Link to="/" hash="iletisim" className="hover:text-gold">İletişim</Link></li>
            <li><Link to="/sss" className="hover:text-gold">Sık Sorulan Sorular</Link></li>
          </ul>
        </nav>
        <nav className="text-sm">
          <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-cream/80">Yasal</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to="/gizlilik-politikasi" className="hover:text-gold">Gizlilik Politikası</Link></li>
            <li><Link to="/mesafeli-satis-sozlesmesi" className="hover:text-gold">Mesafeli Satış Sözleşmesi</Link></li>
            <li><Link to="/iade-politikasi" className="hover:text-gold">İade Politikası</Link></li>
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-12 max-w-7xl px-5 text-xs text-cream/35">
        © {new Date().getFullYear()} Timoria. Tüm hakları saklıdır.
      </p>
    </footer>
  );
}

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-4xl">{title}</h1>
        <div className="gold-rule mt-6" />
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
