import React, {FC, ReactElement} from 'react';
import AppLayout from '../../layouts/App.layout';
import MainLayout from '../../layouts/Main.layout';
import ContainerLayout from '../../layouts/Container.layout';

const Content: FC = (): ReactElement => {
  return (
    <AppLayout>
      <MainLayout>
        <ContainerLayout>
          <div>Content</div>
        </ContainerLayout>
      </MainLayout>
    </AppLayout>
  );
};

export default Content;
