import Products from "./ProductCard";
import Welcome from "./Welcome";

export function App() {
    return (
        <div>
           
            <Welcome username="Ibrahim" isPremium={true} />
            <Products name="iphone" price={1} />
            
        </div>
    )
}