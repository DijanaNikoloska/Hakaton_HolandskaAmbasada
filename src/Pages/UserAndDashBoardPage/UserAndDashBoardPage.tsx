function UserAndDashBoardPage() {
  return   <div className="border-2 border-[#024F40] rounded-[8px] my-48 mx-24 py-16 px-24">
    <div className="flex justify-between">
      <div className="flex items-center gap-7">
        <h1 className="text-[#024F40] font-bold text-4xl"
            style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'" }}>
          Welcome Back, User name!
        </h1>

        <p className="text-[#024F40] border-2 border-[#024F40] px-8 py-3 rounded-[4px]">
          <img src="./pictures/emoji_events.svg" alt="" className="inline-block" />
          Active Learning Streak: 10 days
        </p>
      </div>

      <div className="flex gap-1">
        <p className="bg-[#024F40] rounded-[4px] py-2 flex items-center px-4 text-white">View Profile</p>
        <div className="flex items-center justify-center py-2 px-4 border-2 border-[#024F40] rounded-[4px]">
          <img src="./pictures/notifications.svg" alt="" />
        </div>
      </div>
    </div>

    <div className="flex items-center mt-6">
      <div className="w-8 h-8 border-2 border-[#024F40] rounded-full">
        <img src="./pictures/profile.png" alt="" />
      </div>
      <div className="w-8 h-8 border-2 border-[#024F40] rounded-full -translate-x-2">
        <img src="./pictures/profile.png" alt="" />
      </div>
      <div className="w-8 h-8 border-2 border-[#024F40] rounded-full -translate-x-4">
        <img src="./pictures/profile.png" alt="" />
      </div>
      <div className="w-8 h-8 border-2 border-[#024F40] rounded-full -translate-x-6">
        <img src="./pictures/profile.png" alt="" />
      </div>

      <p className="text-[#024F40]">Luiza, Kane + 12 Others</p>
    </div>

    <div className="flex gap-5 mt-11">
      <p className="text-lg text-[#024F40] font-bold">Dashboard</p>
      <p className="text-lg text-[#024F40]">My Courses</p>
      <p className="text-lg text-[#024F40]">Community</p>
      <p className="text-lg text-[#024F40]">Leaderboard</p>
      <p className="text-lg text-[#024F40]">Achievments</p>
    </div>

    <div className="w-full h-1 bg-[#024F40]">
    </div>

    <div className="p-6 rounded-md flex justify-between gap-6 text-[#024F40]">
      <div className="w-[25%] flex flex-col gap-3 justify-center items-center p-4 rounded">
        <div className="w-28 h-28 border rounded-full border-[#024F40]">
          <img src="./pictures/profile.png" alt="" />
        </div>
        <div>
          <h2 className="mt-4 text-xl font-bold">Branimir Belikj
            <img src="./pictures/new_releases.svg" className="inline-block" alt="" />
          </h2>
          <p className="text-center text-sm">@branimir</p>
        </div>
        <p className="mt-2 text-sm">34th place out of 367 learners</p>
        <p className="mt-1 text-sm font-medium">20 badges won</p>
      </div>

      <div className="w-[25%] bg-white rounded-md border-2 border-[#024F40] flex flex-col">
        <div className="p-4 border-b-2 border-b-[#024F40]">
          <h3 className="text-lg font-bold text-[#024F40]">Personal Info</h3>
        </div>
        <div className="p-4 flex-1">
          <ul className="text-sm text-[#024F40] space-y-2">
            <li className="border-b-2 pb-2 border-b-[#024F40]">Gender</li>
            <li className="border-b-2 pb-2 border-b-[#024F40]">Email Address</li>
            <li className="border-b-2 pb-2 border-b-[#024F40]">Phone Number</li>
            <li className="border-b-2 pb-2 border-b-[#024F40]">Current School</li>
            <li className="border-b-2 pb-2 border-b-[#024F40]">Grade/Year Level</li>
            <li className="border-b-2 pb-2 border-b-[#024F40]">Field of Study</li>
          </ul>
        </div>
        <div className="bg-[#024F40] w-full py-2 flex justify-end">
          <button className="text-white px-4 py-2 rounded-md flex gap-2 items-center">
            <span className="text-lg ">Edit Profile</span>
            <img src="./pictures/edit.svg" alt="" />
          </button>
        </div>
      </div>


      <div className="w-[50%] bg-white rounded-md border-2 border-[#024F40] flex flex-col">
        <div className="p-4 border-b-2 border-[#024F40]">
          <h3 className="text-lg font-bold text-green-900">Subjects of Interest</h3>
        </div>
        <div className="p-4 flex flex-wrap gap-2 flex-1">
          <span className="px-3 py-1 border-2 opacity-50 border-[#024F40] text-[#024F40] rounded-md text-sm">Science</span>
          <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">Physics</span>
          <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">Presentation &
            Communication Skills</span>
          <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">Time and Personal
            Mastery</span>
          <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">Programming</span>
          <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">Web Design</span>
          <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">Mathematics</span>
          <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">Algebra</span>
          <span className="px-3 py-1 border-2 opacity-50 border-[#024F40] text-[#024F40] rounded-md text-sm">Chemistry
            Experiments</span>
          <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">Calculus</span>
          <span
            className="px-3 py-1 border-2 opacity-50 border-[#024F40] text-[#024F40] rounded-md text-sm">Chemistry</span>
          <span className="px-3 py-1 border-2 opacity-50 border-[#024F40] text-[#024F40] rounded-md text-sm">Reading</span>
          <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">Leadership and Team
            Management</span>
          <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">Geometry</span>
          <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">Astronomy</span>
          <span
            className="px-3 py-1 border-2 opacity-50 border-[#024F40] text-[#024F40] rounded-md text-sm">Literature</span>
        </div>
        <div className="bg-[#024F40] w-full py-2 flex justify-end">
          <button className="text-white px-4 py-2 rounded-md flex gap-2 items-center">
            <span className="text-lg">Edit Preferences</span>
            <img src="./pictures/apps.svg" alt="" />
          </button>
        </div>
      </div>

    </div>


    <div className="flex justify-between gap-5 text-[#024F40]">
      <div className="w-1/3 border-2 border-[#024F40] p-3 rounded-lg">
        <h2 className="flex items-center font-semibold gap-3"><span className="text-3xl">7</span> Courses Completed</h2>
        <div className="border-2 border-[#024F40] mt-1"></div>
        <div className="flex justify-between items-center mt-3">
          <h1 className="text-5xl font-bold">10%</h1>
          <img src="./pictures/more_horiz.svg" className="w-6 h-6" alt="" />
        </div>
      </div>

      <div className="w-1/3 border-2 border-[#024F40] p-3 rounded-lg">
        <h2 className="flex items-center font-semibold gap-3"><span className="text-3xl">150</span> Points</h2>
        <div className="border-2 border-[#024F40] mt-1"></div>
        <div className="flex justify-between items-center mt-3">
          <h1 className="text-5xl font-bold">5%</h1>
          <img src="./pictures/more_horiz.svg" className="w-6 h-6" alt="" />
        </div>
      </div>

      <div className="w-1/3 border-2 border-[#024F40] p-3 rounded-lg">
        <h2 className="flex items-center font-semibold gap-3"><span className="text-3xl">20</span> Badges Won</h2>
        <div className="border-2 border-[#024F40] mt-1"></div>
        <div className="flex justify-between items-center mt-3">
          <h1 className="text-5xl font-bold">13%</h1>
          <img src="./pictures/more_horiz.svg" className="w-6 h-6" alt="" />
        </div>
      </div>
    </div>

    <div className="flex justify-between mt-14">
      <div className="w-1/3 text-[#024F40] p-3 space-y-3">
        <h1 className="text-5xl font-bold">CONTINUE LEARNING</h1>
        <p className="text-xl">Resume your last lesson on Quantum Mechanics.</p>
        <div className="border-2 border-[#024F40] mt-1"></div>
        <p>The fundamental principles governing particles at the atomic and subatomic levels. This course covers key
          concepts such as wave-particle duality, superposition, quantum entanglement, and the uncertainty principle.
          You’ll also learn about Schrödinger’s equation, quantum states, and applications in modern technology like
          quantum computing.</p>
        <div className="border-2 border-[#024F40] mt-1"></div>
        <div>
          <h1 className="text-xl font-bold">In this course</h1>
          <div className="border border-[#024F40] mt-1"></div>
          <p>Mathematical Foundations of Quantum Mechanics</p>
          <div className="border border-[#024F40] mt-1"></div>
          <p>Wave-Particle Duality</p>
          <div className="border border-[#024F40] mt-1"></div>
          <p>Quantum States and Superposition</p>
        </div>
      </div>

      <div className="w-2/3 border-2 border-[#024F40] rounded-lg">
        <img src="./pictures/img placeholder.png" alt="" className="h-full" />
      </div>
    </div>

    <div className="border-2 border-[#024F40] mt-24"></div>

    <div className="mt-5 space-y-5">
      <h1 className="text-[#024F40] text-5xl font-bold">Achievments</h1>
      <div className="flex justify-between">
        <div className="flex justify-between w-28 h-24">
          <img src="./pictures/Vector.svg" alt="" />
        </div>
        <div className="flex justify-between w-28 h-24">
          <img src="./pictures/Vector.svg" alt="" />
        </div>
        <div className="flex justify-between w-28 h-24">
          <img src="./pictures/Star 1.svg" alt="" />
        </div>
        <div className="flex justify-between w-28 h-24">
          <img src="./pictures/Star 4.svg" alt="" />
        </div>
        <div className="flex justify-between w-28 h-24">
          <img src="./pictures/Star 2.svg" alt="" />
        </div>
        <div className="flex justify-between w-28 h-24">
          <img src="./pictures/Star 5.svg" alt="" />
        </div>
        <div className="flex justify-between w-28 h-24">
          <img src="./pictures/Star 3.svg" alt="" />
        </div>
      </div>
    </div>

    <div className="border-2 border-[#024F40] mt-24"></div>

    <div className="mt-5 space-y-5">
      <h1 className="text-[#024F40] text-5xl font-bold">Leaderboard</h1>
      <div className="flex justify-between gap-3 text-[#024F40]">
        <div className="border-2 border-[#024F40] rounded-lg w-2/3 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-teal-800">
                <th className="text-left p-4 font-medium">Name & Surname</th>
                <th className="text-left p-4 font-medium">Total Points</th>
                <th className="text-left p-4 font-medium">Lectures</th>
                <th className="text-left p-4 font-medium">Achievements</th>
                <th className="text-left p-4 font-medium">Awards</th>
                <th className="w-10 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-teal-800 last:border-b-0">
                <td className="p-4">Slobodka Stankova</td>
                <td className="p-4">120/200</td>
                <td className="p-4">11/52</td>
                <td className="p-4">11/23</td>
                <td className="p-4">3</td>
                <td className="p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b border-teal-800 last:border-b-0">
                <td className="p-4">Luiza Avramova</td>
                <td className="p-4">120/200</td>
                <td className="p-4">11/52</td>
                <td className="p-4">11/23</td>
                <td className="p-4">3</td>
                <td className="p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b border-teal-800 last:border-b-0">
                <td className="p-4">Sande Atanasovski</td>
                <td className="p-4">120/200</td>
                <td className="p-4">11/52</td>
                <td className="p-4">11/23</td>
                <td className="p-4">3</td>
                <td className="p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-4 border-t border-teal-800">
            <button className="flex items-center gap-2 font-medium">
              Expand
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="border-2 border-[#024F40] w-1/3 rounded-lg p-4">
          <div className="flex justify-between items-start mb-6">
            <div className="text-sm font-medium">Highest Achiever</div>
            <div className="text-right font-medium">Letka Avramovska</div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center text-sm">
              <span>Total points:</span>
              <span className="font-medium">128</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Total badges:</span>
              <span className="font-medium">20</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Number of completed courses:</span>
              <span className="font-medium">7</span>
            </div>
          </div>

          <div className="text-center mb-4 font-medium">
            You need 46 points to pass Letka!
          </div>

          <button className="w-full bg-teal-800 hover:bg-teal-900 text-white py-2 rounded-lg">
            Explore courses and take the throne!
          </button>
        </div>
      </div>
    </div>

    <div className="mt-7 space-y-5 text-[#024F40]">
      <h1 className="text-4xl font-bold">Recommended Courses</h1>
      <div className="flex justify-between gap-5 flex-wrap">
        <div className="w-[30%] p-3 border-2 space-y-3 border-[#024F40] rounded-lg">
          <div className="flex items-center justify-between">
            <p className="py-2 px-4 font-bold bg-[#FFE6BE] text-[#FFA717]">
              <img src="./pictures/calculate.svg" className="inline-block" alt="" />
              Mathematics
            </p>
            <img src="./pictures/bookmark.svg" alt="" />
          </div>
          <div className="border-2 border-[#024F40]"></div>
          <h1 className="text-2xl font-bold">Python for Beginners</h1>
          <p>Programming / Web Development</p>
          <p> introductory course designed for those new to programming. You’ll learn the fundamentals of Python,
            including syntax, data types, loops, functions, and basic object-oriented programming (OOP). Through
            hands-on exercises and real-world examples, this course will help you build a strong foundation in coding.
          </p>
          <p className="font-bold">Total Duration: 10 hours</p>
          <p className="font-bold">Number of Classes: 8 lessons</p>
          <p className="font-bold">Quizzes, Projects, Downloadable Resources</p>
        </div>

        <div className="w-[30%] p-3 border-2 space-y-3 border-[#024F40] rounded-lg">
          <div className="flex items-center justify-between">
            <p className="py-2 px-4 font-bold bg-[#FFE6BE] text-[#FFA717]">
              <img src="./pictures/calculate.svg" className="inline-block" alt="" />
              Mathematics
            </p>
            <img src="./pictures/bookmark.svg" alt="" />
          </div>
          <div className="border-2 border-[#024F40]"></div>
          <h1 className="text-2xl font-bold">JavaScript Essentials</h1>
          <p>Programming / Web Development</p>
          <p>Beginner-friendly course that covers the fundamentals of JavaScript, including variables, functions, loops,
            and event handling. You'll learn how to write interactive web applications, manipulate the DOM, and
            understand core programming concepts. Perfect for aspiring developers looking to build a strong foundation
            in front-end development.</p>
          <p className="font-bold">Total Duration: 12 hours</p>
          <p className="font-bold">Number of Classes: 10 lessons</p>
          <p className="font-bold">Coding Exercises, Quizzes, Downloadable Cheat Sheets</p>
        </div>

        <div className="w-[30%] p-3 border-2 space-y-3 border-[#024F40] rounded-lg">
          <div className="flex items-center justify-between">
            <p className="py-2 px-4 font-bold bg-[#FFCACA] text-[#FF5A5D]">
              <img src="./pictures/science.svg" className="inline-block" alt="" />
              Science
            </p>
            <img src="./pictures/bookmark.svg" alt="" />
          </div>
          <div className="border-2 border-[#024F40]"></div>
          <h1 className="text-2xl font-bold">Data Science Basics</h1>
          <p>Data Science / Analytics</p>
          <p>introductory course designed for those new to programming. You’ll learn the fundamentals of Python,
            including syntax, data types, loops, functions, and basic object-oriented programming (OOP). Through
            hands-on exercises and real-world examples, this course will help you build a strong foundation in coding
          </p>
          <p className="font-bold">Total Duration: 15 hours</p>
          <p className="font-bold">Number of Classes: 12 lessons</p>
          <p className="font-bold">Datasets, Jupyter Notebooks, Quizzes</p>
        </div>

        <div className="w-[30%] p-3 border-2 space-y-3 border-[#024F40] rounded-lg">
          <div className="flex items-center justify-between">
            <p className="py-2 px-4 font-bold bg-[#FFCACA] text-[#FF5A5D]">
              <img src="./pictures/science.svg" className="inline-block" alt="" />
              Science
            </p>
            <img src="./pictures/bookmark.svg" alt="" />
          </div>
          <div className="border-2 border-[#024F40]"></div>
          <h1 className="text-2xl font-bold">UX Design Principles</h1>
          <p>Design / User Experience</p>
          <p>Beginner-friendly course that covers the fundamentals of User Experience (UX) design. You’ll explore key
            concepts such as usability, user research, wireframing, prototyping, and accessibility. The course
            introduces essential tools like Figma, Adobe XD, and usability testing methods to help you create intuitive
            and user-friendly digital experiences.
          </p>
          <p className="font-bold">Total Duration: 10 hours</p>
          <p className="font-bold">Number of Classes: 8 lessons</p>
          <p className="font-bold">Figma Templates, Usability Testing Guides, Quizzes</p>
        </div>

        <div className="w-[30%] p-3 border-2 space-y-3 border-[#024F40] rounded-lg">
          <div className="flex items-center justify-between">
            <p className="py-2 px-4 font-bold bg-[#FFCACA] text-[#FF5A5D]">
              <img src="./pictures/science.svg" className="inline-block" alt="" />
              Science
            </p>
            <img src="./pictures/bookmark.svg" alt="" />
          </div>
          <div className="border-2 border-[#024F40]"></div>
          <h1 className="text-2xl font-bold">Machine Learning Intro</h1>
          <p>Data Science / Machine Learning</p>
          <p>Beginner-friendly course that introduces the fundamentals of machine learning. You’ll explore key concepts
            like supervised and unsupervised learning, algorithms, data preprocessing, and model evaluation. The course
            also covers practical applications and common tools like Python, Scikit-learn, and Jupyter Notebooks to help
            you get started with building machine learning models.
          </p>
          <p className="font-bold">Total Duration: 10 hours</p>
          <p className="font-bold">Number of Classes: 8 lessons</p>
          <p className="font-bold">Python Notebooks, Data Sets, Quizzes, Code Examples</p>
        </div>

        <div className="w-[30%] p-3 border-2 space-y-3 border-[#024F40] rounded-lg">
          <div className="flex items-center justify-between">
            <p className="py-2 px-4 font-bold bg-[#B8EE7F] text-[#2D592F]">
              <img src="./pictures/book_2.svg" className="inline-block" alt="" />
              Reading
            </p>
            <img src="./pictures/bookmark.svg" alt="" />
          </div>
          <div className="border-2 border-[#024F40]"></div>
          <h1 className="text-2xl font-bold">Cloud Computing Fund.</h1>
          <p>Cloud Computing / IT Infrastructure</p>
          <p>Beginner-friendly course that introduces the basics of cloud computing, including key concepts such as
            cloud service models (IaaS, PaaS, SaaS), deployment models, and the benefits of cloud-based solutions. The
            course covers popular cloud platforms like AWS, Microsoft Azure, and Google Cloud, with practical insights
            into how organizations leverage cloud services for scalability, security, and efficiency.
          </p>
          <p className="font-bold">Total Duration: 12 hours</p>
          <p className="font-bold">Number of Classes: 10 lessons</p>
          <p className="font-bold">Cloud Service Guides, Platform Access Tutorials, Quizzes, Hands-on Labs</p>
        </div>
      </div>
    </div>
  </div>;
}

export default UserAndDashBoardPage;
