import Icon from "../icons/Icon";

const services = [
  {
    title: "Web Design".toUpperCase(),
    description:
      "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
    icon: <Icon type="WebDesignIcon" />,
    price: "Starts From $1,500".toUpperCase(),
  },
  {
    title: "Mobile App Development".toUpperCase(),
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
    icon: <Icon type="MobileAppDevelopmentIcon" />,
    price: "Starts From $2,500".toUpperCase(),
  },
  {
    title: "Web Development".toUpperCase(),
    description:
      "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
    icon: <Icon type="WebDevelopmentIcon" />,
    price: "Starts From $1,800".toUpperCase(),
  },
  {
    title: "Digital Marketing".toUpperCase(),
    description:
      "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility",
    icon: <Icon type="DigitalMarketingIcon" />,
    price: "Starts From $1,200".toUpperCase(),
  },
];

const ServicesSection = () => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border-2 border-borderColor p-5">
      <div className="rounded-2xl bg-secondary p-12 text-5xl font-semibold text-orangeText">
        {"Our Services".toUpperCase()}
      </div>

      <div className="grid grid-cols-2 gap-5">
        {services.map((service) => (
          <div
            className="flex flex-col rounded-2xl bg-secondary p-20"
            key={service.title}
          >
            <div className="mb-12 flex justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-16 items-center justify-center rounded-xl border border-iconBorderColor bg-borderColor">
                  {service.icon}
                </div>
                <p className="text-3xl font-medium text-orangeText">
                  {service.title}
                </p>
              </div>

              <button className="flex items-center gap-2">
                <div className="flex size-12 items-center justify-center rounded-full border border-iconBorderColor bg-borderColor">
                  <Icon type="SmallUpArrowIcon" className="size-6" />
                </div>
                <p className="text-lg font-medium text-gray">BOOK A CALL</p>
              </button>
            </div>
            <p className="text-lg text-gray">{service.description}</p>

            <p className="ml-auto mt-5 text-3xl font-medium text-orangeText">
              {service.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
