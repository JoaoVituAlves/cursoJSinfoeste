import { useEffect, useState } from "react"
import {CorpoDocente} from "../../../../entitites/corpo-docente"// com erros 
import { CardItem } from "./card-item";
import { MainWrapper, Title, TitleWrapper } from "./card-item.styles";
import { ProfessorWrapper } from "../../corpo-docente-page.styles";

export const CorpoDocentePage = () =>{
    const[list,setList] = useState<CorpoDocente[]>([]);

    useEffect(() =>{
        fetch("https://infoeste-back-end-fm89.vercel.app/", {method: "get"})
        .then ((response)=> response.json())
        .then((value: {corpoDocente: CorpoDocente[]})=>{
            setList(value.corpoDocente)
        })

    }, []);

    const renderProfessorList = () =>
        list
    .sort((a,b) => {
        if(a.nome > b.nome){
            return 1;
        }
        if(a.nome < b.nome){
            return -1;
        }
        return 0;
    })
    .map((item) =>(
        <CardItem professor={{
            email: item.email,
            foto: item.foto,
            graduacao: item.graduacao,
            nome: item.nome,
            titulacao: item.titulacao      
        }} />
    ))

    return(
        <MainWrapper>
            <TitleWrapper>
                <Title>{"CORPO DOCENTE"}</Title>
            </TitleWrapper>
            <ProfessorWrapper>{renderProfessorList()}</ProfessorWrapper>
        </MainWrapper>
    )

}