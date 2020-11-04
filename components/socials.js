import { socials } from "../lib/data.js";

export default function Socials() {
  return (
    <ul id="socials">
      {socials.map((social, i) => {
        return (
          <li id={social.name} key={i}>
            <a href={social.link} target="_blank">
              <i className={`fab fa-${social.name}`}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
