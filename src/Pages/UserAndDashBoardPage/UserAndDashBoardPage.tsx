function UserAndDashBoardPage() {
  return (
    <div className="border-2 border-[#024F40] rounded-[8px] my-48 mx-24 py-16 px-24">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-7">
          <h1
            className="text-[#024F40] font-bold text-4xl"
            style={{
              fontFamily:
                "'Inter', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
            }}
          >
            Welcome Back, User name!
          </h1>

          <p className="flex text-[#024F40] border-2 border-[#024F40] px-8 py-3 rounded-[4px] m-auto">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              preserveAspectRatio="xMidYMid meet"
            >
              <mask
                id="mask0_6_1068"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="25"
              >
                <rect y="0.5" width="24" height="24" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_6_1068)">
                <path
                  d="M7 21.5V19.5H11V16.4C10.1833 16.2167 9.45417 15.8708 8.8125 15.3625C8.17083 14.8542 7.7 14.2167 7.4 13.45C6.15 13.3 5.10417 12.7542 4.2625 11.8125C3.42083 10.8708 3 9.76667 3 8.5V7.5C3 6.95 3.19583 6.47917 3.5875 6.0875C3.97917 5.69583 4.45 5.5 5 5.5H7V3.5H17V5.5H19C19.55 5.5 20.0208 5.69583 20.4125 6.0875C20.8042 6.47917 21 6.95 21 7.5V8.5C21 9.76667 20.5792 10.8708 19.7375 11.8125C18.8958 12.7542 17.85 13.3 16.6 13.45C16.3 14.2167 15.8292 14.8542 15.1875 15.3625C14.5458 15.8708 13.8167 16.2167 13 16.4V19.5H17V21.5H7ZM7 11.3V7.5H5V8.5C5 9.13333 5.18333 9.70417 5.55 10.2125C5.91667 10.7208 6.4 11.0833 7 11.3ZM12 14.5C12.8333 14.5 13.5417 14.2083 14.125 13.625C14.7083 13.0417 15 12.3333 15 11.5V5.5H9V11.5C9 12.3333 9.29167 13.0417 9.875 13.625C10.4583 14.2083 11.1667 14.5 12 14.5ZM17 11.3C17.6 11.0833 18.0833 10.7208 18.45 10.2125C18.8167 9.70417 19 9.13333 19 8.5V7.5H17V11.3Z"
                  fill="#024F40"
                ></path>
              </g>
            </svg>
            Active Learning Streak: 10 days
          </p>
        </div>

        <div className="flex gap-1 my-auto">
          <p className="bg-[#024F40] rounded-[4px] py-2 flex items-center px-4 text-white">
            View Profile
          </p>
          <div
className="flex justify-center items-center p-2 rounded bg-[#f1f0e8] border-2 border-[#024f40] w-[40px] h-[40px]"
>
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6"
    preserveAspectRatio="xMidYMid meet"
  >
    <mask
      id="mask0_6_1076"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="25"
    >
      <rect y="0.5" width="24" height="24" fill="#D9D9D9"></rect>
    </mask>
    <g mask="url(#mask0_6_1076)">
      <path
        d="M4 19.5V17.5H6V10.5C6 9.11667 6.41667 7.8875 7.25 6.8125C8.08333 5.7375 9.16667 5.03333 10.5 4.7V4C10.5 3.58333 10.6458 3.22917 10.9375 2.9375C11.2292 2.64583 11.5833 2.5 12 2.5C12.4167 2.5 12.7708 2.64583 13.0625 2.9375C13.3542 3.22917 13.5 3.58333 13.5 4V4.7C14.8333 5.03333 15.9167 5.7375 16.75 6.8125C17.5833 7.8875 18 9.11667 18 10.5V17.5H20V19.5H4ZM12 22.5C11.45 22.5 10.9792 22.3042 10.5875 21.9125C10.1958 21.5208 10 21.05 10 20.5H14C14 21.05 13.8042 21.5208 13.4125 21.9125C13.0208 22.3042 12.55 22.5 12 22.5ZM8 17.5H16V10.5C16 9.4 15.6083 8.45833 14.825 7.675C14.0417 6.89167 13.1 6.5 12 6.5C10.9 6.5 9.95833 6.89167 9.175 7.675C8.39167 8.45833 8 9.4 8 10.5V17.5Z"
        fill="#024F40"
      ></path>
    </g>
  </svg>
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

      <div className="w-full h-1 bg-[#024F40]"></div>

      <div className="p-6 rounded-md flex justify-between gap-6 text-[#024F40]">
        <div className="w-[25%] flex flex-col gap-3 justify-center items-center p-4 rounded">
          <div className="w-28 h-28 border rounded-full border-[#024F40]">
            <img src="./pictures/profile.png" alt="" />
          </div>
          <div>
            <h2 className="mt-4 text-xl font-bold">
              Branimir Belikj
              <img
                src="./pictures/new_releases.svg"
                className="inline-block"
                alt=""
              />
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
              <li className="border-b-2 pb-2 border-b-[#024F40]">
                Email Address
              </li>
              <li className="border-b-2 pb-2 border-b-[#024F40]">
                Phone Number
              </li>
              <li className="border-b-2 pb-2 border-b-[#024F40]">
                Current School
              </li>
              <li className="border-b-2 pb-2 border-b-[#024F40]">
                Grade/Year Level
              </li>
              <li className="border-b-2 pb-2 border-b-[#024F40]">
                Field of Study
              </li>
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
            <h3 className="text-lg font-bold text-green-900">
              Subjects of Interest
            </h3>
          </div>
          <div className="p-4 flex flex-wrap gap-2 flex-1">
            <span className="px-3 py-1 border-2 opacity-50 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Science
            </span>
            <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Physics
            </span>
            <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Presentation & Communication Skills
            </span>
            <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Time and Personal Mastery
            </span>
            <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Programming
            </span>
            <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Web Design
            </span>
            <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Mathematics
            </span>
            <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Algebra
            </span>
            <span className="px-3 py-1 border-2 opacity-50 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Chemistry Experiments
            </span>
            <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Calculus
            </span>
            <span className="px-3 py-1 border-2 opacity-50 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Chemistry
            </span>
            <span className="px-3 py-1 border-2 opacity-50 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Reading
            </span>
            <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Leadership and Team Management
            </span>
            <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Geometry
            </span>
            <span className="px-3 py-1 border-2 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Astronomy
            </span>
            <span className="px-3 py-1 border-2 opacity-50 border-[#024F40] text-[#024F40] rounded-md text-sm">
              Literature
            </span>
          </div>
          <div className="bg-[#024F40] w-full py-2 flex justify-end">
            <button className="text-white px-4 py-2 rounded-md flex gap-2 items-center justify-center">
              <span className="text-lg">Edit Preferences</span>
              <svg
  width="24"
  height="25"
  viewBox="0 0 24 25"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6"
  preserveAspectRatio="xMidYMid meet"
>
  <mask
    id="mask0_6_1186"
    maskUnits="userSpaceOnUse"
    x="0"
    y="0"
    width="24"
    height="25"
  >
    <rect y="0.5" width="24" height="24" fill="#D9D9D9"></rect>
  </mask>
  <g mask="url(#mask0_6_1186)">
    <path
      d="M6 20.5C5.45 20.5 4.97917 20.3042 4.5875 19.9125C4.19583 19.5208 4 19.05 4 18.5C4 17.95 4.19583 17.4792 4.5875 17.0875C4.97917 16.6958 5.45 16.5 6 16.5C6.55 16.5 7.02083 16.6958 7.4125 17.0875C7.80417 17.4792 8 17.95 8 18.5C8 19.05 7.80417 19.5208 7.4125 19.9125C7.02083 20.3042 6.55 20.5 6 20.5ZM12 20.5C11.45 20.5 10.9792 20.3042 10.5875 19.9125C10.1958 19.5208 10 19.05 10 18.5C10 17.95 10.1958 17.4792 10.5875 17.0875C10.9792 16.6958 11.45 16.5 12 16.5C12.55 16.5 13.0208 16.6958 13.4125 17.0875C13.8042 17.4792 14 17.95 14 18.5C14 19.05 13.8042 19.5208 13.4125 19.9125C13.0208 20.3042 12.55 20.5 12 20.5ZM18 20.5C17.45 20.5 16.9792 20.3042 16.5875 19.9125C16.1958 19.5208 16 19.05 16 18.5C16 17.95 16.1958 17.4792 16.5875 17.0875C16.9792 16.6958 17.45 16.5 18 16.5C18.55 16.5 19.0208 16.6958 19.4125 17.0875C19.8042 17.4792 20 17.95 20 18.5C20 19.05 19.8042 19.5208 19.4125 19.9125C19.0208 20.3042 18.55 20.5 18 20.5ZM6 14.5C5.45 14.5 4.97917 14.3042 4.5875 13.9125C4.19583 13.5208 4 13.05 4 12.5C4 11.95 4.19583 11.4792 4.5875 11.0875C4.97917 10.6958 5.45 10.5 6 10.5C6.55 10.5 7.02083 10.6958 7.4125 11.0875C7.80417 11.4792 8 11.95 8 12.5C8 13.05 7.80417 13.5208 7.4125 13.9125C7.02083 14.3042 6.55 14.5 6 14.5ZM12 14.5C11.45 14.5 10.9792 14.3042 10.5875 13.9125C10.1958 13.5208 10 13.05 10 12.5C10 11.95 10.1958 11.4792 10.5875 11.0875C10.9792 10.6958 11.45 10.5 12 10.5C12.55 10.5 13.0208 10.6958 13.4125 11.0875C13.8042 11.4792 14 11.95 14 12.5C14 13.05 13.8042 13.5208 13.4125 13.9125C13.0208 14.3042 12.55 14.5 12 14.5ZM18 14.5C17.45 14.5 16.9792 14.3042 16.5875 13.9125C16.1958 13.5208 16 13.05 16 12.5C16 11.95 16.1958 11.4792 16.5875 11.0875C16.9792 10.6958 17.45 10.5 18 10.5C18.55 10.5 19.0208 10.6958 19.4125 11.0875C19.8042 11.4792 20 11.95 20 12.5C20 13.05 19.8042 13.5208 19.4125 13.9125C19.0208 14.3042 18.55 14.5 18 14.5ZM6 8.5C5.45 8.5 4.97917 8.30417 4.5875 7.9125C4.19583 7.52083 4 7.05 4 6.5C4 5.95 4.19583 5.47917 4.5875 5.0875C4.97917 4.69583 5.45 4.5 6 4.5C6.55 4.5 7.02083 4.69583 7.4125 5.0875C7.80417 5.47917 8 5.95 8 6.5C8 7.05 7.80417 7.52083 7.4125 7.9125C7.02083 8.30417 6.55 8.5 6 8.5ZM12 8.5C11.45 8.5 10.9792 8.30417 10.5875 7.9125C10.1958 7.52083 10 7.05 10 6.5C10 5.95 10.1958 5.47917 10.5875 5.0875C10.9792 4.69583 11.45 4.5 12 4.5C12.55 4.5 13.0208 4.69583 13.4125 5.0875C13.8042 5.47917 14 5.95 14 6.5C14 7.05 13.8042 7.52083 13.4125 7.9125C13.0208 8.30417 12.55 8.5 12 8.5ZM18 8.5C17.45 8.5 16.9792 8.30417 16.5875 7.9125C16.1958 7.52083 16 7.05 16 6.5C16 5.95 16.1958 5.47917 16.5875 5.0875C16.9792 4.69583 17.45 4.5 18 4.5C18.55 4.5 19.0208 4.69583 19.4125 5.0875C19.8042 5.47917 20 5.95 20 6.5C20 7.05 19.8042 7.52083 19.4125 7.9125C19.0208 8.30417 18.55 8.5 18 8.5Z"
      fill="#F1F0E8"
    ></path>
  </g>
</svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-5 text-[#024F40]">
        <div className="w-1/3 border-2 border-[#024F40] bg-[#fbfbf8] p-3 rounded-lg">
          <h2 className="flex items-center font-semibold gap-3">
            <span className="text-3xl">7</span> Courses Completed
          </h2>
          <div className="border-2 border-[#024F40] mt-1"></div>
          <div className="flex justify-between items-center mt-3">
            <h1 className="text-5xl font-bold">10%</h1>
            <svg
  width="25"
  height="24"
  viewBox="0 0 25 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="flex-grow-0 flex-shrink-0 w-6 h-6"
  preserveAspectRatio="xMidYMid meet"
>
  <mask
    id="mask0_6_1199"
    maskUnits="userSpaceOnUse"
    x="0"
    y="0"
    width="25"
    height="24"
  >
    <rect x="0.666504" width="24" height="24" fill="#D9D9D9"></rect>
  </mask>
  <g mask="url(#mask0_6_1199)">
    <path
      d="M6.6665 14C6.1165 14 5.64567 13.8042 5.254 13.4125C4.86234 13.0208 4.6665 12.55 4.6665 12C4.6665 11.45 4.86234 10.9792 5.254 10.5875C5.64567 10.1958 6.1165 10 6.6665 10C7.2165 10 7.68734 10.1958 8.079 10.5875C8.47067 10.9792 8.6665 11.45 8.6665 12C8.6665 12.55 8.47067 13.0208 8.079 13.4125C7.68734 13.8042 7.2165 14 6.6665 14ZM12.6665 14C12.1165 14 11.6457 13.8042 11.254 13.4125C10.8623 13.0208 10.6665 12.55 10.6665 12C10.6665 11.45 10.8623 10.9792 11.254 10.5875C11.6457 10.1958 12.1165 10 12.6665 10C13.2165 10 13.6873 10.1958 14.079 10.5875C14.4707 10.9792 14.6665 11.45 14.6665 12C14.6665 12.55 14.4707 13.0208 14.079 13.4125C13.6873 13.8042 13.2165 14 12.6665 14ZM18.6665 14C18.1165 14 17.6457 13.8042 17.254 13.4125C16.8623 13.0208 16.6665 12.55 16.6665 12C16.6665 11.45 16.8623 10.9792 17.254 10.5875C17.6457 10.1958 18.1165 10 18.6665 10C19.2165 10 19.6873 10.1958 20.079 10.5875C20.4707 10.9792 20.6665 11.45 20.6665 12C20.6665 12.55 20.4707 13.0208 20.079 13.4125C19.6873 13.8042 19.2165 14 18.6665 14Z"
      fill="#024F40"
    ></path>
  </g>
</svg>
          </div>
        </div>

        <div className="w-1/3 border-2 border-[#024F40] bg-[#fbfbf8] p-3 rounded-lg">
          <h2 className="flex items-center font-semibold gap-3">
            <span className="text-3xl">150</span> Points
          </h2>
          <div className="border-2 border-[#024F40] mt-1"></div>
          <div className="flex justify-between items-center mt-3">
            <h1 className="text-5xl font-bold">5%</h1>
            <svg
  width="25"
  height="24"
  viewBox="0 0 25 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="flex-grow-0 flex-shrink-0 w-6 h-6"
  preserveAspectRatio="xMidYMid meet"
>
  <mask
    id="mask0_6_1199"
    maskUnits="userSpaceOnUse"
    x="0"
    y="0"
    width="25"
    height="24"
  >
    <rect x="0.666504" width="24" height="24" fill="#D9D9D9"></rect>
  </mask>
  <g mask="url(#mask0_6_1199)">
    <path
      d="M6.6665 14C6.1165 14 5.64567 13.8042 5.254 13.4125C4.86234 13.0208 4.6665 12.55 4.6665 12C4.6665 11.45 4.86234 10.9792 5.254 10.5875C5.64567 10.1958 6.1165 10 6.6665 10C7.2165 10 7.68734 10.1958 8.079 10.5875C8.47067 10.9792 8.6665 11.45 8.6665 12C8.6665 12.55 8.47067 13.0208 8.079 13.4125C7.68734 13.8042 7.2165 14 6.6665 14ZM12.6665 14C12.1165 14 11.6457 13.8042 11.254 13.4125C10.8623 13.0208 10.6665 12.55 10.6665 12C10.6665 11.45 10.8623 10.9792 11.254 10.5875C11.6457 10.1958 12.1165 10 12.6665 10C13.2165 10 13.6873 10.1958 14.079 10.5875C14.4707 10.9792 14.6665 11.45 14.6665 12C14.6665 12.55 14.4707 13.0208 14.079 13.4125C13.6873 13.8042 13.2165 14 12.6665 14ZM18.6665 14C18.1165 14 17.6457 13.8042 17.254 13.4125C16.8623 13.0208 16.6665 12.55 16.6665 12C16.6665 11.45 16.8623 10.9792 17.254 10.5875C17.6457 10.1958 18.1165 10 18.6665 10C19.2165 10 19.6873 10.1958 20.079 10.5875C20.4707 10.9792 20.6665 11.45 20.6665 12C20.6665 12.55 20.4707 13.0208 20.079 13.4125C19.6873 13.8042 19.2165 14 18.6665 14Z"
      fill="#024F40"
    ></path>
  </g>
</svg>
          </div>
        </div>

        <div className="w-1/3 border-2 border-[#024F40] bg-[#fbfbf8] p-3 rounded-lg">
          <h2 className="flex items-center font-semibold gap-3">
            <span className="text-3xl">20</span> Badges Won
          </h2>
          <div className="border-2 border-[#024F40] mt-1"></div>
          <div className="flex justify-between items-center mt-3">
            <h1 className="text-5xl font-bold">13%</h1>
            <svg
  width="25"
  height="24"
  viewBox="0 0 25 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="flex-grow-0 flex-shrink-0 w-6 h-6"
  preserveAspectRatio="xMidYMid meet"
>
  <mask
    id="mask0_6_1199"
    maskUnits="userSpaceOnUse"
    x="0"
    y="0"
    width="25"
    height="24"
  >
    <rect x="0.666504" width="24" height="24" fill="#D9D9D9"></rect>
  </mask>
  <g mask="url(#mask0_6_1199)">
    <path
      d="M6.6665 14C6.1165 14 5.64567 13.8042 5.254 13.4125C4.86234 13.0208 4.6665 12.55 4.6665 12C4.6665 11.45 4.86234 10.9792 5.254 10.5875C5.64567 10.1958 6.1165 10 6.6665 10C7.2165 10 7.68734 10.1958 8.079 10.5875C8.47067 10.9792 8.6665 11.45 8.6665 12C8.6665 12.55 8.47067 13.0208 8.079 13.4125C7.68734 13.8042 7.2165 14 6.6665 14ZM12.6665 14C12.1165 14 11.6457 13.8042 11.254 13.4125C10.8623 13.0208 10.6665 12.55 10.6665 12C10.6665 11.45 10.8623 10.9792 11.254 10.5875C11.6457 10.1958 12.1165 10 12.6665 10C13.2165 10 13.6873 10.1958 14.079 10.5875C14.4707 10.9792 14.6665 11.45 14.6665 12C14.6665 12.55 14.4707 13.0208 14.079 13.4125C13.6873 13.8042 13.2165 14 12.6665 14ZM18.6665 14C18.1165 14 17.6457 13.8042 17.254 13.4125C16.8623 13.0208 16.6665 12.55 16.6665 12C16.6665 11.45 16.8623 10.9792 17.254 10.5875C17.6457 10.1958 18.1165 10 18.6665 10C19.2165 10 19.6873 10.1958 20.079 10.5875C20.4707 10.9792 20.6665 11.45 20.6665 12C20.6665 12.55 20.4707 13.0208 20.079 13.4125C19.6873 13.8042 19.2165 14 18.6665 14Z"
      fill="#024F40"
    ></path>
  </g>
</svg>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-14">
        <div className="w-1/3 text-[#024F40] p-3 space-y-3">
          <h1 className="text-5xl font-bold">CONTINUE LEARNING</h1>
          <p className="text-xl">
            Resume your last lesson on Quantum Mechanics.
          </p>
          <div className="border-b-2 border-l-0 border-[#024f40] mt-1"></div>
          <p>
            The fundamental principles governing particles at the atomic and
            subatomic levels. This course covers key concepts such as
            wave-particle duality, superposition, quantum entanglement, and the
            uncertainty principle. You’ll also learn about Schrödinger’s
            equation, quantum states, and applications in modern technology like
            quantum computing.
          </p>
          <div className="border-b-2 border-l-0 border-[#024f40] mt-1"></div>
          <div>
            <h1 className="text-xl font-bold">In this course</h1>
            <div className="border-b-2 border-l-0 border-[#024f40]"></div>
            <p>Mathematical Foundations of Quantum Mechanics</p>
            <div className="border-b-2 border-l-0 border-[#024f40]"></div>
            <p>Wave-Particle Duality</p>
            <div className="border-b-2 border-l-0 border-[#024f40]"></div>
            <p>Quantum States and Superposition</p>
          </div>
        </div>

        <div className="w-2/3 border-2 border-[#024F40] rounded-lg">
          <img src="./pictures/img placeholder.png" alt="" className="h-full" />
        </div>
      </div>

      <div className="border-2 border-[#024F40] mt-[64px]"></div>

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
          <div className="border-solid border-2 border-[#024F40] rounded-lg w-2/3">
            <table className="w-full bg-[#fbfbf8]">
              <thead>
                <tr className="border-teal-800 border-2 border-l-0 border-r-0">
                  <th className="text-left p-4 font-medium">Name & Surname</th>
                  <th className="text-left p-4 font-medium">Total Points</th>
                  <th className="text-left p-4 font-medium">Lectures</th>
                  <th className="text-left p-4 font-medium">Achievements</th>
                  <th className="text-left p-4 font-medium">Awards</th>
                  <th className="w-10 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-teal-800 border-2 border-l-0 border-r-0">
                  <td className="p-4">Slobodka Stankova</td>
                  <td className="p-4">120/200</td>
                  <td className="p-4">11/52</td>
                  <td className="p-4">11/23</td>
                  <td className="p-4">3</td>
                  <td className="p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-teal-800 border-2 border-l-0 border-r-0">
                  <td className="p-4">Luiza Avramova</td>
                  <td className="p-4">120/200</td>
                  <td className="p-4">11/52</td>
                  <td className="p-4">11/23</td>
                  <td className="p-4">3</td>
                  <td className="p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </td>
                </tr>
                <tr className=" border-teal-800 border-2 border-l-0 border-r-0">
                  <td className="p-4">Sande Atanasovski</td>
                  <td className="p-4">120/200</td>
                  <td className="p-4">11/52</td>
                  <td className="p-4">11/23</td>
                  <td className="p-4">3</td>
                  <td className="p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="p-4 border-teal-800 border-2 border-l-0 border-r-0 bg-[#fbfbf8]">
              <button className="flex items-center gap-2 font-medium">
                Expand
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between border-2 border-[#024F40] bg-[#fbfbf8] w-1/3 rounded-lg p-4">
            <div className="flex justify-between items-start mb-6 border-[#024f40]" style={{borderBottom: '2px solid #024f40', borderLeft: '0px', borderRight: '0px'}}>
              <div className="text-sm font-medium">Highest Achiever</div>
              <div className="text-right font-medium">Letka Avramovska</div>
            </div>

            <div className="space-y-3 mb-6 border-[#024f40]" style={{borderBottom: '2px solid #024f40', borderLeft: '0px', borderRight: '0px'}}>
              <div className="flex justify-between items-center text-sm border-[#024f40]" style={{borderBottom: '2px solid #024f40', borderLeft: '0px', borderRight: '0px'}}>
                <span>Total points:</span>
                <span className="font-medium">128</span>
              </div>
              <div className="flex justify-between items-center text-sm" style={{borderBottom: '2px solid #024f40', borderLeft: '0px', borderRight: '0px'}}>
                <span>Total badges:</span>
                <span className="font-medium">20</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Number of completed courses:</span>
                <span className="font-medium">7</span>
              </div>
            </div>
            <div className="mt-auto">

            <div className="text-center mb-[16px] font-medium pt-[16px]" style={{borderTop: '2px solid #024f40', borderLeft: '0px', borderRight: '0px', borderBottom: '0px'}}>
              You need 46 points to pass Letka!
            </div>

            <button className="w-full bg-teal-800 hover:bg-teal-900 text-white py-2 rounded-lg">
              Explore courses and take the throne!
            </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 space-y-5 text-[#024F40]">
        <h1 className="text-4xl font-bold">Recommended Courses</h1>
        <div className="flex justify-between gap-5 flex-wrap">
          <div className="w-[30%] p-3 border-2 space-y-3 border-[#024F40] rounded-lg">
            <div className="flex items-center justify-between">
              <p className="py-2 px-4 font-bold bg-[#FFE6BE] text-[#FFA717]">
                <img
                  src="./pictures/calculate.svg"
                  className="inline-block"
                  alt=""
                />
                Mathematics
              </p>
              <svg
  width="24"
  height="31"
  viewBox="0 0 24 31"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
>
  <path
    d="M0.666504 30.5V3.83333C0.666504 2.91667 0.992893 2.13194 1.64567 1.47917C2.29845 0.826389 3.08317 0.5 3.99984 0.5H20.6665C21.5832 0.5 22.3679 0.826389 23.0207 1.47917C23.6735 2.13194 23.9998 2.91667 23.9998 3.83333V30.5L12.3332 25.5L0.666504 30.5ZM3.99984 25.4167L12.3332 21.8333L20.6665 25.4167V3.83333H3.99984V25.4167Z"
    fill="#024F40"
  ></path>
</svg>
            </div>
            <div className="border-2 border-[#024F40]"></div>
            <h1 className="text-2xl font-bold">Python for Beginners</h1>
            <p>Programming / Web Development</p>
            <p>
              {" "}
              introductory course designed for those new to programming. You’ll
              learn the fundamentals of Python, including syntax, data types,
              loops, functions, and basic object-oriented programming (OOP).
              Through hands-on exercises and real-world examples, this course
              will help you build a strong foundation in coding.
            </p>
            <p className="font-bold">Total Duration: 10 hours</p>
            <p className="font-bold">Number of Classes: 8 lessons</p>
            <p className="font-bold">
              Quizzes, Projects, Downloadable Resources
            </p>
          </div>

          <div className="w-[30%] p-3 border-2 space-y-3 border-[#024F40] rounded-lg">
            <div className="flex items-center justify-between">
              <p className="py-2 px-4 font-bold bg-[#FFE6BE] text-[#FFA717]">
                <img
                  src="./pictures/calculate.svg"
                  className="inline-block"
                  alt=""
                />
                Mathematics
              </p>
              <svg
  width="24"
  height="31"
  viewBox="0 0 24 31"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
>
  <path
    d="M0.666504 30.5V3.83333C0.666504 2.91667 0.992893 2.13194 1.64567 1.47917C2.29845 0.826389 3.08317 0.5 3.99984 0.5H20.6665C21.5832 0.5 22.3679 0.826389 23.0207 1.47917C23.6735 2.13194 23.9998 2.91667 23.9998 3.83333V30.5L12.3332 25.5L0.666504 30.5ZM3.99984 25.4167L12.3332 21.8333L20.6665 25.4167V3.83333H3.99984V25.4167Z"
    fill="#024F40"
  ></path>
</svg>
            </div>
            <div className="border-2 border-[#024F40]"></div>
            <h1 className="text-2xl font-bold">JavaScript Essentials</h1>
            <p>Programming / Web Development</p>
            <p>
              Beginner-friendly course that covers the fundamentals of
              JavaScript, including variables, functions, loops, and event
              handling. You'll learn how to write interactive web applications,
              manipulate the DOM, and understand core programming concepts.
              Perfect for aspiring developers looking to build a strong
              foundation in front-end development.
            </p>
            <p className="font-bold">Total Duration: 12 hours</p>
            <p className="font-bold">Number of Classes: 10 lessons</p>
            <p className="font-bold">
              Coding Exercises, Quizzes, Downloadable Cheat Sheets
            </p>
          </div>

          <div className="w-[30%] p-3 border-2 space-y-3 border-[#024F40] rounded-lg">
            <div className="flex items-center justify-between">
              <p className="py-2 px-4 font-bold bg-[#FFCACA] text-[#FF5A5D]">
                <img
                  src="./pictures/science.svg"
                  className="inline-block"
                  alt=""
                />
                Science
              </p>
              <svg
  width="24"
  height="31"
  viewBox="0 0 24 31"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
>
  <path
    d="M0.666504 30.5V3.83333C0.666504 2.91667 0.992893 2.13194 1.64567 1.47917C2.29845 0.826389 3.08317 0.5 3.99984 0.5H20.6665C21.5832 0.5 22.3679 0.826389 23.0207 1.47917C23.6735 2.13194 23.9998 2.91667 23.9998 3.83333V30.5L12.3332 25.5L0.666504 30.5ZM3.99984 25.4167L12.3332 21.8333L20.6665 25.4167V3.83333H3.99984V25.4167Z"
    fill="#024F40"
  ></path>
</svg>
            </div>
            <div className="border-2 border-[#024F40]"></div>
            <h1 className="text-2xl font-bold">Data Science Basics</h1>
            <p>Data Science / Analytics</p>
            <p>
              introductory course designed for those new to programming. You’ll
              learn the fundamentals of Python, including syntax, data types,
              loops, functions, and basic object-oriented programming (OOP).
              Through hands-on exercises and real-world examples, this course
              will help you build a strong foundation in coding
            </p>
            <p className="font-bold">Total Duration: 15 hours</p>
            <p className="font-bold">Number of Classes: 12 lessons</p>
            <p className="font-bold">Datasets, Jupyter Notebooks, Quizzes</p>
          </div>

          <div className="w-[30%] p-3 border-2 space-y-3 border-[#024F40] rounded-lg">
            <div className="flex items-center justify-between">
              <p className="py-2 px-4 font-bold bg-[#FFCACA] text-[#FF5A5D]">
                <img
                  src="./pictures/science.svg"
                  className="inline-block"
                  alt=""
                />
                Science
              </p>
              <svg
  width="24"
  height="31"
  viewBox="0 0 24 31"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
>
  <path
    d="M0.666504 30.5V3.83333C0.666504 2.91667 0.992893 2.13194 1.64567 1.47917C2.29845 0.826389 3.08317 0.5 3.99984 0.5H20.6665C21.5832 0.5 22.3679 0.826389 23.0207 1.47917C23.6735 2.13194 23.9998 2.91667 23.9998 3.83333V30.5L12.3332 25.5L0.666504 30.5ZM3.99984 25.4167L12.3332 21.8333L20.6665 25.4167V3.83333H3.99984V25.4167Z"
    fill="#024F40"
  ></path>
</svg>
            </div>
            <div className="border-2 border-[#024F40]"></div>
            <h1 className="text-2xl font-bold">UX Design Principles</h1>
            <p>Design / User Experience</p>
            <p>
              Beginner-friendly course that covers the fundamentals of User
              Experience (UX) design. You’ll explore key concepts such as
              usability, user research, wireframing, prototyping, and
              accessibility. The course introduces essential tools like Figma,
              Adobe XD, and usability testing methods to help you create
              intuitive and user-friendly digital experiences.
            </p>
            <p className="font-bold">Total Duration: 10 hours</p>
            <p className="font-bold">Number of Classes: 8 lessons</p>
            <p className="font-bold">
              Figma Templates, Usability Testing Guides, Quizzes
            </p>
          </div>

          <div className="w-[30%] p-3 border-2 space-y-3 border-[#024F40] rounded-lg">
            <div className="flex items-center justify-between">
              <p className="py-2 px-4 font-bold bg-[#FFCACA] text-[#FF5A5D]">
                <img
                  src="./pictures/science.svg"
                  className="inline-block"
                  alt=""
                />
                Science
              </p>
              <svg
  width="24"
  height="31"
  viewBox="0 0 24 31"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
>
  <path
    d="M0.666504 30.5V3.83333C0.666504 2.91667 0.992893 2.13194 1.64567 1.47917C2.29845 0.826389 3.08317 0.5 3.99984 0.5H20.6665C21.5832 0.5 22.3679 0.826389 23.0207 1.47917C23.6735 2.13194 23.9998 2.91667 23.9998 3.83333V30.5L12.3332 25.5L0.666504 30.5ZM3.99984 25.4167L12.3332 21.8333L20.6665 25.4167V3.83333H3.99984V25.4167Z"
    fill="#024F40"
  ></path>
</svg>
            </div>
            <div className="border-2 border-[#024F40]"></div>
            <h1 className="text-2xl font-bold">Machine Learning Intro</h1>
            <p>Data Science / Machine Learning</p>
            <p>
              Beginner-friendly course that introduces the fundamentals of
              machine learning. You’ll explore key concepts like supervised and
              unsupervised learning, algorithms, data preprocessing, and model
              evaluation. The course also covers practical applications and
              common tools like Python, Scikit-learn, and Jupyter Notebooks to
              help you get started with building machine learning models.
            </p>
            <p className="font-bold">Total Duration: 10 hours</p>
            <p className="font-bold">Number of Classes: 8 lessons</p>
            <p className="font-bold">
              Python Notebooks, Data Sets, Quizzes, Code Examples
            </p>
          </div>

          <div className="w-[30%] p-3 border-2 space-y-3 border-[#024F40] rounded-lg">
            <div className="flex items-center justify-between">
              <p className="py-2 px-4 font-bold bg-[#B8EE7F] text-[#2D592F]">
                <img
                  src="./pictures/book_2.svg"
                  className="inline-block"
                  alt=""
                />
                Reading
              </p>
              <svg
  width="24"
  height="31"
  viewBox="0 0 24 31"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
>
  <path
    d="M0.666504 30.5V3.83333C0.666504 2.91667 0.992893 2.13194 1.64567 1.47917C2.29845 0.826389 3.08317 0.5 3.99984 0.5H20.6665C21.5832 0.5 22.3679 0.826389 23.0207 1.47917C23.6735 2.13194 23.9998 2.91667 23.9998 3.83333V30.5L12.3332 25.5L0.666504 30.5ZM3.99984 25.4167L12.3332 21.8333L20.6665 25.4167V3.83333H3.99984V25.4167Z"
    fill="#024F40"
  ></path>
</svg>
            </div>
            <div className="border-2 border-[#024F40]"></div>
            <h1 className="text-2xl font-bold">Cloud Computing Fund.</h1>
            <p>Cloud Computing / IT Infrastructure</p>
            <p>
              Beginner-friendly course that introduces the basics of cloud
              computing, including key concepts such as cloud service models
              (IaaS, PaaS, SaaS), deployment models, and the benefits of
              cloud-based solutions. The course covers popular cloud platforms
              like AWS, Microsoft Azure, and Google Cloud, with practical
              insights into how organizations leverage cloud services for
              scalability, security, and efficiency.
            </p>
            <p className="font-bold">Total Duration: 12 hours</p>
            <p className="font-bold">Number of Classes: 10 lessons</p>
            <p className="font-bold">
              Cloud Service Guides, Platform Access Tutorials, Quizzes, Hands-on
              Labs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAndDashBoardPage;
