import Image from "next/image";
import Containers from "./components/containers.js";
import OurValues from "./components/OurValues.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/hero";

export const metadata = {
  title: "Home",
  description: "Mears Law - Full-service Canadian law firm specializing in AI Regulation, Corporate Law, Real Estate Law, Immigration Law, Privacy Law, and Litigation. Book a free 30-minute consultation.",
  openGraph: {
    title: "Mears Law | Canadian Law Firm | AI, Corporate, Real Estate & Immigration Law",
    description: "Full-service Canadian law firm specializing in AI Regulation, Corporate Law, Real Estate Law, Immigration Law, Privacy Law, and Litigation. Offices in Toronto, Canada and Kingston, Jamaica.",
    url: "https://mearslaw.ca",
  },
  alternates: {
    canonical: "https://mearslaw.ca",
  },
};

export default function Home() {
  return (
    <div className="page">
       <section>
          <Hero />
        </section>
      <section>
        <OurValues />
      </section>
        <section>
          <Containers />
        </section>
      {/* </main> */}
    </div>
  );
}