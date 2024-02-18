type Props = {
    link: string
    name: string
}


export const Links = ({link, name} : Props) => {
    return (
        <a className="text-lg hover:text-orange-400 cursor-pointer" href={link}>
            {name}
        </a>
    )
}