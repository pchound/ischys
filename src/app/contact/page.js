import Header from "../global-components/Header";
import ContactIntro from "../contact-components/contact-intro";
import ContactBasic from "../contact-components/contact-basic";
import ContactForm from "../contact-components/contact-form";
import Footer from "../global-components/Footer";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col bg-white bg-no-repeat"
        >
            <Header />
            <ContactIntro />
            <br></br>

            <ContactForm />
            <br></br>
            <br></br>
            <Footer />
        </main>
    );
}
