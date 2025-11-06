"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  ClipboardCheck,
  Factory,
  LineChart,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
} from "lucide-react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const easeInOutSine = [0.37, 0, 0.63, 1] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: easeOutExpo },
};

const staggerChildren = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
  viewport: { once: true, amount: 0.2 },
};

const trustedBy = [
  "Red de Clínicas Vitae",
  "Grupo Hospitalario Norte",
  "Centro Quirúrgico Andes",
  "Municipio Salud Pública",
  "Clínica Integral",
];

const differentiators = [
  {
    title: "Abastecimiento Seguro",
    description:
      "Garantizamos cadenas certificadas y trazabilidad total desde el fabricante hasta su almacén clínico.",
    icon: ShieldCheck,
    highlight: "+326 auditorías superadas en 2024.",
  },
  {
    title: "Cobertura Just-In-Time",
    description:
      "Reposiciones programadas con sensores de stock que evitan urgencias, sobrecostos y desabasto.",
    icon: Truck,
    highlight: "Tiempo de respuesta promedio: 6h.",
  },
  {
    title: "Equipo Clínico Especializado",
    description:
      "Ingenieros biomédicos y enfermería instrumentista respaldan la selección óptima de insumos para cada especialidad.",
    icon: Stethoscope,
    highlight: "98% satisfacción en acompañamiento.",
  },
];

const capabilities = [
  {
    title: "Protocolos certificados",
    description:
      "Cumplimos ISO 13485, COFEPRIS y normativas FDA/EU MDR para un flujo seguro, auditado y verificable.",
    icon: ClipboardCheck,
  },
  {
    title: "Cobertura regional",
    description:
      "Centros logísticos en 5 ciudades permiten entregas nacionales con temperatura controlada.",
    icon: Truck,
  },
  {
    title: "Inteligencia de demanda",
    description:
      "Panel predictivo cruza historial de consumo con agendas quirúrgicas para anticipar necesidades.",
    icon: LineChart,
  },
  {
    title: "Buyers dedicados",
    description:
      "Negociación directa con laboratorios líderes para asegurar disponibilidad y mejores condiciones.",
    icon: Building2,
  },
];

const categories = [
  {
    name: "Instrumental Quirúrgico",
    body:
      "Instrumental alemán y japonés de alta precisión, listas personalizadas por cirugía y kits estériles.",
    stats: ["Más de 1,200 referencias", "Procesos de esterilización certificados"],
  },
  {
    name: "Implantes y prótesis",
    body:
      "Traumatología, ortopedia, cardiovascular y dental con stock estratégico para procedimientos urgentes.",
    stats: ["Acero, titanio y PEEK", "Contratos con marcas líderes"],
  },
  {
    name: "Descartables de alto giro",
    body:
      "Campos estériles, suturas, fluidos y dispositivos de un solo uso preparados para quirófano 24/7.",
    stats: ["Reposición automática", "Kits preconfigurados"],
  },
];

const processSteps = [
  {
    title: "Diagnóstico operativo",
    description:
      "Mapeamos consumos, rotación y criticidad para priorizar SKU vitales y detectar riesgos ocultos.",
  },
  {
    title: "Estandarización y homologación",
    description:
      "Seleccionamos proveedores, homologamos códigos y definimos lotes de seguridad por servicio.",
  },
  {
    title: "Integración tecnológica",
    description:
      "Conectamos nuestro hub con su ERP, agenda quirúrgica y bodegas con APIs y dashboards en vivo.",
  },
  {
    title: "Monitoreo continuo",
    description:
      "Seguimiento semanal con KPIs claros, alertas proactivas y planes de mejora continua.",
  },
];

const testimonials = [
  {
    quote:
      "Reducimos el desabasto crítico a cero y logramos una trazabilidad total incluso en procedimientos complejos.",
    author: "Dra. Gabriela Díaz",
    role: "Directora Quirúrgica · Hospital Ángeles Norte",
  },
  {
    quote:
      "Su modelo just-in-time nos permitió liberar 18% del presupuesto inmovilizado en inventario sin comprometer seguridad.",
    author: "Ing. Alejandro Suárez",
    role: "Director de Operaciones · Red Vitae",
  },
  {
    quote:
      "El acompañamiento clínico y la velocidad de respuesta hacen que Artemed sea un aliado estratégico, no solo un proveedor.",
    author: "Lic. Sofía Lozano",
    role: "Adquisiciones · Grupo San Martín",
  },
];

const benefits = [
  "Confirmación de disponibilidad en menos de 30 minutos",
  "Cobertura 24/7 para cirugías emergentes",
  "Dashboard con KPIs financieros y clínicos en tiempo real",
  "Integración con estándares HL7 y perfiles GS1",
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <BackgroundMotion />
      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 lg:px-10 lg:py-10">
          <Link
            href="#inicio"
            className="flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-brand-600 shadow-[0_10px_30px_-12px_rgba(16,70,179,0.35)]"
          >
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            Artemed Supply
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
            <NavLink href="#soluciones">Soluciones</NavLink>
            <NavLink href="#diferenciales">Diferenciales</NavLink>
            <NavLink href="#catalogo">Catálogo</NavLink>
            <NavLink href="#testimonios">Casos</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </nav>

          <Link
            href="#contacto"
            className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 lg:inline-flex"
          >
            Agenda un diagnóstico
            <ArrowRight className="h-4 w-4" />
          </Link>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 pb-32 lg:px-10 lg:pb-40">
          <section
            id="inicio"
            className="relative grid gap-12 overflow-hidden rounded-[32px] border border-white/20 bg-white/60 p-10 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl lg:grid-cols-[1.15fr_0.85fr] lg:p-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="flex flex-col gap-8"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-100 bg-brand-50/80 px-4 py-2 text-xs font-semibold uppercase text-brand-600">
                <Sparkles className="h-4 w-4 text-amber-400" />
                Inteligencia logística para quirófanos críticos
              </span>
              <h1 className="max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Material médico garantizado cuando su equipo quirúrgico lo
                necesita.
              </h1>
              <p className="max-w-xl text-lg text-slate-600">
                Diseñamos un ecosistema integral de abastecimiento para hospitales
                y centros de cirugía que requieren disponibilidad total, control
                de costos y cumplimiento normativo sin fricciones.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white transition hover:translate-y-0.5 hover:bg-brand-700"
                >
                  Solicitar propuesta personalizada
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#catalogo"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-7 py-3 text-sm font-semibold text-brand-600 transition hover:border-brand-200 hover:text-brand-700"
                >
                  Ver portafolio especializado
                </Link>
              </div>
              <ul className="flex flex-wrap gap-6 text-sm text-slate-500">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.1 }}
              className="relative flex flex-col justify-between gap-10 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-[0_20px_40px_-30px_rgba(30,99,241,0.45)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
                    Data en vivo
                  </p>
                  <p className="mt-2 text-4xl font-semibold text-slate-900">
                    99.4%
                  </p>
                  <p className="text-sm text-slate-500">
                    nivel de servicio en últimos 6 meses
                  </p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600">
                  <Factory className="h-7 w-7" />
                </div>
              </div>
              <div className="space-y-4">
                <MetricBar
                  label="Cirugías soportadas"
                  value="7.560"
                  progress={88}
                  accent="bg-brand-600"
                />
                <MetricBar
                  label="Reducción de urgencias"
                  value="21%"
                  progress={68}
                  accent="bg-emerald-400"
                />
                <MetricBar
                  label="Trazabilidad digital"
                  value="100%"
                  progress={100}
                  accent="bg-amber-400"
                />
              </div>
              <div className="rounded-2xl border border-white/60 bg-brand-50/70 p-5 text-sm text-slate-600">
                <p className="font-semibold text-brand-700">
                  Mesa de control 24/7
                </p>
                <p className="mt-1">
                  Análisis predictivo y alertas automáticas para quirófanos de
                  alta complejidad.
                </p>
              </div>
            </motion.div>
          </section>

          <motion.section
            id="soluciones"
            className="grid gap-8 rounded-[32px] border border-white/30 bg-white/70 p-10 backdrop-blur lg:grid-cols-[0.9fr_1.1fr] lg:p-16"
            {...staggerChildren}
          >
            <motion.div {...fadeInUp} className="space-y-6">
              <SectionEyebrow>Capacidades</SectionEyebrow>
              <SectionTitle>
                Operación integral de supply chain médico para organizaciones de
                alto desempeño.
              </SectionTitle>
              <p className="text-lg text-slate-600">
                Combinamos abastecimiento global, logística inteligente y soporte
                clínico especializado para garantizar continuidad en cada
                procedimiento crítico.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                <Badge>Punto de reorden dinámico</Badge>
                <Badge>Dashboards multi-sede</Badge>
                <Badge>Equipo biomédico propio</Badge>
                <Badge>Financiamiento a 60 días</Badge>
              </div>
            </motion.div>

            <motion.div
              className="grid gap-6 sm:grid-cols-2"
              {...staggerChildren}
            >
              {capabilities.map((capability) => (
                <motion.div
                  key={capability.title}
                  className="group flex flex-col gap-4 rounded-3xl border border-white/50 bg-white/80 p-6 shadow-[0_15px_35px_-25px_rgba(15,23,42,0.65)] transition hover:-translate-y-2"
                  {...fadeInUp}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                    <capability.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <section
            id="diferenciales"
            className="grid gap-8 rounded-[32px] border border-white/35 bg-white/70 p-10 backdrop-blur lg:grid-cols-3 lg:p-16"
          >
            <div className="space-y-6">
              <SectionEyebrow>Diferencial competitivo</SectionEyebrow>
              <SectionTitle>
                Nos enfocamos en mitigar riesgos clínicos y financieros para su
                operación.
              </SectionTitle>
              <p className="text-lg text-slate-600">
                Cada alianza inicia con un plan de continuidad quirúrgica,
                dashboards claros y responsables disponibles 24/7.
              </p>
            </div>
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                {...fadeInUp}
                className="glass-card relative flex flex-col gap-4 rounded-3xl p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/15 text-brand-600">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.description}</p>
                <p className="text-sm font-semibold text-brand-600">
                  {item.highlight}
                </p>
              </motion.div>
            ))}
          </section>

          <motion.section
            id="catalogo"
            className="grid gap-10 rounded-[32px] border border-white/40 bg-white/80 p-10 backdrop-blur lg:p-16"
            {...staggerChildren}
          >
            <motion.div {...fadeInUp} className="space-y-5">
              <SectionEyebrow>Portafolio</SectionEyebrow>
              <SectionTitle>
                Cobertura del 92% del consumo de material crítico en quirófanos.
              </SectionTitle>
              <p className="text-lg text-slate-600">
                Selección curada con disponibilidad inmediata, kits por
                especialidad y garantías extendidas para equipos de alta
                precisión.
              </p>
            </motion.div>
            <motion.div
              className="grid gap-6 lg:grid-cols-3"
              {...staggerChildren}
            >
              {categories.map((category) => (
                <motion.div
                  key={category.name}
                  {...fadeInUp}
                  className="flex flex-col gap-4 rounded-3xl border border-white/50 bg-white/80 p-6 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.55)]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {category.name}
                    </h3>
                    <Microscope className="h-5 w-5 text-brand-600" />
                  </div>
                  <p className="text-sm text-slate-600">{category.body}</p>
                  <ul className="mt-auto space-y-2 text-sm text-slate-500">
                    {category.stats.map((stat) => (
                      <li key={stat} className="flex items-center gap-2">
                        <div className="h-1.5 w-3 rounded-full bg-brand-600" />
                        {stat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="flex flex-col gap-3 rounded-3xl border border-brand-100 bg-brand-50/80 p-6 text-sm text-slate-600"
            >
              <span className="font-semibold uppercase tracking-[0.3em] text-brand-600">
                Trusted by
              </span>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-500">
                {trustedBy.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-brand-100 bg-white px-4 py-2"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.section>

          <section
            id="proceso"
            className="grid gap-10 rounded-[32px] border border-white/40 bg-white/75 p-10 backdrop-blur lg:grid-cols-[0.85fr_1.15fr] lg:p-16"
          >
            <div className="space-y-5">
              <SectionEyebrow>Proceso</SectionEyebrow>
              <SectionTitle>
                Aliados en cada punto crítico de la cadena de suministros.
              </SectionTitle>
              <p className="text-lg text-slate-600">
                Desde el diagnóstico hasta la mejora continua, combinamos datos
                en tiempo real y experiencia clínica para asegurar disponibilidad
                total.
              </p>
            </div>
            <div className="grid gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  {...fadeInUp}
                  className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/85 p-6"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-500 to-brand-700" />
                  <div className="ml-6 flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600/10 text-brand-600">
                      {index + 1}
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-base font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.section
            id="testimonios"
            className="grid gap-8 rounded-[32px] border border-white/45 bg-white/75 p-10 backdrop-blur lg:grid-cols-[0.8fr_1.2fr] lg:p-16"
            {...staggerChildren}
          >
            <motion.div {...fadeInUp} className="space-y-5">
              <SectionEyebrow>Resultados</SectionEyebrow>
              <SectionTitle>
                Historias reales de equipos quirúrgicos sin interrupciones.
              </SectionTitle>
              <p className="text-lg text-slate-600">
                Con Artemed Supply, nuestros aliados transforman la disponibilidad
                de insumos en ventaja competitiva frente a la presión asistencial.
              </p>
            </motion.div>
            <motion.div
              className="grid gap-6 md:grid-cols-2"
              {...staggerChildren}
            >
              {testimonials.map((testimonial) => (
                <motion.blockquote
                  key={testimonial.author}
                  {...fadeInUp}
                  className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-6 shadow-[0_20px_45px_-28px_rgba(30,99,241,0.5)]"
                >
                  <Sparkles className="absolute -top-8 right-6 h-16 w-16 text-brand-100" />
                  <p className="relative text-base font-medium text-slate-700">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-4 text-sm text-slate-500">
                    <p className="font-semibold text-slate-900">
                      {testimonial.author}
                    </p>
                    <p>{testimonial.role}</p>
                  </footer>
                </motion.blockquote>
              ))}
            </motion.div>
          </motion.section>

          <section
            id="contacto"
            className="relative overflow-hidden rounded-[32px] border border-brand-100 bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700 p-10 text-white shadow-[0_30px_70px_-35px_rgba(16,70,179,0.65)] lg:p-16"
          >
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-white/10 to-transparent lg:block" />
            <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <SectionEyebrow className="text-white/80">
                  Siguiente paso
                </SectionEyebrow>
                <h2 className="font-display text-4xl font-semibold leading-tight">
                  Solicite un diagnóstico expres y active un plan de continuidad
                  quirúrgica en 15 días.
                </h2>
                <p className="text-base text-white/80">
                  Un equipo consultivo mapea urgencias, rotación y presupuesto
                  para diseñar una hoja de ruta realista que reduzca riesgos de
                  inmediato.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <Badge variant="light">Implementación en 3 sprints</Badge>
                  <Badge variant="light">Soporte 24/7</Badge>
                  <Badge variant="light">Piloto sin riesgo</Badge>
                </div>
              </div>
              <form className="relative grid gap-4 rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Nombre y cargo
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Ej. Dra. Laura Martínez · Directora Quirúrgica"
                    className="h-12 rounded-full border border-white/30 bg-white/20 px-4 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Correo corporativo
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nombre@institucion.com"
                    className="h-12 rounded-full border border-white/30 bg-white/20 px-4 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="volume" className="text-sm font-semibold">
                    Volumen mensual aproximado
                  </label>
                  <select
                    id="volume"
                    name="volume"
                    className="h-12 rounded-full border border-white/30 bg-white/20 px-4 text-sm text-white focus:border-white focus:outline-none"
                  >
                    <option value="" className="text-slate-900">
                      Selecciona un rango
                    </option>
                    <option value="lt100" className="text-slate-900">
                      Menos de 100 procedimientos
                    </option>
                    <option value="100-300" className="text-slate-900">
                      100 - 300 procedimientos
                    </option>
                    <option value="gt300" className="text-slate-900">
                      Más de 300 procedimientos
                    </option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Necesidades prioritarias
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Detalle especialidades, sedes o retos principales."
                    className="rounded-3xl border border-white/30 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-600 transition hover:translate-y-0.5"
                >
                  Enviar solicitud
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-white/70">
                  Respondemos en menos de 4 horas hábiles. Información protegida
                  bajo NDA desde el primer contacto.
                </p>
              </form>
            </div>
          </section>
        </main>

        <footer className="mx-auto mt-24 flex w-full max-w-6xl flex-col gap-4 px-6 pb-16 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Artemed Supply. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-brand-600">
              Aviso de privacidad
            </Link>
            <Link href="#" className="hover:text-brand-600">
              Términos de servicio
            </Link>
            <Link href="#contacto" className="hover:text-brand-600">
              Soporte 24/7
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-sm text-slate-600 transition hover:text-brand-600"
    >
      <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 rounded-full bg-brand-600 transition-transform duration-300 ease-out hover:scale-x-100" />
      <span className="relative">{children}</span>
    </Link>
  );
}

function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-600",
        className,
      )}
    >
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
      {children}
    </h2>
  );
}

function Badge({
  children,
  variant = "solid",
}: {
  children: React.ReactNode;
  variant?: "solid" | "light";
}) {
  if (variant === "light") {
    return (
      <span className="rounded-full border border-white/40 bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
        {children}
      </span>
    );
  }

  return (
    <span className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
      {children}
    </span>
  );
}

function MetricBar({
  label,
  value,
  progress,
  accent,
}: {
  label: string;
  value: string;
  progress: number;
  accent: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-slate-600">
        <span>{label}</span>
        <span className="font-semibold text-slate-900">{value}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200/70">
        <div
          className={clsx("h-full rounded-full transition-all", accent)}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function BackgroundMotion() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-52 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-600/40 blur-[160px]"
        animate={{ opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: easeInOutSine }}
      />
      <motion.div
        className="absolute -bottom-48 left-20 h-[420px] w-[420px] rounded-full bg-emerald-400/35 blur-[140px]"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: easeInOutSine }}
      />
      <motion.div
        className="absolute -bottom-40 right-0 h-[360px] w-[360px] rounded-full bg-amber-400/25 blur-[160px]"
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: easeInOutSine }}
      />
    </div>
  );
}
