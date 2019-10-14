import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { StoreProvider } from './store/store' 

import { OrdersContainer } from './containers/orders';
import { TabContainer } from './containers/tab';

import { TableComponent } from './components/table';

function App() {
  return (
    <MuiThemeProvider>
      <StoreProvider>
        <OrdersContainer>
          <TabContainer />
          <TableComponent />
        </OrdersContainer>
      </StoreProvider>
    </MuiThemeProvider>
  );
}

export default App;
