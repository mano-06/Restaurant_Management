import './styles/Main.css';

function Main(){
    return(
        <div className="container">
            <div className="container1">
                <h1>This weeks specials!</h1>
                <button type="submit">Online Menu</button>
            </div>
            <div>
                <article className="container2">
                        <section>
                            <img src=".\images\Yellow fruit.png" alt="" height="200px" width="200px" />
                            <h2>Greek Salad</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventore perferendis quas ex quidem quaerat, aliquid excepturi dolores quisquam est corporis consequuntur repellat corrupti ullam mollitia explicabo cum atque sint.</p>
                        </section>
                        <section>
                            <img src=".\images\Yellow fruit.png" alt="" height="200px" width="200px"/>
                            <h2>Bruchetta</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae soluta blanditiis cumque magnam, non et doloremque culpa mollitia, vitae ratione eaque ipsum dolore ex accusantium error recusandae minima deserunt aliquid!</p>
                        </section>
                        <section>
                            <img src=".\images\Yellow fruit.png" alt="" height="200px" width="200px"/>
                            <h2>Lemon Dessert</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae soluta blanditiis cumque magnam, non et doloremque culpa mollitia, vitae ratione eaque ipsum dolore ex accusantium error recusandae minima deserunt aliquid!</p>
                        </section>
                </article>
            </div>
        </div>
    );
}

export default Main;