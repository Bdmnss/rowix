import Icon from "../../icons/Icon";

function CTABanner() {
  return (
    <div className="rounded-2xl bg-orange p-20">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-medium text-primary">
            {"Ready to Transform Your Digital Presence?".toUpperCase()}
          </h2>
          <p className="max-w-[90%] text-lg text-buttonBorderColor">
            Take the first step towards digital success with NexGen by your
            side. Our team of experts is eager to craft tailored solutions that
            drive growth for your business.
          </p>
        </div>
        <button className="mt-auto flex items-center gap-[10px] rounded-xl border-2 border-primary bg-primary px-8 py-4 transition-all hover:bg-opacity-90">
          <p className="text-lg font-medium text-orangeLight">
            {"Get in Touch".toUpperCase()}
          </p>
          <Icon type="SmallUpArrowIcon" className="size-6 text-orangeLight" />
        </button>
      </div>
    </div>
  );
}

export default CTABanner;
