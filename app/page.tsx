import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  Users,
  ClipboardCheck,
  Clock3,
  MapPin,
  Building2,
  Leaf,
  Star,
} from "lucide-react";
import { services, gallery } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import HeroSlider from "@/components/HeroSlider";
import ScrollReveal from "@/components/ScrollReveal";
export default function Home() {
  return (
    <>
      <HeroSlider />
      <section className="service-ribbon">
        <div className="container ribbon-inner">
          <div className="ribbon-track">
            {[0, 1].map((copy) => (
              <div
                className="ribbon-group"
                aria-hidden={copy === 1 ? "true" : undefined}
                key={copy}
              >
                <span>SECURITY</span><i />
                <span>HOUSEKEEPING</span><i />
                <span>PATIENT CARE</span><i />
                <span>DEEP CLEANING</span><i />
                <span>LANDSCAPING</span><i />
                <span>MANPOWER</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    
<section className="section intro-section">
  <div className="container intro-grid">

    {/* LEFT IMAGE */}
    <div className="intro-visual intro-visual-large">
      <div className="intro-image-frame">
        <Image
          src="./images/about.webp"
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

    {/* RIGHT CONTENT */}
    <div className="intro-copy">

      <div className="eyebrow">
        <span /> WHO WE ARE
      </div>

      <h2>
        One partner.
        <br />
        <em>Peace of mind.</em>
      </h2>

      <div className="intro-heading-line" />

      <p className="lead">
        Well-managed spaces go beyond clean floors: they bring safety,
        care, consistency and a team proud of its work.
      </p>

      <p>
        SATYA Facility Services Pvt. Ltd. provides security, housekeeping,
        patient care, specialist cleaning, landscaping and manpower
        support—with the right people and clear service routines.
      </p>

      <p>
        We help workplaces, healthcare environments and shared spaces
        run smoothly every day.
      </p>

      <div className="intro-points">
        <span>
          <CheckCircle2 /> Professional presentation
        </span>
        <span>
          <CheckCircle2 /> Site-focused support
        </span>
        <span>
          <CheckCircle2 /> People-first service
        </span>
      </div>

      <div className="intro-bottom">
        <Link className="text-link" href="/about">
          Get to know SATYA <ArrowUpRight size={18} />
        </Link>
        <span className="intro-bottom-note">
          Our story, people & promise
        </span>
      </div>

    </div>
  </div>
</section>

      <section className="difference-section">
        <div className="container difference-grid">
          <div>
            <div className="eyebrow light">
              <span /> THE SATYA DIFFERENCE
            </div>
            <h2>
              Not just a service.
              <br />
              <em>A standard of care.</em>
            </h2>
            <p>
              We believe reliable facility management comes from the right
              people, clear expectations and attention to the everyday details
              that are easy to overlook.
            </p>
            <Link className="btn btn-lime" href="/about">
              Why SATYA <ArrowUpRight size={17} />
            </Link>
          </div>
          <ScrollReveal className="difference-cards reveal-stagger">
            <article>
              <span>01</span>
              <ShieldCheck />
              <h3>People you can rely on</h3>
              <p>
                Trained and verified staff, uniformed professionals and security
                manpower for site requirements.
              </p>
            </article>
            <article>
              <span>02</span>
              <ClipboardCheck />
              <h3>Work with a process</h3>
              <p>
                Daily cleaning schedules, proper techniques, use of cleaning
                materials and safety precautions.
              </p>
            </article>
            <article>
              <span>03</span>
              <Sparkles />
              <h3>Quality in the details</h3>
              <p>
                Service assurance, strict supervision and attention to the way
                every space looks and feels.
              </p>
            </article>
            <article>
              <span>04</span>
              <HeartHandshake />
              <h3>Solutions shaped around you</h3>
              <p>
                Customized support for your facility, from a single service to a
                combination of essential services.
              </p>
            </article>
          </ScrollReveal>
        </div>
      </section>
      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span /> WHAT WE DO
              </div>
              <h2>
                Complete support.
                <br />
                <em>One trusted team.</em>
              </h2>
            </div>
            <p>
              Explore our facility services — each designed to support cleaner,
              safer and more welcoming environments.
            </p>
          </div>
          <div className="services-grid">
            {services.slice(0, 3).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="services-explore">
            <Link className="btn btn-dark" href="/services">
              Explore more <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="process-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span /> HOW WE WORK
              </div>
              <h2>
                A thoughtful process.
                <br />
                <em>A better-run space.</em>
              </h2>
            </div>
            <p>
              We keep the approach clear and practical — so service expectations
              are understood from the start.
            </p>
          </div>
          <div className="process-grid">
            <article>
              <MapPin />
              <h3>Understand your space</h3>
              <p>
                We start with your site, its daily activity and the services you
                need.
              </p>
            </article>
            <article>
              <Users />
              <h3>Plan the right team</h3>
              <p>
                Identify the right service support and manpower for the
                requirement.
              </p>
            </article>
            <article>
              <ClipboardCheck />
              <h3>Set clear routines</h3>
              <p>
                Agree on schedules, responsibilities, cleaning practices and
                site expectations.
              </p>
            </article>
            <article>
              <Star />
              <h3>Focus on consistency</h3>
              <p>
                Support the environment with supervision, service assurance and
                attention to detail.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="visual-banner">
        <div className="visual-banner-image">
          <Image
            src="/images/satya-team-hero.png"
            alt="Professional facility team"
            fill
            sizes="100vw"
          />
        </div>
        <div className="visual-banner-overlay" />
        <div className="container visual-banner-content">
          <span className="eyebrow light">THE PEOPLE BEHIND THE PROMISE</span>
          <h2>
            Great spaces are
            <br />
            made by <em>great people.</em>
          </h2>
          <p>
            From security professionals to housekeeping teams and patient care
            attendants, every role contributes to a better experience.
          </p>
          <Link className="btn btn-lime" href="/team">
            Meet our service teams <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section gallery-preview">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span /> FROM OUR BROCHURES
              </div>
              <h2>
                A closer look at
                <br />
                <em>the SATYA portfolio.</em>
              </h2>
            </div>
            <Link className="text-link" href="/gallery">
              View all 16 visuals <ArrowRight size={17} />
            </Link>
          </div>
          <div className="preview-grid">
            <Link href="/gallery" className="preview-main">
              <Image
                src={gallery[0]}
                alt="SATYA facility services overview"
                fill
                sizes="60vw"
              />
              <span>
                COMPLETE FACILITY SOLUTIONS <ArrowUpRight />
              </span>
            </Link>
            <Link href="/gallery" className="preview-tile">
              <Image
                src={gallery[2]}
                alt="SATYA floor cleaning service brochure"
                fill
                sizes="30vw"
              />
              <span>SPECIALIST FLOOR CARE</span>
            </Link>
            <Link href="/gallery" className="preview-tile">
              <Image
                src={gallery[1]}
                alt="SATYA patient care brochure"
                fill
                sizes="30vw"
              />
              <span>PATIENT CARE</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="coverage-section">
        <div className="container coverage-inner">
          <div>
            <div className="eyebrow light">
              <span /> SERVICE PRESENCE
            </div>
            <h2>
              Rooted in the region.
              <br />
              <em>Ready to support.</em>
            </h2>
            <p>
              SATYA’s brochure highlights service locations across the Tricity
              and nearby areas.
            </p>
          </div>
          <div className="coverage-places">
            <span>
              <MapPin /> Mohali
            </span>
            <span>
              <MapPin /> Kharar
            </span>
            <span>
              <MapPin /> Zirakpur
            </span>
            <span>
              <MapPin /> Panchkula
            </span>
          </div>
        </div>
      </section>

    </>
  );
}
