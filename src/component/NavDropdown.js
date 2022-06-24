import React from "react";
import { useCart } from "react-use-cart";
import "./CartDropdown.css";

const NavDropdown = () => {
  const { isEmpty, items, totalItems, cartTotal, updateItemQuantity } =
    useCart();

  if (isEmpty) return <p className="dropdown-text">Cart is Empty</p>;
  return (
    <div className="dropdown">
      <div className="item-des">
        <h5 className="bag-text">My bag, {totalItems} items</h5>
        <div>
          {items.map((item, index) => {
            return (
              <div className="item-number" key={index}>
                <div>
                  <p>Apollo</p>
                  <p>{item.title}</p>
                  <p>$ {item.price}</p>
                  <div className="size-text">
                    <p>Size:</p>
                    <p className="size">
                      <button>
                        <span>XL</span>
                      </button>
                      <button className="second-button">
                        <span>S</span>
                      </button>
                      <button className="second-button">
                        <span>M</span>
                      </button>
                      <button className="second-button">
                        <span>L</span>
                      </button>
                    </p>
                  </div>

                  <p>Color:</p>
                  <div className="color-text">
                    <div>
                      <button className="red-button"></button>
                      <button className="blue-button"></button>
                      <button className="green-button"></button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="">
                    <div className="item-plus">
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="plus"
                      >
                        +
                      </button>
                    </div>
                    <p className="order-number">{item.quantity}</p>
                    <div className="item-minus">
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="minus"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <div className="img-div">
                  <img className="imgcart" src={item.img} alt="..." />
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-auto ms-auto">
          <h2>Total Price: $ {cartTotal}</h2>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
