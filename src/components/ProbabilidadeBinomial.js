import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Box, Text, StackDivider } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react';
import { create, all } from 'mathjs';
import { useToast } from '@chakra-ui/react';
import { Divider, Center } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export default function ProbabilidadeBinomial() {

  const toast = useToast();

  {/* "mathjs" library config */ }
  const config = {
    epsilon: 1e-12,
    matrix: 'Matrix',
    number: 'number',
    precision: 64,
    predictable: false,
    randomSeed: null
  }
  const math = create(all, config)

  const [k, setK] = useState(0);
  const [n, setN] = useState(0);
  const [success, setSuccess] = useState(0);
  const [fail, setFail] = useState(0);

  function CalculateBinomial(cnk, successValue, failValue, kValue, nValue) {
    var successExponent = math.pow(successValue, kValue);
    var failExponentSubtraction = nValue - kValue;
    var failExponent = math.pow(failValue, failExponentSubtraction);
    console.log(successExponent);
    var calculateBinomialResult = cnk * successExponent * failExponent;
    console.log("CNK é igual a", cnk);
    console.log("P elevado a k é igual a", successExponent);
    console.log("(1 - p) elevado a (n - k) é igual a:", failExponent);
    console.log("O resultado final é igual a:", calculateBinomialResult);
  }

  function CalculateCNK(nValue, kValue, successValue, failValue) {

    var kValueFactorial = math.factorial(kValue);
    var nValueFactorial = math.factorial(nValue);
    var subtractionFactorial = math.factorial(nValue - kValue)
    var cnk = nValueFactorial / (kValueFactorial * subtractionFactorial);
    // console.log(cnk);

    CalculateBinomial(cnk, successValue, failValue, kValue, nValue);

  }

  function GetBinomialValues() {

    var elementK = document.getElementById('kValue');
    var kValue = elementK.value;

    var elementN = document.getElementById('nValue');
    var nValue = elementN.value;

    var elementSuccess = parseFloat(document.getElementById('successValue').value);
    var successValue = elementSuccess;

    var elementFail = parseFloat(document.getElementById('failValue').value);
    var failValue = elementFail;

    console.log(kValue, nValue, successValue, failValue);

    if (!kValue) {
      kErrorToast();
    } else if (!nValue) {
      nErrorToast();
    } else if (!successValue) {
      successErrorToast();
    } else if (!failValue) {
      failErrorToast();
    } else {
      CalculateCNK(nValue, kValue, successValue, failValue);
    }
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
  function failErrorToast() {
    toast({
      title: 'Preencha todos os campos.',
      description: 'Insira a chance de falha no campo "(1 - p)"',
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Fórmula do modelo Binomial:
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    <p style={{ fontSize: '28px', border: '1px solid black', padding: '5px', borderRadius: '5px' }}>𝑷 𝑿 = 𝑲 = 𝑪𝒏,𝒌. 𝒑 𝒌 . 𝟏 − 𝒑 𝒏−𝒌</p>
                    <br />
                    <p style={{ fontSize: '24px', border: '1px solid black', padding: '5px', borderRadius: '5px', width: '60%' }}>𝑪𝒏,𝒌 = 𝒏! / 𝒌! 𝒏 − 𝒌 !</p>
                    <br />
                    <br />
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
              <div style={{ margin: '0 auto' }}>
                <div style={{ marginBottom: '15px' }}>
                  <label><strong>Valor de "k"</strong></label>
                  <Input placeholder='Insira o valor desejado' id='kValue' />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label><strong>Valor de "n"</strong></label>
                  <Input placeholder='Insira o número de tentativas' id='nValue' />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label><strong>Valor de "p"</strong></label>
                  <Input placeholder='Insira a chance de sucesso' id='successValue' />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label><strong>Valor de "(1 - p)"</strong></label>
                  <Input placeholder='Insira a chance de falha' id='failValue' />
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
              <div>
                <Heading size='xs' textTransform='uppercase' style={{marginLeft: '15px'}}>
                    Resultado:
                </Heading>
              </div>
              <div>
                {/* Result Goes Here */}
              </div>
            </div>

          </Stack>
        </CardBody>
      </Card>


    </div>
  )
}