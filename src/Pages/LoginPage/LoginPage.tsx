import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await fetch('https://109d-79-126-130-179.ngrok-free.app/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-[url('/public/images/LoginPage.png')] bg-cover">
      <div className="flex justify-start items-center w-[945.41px] gap-[61.621620178222656px] p-[51.89189147949219px] rounded-[4.05px] bg-[#fbfbf8] border-[1.62px] border-[#024f40]">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[616.22px] w-[473.51px] overflow-hidden gap-[8.108108520507812px] pt-[166.21621704101562px] pb-[77.83783721923828px] rounded-[4.05px] bg-[#f1f0e8]">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[24.016019821166992px]">
            <div className="flex-grow-0 flex-shrink-0 w-[473.51px] h-[308.92px] relative overflow-hidden">
              <svg
                width="286"
                height="226"
                viewBox="0 0 286 226"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[285.55px] h-[225.11px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M260.854 0.400391H25.3273C11.5142 0.400391 0.316406 11.1696 0.316406 24.454V201.458C0.316406 214.743 11.5142 225.512 25.3273 225.512H260.854C274.667 225.512 285.865 214.743 285.865 201.458V24.454C285.865 11.1696 274.667 0.400391 260.854 0.400391Z"
                  fill="#2A3A57"
                ></path>
              </svg>
              <div className="w-[372.15px] h-[205.69px]">
                <svg
                  width="373"
                  height="161"
                  viewBox="0 0 373 161"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[47.29px] top-[13.14px] opacity-95"
                  preserveAspectRatio="none"
                >
                  <path
                    opacity="0.95"
                    d="M348.756 0.794922H24.8541C11.5294 0.794922 0.727539 11.1833 0.727539 23.9981V137.671C0.727539 150.486 11.5294 160.874 24.8541 160.874H348.756C362.08 160.874 372.882 150.486 372.882 137.671V23.9981C372.882 11.1833 362.08 0.794922 348.756 0.794922Z"
                    fill="#E6BFDB"
                  ></path>
                </svg>
                <div className="w-[296.32px] h-[95.23px]">
                  <p className="w-[217.55px] absolute left-[80.44px] top-[51.87px] text-[17.466196060180664px] text-left text-[#233048]">
                    Read with Purpose,
                  </p>
                  <p className="w-[283.19px] absolute left-[80.44px] top-[88.98px] text-[17.466196060180664px] text-left text-[#233048]">
                    Analyze with Confidence,
                  </p>
                  <p className="w-[296.32px] absolute left-[80.44px] top-[126.1px] text-[17.466196060180664px] text-left text-[#233048]">
                    and Excel in Every Subject.
                  </p>
                </div>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[272.42px] top-[208.61px]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M6.17365 10.4883C9.10863 10.4883 11.4879 8.20012 11.4879 5.37747C11.4879 2.55482 9.10863 0.266602 6.17365 0.266602C3.23866 0.266602 0.859375 2.55482 0.859375 5.37747C0.859375 8.20012 3.23866 10.4883 6.17365 10.4883Z"
                    fill="#D9D8D1"
                  ></path>
                </svg>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[287.69px] top-[208.61px]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5.44122 10.4883C8.37621 10.4883 10.7555 8.20012 10.7555 5.37747C10.7555 2.55482 8.37621 0.266602 5.44122 0.266602C2.50624 0.266602 0.126953 2.55482 0.126953 5.37747C0.126953 8.20012 2.50624 10.4883 5.44122 10.4883Z"
                    fill="#FBFCF9"
                  ></path>
                </svg>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[302.96px] top-[208.61px]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5.71661 10.4883C8.6516 10.4883 11.0309 8.20012 11.0309 5.37747C11.0309 2.55482 8.6516 0.266602 5.71661 0.266602C2.78163 0.266602 0.402344 2.55482 0.402344 5.37747C0.402344 8.20012 2.78163 10.4883 5.71661 10.4883Z"
                    fill="#D9D8D1"
                  ></path>
                </svg>
              </div>
              <svg
                width="340"
                height="183"
                viewBox="0 0 340 183"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[339.14px] h-[182.38px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M252.316 156.979L260.808 165.768L314.331 117.935L305.839 109.146L252.316 156.979Z"
                  fill="#E6BFDB"
                ></path>
                <path
                  d="M265.906 128.915C271.345 128.915 275.754 124.675 275.754 119.444C275.754 114.213 271.345 109.973 265.906 109.973C260.467 109.973 256.058 114.213 256.058 119.444C256.058 124.675 260.467 128.915 265.906 128.915Z"
                  fill="#E6BFDB"
                ></path>
                <path
                  d="M303.347 167.659C308.786 167.659 313.196 163.418 313.196 158.187C313.196 152.956 308.786 148.716 303.347 148.716C297.908 148.716 293.499 152.956 293.499 158.187C293.499 163.418 297.908 167.659 303.347 167.659Z"
                  fill="#E6BFDB"
                ></path>
                <path
                  d="M78.1905 74.8037H0.453125V182.407H78.1905V74.8037Z"
                  fill="#E6BFDB"
                ></path>
                <path
                  d="M69.0177 85.3682H9.72852V92.5467H69.0177V85.3682Z"
                  fill="#FBFCF9"
                ></path>
                <path
                  d="M68.965 97.7324H9.67578V104.911H68.965V97.7324Z"
                  fill="#FBFCF9"
                ></path>
                <path
                  d="M68.965 110.089H9.67578V117.267H68.965V110.089Z"
                  fill="#FBFCF9"
                ></path>
                <path
                  d="M69.0177 122.453H9.72852V129.632H69.0177V122.453Z"
                  fill="#FBFCF9"
                ></path>
                <path
                  d="M69.0177 134.809H9.72852V141.987H69.0177V134.809Z"
                  fill="#FBFCF9"
                ></path>
                <path
                  d="M68.965 147.174H9.67578V154.352H68.965V147.174Z"
                  fill="#FBFCF9"
                ></path>
                <path
                  d="M68.965 159.539H9.67578V166.718H68.965V159.539Z"
                  fill="#FBFCF9"
                ></path>
                <path
                  d="M339.594 11.3408L327.81 0.0234375L261.908 63.4913L273.692 74.8086L339.594 11.3408Z"
                  fill="#F2F0E8"
                ></path>
                <path
                  d="M261.919 63.4912L253.856 83.6929L273.7 74.8135L261.919 63.4912Z"
                  fill="#D9D8D1"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start self-stretch flex-grow">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[18.648649215698242px]">
            <p className="flex-grow-0 flex-shrink-0 text-[12.972972869873047px] text-left text-[#024f40]">
              Don’t have an account?
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[12.972972869873047px] font-bold text-left text-[#024f40]">
              Sign up
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[20.2702693939209px]">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[306.49px] text-[25.135135650634766px] font-bold text-left text-[#024f40]">
              Sign in
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[306.49px] text-[20.2702693939209px] text-left text-[#024f40]">
              Sign in with Google account
            </p>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[306.49px] h-[50.27px] relative gap-[12.162161827087402px] px-[19.45945930480957px] py-[6.486486434936523px] rounded-[4.05px] bg-white border-[1.62px] border-[#024f40]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[21.08px] h-[21.08px] relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M10.9053 9.43555V13.5176H16.6938C16.4396 14.8304 15.6769 15.942 14.5329 16.6894L18.0236 19.3437C20.0574 17.504 21.2308 14.8017 21.2308 11.5917C21.2308 10.8443 21.1623 10.1255 21.0352 9.43566L10.9053 9.43555Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M4.87679 13.3584L4.0895 13.949L1.30273 16.0762C3.07254 19.5162 6.6999 21.8927 10.9044 21.8927C13.8084 21.8927 16.2431 20.9536 18.0227 19.3438L14.532 16.6895C13.5737 17.3219 12.3515 17.7053 10.9044 17.7053C8.10791 17.7053 5.73193 15.8559 4.88119 13.3645L4.87679 13.3584Z"
                  fill="#34A853"
                ></path>
                <path
                  d="M1.30313 6.62793C0.569823 8.04605 0.149414 9.64632 0.149414 11.3519C0.149414 13.0576 0.569823 14.6578 1.30313 16.0759C1.30313 16.0855 4.88193 13.3546 4.88193 13.3546C4.66682 12.7221 4.53967 12.0514 4.53967 11.3518C4.53967 10.6522 4.66682 9.98151 4.88193 9.34908L1.30313 6.62793Z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M10.9046 5.00857C12.4887 5.00857 13.8967 5.54516 15.0211 6.58006L18.1012 3.56168C16.2336 1.85606 13.8087 0.811523 10.9046 0.811523C6.70012 0.811523 3.07254 3.17835 1.30273 6.62798L4.88142 9.34936C5.73206 6.85793 8.10813 5.00857 10.9046 5.00857Z"
                  fill="#EA4335"
                ></path>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-[16.216217041015625px] font-bold text-center text-[#024f40]">
                Google
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-[16.216217041015625px]">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[306.49px] text-[20.2702693939209px] text-left text-[#024f40]">
              Or connect with email address
            </p>
            <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[306.49px] h-[39.73px] relative px-[12.972972869873047px] py-[8.108108520507812px] rounded-[4.05px] border-[1.62px] border-[#024f40]">
              <input
                className="flex-grow w-[280.54px] text-[12.972972869873047px] font-bold text-left text-[#024f40]"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[306.49px] h-[39.73px] relative px-[12.972972869873047px] py-[8.108108520507812px] rounded-[4.05px] border-[1.62px] border-[#024f40]">
              <input
                className="flex-grow w-[280.54px] text-[12.972972869873047px] font-bold text-left text-[#024f40]"
                placeholder="Password"
                type='password'
                value={password}
        onChange={(e) => setPassword(e.target.value)}
              />
              <svg
                width="19"
                height="13"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[17.84px] h-[12.16px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M9.62204 9.94555C10.6356 9.94555 11.497 9.59082 12.2065 8.88136C12.916 8.1719 13.2707 7.31041 13.2707 6.2969C13.2707 5.28339 12.916 4.4219 12.2065 3.71244C11.497 3.00298 10.6356 2.64825 9.62204 2.64825C8.60853 2.64825 7.74704 3.00298 7.03758 3.71244C6.32812 4.4219 5.9734 5.28339 5.9734 6.2969C5.9734 7.31041 6.32812 8.1719 7.03758 8.88136C7.74704 9.59082 8.60853 9.94555 9.62204 9.94555ZM9.62204 8.48609C9.01394 8.48609 8.49704 8.27325 8.07137 7.84758C7.64569 7.4219 7.43285 6.90501 7.43285 6.2969C7.43285 5.68879 7.64569 5.1719 8.07137 4.74623C8.49704 4.32055 9.01394 4.10771 9.62204 4.10771C10.2302 4.10771 10.747 4.32055 11.1727 4.74623C11.5984 5.1719 11.8112 5.68879 11.8112 6.2969C11.8112 6.90501 11.5984 7.4219 11.1727 7.84758C10.747 8.27325 10.2302 8.48609 9.62204 8.48609ZM9.62204 12.378C7.64907 12.378 5.85177 11.8273 4.23015 10.726C2.60853 9.6246 1.43285 8.14825 0.703125 6.2969C1.43285 4.44555 2.60853 2.9692 4.23015 1.86785C5.85177 0.766496 7.64907 0.21582 9.62204 0.21582C11.595 0.21582 13.3923 0.766496 15.0139 1.86785C16.6356 2.9692 17.8112 4.44555 18.541 6.2969C17.8112 8.14825 16.6356 9.6246 15.0139 10.726C13.3923 11.8273 11.595 12.378 9.62204 12.378ZM9.62204 10.7564C11.1491 10.7564 12.5511 10.3543 13.8281 9.55028C15.1052 8.74623 16.0815 7.66177 16.7572 6.2969C16.0815 4.93204 15.1052 3.84758 13.8281 3.04352C12.5511 2.23947 11.1491 1.83744 9.62204 1.83744C8.09502 1.83744 6.69299 2.23947 5.41596 3.04352C4.13894 3.84758 3.16258 4.93204 2.48691 6.2969C3.16258 7.66177 4.13894 8.74623 5.41596 9.55028C6.69299 10.3543 8.09502 10.7564 9.62204 10.7564Z"
                  fill="#024F40"
                ></path>
              </svg>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[306.49px] h-[39.73px] relative gap-[81.0810775756836px] px-[25.945945739746094px] py-[6.486486434936523px] rounded-[4.05px] bg-[#024f40] border-[0.81px] border-[#024f40]">
              <button className="text-[12.972972869873047px] font-bold text-[#f1f0e8]" onClick={handleSignIn}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
