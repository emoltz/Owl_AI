import '../styles/globals.css'
import {Toaster} from "react-hot-toast";
import {createTheme, NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import MyNavBar from "../components/MyNavBar";
import dynamic from "next/dynamic";
import {UserContext} from '../lib/context';
import {useUserData} from "../lib/hooks";
import {PacmanLoader} from "react-spinners";

const NavBarNoSSR = dynamic(import('../components/MyNavBar'),{
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

    const userData = useUserData();
    return (<>
            <UserContext.Provider value={userData}>
                <NextThemesProvider
                    defaultTheme={"system"}
                    attribute="class"
                    value={{
                        light: lightTheme.className, dark: darkTheme.className,
                    }}
                >
                    <NextUIProvider>
                        <NavBarNoSSR/>
                        {/*<MyNavBar/>*/}
                        <Component {...pageProps} />
                        <Toaster position={"bottom-right"} reverseOrder={false}/>
                    </NextUIProvider>

                </NextThemesProvider>


            </UserContext.Provider>


        </>

    )
}
