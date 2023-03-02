import InstaDP from "../images/instagram_profile_image.png";

export const CardList = () => {
  return (
    <>
      <div className="">
        <h3 className="text-3xl py-1">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officia{" "}
          <span className="text-red-800">pariatur</span> vero fuga possimus,
          ipsa laboriosam velit alias minus{" "}
          <span className="text-red-800">accusamus </span>
          magnam praesentium amet soluta veniam, voluptatibus aliquam esse, nemo
          nesciunt.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quos velit illo? Iusto eius dolorem neque natus ullam aliquid sint.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <img
            src={InstaDP}
            alt=""
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Creative Designs</h3>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            delectus, aliquam earum laboriosam eum cumque!
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Adobe Photoshop</p>
          <p className="text-gray-800 py-1">Adobe Illustrator</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <img
            src={InstaDP}
            alt=""
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Creative Designs</h3>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            delectus, aliquam earum laboriosam eum cumque!
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Adobe Photoshop</p>
          <p className="text-gray-800 py-1">Adobe Illustrator</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <img
            src={InstaDP}
            alt=""
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Creative Designs</h3>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            delectus, aliquam earum laboriosam eum cumque!
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Adobe Photoshop</p>
          <p className="text-gray-800 py-1">Adobe Illustrator</p>
        </div>
      </div>
    </>
  );
};
