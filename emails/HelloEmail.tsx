import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Link,
  Text,
  Preview,
  Tailwind,
} from "@react-email/components";

const HelloEmail = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview className="text-white">welcome board</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">hello {name}</Text>
            <Link>www.google.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default HelloEmail;
