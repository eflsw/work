import * as React from 'react'
import { IconCircleHalf2 } from '@tabler/icons-react'
import { Button } from '../ui/button'

export default function Theme() {
    const [isDark, setIsDark] = React.useState(false)

    React.useEffect(() => {
        const dark = document.documentElement.classList.contains('dark')
        setIsDark(dark)
    }, [])

    const toggleTheme = () => {
        const nextIsDark = !isDark
        setIsDark(nextIsDark)
        document.documentElement.classList.toggle('dark', nextIsDark)
    }

    return (
        <Button onClick={toggleTheme} variant="ghost" size="icon" title="Theme" aria-label="Toggle theme">
            <IconCircleHalf2 className="size-4 rotate-0 transition-all dark:-rotate-180" />
        </Button>
    )
}
