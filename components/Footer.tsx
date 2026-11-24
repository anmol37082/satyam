
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Users,
  Handshake,
  ChevronRight,
  Shield,
  Brush,
  Layers,
} from "lucide-react";
import { contact } from "@/lib/data";

const exploreLinks = [
  { label: "About SATYA", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our people", href: "/team" },
];

const services = [
  {
    label: "Security services",
    href: "/services/security-services",
    icon: Shield,
  },
  {
    label: "Housekeeping",
    href: "/services/housekeeping-services",
    icon: Brush,
  },
  {
    label: "Patient care",
    href: "/services/patient-care-services",
    icon: Users,
  },
  {
    label: "Floor cleaning",
    href: "/services/single-disc-floor-cleaning",
    icon: Layers,
  },
];

const trustPoints = [
  { label: "Professional", icon: ShieldCheck },
  { label: "Reliable", icon: Users },
  { label: "Trustworthy", icon: Handshake },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Brand column */}
          <div className="footer-about">
            <Link href="/" className="footer-brand">
              <Image
                src="/logo.png"
                alt="SATYA Facility Services"
                width={112}
                height={112}
              />
              <span className="footer-brand-name">
                <strong>SATYA<sup>®</sup></strong>
                <small>FACILITY SERVICES</small>
              </span>
            </Link>

            <p className="footer-description">
              Clean spaces. Safer environments. Brighter tomorrow.
              Your trusted partner for complete facility management
              solutions.
            </p>

            <div className="footer-trust">
              {trustPoints.map(({ label, icon: Icon }) => (
                <div className="footer-trust-item" key={label}>
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Explore column */}
          <div className="footer-column">
            <h4>Explore</h4>
            <span className="footer-heading-line" />

            <div className="footer-links">
              {exploreLinks.map((item) => (
                <Link href={item.href} key={item.label}>
                  <ChevronRight aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="footer-column">
            <h4>Our Services</h4>
            <span className="footer-heading-line" />

            <div className="footer-services">
              {services.map(({ label, href, icon: Icon }) => (
                <Link href={href} key={label}>
                  <span className="footer-service-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div className="footer-column footer-contact">
            <h4>Contact Us</h4>
            <span className="footer-heading-line" />

            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <MapPin />
                </span>
                <p>{contact.address}</p>
              </div>

              <a
                className="footer-contact-item"
                href="tel:+919815088606"
              >
                <span className="footer-contact-icon">
                  <Phone />
                </span>
                <p>{contact.phone1}</p>
              </a>

              <a
                className="footer-contact-item"
                href="tel:+917717440566"
              >
                <span className="footer-contact-icon">
                  <Phone />
                </span>
                <p>{contact.phone2}</p>
              </a>

              <a
                className="footer-contact-item"
                href={`mailto:${contact.email}`}
              >
                <span className="footer-contact-icon">
                  <Mail />
                </span>
                <p>{contact.email}</p>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">

          <div className="footer-copyright">
            <span>
              © {new Date().getFullYear()} SATYA Facility Services Pvt. Ltd.
              All rights reserved.
            </span>

            <span className="footer-credit-divider" />

            <a
              href="https://imazineus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit"
            >
              <ArrowUpRight aria-hidden="true" />
              <span>
                Designed by <strong>Imazine Us</strong>
              </span>
              <Heart aria-hidden="true" className="footer-heart" />
            </a>
          </div>

          <div className="footer-bottom-right">
            <span>Mohali · Kharar · Zirakpur · Panchkula</span>

            <Link href="/contact">
              Get in touch <ArrowUpRight />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
