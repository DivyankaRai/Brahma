
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Keypad from "../components/Keypad";

export default function OtpPage() {
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(30);

  const navigate = useNavigate();
  const { state } = useLocation();
  const phone = state?.phone;

  useEffect(() => {
    if (!phone) {
      navigate("/", { replace: true });
    }
  }, [phone, navigate]);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  const handleKey = (key) => {
    if (key === "⌫") {
      setCode((prev) => prev.slice(0, -1));
    } else if (code.length < 6 && /^[0-9]$/.test(key)) {
      setCode((prev) => prev + key);
    }
  };

  const handleContinue = () => {
    if (code.length === 6) {
      navigate("/home");
    }
  };

  return (
    <div className="main-div d-flex flex-column">

      <div className="flex-grow-1">
        <h4 className="mt-3 fw-bold">6-digit code</h4>

        <p className="text-muted small">
          Please enter the code we've sent to
          <br />
          <b className="text-dark">
            +91 {phone?.slice(0, 5)} {phone?.slice(5)}
          </b>
        </p>

        <div className="d-flex gap-2 mt-4">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <Form.Control
              key={index}
              className="otp-box"
              value={code[index] || ""}
              readOnly
            />
          ))}
        </div>

        <p className="small mt-3">
          I didn't receive a code{" "}
          <span className="text-brand">
            (00:{String(seconds).padStart(2, "0")})
          </span>
        </p>
      </div>

      <Button
        className="btn-brand w-100 mb-3"
        disabled={code.length !== 6}
        onClick={handleContinue}
      >
        Continue
      </Button>

      <Keypad onKey={handleKey} />
    </div>
  );
}