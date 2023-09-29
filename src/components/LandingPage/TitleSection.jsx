import Button from "../Button";

export default function TitleSection() {
  return (
    <>
      <div className="flex justify-center text-center text-7xl font-extrabold leading-[82px] mb-8">
        The Easiest Way <br /> to Start a DAO
      </div>

      <div className="flex justify-center text-center text-2xl font-medium mb-14 leading-[46px]">
        An all-in-one platform to start, manage and grow <br /> a decentralized
        autonomous organization
      </div>

      <div className="flex justify-center">
        <Button variant="yellow" className="font-bold py-4 px-14 rounded-2xl">
          Get Started
        </Button>
      </div>
    </>
  );
}
