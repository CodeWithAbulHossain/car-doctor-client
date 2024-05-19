import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero h-screen mt-5 mb-4 lg:mt-20">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="lg:w-1/2 relative lg:h-screen">
          <img src={person} className="w-3/4 h-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-2/3 absolute right-12 top-2/4 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 lg:h-screen">
          <h1 className="text-2xl font-bold text-red-500">About Us</h1>
          <h4 className="w-1/2 font-bold text-3xl mt-2 lg:mt-5">
            We are qualified & of experience in this field
          </h4>
          <p className="py-3 lg:py-12 w-2/3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-3 lg:py-4 w-2/3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="lg:mt-24">
            <button className="btn btn-warning">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
