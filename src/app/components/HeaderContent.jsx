import { gradients } from "./gradient";

const HeaderContent = ({ position }) => {

  // Calculate gradient index based on position
  const gradientIndex = Math.floor((position / 100) * (gradients.length - 1));


  return (
    <div
      className={`${gradients[gradientIndex]} transition-all ease-in-out duration-500 text-white`}
    >
      <div className="bg-frame">
        <div className="container mx-auto flex justify-between items-center">
          <div
            className="flex-1 text-left ml-2 lg:ml-40"
            style={{ flexBasis: "65%" }}
          >
            <h1 className="lg:ml-0 mt-5 ml-6 text-2xl/5 2xl:text-7xl lg:text-6xl md:text-5xl font-lazydog">
            Random Text
            </h1>
            <h1 className="lg:ml-0 ml-6 text-lg 2xl:text-7xl lg:text-6xl md:text-5xl font-lazydog">
            Of Your Choice!
            </h1>
            <h2 className="hidden mb-5 md:flex lg:ml-6 italic ml-3 md:ml-10 lg:text-xl md:text-sm mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
          </div>
          <div
            className="flex justify-end items-end ml-4"
            style={{ flexBasis: "35%" }}
          >
           {/* Image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
