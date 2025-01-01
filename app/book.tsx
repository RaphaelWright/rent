import React from 'react'

export const book = () => {
  return (
    <div>
        {/*rooms availabl or booking*/}
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
  )
}
