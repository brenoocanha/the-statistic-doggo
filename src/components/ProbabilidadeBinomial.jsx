import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, Box, Text, StackDivider, Button, Input, useToast, Divider, Center } from '@chakra-ui/react';
import { create, all } from 'mathjs';
import "../styles/ProbabilidadeBinomial.css";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

export default function ProbabilidadeBinomial() {

  const [point, setPoint] = useState("");

  const [cnkFinalResult, setCnkFinalResult] = useState("");
  const [successFinalResult, setSuccessFinalResult] = useState("");
  const [failFinalResult, setFailFinalResult] = useState("");
  const [finalResult, setFinalResult] = useState("");
  const [percentageFinalResult, setPercentageFinalResult] = useState("");

  const toast = useToast();

  /* "mathjs" library config */
  const config = {
    epsilon: 1e-12,
    matrix: 'Matrix',
    number: 'number',
    precision: 64,
    predictable: false,
    randomSeed: null
  }
  const math = create(all, config)

  function CalculateBinomial(cnk, successValue, failValue, kValue, nValue) {
    var successExponent = math.pow(successValue, kValue);
    var failExponentSubtraction = nValue - kValue;
    var failExponent = math.pow(failValue, failExponentSubtraction);
    console.log(successExponent);
    var calculateBinomialResult = cnk * successExponent * failExponent;
    var decimalRedution = parseFloat(calculateBinomialResult.toPrecision(6))
    var percentageResult = decimalRedution * 100 + "%";

    setPoint("x");

    setCnkFinalResult(cnk.toFixed(2));
    console.log("CNK é igual a", cnk);

    setSuccessFinalResult(successExponent.toFixed(4));
    console.log("P elevado a k é igual a", successExponent);

    setFailFinalResult(failExponent.toFixed(4));
    console.log("(1 - p) elevado a (n - k) é igual a:", failExponent);

    setFinalResult(calculateBinomialResult.toFixed(4));
    console.log("O resultado final é igual a:", calculateBinomialResult);

    setPercentageFinalResult(percentageResult);
    console.log("O resultado em porcentagem é: ", percentageResult);
  }

  function CalculateCNK(nValue, kValue, successValue, failValue) {

    var kValueFactorial = math.factorial(kValue);
    var nValueFactorial = math.factorial(nValue);
    var subtractionFactorial = math.factorial(nValue - kValue)
    var cnk = nValueFactorial / (kValueFactorial * subtractionFactorial);


    CalculateBinomial(cnk, successValue, failValue, kValue, nValue);

  }

  function GetBinomialValues() {

    function resetInputFields() {
      elementK.value = "";
      elementN.value = "";
    }

    var elementK = document.getElementById('kValue');
    var kValue = parseFloat(elementK.value);

    var elementN = document.getElementById('nValue');
    var nValue = parseFloat(elementN.value);

    var elementSuccess = parseFloat(document.getElementById('successValue').value);
    var successValue = elementSuccess;

    var elementFail = (1 - successValue);
    var failValue = elementFail;
    console.log("Chance de fracasso: ", failValue);

    resetInputFields();

    console.log(kValue, nValue, successValue, failValue);

    if (kValue < 0 || nValue < 0 || successValue < 0) {
      negativeErrorToast();
    } else if (kValue > nValue) {
      invalidErrorToast();
    } else if (!kValue) {
      kErrorToast();
    } else if (!nValue) {
      nErrorToast();
    } else if (!successValue) {
      successErrorToast();
    } else {
      CalculateCNK(nValue, kValue, successValue, failValue);
    }

    resetInputFields();

  }

  function kErrorToast() {
    toast({
      title: 'Preencha todos os campos.',
      description: 'Insira o valor desejado no campo "k"',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }
  function nErrorToast() {
    toast({
      title: 'Preencha todos os campos.',
      description: 'Insira o número de tentativas no campo "n"',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }
  function successErrorToast() {
    toast({
      title: 'Preencha todos os campos.',
      description: 'Insira a chance de sucesso no campo "p"',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }
  function negativeErrorToast() {
    toast({
      title: 'Os números não podem ser negativos',
      description: 'Insira apenas número iguais ou maiores do que 0',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }
  function invalidErrorToast() {
    toast({
      title: 'O cálculo é inválido',
      description: '"k" não pode ser maior do que "n"',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }


  return (

    <div>

      {/* Formula Card */}
      <Card>
        <CardHeader>
          <Heading size='md'>Probabilidade Binomial</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Explicação
              </Heading>
              <Text pt='2' fontSize='sm'>
                <p>O modelo de probabilidade binomial é baseado em <strong>sucesso</strong> (classificado como "p") e <strong>falha</strong> (classificado como "1-p").</p>
                <br />
                <p>O número total de sucessos, <strong>"X = k"</strong>, é uma variável aleatória com parâmetros <strong>n</strong> e <strong>p</strong>. O Modelo Binomial trata apenas de casos com sucesso <strong>(p)</strong> e fracasso <strong>(1-p)</strong>, além de um número limitado de eventos <strong>(n)</strong>.</p>
                <br />
                <p>Cada tentativa resulta apenas em duas possibilidades, que são sucesso e fracasso (a que se chama de tentativa de Bernoulli). Chama-se modelo <strong>DISCRETO</strong> pois trata-se de um estudo apenas com variáveis aleatórias discretas (que não aceitam casas decimais).</p>
              </Text>
            </Box>
            <div className='formula-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Box className='fórmula-binomial'>
                  <Heading size='xs' textTransform='uppercase'>
                    Fórmula do modelo Binomial:
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    <p style={{ fontSize: '1rem', border: '1px solid black', padding: '5px', borderRadius: '5px', whiteSpace: 'nowrap' }}>𝑷 𝑿 = 𝑲 = 𝑪𝒏,𝒌. 𝒑 𝒌 . 𝟏 − 𝒑 𝒏−𝒌</p>
                    <br />
                    <p style={{ fontSize: '1rem', border: '1px solid black', padding: '5px', borderRadius: '5px', whiteSpace: 'nowrap', width: 'auto' }}>𝑪𝒏,𝒌 = 𝒏! / 𝒌! 𝒏 − 𝒌 !</p>
                    <br />
                    <br />
                    <br />
                    <label><strong>Legenda:</strong></label>
                    <br />
                    <strong>p</strong> = probabilidade de sucesso
                    <br />
                    <strong>1 - p</strong> = probabiliade de fracasso
                    <br />
                    <strong>k</strong> = valor desejado
                    <br />
                    <strong>n</strong> = valor total de eventos


                  </Text>
                </Box>
              </div>
              <div className='valores-input' style={{ margin: '0 40px' }}>
                <div style={{ marginBottom: '15px' }}>
                  <label><strong>Valor de "k"</strong></label>
                  <Input placeholder='Insira o valor desejado' id='kValue' />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label><strong>Valor de "n"</strong></label>
                  <Input placeholder='Insira o número de tentativas' id='nValue' />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label><strong>Chance de sucesso ("p") <span style={{ color: 'gray' }}>[DECIMAL]</span></strong></label>
                  <NumberInput defaultValue={0} precision={2} step={0.01} min={0} max={1} id='successValue'>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
                <div>
                  <Button color='#fe502d' borderColor='#fe502d' variant='outline' onClick={GetBinomialValues}>Calcular</Button>
                </div>
              </div>
              <div>
                <Center height='100%'>
                  <Divider orientation='vertical' />
                </Center>
              </div>
              <div style={{ marginLeft: '30px', marginTop: '10px' }} className='result-wrapper'>
                <Card>
                  <CardBody>
                    <Heading size='xs' textTransform='uppercase' style={{marginBottom: '10px'}}>
                      Resultado:
                    </Heading>
                    <Text>

                      

                      <p>C<span style={{ fontSize: '0.75em' }}>n,k</span> = <strong>{cnkFinalResult}</strong></p>

                      <p>p<sup>k</sup> = <strong>{successFinalResult}</strong></p>
                      
                      <p>(1 - p)<sup>(n - k)</sup> = <strong>{failFinalResult}</strong></p>

                      <br />
                      <p>C<span style={{ fontSize: '0.75em' }}>n,k</span> . p<sup>k</sup> . (1 - p)<sup>(n - k)</sup> <strong>&rarr;</strong> <strong>{cnkFinalResult + " " + point + " " + successFinalResult + " " + point + " " + failFinalResult}</strong></p>
                      <p>C<span style={{ fontSize: '0.75em' }}>n,k</span> . p<sup>k</sup> . (1 - p)<sup>(n - k)</sup> = <strong>{finalResult}</strong></p>
                      <br />
                      <p>Percentual: <strong>{percentageFinalResult}</strong></p>

                    </Text>
                  </CardBody>
                </Card>
              </div>
            </div>

          </Stack>
        </CardBody>
      </Card>


    </div>
  )
}