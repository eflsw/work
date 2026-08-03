import { mail, gh, ig, x } from '@/data'
import { IconArrowUpRight } from '@tabler/icons-react'
import { Button } from './ui/button'

export default function Contact() {
    return (
        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
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
