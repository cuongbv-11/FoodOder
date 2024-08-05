import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFormCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Sản phẩm</p>
          <p>Tiêu đề</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Tổng</p>
          <p>Xóa</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${cartItems[item._id] * item.price}</p>
                  <p onClick={() => removeFormCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Tổng giỏ hàng</h2>
          <div>
            <div className="cart-total-details">
              <p>Tổng phụ</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Phí vận chuyển</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Tổng cộng</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            TIẾN HÀNH THANH TOÁN
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Nếu bạn có mã khuyến mãi, hãy nhập vào đây</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Nhập mã khuyến mãi" />
              <button>Nộp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
