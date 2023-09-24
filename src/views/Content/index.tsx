import React, {FC, ReactElement, useEffect, useState} from 'react';
import AppLayout from '../../layouts/App.layout';
import MainLayout from '../../layouts/Main.layout';
import ContainerLayout from '../../layouts/Container.layout';
import {Button, Icon, Stack, Text} from '@chakra-ui/react';
import {ArrowBigRight, RefreshCw} from 'lucide-react';
import {TypeHeroes} from '../../types/heroes.type';
import {TypeWords} from '../../types/words.type';
import {createRandomNumber} from '../../utils/createRandomNumber';

const Content: FC = (): ReactElement => {
  const [heroes, setHeroes] = useState<TypeHeroes>([]);
  const [words, setWords] = useState<TypeWords>([]);
  const [hero, setHero] = useState<string>('');
  const [word, setWord] = useState<string>('');

  const init = async (): Promise<void> => {
    const heroesEN = await import('../../db/heroes.en.json');
    const wordsEN = await import('../../db/words.en.json');

    setHeroes(heroesEN.heroes);
    setWords(wordsEN.words);
  };

  const nextHero = (): void => {
    const {value} = createRandomNumber(0, heroes.length - 1);
    setHero(heroes[value]);
  };

  const nextWord = (): void => {
    const {value} = createRandomNumber(0, words.length - 1);
    setWord(words[value]);
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    nextHero();
  }, [heroes]);

  useEffect(() => {
    nextWord();
  }, [words]);

  return (
    <AppLayout>
      <MainLayout>
        <ContainerLayout>
          <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} w={'full'} h={'full'} spacing={12}>
            <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} spacing={6} overflow={'hidden'}>
              <Text
                fontSize={32}
                as={'strong'}
                whiteSpace={'nowrap'}
                textOverflow={'ellipsis'}
                overflow={'hidden'}>
                {hero}
              </Text>

              <Button
                onClick={() => nextHero()}
                colorScheme={'whatsapp'}
                variant={'outline'}
                boxShadow={'md'}
                rightIcon={<Icon as={RefreshCw}/>}
                title={'Next hero'}
                aria-label={'Next hero'}>
                Next hero
              </Button>
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
                onClick={() => nextWord()}
                colorScheme={'telegram'}
                variant={'outline'}
                boxShadow={'md'}
                rightIcon={<Icon as={ArrowBigRight}/>}
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
