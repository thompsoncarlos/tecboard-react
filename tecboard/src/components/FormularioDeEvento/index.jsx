import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";

import "./formulario-de-evento.style.css";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento({ temas }) {
  return (
    <form className="form-evento" action="">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nome"
            placeholder="Summer dev hits"
            name="nomeDoEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">Qual o endereço da imagem da capa?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder="https://exemplo.com/imagem.png"
            name="capaDaImagem"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="data">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="data"
            placeholder="2024-06-01"
            name="data"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
