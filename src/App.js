import './App.css';
import {ProductCard} from "./components/Card/Card";

// import lodash from "lodash";
//
// console.log(lodash);
// console.log(lodash.xor([1, 2, 3], [2]));
//
// const obj = {a: {b: {c: 2}}};
// const clone = JSON.parse(JSON.stringify(obj));
// console.log(clone);

// const SimpleComponent = () => (
//     <div>test</div>
// )


function App() {
    return (
        <div className="App">
            <ProductCard title="title 1" price={0} description="test descr 1"/>
            <hr/>
            <ProductCard title="title 2" description="test descr 2"/>
            <hr/>
            <ProductCard title="title 3" price="$39.99" description="test descr 3"/>
            <hr/>
            <ProductCard title="title 4" price="$49.99" description="test descr 4"/>
            <hr/>
            <ProductCard title="title 5" price="$59.99" text="test text"/>
        </div>
    );
}

export default App;
