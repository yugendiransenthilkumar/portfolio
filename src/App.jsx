import { useEffect, useMemo, useRef, useState } from 'react'
import { profile, about, skills, projects, experience, achievements, fitKeywords } from './data'

const nav = ['About', 'Skills', 'Projects', 'Fit check', 'Experience', 'Contact']
const slug = (s) => s.toLowerCase().replace(/\s+/g, '-')

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('show')),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

const terminalLines = [
  { t: '$ javac Yugendiran.java && java Yugendiran', c: 'text-slate-400' },
  { t: '> name      : "Yugendiran Senthilkumar"', c: 'text-slate-200' },
  { t: '> role      : "Java Full Stack Developer"', c: 'text-slate-200' },
  { t: '> college   : "Jeppiaar Engineering College, 2027"', c: 'text-slate-200' },
  { t: '> stack     : [Java, Spring Boot, React, SQL]', c: 'text-slate-200' },
  { t: '> shipping  : SP Motors (live), Placement Portal', c: 'text-slate-200' },
  { t: '> status    : OPEN_TO_WORK', c: 'text-emerald-400' },
]

function Terminal() {
  const [run, setRun] = useState(0)
  const [shown, setShown] = useState([])
  const [typing, setTyping] = useState('')

  useEffect(() => {
    let cancelled = false
    setShown([])
    setTyping('')
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
    ;(async () => {
      for (const line of terminalLines) {
        for (let i = 1; i <= line.t.length; i++) {
          if (cancelled) return
          setTyping(line.t.slice(0, i))
          await sleep(line.t.startsWith('$') ? 28 : 12)
        }
        if (cancelled) return
        setShown((s) => [...s, line])
        setTyping('')
        await sleep(160)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [run])

  return (
    <div className="rounded-xl border border-line bg-panel/90 shadow-2xl shadow-sky-950/40 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-line bg-ink/60">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>
        <span className="font-mono text-xs text-slate-500">Yugendiran.java</span>
        <button
          onClick={() => setRun((r) => r + 1)}
          className="font-mono text-xs text-accent hover:text-white transition"
          aria-label="Replay terminal"
        >
          ↻ replay
        </button>
      </div>
      <div className="p-4 sm:p-5 font-mono text-[12.5px] sm:text-sm leading-7 min-h-[230px]">
        {shown.map((l, i) => (
          <div key={i} className={l.c}>{l.t}</div>
        ))}
        {shown.length < terminalLines.length && <div className="text-slate-200 caret">{typing}</div>}
        {shown.length === terminalLines.length && <div className="text-slate-500 caret">$ </div>}
      </div>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-ink/70 border-b border-line/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16">
        <a href="#top" className="font-mono font-semibold text-white">
          <span className="text-accent">&lt;</span>YS<span className="text-accent"> /&gt;</span>
        </a>
        <nav className="hidden md:flex gap-7 text-sm text-slate-400">
          {nav.map((n) => (
            <a key={n} href={`#${slug(n)}`} className="hover:text-white transition">{n}</a>
          ))}
        </nav>
        <button className="md:hidden text-slate-300" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
      {open && (
        <nav className="md:hidden flex flex-col px-5 pb-4 gap-3 text-slate-300">
          {nav.map((n) => (
            <a key={n} href={`#${slug(n)}`} onClick={() => setOpen(false)}>{n}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-5 py-20 sm:py-24 reveal">
      <p className="font-mono text-sm text-accent mb-2">{kicker}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">{title}</h2>
      {children}
    </section>
  )
}

const statusStyle = {
  Live: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',
  'In progress': 'bg-amber-400/10 text-amber-300 border-amber-400/30',
  Building: 'bg-sky-400/10 text-sky-300 border-sky-400/30',
  Completed: 'bg-slate-400/10 text-slate-300 border-slate-400/30',
}

function ProjectCard({ p, i }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="group rounded-xl border border-line bg-panel/60 p-6 hover:border-accent/50 transition flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="font-mono text-sm text-slate-500">{String(i + 1).padStart(2, '0')}</span>
        <span className={`font-mono text-[11px] px-2 py-0.5 rounded-full border ${statusStyle[p.status]}`}>
          {p.status === 'Live' && <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />}
          {p.status}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-white">{p.title}</h3>
      <p className="text-sm text-slate-400 mb-3">{p.subtitle}</p>
      <p className="text-slate-300 text-[15px] leading-relaxed mb-4">{p.summary}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {p.stack.map((s) => (
          <span key={s} className={`font-mono text-[11px] px-2 py-0.5 rounded bg-ink border border-line ${s === 'Java' ? 'text-java' : 'text-slate-400'}`}>{s}</span>
        ))}
      </div>
      {open && (
        <ul className="mb-5 space-y-2 text-sm text-slate-300 border-l-2 border-accent/40 pl-4">
          {p.how.map((h) => <li key={h}>{h}</li>)}
        </ul>
      )}
      <div className="mt-auto flex flex-wrap gap-4 text-sm font-medium">
        <button onClick={() => setOpen(!open)} className="text-accent hover:text-white transition">
          {open ? '− Hide how it works' : '+ How it works'}
        </button>
        {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">Live ↗</a>}
        {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">Code ↗</a>}
      </div>
    </article>
  )
}

function Projects() {
  const cats = ['All', ...new Set(projects.map((p) => p.category))]
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? projects : projects.filter((p) => p.category === cat)
  return (
    <Section id="projects" kicker="03 / projects" title="Things I've built">
      <div className="flex gap-2 mb-8">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`font-mono text-sm px-3.5 py-1.5 rounded-full border transition ${cat === c ? 'border-accent text-accent bg-accent/10' : 'border-line text-slate-400 hover:text-white'}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((p) => <ProjectCard key={p.title} p={p} i={projects.indexOf(p)} />)}
      </div>
      <p className="mt-8 text-slate-400 text-sm">
        More on{' '}
        <a className="text-accent hover:underline" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </p>
    </Section>
  )
}

function FitCheck() {
  const [jd, setJd] = useState('')
  const matches = useMemo(() => {
    const text = jd.toLowerCase()
    if (!text.trim()) return []
    const seen = new Set()
    return Object.entries(fitKeywords)
      .filter(([k]) => new RegExp(`(^|[^a-z])${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-z]|$)`).test(text))
      .filter(([, v]) => (seen.has(v) ? false : seen.add(v)))
  }, [jd])

  return (
    <Section id="fit-check" kicker="04 / for recruiters" title="Does my profile fit your role?">
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <p className="text-slate-400 mb-4">Paste a job description. I'll show where my skills and projects match.</p>
          <textarea
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            rows={9}
            placeholder="e.g. Looking for a Java developer intern with Spring Boot, REST APIs, SQL and Git…"
            className="w-full rounded-xl bg-panel border border-line p-4 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-accent"
          />
        </div>
        <div className="rounded-xl border border-line bg-panel/60 p-6">
          {matches.length === 0 ? (
            <p className="text-slate-500 font-mono text-sm">// matches will appear here</p>
          ) : (
            <>
              <p className="font-mono text-sm text-emerald-400 mb-4">{matches.length} match{matches.length > 1 ? 'es' : ''} found</p>
              <ul className="space-y-3">
                {matches.map(([k, v]) => (
                  <li key={k} className="flex gap-3 text-sm">
                    <span className="text-emerald-400">✓</span>
                    <span><span className="font-mono text-accent">{k}</span> <span className="text-slate-300">· {v}</span></span>
                  </li>
                ))}
              </ul>
              <a href={`mailto:${profile.email}?subject=Opportunity%20for%20Yugendiran`} className="inline-block mt-6 text-sm font-semibold text-ink bg-accent px-4 py-2 rounded-lg hover:bg-white transition">
                Let's talk →
              </a>
            </>
          )}
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const send = (e) => {
    e.preventDefault()
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Hello from your portfolio')}&body=${encodeURIComponent(body)}`
  }
  const input = 'w-full rounded-lg bg-ink border border-line px-4 py-3 text-sm focus:outline-none focus:border-accent'
  return (
    <Section id="contact" kicker="06 / contact" title="Let's build something">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Hiring a Java or full-stack intern, or have a project idea? My inbox is open.
          </p>
          <div className="space-y-3 font-mono text-sm">
            <a href={`mailto:${profile.email}`} className="block text-slate-300 hover:text-accent">✉ {profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-accent">in linkedin.com/in/yugendiran-senthilkumar</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-accent">⌥ github.com/yugendiransenthilkumar</a>
            <p className="text-slate-500">⌖ {profile.location}</p>
          </div>
        </div>
        <form onSubmit={send} className="rounded-xl border border-line bg-panel/60 p-6 space-y-4">
          <input required placeholder="Your name" className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required type="email" placeholder="Your email" className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea required rows={5} placeholder="Message" className={input} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button className="w-full font-semibold text-ink bg-accent rounded-lg py-3 hover:bg-white transition">Send message</button>
        </form>
      </div>
    </Section>
  )
}

export default function App() {
  useReveal()
  const year = new Date().getFullYear()
  return (
    <div id="top" className="relative">
      <div className="absolute inset-x-0 top-0 h-[720px] grid-bg pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[780px] rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <Header />

      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-5 pt-32 sm:pt-40 pb-16 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-300 border border-emerald-400/30 bg-emerald-400/10 rounded-full px-3 py-1 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> {profile.status}
          </div>
          <div className="flex items-center gap-5 mb-6">
            <img src={`${import.meta.env.BASE_URL}yugendiran.jpg`} alt="Yugendiran Senthilkumar" className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover ring-2 ring-accent/40" />
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
                {profile.name}
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-slate-500 mt-1">{profile.surname}</p>
            </div>
          </div>
          <p className="font-mono text-accent mb-4">{'// '}{profile.role}</p>
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed mb-8">{profile.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="font-semibold text-ink bg-accent px-5 py-3 rounded-lg hover:bg-white transition">See my work</a>
            <a href="#contact" className="font-semibold text-white border border-line px-5 py-3 rounded-lg hover:border-accent transition">Contact me</a>
          </div>
        </div>
        <Terminal />
      </section>

      <Section id="about" kicker="01 / about" title="Hi, I'm Yugendiran">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
            {about.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="grid grid-cols-2 gap-4 self-start">
            {[
              ['5', 'projects'],
              ['1', 'live product'],
              [profile.cgpa, 'CGPA'],
              ['2027', 'graduating'],
            ].map(([n, l]) => (
              <div key={l} className="rounded-xl border border-line bg-panel/60 p-5">
                <p className="text-3xl font-bold text-white">{n}</p>
                <p className="font-mono text-xs text-slate-500 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" kicker="02 / skills" title="My toolkit">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((g) => (
            <div key={g.group} className="rounded-xl border border-line bg-panel/60 p-6">
              <p className="font-mono text-sm text-slate-500 mb-4">{g.group}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className={`text-sm px-3 py-1 rounded-md border ${s === 'Java' ? 'border-java/40 text-java bg-java/10' : 'border-line text-slate-300'}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Projects />
      <FitCheck />

      <Section id="experience" kicker="05 / journey" title="Experience & education">
        <ol className="relative border-l border-line ml-2 space-y-10">
          {experience.map((e) => (
            <li key={e.role} className="pl-8 relative">
              <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-ink border-2 border-accent" />
              <p className="font-mono text-xs text-accent mb-1">{e.when}</p>
              <h3 className="text-lg font-semibold text-white">{e.role}</h3>
              <p className="text-slate-400 mb-2">{e.org}</p>
              <ul className="text-slate-300 space-y-1">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </li>
          ))}
        </ol>
        <h3 className="font-mono text-sm text-slate-500 mt-16 mb-5">recognition</h3>
        <div className="grid sm:grid-cols-3 gap-5">
          {achievements.map((a) => (
            <div key={a.title} className="rounded-xl border border-line bg-panel/60 p-5">
              <p className="text-2xl mb-2">🏆</p>
              <p className="font-semibold text-white">{a.title}</p>
              <p className="text-sm text-slate-400">{a.where}</p>
              {a.note && <p className="text-xs text-slate-500 mt-1">{a.note}</p>}
            </div>
          ))}
        </div>
      </Section>

      <Contact />

      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row gap-3 justify-between text-sm text-slate-500">
          <p>© {year} Yugendiran Senthilkumar</p>
          <p className="font-mono">Built with React, Vite & Tailwind · deployed on Vercel</p>
        </div>
      </footer>
    </div>
  )
}
