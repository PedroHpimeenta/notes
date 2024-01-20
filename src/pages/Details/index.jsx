import {Container,Links, Content} from "./styles";
//import { Header } from "../../components/Header";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import {ButtonText } from "../../components/ButtonText";
export function Details(){
  
  return(
    <Container>
      <Header />
    <main>
      <Content>

     
      <ButtonText title="Excluir nota"/>
      <h1>Introdução ao React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam at voluptatem aliquid tempore asperiores doloribus, tempora nisi ad id saepe blanditiis molestias sequi atque cupiditate. Debitis in minima itaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime veritatis provident dolorum, nam est sequi perspiciatis obcaecati maiores consequatur officiis nobis magnam laboriosam deleniti illo vero modi animi, quo dignissimos.</p>
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://google.com/</a></li>
          <li><a href="#">https://google.com/</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="node"/>
      </Section>
      <Button title="Voltar" />

      </Content>

    </main>
    </Container>
    
  )
}