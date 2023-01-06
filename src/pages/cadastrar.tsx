import { Checkbox, Container, FormControlLabel, FormGroup, FormLabel, TextField } from "@mui/material"
import LinkButton from "../component/LinkButton"
import TitleAndSubHeader from "../component/TitleAndSubHeader"

export default function Cadastrar() {
    return (
        <Container maxWidth="sm" style={
            {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }
        }>
            <TitleAndSubHeader title="Cadastrar-se para Escala VIPM" subHeader="Fevereiro" />
            <LinkButton href="/" text="Voltar" colorStyle="secondary" />

            <TextField name="name" label="Seu nome" variant="filled" />
            <br/>
            <FormGroup>
                <FormLabel component="legend">Disponibilidades</FormLabel>
                <FormControlLabel control={<Checkbox />} label="Domingo - 05/02/2023" />
                <FormControlLabel control={<Checkbox />} label="Domingo - 12/02/2023" />
                <FormControlLabel control={<Checkbox />} label="Domingo - 19/02/2023" />
                <FormControlLabel control={<Checkbox />} label="Domingo - 26/02/2023" />
                <FormControlLabel control={<Checkbox />} label="Aniversario V IPM - 25/02/2023" />

            </FormGroup>

            <LinkButton href="/" text="Cadastrar" colorStyle="primary" />
            

        </Container>
    )
}