import { Button } from "@/components/ui/button";
import Link from "next/link";
import '../globals.css';

const LandingPage = () => {
    return (
        <div className="home">
            <img src="./logo.png" alt="" className="logo"/>
            <span>Welcome to our Powerful AI generation Tool.</span>
                <Link href="/sign-in">
                <Button>
                    Login
                </Button>
                </Link>
                <Link href="/sign-up">
                <Button>
                    Register
                </Button>
                </Link>
        </div>
    );
}
export default LandingPage;