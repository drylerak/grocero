import { useState, useRef, useEffect } from 'react'
import proto1 from './assets/proto1.png'
import proto3 from './assets/proto3.png'

// ─── Mascot SVGs inlined ───────────────────────────────────────────────────

const MascotWaving = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 440" width="200" height="244" role="img" aria-label="Grocero winkt">
    <ellipse cx="180" cy="420" rx="98" ry="12" fill="#201e1d" opacity="0.10"/>
    <g strokeLinecap="round" fill="none">
      <path d="M152 360 Q150 388 150 406" stroke="#5f3d17" strokeWidth="20"/><path d="M208 360 Q210 388 210 406" stroke="#5f3d17" strokeWidth="20"/>
      <path d="M152 360 Q150 388 150 406" stroke="#c08a49" strokeWidth="14"/><path d="M208 360 Q210 388 210 406" stroke="#c08a49" strokeWidth="14"/>
    </g>
    <ellipse cx="145" cy="410" rx="24" ry="12" fill="#3f9a41" stroke="#1c3a1c" strokeWidth="3"/><ellipse cx="215" cy="410" rx="24" ry="12" fill="#3f9a41" stroke="#1c3a1c" strokeWidth="3"/>
    <g strokeLinecap="round" fill="none">
      <path d="M102 252 Q82 296 80 330" stroke="#5f3d17" strokeWidth="19"/><path d="M102 252 Q82 296 80 330" stroke="#c08a49" strokeWidth="13"/>
    </g>
    <circle cx="81" cy="318" r="12" fill="#3f9a41" stroke="#1c3a1c" strokeWidth="2.5"/><circle cx="80" cy="334" r="15" fill="#c9925a" stroke="#5f3d17" strokeWidth="3"/>
    <g strokeLinecap="round" fill="none">
      <path d="M260 248 Q298 214 312 184" stroke="#5f3d17" strokeWidth="19"/><path d="M260 248 Q298 214 312 184" stroke="#c08a49" strokeWidth="13"/>
    </g>
    <circle cx="305" cy="198" r="12" fill="#3f9a41" stroke="#1c3a1c" strokeWidth="2.5"/><circle cx="313" cy="182" r="16" fill="#c9925a" stroke="#5f3d17" strokeWidth="3"/>
    <g stroke="#ec3013" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7"><path d="M330 168 Q338 172 340 180"/><path d="M334 150 Q346 156 348 168"/></g>
    <g fill="#7bc95a" stroke="#3f9a41" strokeWidth="2.6">
      <circle cx="150" cy="120" r="30"/><circle cx="192" cy="108" r="32"/><circle cx="228" cy="126" r="28"/><circle cx="122" cy="150" r="26"/><circle cx="250" cy="152" r="24"/><circle cx="180" cy="150" r="30"/><circle cx="212" cy="162" r="23"/>
    </g>
    <g fill="#2f7d33" stroke="#1c3a1c" strokeWidth="2.4">
      <circle cx="132" cy="128" r="13"/><circle cx="150" cy="116" r="14"/><circle cx="167" cy="128" r="12"/><circle cx="149" cy="138" r="12"/><circle cx="149" cy="127" r="10"/>
    </g>
    <g fill="#2f7d33" stroke="#1c3a1c" strokeWidth="2.4">
      <circle cx="104" cy="186" r="17"/><circle cx="124" cy="178" r="15"/><circle cx="258" cy="186" r="17"/><circle cx="236" cy="178" r="15"/>
      <circle cx="170" cy="178" r="17"/><circle cx="200" cy="184" r="16"/><circle cx="146" cy="184" r="13"/><circle cx="222" cy="184" r="13"/><circle cx="180" cy="188" r="14"/>
    </g>
    <circle cx="138" cy="194" r="12" fill="#e0492e"/><circle cx="228" cy="194" r="12" fill="#e0492e"/>
    <path d="M88 206 Q180 186 272 206 L268 226 Q180 208 92 226 Z" fill="#b07d3f" stroke="#5f3d17" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M92 214 Q180 196 268 214 L246 366 Q180 384 114 366 Z" fill="#c08a49" stroke="#5f3d17" strokeWidth="3.5" strokeLinejoin="round"/>
    <circle cx="152" cy="270" r="16" fill="#fbf7ef" stroke="#201e1d" strokeWidth="3"/><circle cx="208" cy="270" r="16" fill="#fbf7ef" stroke="#201e1d" strokeWidth="3"/>
    <circle cx="155" cy="272" r="7.5" fill="#201e1d"/><circle cx="211" cy="272" r="7.5" fill="#201e1d"/>
    <path d="M148 300 Q180 340 212 300 Q180 322 148 300 Z" fill="#8a1f10" stroke="#201e1d" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M163 315 Q180 324 197 315 Z" fill="#ec5a45"/>
  </svg>
)

const MascotStanding = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 440" width="160" height="196" role="img" aria-label="Grocero steht">
    <ellipse cx="180" cy="420" rx="98" ry="12" fill="#201e1d" opacity="0.10"/>
    <g strokeLinecap="round" fill="none">
      <path d="M152 360 Q150 388 150 406" stroke="#5f3d17" strokeWidth="20"/>
      <path d="M208 360 Q210 388 210 406" stroke="#5f3d17" strokeWidth="20"/>
      <path d="M152 360 Q150 388 150 406" stroke="#c08a49" strokeWidth="14"/>
      <path d="M208 360 Q210 388 210 406" stroke="#c08a49" strokeWidth="14"/>
    </g>
    <ellipse cx="145" cy="410" rx="24" ry="12" fill="#3f9a41" stroke="#1c3a1c" strokeWidth="3"/>
    <ellipse cx="215" cy="410" rx="24" ry="12" fill="#3f9a41" stroke="#1c3a1c" strokeWidth="3"/>
    <g strokeLinecap="round" fill="none">
      <path d="M102 250 Q80 292 78 328" stroke="#5f3d17" strokeWidth="19"/>
      <path d="M258 250 Q280 292 282 328" stroke="#5f3d17" strokeWidth="19"/>
      <path d="M102 250 Q80 292 78 328" stroke="#c08a49" strokeWidth="13"/>
      <path d="M258 250 Q280 292 282 328" stroke="#c08a49" strokeWidth="13"/>
    </g>
    <circle cx="79" cy="316" r="12" fill="#3f9a41" stroke="#1c3a1c" strokeWidth="2.5"/>
    <circle cx="281" cy="316" r="12" fill="#3f9a41" stroke="#1c3a1c" strokeWidth="2.5"/>
    <circle cx="78" cy="332" r="15" fill="#c9925a" stroke="#5f3d17" strokeWidth="3"/>
    <circle cx="282" cy="332" r="15" fill="#c9925a" stroke="#5f3d17" strokeWidth="3"/>
    <g fill="#7bc95a" stroke="#3f9a41" strokeWidth="2.6">
      <circle cx="150" cy="120" r="30"/><circle cx="192" cy="108" r="32"/><circle cx="228" cy="126" r="28"/>
      <circle cx="122" cy="150" r="26"/><circle cx="250" cy="152" r="24"/><circle cx="180" cy="150" r="30"/><circle cx="212" cy="162" r="23"/>
    </g>
    <g fill="#2f7d33" stroke="#1c3a1c" strokeWidth="2.4">
      <circle cx="104" cy="186" r="17"/><circle cx="124" cy="178" r="15"/><circle cx="258" cy="186" r="17"/><circle cx="236" cy="178" r="15"/>
      <circle cx="170" cy="178" r="17"/><circle cx="200" cy="184" r="16"/><circle cx="146" cy="184" r="13"/><circle cx="222" cy="184" r="13"/><circle cx="180" cy="188" r="14"/>
    </g>
    <circle cx="138" cy="194" r="12" fill="#e0492e"/><circle cx="228" cy="194" r="12" fill="#e0492e"/>
    <path d="M88 206 Q180 186 272 206 L268 226 Q180 208 92 226 Z" fill="#b07d3f" stroke="#5f3d17" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M92 214 Q180 196 268 214 L246 366 Q180 384 114 366 Z" fill="#c08a49" stroke="#5f3d17" strokeWidth="3.5" strokeLinejoin="round"/>
    <circle cx="152" cy="270" r="16" fill="#fbf7ef" stroke="#201e1d" strokeWidth="3"/><circle cx="208" cy="270" r="16" fill="#fbf7ef" stroke="#201e1d" strokeWidth="3"/>
    <circle cx="155" cy="272" r="7.5" fill="#201e1d"/><circle cx="211" cy="272" r="7.5" fill="#201e1d"/>
    <circle cx="152" cy="269" r="2.4" fill="#fff"/><circle cx="208" cy="269" r="2.4" fill="#fff"/>
    <path d="M150 302 Q180 336 210 302 Q180 320 150 302 Z" fill="#8a1f10" stroke="#201e1d" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M164 314 Q180 322 196 314 Z" fill="#ec5a45"/>
  </svg>
)

// ─── Phone Frame with mock screen ─────────────────────────────────────────

type PhoneScreenProps = {
  title: string
  children: React.ReactNode
  caption: string
  index: number
}

const PhoneFrame = ({ title, children, caption, index }: PhoneScreenProps) => (
  <div className="flex flex-col items-center gap-3 min-w-[200px]">
    <p className="text-xs font-semibold tracking-widest uppercase text-[#8A908A] font-body text-center">
      {String(index).padStart(2, '0')}
    </p>
    <div
      className="relative rounded-[2.2rem] overflow-hidden border-[3px] border-[#1F2B1C] bg-[#F4F8F1] shadow-xl"
      style={{ width: 200, height: 400 }}
    >
      {/* Phone notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1F2B1C] rounded-b-2xl z-10" />
      <div className="pt-7 h-full overflow-hidden">{children}</div>
    </div>
    <p className="text-[11px] text-[#8A908A] font-body text-center max-w-[200px] leading-relaxed">{caption}</p>
    <p className="text-[10px] text-[#8A908A] font-body text-center italic">
      Konzept-Prototyp · Produktdaten sind simuliert · nicht mit Nutzern validiert
    </p>
  </div>
)

// ─── Product screen mock UIs ──────────────────────────────────────────────

const Screen1Onboarding = () => (
  <div className="bg-[#F4F8F1] h-full p-4 flex flex-col gap-3">
    <div className="flex items-center gap-2 mb-1">
      <div className="w-5 h-5 rounded-full bg-[#4EA845]" />
      <span className="font-display font-bold text-sm text-[#1F2B1C]">grocero</span>
    </div>
    <div className="text-[10px] text-[#4EA845] font-semibold tracking-widest font-body">SCHRITT 2 VON 6</div>
    <div className="w-full bg-[#E4EAE1] rounded-full h-1.5">
      <div className="bg-[#4EA845] h-1.5 rounded-full" style={{ width: '33%' }} />
    </div>
    <p className="font-display font-semibold text-sm text-[#1F2B1C] leading-tight">Wie viele Personen leben in eurem Haushalt?</p>
    <div className="flex flex-col gap-2 mt-1">
      {['1 Person', '2 Personen', '3–4 Personen', '5+'].map((opt, i) => (
        <div key={i} className={`rounded-xl border px-3 py-2 text-[11px] font-body font-medium cursor-pointer ${i === 1 ? 'bg-[#4EA845] text-white border-[#357A2C]' : 'bg-white text-[#1F2B1C] border-[#E4EAE1]'}`}>{opt}</div>
      ))}
    </div>
    <div className="mt-auto">
      <div className="w-full bg-[#4EA845] text-white text-[11px] font-semibold font-body rounded-xl py-2.5 text-center" style={{ boxShadow: '0 5px 0 #357A2C' }}>Weiter</div>
    </div>
  </div>
)

const Screen2Basket = () => (
  <div className="bg-[#F4F8F1] h-full p-3 flex flex-col gap-2">
    <div className="flex items-center justify-between mb-1">
      <span className="font-display font-bold text-sm text-[#1F2B1C]">Mein Warenkorb</span>
      <span className="text-[10px] text-[#8A908A] font-body">7 Artikel</span>
    </div>
    <div className="flex flex-col gap-1.5">
      {[
        { name: 'Vollmilch 1 l', qty: '2×', price: '1,79 €' },
        { name: 'Bio-Eier 6 St.', qty: '1×', price: '2,49 €' },
        { name: 'Sourdough-Brot', qty: '1×', price: '3,20 €' },
        { name: 'Tomaten 500 g', qty: '2×', price: '1,99 €' },
        { name: 'Mozzarella', qty: '1×', price: '1,49 €' },
      ].map((item, i) => (
        <div key={i} className="bg-white rounded-xl border border-[#E4EAE1] px-2.5 py-2 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold font-body text-[#1F2B1C]">{item.name}</p>
            <p className="text-[9px] font-body text-[#8A908A]">{item.qty} · {item.price}</p>
          </div>
          <div className="w-5 h-5 rounded-full bg-[#EAF6E7] flex items-center justify-center">
            <div className="w-2 h-0.5 bg-[#4EA845] rounded" />
          </div>
        </div>
      ))}
    </div>
    <div className="mt-auto bg-[#4EA845] text-white text-[10px] font-semibold font-body rounded-xl py-2 text-center" style={{ boxShadow: '0 4px 0 #357A2C' }}>An REWE übergeben</div>
  </div>
)

const Screen3Recipe = () => (
  <div className="bg-[#F4F8F1] h-full p-3 flex flex-col gap-2">
    <p className="font-display font-semibold text-sm text-[#1F2B1C]">Rezept importieren</p>
    <div className="bg-[#EAF6E7] border border-[#B7E0A0] rounded-xl p-2.5">
      <p className="text-[10px] font-semibold text-[#357A2C] font-body">Pasta Carbonara (4 Port.)</p>
    </div>
    <p className="text-[10px] text-[#8A908A] font-body">Grocero ordnet den Zutaten Produkte zu:</p>
    <div className="flex flex-col gap-1.5">
      {[
        { ing: 'Spaghetti 400 g', prod: 'Barilla Spaghetti 500 g', ok: true },
        { ing: 'Pancetta 150 g', prod: 'Schwarzwälder Speck 200 g', ok: true },
        { ing: 'Eier 4 St.', prod: 'Bio-Eier 6 St.', ok: true },
        { ing: 'Pecorino 80 g', prod: 'Reibkäse-Mix 150 g', ok: false },
      ].map((r, i) => (
        <div key={i} className={`bg-white rounded-xl border px-2.5 py-1.5 ${r.ok ? 'border-[#E4EAE1]' : 'border-[#D99A2B]'}`}>
          <p className="text-[9px] text-[#8A908A] font-body">{r.ing}</p>
          <p className="text-[10px] font-semibold text-[#1F2B1C] font-body">{r.prod}</p>
          {!r.ok && <p className="text-[9px] text-[#D99A2B] font-body">Als Alternative vorgeschlagen</p>}
        </div>
      ))}
    </div>
    <div className="mt-auto bg-[#4EA845] text-white text-[10px] font-semibold font-body rounded-xl py-2 text-center" style={{ boxShadow: '0 4px 0 #357A2C' }}>Zum Warenkorb hinzufügen</div>
  </div>
)

const Screen4Chat = () => (
  <div className="bg-[#F4F8F1] h-full p-3 flex flex-col gap-2">
    <p className="font-display font-semibold text-sm text-[#1F2B1C]">Produkt ergänzen</p>
    <div className="flex flex-col gap-2 flex-1">
      <div className="flex justify-end">
        <div className="bg-[#4EA845] text-white text-[10px] font-body rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
          Ich brauche noch Olivenöl, extra vergine.
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-white border border-[#E4EAE1] text-[10px] font-body text-[#1F2B1C] rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%]">
          Ich habe Folgendes gefunden:
        </div>
      </div>
      <div className="bg-white border border-[#E4EAE1] rounded-xl p-2.5 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-[#EAF6E7] flex items-center justify-center text-[16px]">🫒</div>
        <div>
          <p className="text-[10px] font-semibold text-[#1F2B1C] font-body">Bertolli Olivenöl 750 ml</p>
          <p className="text-[9px] text-[#8A908A] font-body">Extra Vergine · 5,99 €</p>
        </div>
        <div className="ml-auto w-6 h-6 rounded-full bg-[#4EA845] flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">+</span>
        </div>
      </div>
    </div>
    <div className="border border-[#E4EAE1] bg-white rounded-2xl px-3 py-2 flex items-center gap-2">
      <input className="flex-1 text-[10px] font-body text-[#8A908A] outline-none bg-transparent" placeholder="Produkt oder Wunsch eingeben …" readOnly />
      <div className="w-5 h-5 rounded-full bg-[#4EA845] flex items-center justify-center">
        <span className="text-white text-[8px] font-bold">→</span>
      </div>
    </div>
  </div>
)

const Screen5Handoff = () => (
  <div className="bg-[#F4F8F1] h-full p-3 flex flex-col gap-2">
    <p className="font-display font-semibold text-sm text-[#1F2B1C]">Warenkorb prüfen</p>
    <div className="bg-[#FFF3DA] border border-[#D99A2B] rounded-xl p-2.5">
      <p className="text-[9px] font-semibold text-[#D99A2B] font-body tracking-widest uppercase">Ersatz klären</p>
      <p className="text-[10px] font-body text-[#1F2B1C] mt-0.5">Schwarzwälder Speck nicht verfügbar.</p>
      <p className="text-[10px] font-body text-[#5B6B58]">Ersatz: Guanciale 200 g (5,49 €)</p>
      <div className="flex gap-2 mt-2">
        <div className="flex-1 bg-[#4EA845] text-white text-[9px] font-semibold font-body rounded-lg py-1.5 text-center">Ersetzen</div>
        <div className="flex-1 border border-[#E4EAE1] text-[#5B6B58] text-[9px] font-semibold font-body rounded-lg py-1.5 text-center">Entfernen</div>
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-[10px] font-body text-[#5B6B58]">
        <span>8 Artikel</span><span>Gesamt: 24,30 €</span>
      </div>
    </div>
    <div className="mt-auto flex flex-col gap-2">
      <div className="w-full border-2 border-[#4EA845] text-[#4EA845] text-[10px] font-semibold font-body rounded-xl py-2 text-center">Korb bearbeiten</div>
      <div className="w-full bg-[#4EA845] text-white text-[11px] font-semibold font-body rounded-xl py-2.5 text-center flex items-center justify-center gap-1.5" style={{ boxShadow: '0 4px 0 #357A2C' }}>
        <span>An REWE übergeben</span>
        <span className="text-xs">→</span>
      </div>
    </div>
  </div>
)

// ─── Eyebrow label ─────────────────────────────────────────────────────────

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4EA845] font-body mb-4">{children}</p>
)

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display font-bold text-2xl md:text-3xl text-[#1F2B1C] leading-tight mb-6">{children}</h2>
)

const Divider = () => <div className="border-t border-[#E4EAE1] my-16" />

// ─── Navigation ───────────────────────────────────────────────────────────

const navItems = [
  { label: 'Überblick', id: 'ueberblick' },
  { label: 'Problem', id: 'problem' },
  { label: 'Research', id: 'research' },
  { label: 'Reframing', id: 'reframing' },
  { label: 'Produkt', id: 'produkt' },
  { label: 'MVP', id: 'mvp' },
  { label: 'Prototyp', id: 'prototyp' },
  { label: 'Roadmap', id: 'roadmap' },
  { label: 'Learnings', id: 'learnings' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F4F8F1]/95 backdrop-blur border-b border-[#E4EAE1] shadow-sm' : 'bg-[#F4F8F1]/90 backdrop-blur'}`}>
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-center relative">

        {/* Desktop nav — centered */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)}
              className="px-3 py-1.5 text-[12px] font-body font-medium text-[#5B6B58] hover:text-[#1F2B1C] hover:bg-[#EAF6E7] rounded-lg transition-all duration-150">
              {n.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger — right side */}
        <button className="lg:hidden absolute right-6 p-2 rounded-lg hover:bg-[#EAF6E7] transition" onClick={() => setOpen(!open)} aria-label="Menü">
          <div className="flex flex-col gap-1.5">
            <div className={`w-5 h-0.5 bg-[#1F2B1C] rounded transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-5 h-0.5 bg-[#1F2B1C] rounded transition-all ${open ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-[#1F2B1C] rounded transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-[#E4EAE1] bg-[#F4F8F1]/98 px-6 py-4 flex flex-col gap-1">
          {navItems.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)}
              className="text-left px-3 py-2 text-[13px] font-body font-medium text-[#5B6B58] hover:text-[#1F2B1C] hover:bg-[#EAF6E7] rounded-lg transition">
              {n.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

// ─── Evidence Quote Block ─────────────────────────────────────────────────

type EvidenceProps = { quote: string; insight: string; consequence: string; num: number }

const EvidenceBlock = ({ quote, insight, consequence, num }: EvidenceProps) => (
  <div className="bg-white border border-[#E4EAE1] rounded-2xl p-6">
    <div className="text-[10px] font-semibold text-[#4EA845] tracking-widest font-body mb-3">ZITAT {num}</div>
    <blockquote className="font-body italic text-[#1F2B1C] text-sm leading-relaxed border-l-2 border-[#4EA845] pl-4 mb-4">
      „{quote}“
    </blockquote>
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-[10px] font-semibold tracking-widest uppercase text-[#8A908A] font-body mb-1">INSIGHT</p>
        <p className="text-sm font-body text-[#5B6B58] leading-relaxed">{insight}</p>
      </div>
      <div>
        <p className="text-[10px] font-semibold tracking-widest uppercase text-[#4EA845] font-body mb-1">KONSEQUENZ</p>
        <p className="text-sm font-body text-[#1F2B1C] leading-relaxed font-medium">{consequence}</p>
      </div>
    </div>
  </div>
)

// ─── Learning block ───────────────────────────────────────────────────────

type LearningProps = { num: string; title: string; body: string }

const LearningBlock = ({ num, title, body }: LearningProps) => (
  <div className="flex gap-5">
    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-[#EAF6E7] border border-[#B7E0A0] flex items-center justify-center">
      <span className="font-display font-bold text-sm text-[#357A2C]">{num}</span>
    </div>
    <div>
      <h3 className="font-display font-semibold text-[#1F2B1C] text-base mb-2">{title}</h3>
      <p className="font-body text-[#5B6B58] text-sm leading-relaxed">{body}</p>
    </div>
  </div>
)

// ─── Primary Button ───────────────────────────────────────────────────────

const PrimaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-[#4EA845] text-white font-display font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#357A2C] transition-colors duration-150"
    style={{ boxShadow: '0 5px 0 #357A2C' }}>
    {children}
    <span>→</span>
  </a>
)

// ─── Horizontal scroll gallery for mobile ────────────────────────────────

const phoneScreens = [
  {
    title: 'Haushaltsprofil',
    copy: 'Sechs Onboarding-Fragen erfassen Adresse, Ernährung, Haushaltsgröße, Grundprodukte und Ersatzregeln.',
    caption: 'Onboarding, Aufbau des Haushaltsprofils',
    screen: <Screen1Onboarding />,
  },
  {
    title: 'Automatischer Grundkorb',
    copy: 'Aus dem Profil und dem wiederkehrenden Bedarf entsteht ein vorbereiteter Warenkorb zur Prüfung.',
    caption: 'Warenkorb, erster Vorschlag',
    screen: <Screen2Basket />,
  },
  {
    title: 'Rezeptimport',
    copy: 'Ein Rezept wird eingelesen. Grocero ordnet den Zutaten Produkte in passenden Mengen zu.',
    caption: 'Rezeptimport, Zutaten werden Produkten zugeordnet',
    screen: <Screen3Recipe />,
  },
  {
    title: 'Produkt per Chat ergänzen',
    copy: 'Fehlende Produkte lassen sich in natürlicher Sprache ergänzen, ohne den Warenkorb zu verlassen.',
    caption: 'Warenkorb-Assistent, Produkt hinzufügen',
    screen: <Screen4Chat />,
  },
  {
    title: 'Ersatz klären und an REWE übergeben',
    copy: 'Unsichere oder nicht verfügbare Artikel werden vorab geklärt. Danach öffnet Grocero den Warenkorb bei REWE.',
    caption: 'Warenkorb-Review und Übergabe',
    screen: <Screen5Handoff />,
  },
]

// ─── Main App ─────────────────────────────────────────────────────────────

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen bg-[#F4F8F1]">
      <Nav />

      <main className="max-w-[1100px] mx-auto px-6 pt-28 pb-24">

        {/* ─── 01 ÜBERBLICK ─── */}
        <section id="ueberblick" className="mb-24">
          <Eyebrow>Praxisprojekt · Product-Management-Bootcamp · Case Study</Eyebrow>

          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
            <div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-[#1F2B1C] leading-tight mb-6">
                Der Online-Supermarkteinkauf beginnt jede Woche wieder bei null.
              </h1>
              <p className="font-body text-[#5B6B58] text-lg leading-relaxed mb-4 max-w-xl">
                Die Case Study dokumentiert meinen Product-Management-Prozess: von Discovery und User Research über Problem Reframing bis hin zu MVP-Priorisierung, Prototyping und Roadmap. Sie zeigt, wie aus einer breiten Idee ein fokussierter Einkaufsassistent für den wiederkehrenden Wocheneinkauf wurde.
              </p>
            </div>

            {/* Hero phones — real prototype screenshots */}
            <div className="flex-shrink-0 flex flex-col items-center gap-6">
              <div className="flex items-end gap-6">
                <div
                  className="cursor-default"
                  style={{ transform: 'rotate(-3deg)', transition: 'transform 0.25s cubic-bezier(0.23,1,0.32,1)', transformOrigin: 'bottom center' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(-7deg) translateY(-14px) scale(1.04)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(-3deg) translateY(0) scale(1)' }}
                  onMouseMove={e => {
                    const r = e.currentTarget.getBoundingClientRect()
                    const x = (e.clientX - r.left) / r.width - 0.5
                    const y = (e.clientY - r.top) / r.height - 0.5
                    e.currentTarget.style.transform = `rotate(${-3 + x * -6}deg) translateY(${y * -12}px) scale(1.04)`
                  }}
                >
                  <img
                    src={proto3}
                    alt="Grocero-App: Ansicht"
                    className="w-[210px] drop-shadow-xl"
                  />
                </div>
                <div
                  className="cursor-default"
                  style={{ transform: 'rotate(3deg)', transition: 'transform 0.25s cubic-bezier(0.23,1,0.32,1)', transformOrigin: 'bottom center' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(7deg) translateY(-14px) scale(1.04)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(3deg) translateY(0) scale(1)' }}
                  onMouseMove={e => {
                    const r = e.currentTarget.getBoundingClientRect()
                    const x = (e.clientX - r.left) / r.width - 0.5
                    const y = (e.clientY - r.top) / r.height - 0.5
                    e.currentTarget.style.transform = `rotate(${3 + x * 6}deg) translateY(${y * -12}px) scale(1.04)`
                  }}
                >
                  <img
                    src={proto1}
                    alt="Grocero-App: Startkorb-Ansicht"
                    className="w-[260px] drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── 02 PROBLEM & PRODUKTIDEE ─── */}
        <section id="problem" className="mb-24">

          {/* Two side-by-side frames */}
          <div className="grid md:grid-cols-2 gap-6 mb-10 items-start">
            {/* Frame 1 — Problem */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-[#4EA845] font-body">PROBLEM</p>
              <div className="bg-[#EAF6E7] border border-[#B7E0A0] rounded-2xl p-7 flex flex-col gap-3">
                <p className="font-display font-bold text-[#1F2B1C] text-lg leading-snug">
                  Der wöchentliche Lebensmitteleinkauf beginnt jede Woche von Neuem.
                </p>
                <p className="font-body text-[#1F2B1C] text-sm leading-relaxed">
                  Vielbeschäftigte Menschen müssen ihren Einkauf jede Woche neu planen, Produkte in der App suchen, Mengen prüfen und an fehlende Produkte denken. Supermarkt-Apps vereinfachen die Bestellung und Lieferung, aber nicht das Zusammenstellen des Wocheneinkaufs.
                </p>
              </div>
            </div>

            {/* Frame 2 — Ausgangsidee */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-[#4EA845] font-body">AUSGANGSIDEE</p>
              <div className="bg-[#EAF6E7] border border-[#B7E0A0] rounded-2xl p-7 inline-block">
                <p className="font-display font-bold text-[#1F2B1C] text-lg leading-snug">
                  Den wöchentlichen Lebensmitteleinkaufsprozess automatisieren, um ihn schneller und stressfrei zu erledigen.
                </p>
              </div>
            </div>
          </div>

          {/* Zielgruppe */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[#4EA845] font-body">ZIELGRUPPE</p>
            <div className="bg-white border border-[#E4EAE1] rounded-2xl p-7">
              <p className="font-body text-[#5B6B58] text-base leading-relaxed">
                Vielbeschäftigte, vollzeitberufstätige Menschen zwischen 25 und 55 Jahren, die bereits Lebensmittel online bestellen. Später könnte die Zielgruppe um Familien mit Kindern und Senioren erweitert werden.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── 03 RESEARCH ─── */}
        <section id="research" className="mb-24">
          <Eyebrow>RESEARCH</Eyebrow>
          <SectionTitle>Vier Gespräche schärften mein Verständnis des Problemraums.</SectionTitle>

          <p className="font-body text-[#5B6B58] text-base leading-relaxed mb-12 w-full" style={{ position: 'relative', padding: 0 }}>
            Ich wollte verstehen, an welchen Stellen des Online-Lebensmitteleinkaufs wiederkehrender Aufwand entsteht. Dafür führte ich vier qualitative Interviews mit Menschen, die regelmäßig Lebensmittel online bestellen. Die Ergebnisse sind explorativ und nicht repräsentativ.
          </p>

          {/* Interview quotes */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              {
                n: 'ZITAT 1',
                quote: 'Die Search-Funktion ist sehr schlecht an allen Apps, die ich bis jetzt probiert habe … ich will diese kleinen Tomaten finden und man kann sie nicht searchen.',
              },
              {
                n: 'ZITAT 2',
                quote: 'Right now I do it all manually … it gives me decision fatigue.',
              },
            ].map((q, i) => (
              <div key={i} className="relative bg-white border border-[#E4EAE1] rounded-[1.5rem] p-5 shadow-sm"
                style={{ borderRadius: i === 0 ? '1.5rem 1.5rem 1.5rem 0.3rem' : '1.5rem 1.5rem 0.3rem 1.5rem' }}>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#4EA845] font-body mb-3">{q.n}</p>
                <p className="font-body italic text-[#1F2B1C] text-sm leading-relaxed border-l-2 border-[#4EA845] pl-3">
                  „{q.quote}“
                </p>
                <div className="absolute bottom-[-10px] w-4 h-4 bg-white border-r border-b border-[#E4EAE1]"
                  style={i === 0
                    ? { left: 20, transform: 'rotate(45deg)', borderRadius: '0 0 3px 0' }
                    : { right: 20, transform: 'rotate(45deg)', borderRadius: '0 0 3px 0' }} />
              </div>
            ))}
          </div>

          {/* Customer Journey — experience curve inspired by portfolio slide 4 */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[#8A908A] font-body mb-6">CUSTOMER JOURNEY · GESAMTER EINKAUFSPROZESS</p>
            <div className="bg-white border border-[#E4EAE1] rounded-2xl px-5 py-6 md:px-8 md:py-8 shadow-[0_8px_30px_rgba(46,107,41,0.06)]">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <p className="font-body text-[#5B6B58] text-xs">Der vollständige Weg vom Bedarf bis zur Lieferung</p>
                <div className="flex flex-wrap gap-4 font-body text-[10px] text-[#8A908A]">
                  <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#C95E46]" />Reibungspunkt</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#4EA845]" />Weitere Phase</span>
                </div>
              </div>

              <svg className="w-full h-auto" viewBox="0 0 900 150" role="img" aria-labelledby="journey-title journey-desc">
                <title id="journey-title">Reibung entlang der vollständigen Customer Journey</title>
                <desc id="journey-desc">Sechs Phasen vom Bedarf bis zur Lieferung. Bedarfsplanung, Produktsuche sowie Ersatz und Nachbereitung sind als Reibungspunkte markiert.</desc>
                <line x1="45" y1="100" x2="855" y2="100" stroke="#E4EAE1" strokeWidth="2" />
                <path
                  d="M90 70 C145 75 175 115 235 118 C295 122 320 80 380 85 C440 90 470 98 525 100 C585 103 610 115 670 118 C735 120 760 80 815 50"
                  fill="none"
                  stroke="#4EA845"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <circle cx="90" cy="70" r="10" fill="#C95E46" />
                <circle cx="235" cy="118" r="10" fill="#C95E46" />
                <circle cx="380" cy="85" r="8" fill="#4EA845" />
                <circle cx="525" cy="100" r="8" fill="#4EA845" />
                <circle cx="670" cy="118" r="10" fill="#C95E46" />
                <circle cx="815" cy="50" r="8" fill="#4EA845" />
              </svg>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-5 mt-2">
                {[
                  { label: 'BEDARFSPLANUNG', problem: true },
                  { label: 'PRODUKTSUCHE / BROWSING', problem: true },
                  { label: 'WARENKORB & ÜBERPRÜFUNG', problem: false },
                  { label: 'CHECKOUT & PREISE', problem: false },
                  { label: 'ERSATZ & NACHBEREITUNG', problem: true },
                  { label: 'LIEFERUNG', problem: false },
                ].map((phase) => (
                  <p key={phase.label} className={`font-body text-[10px] leading-snug text-center ${phase.problem ? 'font-semibold text-[#C95E46]' : 'font-medium text-[#5B6B58]'}`}>
                    {phase.label}
                  </p>
                ))}
              </div>

            </div>
          </div>

          <p className="font-body text-[#357A2C] text-sm mt-6 leading-relaxed">
            Die qualitative Nutzerforschung zeigte, dass die größten Reibungspunkte vor und nach der Bestellung entstehen. Die wiederkehrende manuelle Zusammenstellung des wöchentlichen Warenkorbs kostet viel Zeit, Aufwand und Energie. In allen Gesprächen wurden Probleme mit der Suche, den Filtern oder der Auffindbarkeit genannt. Besonders spezifische Produkte waren schwer zu finden. Produktverfügbarkeit, Ersatzartikel und vergessene Artikel waren wiederkehrende Unsicherheitsfaktoren. Die Interviewten wollten früh wissen, welche Produkte nicht verfügbar sind und welche Alternativen möglich sind. Außerdem wünschten sie sich, vergessene Artikel auch später noch zur Bestellung hinzufügen zu können.
          </p>
        </section>

        <Divider />

        {/* ─── 04 REFRAMING ─── */}
        <section id="reframing" className="mb-24">
          <Eyebrow>REFRAMING</Eyebrow>
          <SectionTitle>Vom vermuteten Bedarf zum tatsächlichen Bedürfnis.</SectionTitle>

          <div className="grid md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)] gap-y-4 md:gap-x-2">
            {[
              { label: 'Ausgangsthese', text: 'Den Online-Lebensmitteleinkauf schneller und stressfreier machen.' },
              { label: 'Research-Erkenntnis', text: 'Suche, Planung sowie der Umgang mit regelmäßig benötigten Produkten und Ersatzartikeln verursachen den größten Aufwand.' },
              { label: 'Produktidee', text: 'Ein Einkaufsassistent bereitet wöchentlich einen personalisierten Warenkorb vor.' },
            ].map((step, i) => (
              <div key={step.label} className="contents">
                <div className="bg-[#EAF6E7] border border-[#4EA845] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-md rounded-bl-md p-4 md:p-5 flex flex-col justify-center text-center">
                  <h3 className="font-display font-bold text-[#357A2C] text-base mb-2">{step.label}</h3>
                  <p className="font-body text-[#1F2B1C] text-sm leading-relaxed">{step.text}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex items-center justify-center text-[#4EA845] text-2xl" aria-hidden="true">→</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ─── PRODUKT ─── */}
        <section id="produkt" className="mb-24">
          <div className="mb-12">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[#4EA845] font-body mb-3">DAS PRODUKT</p>
            <h3 className="font-display font-bold text-[#1F2B1C] text-2xl md:text-3xl leading-tight mb-5">Grocero ist ein dynamischer, personalisierter Einkaufsassistent.</h3>
            <p className="font-body text-[#5B6B58] text-base leading-relaxed w-full">
              Über ein persönliches Profil erfasst Grocero Haushaltsgröße, Ernährungsweise, Bedarfe und Vorlieben und erstellt daraus wöchentlich einen Warenkorb mit den benötigten Produkten in passenden Mengen. Grocero erinnert bedarfsgerecht an Nachschub und kann Rezepte scannen und direkt in einen Warenkorb mit passenden Produkten und Mengen umwandeln. Der Nutzer kann den automatisch erstellten Warenkorb bearbeiten oder ergänzen und ihn anschließend an unseren Kanalpartner REWE übergeben, der Checkout, Bezahlung und Lieferung übernimmt. Nach jeder Bestellung speichert Grocero bestätigte Produktauswahlen und lernt aus Korrekturen, bevorzugten Marken, regelmäßig gekauften Artikeln und Einkaufsrhythmen. Dadurch werden spätere Warenkörbe genauer und benötigen kaum Anpassungen. Nutzer sparen Zeit und mentale Energie und müssen sich nicht um die Planung, Produktsuche und Organisation des Wocheneinkaufs kümmern.
            </p>
          </div>

          <div className="bg-[#357A2C] rounded-[2rem] px-6 py-8 md:px-10 md:py-10 mb-12 text-white">
            <p className="font-body text-[10px] font-semibold tracking-widest text-[#B7E0A0] mb-3">VISION</p>
            <p className="font-display font-bold text-2xl md:text-4xl leading-tight max-w-5xl">Der wöchentliche Lebensmitteleinkauf soll keine Aufgabe mehr sein, die man erledigt, sondern eine Entscheidung, die man bestätigt.</p>
          </div>

          <div className="mb-12">
            <div className="flex items-end justify-between gap-8 mb-8">
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#4EA845] font-body mb-3">SO FUNKTIONIERT ES</p>
                <h3 className="font-display font-bold text-[#1F2B1C] text-2xl md:text-3xl leading-tight max-w-2xl">Vom persönlichen Profil zum bestellbaren Warenkorb.</h3>
              </div>
              <div className="hidden md:block relative w-[150px] h-[183px] flex-shrink-0" aria-hidden="true">
                <div className="absolute bottom-0 right-0 origin-bottom-right scale-75">
                  <MascotWaving />
                </div>
              </div>
            </div>
            <div className="relative max-w-4xl">
              <div className="absolute left-[19px] top-5 bottom-5 w-px bg-[#B7E0A0]" aria-hidden="true" />
              <ol>
              {[
                { title: 'Profil personalisieren', text: 'Bei der Registrierung beantwortet der Nutzer sechs Fragen zu Wohnort, Haushaltsgröße, Ernährungsweise, Vorlieben und typischem Bedarf.' },
                { title: 'Ersten Warenkorb erstellen', text: 'Auf Basis des Profils wählt Grocero benötigte Produkte aus, berechnet passende Mengen für den Haushalt und erstellt den ersten Warenkorb, der auf der Landingpage zur Bearbeitung angezeigt wird. Dafür ist keine Bestellhistorie notwendig.' },
                { title: 'Weiteren Bedarf aufnehmen', text: 'Der Nutzer kann eigene Rezepte scannen. Grocero ordnet den Rezeptzutaten passende Produkte und Mengen zu. Mit einem Klick fügt der Nutzer sie dem Warenkorb hinzu. Weitere Artikel lassen sich schnell per Chat und später auch per Barcode ergänzen.' },
                { title: 'Warenkorb prüfen', text: 'Der Nutzer öffnet die Warenkorbansicht, prüft den Warenkorb, passt Produktmengen an und entfernt oder ergänzt Artikel nach Bedarf.' },
                { title: 'Verfügbarkeit und Ersatz klären', text: 'Grocero zeigt nicht verfügbare Produkte und mehrere mögliche Ersatzartikel an, aus denen der Nutzer vor der Bestellung auswählen kann.' },
                { title: 'An REWE übergeben', text: 'Der fertige Warenkorb soll über eine geplante API-Integration an REWE übergeben werden. REWE übernimmt Checkout, Bezahlung und Lieferung.' },
              ].map((step, i) => (
                <li key={step.title} className="relative flex gap-5 pb-7 last:pb-0">
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-[#4EA845] flex items-center justify-center">
                    <span className="font-display font-bold text-xs text-white">{i + 1}</span>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-display font-bold text-[#357A2C] text-base mb-1">{step.title}</h4>
                    <p className="font-body text-[#5B6B58] text-sm leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
              </ol>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-[#D99A2B] font-body">ZENTRALE PRODUKTHYPOTHESEN</p>
              <span className="bg-[#FFF3DA] border border-[#D99A2B] rounded-full px-3 py-1 text-[10px] font-semibold text-[#D99A2B] font-body">OFFEN · NICHT VALIDIERT</span>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { n: '01', label: 'NUTZEN', text: 'Ein vorbereiteter Warenkorb reduziert Zeit- und Planungsaufwand sowie Entscheidungsmüdigkeit.' },
                { n: '02', label: 'TREFFERQUALITÄT', text: 'Das persönliche Profil reicht für einen relevanten ersten Warenkorb, der nur wenige Korrekturen benötigt.' },
                { n: '03', label: 'ZAHLUNGSBEREITSCHAFT', text: 'Haushalte sind bereit, für einen Einkaufsassistenten zu zahlen, der ihnen Zeit und Planungsaufwand abnimmt.' },
              ].map((hypothesis) => (
                <div key={hypothesis.n} className="bg-white border border-[#E4EAE1] rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display font-bold text-xl text-[#D99A2B]">{hypothesis.n}</span>
                    <p className="font-body text-[10px] font-semibold tracking-widest text-[#D99A2B]">{hypothesis.label}</p>
                  </div>
                  <p className="font-body text-[#1F2B1C] text-sm leading-relaxed">{hypothesis.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="geschaeft" className="border-t border-[#E4EAE1] mt-16 pt-16 scroll-mt-24">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[#4EA845] font-body mb-3">GESCHÄFTSMODELL</p>
            <h3 className="font-display font-bold text-[#1F2B1C] text-2xl md:text-3xl leading-tight mb-8">Ein Freemium-Modell für einen bequemeren Wocheneinkauf.</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#EAF6E7] border border-[#B7E0A0] rounded-2xl p-6">
                <ol className="flex flex-col gap-5">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#4EA845] text-white font-display font-bold text-xs flex items-center justify-center">1</span>
                    <p className="font-body text-[#357A2C] text-sm leading-relaxed"><span className="font-semibold">Kostenlose Version:</span> Automatischer Warenkorb aus dem Haushaltsprofil. Spätere Bestellungen verfeinern Produktauswahl und Erinnerungen.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#4EA845] text-white font-display font-bold text-xs flex items-center justify-center">2</span>
                    <p className="font-body text-[#357A2C] text-sm leading-relaxed"><span className="font-semibold">Premium-Konto für 3,99 € pro Monat:</span> Zugang zu Funktionen wie dem Rezept- und Fotoimport, der Verwaltung von Mehrpersonenhaushalten und der vorausschauenden Nachschuberkennung.</p>
                  </li>
                </ol>
              </div>
              <div className="bg-[#EAF6E7] border border-[#B7E0A0] rounded-2xl p-6">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#4EA845] font-body mb-4">EINNAHMEN</p>
                <p className="font-body text-[#357A2C] text-sm leading-relaxed">Kundenabonnements bilden die Haupteinnahmequelle. Als zusätzliche Einnahmequelle ist eine CPA-Provision für an REWE vermittelte Neukunden vorgesehen. REWE ist Kanalpartner und übernimmt Sortiment, Checkout und Lieferung.</p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── 05 MVP ─── */}
        <section id="mvp" className="mb-24">
          <Eyebrow>MVP-SCOPE</Eyebrow>
          <SectionTitle>Ein fokussierter Scope entsteht durch bewusstes Weglassen.</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-[#E4EAE1] rounded-2xl p-6">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-[#4EA845] font-body mb-4">MVP</p>
              <ul className="flex flex-col gap-2">
                {['Sechs Onboarding-Fragen', 'Automatischer Grundkorb', 'Warenkorb prüfen und korrigieren', 'Produktverfügbarkeit und Ersatz vorab klären', 'Übergabe an REWE'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 font-body text-sm text-[#1F2B1C]">
                    <div className="w-4 h-4 rounded-full bg-[#EAF6E7] border border-[#B7E0A0] flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4EA845]" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#E4EAE1] rounded-2xl p-6">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-[#8A908A] font-body mb-4">BEWUSST SPÄTER</p>
              <ul className="flex flex-col gap-2">
                {['Rezeptimport mit Produktzuordnung', 'Produkt per Chat ergänzen', 'Barcode-Scan', 'Breiter Fokus auf Angebote und Coupons', 'Mehrere Händler zum Start'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 font-body text-sm text-[#8A908A]">
                    <div className="w-4 h-4 rounded-full border border-[#E4EAE1] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </section>

        <Divider />

        {/* ─── 06 PROTOTYP ─── */}
        <section id="prototyp" className="mb-24 bg-[#EAF6E7] rounded-[2rem] px-6 py-8 md:px-10 md:py-10">
          <Eyebrow>TESTBARER PROTOTYP</Eyebrow>
          <div className="grid md:grid-cols-[minmax(0,1fr)_340px] gap-10 lg:gap-16 items-center">
            <div>
              <SectionTitle>Vom MVP-Scope zum interaktiven Prototyp.</SectionTitle>
              <p className="font-body text-[#5B6B58] text-base leading-relaxed mb-8 max-w-xl">
                Nach der Priorisierung des Scopes habe ich in Claude Design einen klickbaren Prototyp erstellt, der die grundlegenden Funktionen des Produkts abbildet. Der Prototyp zeigt den vollständigen Ablauf vom Haushaltsprofil bis zur Übergabe des Warenkorbs an REWE.
              </p>
              <PrimaryButton href="https://grocero1.vercel.app/">Prototyp selbst ausprobieren</PrimaryButton>
            </div>

            <figure>
              <video
                controls
                playsInline
                preload="metadata"
                poster="/grocero-prototype-poster.png"
                aria-label="Grocero-Prototyp: vom Onboarding bis zur Übergabe an REWE"
                className="block w-full max-w-[340px] mx-auto shadow-[0_18px_45px_rgba(46,107,41,0.18)]"
              >
                <source src="/grocero-prototype-walkthrough.mp4" type="video/mp4" />
                Dein Browser kann dieses Video nicht abspielen.
              </video>
              <figcaption className="font-body text-[#5B6B58] text-xs text-center mt-4">
                Vom Onboarding bis zur Übergabe des Warenkorbs an REWE
              </figcaption>
            </figure>
          </div>
        </section>

        <Divider />

        {/* ─── 07 ROADMAP ─── */}
        <section id="roadmap" className="mb-24">
          <Eyebrow>ROADMAP</Eyebrow>
          <h2 className="font-display font-bold text-[#1F2B1C] text-2xl md:text-3xl leading-tight mb-8">Vom ersten Warenkorb zur wiederkehrenden Nutzung.</h2>

          {/* Roadmap columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                col: 'NOW', color: 'bg-[#4EA845]',
                items: [
                  { title: 'Automatischen Warenkorb anhand von sechs Onboarding-Fragen erstellen', metric: 'Warenkorbakzeptanzrate nach Abschluss des Onboardings > 70 %' },
                  { title: 'Warenkorb durch den Nutzer bearbeiten', metric: 'Ziel: weniger als 4 Korrekturen pro Warenkorb' },
                  { title: 'Wöchentliche Nutzung etablieren', metric: 'Rückkehrquote in Woche 2 > 50 %; die Bearbeitungsrate sinkt wöchentlich' },
                  'API-Integration mit REWE und Produktdatenbasis aufbauen',
                  'Datenschutzeinwilligung und Profildaten absichern',
                ],
              },
              {
                col: 'NEXT', color: 'bg-[#4EA845]',
                items: [
                  { title: 'Personalisierung des Wochenkorbs verbessern', metric: 'Bearbeitungsrate bis Woche 4 um ≥ 30 % senken; weniger als 2 Korrekturen pro Warenkorb' },
                  { title: 'Produktverfügbarkeit und Ersatzartikel absichern', metric: 'Mindestens 2 Ersatzoptionen; Akzeptanzrate der Ersatzartikel > 60 %' },
                  { title: 'Zahlungsbereitschaft per Fake-Door-Test prüfen', metric: 'Conversion-Rate > 8 %; über CPA bestätigte REWE-Neukunden' },
                  'Bedarfsprognose anhand wiederholt gekaufter Artikel verbessern',
                  { title: 'Zeitersparnis gegenüber Supermarkt-Apps messen', metric: 'Etwa 5 statt mindestens 20 Minuten; Ergänzungen in unter 3 Minuten' },
                ],
              },
              {
                col: 'LATER', color: 'bg-[#4EA845]',
                items: ['Rezept- und Fotoimport mit Produktzuordnung', 'Barcode-Scan für schnelle Ergänzungen', 'Händlerangebote in den Warenkorb integrieren', 'Mehrpersonenhaushalte', 'Zweiten Händler anbinden'],
              },
              {
                col: 'TRASH', color: 'bg-[#D96B6B]', surface: 'bg-[#FFF1F1]',
                items: ['Kein Produktkatalog; Artikel werden mithilfe einer Chat-Assistentin zum Warenkorb hinzugefügt', 'Kein eigener Checkout und keine Lieferfenster; der Abschluss erfolgt bei REWE'],
              },
            ].map(col => (
              <div key={col.col} className={`${col.surface ?? 'bg-white'} border border-[#E4EAE1] rounded-2xl overflow-hidden flex flex-col ${col.col === 'TRASH' ? 'self-start' : ''}`}>
                <div className={`${col.color} px-5 py-3`}>
                  <p className="font-display font-bold text-white text-sm tracking-widest">{col.col}</p>
                </div>
                <ul className={`flex flex-col divide-y divide-[#E4EAE1] ${col.col === 'LATER' ? 'flex-1' : ''}`}>
                  {col.items.map((item, i) => (
                    <li key={i} className={`px-5 py-3.5 font-body text-sm text-[#5B6B58] leading-relaxed ${col.col === 'LATER' ? 'flex-1 flex items-center' : ''}`}>
                      {typeof item === 'string' ? item : (
                        <>
                          <p>{item.title}</p>
                          <p className="text-[11px] text-[#357A2C] mt-1.5 leading-relaxed">{item.metric}</p>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ─── 08 LEARNINGS ─── */}
        <section id="learnings" className="mb-24">
          <Eyebrow>LEARNINGS</Eyebrow>
          <SectionTitle>Von der ersten Idee zum fokussierten Produktkonzept.</SectionTitle>

          <div className="relative flex flex-col gap-9 mb-10 max-w-4xl">
            <LearningBlock
              num="01"
              title="Research hat meine Produktidee verändert."
              body="Die Interviews veränderten meine ursprüngliche Hypothese über einen schnelleren Online-Lebensmitteleinkauf. Der Fokus verlagerte sich auf die Planung des Wocheneinkaufs und die Erstellung eines automatischen Warenkorbs."
            />
            <LearningBlock
              num="02"
              title="Produktentwicklung ist nicht linear."
              body="Viele Zusammenhänge und Funktionen wurden erst im Prozess sichtbar. Neue Impulse machten Annahmen konkreter und führten teilweise dazu, das ursprüngliche Produktkonzept neu zu denken."
            />
            <LearningBlock
              num="03"
              title="Feedback von Nutzern in den gesamten Prozess einbeziehen."
              body="Der klickbare Prototyp ist die erste Visualisierung des Produkts, belegt aber weder Nachfrage noch Nutzbarkeit. Deshalb habe ich Tests zu Usability, Zahlungsbereitschaft und Warenkorbqualität entworfen, um das Produkt an die Bedürfnisse der Nutzer anzupassen. Als Nächstes führe ich diese Tests durch und leite Änderungen aus dem beobachteten Verhalten ab."
            />
            <LearningBlock
              num="04"
              title="Ein MVP entsteht durch bewusstes Weglassen."
              body="Für das MVP musste ich Zielgruppen, Funktionen und Hypothesen priorisieren. Ich habe gelernt, dass ein klarer Scope nicht bedeutet, möglichst viele sinnvolle Funktionen abzubilden. Entscheidend ist, vorab festzulegen, für wen welches Problem zuerst gelöst wird und welche Annahmen und Funktionen als Nächstes getestet werden."
            />
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#E4EAE1] bg-[#F4F8F1]">
        <div className="max-w-[1100px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#4EA845]" />
            <span className="font-display font-bold text-[#1F2B1C] text-sm">grocero</span>
          </div>
          <p className="font-body text-[12px] text-[#8A908A] text-center">
            © 2026 Theonymfi Dryleraki · Product Management · Berlin
          </p>
          <a href="https://grocero1.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="font-body text-[12px] text-[#4EA845] hover:text-[#357A2C] transition-colors font-medium">
            grocero1.vercel.app →
          </a>
        </div>
      </footer>
    </div>
  )
}
