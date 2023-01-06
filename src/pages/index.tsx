import { Container } from "@mui/material"
import CardWithList from "../component/CardWithList"
import LinkButton from "../component/LinkButton"
import TitleAndSubHeader from "../component/TitleAndSubHeader"
export default function Home() {
  return (
    <Container maxWidth="xl" style={
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }
    }>
      <TitleAndSubHeader title="Escala Grupo de Louvor V IPM" subHeader="Fevereiro" />

      <LinkButton href="/cadastrar" text="Cadastrar-se" colorStyle="primary" />

      <CardWithList title="Domingo" subtitle="05/02/2023" items={["Cantor 1", "Cantor 2", "Cantor 3"]} />
      <CardWithList title="Domingo" subtitle="12/02/2023" items={["Cantor 1", "Cantor 2", "Cantor 3"]} />
      <CardWithList title="Domingo" subtitle="19/02/2023" items={["Cantor 1", "Cantor 2", "Cantor 3"]} />
      <CardWithList title="Domingo" subtitle="26/02/2023" items={["Cantor 1", "Cantor 2", "Cantor 3"]} />
      <CardWithList title="Aniversario V IPM" subtitle="26/02/2023" items={["Cantor 1", "Cantor 2", "Cantor 3"]} />


    </Container>
  )
}
