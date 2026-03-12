import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SquirrelControlInfo from "@/components/landing/SquirrelControlInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Fruitland MD Squirrel Control Pros";
  const phoneNumber = "(323) 880-1224";
  const location = "Fruitland, MD";
  const zipCodes = "21826";
  const fullKeyword = "fruitland md squirrel control";

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{`${fullKeyword} - ${firmName} - ${phoneNumber} - ${zipCodes}`}</title>
        <meta name="description" content={`${fullKeyword} - Professional squirrel control in Fruitland, MD. We offer expert trapping, exclusion, and damage repair. Serving ${zipCodes} and surrounding areas. Call ${phoneNumber} for expert help.`} />
        <meta name="keywords" content="squirrel control Fruitland MD, squirrel removal 21826, wildlife exclusion Fruitland, 21826 squirrel trapping, attic squirrel repair Maryland" />
        <link rel="canonical" href="https://fruitlandmdsquirrelcontrol.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "/1.jpeg",
            "@id": "https://fruitlandmdsquirrelcontrol.com/",
            "url": "https://fruitlandmdsquirrelcontrol.com/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "201 E Main St",
              "addressLocality": "Fruitland",
              "addressRegion": "MD",
              "postalCode": "21826",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "38.3154",
              "longitude": "-75.6116"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Squirrel Control and Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": [
              { "@type": "City", "name": "Fruitland, MD" },
              { "@type": "PostalCode", "name": "21826" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Squirrel Control Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Humane Squirrel Trapping" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wildlife Exclusion" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Attic Damage Restoration" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content={`${fullKeyword} - ${firmName}`} />
        <meta property="og:description" content="Professional squirrel removal and exclusion in Fruitland, MD. Safe, humane, and guaranteed results. Call (323) 880-1224." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fruitlandmdsquirrelcontrol.com/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Fruitland MD <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Squirrel Control</span>
            </>
          }
          subtitle="Fruitland's premier wildlife specialists. We provide rapid-response squirrel diagnostics and professional exclusion to secure your home today — guaranteed."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="FRUITLAND WILDLIFE SERVICES"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <SquirrelControlInfo />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
