import '../styles/globals.css'
import {Toaster} from "react-hot-toast";
import {createTheme, NextUIProvider} from '@nextui-org/react'

const theme = createTheme({
    type: "light",
    theme:{
        colors: {
            primary: "#3eaf63",
            success: "#F9CB80",
            error: "#FCC5D8",
            background: "#fafafa",

        }
    }
});

export default function App({Component, pageProps}) {
    return (
        <>
            <NextUIProvider theme={theme}>
                <Component {...pageProps} />
                <Toaster position={"bottom-right"} reverseOrder={false}/>
            </NextUIProvider>

        </>

    )
}
