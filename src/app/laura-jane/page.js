import Header from "../global-components/Header";
import Intro from "../laura-jane-components/laura-jane-intro";
import Footer from "../global-components/Footer";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col bg-white bg-no-repeat"
        >
            <Header />
            <Intro />
            <br></br><br></br>
            <Footer />
        </main>
    );
}
