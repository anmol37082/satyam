import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { contact, serviceImages, services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const planningSteps = [
  {
    title: "Understand your site",
    text: "Share your location, daily activity and the service support you need.",
    Icon: MapPin,
  },
  {
    title: "Plan the right support",
    text: "Discuss the service scope and manpower that fit your requirement.",
    Icon: Users,
  },
  {
    title: "Agree on clear routines",
    text: "Set expectations for schedules, responsibilities and site needs.",
    Icon: ClipboardCheck,
  },
];

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const otherServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <section className="page-hero service-detail-hero">
        <Image
          className="service-detail-hero-image"
          src={serviceImages[service.slug]}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="service-detail-hero-shade" aria-hidden="true" />
        <div className="container">
          <Link className="back-link" href="/services">
            <ArrowLeft size={15} /> All services
          </Link>
          <div className="eyebrow light">
            <span /> {service.eyebrow}
          </div>
          <h1>{service.name}</h1>
          <p>
            {service.name} from SATYA brings trained and verified staff, clear
            daily routines, strict supervision and dependable support, helping
            your workplace, healthcare facility or shared space stay safe,
            clean and running smoothly every day.
          </p>
          <a className="btn btn-lime service-hero-cta" href="#service-overview">
            Explore this service <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="section service-overview-section" id="service-overview">
        <div className="container detail-grid service-overview-grid">
          <div className="detail-copy service-overview-copy">
            <div className="eyebrow">
              <span /> SERVICE OVERVIEW
            </div>
            <h2>
              Support shaped around
              <br />
              <em>your site.</em>
            </h2>
            <p className="lead">{service.detail}</p>
            <div className="service-fit-note">
              <span>GOOD FIT FOR</span>
              <p>{service.fit}</p>
            </div>
            <Link className="text-link" href="/contact">
              Discuss your requirement <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="detail-image service-overview-image">
            <Image
              src={serviceImages[service.slug]}
              alt={`${service.name} by SATYA Facility Services`}
              fill
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <div className="detail-image-tag">
              <b>SATYA</b>
              <span>{service.name}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="service-scope-section section">
        <div className="container">
          <div className="section-heading service-detail-heading">
            <div>
              <div className="eyebrow">
                <span /> WHAT’S INCLUDED
              </div>
              <h2>
                Service support,
                <br />
                <em>clearly outlined.</em>
              </h2>
            </div>
            <p>
              Explore the key areas covered by SATYA’s {service.name.toLowerCase()} service.
              The final scope can be discussed around your site requirements.
            </p>
          </div>
          <div className="service-scope-grid">
            {service.points.map((point, index) => (
              <article key={point}>
                <span className="service-scope-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <CheckCircle2 aria-hidden="true" />
                <h3>{point}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-planning-section section">
        <div className="container">
          <div className="eyebrow">
            <span /> HOW TO GET STARTED
          </div>
          <div className="service-planning-heading">
            <h2>
              A clear plan for
              <br />
              <em>your facility.</em>
            </h2>
            <p>
              Start with your site needs, then discuss the right service support
              and expectations with our team.
            </p>
          </div>
          <div className="service-planning-grid">
            {planningSteps.map(({ title, text, Icon }, index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-contact-band">
        <div className="container service-contact-inner">
          <div>
            <div className="eyebrow light">
              <span /> LET’S DISCUSS YOUR REQUIREMENT
            </div>
            <h2>
              Need {service.name.toLowerCase()}?
              <br />
              <em>Let’s talk.</em>
            </h2>
            <p>Tell us about your site and the support you’re looking for.</p>
          </div>
          <div className="service-contact-actions">
            <Link className="btn btn-lime" href="/contact">
              Contact our team <ArrowUpRight size={17} />
            </Link>
            <a href={`tel:+91${contact.phone1}`}>
              <Phone size={16} /> +91 {contact.phone1}
            </a>
          </div>
        </div>
      </section>

      <section className="section related-services-section">
        <div className="container">
          <div className="section-heading service-detail-heading">
            <div>
              <div className="eyebrow">
                <span /> MORE FROM SATYA
              </div>
              <h2>
                Explore other
                <br />
                <em>services.</em>
              </h2>
            </div>
            <Link className="text-link" href="/services">
              View all services <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="related-services-grid">
            {otherServices.map((item) => (
              <Link href={`/services/${item.slug}`} key={item.slug}>
                <span>{item.eyebrow}</span>
                <h3>{item.name}</h3>
                <p>{item.short}</p>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
