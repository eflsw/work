import { site } from '@/data'
import { DiaTextReveal } from '../effects/dia-text'
import Theme from './Theme'
import me from '@/assets/me.webp'

export default function Header() {
    return (
        <header className="flex w-full items-center justify-between gap-3">
            <div className="flex gap-4">
                <div className="selection:bg-background aspect-square size-10.25 overflow-hidden rounded-full object-top">
                    <img src={me.src} alt={site.description} className="h-17.75 object-cover" />
                </div>
                <div className="-space-y-1.5 select-none">
                    <h1>
                        <DiaTextReveal text="Estrada." className="font-i text-[1.03rem] tracking-tighter" />
                    </h1>
                    <h2>
                        <DiaTextReveal
                            text="Web developer"
                            delay={1}
                            colors={['#535353', '#737373', '#a3a3a3', '#d3d3d3', '#e3e3e3']}
                            textColor="var(--muted-foreground)"
                        />
                    </h2>
                </div>
            </div>
            <Theme />
        </header>
    )
}
