import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail, Youtube } from "lucide-react";
import type { ReactNode, SVGProps } from "react";

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.77V0h-3.45v16.69a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function FloatingContact() {
  return (
    <a
      href="https://wa.me/905XXXXXXXXX"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile yazın"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-forest text-cream shadow-2xl shadow-forest/40 transition-transform hover:-translate-y-1 hover:bg-forest-deep"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
    </a>
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
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-8 w-8 place-items-center rounded-full text-cream/70 transition-colors hover:bg-gold/10 hover:text-gold"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://tiktok.com/@yourhandle"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="grid h-8 w-8 place-items-center rounded-full text-cream/70 transition-colors hover:bg-gold/10 hover:text-gold"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com/@yourhandle"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="grid h-8 w-8 place-items-center rounded-full text-cream/70 transition-colors hover:bg-gold/10 hover:text-gold"
            >
              <Youtube className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-8 w-8 place-items-center rounded-full text-cream/70 transition-colors hover:bg-gold/10 hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
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
