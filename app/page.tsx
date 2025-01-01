import React from "react";

export default function page() {
  return (
    <div className="h-full">
      <div className="landing h-screen">
        {/* Navbar for mobile screen */}
        <div className="flex justify-center">
          <h1 className="text-2xl mt-4 font-bold mx-auto">Logo</h1>
          <button className="text-lg rounded-2xl mx-auto bg-white text-black px-3 mt-5">
            Book
          </button>
        </div>

        {/* Welcome message */}
        <div className="flex justify-center items-center mt-56">
          <div className="text-center">
            <h1 className="text-4xl catch font-bold">
              Discover Your Next Home Rental Today
            </h1>
            <button className="text-lg rounded-2xl border-black border px-3 mt-5">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Sampl rooms */}
      <div className="mt-7">
        <p className="text-[#7F3354] font-bold ml-6 text-4xl">Sample Rooms</p>
        <br />
        <div className="flex justify-center items-center">
          <div className="flex flex-col space-y-6 sm:flex-row justify-center">
            <div className="flex justify-center items-center mx-auto py-6 px-4">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1544716278-6a3e2d1d5f9d"
                  alt=""
                  className="h-72 w-96 object-cover rounded-2xl"
                />
                <p className="text-lg font-semibold">Living Room</p>
              </div>
            </div>

            <div className="flex justify-center items-center  mx-4 py-6 px-4  ">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1544716278-6a3e2d1d5f9d"
                  alt=""
                  className="h-72 w-96 object-cover rounded-2xl"
                />
                <p className="text-lg font-semibold">Bedroom</p>
              </div>
            </div>

            <div className="flex justify-center items-center  mx-4 py-6 px-4  ">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1544716278-6a3e2d1d5f9d"
                  alt=""
                  className="h-72 w-96 object-cover rounded-2xl"
                />
                <p className="text-lg font-semibold">Kitchen</p>
              </div>
            </div>
          </div>
        </div>
        </div>


      {/* Bnfits of rnt */}
      <div className=" mt-7">
        <p className="text-[#7F3354] font-bold ml-6 text-4xl">Why Us?</p>
        <br />
        <div className="flex flex-col space-y-6 sm:flex-row justify-center">
          <div className="flex justify-center items-center shadow-md mx-4 py-6 px-4 rounded-2xl shadow-[#7F3354]  ">
            <div>
              <p className="text-xl font-semibold">Very Affordable Prices</p>
              <p className="text-lg">
                We take care of all maintenance costs for you
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center shadow-md mx-4 py-6 px-4 rounded-2xl shadow-[#7F3354]  ">
            <div>
              <p className="text-xl font-semibold">Flexible Dates</p>
              <p className="text-lg">
                We take care of all maintenance costs for you
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center shadow-md mx-4 py-6 px-4 rounded-2xl shadow-[#7F3354]  ">
            <div>
              <p className="text-xl font-semibold">No Maintenance Costs</p>
              <p className="text-lg">
                We take care of all maintenance costs for you
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* about us*/}
      <div className="mt-7">
        <p className="text-[#7F3354] font-bold ml-6 text-4xl">About Us</p>
        <br />
        <div className="flex justify-center items-center">
          <div className="flex flex-col space-y-6 sm:flex-row justify-center">
            <div className="flex justify-center items-center mx-auto py-6 px-4">
              <div>
                <p className="text-xl font-semibold">Our Mission</p>
                <p className="text-lg">
                  We take care of all maintenance costs for you
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center  mx-4 py-6 px-4  ">
              <div>
                <p className="text-xl font-semibold">Our Vision</p>
                <p className="text-lg">
                  We take care of all maintenance costs for you
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      
      {/* Footer */}
      <div className="bg-slate-900 text-white text-center py-5">
        <p>© 2021 RentHouse. All Rights Reserved</p>

        <div className="flex justify-center mt-5">
          <i className="fab fa-facebook-f mx-2"></i>
          <i className="fab fa-twitter mx-2"></i>
          <i className="fab fa-instagram mx-2"></i>
          <i className="fab fa-linkedin-in mx-2"></i>
        </div>
      </div>
    </div>
  );
}
