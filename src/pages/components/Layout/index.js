import PreviousMap from "postcss/lib/previous-map";
import Footer from "./footer";
import Header from "./header";

function Layout(props) {
    return ( 
        <div className="flex flex-col min-h-screen">
        <Header />
        <section className="flex-auto"> 
            <div className="max-w-5xl mx-auto my-8">
                <div className="text-orange-700">{props.children}</div>
            </div>
        </section>
        <Footer />
    </div>
     );
}

export default Layout;