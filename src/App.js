import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { StoreProvider } from './store' 

import { ChartContainer, FilterContainer, TabContainer, OrdersContainer } from './containers';

import { TableComponent } from './components';

function App() {
  return (
    <MuiThemeProvider>
      <StoreProvider>
        <OrdersContainer>
          <TabContainer />
          <ChartContainer />
          <FilterContainer />
          <TableComponent />
        </OrdersContainer>
      </StoreProvider>
    </MuiThemeProvider>
  );
}

export default App;
