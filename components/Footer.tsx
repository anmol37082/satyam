import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <span className="eyebrow light">
              LET’S MAKE YOUR SPACE WORK BETTER
            </span>
            <h2>
              One team. Many ways
              <br />
              <em>to make a difference.</em>
            </h2>
          </div>
          <Link className="btn btn-lime" href="/contact">
            Talk to SATYA <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">S</span>
            <span>
              <b>SATYA</b>
              <small>FACILITY SERVICES PVT. LTD.</small>
            </span>
          </Link>
          <p>
            Clean spaces. Safer environments. Brighter tomorrow. Your trusted
            partner for complete facility management solutions.
          </p>
          <div className="footer-tags">
            PROFESSIONAL <i /> RELIABLE <i /> TRUSTWORTHY
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/about">About SATYA</Link>
          <Link href="/services">Our services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/team">Our people</Link>
        </div>
        <div>
          <h4>Our services</h4>
          <Link href="/services/security-services">Security services</Link>
          <Link href="/services/housekeeping-services">Housekeeping</Link>
          <Link href="/services/patient-care-services">Patient care</Link>
          <Link href="/services/single-disc-floor-cleaning">
            Floor cleaning
          </Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p className="contact-line">
            <MapPin /> {contact.address}
          </p>
          <p className="contact-line">
            <Phone />
            <a href="tel:+919815088606">{contact.phone1}</a>
          </p>
          <p className="contact-line">
            <Phone />
            <a href="tel:+917717440566">{contact.phone2}</a>
          </p>
          <p className="contact-line">
            <Mail />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
      </div>
      <div className="container copyright">
        <span>
          © {new Date().getFullYear()} SATYA Facility Services Pvt. Ltd. All
          rights reserved.
        </span>
        <span>
          Mohali · Kharar · Zirakpur · Panchkula{" "}
          <Link href="/contact">
            Get in touch <ArrowUpRight size={13} />
          </Link>
        </span>
      </div>
    </footer>
  );
}
