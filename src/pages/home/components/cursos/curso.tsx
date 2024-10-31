import { useState } from "react"
import { CursoWrapper, Image, NomeCurso, TipoCurso, TiposWrapper, Title, View, Wrapper } from "./cursos.styles";
import graduacao from "../../../../assets/images/graduacao.png";
import tecnologo from "../../../../assets/images/tec.png";
import pos from "../../../../assets/images/pos.png";

export const Cursos = () => {
    const [tipo,setTipo] = useState(0);
    console.log(tipo);

    return(
        <>
            <Title>Cursos</Title>
            <Wrapper>
                <TiposWrapper>
                    <TipoCurso onClick={() => setTipo(0)}> Bacharelado</TipoCurso>
                    <TipoCurso onClick={() => setTipo(1)}> Tecnólogo</TipoCurso>
                    <TipoCurso onClick={() => setTipo(2)}> Pós-Graduação</TipoCurso>
                </TiposWrapper>
                {
                    tipo === 0 && (
                        <CursoWrapper>
                            <Image src={graduacao}/>
                            <View>
                                <NomeCurso> Ciência da computação</NomeCurso>
                                <NomeCurso> Sistema de informação</NomeCurso>
                            </View>
                        </CursoWrapper>
                    )
                }

                {
                    tipo === 1 && (
                        <CursoWrapper>
                            <Image src={tecnologo}/>
                            <View>
                                <NomeCurso> Análise de Desenvolvimento de Sistemas</NomeCurso>
                                <NomeCurso> Redes de Computadores</NomeCurso>
                            </View>
                        </CursoWrapper>
                    )
                }

                {
                    tipo === 2 && (
                        <CursoWrapper>
                            <Image src={pos}/>
                            <View>
                                <NomeCurso> Data Science </NomeCurso>
                                <NomeCurso> Desenvolvimento de Aplicações Web </NomeCurso>
                            </View>
                        </CursoWrapper>
                    )
                }
            </Wrapper>
        </>
    );
}