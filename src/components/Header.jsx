const Header = (props) => {
    const { title } = props;
    return (
        <div className="p-2 bg-dark text-white text-center">
            <h1>{title}</h1>
        </div>
    )
}

export default Header;
