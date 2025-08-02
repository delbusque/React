import imgLogo from "../assets/logo.jpg";

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={imgLogo} alt="restaurant logo" />
                <h1>Forder</h1>
            </div>
            <button className="text-button">Cart (0)</button>
        </header>
    );
}