interface ExternalLinkProps {
    url: string;
    text: string;
}

function ExternalLink({ url, text }: ExternalLinkProps) {
    return <a href={url} className="hover:underline text-blue-500 hover:brightness-75" target="blank" rel="noopener noreferrer">{text}</a>
}

export { ExternalLink }