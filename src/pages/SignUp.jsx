
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import Keypad from "../components/Keypad";

export default function SignUp() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleKey = (key) => {
    if (key === "⌫") {
      setPhone((prev) => prev.slice(0, -1));
    } else if (phone.length < 10) {
      setPhone((prev) => prev + key);
    }
  };

  const handleSubmit = () => {
    if (phone.length === 10) {
      navigate("/otp", { state: { phone } });
    }
  };

  return (
    <div className="main-div d-flex flex-column">
      <div className="flex-grow-1">
        <h4 className="mt-5 fw-bold">Sign Up to Fastor</h4>

        <p className="text-muted small">
          Enter your mobile number and we'll send you an OTP
          for verification.
        </p>

        <InputGroup className="mt-4">
          <InputGroup.Text className="fw-bold">
            +91
          </InputGroup.Text>

          <Form.Control
            value={phone}
            placeholder="Enter mobile number"
            readOnly
          />
        </InputGroup>
      </div>

      <Button
        className="btn-brand w-100 mb-2 mt-2"
        disabled={phone.length !== 10}
        onClick={handleSubmit}
      >
        Get OTP
      </Button>

      <p
        className="text-center text-muted"
        style={{ fontSize: "11px" }}
      >
        By clicking, I accept the <b>Terms & Conditions</b> and{" "}
        <b>Privacy Policy</b>
      </p>

      <Keypad onKey={handleKey} />
    </div>
  );
}