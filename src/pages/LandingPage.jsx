import Footer from "../components/Footer";
import AllTheToolsSection from "../components/LandingPage/AllTheToolsSection";
import BackedBySection from "../components/LandingPage/BackedBySection";
import DaoMenuSection from "../components/LandingPage/DaoMenuSection";
import EndContentSection from "../components/LandingPage/EndContentSection";
import HelpAtSection from "../components/LandingPage/HelpAtSection";
import MenuListSection from "../components/LandingPage/MenuListSection";
import PodcastSection from "../components/LandingPage/PodcastSection";
import PressSection from "../components/LandingPage/PressSection";
import TitleSection from "../components/LandingPage/TitleSection";
import WeeklyDigestSection from "../components/LandingPage/WeeklyDigestSection";
import WorkWithSection from "../components/LandingPage/WorksWithSection";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <div className="">
      <Navbar />

      <section className="mb-28">
        <TitleSection />
      </section>

      <section className="mb-44">
        <DaoMenuSection />
      </section>

      <section className="mb-48">
        <MenuListSection />
      </section>

      <section className="mb-48">
        <AllTheToolsSection />
      </section>

      <section className="mb-48">
        <WorkWithSection />
      </section>

      <section className="mb-52">
        <HelpAtSection />
      </section>

      <section className="mb-48">
        <WeeklyDigestSection />
      </section>

      <section className="mb-48">
        <BackedBySection />
      </section>

      <section className="mb-48">
        <PressSection />
      </section>

      <section className="mb-28">
        <PodcastSection />
      </section>

      <section className="mb-48">
        <EndContentSection />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
