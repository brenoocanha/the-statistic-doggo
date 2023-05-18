import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Box, Text, StackDivider } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function ProbabilidadeBinomial() {

  const[k, setK] = useState(0);
  const[n, setN] = useState(0);

  function CalculateBinomial(e){
    var elementK = document.getElementById('kValue');
    var kValue = elementK.value;
    var elementN = document.getElementById('nValue');
    var nValue = elementN.value;
    
    
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
                    <p>𝑷 𝑿 = 𝑲 = 𝑪𝒏,𝒌. 𝒑 𝒌 . 𝟏 − 𝒑 𝒏−𝒌</p>
                    <br />
                    <p>𝑪𝒏,𝒌 = 𝒏! / 𝒌! 𝒏 − 𝒌 !</p>
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
              <div style={{margin: '0 auto'}}>
                <div style={{marginBottom: '15px'}}>
                  <label><strong>Valor de "k"</strong></label>
                  <Input placeholder='Insira o valor de "k"' id='kValue' />
                </div>
                <div style={{marginBottom: '15px'}}>
                  <label><strong>Valor de "n"</strong></label>
                  <Input placeholder='Insira o valor de "n"' id='nValue' />
                </div>
                <div>
                  <Button color='#fe502d' borderColor='#fe502d' variant='outline' onClick={CalculateBinomial}>Calcular</Button>
                </div>
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