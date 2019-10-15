import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { StoreProvider } from './store' 

import { OrdersContainer } from './containers/orders';
import { TabContainer } from './containers/tab';
import { ChartContainer } from './containers/chart';
import { FilterContainer } from './containers/filter';

import { TableComponent } from './components/table';

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
