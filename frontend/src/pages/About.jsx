import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

function About() {
  return (
    <div>
      <div className="border-t border-gray-200 pt-8 text-center text-2xl">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="my-10 flex flex-col gap-16 md:flex-row">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.adidas_about}
          alt="about"
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-1/2">
          <p>
            At Adidas, we believe that sport has the power to change lives.
            Since our founding, we have been driven by a passion for innovation,
            performance, and sustainability, constantly pushing the boundaries
            to create the best sportswear for athletes and everyday enthusiasts
            alike.
          </p>
          <p>
            Our heritage is built on a commitment to excellence, from pioneering
            footwear technology to championing a culture of inclusivity and
            empowerment. We strive to blend style with functionality, ensuring
            that every product we create enhances movement, performance, and
            comfort.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            We exist to support athletes at every level—whether on the world
            stage or in local communities. Our mission is to inspire and enable
            people to harness the power of sport to transform their lives.
            Through cutting-edge design, responsible manufacturing, and a
            relentless drive for progress, we are shaping the future of
            sportswear for a better tomorrow.
          </p>
        </div>
      </div>
      <div className="py-4 text-xl">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="mb-20 flex flex-col text-sm md:flex-row">
        <div className="flex flex-col gap-5 border border-gray-200 px-10 py-8 sm:py-20 md:px-16">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-col gap-5 border border-gray-200 px-10 py-8 sm:py-20 md:px-16">
          <b>Convenience: </b>
          <p className="text-gray-600">
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
        <div className="flex flex-col gap-5 border border-gray-200 px-10 py-8 sm:py-20 md:px-16">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default About;
