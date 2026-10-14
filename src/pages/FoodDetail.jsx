
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FoodPic from "../components/FoodPic";
import { portions, pizza } from "../data/foods";

export default function FoodDetail() {
  const [quantity, setQuantity] = useState(3);
  const [portion, setPortion] = useState(3);
  const [added, setAdded] = useState(false);

  const total = (pizza.price + portions[portion].price) * quantity;

  const addToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="main-div">
      <FoodPic
        image={pizza.image}
        size="big"
        color="radial-gradient(circle, #e9b85a 40%, #b3321b 60%, #8a5a2b)"
      />

      <div className="d-flex justify-content-between align-items-center border-bottom py-2">
        <h4 className="text-brand fw-bold mb-0">
          ₹{total.toFixed(2)}
        </h4>

        <div className="d-flex align-items-center gap-2">
          <Button
            size="sm"
            className="btn-brand rounded-circle"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            −
          </Button>

          <span className="fs-5">{quantity}</span>

          <Button
            size="sm"
            className="btn-brand rounded-circle"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>

      <h6 className="fw-bold mt-3">Lorem ipsum dolor sit amet</h6>

      <p className="small text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore.
      </p>

      <h6 className="fw-bold mt-4">Personal portion</h6>

      {portions.map((p, index) => (
        <div
          key={p.label}
          className="d-flex justify-content-between align-items-center border-bottom py-2"
        >
          <Form.Check
            type="radio"
            id={`portion-${index}`}
            name="portion"
            label={p.label}
            checked={portion === index}
            onChange={() => setPortion(index)}
          />

          <small>₹{p.price.toFixed(2)}</small>
        </div>
      ))}

      <div className="bottom-bar">
        <Button
          className="btn-brand w-100"
          onClick={addToCart}
        >
          {added ? "Added ✓" : "Add to cart"}
        </Button>
      </div>
    </div>
  );
}