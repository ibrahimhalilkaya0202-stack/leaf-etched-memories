import { useEffect, useMemo, useRef, useState } from "react";
import { Upload, QrCode, Trash2, ImageIcon } from "lucide-react";

import leafAsset from "@/assets/real-leaf.jpg.asset.json";
const heroLeaf = leafAsset.url;

/** Deterministic pseudo-QR pattern for the visual preview (not a scannable code). */
function useQrPattern(seed: string, size = 11) {
  return useMemo(() => {
    let h = 2166136261;
    for (let i = 0; i < seed.length; i++) {
      h ^= seed.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    const cells: boolean[] = [];
    for (let i = 0; i < size * size; i++) {
      h ^= h << 13;
      h ^= h >>> 17;
      h ^= h << 5;
      cells.push(((h >>> 0) % 100) > 48);
    }
    // finder squares in three corners
    const mark = (r0: number, c0: number) => {
      for (let r = 0; r < 3; r++)
        for (let c = 0; c < 3; c++) {
          const on = r === 0 || r === 2 || c === 0 || c === 2 || (r === 1 && c === 1);
          cells[(r0 + r) * size + (c0 + c)] = on;
        }
    };
    mark(0, 0);
    mark(0, size - 3);
    mark(size - 3, 0);
    return cells;
  }, [seed, size]);
}

export type LeafConfig = {
  photo: string | null;
  name: string;
  date: string;
  message: string;
  qr: boolean;
  qrLink: string;
};

export const defaultConfig: LeafConfig = {
  photo: null,
  name: "Elif & Mert",
  date: "14.06.2025",
  message: "Zaman geçer, anılar kalır.",
  qr: true,
  qrLink: "https://timoria.com/ani",
};

export function LeafPreview({ config }: { config: LeafConfig }) {
  const qr = useQrPattern(config.qrLink || "timoria");

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute inset-8 rounded-full bg-forest/40 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-sm bg-ink">
        <img
          src={heroLeaf}
          alt="Kişiselleştirme önizlemesi: gerçek manolya yaprağı üzerine gravür"
          width={1280}
          height={1600}
          className="w-full object-cover opacity-95"
        />
        {/* engraved overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[16%] text-center mix-blend-screen">
          {config.photo ? (
            <img
              src={config.photo}
              alt="Yüklenen fotoğrafın gravür önizlemesi"
              className="mb-3 h-24 w-24 rounded-full object-cover opacity-70 contrast-125 grayscale sm:h-28 sm:w-28"
              style={{ mixBlendMode: "screen" }}
            />
          ) : null}
          {config.name ? (
            <p className="font-display text-lg leading-tight text-gold/85 drop-shadow-sm sm:text-2xl">
              {config.name}
            </p>
          ) : null}
          {config.date ? (
            <p className="mt-1 text-[0.6rem] uppercase tracking-[0.3em] text-gold/70">{config.date}</p>
          ) : null}
          {config.message ? (
            <p className="mt-2 max-w-[16rem] font-display text-[0.8rem] italic leading-snug text-cream/70 sm:text-sm">
              {config.message}
            </p>
          ) : null}
          {config.qr ? (
            <div
              className="mt-3 grid gap-[1px] opacity-70"
              style={{ gridTemplateColumns: "repeat(11, 4px)" }}
              aria-hidden
            >
              {qr.map((on, i) => (
                <span
                  key={i}
                  className="block h-[4px] w-[4px]"
                  style={{ background: on ? "var(--gold)" : "transparent" }}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <p className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
        Gerçek zamanlı önizleme — üretim öncesi tasarımcı onayı gönderilir
      </p>
    </div>
  );
}

export function PersonalizerForm({
  config,
  onChange,
}: {
  config: LeafConfig;
  onChange: (c: LeafConfig) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  useEffect(() => () => {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  }, [objectUrl]);

  const set = <K extends keyof LeafConfig>(k: K, v: LeafConfig[K]) =>
    onChange({ ...config, [k]: v });

  const field =
    "w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold";

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="p-photo" className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          1 — Fotoğraf
        </label>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <input
            id="p-photo"
            ref={fileRef}
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (!f) return;
              if (objectUrl) URL.revokeObjectURL(objectUrl);
              const url = URL.createObjectURL(f);
              setObjectUrl(url);
              set("photo", url);
            }}
          />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="btn-outline-gold min-h-11 !border-forest/35 !text-forest"
          >
            <Upload className="h-4 w-4" strokeWidth={1.5} /> Fotoğraf Yükle
          </button>
          {config.photo ? (
            <button
              type="button"
              onClick={() => set("photo", null)}
              className="inline-flex min-h-11 items-center gap-2 px-3 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <Trash2 className="h-4 w-4" strokeWidth={1.5} /> Kaldır
            </button>
          ) : (
            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <ImageIcon className="h-4 w-4" strokeWidth={1.4} /> JPG / PNG, net yüz hatları
            </span>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="p-name" className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
            2 — İsim
          </label>
          <input
            id="p-name"
            className={`mt-3 ${field}`}
            maxLength={28}
            value={config.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Elif & Mert"
          />
        </div>
        <div>
          <label htmlFor="p-date" className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
            3 — Tarih
          </label>
          <input
            id="p-date"
            className={`mt-3 ${field}`}
            maxLength={20}
            value={config.date}
            onChange={(e) => set("date", e.target.value)}
            placeholder="14.06.2025"
          />
        </div>
      </div>

      <div>
        <label htmlFor="p-msg" className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          4 — Özel Mesaj
        </label>
        <textarea
          id="p-msg"
          rows={3}
          maxLength={90}
          className={`mt-3 resize-none ${field}`}
          value={config.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Yaprağa işlenmesini istediğiniz kısa mesaj"
        />
        <p className="mt-1 text-right text-xs text-muted-foreground">{config.message.length}/90</p>
      </div>

      <div className="border border-border p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
              <QrCode className="h-4 w-4 text-gold" strokeWidth={1.5} /> 5 — QR Kod
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Video, ses kaydı veya albüm bağlantısı ekleyin.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={config.qr}
            aria-label="QR kod ekle"
            onClick={() => set("qr", !config.qr)}
            className={`relative h-7 w-12 shrink-0 rounded-full border transition-colors ${
              config.qr ? "border-gold bg-gold/25" : "border-border bg-muted"
            }`}
          >
            <span
              className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full transition-all ${
                config.qr ? "left-6 bg-gold" : "left-1 bg-muted-foreground/50"
              }`}
            />
          </button>
        </div>
        {config.qr && (
          <input
            className={`mt-4 ${field}`}
            value={config.qrLink}
            onChange={(e) => set("qrLink", e.target.value)}
            placeholder="https://..."
            aria-label="QR kod bağlantısı"
          />
        )}
      </div>
    </div>
  );
}
