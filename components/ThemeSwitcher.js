import {useTheme as useNextTheme} from 'next-themes';
import { Switch, useTheme } from "@nextui-org/react";
import {SunIcon} from './minicomponents/SunIcon';
import {MoonIcon} from './minicomponents/MoonIcon';

export default function ThemeSwitcher() {
    const {setTheme} = useNextTheme();
    const {isDark, type} = useTheme();

    return (
        <div>
            <Switch
                iconOff={<SunIcon/>}
                iconOn={<MoonIcon/>}
                // size={"xl"}
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />

        </div>
    )
}