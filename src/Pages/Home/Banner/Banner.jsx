import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-2xl" />
        <div className="absolute flex transform justify-start bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-[600px] rounded-2xl">
          <div className="">
            <div className="w-60 md:w-80 lg:w-96 text-white text-2xl md:text-4xl lg:text-6xl font-medium md:font-bold ml-6 md:ml-16 mt-8 md:mt-16">
              <p>Affordable Price For Car Servicing</p>
            </div>
            <p className="w-80 md:w-96 text-white mt-6 font-medium ml-6 md:ml-16 mt-4 md:mt-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="mt-6 ml-6 md:ml-16 mt-6 md:mt-8">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform justify-end -translate-y-1/2 left-5  right-5 bottom-0">
          <div className="ml-96">
            <a
              href="#slide6"
              className="btn btn-circle bg-pink-600 hover:bg-yellow-400 mr-4"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-pink-600 hover:bg-yellow-400"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-circle bg-pink-600 hover:bg-yellow-400"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-pink-600 hover:bg-yellow-400"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-circle bg-pink-600 hover:bg-yellow-400"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-pink-600 hover:bg-yellow-400"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-circle bg-pink-600 hover:bg-yellow-400"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle bg-pink-600 hover:bg-yellow-400"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle bg-pink-600 hover:bg-yellow-400"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle bg-pink-600 hover:bg-yellow-400"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide5"
            className="btn btn-circle bg-pink-600 hover:bg-yellow-400"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-pink-600 hover:bg-yellow-400"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
