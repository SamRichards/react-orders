export const ACTIONS = {
    LOADING: 'LOADING',
    LOADED: 'LOADED',
    FILTER_TABLE: 'FILTER_TABLE',
    SEARCH: 'SEARCH',
    RESET_SEARCH: 'RESET_SEARCH'
};

export const TAB_MAPPING = {
    'INVOICES': {
        name: 'Invoices',
        lookUpKey: 'invoices'
    },
    'PARTS': {
        name: 'Part Orders',
        lookUpKey: 'pOrders'
    },
    'SALES': {
        name: 'Sales Orders',
        lookUpKey: 'sOrders'
    }
};
