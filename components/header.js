import { name, handle, slogan } from "../lib/data.js";
export default function Header() {
  return (
    <div className="container" id="header-section">
      <header className="lg-column">
        <img src="/images/MA.png" alt={name} />
        <div className="heading">
          <h1>@{handle}</h1>
          <p>{slogan}</p>
        </div>
      </header>
    </div>
  );
}
