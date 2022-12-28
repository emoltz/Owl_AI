import '../styles/globals.css'
import {Toaster} from "react-hot-toast";
import {createTheme, NextUIProvider} from '@nextui-org/react'
import MyNavBar from "../components/MyNavBar";
import {UserContext} from '../lib/context';
import {useUserData} from "../lib/hooks";

const theme = createTheme({
    type: "light",
    theme: {
        colors: {
            primary: "#3eaf63",
            success: "#F9CB80",
            error: "#FCC5D8",
            background: "#fafafa",

        }
    }
});

export default function App({Component, pageProps}) {

    const userData = useUserData();
    return (
        <>
            {/*TODO change `username` below to be dynamic */}
            <UserContext.Provider value={userData}>
                <NextUIProvider theme={theme}>
                    <MyNavBar/>
                    <Component {...pageProps} />
                    <Toaster position={"bottom-right"} reverseOrder={false}/>
                </NextUIProvider>
            </UserContext.Provider>


        </>

    )
}
