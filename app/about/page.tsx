import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  HeartHandshake,
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  Building2,
  Users,
} from "lucide-react";

const clientSectors = [
  {
    title: "Healthcare & hospitals",
    description: "Housekeeping, security and patient-care support for healthcare environments.",
    icon: HeartHandshake,
  },
  {
    title: "Offices & workplaces",
    description: "Facility teams that help workplaces stay clean, safe and welcoming.",
    icon: Building2,
  },
  {
    title: "Home-care settings",
    description: "Compassionate assistance with daily activities and personal care.",
    icon: Users,
  },
  {
    title: "Shared spaces & facilities",
    description: "Housekeeping, security and upkeep for the spaces people use every day.",
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero page-hero-photo">
        <Image
          src="/images/about.webp"
          alt="Facility services team"
          fill
          priority
        />
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <div className="eyebrow light">
            <span /> ABOUT SATYA
          </div>
          <h1>
            Care for spaces.
            <br />
            <em>Respect for people.</em>
          </h1>
          <p>
            SATYA provides trained security, housekeeping, patient care,
            gardening and cleaning teams that help workplaces, healthcare
            facilities and shared spaces stay safe, welcoming and cared for
            every single day.
          </p>
        </div>
      </section>
      <section className="section intro-section">
        <div className="container intro-grid">
          <div className="intro-visual intro-visual-large">
            <div className="intro-image-frame">
              <Image
                src="/images/about.webp"
                alt="SATYA Facility Services team"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 48vw"
              />
            </div>
            <div className="intro-trust-card">
              <div className="intro-trust-icon">
                <ShieldCheck size={29} />
              </div>
              <div>
                <span>YOUR TRUSTED FACILITY PARTNER</span>
                <strong>People First.</strong>
                <small>Excellence in Every Service</small>
              </div>
            </div>
          </div>
          <div className="intro-copy">
            <div className="eyebrow">
              <span /> WHO WE ARE
            </div>
            <h2>
              <em>The care behind every</em>
              <br />
              well-managed space.
            </h2>
            <div className="intro-heading-line" />
            <p className="lead">
              A well-managed space is more than what you see. It's the comfort
              of a clean environment, the confidence of reliable security and
              the reassurance of having the right care when it matters.
            </p>
            <p>
              SATYA Facility Services Pvt. Ltd. brings professional cleaning,
              housekeeping, security, patient care and manpower support
              together under one roof. We help workplaces and healthcare
              environments stay clean, secure and well-managed with services
              built around their everyday needs.
            </p>
            <p>
              From maintaining your space to supporting the people in it, we
              take care of the essentials that make everyday life and work run
              smoothly.
            </p>
            <div className="intro-points">
              <span><CheckCircle2 /> Professional service</span>
              <span><CheckCircle2 /> Support that fits your needs</span>
              <span><CheckCircle2 /> People-first service</span>
              <span><CheckCircle2 /> One reliable service partner</span>
            </div>
            <div className="intro-bottom">
              <Link className="text-link" href="/services">
                Explore our services <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="client-list-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span /> SECTORS WE SUPPORT
              </div>
              <h2>
                Spaces we
                <br />
                <em>help care for.</em>
              </h2>
            </div>
            <p>
              Our facility and care teams support healthcare, workplace and
              shared environments.
            </p>
          </div>
          <div className="client-list-grid">
            {clientSectors.map(({ title, description, icon: Icon }, index) => (
              <article className="client-list-card" key={title}>
                <span className="client-list-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon aria-hidden="true" />
                <strong>{title}</strong>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="values-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span /> WHAT GUIDES US
              </div>
              <h2>
                Our purpose.
                <br />
                <em>Our principles.</em>
              </h2>
            </div>
            <p>
              The values reflected in the way SATYA presents its services and
              people.
            </p>
          </div>
          <div className="values-grid">
            <article className="guide-card">
              <span className="guide-card-number">01</span>
              <span className="guide-card-icon"><Target /></span>
              <h3>Our mission</h3>
              <p>
                To provide dependable facility support through trained teams,
                practical routines and a commitment to service quality.
              </p>
            </article>
            <article className="guide-card">
              <span className="guide-card-number">02</span>
              <span className="guide-card-icon"><Eye /></span>
              <h3>Our vision</h3>
              <p>
                To help create cleaner spaces, safer environments and brighter
                everyday experiences.
              </p>
            </article>
            <article className="guide-card">
              <span className="guide-card-number">03</span>
              <span className="guide-card-icon"><HeartHandshake /></span>
              <h3>Our values</h3>
              <p>
                Professionalism, reliability, trust, compassion and respect for
                the people who use every space.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-promise">
        <div className="container promise-grid">
          <div>
            <div className="eyebrow">
              <span /> WHAT YOU CAN EXPECT
            </div>
            <h2>
              Our promise is
              <br />
              <em>in the way we work.</em>
            </h2>
          </div>
          <div className="promise-list">
            <p>
              <CheckCircle2 /> Trained & verified staff
            </p>
            <p>
              <CheckCircle2 /> Uniformed professionals
            </p>
            <p>
              <CheckCircle2 /> Quality service assurance
            </p>
            <p>
              <CheckCircle2 /> Punctual and customized support
            </p>
            <p>
              <CheckCircle2 /> Reliable and trustworthy service teams
            </p>
          </div>
        </div>
      </section>


    </>
  );
}
