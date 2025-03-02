function OnboardingHighFidelityWelcomePage() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-[#f1f0e8] pt-[56px] px-[100px]">
      <div className="flex justify-end items-center gap-3">
        <p className="text-[25px] text-[#233048]">Professor</p>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-stretch w-[30px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <mask
            id="mask0_64_532"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="30"
            height="30"
          >
            <rect width="30" height="30" fill="#D9D9D9"></rect>
          </mask>
          <g mask="url(#mask0_64_532)">
            <path
              d="M8.75 22.5C6.66667 22.5 4.89583 21.7708 3.4375 20.3125C1.97917 18.8542 1.25 17.0833 1.25 15C1.25 12.9167 1.97917 11.1458 3.4375 9.6875C4.89583 8.22917 6.66667 7.5 8.75 7.5H21.25C23.3333 7.5 25.1042 8.22917 26.5625 9.6875C28.0208 11.1458 28.75 12.9167 28.75 15C28.75 17.0833 28.0208 18.8542 26.5625 20.3125C25.1042 21.7708 23.3333 22.5 21.25 22.5H8.75ZM8.75 20H21.25C22.625 20 23.8021 19.5104 24.7812 18.5312C25.7604 17.5521 26.25 16.375 26.25 15C26.25 13.625 25.7604 12.4479 24.7812 11.4687C23.8021 10.4896 22.625 10 21.25 10H8.75C7.375 10 6.19792 10.4896 5.21875 11.4687C4.23958 12.4479 3.75 13.625 3.75 15C3.75 16.375 4.23958 17.5521 5.21875 18.5312C6.19792 19.5104 7.375 20 8.75 20ZM8.75 18.75C9.79167 18.75 10.6771 18.3854 11.4062 17.6562C12.1354 16.9271 12.5 16.0417 12.5 15C12.5 13.9583 12.1354 13.0729 11.4062 12.3438C10.6771 11.6146 9.79167 11.25 8.75 11.25C7.70833 11.25 6.82292 11.6146 6.09375 12.3438C5.36458 13.0729 5 13.9583 5 15C5 16.0417 5.36458 16.9271 6.09375 17.6562C6.82292 18.3854 7.70833 18.75 8.75 18.75Z"
              fill="#233048"
            ></path>
          </g>
        </svg>
        <p className="text-[25px] text-[#233048]">Student</p>
      </div>
      <div
  className="flex justify-between items-center gap-[499px] pb-8 border-t-0 border-r-0 border-b-2 border-l-0 border-[#024f40]"
>
  <p className="w-[880px] text-[61px] font-bold text-left text-[#233048]">
    Welcome aboard, Professor!
  </p>
  <p className="opacity-50 text-xl font-bold text-center text-[#2a3a57]">
    Mathematics,Science and Reading
  </p>
</div>
<div className="flex justify-center items-center mt-[144px]">

<button
  className="w-[260px] h-[65px] relative gap-2.5 px-5 py-2 rounded-[5px] bg-[#024f40] mt-[144px] text-[25px] font-bold text-[#f1f0e8]"
>
Create
</button>
</div>

    </div>
  );
}

export default OnboardingHighFidelityWelcomePage;
