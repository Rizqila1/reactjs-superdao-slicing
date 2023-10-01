import Person1 from "../../assets/images/Person1.png";
import Person2 from "../../assets/images/Person2.png";
import Person3 from "../../assets/images/Person3.png";
import Person4 from "../../assets/images/Person4.png";
import Person5 from "../../assets/images/Person5.png";

import BlueParticleSVG from "../../utils/svg/BlueParticle";
import PurpleParticleSVG from "../../utils/svg/PurpleParticle";
import YellowParticleSVG from "../../utils/svg/YellowParticle";
import OrangeParticleSVG from "../../utils/svg/OrangeParticle";
import YellowLightParticleSVG from "../../utils/svg/YellowLightParticle";

export default function HelpAtSection() {
  return (
    <>
      <section className="flex justify-center mb-12">
        <h1 className="lg:text-5xl text-4xl text-center font-bold">
          Help at every step
        </h1>
      </section>

      <section className="flex flex-wrap justify-center items-center mb-12 gap-7">
        <img
          src={Person1}
          alt="person1"
          className="rounded-[40px] lg:w-40 w-28"
        />
        <img
          src={Person2}
          alt="person2"
          className="rounded-[40px] lg:w-40 w-28"
        />
        <img
          src={Person3}
          alt="person3"
          className="rounded-[40px] lg:w-40 w-28"
        />
        <img
          src={Person4}
          alt="person4"
          className="rounded-[40px] lg:w-40 w-28"
        />
        <img
          src={Person5}
          alt="person5"
          className="rounded-[40px] lg:w-40 w-28"
        />
      </section>

      <section>
        <div className="flex justify-center items-center mb-5">
          <h2 className="lg:text-4xl text-2xl font-semibold">
            Success Manager
          </h2>
          <span className="mx-5">
            <BlueParticleSVG />
          </span>
          <h2 className="lg:text-4xl text-2xl font-semibold">Knowledge Base</h2>
        </div>

        <div className="flex justify-center items-center mb-5">
          <h2 className="lg:text-4xl text-2xl font-semibold">Chat Support</h2>
          <span className="mx-5">
            <PurpleParticleSVG />
          </span>
          <h2 className="lg:text-4xl text-2xl font-semibold">Tutorials</h2>
          <span className="mx-5">
            <YellowParticleSVG />
          </span>
          <h2 className="lg:text-4xl text-2xl font-semibold">Templates</h2>
        </div>

        <div className="flex justify-center items-center mb-5">
          <h2 className="lg:text-4xl text-2xl font-semibold">
            Smart Contract Development
          </h2>
          <span className="mx-5">
            <OrangeParticleSVG />
          </span>
          <h2 className="lg:text-4xl text-2xl font-semibold">Events</h2>
        </div>

        <div className="flex justify-center items-center mb-5">
          <h2 className="lg:text-4xl text-2xl font-semibold">Education</h2>
          <span className="mx-5">
            <YellowLightParticleSVG />
          </span>
          <h2 className="lg:text-4xl text-2xl font-semibold">Guide</h2>
        </div>
      </section>
    </>
  );
}
