import { CardContent } from "./card-content"
import { Card, Message, SubTitle, Title, Wrapper } from "./sobre-nos.styles";
import { CardType } from "./types"

export const SobreNos  = () => {
    const cards: CardType[] = CardContent();

    return (
        <Wrapper>
            <Title> Sobre Nós</Title>
           
            {
                cards.map((content) => (
                    <Card key={content.id}>
                        <Message>{content.message}</Message>
                    </Card>
                ))
            }
        </Wrapper>
    );
}