import React, { useEffect, useState } from "react";
import "./LandingPage.css";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

function LandingPage() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  return (
    <>
      <div className="LandingImg">
        <div className="LandingText">
          <b>Expand</b> Your Mind, Elevate <b>Your Future</b>
          <div className="ButtonsContainer">
            <div className="LandingButtons">
              <button className="signup-btn">Sign Up for Free</button>
              <button className="getstarted-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="LandingDescriptionContainer">
        <p className="LandingDescription">
          <b>Our platform is based on 3</b> <br /> simple <b>tasks:</b>
        </p>
      </div>

      <div className="CardsContainer">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div key={card.id} className="Card">
              {card.image && <img src={card.image} alt={card.title} />}
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))
        ) : (
          <p>Loading cards...</p>
        )}
      </div>

      <div className="LearningTagContainer">
        <input
          className="LearningTag"
          type="button"
          value="Start Learning today, your first lesson is for free!"
        />
        <button className="unlock-lesson-btn">
          Unlock your first lesson for free
        </button>
      </div>
      <div className="NewSection">
        <div>
          <img
            src="/images/DiscoverWorld.png"
            alt="Learning"
            className="new-section-image"
          />
        </div>
        <div className="new-section-text">
          <h3>Discover a world of learning - No sing up requered</h3>
          <p>
            Get a glimpse of our platform’s features, explore courses, and
            preview real lessons before you enroll. See how you can learn, track
            progress, and earn certificates!
          </p>
          <div className="new-section-buttons">
            <button className="new-btn-1">Learn More</button>
            <button className="new-btn-2">Sign Up Now</button>
          </div>
        </div>
      </div>

      {/* vtor del */}

      <div className="mb-[150px]">
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="border-2 w-[1720px] h-[697px] py-[80px] px-[146px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[73px] font-bold">
                Explore Our Course Library
              </h1>
              <p className="text-[25px] text-center font-normal">
                Browse through thousands of courses, explore popular topics, and
                preview real lessons. Choose your area of interest and start
                learning!
              </p>
            </div>
            <div className="flex justify-center items-center gap-[24px]">
              <div className="border-2 rounded-lg p-[32px] w-[460px] h-[294px] flex flex-col gap-[32px] bg-greige">
                <div className="w-[396px] h-[142px] gap-[24px]">
                  <div className="flex items-center justify-between border-b-2 border-b-text w-[396px] h-[60px]">
                    <div className="flex items-center gap-7 px-[16px] py-[8px] rounded-lg bg-mathBg">
                      <img src="/images/LandingPage2/calculate.png" />
                      <p className="text-mathTxt text-[16px]">Mathematics</p>
                    </div>
                    <span>
                      <img src="/images/LandingPage2/lock_open.png" />
                    </span>
                  </div>
                  <div className="gap-12 h-[58px]">
                    <p className="text-[25px] font-bold text-text">
                      Javascript Essentials
                    </p>
                    <p className="text-[13px] text-text">
                      Programming / Web Development
                    </p>
                  </div>
                </div>
                <div className="flex justify-around items-center bg-text gap-[39px] border-2 rounded-[5px] w-[396px] h-[56] px-[5px] py-[16px]">
                  <button className="text-white text-[18px] leaninig-[24px] font-bold">
                    Free Preview Lesson Available
                  </button>
                  <span>
                    <img
                      src="/images/LandingPage2/arrow_back_2.png"
                      className="w-[24px] h-[24px]"
                    />
                  </span>
                </div>
              </div>
              <div className="border-2 rounded-lg p-[32px] w-[460px] h-[294px] flex flex-col gap-[32px] bg-greige">
                <div className="w-[396px] h-[142px] gap-[24px]">
                  <div className="flex items-center justify-between border-b-2 border-b-text w-[396px] h-[60px]">
                    <div className="flex items-center gap-7 px-[16px] py-[8px] rounded-lg bg-scienceBg">
                      <img src="/images/LandingPage2/science.png" />
                      <p className="text-scienceTxt text-[16px]">Science</p>
                    </div>
                    <span>
                      <img src="/images/LandingPage2/lock_open.png" />
                    </span>
                  </div>
                  <div className="gap-12 h-[58px]">
                    <p className="text-[25px] font-bold text-text">
                      Data Science Basics
                    </p>
                    <p className="text-[13px] text-text">
                      Data Science / Analytics
                    </p>
                  </div>
                </div>
                <div className="flex justify-around items-center bg-text gap-[39px] border-2 rounded-[5px] w-[396px] h-[56] px-[5px] py-[16px]">
                  <button className="text-white text-[18px] leaninig-[24px] font-bold">
                    Free Preview Lesson Available
                  </button>
                  <span>
                    <img
                      src="/images/LandingPage2/arrow_back_2.png"
                      className="w-[24px] h-[24px]"
                    />
                  </span>
                </div>
              </div>
              <div className="border-2 rounded-lg p-[32px] w-[460px] h-[294px] flex flex-col gap-[32px] bg-greige">
                <div className="w-[396px] h-[142px] gap-[24px]">
                  <div className="flex items-center justify-between border-b-2 border-b-text w-[396px] h-[60px]">
                    <div className="flex items-center gap-7 px-[16px] py-[8px] rounded-lg bg-mathBg">
                      <img src="/images/LandingPage2/calculate.png" />
                      <p className="text-mathTxt text-[16px]">Mathematics</p>
                    </div>
                    <span>
                      <img src="/images/LandingPage2/lock_open.png" />
                    </span>
                  </div>
                  <div className="gap-12 h-[58px]">
                    <p className="text-[25px] font-bold text-text">
                      Python for Beginners
                    </p>
                    <p className="text-[13px] text-text">
                      Programming / Web Development
                    </p>
                  </div>
                </div>
                <div className="flex justify-around items-center bg-text gap-[39px] border-2 border-text bg-white rounded-[5px] w-[396px] h-[56] px-[5px] py-[16px]">
                  <button className="text-text text-[18px] leaninig-[24px] font-bold">
                    Requires Signup
                  </button>
                  <span>
                    <img
                      src="/images/LandingPage2/app_registration.png"
                      className="w-[24px] h-[24px]"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-32 mt-28">
          <div className="flex flex-col items-center justify-center">
            <div className="gap-[22px]">
              <p className="text-[61px] font-bold text-center text-text">
                Earn Certificates & Stand Out!
              </p>
              <p className="text-[25px] text-text">
                Complete courses, take quizzes, and receive certificates to
                showcase your achievements!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-20">
            <div className="w-[1428px] h-[224px] flex justify-around items-center">
              <div className="w-[65%]">
                <p className="text-[39px] font-bold text-text">
                  Celebrate Your Progress!
                </p>
                <p className="text-text text-[25px]">
                  Every step forward is a milestone! Earn badges and
                  achievements as you complete lessons, master new skills, and
                  reach learning goals. Stay motivated and showcase your
                  progress with pride!
                </p>
              </div>
              <span className="w-1/4">
                <img src="/images/LandingPage2/Row.png" alt="" />
              </span>
            </div>
            <div className="flex justify-center items-center relative">
              <span className="w-1/3">
                <img src="/images/LandingPage2/Group 482179.png" alt="" />
              </span>
              <div className="w-1/3">
                <p className="text-[39px] font-bold text-text">
                  Earn Recognized Certificates!
                </p>
                <p className="text-text text-[25px]">
                  Turn your learning into credentials! Complete courses, pass
                  quizzes, and receive official certificates to showcase your
                  expertise. Boost your resume, share your success, and stand
                  out in your field!
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-around items-center bg-text gap-[39px] border-2 border-text rounded-[5px] w-[552px] h-[56px] px-[5px] py-[16px]">
                <button className="text-[18px] leaninig-[24px] font-bold">
                  Unlock Your First Certificate – Join Now!
                </button>
                <span>
                  <img
                    src="/images/LandingPage2/arrow_back_2.png"
                    className="w-[24px] h-[24px]"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[64px]">
          <div className="flex items-left justify-around mt-40 pb-[64px] border-b-4 border-text">
            <div className="w-[844px] h-[466px] flex flex-col items-start justify-center gap-[60px]">
              <p className="text-[80px] leaning-[96px] font-bold text-text">
                Trusted by Learners Worldwide!
              </p>
              <span>
                <img src="/images/LandingPage2/Frame 2087327492.svg" />
              </span>
              <p className="text-[25px] font-bold text-text">
                500,000+learners | 10,000+ Courses | 95% Satisfaction Rate
              </p>
            </div>
            <div className="w-[406px] h-[585px] px-[32px] py-[64px] rounded-[5px] flex flex-col items-start justify-center gap-[32px] border-2 bg-[#D9D8D1] border-text">
              <span>
                <img src="/images/LandingPage2/image.svg" alt="" />
              </span>
              <div className="border-t-2 border-text">
                <p className="text-[31px] font-bold text-text">
                  This platform made learning so easy and fun! The lessons are
                  engaging, and I love tracking my progress
                </p>
                <p className="text-[24px] text-text">— Michael T.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[64px] w-full mt-28 flex flex-col items-center justify-between gap-40 ">
          <div className="text-center">
            <p className="text-[#233048] text-[100px] leading-[120px] font-bold">
              Courses
            </p>
            <p className="text-[#944680] text-[39px] leading-[46.8px] font-bold">
              150+ free courses and counting!
            </p>
          </div>
          <div className="w-full flex justify-center gap-10 border-b-4 border-text pb-14">
            <div className="flex flex-col items-start gap-[24px]">
              <div className="w-[845px] h-[524.44px] rounded-[5px] border-2"></div>
              <div className="flex items-start justify-center gap-4">
                <span>
                  <img src="/images/LandingPage2/human.svg" alt="" />
                </span>
                <div>
                  <p className="text-[39px] font-bold text-text">
                    Basics of Quantnum Mechanics
                  </p>
                  <p className="text-[39px] text-text">Physics World</p>
                  <p className="text-[31px] text-text">900K views</p>
                </div>
              </div>
            </div>
            {/* col-gap-[33px] row-gap-[45px] */}
            <div className="flex flex-wrap gap-x-[33px] gap-y-[45px]">
              <div className="flex flex-col gap-[20px]">
                <div className="w-[405px] h-[246.18px] rounded-[5px] border-2"></div>
                <div className="flex items-start justify-center gap-4">
                  <span className="w-[49.51px] h-[49.51px]">
                    <img src="/images/LandingPage2/human.svg" alt="" />
                  </span>
                  <div>
                    <p className="text-[22px] font-bold text-text">
                      Basics of Quantnum Mechanics
                    </p>
                    <p className="text-[17.88px] text-text">Physics World</p>
                    <p className="text-[17.88px] text-text">900K views</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[20px]">
                <div className="w-[405px] h-[246.18px] rounded-[5px] border-2"></div>
                <div className="flex items-start justify-center gap-4">
                  <span className="w-[49.51px] h-[49.51px]">
                    <img src="/images/LandingPage2/human2.svg" alt="" />
                  </span>
                  <div>
                    <p className="text-[22px] font-bold text-text">
                      Quantnum Entanglement Explained
                    </p>
                    <p className="text-[17.88px] text-text">Science Today</p>
                    <p className="text-[17.88px] text-text">750K views</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="w-[405px] h-[246.18px] rounded-[5px] border-2"></div>
                <div className="flex items-start justify-center gap-4">
                  <span className="w-[49.51px] h-[49.51px]">
                    <img src="/images/LandingPage2/human.svg" alt="" />
                  </span>
                  <div>
                    <p className="text-[22px] font-bold text-text">
                      Basics of Quantnum Mechanics
                    </p>
                    <p className="text-[17.88px] text-text">Physics World</p>
                    <p className="text-[17.88px] text-text">900K views</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="w-[405px] h-[246.18px] rounded-[5px] border-2"></div>
                <div className="flex items-start justify-center gap-4">
                  <span className="w-[49.51px] h-[49.51px]">
                    <img src="/images/LandingPage2/human2.svg" alt="" />
                  </span>
                  <div>
                    <p className="text-[22px] font-bold text-text">
                      Quantnum Entanglement Explained
                    </p>
                    <p className="text-[17.88px] text-text">Science Today</p>
                    <p className="text-[17.88px] text-text">750K views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--    
        <span className="text-[100px] font-bold leading-[20px] text-[#D9D8D1]">Unlock your potential</span>
        <p className="text-[100px] leading-[120px] text-text font-bold">with our professors.</p>
    </div> --> */}
        <div className="my-28">
          <span>
            <img src="/images/LandingPage2/Frame.png" alt="" />
          </span>
        </div>
        {/* <!-- <div className="flex flex-col items-center justify-center space-y-20">
        <p className="text-[61px] leading-[73.2px] font-bold text-[#233048]">Our Partners</p>
        <div className="flex space-x-20 justify-center items-center">
            <span><img src="/images/LandingPage2/logos_google.svg" /></span>
            <span><img src="/images/LandingPage2/microsoft-6.svg" /></span>
            <span><img src="/images/LandingPage2/facebook-5.svg" /></span>
            <span><img src="/images/LandingPage2/spotify-logo-with-text-1.svg" /></span>
            <span><img src="/images/LandingPage2/logo-amazon.svg" /></span>
        </div>
    </div> --> */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-[39px] leading-[46.8px] font-bold text-[#233048]">
            Our clients
          </p>
          <div className="border-2 border-text rounded-[5px] p-10">
            <div className="border-b-4 border-text flex pb-10">
              <div className="flex justify-center space-x-4">
                <span>
                  <img
                    src="/images/LandingPage2/image.svg"
                    className="w-[102px] h-[102px]"
                  />
                </span>
                <div className="border-l-2 border-text pl-4">
                  <p className="text-[24px] leading-[32px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, inventore id assumenda rerum soluta sed voluptatum
                    doloribus velit exercitationem nisi distinctio esse totam
                    architecto maxime voluptas aliquam dolore officia eveniet.
                    Sint, cumque? Totam, quae velit, voluptatum corporis omnis
                    ea provident blanditiis earum nobis illum odio voluptate in
                    aliquam maxime inventore?
                  </p>
                  <p className="text-[24px] leading-[30px] font-medium">
                    — David K.
                  </p>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <span>
                  <img
                    src="/images/LandingPage2/image (1).svg"
                    className="w-[102px] h-[102px]"
                  />
                </span>
                <div className="border-l-2 border-text pl-4">
                  <p className="text-[24px] leading-[32px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, inventore id assumenda rerum soluta sed voluptatum
                    doloribus velit exercitationem nisi distinctio esse totam
                    architecto maxime voluptas aliquam dolore officia eveniet.
                    Sint, cumque? Totam, quae velit, voluptatum corporis omnis
                    ea provident blanditiis earum nobis illum odio voluptate in
                    aliquam maxime inventore?
                  </p>
                  <p className="text-[24px] leading-[30px] font-medium">
                    — Michael T.
                  </p>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <span>
                  <img
                    src="/images/LandingPage2/image (2).svg"
                    className="w-[102px] h-[102px]"
                  />
                </span>
                <div className="border-l-2 border-text pl-4">
                  <p className="text-[24px] leading-[32px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, inventore id assumenda rerum soluta sed voluptatum
                    doloribus velit exercitationem nisi distinctio esse totam
                    architecto maxime voluptas aliquam dolore officia eveniet.
                    Sint, cumque? Totam, quae velit, voluptatum corporis omnis
                    ea provident blanditiis earum nobis illum odio voluptate in
                    aliquam maxime inventore?
                  </p>
                  <p className="text-[24px] leading-[30px] font-medium">
                    — Sarah L.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-end pt-4 flex justify-end">
              <span className="">
                <img src="/img/Frame 2087327525.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-14 mt-28">
          <div className="text-center px-[389px] space-y-14">
            <p className="text-[#233048] text-[99.8px] leading-[119.75px] font-bold">
              Get Started For Free!
            </p>
            <p className="text-text text-[40.9px] leading-[49.08px] font-bold">
              Complete courses, take quizzes, and receive certificates to
              showcase your achievements!
            </p>
          </div>
          <div className="flex justify-center items-center space-x-10 gap-[10px]">
            <button className="py-[30.74px] px-[38.42px] bg-white border-4 border-[#2A3A57] text-[37.46px] leading-[45px] font-bold text-text rounded-[5px]">
              Try a Free Lesson
            </button>
            <button className="py-[30.74px] px-[38.42px] bg-white border-4 border-[#2A3A57] text-[37.46px] leading-[45px] font-bold text-text rounded-[5px]">
              Browse Courses
            </button>
            <button className="py-[30.74px] px-[38.42px] bg-white border-4 border-[#2A3A57] text-[37.46px] leading-[45px] font-bold text-text rounded-[5px]">
              Join the Community
            </button>
          </div>
          <div className="flex justify-center items-center space-x-10 gap-[30px]">
            <button className="w-[389.97px] h-[53.79px] gap-[9.605263710021973px] px-[30.73684310913086px] py-[15.36842155456543px] rounded-[4.8px] bg-[#fbfbf8] border-[1.92px] border-[#024f40] text-[19.210527420043945px] font-bold text-[#024f40]">
              Start Learning for Free!
            </button>
            <button className="w-[389.97px] h-[53.79px] gap-[37.46052932739258px] px-[30.73684310913086px] py-[15.36842155456543px] rounded-[4.8px] bg-[#024f40] border-[1.92px] border-[#024f40] text-[19.210527420043945px] font-bold text-[#f1f0e8]">
              Sign Up &#x26; Personalize Your Journey!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
