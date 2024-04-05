import React from 'react'
import useLocalStorage from './useLocalStorage'
const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage("theme", "dark");
    console.log(theme);
    function HandleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div className={"light-dark-container w-full h-screen flex items-center justify-center "+(theme ==="light" ? "bg-white" : "bg-black")}>
            <div className={"content-box flex flex-col gap-6"}>
                <p className={"text text-center "+ (theme ==="light" ? "text-black" : "text-white")}>Hello World!</p>
                <button className={"switch px-6 py-3 rounded-lg "+ (theme === "light" ? "text-white bg-black" : "text-black bg-white")}
                onClick={HandleTheme}
                >Change Theme</button>
            </div>
        </div>
    )
}

export default LightDarkMode
