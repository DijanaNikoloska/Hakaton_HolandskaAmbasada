import CardList from "../Cards/Cards";

function CoursesPage() {
  return (
    <>
      <div className="NewSection mb-[71px]">
        <div>
          <img
            src="/images/Hero Section - Illustration.png"
            alt="Learning"
            className="Hero Section - Illustration"
          />
        </div>
        <div className="color-[#06624f] w-[844px] ">
          <p className="text-[61px] w-[844px]">
            Unlock your learning potential
          </p>
          <p className="text-[31px] w-[844px]">
            Explore a wide range of beginner-friendly courses designed to build
            your skills and knowledge. Whether you're starting fresh or looking
            to strengthen your foundation, our expertly crafted lessons will
            guide you every step of the way. Start learning today!
          </p>
        </div>
      </div>
      <div className="mx-[100px] pb-16 border-t-0 border-r-0 border-b-4 border-l-0 border-black">
        <p className="text-[39px] font-bold text-[#024f40] pb-[24px]">
          Most viewed
        </p>
        <CardList />
      </div>
      <div className="mx-[100px] pt-[32px] pb-16 border-t-0 border-r-0 border-b-4 border-l-0 border-black">
        <p className="text-[39px] font-bold text-[#024f40] pb-[24px]">
          In Focus
        </p>
        <CardList />
      </div>
      <div className="flex justify-between  border-b-4 border-[#024F40] mx-[100px] mt-[150px]">
        <p className="text-[39px] text-[#024F40] font-bold">New & Noteworthy</p>
        <span>
          <img src="/images/CoursesPage/keyboard_arrow_down.svg" alt="" />
        </span>
      </div>
      <div className="mt-100 flex items-center justify-center gap-10 cursor-default">
        <div className="flex flex-col justify-between items-start gap-6 w-[50%]">
          <span>
            <img src="/images/CoursesPage/Vector.svg" alt="" />
          </span>
          <p className="text-[80px] leading-[96px] font-bold text-[#024F40]">
            Beginner Algebra: Foundations for Problem Solving
          </p>
          <p className="text-[39px] leading-[46.8px] font-bold text-[#024F40]">
            Learn the fundamentals of algebra, including equations, variables,
            and problem-solving techniques.
          </p>
          <div className="flex gap-[32px]">
            <button className="flex justify-between items-center w-[114px] h-14 px-8 py-4 rounded-[5px] bg-white border-2 border-[#024f40] text-xl font-bold text-[#024f40]">
              Details
            </button>
            <button className="flex justify-center items-center w-[406px] h-14 relative gap-[39px] px-8 py-4 rounded-[5px] bg-[#024f40] border-2 border-[#024f40] text-xl font-bold text-[#f1f0e8]">
              JOIN NOW!
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M16.0911 12.4162L9.89984 18.6074L8.30859 17.0162L12.9086 12.4162L8.30859 7.81617L9.89984 6.22492L16.0911 12.4162Z"
                  fill="#F1F0E8"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-white p-[24px] w-[22.5%] rounded-lg border border-[#024F40] space-y-4">
          <span className="rounded-lg">
            <img src="/images/CoursesPage/pexels-max-fischer.svg" />
          </span>
          <div className="space-y-4 text-[#024F40]">
            <p className="border-b-2 border-[#024F40]  font-bold text-[20px] leading-[24px]">
              Jackie Von Berger
            </p>
            <p className="text-[16px] leading-[19.2px]">
              "Passionate about making complex mathematical concepts easy to
              understand. Specializes in Algebra, Calculus, and Mathematical
              Logic. Dedicated to helping students develop problem-solving
              skills and logical thinking."
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="border-b">
              <span className="border-[#024F40] text-[16px] leading-[19.2px] text-[#024F40]">
                Professor at XYZ University, 10+ years of teaching experience
              </span>
            </p>
            <span className="border-b border-[#024F40] text-[16px] leading-[19.2px] text-[#024F40]">
              PhD in Mathematics, Hardvard University
            </span>
            <div className="border-b border-[#024F40] flex gap-[8px] items-center">
              <span className="text-[16px] leading-[19.2px] text-[#024F40] flex">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5.3752 11.4368L8.0002 9.85344L10.6252 11.4576L9.9377 8.4576L12.2502 6.4576L9.20853 6.18677L8.0002 3.35344L6.79186 6.16594L3.7502 6.43677L6.0627 8.4576L5.3752 11.4368ZM3.47936 14.0505L4.67332 8.90948L0.68457 5.45281L5.94728 4.99615L8.0002 0.148438L10.0531 4.99615L15.3158 5.45281L11.3271 8.90948L12.521 14.0505L8.0002 11.323L3.47936 14.0505Z"
                    fill="#024F40"
                  ></path>
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5.3752 11.4368L8.0002 9.85344L10.6252 11.4576L9.9377 8.4576L12.2502 6.4576L9.20853 6.18677L8.0002 3.35344L6.79186 6.16594L3.7502 6.43677L6.0627 8.4576L5.3752 11.4368ZM3.47936 14.0505L4.67332 8.90948L0.68457 5.45281L5.94728 4.99615L8.0002 0.148438L10.0531 4.99615L15.3158 5.45281L11.3271 8.90948L12.521 14.0505L8.0002 11.323L3.47936 14.0505Z"
                    fill="#024F40"
                  ></path>
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5.3752 11.4368L8.0002 9.85344L10.6252 11.4576L9.9377 8.4576L12.2502 6.4576L9.20853 6.18677L8.0002 3.35344L6.79186 6.16594L3.7502 6.43677L6.0627 8.4576L5.3752 11.4368ZM3.47936 14.0505L4.67332 8.90948L0.68457 5.45281L5.94728 4.99615L8.0002 0.148438L10.0531 4.99615L15.3158 5.45281L11.3271 8.90948L12.521 14.0505L8.0002 11.323L3.47936 14.0505Z"
                    fill="#024F40"
                  ></path>
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5.3752 11.4368L8.0002 9.85344L10.6252 11.4576L9.9377 8.4576L12.2502 6.4576L9.20853 6.18677L8.0002 3.35344L6.79186 6.16594L3.7502 6.43677L6.0627 8.4576L5.3752 11.4368ZM3.47936 14.0505L4.67332 8.90948L0.68457 5.45281L5.94728 4.99615L8.0002 0.148438L10.0531 4.99615L15.3158 5.45281L11.3271 8.90948L12.521 14.0505L8.0002 11.323L3.47936 14.0505Z"
                    fill="#024F40"
                  ></path>
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5.3752 11.4368L8.0002 9.85344L10.6252 11.4576L9.9377 8.4576L12.2502 6.4576L9.20853 6.18677L8.0002 3.35344L6.79186 6.16594L3.7502 6.43677L6.0627 8.4576L5.3752 11.4368ZM3.47936 14.0505L4.67332 8.90948L0.68457 5.45281L5.94728 4.99615L8.0002 0.148438L10.0531 4.99615L15.3158 5.45281L11.3271 8.90948L12.521 14.0505L8.0002 11.323L3.47936 14.0505Z"
                    fill="#024F40"
                  ></path>
                </svg>
              </span>
              (4.8/5, based on 1.2k reviews)
            </div>
          </div>
          <div>
            <button className="bg-[#024F40] w-full text-white font-medium px-[32px] py-[16px] gap-20 rounded-lg flex items-center justify-between cursor-pointer transition">
              <span className="text-[20px] leading-[24px] font-bold">
                Go to Profile
              </span>
              <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-100 flex justify-center gap-20">
        <div>
          <span>
            <img src="/images/CoursesPage/Cair.svg" alt="" />
          </span>
        </div>
        <div className="text-[#024F40] flex flex-col gap-10 w-[55%]">
          <p className="font-bold text-[80px] leading-[96px] ">
            Explore over 1000 lectures and learning videos.
          </p>
          <span>
            <img src="/images/CoursesPage/People.svg" alt="" />
          </span>
          <p className="font-bold text-[39px] leading-[46.8px] ">
            10,000+ Courses, 1M+ Students, 500+ Instructors
          </p>
        </div>
      </div>
      <div className="mb-50 mt-100 flex gap-[24px] flex-col justify-center items-center text-center text-[#024F40] space-y-4">
        <p className="text-[39px] leading-[46.8px] font-bold w-[33%]">
          Go on a Deep Dive to Find what you need
        </p>
        <input
          type="text"
          placeholder="Search"
          className="bg-white py-3 px-[16px] w-[33%] border-2 border-black rounded-sm"
        />
      </div>
    </>
  );
}

export default CoursesPage;
