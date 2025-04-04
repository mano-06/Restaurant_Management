import { useState } from 'react';
import style from './styles/Menu.module.css';
import starters from './images/starters.jpeg';
import mdish from './images/maindish.webp';
import desserts from './images/dessert.avif';
import beverage from './images/beverage.jpg';

export default function Menu() {
    const [Starters, setStarters] = useState(false);
    const [Main, setMain] = useState(false);
    const [Desserts, setDesserts] = useState(false);
    const [Beverages, setBeverages] = useState(false);

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const toggleStarters = () => {
        setStarters(!Starters);
        if (showCart) setShowCart(false);
    };
    const toggleMain = () => {
        setMain(!Main);
        if (showCart) setShowCart(false);
    };
    const toggleDesserts = () => {
        setDesserts(!Desserts);
        if (showCart) setShowCart(false);
    };
    const toggleBeverages = () => {
        setBeverages(!Beverages);
        if (showCart) setShowCart(false);
    };

    const toggleCart = () => {
        setShowCart(!showCart);
        setStarters(false);
        setMain(false);
        setDesserts(false);
        setBeverages(false);
    };

    const goToMenu = () => {
        setStarters(false);
        setMain(false);
        setDesserts(false);
        setBeverages(false);
        setShowCart(false);
    };

    const addToCart = (item) => {
        const existingItemIndex = cart.findIndex(
            cartItem => cartItem.name === item.name && cartItem.category === item.category
        );

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
        } else {
            updatedCart.splice(index, 1);
        }
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const menuItems = {
        starters: {
            veg: [
                { name: "Paneer Tikka", price: 220, category: "Starters", type: "veg" },
                { name: "Veg Spring Rolls", price: 180, category: "Starters", type: "veg" },
                { name: "Mushroom Chilli", price: 190, category: "Starters", type: "veg" },
                { name: "Onion Bhaji", price: 120, category: "Starters", type: "veg" }
            ],
            nonVeg: [
                { name: "Chicken Wings", price: 250, category: "Starters", type: "nonVeg" },
                { name: "Fish Fingers", price: 270, category: "Starters", type: "nonVeg" },
                { name: "Prawn Tempura", price: 320, category: "Starters", type: "nonVeg" },
                { name: "Mutton Seekh", price: 290, category: "Starters", type: "nonVeg" }
            ]
        },
        main: {
            veg: [
                { name: "Veg Biryani", price: 240, category: "Main Course", type: "veg" },
                { name: "Paneer Pasanda", price: 260, category: "Main Course", type: "veg" },
                { name: "Veg Kofta Curry", price: 230, category: "Main Course", type: "veg" },
                { name: "Dal Makhani", price: 210, category: "Main Course", type: "veg" }
            ],
            nonVeg: [
                { name: "Pot Biryani", price: 280, category: "Main Course", type: "nonVeg" },
                { name: "Kari Dosa", price: 320, category: "Main Course", type: "nonVeg" },
                { name: "Fish Curry", price: 290, category: "Main Course", type: "nonVeg" },
                { name: "Butter Chicken", price: 280, category: "Main Course", type: "nonVeg" }
            ]
        },
        desserts: {
            veg: [
                { name: "Gulab Jamun", price: 120, category: "Desserts", type: "veg" },
                { name: "Rasmalai", price: 140, category: "Desserts", type: "veg" },
                { name: "Kheer", price: 170, category: "Desserts", type: "veg" },
                { name: "Gajar Halwa", price: 160, category: "Desserts", type: "veg" }
            ],
            nonVeg: [
                { name: "Egg Pudding", price: 150, category: "Desserts", type: "nonVeg" },
                { name: "Gelatin Dessert", price: 130, category: "Desserts", type: "nonVeg" }
            ]
        },
        beverages: {
            veg: [
                { name: "Mango Lassi", price: 90, category: "Beverages", type: "veg" },
                { name: "Fresh Lime Soda", price: 70, category: "Beverages", type: "veg" },
                { name: "Masala Chai", price: 50, category: "Beverages", type: "veg" },
                { name: "Fresh Fruit Juice", price: 120, category: "Beverages", type: "veg" }
            ],
            nonVeg: [
                { name: "Chicken Soup", price: 180, category: "Beverages", type: "nonVeg" },
                { name: "Bone Broth", price: 150, category: "Beverages", type: "nonVeg" }
            ]
        }
    };

    return (
        <div className={style.Menu}>
            <div className={style.cartButton}>
                <button onClick={toggleCart} className={style.cartBtn}>🛒 Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</button>
            </div>

            <div className={style.container} style={{ display: Starters || Main || Desserts || Beverages || showCart ? "none" : "block" }}>
                <h1 className={style.heading}>Menu</h1>
                <div className={style.menu}>
                    <div className={style.menuItem} onClick={toggleStarters}>
                        <img className={style.image} src={starters} alt="Starters" />
                        <h3 className={style.itemTitle}>Starters</h3>
                    </div>
                    <div className={style.menuItem} onClick={toggleMain}>
                        <img className={style.image} src={mdish} alt="Main course" />
                        <h3 className={style.itemTitle}>Main Course</h3>
                    </div>
                    <div className={style.menuItem} onClick={toggleDesserts}>
                        <img className={style.image} src={desserts} alt="Desserts" />
                        <h3 className={style.itemTitle}>Desserts</h3>
                    </div>
                    <div className={style.menuItem} onClick={toggleBeverages}>
                        <img className={style.image} src={beverage} alt="Beverage" />
                        <h3 className={style.itemTitle}>Beverages</h3>
                    </div>
                </div>
            </div>

            <div className={style.container} style={{ display: Starters ? "block" : "none" }}>
                <h1 className={style.heading}>Starters</h1>
                <div className={style.menu}>
                    <div className={`${style.menuItem} ${style.veg}`}>
                        <img className={style.image} src={starters} alt="Veg Starters" />
                        <h1 className={style.vnv}>Veg</h1>
                        {menuItems.starters.veg.map((item, index) => (
                            <div key={index} className={style.itemList}>
                                <h2 className={style.itemTitle}>{item.name} - Rs.{item.price}</h2>
                                <button className={style.cart} onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                    <div className={`${style.menuItem} ${style.nveg}`}>
                        <img className={style.image} src={starters} alt="Non-Veg Starters" />
                        <h1 className={style.vnv}>Non-veg</h1>
                        {menuItems.starters.nonVeg.map((item, index) => (
                            <div key={index} className={style.itemList}>
                                <h2 className={style.itemTitle}>{item.name} - Rs.{item.price}</h2>
                                <button className={style.cart} onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={toggleStarters} className={style.back}>Go to Menu</button>
            </div>

            <div className={style.container} style={{ display: Main ? "block" : "none" }}>
                <h1 className={style.heading}>Main Course</h1>
                <div className={style.menu}>
                    <div className={`${style.menuItem} ${style.veg}`}>
                        <img className={style.image} src={mdish} alt="Veg Main Course" />
                        <h1 className={style.vnv}>Veg</h1>
                        {menuItems.main.veg.map((item, index) => (
                            <div key={index} className={style.itemList}>
                                <h2 className={style.itemTitle}>{item.name} - Rs.{item.price}</h2>
                                <button className={style.cart} onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                    <div className={`${style.menuItem} ${style.nveg}`}>
                        <img className={style.image} src={mdish} alt="Non-Veg Main Course" />
                        <h1 className={style.vnv}>Non-veg</h1>
                        {menuItems.main.nonVeg.map((item, index) => (
                            <div key={index} className={style.itemList}>
                                <h2 className={style.itemTitle}>{item.name} - Rs.{item.price}</h2>
                                <button className={style.cart} onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={toggleMain} className={style.back}>Go to Menu</button>
            </div>

            <div className={style.container} style={{ display: Desserts ? "block" : "none" }}>
                <h1 className={style.heading}>Desserts</h1>
                <div className={style.menu}>
                    <div className={`${style.menuItem} ${style.veg}`}>
                        <img className={style.image} src={desserts} alt="Veg Desserts" />
                        <h1 className={style.vnv}>Veg</h1>
                        {menuItems.desserts.veg.map((item, index) => (
                            <div key={index} className={style.itemList}>
                                <h2 className={style.itemTitle}>{item.name} - Rs.{item.price}</h2>
                                <button className={style.cart} onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                    <div className={`${style.menuItem} ${style.nveg}`}>
                        <img className={style.image} src={desserts} alt="Non-Veg Desserts" />
                        <h1 className={style.vnv}>Non-veg</h1>
                        {menuItems.desserts.nonVeg.map((item, index) => (
                            <div key={index} className={style.itemList}>
                                <h2 className={style.itemTitle}>{item.name} - Rs.{item.price}</h2>
                                <button className={style.cart} onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={toggleDesserts} className={style.back}>Go to Menu</button>
            </div>

            <div className={style.container} style={{ display: Beverages ? "block" : "none" }}>
                <h1 className={style.heading}>Beverages</h1>
                <div className={style.menu}>
                    <div className={`${style.menuItem} ${style.veg}`}>
                        <img className={style.image} src={beverage} alt="Veg Beverages" />
                        <h1 className={style.vnv}>Veg</h1>
                        {menuItems.beverages.veg.map((item, index) => (
                            <div key={index} className={style.itemList}>
                                <h2 className={style.itemTitle}>{item.name} - Rs.{item.price}</h2>
                                <button className={style.cart} onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                    <div className={`${style.menuItem} ${style.nveg}`}>
                        <img className={style.image} src={beverage} alt="Non-Veg Beverages" />
                        <h1 className={style.vnv}>Non-veg</h1>
                        {menuItems.beverages.nonVeg.map((item, index) => (
                            <div key={index} className={style.itemList}>
                                <h2 className={style.itemTitle}>{item.name} - Rs.{item.price}</h2>
                                <button className={style.cart} onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={toggleBeverages} className={style.back}>Go to Menu</button>
            </div>

            <div className={style.container} style={{ display: showCart ? "block" : "none" }}>
                <h1 className={style.heading}>Your Cart</h1>
                {cart.length === 0 ? (
                    <div className={style.emptyCart}>
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    <div className={style.cartItems}>
                        {cart.map((item, index) => (
                            <div key={index} className={style.cartItem}>
                                <div className={style.cartItemInfo}>
                                    <span className={item.type === 'veg' ? style.vegDot : style.nonVegDot}></span>
                                    <h3>{item.name}</h3>
                                    <p className={style.cartItemCategory}>{item.category}</p>
                                </div>
                                <div className={style.cartItemPrice}>
                                    <p>Rs.{item.price}  ({item.quantity})</p>
                                    <p className={style.cartItemTotal}>Rs.{item.price * item.quantity}</p>
                                </div>
                                <div className={style.cartItemActions}>
                                    <button className={style.cartRemove} onClick={() => removeFromCart(index)}>-</button>
                                    <span className={style.cartItemQuantity}>{item.quantity}</span>
                                    <button className={style.cartAdd} onClick={() => addToCart(item)}>+</button>
                                </div>
                            </div>
                        ))}

                        <div className={style.cartSummary}>
                            <div className={style.cartTotal}>
                                <h3>Total:</h3>
                                <h3>Rs.{calculateTotal()}</h3>
                            </div>
                            <div className={style.cartButtons}>
                                <button className={style.clearCart} onClick={clearCart}>Clear Cart</button>
                                <button className={style.checkout}>Checkout</button>
                            </div>
                        </div>
                    </div>
                )}
                <button onClick={goToMenu} className={style.back}>Continue Shopping</button>
            </div>
        </div>
    );
}