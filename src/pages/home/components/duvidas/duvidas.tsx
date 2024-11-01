import React, { useState } from "react"
import { FormGroup, FormLabel, Image, Input, SubmitButton, Title, Wrapper, Form } from "./duvidas.styles";

import computador from "../../../../assets/icons/desenho.svg";

export const Duvidas = () => {
   const [ email, setEmail] = useState ('');
    const [name, setName] = useState ('');
    const [question, setQuestion] = useState ('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(event.target.value);
    };


    const handleSendQuestion = async (event: {
        preventDefault: () => void; }) => {
        event.preventDefault();
        const sheetDBUrl = "https://sheetdb.io/api/v1/p33s9qi7h0f5q";

        const payload = {
            Nome: name,
            Email: email,
            Duvidas: question

        };

        try{
            const response = await fetch(sheetDBUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if(response.ok){
                console.log('Enviado para o sheet com sucesso!');
                setEmail ('');
                setName ('');
                setQuestion ('');

            } else {
                console.log('Erro ao enviar para o sheetDB:', response.statusText)
            }

        } catch(error){
            console.log('Erro ao enviar para o sheetDB:', error);

        }

    }

    return(
        <>
            <Title> Duvidas? </Title>
            <Wrapper>
                    <Image src={computador}alt="computador"/>
                    <Form action="">
                        <FormGroup>
                                <FormLabel> Nome</FormLabel>
                                <Input 
                                    type="text"
                                    value={name}
                                    onChange={handleNameChange}
                                
                                />
                        </FormGroup>

                        <FormGroup>
                                <FormLabel> Email</FormLabel>
                                <Input 
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                
                                />
                        </FormGroup>

                        <FormGroup>
                                <FormLabel> Dúvida </FormLabel>
                                <Input 
                                    type="text"
                                    value={question}
                                    onChange={handleQuestionChange}
                                
                                />
                        </FormGroup>
                        <SubmitButton type="submit" onClick={handleSendQuestion}>Enviar</SubmitButton>
                    </Form>
            </Wrapper>
        
        
        </>
    );

   }
