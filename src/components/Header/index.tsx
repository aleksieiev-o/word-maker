import React, {FC, ReactElement} from 'react';
import {Container, Stack} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {EnumRouter} from '../../Router';
import LogoIcon from './Logo.icon';
import {APP_NAME} from '../../utils/constants';
import AppThemeSwitcher from '../AppThemeSwitcher';

const Header: FC = (): ReactElement => {
  return (
    <>
      <Stack as={'header'} w={'full'} boxShadow={'md'}>
        <Container centerContent={true} w={'full'} maxW={'6xl'} p={4}>
          <Stack direction={'row'} w={'full'} alignItems={'center'} justifyContent={'space-between'} minH={'50px'}>
            <Stack mr={10}>
              <Link to={EnumRouter.MAIN}>
                <LogoIcon size={60} title={APP_NAME}/>
              </Link>
            </Stack>

            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={{ md: 6, base: 2 }} overflow={'hidden'} pt={1} pb={1}>
              <AppThemeSwitcher/>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Header;
