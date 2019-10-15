import { filterRows } from './utils';
import orders from './__mocks/orders.json'

describe('utils', () => {
    const orderSet = orders.orders.sOrders.data;

    it('filterRows should return all if no search is supplied', () => {
        expect(filterRows(orderSet, '').length).toEqual(30);
    })

    it('filterRows should filter by sales order', () => {
        expect(filterRows(orderSet, orderSet[0].soNumber).length).toEqual(1);
    })

    it('filterRows should return all if no search is supplied', () => {
        expect(filterRows(orderSet, orderSet[0].pnUpper).length).toEqual(1);
    })
});
