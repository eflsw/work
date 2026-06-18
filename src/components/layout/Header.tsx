import { site } from '@/data'
import { DiaTextReveal } from '../dia-text'
import Theme from '../Theme'
import me from '@/assets/me.webp'

export default function Header() {
    return (
        <header className="w-full flex items-center justify-between gap-3">
            <div className="flex items-center gap-4">
                <div className="size-10.25 aspect-square rounded-full object-top overflow-hidden">
                    <img src={me.src} alt={site.description} className="h-17.75 object-cover" />
                </div>
                <div className="select-none">
                    <h1>
                        <DiaTextReveal text="D. Estrada" className="font-i text-[1rem] tracking-tighter text-black dark:text-white" />
                    </h1>
                    <h2 className="text-muted-foreground">Web developer</h2>
                </div>
            </div>
            <Theme />
        </header>
    )
}
