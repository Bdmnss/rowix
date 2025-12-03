import Icon from "../icons/Icon";

const testimonials = [
  {
    title: "NexGen turned our business around!".toUpperCase(),
    description:
      "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    image: "/profile10.png",
    name: "Sarah Thompson",
    position: "CEO of BlueBloom",
  },
  {
    title: "NexGen turned our business around!".toUpperCase(),
    description:
      "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    image: "/profile11.png",
    name: "Wade Warren",
    position: "Art Director",
  },
  {
    title: "Working with NexGen was a pleasure.".toUpperCase(),
    description:
      "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    image: "/profile12.png",
    name: "Lisa Williams",
    position: "CEO Of HealthTech",
  },
  {
    title: "NexGen's web design team brought our vision to life.".toUpperCase(),
    description:
      "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
    image: "/profile13.png",
    name: "Jennifer Lee",
    position: "COO of Foodie Haven",
  },
];

function TestimonialsSection() {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border-2 border-borderColor p-5">
      <div className="flex items-center justify-between rounded-2xl bg-secondary p-12">
        <h2 className="text-5xl font-semibold text-orangeText">
          {"Testimonials".toUpperCase()}
        </h2>
        <button className="flex items-center gap-2">
          <div className="flex size-16 items-center justify-center rounded-full border border-buttonBorderColor">
            <Icon type="SmallUpArrowIcon" />
          </div>
          <p className="font-mono text-xl font-medium text-gray">
            ALL TESTIMONIALS
          </p>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.title}
            className="flex flex-col justify-between gap-5 rounded-2xl bg-secondary"
          >
            <div key={testimonial.title} className="p-10">
              <h2 className="mb-6 text-2xl font-medium text-orangeText">
                {testimonial.title}
              </h2>
              <p className="text-lg text-gray">{testimonial.description}</p>
            </div>
            <div className="rounded-b-2xl bg-borderColor px-10 py-[30px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-medium text-orangeText">
                      {testimonial.name}
                    </p>
                    <p className="text-lg text-gray">{testimonial.position}</p>
                  </div>
                </div>

                <button className="flex size-12 items-center justify-center rounded-full border border-iconBorderColor bg-borderColor">
                  <Icon
                    type="RightArrowIcon"
                    className="size-6 text-orangeLight"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;
