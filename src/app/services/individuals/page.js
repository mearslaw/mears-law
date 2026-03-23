import AudienceServicesPage from "../components/AudienceServicesPage";
import { INDIVIDUALS_INTRO, INDIVIDUAL_SERVICES } from "./servicesData";

export default function IndividualsServicesPage() {
  return (
    <AudienceServicesPage
      title="Individuals"
      intro={INDIVIDUALS_INTRO}
      audiencePath="/services/individuals"
      services={INDIVIDUAL_SERVICES}
    />
  );
}
