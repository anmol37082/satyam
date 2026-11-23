import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  HeartHandshake,
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
} from "lucide-react";
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
            Professional facility support shaped around the everyday needs of
            the places people live, work and receive care.
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
              ONE PARTNER.
              <br />
              <em>PEACE OF MIND.</em>
            </h2>
            <div className="intro-heading-line" />
            <p className="lead">
              SATYA Facility Services Pvt. Ltd. brings essential facility
              support together under one roof.
            </p>
            <p>
              Our portfolio includes security services, housekeeping, patient
              care, gardening and landscaping, glass cleaning, floor cleaning,
              training, uniforms and manpower support.
            </p>
            <p>
              We help workplaces, healthcare environments and shared spaces
              run smoothly with professional, reliable and trustworthy teams.
            </p>
            <div className="intro-points">
              <span><CheckCircle2 /> Professional presentation</span>
              <span><CheckCircle2 /> Site-focused support</span>
              <span><CheckCircle2 /> People-first service</span>
            </div>
            <div className="intro-bottom">
              <Link className="text-link" href="/services">
                Explore our services <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>      <section className="values-section section">
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
