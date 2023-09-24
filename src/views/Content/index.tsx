import React, {FC, ReactElement, useState} from 'react';
import AppLayout from '../../layouts/App.layout';
import MainLayout from '../../layouts/Main.layout';
import ContainerLayout from '../../layouts/Container.layout';
import {Button, Icon, IconButton, Stack, Text} from '@chakra-ui/react';
import {RefreshCw} from 'lucide-react';

const Content: FC = (): ReactElement => {
  const [hero, setHero] = useState<string>('');
  const [word, setWord] = useState<string>('');

  const nextHero = () => {
    setHero('');
  };

  const nextWord = () => {
    setWord('');
  };

  return (
    <AppLayout>
      <MainLayout>
        <ContainerLayout>
          <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} w={'full'} h={'full'} spacing={12}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={6} overflow={'hidden'}>
              <Text
                fontSize={32}
                as={'strong'}
                whiteSpace={'nowrap'}
                textOverflow={'ellipsis'}
                overflow={'hidden'}>
                {hero}
              </Text>

              <IconButton
                onClick={nextHero}
                colorScheme={'whatsapp'}
                variant={'outline'}
                boxShadow={'md'}
                title={'Next hero'}
                aria-label={'Next hero'}
                icon={<Icon as={RefreshCw}/>}/>
            </Stack>

            <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} spacing={6} overflow={'hidden'}>
              <Text
                fontSize={24}
                whiteSpace={'nowrap'}
                textOverflow={'ellipsis'}
                overflow={'hidden'}>
                {word}
              </Text>

              <Button
                onClick={nextWord}
                colorScheme={'telegram'}
                variant={'outline'}
                boxShadow={'md'}
                title={'Next word'}
                aria-label={'Next word'}>
                Next word
              </Button>
            </Stack>
          </Stack>
        </ContainerLayout>
      </MainLayout>
    </AppLayout>
  );
};

export default Content;
