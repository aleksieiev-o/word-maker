import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {Stack} from '@chakra-ui/react';

const AppLayout: FC<PropsWithChildren> = (props): ReactElement => {
  const {children} = props;

  return (
    <Stack as={'section'} direction={'column'} w={'full'} h={'full'}>
      {children}
    </Stack>
  );
};

export default AppLayout;
