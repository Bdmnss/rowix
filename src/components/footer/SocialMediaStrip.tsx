import InfiniteSlider from "../InfiniteSlider";

function SocialMediaStrip() {
  const items = Array.from({ length: 10 }, () => "FOLLOW US ON SOCIAL MEDIA");

  return (
    <div className="rounded-xl bg-secondary py-5">
      <InfiniteSlider
        items={items}
        className=""
        itemClassName="text-xl text-[#676665] font-mono"
        animationDuration="20s"
      />
    </div>
  );
}

export default SocialMediaStrip;
