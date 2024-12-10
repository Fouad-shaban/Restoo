import { CartProvider, useCart } from "react-use-cart";
import lunchApi from "../Api/LunchApi";

function Page() {
  const { addItem } = useCart();

  return (
    <div>
      <div className="container pt-5 mb-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="section-title ff-secondary text-center text-primary fw-normal">
              Lunch Meals
            </h1>
            <h1 className="mb-5 text-primary ff-secondary">Enjoy..!</h1>
          </div>
          <div className="row g-4 mb-5">
            {lunchApi.map((item) => (
              <div
                className="col-md-3 text-center"
                style={{ height: "500px" }}
                key={item.id}
              >
                <div className=" wow fadeInUp m-auto" data-wow-delay="0.1s">
                  <div className="team-item text-center rounded overflow-hidden product-body">
                    <div className=" rounded-circle overflow-hidden m-4">
                      <a onClick={() => addItem(item)}>
                        <img
                          className="img-fluid product-img wow zoomIn"
                          src={item.image_url}
                          alt=""
                          style={{ height: "250px", width: "250px" }}
                        />
                      </a>
                    </div>
                    <h5 className="mb-0 product-name">{item.title}</h5>
                    <h4 className="product-price">{item.price}</h4>
                  </div>
                  <div className="add-to-cart">
                    <button
                      onClick={() => addItem(item)}
                      className="btn btn-outline-primary mt-3 add-to-cart-btn "
                    >
                      <i className="fa-solid fa-mug-saucer"></i> ADD This
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const { isEmpty, totalUniqueItems} =
    useCart();

  if (isEmpty)
    return <p className="text-center">Still Waiting Your Order</p>;

    return (
      <div className="text-center">

        <a href="/order" className=" py-sm-3 px-sm-5 me-3 animated slideInLeft " style={{fontSize:"35px"}}>Your Order  ({totalUniqueItems})  <i class="fa-solid fa-utensils fa-bounce  fa-2xl p-3" style={{color:"#fff"}}></i></a>
      </div>
    );
}

function Menu() {
  return (
    <CartProvider>
      <Page />
      <Cart />
    </CartProvider>
  );
}
export default Menu;
