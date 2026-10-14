import { Button, Row, Col } from "react-bootstrap";

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"];

export default function Keypad({ onKey }) {
  return (
    <div className="keypad">
      <Row className="g-2">
        {keys.map((key, index) => (
          <Col xs={4} key={index}>
            {key !== "" && (
              <Button
                variant="light"
                className="w-100 py-2 fs-5"
                onClick={() => onKey(key)}
              >
                {key}
              </Button>
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
}