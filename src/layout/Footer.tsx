import CTABanner from "../components/footer/CTABanner";
import SocialMediaStrip from "../components/footer/SocialMediaStrip";
import SocialMediaCards from "../components/footer/SocialMediaCards";
import FooterNavigation from "../components/footer/FooterNavigation";
import NewsletterSubscription from "../components/footer/NewsletterSubscription";
import Rights from "../components/footer/Rights";

function Footer() {
  return (
    <footer className="flex flex-col gap-5">
      <CTABanner />
      <SocialMediaStrip />
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-2">
          <SocialMediaCards />
        </div>
        <div className="col-span-3 flex flex-col gap-5">
          <FooterNavigation />
          <NewsletterSubscription />
          <Rights />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
