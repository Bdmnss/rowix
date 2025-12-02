import InfiniteSlider from "./InfiniteSlider";

const services = [
  "DIGITAL MARKETING",
  "WEBSITE DESIGN",
  "BRANDING",
  "WEBSITE DEVELOPMENT",
  "MOBILE APP DEVELOPMENT",
];

function ServicesSlider() {
  return (
    <InfiniteSlider
      items={services}
      className="mt-8 rounded-xl bg-primary py-5"
      itemClassName="text-xl text-gray"
    />
  );
}

export default ServicesSlider;
