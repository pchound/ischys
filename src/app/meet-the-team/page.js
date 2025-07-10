import Header from "../global-components/Header";

import Team from "../meet-the-team-components/Team";
import Footer from "../global-components/Footer";



export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col bg-white bg-no-repeat"
        >
            <Header />

            <Team />
            <Footer />
        </main>
    );
}
