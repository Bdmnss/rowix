import Icon from "../../icons/Icon";

function NewsletterSubscription() {
  return (
    <div className="flex items-center justify-between gap-8 rounded-2xl bg-secondary p-[50px]">
      <div className="flex flex-col gap-[10px]">
        <p className="text-lg text-[#676665]">NEWSLETTER</p>
        <h3 className="text-3xl font-medium text-orangeText">
          {"Subscribe to our newsletter".toUpperCase()}
        </h3>
      </div>
      <form className="flex items-end gap-3">
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[300px] border-b border-iconBorderColor bg-transparent px-0 pb-2 text-lg text-[#676665] placeholder:text-[#676665] focus:border-orange focus:outline-none"
          />
        </div>
        <button className="flex size-12 items-center justify-center rounded-full border border-iconBorderColor bg-borderColor">
          <Icon type="SmallUpArrowIcon" className="size-6" />
        </button>
      </form>
    </div>
  );
}

export default NewsletterSubscription;
