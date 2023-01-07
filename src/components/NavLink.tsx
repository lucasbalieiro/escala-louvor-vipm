import Link from "next/link";
import { Nav } from "react-bootstrap";

type NavLinkProps = {
    href: string;
    label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
    return (

        <Link href={href}
            className="nav-link"
            style={
                {
                    textDecoration: "none",
                    color: "black"
                }
            } >

            {label}

        </Link>
    )
}