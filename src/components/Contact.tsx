import { mail, gh, ig, x } from '@/data'
import { Button } from './ui/button'

export default function Contact() {
    return (
        <p>
            You can contact me via{' '}
            <Button asChild variant="link">
                <a href={mail.url}>{mail.title}</a>
            </Button>
            ,{' '}
            <Button asChild variant="link">
                <a href={x.url} target="_blank">
                    {x.title}
                </a>
            </Button>
            ,{' '}
            <Button asChild variant="link">
                <a href={ig.url} target="_blank">
                    {ig.title}
                </a>
            </Button>
            , or{' '}
            <Button asChild variant="link">
                <a href={gh.url} target="_blank">
                    {gh.title}
                </a>
            </Button>
            .
        </p>
    )
}
