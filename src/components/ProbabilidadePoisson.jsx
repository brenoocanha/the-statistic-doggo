import React, { useState } from 'react';
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
import { create, all, isNull } from "mathjs";
import "../styles/ProbabilidadeBinomial.css";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function ProbabilidadePoisson() {

  const toast = useToast();

  /* "mathjs" library config */
  const config = {
    epsilon: 1e-12,
    matrix: "Matrix",
    number: "number",
    precision: 64,
    predictable: false,
    randomSeed: null,
  };
  const math = create(all, config);
  const euler = math.e;

  const [resultado, setResultado] = useState(0);

  function calcularPoisson() {

    

    var valorOcorrencias = parseInt(
      document.getElementById("valor-media-poisson").value
    );

    var valorDesejado = parseInt(
      document.getElementById("valor-desejado-poisson").value
    );

    

    if (!valorOcorrencias) {
      mediaErrorToast();
    } else if (!valorDesejado) {
      kErrorToast();
    } else {

      var resultado = ((math.pow(euler, (valorOcorrencias * -1)) * (math.pow(valorOcorrencias, valorDesejado))) / math.factorial(valorDesejado)).toPrecision(4) * 100 + "%";
      
      setResultado(resultado);
    }
  }

  function mediaErrorToast() {
    toast({
      title: "Preencha todos os campos.",
      description: "Insira um número válido de ocorrências no campo 𝜆",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

  function kErrorToast() {
    toast({
      title: "Preencha todos os campos.",
      description: "Insira um número válido de ocorrências no campo k",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size="md">Probabilidade Poisson</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Explicação
              </Heading>
              <Text pt="2" fontSize="sm">
                <p>
                  O modelo Poisson também é uma distribuição de probabilidade
                  discreta. Ela expressa, por exemplo, a probabilidade de um
                  certo número de eventos ocorrerem num dado período de temp,
                  caso estes ocorram com uma{" "}
                  <b style={{ color: "red" }}>taxa média</b> conhecida e caso
                  cada evento seja independente do tempo decorrido desde o
                  último evento.
                </p>
                <br />
                <p>
                  A probabilidade P(x) de que existam exatamente k ocorrências
                  (k sendo um inteiro não negativo, k = 0, 1, 2, ... ) é dada
                  pela fórmula de Poisson:
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "30px 40%",
                    border: "1px solid black",
                    borderRadius: "4px",
                  }}
                >
                  <div style={{ marginRight: "10px" }}>
                    <b>P (X = K) = </b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ borderBottom: "1px solid black" }}>
                      <b>
                        𝑒<sup>-𝜆</sup> . 𝜆<sup>k</sup>
                      </b>
                    </div>
                    <div>
                      <b>k!</b>
                    </div>
                  </div>
                </div>
                <label>
                  <strong>Legenda:</strong>
                </label>
                <br />
                <strong>e</strong> = número irracional, base do logaritmo
                natural <b>(e = 2.71828...)</b>
                <br />
                <strong>k</strong> = valor desejado de ocorrência
                <br />
                <strong>𝜆</strong> = número real; número esperado de ocorrências
                que ocorrem num dado intervalo de tempo
                <br />
                <br />
                <p>
                  {" "}
                  A distribuição de Poisson é uma distribuição discreta de
                  probabilidade de uma variável aleatória <b>x</b> que satisfaz
                  as seguintes condições:
                </p>
                <br />
                <p>
                  <b>A)</b> O experimento consiste na contagem de vezes <b>x</b>
                  , que um evento ocorre em um determinado intervalo. O
                  intervalo pode ser de tempo, área ou volume; etc.
                </p>
                <p>
                  <b>B)</b> A probabilidade de que o evento ocora é a mesma para
                  cada intervalo.
                </p>
                <p>
                  <b>C)</b> O número de ocorrências em um intervalo independe do
                  número de ocorrências em outros intervalos.
                </p>
              </Text>
            </Box>
            <Box>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ gap: "30px" }}>
                  <label>
                    Valor de <b>𝜆</b>
                  </label>
                  <Input
                    id="valor-media-poisson"
                    placeholder="Insira o número de ocorrências"
                  ></Input>
                </div>
                <div>
                  <label>
                    Valor de <b>k</b>
                  </label>
                  <Input
                    id="valor-desejado-poisson"
                    placeholder="Insira o valor desejado"
                  ></Input>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    color="#fe502d"
                    borderColor="#fe502d"
                    variant="outline"
                    style={{ alignSelf: "flex-end" }}
                    onClick={calcularPoisson}
                  >
                    Calcular &rarr;
                  </Button>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                  <label><b>Resultado:</b></label>
                  <div style={{border: '1px solid black', borderRadius: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '40px'}}>
                    <div style={{textAlign: 'center'}}>
                      {resultado}
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
