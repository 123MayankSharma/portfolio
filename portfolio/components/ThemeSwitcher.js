import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'




const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => {

        setMounted(true, []);

    })

    return(<>

        <button
        aria-label='Toggle Dark Mode'
        type='button'
        className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-14"
        >

        </button>

        </>)



}

