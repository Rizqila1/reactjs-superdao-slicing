import YellowRedParticlesSVG from "../../utils/svg/YellowRedParticles";

export default function MenuListSection() {
  return (
    <>
      <section className="relative flex justify-center items-center mb-11">
        <div className="absolute right-60 bottom-7">
          <YellowRedParticlesSVG />
        </div>
        <h1 className="text-5xl font-extrabold">
          Designed for the full journey
        </h1>
      </section>

      <section className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold text-customgrey mb-5">
          Organisation design
        </h1>
        <h1 className="text-5xl font-extrabold text-customgrey mb-5">
          Smart contract development
        </h1>
        <h1 className="text-5xl font-extrabold text-customgrey mb-5">
          Fundraising
        </h1>
        <h1 className="text-5xl font-extrabold text-customgrey mb-5">
          Launch marketing
        </h1>
        <h1 className="text-5xl font-extrabold text-customgrey mb-5">
          Member onboarding
        </h1>
        <h1 className="text-5xl font-extrabold text-customgrey mb-5">
          Contributor management
        </h1>
        <h1 className="text-5xl font-extrabold text-customgrey">
          DAO operations
        </h1>
      </section>
    </>
  );
}
