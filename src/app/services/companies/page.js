import AudienceServicesPage from "../components/AudienceServicesPage";
import { COMPANIES_INTRO, COMPANY_SERVICES } from "./servicesData";

export default function CompaniesServicesPage() {
  return (
    <AudienceServicesPage
      title="Companies"
      intro={COMPANIES_INTRO}
      audiencePath="/services/companies"
      services={COMPANY_SERVICES}
    />
  );
}
