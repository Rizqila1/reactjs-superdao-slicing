import Button from "../Button";
import Card from "../Card";

import GroupWeeklySVG from "../../utils/svg/GroupWeekly";

export default function WeeklyDigestSection() {
  return (
    <section className="flex justify-center items-center text-center">
      <Card className="relative flex flex-col justify-center items-center px-4 py-10 w-[80%] rounded-xl">
        <GroupWeeklySVG className="absolute z-0 w-full h-full" />
        <Card.Title className="lg:text-5xl text-4xl font-bold lg:mb-11 mb-5 z-10">
          Weekly Digest
        </Card.Title>
        <Card.Body className="flex flex-col z-10">
          <h4 className="text-[#9AAFC3] font-semibold lg:text-4xl text-3xl lg:mb-16 mb-12">
            Latest news in DAOs and Web3
          </h4>

          <div className="flex items-center">
            <input
              placeholder="Your email"
              className="w-full bg-[#121E28] border-2 border-cardborder rounded-2xl py-5 px-7 font-semibold text-[#3D4C5B]"
            />

            <Button
              variant="purple"
              className="rounded-2xl ms-6 py-5 px-7 font-semibold"
            >
              Subscribe
            </Button>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
}
