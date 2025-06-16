import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../ui/input-otp";
import { Button } from "../../ui/button";
import { myAxios } from "../../../lib/axios";
import { QuickAlert } from "../../ui/quick-alert/quick-alert";
import { useNavigate } from "react-router";

export function AccountVerification() {
  const [otp, setOtp] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  function handleSubmit() {
    if (otp.length < 6) {
      setError("Please enter a valid 6-digit OTP.");
    } else {
      setError(null);
      setOtp("");
      myAxios
        .post("/verify-otp", { otp })
        .then((response) => {
          console.log("OTP verified successfully:", response.data);
          navigate("/");
          return;
        })
        .catch((error) => {
          console.error("Error verifying OTP:", error);
          setError("Invalid OTP. Please try again.");
        });
    }
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <QuickAlert message={error || ""} />
        <InputOTP
          maxLength={6}
          onChange={(value) => {
            setOtp(value);
          }}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}
