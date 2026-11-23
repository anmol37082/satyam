import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const roles = [
  {
    name: "Security Professionals",
    description:
      "Male and female security guards supporting safer premises, surveillance and site requirements.",
    href: "/services/security-services",
    Icon: ShieldCheck,
  },
  {
    name: "Housekeeping Teams",
    description:
      "Uniformed and trained professionals focused on clean, organised and hygienic environments.",
    href: "/services/housekeeping-services",
    Icon: Sparkles,
  },
  {
    name: "Patient Care Attendants",
    description:
      "Compassionate assistance with personal care, daily activities and companionship.",
    href: "/services/patient-care-services",
    Icon: HeartHandshake,
  },
  {
    name: "Cleaning Specialists",
    description:
      "Team members supporting glass cleaning and single-disc machine floor care.",
    href: "/services",
    Icon: Users,
  },
  {
    name: "Gardening & Site Support",
    description:
      "People who help care for green spaces and the everyday appearance of a facility.",
    href: "/services/gardening-landscaping",
    Icon: Users,
  },
  {
    name: "Training & Supervision",
    description:
      "A focus on proper techniques, daily schedules, cleaning materials and safety precautions.",
    href: "/services/housekeeping-staff-training",
    Icon: GraduationCap,
  },
];

export default function Team() {
  return (
    <>
      <section className="page-hero page-hero-photo">
        <Image
          src="/images/satya-team-hero.png"
          alt="Professional facility service team"
          fill
          priority
          sizes="100vw"
        />
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <div className="eyebrow light">
            <span /> OUR PEOPLE
          </div>
          <h1>
            People make
            <br />
            <em>the difference.</em>
          </h1>
          <p>
            Behind every clean, safe and welcoming space is a team that cares
            about the work.
          </p>
        </div>
      </section>

      <section className="section team-page-section">
        <div className="container">
          <div className="team-intro">
            <div>
              <div className="eyebrow">
                <span /> THE PEOPLE OF SATYA
              </div>
              <h2>
                Professional teams.
                <br />
                <em>Human touch.</em>
              </h2>
              <p className="lead">
                Our people are at the heart of the services we provide.
              </p>
              <p>
                From security and housekeeping to patient care and specialist
                cleaning, SATYA’s service portfolio depends on people who
                understand their responsibilities and take pride in
                professional presentation.
              </p>
              <p>
                Our brochure highlights trained and verified staff, uniformed
                professionals, strict supervision and housekeeping staff
                training.
              </p>
              <Link className="text-link" href="/contact">
                Talk to our team <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="team-image">
              <Image
                src="/images/satya-team-hero.png"
                alt="SATYA facility services professionals"
                fill
                sizes="(max-width: 700px) 100vw, 45vw"
              />
            </div>
          </div>

          <div className="section-heading team-roles-heading">
            <div>
              <div className="eyebrow">
                <span /> OUR SERVICE TEAMS
              </div>
              <h2>
                Different roles.
                <br />
                <em>One shared standard.</em>
              </h2>
            </div>
            <p>
              Explore the teams and responsibilities represented across
              SATYA’s service portfolio.
            </p>
          </div>

          <div className="role-grid">
            {roles.map(({ name, description, href, Icon }, index) => (
              <article key={name}>
                <span className="team-role-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="team-role-icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{name}</h3>
                <p>{description}</p>
                <Link href={href} className="team-role-link">
                  Explore service <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>

          <p className="team-disclaimer">
            Individual employee names and portraits were not included in the
            supplied brochures. This page therefore presents service-team roles
            rather than inventing staff identities.
          </p>
        </div>
      </section>


    </>
  );
}
