import Icon from "../icons/Icon";

const reasons = [
  {
    title: "Expertise in Cutting-Edge Technologies".toUpperCase(),
    description:
      "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.",
  },
  {
    title: "Proven Track Record of Success".toUpperCase(),
    description:
      "NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.",
  },
  {
    title: "Client-Centric Approach".toUpperCase(),
    description:
      "At NexGen, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process.",
  },
  {
    title: "Dedicated Team of Professionals".toUpperCase(),
    description:
      "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.",
  },
];

function ReasonsSection() {
  return (
    <div className="border-borderColor flex flex-col gap-5 rounded-2xl border-2 p-5">
      <div className="text-orangeText rounded-2xl bg-secondary p-12 text-5xl font-semibold">
        {"Reasons to Choose NexGen for Your Digital Journey".toUpperCase()}
      </div>
      <div className="grid grid-cols-4 gap-5">
        {reasons.map((reason) => (
          <div key={reason.title} className="rounded-2xl bg-secondary p-10">
            <h2 className="text-orangeText mb-3 text-3xl font-medium">
              {reason.title}
            </h2>
            <p className="text-lg text-gray">{reason.description}</p>

            <button className="mt-10 flex items-center gap-2">
              <div className="border-buttonBorderColor flex size-16 items-center justify-center rounded-full border bg-primary">
                <Icon type="SmallUpArrowIcon" />
              </div>
              <p className="text-lg text-gray">Learn More</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReasonsSection;
