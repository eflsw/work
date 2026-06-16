import { mail, gh, ig, x } from '@/data'
import { Button } from './ui/button'
import { IconArrowUpRight } from '@tabler/icons-react'

export default function Contact() {
    return (
        <div className="w-full grid grid-cols-4 gap-2">
            <Button asChild variant="outline" className="w-full">
                <a href={mail.url}>
                    Contact
                    <IconArrowUpRight />
                </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
                <a href={gh.url} target="_blank">
                    {gh.title}
                    <IconArrowUpRight />
                </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
                <a href={ig.url} target="_blank">
                    {ig.title}
                    <IconArrowUpRight />
                </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
                <a href={x.url} target="_blank">
                    {x.title}
                    <IconArrowUpRight />
                </a>
            </Button>
        </div>
    )
}
