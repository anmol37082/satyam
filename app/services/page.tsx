import Image from "next/image";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
export default function Services() {
  return (
    <>
      <section className="page-hero page-hero-photo">
        <Image
          src="/images/satya-team-hero.png"
          alt="SATYA facility service team"
          fill
          priority
        />
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <div className="eyebrow light">
            <span /> OUR SERVICES
          </div>
          <h1>
            Every service.
            <br />
            <em>One commitment.</em>
          </h1>
          <p>
            SATYA brings security, housekeeping, patient care, gardening and
            specialist cleaning together in one integrated facility support
            plan, delivered by trained teams for workplaces, healthcare
            facilities and shared spaces.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span /> OUR SERVICE PORTFOLIO
              </div>
              <h2>
                COMPLETE FACILITY SOLUTIONS.
                <br />
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
          <div className="services-grid service-directory-grid">
            {services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                service={s}
                index={i}
                title={
                  s.slug === "housekeeping-services"
                    ? "Housekeeping & Cleaning Services"
                    : undefined
                }
                cta={
                  s.slug === "security-services"
                    ? "Explore Security Services"
                    : s.slug === "housekeeping-services"
                      ? "Explore Cleaning Services"
                      : s.slug === "patient-care-services"
                        ? "Explore Patient Care"
                        : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
