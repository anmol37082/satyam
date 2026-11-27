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
        <em>The care behind every</em>
        <br />
        well-managed space.
      </h2>

      <div className="intro-heading-line" />

      <p className="lead">
        A well-managed space is more than what you see. It's the comfort of a
        clean environment, the confidence of reliable security and the
        reassurance of having the right care when it matters.
      </p>

      <p>
        SATYA Facility Services Pvt. Ltd. brings professional cleaning,
        housekeeping, security, patient care and manpower support together
        under one roof. We help workplaces and healthcare environments stay
        clean, secure and well-managed with services built around their
        everyday needs.
      </p>

      <p>
        From maintaining your space to supporting the people in it, we take
        care of the essentials that make everyday life and work run smoothly.
      </p>

      <div className="intro-points">
        <span>
          <CheckCircle2 /> Professional service
        </span>
        <span>
          <CheckCircle2 /> Support that fits your needs
        </span>
        <span>
          <CheckCircle2 /> People-first service
        </span>
        <span>
          <CheckCircle2 /> One reliable service partner
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
              The Difference Is
              <br />
              <em>in How We Deliver.</em>
            </h2>
            <p>
              A well-managed facility takes more than people on-site. It takes
              accountability, organised operations and consistent service
              standards. At SATYA Facility Services Pvt. Ltd. we bring the
              people, processes and expertise together to keep your facility
              running at its best.
            </p>
            <Link className="btn btn-lime" href="/about">
              Discover the SATYA Difference <ArrowUpRight size={17} />
            </Link>
          </div>
          <ScrollReveal className="difference-cards reveal-stagger">
            <article>
              <span>01</span>
              <ShieldCheck />
              <h3>The right people for the job</h3>
              <p>
                Trained, verified personnel deliver dependable security,
                housekeeping and manpower support for your facility.
              </p>
            </article>
            <article>
              <span>02</span>
              <ClipboardCheck />
              <h3>Standards that show in every space</h3>
              <p>
                Planned routines, effective cleaning methods and safe practices
                keep your premises consistently well-maintained.
              </p>
            </article>
            <article>
              <span>03</span>
              <Sparkles />
              <h3>Quality you can count on</h3>
              <p>
                Regular monitoring and careful execution uphold our
                housekeeping, security and cleaning standards.
              </p>
            </article>
            <article>
              <span>04</span>
              <HeartHandshake />
              <h3>Multiple services. One point of responsibility.</h3>
              <p>
                Bring security, specialist cleaning, patient care and manpower
                together with one reliable service partner.
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
                <span /> COMPLETE FACILITY SOLUTIONS.
              </div>
              <h2>
                <em>ONE PROFESSIONAL TEAM.</em>
              </h2>
            </div>
            <p>
              From maintaining clean and organised premises to providing
              dependable security and personal care assistance, SATYA brings
              essential facility services together to support the smooth
              functioning of your space.
            </p>
          </div>
          <div className="services-grid">
            <ServiceCard
              service={services[0]}
              index={0}
              tagline="Trusted Security. Greater Confidence."
              description={<>Our <strong>professional security services</strong> provide trained guards to help keep your premises secure.</>}
              cta="Explore Security Services"
            />
            <ServiceCard
              service={services[1]}
              index={1}
              title="Housekeeping & Cleaning Services"
              tagline="Clean Spaces. Consistent Standards."
              description={<>Our <strong>professional housekeeping</strong> and <strong>commercial cleaning services</strong> keep workplaces clean and presentable.</>}
              cta="Explore Cleaning Services"
            />
            <ServiceCard
              service={services[2]}
              index={2}
              title="Patient Care Services"
              tagline="Personal Care. Professional Assistance."
              description={<>Our <strong>home patient care</strong>, <strong>General Duty Assistant</strong> and <strong>elderly caretaker services</strong> support everyday care.</>}
              cta="Explore Patient Care"
            />
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
                A clear approach.
                <br />
                <em>Better results.</em>
              </h2>
            </div>
            <p>
              We understand your facility's needs, plan the right services and
              set clear standards to keep your space running smoothly.
            </p>
          </div>
          <div className="process-grid">
            <article>
              <MapPin />
              <h3>Understand your requirements</h3>
              <p>
                We assess your premises and daily needs, from <strong>commercial
                cleaning services</strong> and housekeeping to security and
                patient care.
              </p>
            </article>
            <article>
              <Users />
              <h3>Plan the right support</h3>
              <p>
                We match services and manpower to your needs, from
                <strong> security guard services</strong> to <strong>General
                Duty Assistant services</strong>.
              </p>
            </article>
            <article>
              <ClipboardCheck />
              <h3>Establish clear standards</h3>
              <p>
                We set clear schedules and routines for <strong>professional
                housekeeping services</strong> and <strong>commercial cleaning
                services</strong>.
              </p>
            </article>
            <article>
              <Star />
              <h3>Maintain service standards</h3>
              <p>
                Regular supervision and review help keep service consistent and
                your premises clean, secure and well-managed.
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
            </Link>
            <Link href="/gallery" className="preview-tile">
              <Image
                src={gallery[2]}
                alt="SATYA floor cleaning service brochure"
                fill
                sizes="30vw"
              />
            </Link>
            <Link href="/gallery" className="preview-tile">
              <Image
                src={gallery[1]}
                alt="SATYA patient care brochure"
                fill
                sizes="30vw"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span /> CLIENT EXPERIENCES
              </div>
              <h2>
                Trusted service.
                <br />
                <em>Real feedback.</em>
              </h2>
            </div>
            <p className="testimonials-intro">
              We value the experiences of the people and teams we support.
            </p>
            <Link className="btn btn-dark testimonials-read-all" href="/reviews">
              Read all <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="testimonials-grid">
            {["Facility management", "Housekeeping", "Patient care"].map((service) => (
              <article className="testimonial-card" key={service}>
                <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
                <span className="testimonial-label">{service}</span>
                <p>Approved client feedback will appear here.</p>
                <div className="testimonial-author">
                  <span className="testimonial-avatar" aria-hidden="true">SATYA</span>
                  <span>
                    <strong>Client name</strong>
                    <small>Organization</small>
                  </span>
                </div>
              </article>
            ))}
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
              SATYAâ€™s brochure highlights service locations across the Tricity
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
