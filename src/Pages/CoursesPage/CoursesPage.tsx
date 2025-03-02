import CardList from "../Cards/Cards";

function CoursesPage() {
  return (
    <>
      <div className="NewSection">
        <div>
          <img
            src="/images/Hero Section - Illustration.png"
            alt="Learning"
            className="Hero Section - Illustration"
          />
        </div>
        <div className="new-section-text">
          <h3>Unlock your learning potential</h3>
          <p>
            Explore a wide range of beginner-friendly courses designed to build
            your skills and knowledge. Whether you're starting fresh or looking
            to strengthen your foundation, our expertly crafted lessons will
            guide you every step of the way. Start learning today!
          </p>
        </div>
      </div>
      <CardList />
      <div className="flex justify-between  border-b-4 border-[#024F40]">
        <p className="text-[39px] text-[#024F40] font-bold">New & Noteworthy</p>
        <span><img src="/images/CoursesPage/keyboard_arrow_down.svg" alt="" /></span>
    </div>
    <div className="mt-100 flex items-center justify-center gap-10 cursor-default">
        <div className="flex flex-col justify-between items-start gap-6 w-[50%]">
            <span><img src="/images/CoursesPage/Vector.svg" alt="" /></span>
            <p className="text-[80px] leading-[96px] font-bold text-[#024F40]">Beginner Algebra: Foundations for Problem Solving</p>
            <p className="text-[39px] leading-[46.8px] font-bold text-[#024F40]">Learn the fundamentals of algebra, including equations, variables, and problem-solving techniques.</p>
            <div className="flex space-x-6">
                <button className="text-[20px] leading-[24px] text-[#024F40] font-bold py-[16px] px-[32px] border-2 bg-white rounded-lg cursor-pointer">Details</button>
                <button className="bg-[#024F40] text-white font-medium px-[32px] py-[16px] gap-20 rounded-lg flex items-center justify-between cursor-pointer transition">
                    <span className="mr-3 text-[20px] leading-[24px] font-bold">JOIN NOW!</span>
                    <span>&gt;</span>
                </button>
            </div>
        </div>
        <div className="bg-white p-[24px] w-[22.5%] rounded-lg border border-[#024F40] space-y-4">
            <span className="rounded-lg"><img src="/images/CoursesPage/pexels-max-fischer.svg" /></span>
            <div className="space-y-4 text-[#024F40]">
                <p className="border-b-2 border-[#024F40]  font-bold text-[20px] leading-[24px]">Jackie Von Berger</p>
                <p className="text-[16px] leading-[19.2px]">"Passionate about making complex mathematical concepts easy to understand. Specializes in Algebra, Calculus, and Mathematical Logic. Dedicated to helping students develop problem-solving skills and logical thinking."</p>
            </div>
            <div className="flex flex-col gap-4">
               <p className="border-b"><span className="border-[#024F40] text-[16px] leading-[19.2px] text-[#024F40]">Professor at XYZ University, 10+ years of teaching experience</span></p>
                <span className="border-b border-[#024F40] text-[16px] leading-[19.2px] text-[#024F40]">PhD in Mathematics, Hardvard University</span>
                <span className="border-b border-[#024F40] text-[16px] leading-[19.2px] text-[#024F40]">
                    &#9734 &#9734 &#9734 &#9734 &#9734  (4.8/5, based on 1.2k reviews)
                </span>
            </div>
            <div>
                <button className="bg-[#024F40] text-white font-medium px-[32px] py-[16px] gap-20 rounded-lg flex items-center justify-between cursor-pointer transition">
                    <span className="mr-3 text-[20px] leading-[24px] font-bold">Go to Profile</span>
                    <span>&gt;</span>
                </button>
            </div>
        </div>
    </div>
    <div className="mt-100 flex justify-center gap-20">
        <div>
            <span><img src="/images/CoursesPage/Cair.svg" alt="" /></span>
        </div>
        <div className="text-[#024F40] flex flex-col gap-10 w-[55%]">
            <p className="font-bold text-[80px] leading-[96px] ">Explore over 1000 lectures and learning videos.</p>
            <span><img src="/images/CoursesPage/People.svg" alt="" /></span>
            <p className="font-bold text-[39px] leading-[46.8px] ">10,000+ Courses, 1M+ Students, 500+ Instructors</p>
        </div>
    </div>
    <div className="mb-50 mt-100 flex flex-col justify-center items-center text-center text-[#024F40] space-y-4">
        <p className="text-[39px] leading-[46.8px] font-bold w-[33%]">Go on a Deep Dive to Find what you need</p>
        <input type="text" placeholder="Search" className="bg-white py-3 px-[16px] w-[33%] border-2 border-black rounded-sm" />
    </div>
    </>
  );
}

export default CoursesPage;
