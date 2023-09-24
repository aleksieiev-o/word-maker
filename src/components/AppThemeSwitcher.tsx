import React, {FC, ReactElement} from 'react';
import {EnumColorMode} from '../theme';
import {Icon, IconButton, useColorMode} from '@chakra-ui/react';
import {useLoading} from '../hooks/useLoading';
import {Moon, Sun} from 'lucide-react';

const AppThemeSwitcher: FC = (): ReactElement => {
  const { colorMode, setColorMode } = useColorMode();
  const {isLoading, setIsLoading} = useLoading();

  const updateTheme = async () => {
    setIsLoading(true);

    if (colorMode === EnumColorMode.LIGHT) {
      setColorMode(EnumColorMode.DARK);
    } else {
      setColorMode(EnumColorMode.LIGHT);
    }

    await setIsLoading(false);
  };

  return (
    <>
      <IconButton
        onClick={updateTheme}
        isLoading={isLoading}
        colorScheme={'gray'}
        variant={'outline'}
        boxShadow={'md'}
        title={colorMode === EnumColorMode.DARK ? 'Set light theme' : 'Set dark theme'}
        aria-label={colorMode === EnumColorMode.DARK ? 'Set light theme' : 'Set dark theme'}
        icon={<Icon as={colorMode === EnumColorMode.DARK ? Sun : Moon}/>}/>
    </>
  );
};

export default AppThemeSwitcher;
