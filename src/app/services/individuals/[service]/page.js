import { notFound } from "next/navigation";
import ServiceOfferingPage from "../../components/ServiceOfferingPage";
import { INDIVIDUAL_SERVICES } from "../servicesData";

export function generateStaticParams() {
  return INDIVIDUAL_SERVICES.map((service) => ({ service: service.slug }));
}

export function generateMetadata({ params }) {
  const service = INDIVIDUAL_SERVICES.find((item) => item.slug === params.service);

  if (!service) {
    return {
      title: "Individuals Service",
      description: "Individual legal service details",
    };
  }

  return {
    title: `${service.title} - Individuals`,
    description: service.blurb,
  };
}

export default function IndividualServiceOfferingPage({ params }) {
  const service = INDIVIDUAL_SERVICES.find((item) => item.slug === params.service);

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
