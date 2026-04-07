import { notFound } from "next/navigation";
import ServiceOfferingPage from "../../components/ServiceOfferingPage";
import { COMPANY_SERVICES } from "../servicesData";

export function generateStaticParams() {
  return COMPANY_SERVICES.map((service) => ({ service: service.slug }));
}

export function generateMetadata({ params }) {
  const service = COMPANY_SERVICES.find((item) => item.slug === params.service);

  if (!service) {
    return {
      title: "Companies Service",
      description: "Company legal service details",
    };
  }

  return {
    title: `${service.title} - Companies`,
    description: service.blurb,
  };
}

export default function CompanyServiceOfferingPage({ params }) {
  const service = COMPANY_SERVICES.find((item) => item.slug === params.service);

  if (!service) {
    notFound();
  }

  return (
    <ServiceOfferingPage
      audienceTitle="Companies"
      audienceHref="/services/companies"
      service={service}
    />
  );
}
