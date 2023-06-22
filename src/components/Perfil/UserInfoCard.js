import { Card, TextField } from "@mui/material";

function UserInfoCard() {

    let userInfo = {
        "userName": "Natalia Barros",
        "Formação": "Sistemas de informação",
        "Periodo": "6°",
        "Idade": 55,
        "Cidade": "Fundão",
        "Endereco": "Av. Recife, 167"
    }

    return (
        <div className="d-flex row justify-content-center">
        <Card className="d-flex flex-wrap justify-content-center w-50 me-5">
            <h3 className="w-50 mt-3">Suas Informações</h3>
            <TextField className="w-50 mt-3 me-3" id="filled-basic" label="Nome" variant="filled" value={userInfo.userName} inputProps={{readOnly: true}}/>
            <TextField className="w-25 mt-3" id="filled-basic" label="Idade" variant="filled" value={userInfo.Idade} inputProps={{readOnly: true}}/>
            <TextField className="w-50 mt-3 me-3" id="filled-basic" label="Formacao" variant="filled" value={userInfo.Formação} inputProps={{readOnly: true}}/>
            <TextField className="w-25 mt-3" id="filled-basic" label="Periodo" variant="filled" value={userInfo.Periodo} inputProps={{readOnly: true}}/>
            <TextField className="w-50 mt-3 me-3" id="filled-basic" label="Endereco" variant="filled" value={userInfo.Endereco} inputProps={{readOnly: true}}/>   
            <TextField className="w-25 mt-3 pb-3" id="filled-basic" label="Cidade" variant="filled" value={userInfo.Cidade} inputProps={{readOnly: true}}/>
        </Card>
        <Card className="d-flex row flex-wrap justify-content-center w-25">
            <h3 className="w-100 mt-3">Vagas Inscritas</h3>
            <div className="d-flex row w-100 shadow-sm mb-3">
                <h5>Dev Frontend Angular</h5>
                <p>CapixabaJobs</p>
                <h6>O CapixabaJobs está com oportunidade para Desenvolvedor Front-end React | Pleno para projeto do nosso cliente MESTRE SOLUÇÕES.</h6>
            </div>
        </Card>
        </div>
    );
}

export default UserInfoCard;