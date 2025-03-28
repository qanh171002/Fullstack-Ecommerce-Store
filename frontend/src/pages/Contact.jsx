import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

function Contact() {
  return (
    <div>
      <div className="border-t border-gray-200 pt-10 text-center text-2xl">
        <Title text1="CONTACT" text2="US" />
      </div>
      <div className="my-10 mb-28 flex flex-col justify-center gap-10 md:flex-row">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.adidas_contact}
          alt="contact"
        />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-xl font-semibold text-gray-600">Our Store</p>
          <p className="text-gray-500">
            1125 Williams Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-1234 <br />
            Email: info@yourdomain.com
          </p>
          <p className="text-xl font-semibold text-gray-600">
            Careeers at our store
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-gray-900 px-8 py-4 text-sm transition-all duration-500 hover:bg-gray-900 hover:text-gray-100">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default Contact;
