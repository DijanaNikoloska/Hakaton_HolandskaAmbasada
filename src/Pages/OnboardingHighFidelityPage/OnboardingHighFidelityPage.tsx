function OnboardingHighFidelityPage() {
  return (
    // OnboardingHighFidelityPage png as bg
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-[url('/public/images/OnboardingHighFidelityPage.png')] bg-cover">
      <div className="flex flex-col justify-center items-center gap-[65px]">
      <img src="/public/images/rocket.png" className="w-[124px] h-[124px] object-cover" />
  <p
    className="text-[61px] font-bold text-[#024f40]"
  >
    You are onboarded!
  </p>
  <button
    className="flex justify-center items-center w-[241px] h-[65px] gap-2.5 px-5 py-2 rounded-[5px] bg-[#024f40] text-[25px] font-bold text-[#f1f0e8]"
  >
      Get Started
  </button>
      </div>
    </div>
  );
}

export default OnboardingHighFidelityPage;
