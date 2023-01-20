import '../styles/globals.css'
import {Toaster} from "react-hot-toast";
import {createTheme, NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import MyNavBar from "../components/MyNavBar";
import dynamic from "next/dynamic";
import {UserContext} from '../lib/context';
import {auth} from '../lib/firebase';
import {useUserData} from "../lib/hooks";
import {useAuthState} from "react-firebase-hooks/auth";
import Footer from "../components/Footer";



const NavBarNoSSR = dynamic(import('../components/MyNavBar'), {
    // ssr: true,
    ssr: false,
});

const lightTheme = createTheme({
    type: "light", theme: {
        colors: {
            primary: "#3eaf63", success: "#F9CB80", error: "#FCC5D8", background: "#fafafa",

        }
    }
});

const darkTheme = createTheme({
    type: "dark", theme: {
        colors: {
            primary: "#246439", success: "#4f4029", error: "#5e4a51", background: "#2d2d2d",
        }
    }
});

export default function App({Component, pageProps}) {
    const [user] = useAuthState(auth);
    return (<>
            <NextThemesProvider
                defaultTheme={"system"}
                attribute="class"
                value={{
                    light: lightTheme.className, dark: darkTheme.className,
                }}
            >
                <NextUIProvider>
                    <UserContext.Provider value={user}>
                        <NavBarNoSSR/>
                        {/*<MyNavBar/>*/}
                        <Component {...pageProps} />
                        <Footer/>
                        <Toaster position={"bottom-right"} reverseOrder={false}/>
                    </UserContext.Provider>
                </NextUIProvider>

            </NextThemesProvider>


        </>

    )
}
