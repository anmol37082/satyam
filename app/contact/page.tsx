"use client";
import Image from "next/image";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
  Send,
  CheckCircle2,
} from "lucide-react";
import { contact } from "@/lib/data";
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="page-hero page-hero-photo">
        <Image
          src="/images/satya-team-hero.png"
          alt="SATYA facility services team"
          fill
          priority
          sizes="100vw"
        />
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <div className="eyebrow light">
            <span /> CONTACT SATYA
          </div>
          <h1>
            Let’s talk about
            <br />
            <em>your space.</em>
          </h1>
          <p>
            Tell us what your facility needs — security, housekeeping, patient
            care, gardening or specialist cleaning — and our trained teams will
            be happy to start a conversation and plan the right support with
            you.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow">
              <span /> GET IN TOUCH
            </div>
            <h2>
              We’re just a<br />
              <em>conversation away.</em>
            </h2>
            <p className="lead">
              Reach out for service enquiries, site requirements or a complete
              facility support discussion.
            </p>
            <div className="contact-cards">
              <a href={`tel:+91${contact.phone1}`}>
                <Phone />
                <span>
                  <small>CALL US</small>
                  <b>+91 {contact.phone1}</b>
                </span>
              </a>
              <a href={`tel:+91${contact.phone2}`}>
                <Phone />
                <span>
                  <small>ALTERNATE NUMBER</small>
                  <b>+91 {contact.phone2}</b>
                </span>
              </a>
              <a href={`mailto:${contact.email}`}>
                <Mail />
                <span>
                  <small>EMAIL US</small>
                  <b>{contact.email}</b>
                </span>
              </a>
              <div>
                <MapPin />
                <span>
                  <small>VISIT US</small>
                  <b>{contact.address}</b>
                </span>
              </div>
            </div>
            <div className="contact-area">
              <b>Service areas highlighted in our brochure</b>
              <div>
                <span>Mohali</span>
                <span>Kharar</span>
                <span>Zirakpur</span>
                <span>Panchkula</span>
              </div>
            </div>
            <div className="hours-note">
              <Clock3 />
              <span>Call or email us to discuss your requirement.</span>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <span className="form-kicker">START A CONVERSATION</span>
            <h3>Tell us what you need.</h3>
            <p>
              Share a few details about your facility and the service you’re
              looking for.
            </p>
            <div className="form-row">
              <label>
                Your name
                <input required placeholder="Full name" />
              </label>
              <label>
                Phone number
                <input required type="tel" placeholder="+91" />
              </label>
            </div>
            <label>
              Email address
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Service you’re interested in
              <select defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Security Services</option>
                <option>Housekeeping Services</option>
                <option>Patient Care Services</option>
                <option>Gardening & Landscaping</option>
                <option>Glass Cleaning Services</option>
                <option>Single Disc Floor Cleaning</option>
                <option>Housekeeping Staff Training</option>
                <option>Uniforms & Manpower Supply</option>
                <option>Office Cleaning Services</option>
                <option>Hospitality Staff</option>
                <option>Complete Facility Management</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              How can we help?
              <textarea
                rows={5}
                placeholder="Tell us about your facility or requirement..."
              />
            </label>
            <button className="btn btn-dark" type="submit">
              Submit enquiry <Send size={16} />
            </button>
            {sent && (
              <p className="form-notice">
                <CheckCircle2 /> This is a frontend-only enquiry preview. No
                message was sent. Please call or email SATYA directly using the
                details shown.
              </p>
            )}
            <small className="form-footnote">
              Frontend form preview — no backend or database connected.
            </small>
          </form>
        </div>
      </section>
      <section className="map-section">
        <div className="container map-card">
          <div>
            <div className="eyebrow">
              <span /> FIND US
            </div>
            <h2>
              Visit our office
              <br />
              <em>in Mohali.</em>
            </h2>
            <p>{contact.address}</p>
            <a
              className="text-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/search/?api=1&query=Plot+No+775+JLPL+Sector+82+Mohali+Punjab"
            >
              Open in Google Maps <ArrowUpRight size={16} />
            </a>
          </div>
          <a
            className="map-visual"
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/search/?api=1&query=Plot+No+775+JLPL+Sector+82+Mohali+Punjab"
          >
            <MapPin size={38} />
            <b>SATYA Facility Services</b>
            <span>Plot No. 775 · JLPL · Sector 82 · Mohali</span>
            <small>
              VIEW LOCATION <ArrowUpRight size={13} />
            </small>
          </a>
        </div>
      </section>
    </>
  );
}
