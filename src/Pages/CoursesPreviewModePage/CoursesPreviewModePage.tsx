function CoursesPreviewModePage() {
  return (
    <div className="mx-[100px] mt-[84px] mb-[55px]">
      <div className="flex gap-[32px] pb-16 border-b-4 border-[#024f40]">
        <div className="flex flex-col gap-[32px]">
          <video
            width="1282"
            // height="756"
            controls
            className="h-[756px] rounded-lg border-2 border-[#024f40]"
          >
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <div className="flex flex-col gap-5 px-16">
            <div className="flex justify-between items-center">
              <p className="text-[25px] font-bold text-[#024f40]">
                Introduction to Quantum Physics
              </p>
              <p className="text-base text-right text-[#024f40]">1.2M views</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-16 items-center justify-between">
                <div className="flex gap-3">
                  <div className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded-[999px] bg-[#d9d8d1] border-2 border-[#024f40]"></div>
                  <div className="flex flex-col">
                    <p className="text-xl font-bold text-[#024f40]">
                      FutureLearn
                    </p>
                    <p className="text-[13px] text-[#024f40]">
                      200K subscribers
                    </p>
                  </div>
                </div>
                <button className="px-8 py-2 rounded-[5px] bg-[#024f40] border border-[#024f40] text-base font-bold text-[#f1f0e8]">
                  Subscribe
                </button>
              </div>
              <button className="px-8 py-2 rounded-[5px] border border-[#024f40] text-base font-bold text-[#024f40]">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 rounded-lg border-2 border-[#024f40] max-h-[756px]">
          <p className="text-xl font-bold text-[#024f40]">Next Lessons</p>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 6 }).map(() => (
              <div className="flex justify-center items-center gap-4">
                {/* Image */}
                <div className="w-[167px] h-[94px] rounded bg-[#fbfbf8] border-2 border-[#024f40]"></div>
                <div className="flex flex-col">
                  <p className="text-base font-bold text-[#024f40]">
                    Advanced Quantum
                  </p>
                  <p className="text-[#024f40]">300K views</p>
                  <p className="text-[#024f40]">Updated 2 days ago</p>
                  <div className="flex gap-1">
                    <div className="w-6 h-6 rounded-[999px] bg-[#f1f0e8] border-2 border-[#024f40]"></div>
                    <p className="text-[13px] text-[#024f40]">
                      Quantum Academy
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 py-16 border-b-4 border-[#024f40]">
        <p className="text-[39px] font-bold text-[#024f40]">Course Progress</p>
        {/* <div className="flex items-center px-20 py-4 rounded-tl-lg rounded-tr-lg bg-white border-2 border-[#024f40]">
          <p className="text-[25px] font-bold text-[#024f40]">
            Beginner Math Courses
          </p>
        </div> */}
        <div>
          <div className="flex items-center px-20 py-4 rounded-tl-lg rounded-tr-lg bg-white border-2 border-b-0 border-[#024f40]">
            <p className="text-[25px] font-bold text-[#024f40]">
              Beginner Math Courses
            </p>
          </div>
          <div className="flex items-center border-2 border-[#024f40]">
            <div className="w-12 h-[56px] pl-8 pr-4 py-4 bg-white border-r-2 border-[#024f40]"></div>
            <div className="flex justify-between items-center pl-8 pr-4 py-4 bg-white w-full">
              <p className="text-xl font-bold text-[#024f40]">
                Basic Arithmetic
              </p>
              <div className="flex justify-start items-center">
                <div className="w-16 h-4 bg-[#024f40]"></div>
                <div className="w-16 h-4 bg-[#024f40]"></div>
                <div className="w-16 h-4 bg-[#024f40]"></div>
                <div className="w-16 h-4 bg-[#024f40]"></div>
                <div className="w-16 h-4 bg-[#024f40]"></div>
                <div className="w-16 h-4 bg-[#f1f0e8] border-r-1 border-[#024f40]"></div>
                <div className="w-16 h-4 bg-[#f1f0e8] border-r-1 border-[#024f40]"></div>
                <div className="w-16 h-4 bg-[#f1f0e8] border-r-1 border-[#024f40]"></div>
                <div className="w-16 h-4 bg-[#f1f0e8] border-r-1 border-[#024f40]"></div>
                <div className="w-16 h-4 bg-[#f1f0e8] border-r-1 border-[#024f40]"></div>
                <div className="w-16 h-4 bg-[#f1f0e8] border-r-1 border-[#024f40]"></div>
                <div className="w-16 h-4 bg-[#f1f0e8] border-r-1 border-[#024f40]"></div>
              </div>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-15px"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M12.0001 15.5912L5.80884 9.39997L7.40009 7.80872L12.0001 12.4087L16.6001 7.80872L18.1913 9.39997L12.0001 15.5912Z"
                fill="#024F40"
              ></path>
            </svg>
          </div>
          {/* <div className="flex">
            <div className="flex items-center justify-center py-4 bg-white border-2 border-[#024f40]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                preserveAspectRatio="xMidYMid meet"
              >
                <mask
                  id="mask0_6_798"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9"></rect>
                </mask>
                <g mask="url(#mask0_6_798)">
                  <path
                    d="M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z"
                    fill="#024F40"
                  ></path>
                </g>
              </svg>
            </div>
          </div> */}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 p-24 bg-[#d9d8d1]">
        <div className="flex flex-col gap-4">
          <p className="text-[25px] font-bold text-center text-[#024f40]">
            Stay updated with the latest in Quantum Physics
          </p>
          <p className="text-base text-center text-[#024f40]">
            Subscribe to our newsletter
          </p>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Email Address"
            className="w-80 p-4 rounded border-2 border-[#024f40] bg-white"
          />
          <button className="px-16 py-4 rounded bg-[#024f40] text-base font-bold text-[#f1f0e8]">
            Go to Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoursesPreviewModePage;
