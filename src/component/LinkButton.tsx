import Link from "next/link"
import { Button } from "@mui/material"
import { type } from "os"

type LinkButtonProps = {
    href: string
    text: string
    colorStyle: "primary" | "secondary" | "success" | "error" | "info" | "warning"   
}

export default function LinkButton({ href, text, colorStyle }: LinkButtonProps) {
  return (
    <Button variant="contained" color={colorStyle}>
    <Link href={href} style={
      {
        textDecoration: "none",
        color: "white"
      }
    }>
      {text}
    </Link>
  </Button>
  )
}