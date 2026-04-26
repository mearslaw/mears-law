import { notFound } from "next/navigation";
import ServiceOfferingPage from "../../components/ServiceOfferingPage";
import { INDIVIDUAL_SERVICES } from "../servicesData";

export function generateStaticParams() {
  return INDIVIDUAL_SERVICES.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }) {
  // Await the params
  const { service: serviceSlug } = await params;
  const service = INDIVIDUAL_SERVICES.find((item) => item.slug === serviceSlug);

  if (!service) {
    return { title: "Service Not Found" };
  }
  return { title: `${service.title} — Mears Law` };
}

export default async function IndividualServiceOfferingPage({ params }) {
  const { service: serviceSlug } = await params;
  const service = INDIVIDUAL_SERVICES.find((item) => item.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceOfferingPage
      audienceTitle="Individuals"
      audienceHref="/services/individuals"
      service={service}
    />
  );
}
