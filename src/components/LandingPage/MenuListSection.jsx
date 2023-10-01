import YellowRedParticlesSVG from "../../utils/svg/YellowRedParticles";

export default function MenuListSection() {
  return (
    <>
      <section className="relative flex justify-center items-center mb-11">
        <div className="relative lg:px-36 px-20">
          <h1 className="lg:text-5xl text-4xl font-bold text-center">
            Designed for the full journey
          </h1>
          <div className="absolute right-0 -top-7">
            <YellowRedParticlesSVG />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center">
        <h1 className="lg:text-5xl text-4xl text-center font-extrabold text-customgrey mb-5">
          Organisation design
        </h1>
        <h1 className="lg:text-5xl text-4xl text-center font-extrabold text-customgrey mb-5">
          Smart contract development
        </h1>
        <h1 className="lg:text-5xl text-4xl text-center font-extrabold text-customgrey mb-5">
          Fundraising
        </h1>
        <h1 className="lg:text-5xl text-4xl text-center font-extrabold text-customgrey mb-5">
          Launch marketing
        </h1>
        <h1 className="lg:text-5xl text-4xl text-center font-extrabold text-customgrey mb-5">
          Member onboarding
        </h1>
        <h1 className="lg:text-5xl text-4xl text-center font-extrabold text-customgrey mb-5">
          Contributor management
        </h1>
        <h1 className="lg:text-5xl text-4xl text-center font-extrabold text-customgrey">
          DAO operations
        </h1>
      </section>
    </>
  );
}
