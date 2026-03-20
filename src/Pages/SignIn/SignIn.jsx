import { toast } from "sonner";
import { LoginUser, RegisterUser, userProfile } from "../../Context/ApiCall";
import { useFirebase } from "../../Context/Firebase";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { setDealershipdetails } from "../../Store/DealershipDetailsSlice";
import { openSignInPopup } from "../../Store/GlobalSigninSlice";
import { setUserDetails } from "../../Store/UserDetailsSlice";
import { LogoWhite } from "../../assets/Images/SVG";
import { LoginDealer } from "../../utils/APICalls";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import React, { useState, useEffect, useRef } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { IoIosEye, IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignIn = ({ className }) => {
  const breakpoint = useScreenResizeValue();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firebase = useFirebase();

  const [showOtpForm, SetshowOtpForm] = useState(false);
  const [showNameForm, setShowNameForm] = useState(false);
  const [showDealerForm, setShowDealerForm] = useState(false);

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [name, setName] = useState("");

  const [sending, setSending] = useState({
    otp: false,
    verify: false,
    name: false,
  });

  const [SignUpData, SetSignUpData] = useState({
    email: "",
    name: "",
    password: "",
    password2: "",
    tc: "True",
  });

  const auth = getAuth();
  auth.languageCode = "en";

  const sendOTP = async (e) => {
    e.preventDefault();
    setMessage("");
    setError(false);

    if (phone.length !== 10) {
      setError(true);
      setMessage("Please enter a valid 10-digit phone number.");
      return;
    }
    setSending({ otp: true });

    const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;

    const auth = getAuth();

    try {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              console.log("reCAPTCHA solved");
            },
          }
        );
        await window.recaptchaVerifier.render();
      }
      const appVerifier = window.recaptchaVerifier;
      await signInWithPhoneNumber(auth, formattedPhone, appVerifier)
        .then((confirmationResult) => {
          console.log("OTP sent");
          SetshowOtpForm(true);
          setConfirmationResult(confirmationResult);
          setSending({ otp: false });
          setMessage("OTP sent successfully.");
        })
        .catch((error) => {
          console.log(error);
          setSending({ otp: false });
          setError(true);
          setMessage("Error Sending OTP");
        });
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    setMessage("");
    setError(false);

    if (!confirmationResult) {
      setError(true);
      setMessage("Please send OTP first.");
      return;
    }
    setSending({ verify: true });

    confirmationResult
      .confirm(otp)
      .then((result) => {
        const user = result.user;
        // console.log("Phone auth successful:", user);
        // console.log(user.phoneNumber);
        // console.log(user.uid);

        const userData = {
          ...SignUpData,
          email: user.phoneNumber,
          password: user.uid,
          password2: user.uid,
          tc: "true",
        };

        SetSignUpData((prev) => {
          const newData = {
            ...prev,
            email: user.phoneNumber,
            password: user.uid,
            password2: user.uid,
            tc: "true",
          };
          return newData;
        });
        setSending({ verify: false });
        setMessage("Phone verification successful!");
        const signupuser = async () => {
          const response = await LoginUser(userData);
          console.log(response.data);

          if (response.data && response.data.msg === "User not found") {
            setShowNameForm(true);
          }

          if (response.data && response.data.msg === "Logged IN") {
            dispatch(
              setUserDetails({
                name: response.data?.user.user_name,
                phoneNumber: response.data?.user.phone_number,
                uid: response.data?.user.user_uid,
                loggedIn: true,
                location: "",
                pan: response.data?.user.pancard,
              })
            );
            SetshowOtpForm(false);
            dispatch(openSignInPopup(false));
          }
        };
        signupuser();
      })

      .catch((error) => {
        console.error("Error verifying OTP:", error);
        setError(true);
        setSending({ verify: false });
        setMessage("Invalid OTP. Try again.");
      });
  };

  const SignupUser = async (e) => {
    e.preventDefault();
    if (!name) {
      // console.log("no Name");
      return;
    }
    setSending({ name: true });
    const userData = {
      ...SignUpData,
      name: name,
    };
    SetSignUpData((prev) => ({
      ...prev,
      name: name,
    }));

    const response = await RegisterUser(userData);
    if (response.data.msg === "User Created") {
      const CreatedUser = response.data?.user;
      dispatch(
        setUserDetails({
          name: CreatedUser.user_name,
          phoneNumber: CreatedUser.phone_number,
          loggedIn: true,
          location: "",
        })
      );
      setSending({ name: false });
      dispatch(openSignInPopup(false));
    }
  };

  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User logged in with Google:", user);
    } catch (err) {
      console.error("Google Sign-up Error:", err);
      setError(true);
      setMessage("Google sign-up failed. Try again.");
    }
  };

  const [dealerLogging, setDealerLogging] = useState(false);

  const [dealerDetails, setDealerDetails] = useState({
    email: "",
    password: "",
  });

  const dealershipDetails = useSelector((state) => state.DealershipDetails);

  const LoginDealerDashboard = async () => {
    if (dealerDetails.email === "" && dealerDetails.password === "") {
      toast.error("Please Enter Your Email & Password");
    } else if (dealerDetails.email === "") {
      toast.error("Please Enter Your Email");
    } else if (dealerDetails.password === "") {
      toast.error("Please Enter your Password");
    }

    if (dealerDetails.email !== "" && dealerDetails.password !== "") {
      setDealerLogging(true);
      const response = await LoginDealer(dealerDetails);

      if (response.data.msg === "Dealer Email Not Found") {
        toast.error("Please Check Your Email");
      }
      if (response.data.msg === "Wrong Password") {
        toast.error("Please Check Your Password");
      }

      if (response && response.data.msg === "Logged IN") {
        const dealer = response.data.user;
        if (response?.data?.role === "Manager") {
          toast.success(
            `Welcome ${response?.data?.name}, Manager of the Dealership`,
            {
              action: {
                label: "Close",
                onClick: () => toast.dismiss(),
              },
            }
          );
        }

        if (response?.data?.role === "Principal") {
          toast.success(
            `Welcome ${response?.data?.name}, Owner of the Dealership`
          );
        }

        dispatch(
          setDealershipdetails({
            id: dealer?.pk_id,
            dealership_name: dealer?.dealership_name,
            dealership_brand: dealer?.dealership_brand,
            contact: dealer?.contact,
            city: dealer?.city,
            dealership_state: dealer?.dealership_state,
            loggedIn: true,
            accessToken: "",
            lat: dealer.lat,
            lon: dealer.lon,
            role: response?.data?.role,
            user_name: response?.data?.name,
            userID: response?.data?.user_id,
          })
        );
      }
    }

    setDealerLogging(false);
    return;
  };
  useEffect(() => {
    if (dealershipDetails.loggedIn) {
      navigate("/Dashboard");
    }
  }, [dealershipDetails.loggedIn]);

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={` bg-[#fff]  overflow-hidden flex relative
        ${
          breakpoint <= 750
            ? "h-full w-full"
            : "h-[520px] w-[720px] rounded-[12px]"
        }
        `}
      >
        <div
          className="cursor-pointer absolute  right-[10px] top-[10px]"
          onClick={() => {
            dispatch(openSignInPopup(false));
          }}
        >
          <RiCloseLine className="text-[1.5rem]" />
        </div>
        {breakpoint > 750 && (
          <div className="w-[35%] h-full bg-[blue] relative">
            <div className="absolute  left-[50%] translate-x-[-50%]">
              <LogoWhite width={260} />
            </div>
          </div>
        )}
        {!showOtpForm && !showNameForm && !showDealerForm && (
          <div
            className={`h-full  flex flex-col gap-[1rem]
          ${breakpoint <= 750 ? "w-[100%]" : "w-[65%]"}
          ${breakpoint <= 480 ? "px-[2rem] py-[4rem]" : "p-[4rem]"}
          `}
          >
            <div className="flex flex-col items-start gap-[.5rem]">
              <h1 className="text-color-8 text-[24px] font-medium font-2">
                Login or Register
              </h1>
              <p className="text-color-9-70 text-[13px] font-2-book">
                Discover the best on-road prices, insurance deals, and EMI
                options for your dream car
              </p>
            </div>
            <div className="flex flex-col gap-[1.25rem]">
              <div className="flex flex-col gap-[.25rem]">
                <label htmlFor="" className="font-2 text-[1rem] text-color-14">
                  Phone Number
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength="13"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-[#FFFFFF] px-[1rem] py-[.5rem] rounded-[8px] border-[1px] border-[#B8C4D6]"
                />
              </div>

              <div className="flex flex-col items-start justify-center gap-[.5rem]">
                <button
                  className="px-[1rem] py-[.5rem] flex items-center justify-center font-2 text-[1rem] text-color-1 bg-[#0B66FA] rounded-[8px] w-full"
                  onClick={(e) => {
                    sendOTP(e);
                  }}
                >
                  {sending.otp ? "Sending..." : "Send OTP"}
                </button>
                <div id="recaptcha-container"></div>
                {message && (
                  <p className="text-[.875rem]  text-[#f51313]">{message}</p>
                )}
              </div>
              <div className="flex items-center justify-center gap-[.75rem]">
                <span className="border-[#b8c4d6] border-[.5px] w-full"></span>
                <h1 className="text-[.875rem] font-2 text-color-14">Or</h1>
                <span className="border-[#b8c4d6] border-[.5px] w-full"></span>
              </div>
              <div className="flex flex-col gap-[.5rem]">
                <button
                  className="px-[1rem] py-[.5rem] flex items-center justify-center  border-[1px] border-[#b8c4d6] rounded-[8px] w-full"
                  onClick={() => {
                    firebase.Signinwithgoogle();
                  }}
                >
                  {/* <img src={google} alt="" /> */}
                  <h1 className="font-2 text-[1rem] text-color-8">
                    Continue With Google
                  </h1>
                </button>
                <button
                  className="px-[1rem] py-[.5rem] flex items-center justify-center  border-[1px] border-[#b8c4d6] rounded-[8px] w-full"
                  onClick={() => {
                    setShowDealerForm(true);
                  }}
                >
                  {/* <img src={google} alt="" /> */}
                  <h1 className="font-2 text-[1rem] text-color-8">
                    Signin as Dealer
                  </h1>
                </button>
              </div>
            </div>
          </div>
        )}

        {showOtpForm && !showNameForm && (
          <div
            className={` h-full   flex flex-col justify-center gap-[1rem]
            ${breakpoint <= 750 ? "w-[100%]" : "w-[65%]"}
          ${breakpoint <= 480 ? "px-[2rem] py-[4rem]" : "p-[4rem]"}
          `}
          >
            <div className="flex flex-col items-start gap-[.5rem]">
              <h1 className="text-color-8 text-[24px] font-medium font-2">
                Otp Verification
              </h1>
              <p className="text-color-9-70 font-2-book text-[13px]">
                Enter Otp Sent to Your Number
              </p>
            </div>
            <div className="flex flex-col gap-[1.25rem]">
              <div className="flex flex-col gap-[.25rem]">
                <label htmlFor="" className="font-2 text-[1rem] text-color-14">
                  OTP
                </label>
                <div className="w-full relative">
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    maxLength="13"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="bg-[#FFFFFF] px-[1rem] py-[.5rem] rounded-[8px] border-[1px] border-[#B8C4D6] w-full"
                  />

                  {/* <button className="font-2-book text-[12px] text-color-7 font-semibold absolute right-[10px] top-[50%] translate-y-[-50%]">
                    Resend OTP
                  </button> */}
                </div>
              </div>

              <div className="flex flex-col items-center justify-start gap-[.5rem]">
                <button
                  className="px-[1rem] py-[.5rem] flex items-center justify-center font-2 text-[1rem] text-color-1 bg-[#0B66FA] rounded-[8px] w-full"
                  onClick={verifyOTP}
                >
                  {sending.verify ? "Verifying..." : "Verify"}
                </button>
                {message && (
                  <p className="text-[.875rem]  text-color-7">{message}</p>
                )}
              </div>
              <p className="text-[13px] font-2-book text-color-9-70">
                By Continuing I accept the Privacy Policy, Terms & Conditions
                and Consent Declaration & authorise Autotrends.ai Pvt. Ltd. &
                its affiliates to receive my credit information from any
                certified CIC.
              </p>
            </div>
          </div>
        )}
        {showNameForm && (
          <div
            className={` h-full   flex flex-col justify-center gap-[1rem]
            ${breakpoint <= 750 ? "w-[100%]" : "w-[65%]"}
          ${breakpoint <= 480 ? "px-[2rem] py-[4rem]" : "p-[4rem]"}
          `}
          >
            <div className="flex flex-col items-start gap-[.5rem]">
              <h1 className="text-color-8 text-[24px] font-medium font-2">
                Enter All Details
              </h1>
            </div>
            <div className="flex flex-col gap-[1.25rem]">
              <div className="flex flex-col gap-[.25rem]">
                <label htmlFor="" className="font-2 text-[1rem] text-color-14">
                  Name
                </label>
                <div className="w-full relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="bg-[#FFFFFF] px-[1rem] py-[.5rem] rounded-[8px] border-[1px] border-[#B8C4D6] w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-[.5rem]">
                <button
                  className="px-[1rem] py-[.5rem] flex items-center justify-center font-2 text-[1rem] text-color-1 bg-[#0B66FA] rounded-[8px] w-full"
                  onClick={SignupUser}
                >
                  {sending.name ? "completing..." : "complete"}
                </button>
              </div>
              <p className="text-[13px] font-2-book text-color-9-70">
                By Continuing I accept the Privacy Policy, Terms & Conditions
                and Consent Declaration & authorise Autotrends.ai Pvt. Ltd. &
                its affiliates to receive my credit information from any
                certified CIC.
              </p>
            </div>
          </div>
        )}
        {showDealerForm && (
          <div
            className={` h-full   flex flex-col justify-center gap-[1rem]
            ${breakpoint <= 750 ? "w-[100%]" : "w-[65%]"}
          ${breakpoint <= 480 ? "px-[2rem] py-[4rem]" : "p-[4rem]"}
          `}
          >
            <div className="flex flex-col items-start gap-[.5rem]">
              <h1 className="text-color-8 text-[24px] font-medium font-2">
                Login for Dealer Module
              </h1>
            </div>
            <div className="flex flex-col gap-[1.25rem]">
              <div className="flex flex-col gap-[.5rem]">
                <div className="flex flex-col gap-[.25rem]">
                  <label
                    htmlFor=""
                    className="font-2 text-[1rem] text-color-14"
                  >
                    Email
                  </label>
                  <div className="w-full relative">
                    <input
                      type="text"
                      value={dealerDetails.email}
                      onChange={(e) => {
                        setDealerDetails({
                          ...dealerDetails,
                          email: e.target.value,
                        });
                      }}
                      className="bg-[#FFFFFF] px-[1rem] py-[.5rem] rounded-[8px] border-[1px] border-[#B8C4D6] w-full outline-none"
                    />
                  </div>
                </div>{" "}
                <div className="flex flex-col gap-[.25rem]">
                  <label
                    htmlFor=""
                    className="font-2 text-[1rem] text-color-14"
                  >
                    Password
                  </label>
                  <div className="w-full relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={dealerDetails.password}
                      onChange={(e) => {
                        setDealerDetails({
                          ...dealerDetails,
                          password: e.target.value,
                        });
                      }}
                      className="bg-[#FFFFFF] px-[1rem] py-[.5rem] rounded-[8px] border-[1px] border-[#B8C4D6] w-full relative pr-10 outline-none"
                    />

                    <div className="absolute top-[50%] translate-y-[-50%] right-3 cursor-pointer">
                      {showPassword ? (
                        <IoMdEyeOff
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        />
                      ) : (
                        <IoIosEye
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-[.5rem]">
                <button
                  className="px-[1rem] py-[.5rem] flex items-center justify-center font-2 text-[1rem] text-color-1 bg-[#0B66FA] rounded-[8px] w-full"
                  onClick={() => {
                    LoginDealerDashboard();
                  }}
                >
                  {dealerLogging ? "Logging..." : "Login"}
                </button>
              </div>
              <p className="text-[13px] font-2-book text-color-9-70">
                By Continuing I accept the Privacy Policy, Terms & Conditions
                and Consent Declaration & authorise Autotrends.ai Pvt. Ltd. &
                its affiliates to receive my credit information from any
                certified CIC.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
