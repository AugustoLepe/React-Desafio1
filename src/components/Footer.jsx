const Footer = (props) => {
    const { descripcion, link } = props
    return (
        <footer className="bg-dark text-white text-center p-3 fs-6">{descripcion} <a href={link} class="btn btn-primary" role="button">Wikipedia</a></footer>
    )
}

export default Footer;