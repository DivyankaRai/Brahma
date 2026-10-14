import { useNavigate } from "react-router-dom";
import { Button, Form} from "react-bootstrap";
import FoodPic from "../components/FoodPic";
import { bestSellers, popularItems } from "../data/foods";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="main-div">
      <small className="text-muted d-block">Current Location</small>
      <b>Model Town, New Delhi</b>

      <div className="d-flex gap-2 my-3">
        <Form.Control
          type="text"
          placeholder="Search food items"
        />
      </div>

      <h6 className="fw-bold">Best Seller</h6>

      <div className="d-flex gap-2 mb-3">
        {bestSellers.map((food) => (
          <div
            key={food.id}
            role="button"
            onClick={() => navigate(`/food/${food.id}`)}
          >
            <FoodPic
              image={food.image}
              color={food.color}
              size="tiny"
            >
              ₹{food.price}
            </FoodPic>
          </div>
        ))}
      </div>

      <div className="promo mb-4">
        <small>Experience our delicious new dish</small>
        <h3 className="fw-bold mb-0">30% OFF</h3>
      </div>

      <h6 className="fw-bold">Popular Items</h6>

      {popularItems.map((item) => (
        <div
          className="d-flex gap-3 align-items-start border-bottom py-3"
          key={item.id}
        >
          <FoodPic
            image={item.image}
            color={item.color}
            size="small"
          />

          <div className="flex-grow-1">
            <div className="d-flex justify-content-between">
              <b>{item.name}</b>
              <b className="text-brand">
                ₹{item.price.toFixed(2)}
              </b>
            </div>

            <small className="text-muted d-flex justify-content-between">
              <span>{item.date}</span>
              <span>{item.items}</span>
            </small>

            <div className="d-flex gap-2 mt-2">
              <Button size="sm" variant="danger">
                Cancel Order
              </Button>

              <Button size="sm" variant="light" className="text-danger">
                Track Driver
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
