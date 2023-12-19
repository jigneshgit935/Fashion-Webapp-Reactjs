import img from '../assets/img/hero.png';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between lg:px-32 px-5 items-center pt-24 lg:pt-10 bg-PrimaryColor">
      {/* content section */}
      <div className="space-y-4">
        <h1 className="text-5xl font-semibold leading-tight text-ExtraDarkColor w-full lg:w-3/4">
          Discovering and Defining Your Own Fashion!
        </h1>
        <p className="w-full lg:w-3/4 text-DarkColor font-medium">
          Each item is a carefully chosen masterpiece, promising not just
          fashion but a reflection of your unique style
        </p>
        <button className="bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
          shop now
        </button>
      </div>

      <div className="bg-DarkColor p-5 mt-10 rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl">
        {/* img section */}
        <img src={img} alt="home-image" className="-ml-5 -mb-5" width={600} />
      </div>
    </div>
  );
};

export default Home;
