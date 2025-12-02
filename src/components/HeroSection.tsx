import ServicesSlider from "./ServicesSlider";
import Icon from "../icons/Icon";
import StatsSection from "./StatsSection";

const statsData = [
  {
    title: "CLIENTS",
    data: "200+",
  },
  {
    title: "PROJECTS",
    data: "280+",
  },
  {
    title: "HAPPY CLIENTS",
    data: "100%",
  },
  {
    title: "FOLLOWER",
    data: "420K",
  },
  {
    title: "Years Of Experience",
    data: "10+",
  },
  {
    icon: <Icon type="BigUpArrowIcon" />,
    title: "KNOW MORE",
  },
];

function HeroSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="mt-5 flex gap-5">
        <div className="w-3/4 rounded-[20px] bg-secondary px-5 pb-5 pt-24">
          <div className="flex flex-col gap-5 px-10">
            <div className="flex items-center gap-4">
              <h2 className="text-orangeText text-7xl font-semibold">
                DIGITAL SOLUTIONS
              </h2>
              <button className="flex items-center gap-2">
                <div className="flex size-12 items-center justify-center rounded-full bg-orange">
                  <Icon type="RightArrowIcon" />
                </div>
                <p className="text-2xl font-medium text-orange">
                  START A PROJECT
                </p>
              </button>
            </div>
            <h2 className="text-orangeText text-7xl font-semibold">
              THAT DRIVE SUCCESS
            </h2>

            <p className="max-w-[80%] text-lg font-normal text-gray">
              At NexGen, we believe in the transformative power of digital
              solutions. Our team of experts is dedicated to helping businesses
              like yours thrive in the fast-paced digital landscape.
            </p>
          </div>
          <ServicesSlider />
        </div>
        <div className="w-1/4 rounded-[20px] bg-secondary">
          <div className="relative bg-primary">
            <img src="/1.png" alt="1" />
            <button className="absolute right-0 top-3 flex size-[88px] items-center justify-center rounded-full bg-orange">
              <Icon type="UpArrowIcon" />
            </button>
          </div>

          <div className="flex flex-col gap-1 p-7">
            <h2 className="text-orangeText text-2xl font-medium">
              ESTATEIN REAL ESTATE
            </h2>
            <p className="text-lg text-gray">Web Development.</p>
          </div>
        </div>
      </div>
      <StatsSection items={statsData} />
    </div>
  );
}

export default HeroSection;
