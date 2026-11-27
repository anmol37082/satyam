import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brush,
  GraduationCap,
  HeartHandshake,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { serviceImages, services } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  sparkles: Sparkles,
  heart: HeartHandshake,
  sprout: Sprout,
  panels: PanelsTopLeft,
  brush: Brush,
  training: GraduationCap,
  users: Users,
};

export default function ServiceCard({
  service,
  title,
  tagline,
  description,
  cta,
}: {
  service: (typeof services)[number];
  index: number;
  title?: string;
  tagline?: string;
  description?: ReactNode;
  cta?: string;
}) {
  const Icon = icons[service.icon];

  return (
    <Link href={`/services/${service.slug}`} className="service-card">
      <div className="service-card-photo">
        <Image
          src={serviceImages[service.slug]}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
        />
      </div>
      <span className="service-card-icon">
        <Icon size={28} />
      </span>
      <div className="service-card-content">
        <h3>{title ?? service.name}</h3>
        {(tagline ?? service.tagline) && (
          <strong className="service-card-tagline">
            {tagline ?? service.tagline}
          </strong>
        )}
        <p>{description ?? service.short}</p>
        <span className="service-card-cta">
          {cta ?? `Explore ${title ?? service.name}`} <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
