import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Database, Smartphone, Cpu, Layers3, ExternalLink,
  Sparkles, Terminal, ChevronRight
} from 'lucide-react'

const GITHUB = 'https://github.com/JuliaSilva7'
const LINKEDIN = 'https://www.linkedin.com/in/julia-silva7788/'
const EMAIL = 'seu.email@exemplo.com' // Troque pelo seu e-mail profissional.

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Ford Competitiva',
    category: 'Mobile',
    subtitle: 'Experiência mobile para o universo automotivo',
    description: 'Aplicativo mobile com telas de login, catálogo de veículos, comparação, análise e suporte. Projeto desenvolvido com React Native e Expo.',
    tags: ['React Native', 'Expo', 'JavaScript'],
    icon: Smartphone,
    visual: 'ford',
    github: `${GITHUB}?tab=repositories`,
    demo: '',
    status: 'Aplicativo mobile',
  },
  {
    id: 2,
    number: '02',
    title: 'Estoque Hospitalar Inteligente',
    category: 'Software',
    subtitle: 'Mais visibilidade para materiais hospitalares',
    description: 'Proposta de sistema para acompanhar estoque, validade e movimentações de materiais, com leitura de códigos de barras e priorização inteligente.',
    tags: ['Python', 'IoT', 'Dados', 'Automação'],
    icon: Cpu,
    visual: 'hospital',
    github: `${GITHUB}?tab=repositories`,
    demo: '',
    status: 'Sistema inteligente',
  },
  {
    id: 3,
    number: '03',
    title: 'E-Masters · Fórmula E',
    category: 'Web',
    subtitle: 'Estratégia, corrida e pontuação',
    description: 'Conceito de jogo em que participantes escolhem pilotos e equipes para corridas e classificatórias, somando pontos conforme o desempenho.',
    tags: ['JavaScript', 'Lógica', 'UI/UX'],
    icon: Layers3,
    visual: 'racing',
    github: `${GITHUB}?tab=repositories`,
    demo: '',
    status: 'Jogo de estratégia',
  },
  {
    id: 4,
    number: '04',
    title: 'Notas de Corte · Dados',
    category: 'Dados',
    subtitle: 'Da extração de documentos a dados organizados',
    description: 'Pipeline em desenvolvimento para extrair dados de PDFs e planilhas, normalizar informações de cursos e relacionar ofertas com notas de corte.',
    tags: ['Python', 'Pandas', 'Excel', 'SQL'],
    icon: Database,
    visual: 'data',
    github: `${GITHUB}?tab=repositories`,
    demo: '',
    status: 'Análise de dados',
  },
]

const skills = [
  { title: 'Desenvolvimento', icon: Code2, items: ['JavaScript', 'React', 'React Native', 'HTML & CSS', 'Java', 'Python'] },
  { title: 'Dados & BI', icon: Database, items: ['SQL', 'Pandas', 'Power BI', 'Excel', 'ETL', 'Visualização de dados'] },
  { title: 'Ferramentas', icon: Terminal, items: ['Git & GitHub', 'VS Code', 'Visual Studio', 'Expo', 'Kanban'] },
]

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['Sobre', '#sobre'], ['Projetos', '#projetos'], ['Habilidades', '#habilidades'], ['Contato', '#contato']]
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Julia Silva, início">
        <span className="brand-mark">JS<span>.</span></span>
        <span className="brand-name">JULIA SILVA <small>PORTFÓLIO</small></span>
      </a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contato" onClick={() => setMenuOpen(false)}>Vamos conversar <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  )
}

function ProjectVisual({ project }) {
  const Icon = project.icon
  return (
    <div className={`project-visual visual-${project.visual}`}>
      <div className="visual-topline"><span>CASE STUDY / {project.number}</span><span className="visual-live"><i /> PORTFÓLIO</span></div>
      {project.visual === 'ford' && (
        <div className="car-scene">
          <div className="car-orbit orbit-one" /><div className="car-orbit orbit-two" />
          <div className="car-shape"><div className="car-window" /><div className="car-wheel wheel-left" /><div className="car-wheel wheel-right" /><div className="car-light" /></div>
          <span className="scene-label">MOBILITY / 01</span>
        </div>
      )}
      {project.visual === 'hospital' && (
        <div className="hospital-scene">
          <div className="medical-cross">+</div>
          <div className="stock-panel"><span>INVENTÁRIO</span><strong>98.4<span>%</span></strong><div className="stock-bar"><i /></div><small>Índice de disponibilidade</small></div>
          <div className="stock-dots"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
      )}
      {project.visual === 'racing' && (
        <div className="race-scene"><div className="race-track" /><div className="race-glow" /><div className="race-car"><span /></div><div className="race-number">E<span>·</span>01</div><div className="race-label">ELECTRIC RACING / STRATEGY</div></div>
      )}
      {project.visual === 'data' && (
        <div className="data-scene"><div className="data-number">DATA<span>→</span></div><div className="chart-bars">{[34, 52, 43, 76, 58, 91, 67, 100, 79, 88].map((height, i) => <i key={i} style={{ height: `${height}%`, animationDelay: `${i * 70}ms` }} />)}</div><div className="data-footer"><span>PDF / XLSX</span><span>PYTHON PIPELINE</span></div></div>
      )}
      <div className="visual-icon"><Icon size={17} /></div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card" data-reveal style={{ '--delay': `${index * 90}ms` }}>
      <ProjectVisual project={project} />
      <div className="project-body">
        <div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">Ver no GitHub <ArrowUpRight size={15} /></a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Demo <ExternalLink size={14} /></a>}
        </div>
      </div>
    </article>
  )
}

function App() {
  useReveal()
  const [filter, setFilter] = useState('Todos')
  const filters = ['Todos', 'Web', 'Mobile', 'Dados', 'Software']
  const visibleProjects = useMemo(() => filter === 'Todos' ? projects : projects.filter(project => project.category === filter), [filter])

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <Header />
      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> DISPONÍVEL PARA OPORTUNIDADES</div>
            <h1>Transformando<br />ideias em <span className="gradient-text">soluções</span><br />digitais<span className="accent-dot">.</span></h1>
            <p className="hero-description">Olá, eu sou a Julia — estudante de Engenharia de Software, apaixonada por tecnologia, desenvolvimento e dados. Gosto de transformar problemas reais em experiências digitais úteis.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">Explorar projetos <ArrowDownRight size={17} /></a>
              <a className="button button-ghost" href="#contato">Entrar em contato <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={12} /></a>
              <span className="social-divider" />
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={12} /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Ilustração abstrata de código e tecnologia">
            <div className="art-grid" />
            <div className="art-ring ring-a" /><div className="art-ring ring-b" /><div className="art-ring ring-c" />
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>julia.dev</small></div>
              <div className="code-lines">
                <p><i>01</i><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</p>
                <p><i>02</i>&nbsp;&nbsp; name: <span className="code-green">'Julia Silva'</span>,</p>
                <p><i>03</i>&nbsp;&nbsp; focus: <span className="code-green">'software'</span>,</p>
                <p><i>04</i>&nbsp;&nbsp; curious: <span className="code-orange">true</span>,</p>
                <p><i>05</i>&nbsp;&nbsp; learning: <span className="code-purple">always</span></p>
                <p><i>06</i>{'}'}<span className="cursor">▋</span></p>
              </div>
              <div className="window-footer"><span><span className="tiny-green" /> SYSTEM READY</span><span>UTF-8</span></div>
            </div>
            <div className="floating-chip chip-top"><Code2 size={15} /><span>Clean code</span></div>
            <div className="floating-chip chip-bottom"><Database size={15} /><span>Data-driven</span></div>
            <div className="art-caption"><span>FIG. 01</span><span>IDEAS IN MOTION</span></div>
          </div>
          <a className="scroll-cue" href="#sobre"><span className="scroll-line" /> ROLE PARA EXPLORAR <ArrowDownRight size={13} /></a>
        </section>

        <section className="intro-strip" id="sobre">
          <div className="section-wrap intro-inner">
            <span className="section-kicker">01 / SOBRE MIM</span>
            <p>Construindo meu caminho na tecnologia com <em>curiosidade, consistência</em> e vontade de aprender fazendo.</p>
            <div className="intro-note"><Sparkles size={17} /><span>Engenharia de Software<br /><small>FIAP · Em formação</small></span></div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projetos">
          <div className="section-heading" data-reveal>
            <div><span className="section-kicker">02 / TRABALHOS SELECIONADOS</span><h2>Projetos em <span className="gradient-text">destaque.</span></h2></div>
            <p>Ideias, estudos e soluções que representam minha evolução e meus interesses na área de tecnologia.</p>
          </div>
          <div className="filter-row" aria-label="Filtrar projetos">
            <div className="filter-buttons">{filters.map(item => <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'filter active' : 'filter'}>{item}</button>)}</div>
            <span className="project-count">0{visibleProjects.length} PROJETOS</span>
          </div>
          <div className="project-grid">{visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        </section>

        <section className="skills-section" id="habilidades">
          <div className="section-wrap">
            <div className="section-heading" data-reveal>
              <div><span className="section-kicker">03 / CAIXA DE FERRAMENTAS</span><h2>Tecnologias que <span className="gradient-text">exploro.</span></h2></div>
              <p>Ferramentas que venho estudando e aplicando em projetos acadêmicos e pessoais.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return <article className="skill-card" data-reveal key={skill.title} style={{ '--delay': `${index * 100}ms` }}>
                  <div className="skill-icon"><Icon size={21} /></div>
                  <h3>{skill.title}</h3>
                  <div className="skill-items">{skill.items.map(item => <span key={item}>{item}<ChevronRight size={12} /></span>)}</div>
                </article>
              })}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contato">
          <div className="contact-card" data-reveal>
            <div className="contact-orb" />
            <span className="section-kicker">04 / PRÓXIMO PASSO</span>
            <h2>Vamos criar algo<br /><span className="gradient-text">que faça a diferença?</span></h2>
            <p>Estou aberta a oportunidades de estágio, colaboração e novos desafios em tecnologia.</p>
            <a className="button button-primary contact-button" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Oportunidade profissional')}`}> <Mail size={17} /> Vamos conversar <ArrowUpRight size={16} /></a>
            <div className="contact-socials"><a href={GITHUB} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a></div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">JS<span>.</span></span><span className="brand-name">JULIA SILVA <small>PORTFÓLIO</small></span></a>
        <span>Desenvolvido com curiosidade e café. <span className="footer-heart">♥</span></span>
        <a className="back-top" href="#inicio">VOLTAR AO TOPO <ArrowUpRight size={13} /></a>
      </footer>
    </div>
  )
}

export default App
