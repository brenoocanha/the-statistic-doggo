import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  Button,
  Input,
  useToast,
  Divider,
  Center,
} from "@chakra-ui/react";
import { create, all } from "mathjs";
import "../styles/ProbabilidadeBinomial.css";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

export default function PropriedadesProbabilidades() {
  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size="md">Propriedades de Probabilidades</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Explicação
              </Heading>
              <Text pt="2" fontSize="sm">
                <p>
                  A teoria moderna das probabilidades constitui a base de um dos
                  ramos de maior aplicação nas ciências, a <i>Estatística</i>.
                </p>
                <br />
                <p>
                  É conveniente dispormos de uma medida que exprima a incerteza
                  presente em afirmações tais como: "É possível que chova
                  amanhã", ou "Não há chance de vitória", em termos de uma
                  escala numérica que varie do impossível ao certo. Esta medida
                  é a <strong>probabilidade</strong>.
                </p>
                <br />
                <p>
                  O cálculo das probabilidades pertence ao campo da Matemática,
                  entretanto a maioria dos fenômenos de que trata a Estatística
                  são de natureza aleatória ou probabilística. O conhecimento
                  dos aspectos fundamentais do cálculo das probabilidades é uma
                  necessidade essencial para o estudo da Estatística Indutiva ou
                  Inferência.
                </p>
                <br />
                <p>
                  Chamamos de <strong>probabilidade de um eveneto A</strong>{" "}
                  (sendo que A está contido no espaço amostral) o número real
                  P(A), tal que:
                </p>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    border: "1px solid black",
                    borderRadius: "5px",
                    width: "50%",
                    margin: "auto",
                  }}
                >
                  <div style={{ margin: "auto 20px" }}>
                    <h2 style={{whiteSpace: 'nowrap'}}>
                      P(A) = 
                    </h2>
                  </div>
                  <div>
                    <h3>Número de casos favoráveis <b>/</b> Número de casos possíveis</h3>
                    
                  </div>
                </div>
                <div>
                  <br />
                  <p>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      Espaço amostral:{" "}
                    </span>{" "}
                    conjunto de todas as possibilidades de um estudo. Chamado
                    também de Universo amostral. Pode ser representado por U ou
                    𝝮.
                  </p>
                  <br />
                  <p>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      Evento:{" "}
                    </span>
                    em termos de conjunto, um evento é um subconjunto de
                    resultados do experimento (espaço amostral).
                  </p>
                </div>
              </Text>

            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>Exemplo</Heading>
              <Text pt="2" fontSize="sm">
                <p>Considere o lançamento de duas moedas</p>
                <br />
                <p><b>Espaço amostral 𝝮</b> = {"{cc; ck; kc; kk}"}</p>
                <br />
              </Text>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Image src="https://raw.githubusercontent.com/brenoocanha/images-bucket/main/arvoreProbabilidadesPNG.png" style={{border: '1px solid black', borderRadius: '5px'}} />
              </div>
              <br />
              
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
