import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { ButtonGroup, Button } from '@mui/material';
import Header from './Header';

interface Fund {
  id: number;
  fundId: string;
  baseCurrency: string;
  fundDescription: string;
  fundType: string;
  compositeId: string;
  isActive: boolean;
}

const initialData: Fund[] = [
  {
    id: 1,
    fundId: 'F010',
    baseCurrency: 'USD',
    fundDescription: 'Fund 1',
    fundType: 'Equity',
    compositeId: 'C001',
    isActive: true,
  },
  {
    id: 2,
    fundId: 'F008',
    baseCurrency: 'EUR',
    fundDescription: 'Fund 2',
    fundType: 'Bond',
    compositeId: 'C002',
    isActive: false,
  },
  {
    id: 3,
    fundId: 'F007',
    baseCurrency: 'JPY',
    fundDescription: 'Fund 3',
    fundType: 'Equity',
    compositeId: 'C003',
    isActive: true,
  },
  {
    id: 4,
    fundId: 'F004',
    baseCurrency: 'USD',
    fundDescription: 'Fund 4',
    fundType: 'Bond',
    compositeId: 'C004',
    isActive: false,
  },
  {
    id: 5,
    fundId: 'F005',
    baseCurrency: 'GBP',
    fundDescription: 'Fund 5',
    fundType: 'Equity',
    compositeId: 'C005',
    isActive: true,
  },
  {
    id: 6,
    fundId: 'F006',
    baseCurrency: 'AUD',
    fundDescription: 'Fund 6',
    fundType: 'Bond',
    compositeId: 'C006',
    isActive: false,
  },
  {
    id: 7,
    fundId: 'F003',
    baseCurrency: 'CAD',
    fundDescription: 'Fund 7',
    fundType: 'Equity',
    compositeId: 'C007',
    isActive: true,
  },
  {
    id: 8,
    fundId: 'F002',
    baseCurrency: 'CHF',
    fundDescription: 'Fund 8',
    fundType: 'Bond',
    compositeId: 'C008',
    isActive: false,
  },
  {
    id: 9,
    fundId: 'F009',
    baseCurrency: 'SGD',
    fundDescription: 'Fund 9',
    fundType: 'Equity',
    compositeId: 'C009',
    isActive: true,
  },
  {
    id: 10,
    fundId: 'F001',
    baseCurrency: 'NZD',
    fundDescription: 'Fund 10',
    fundType: 'Bond',
    compositeId: 'C010',
    isActive: false,
  },
];

const createColumn = (field: string, headerName: string, width: number) => ({
  field,
  headerName,
  width,
  sortable: false,
});

const columns: GridColDef[] = [
  createColumn('id', 'ID', 90),
  createColumn('fundId', 'Fund Id', 150),
  createColumn('baseCurrency', 'Base Currency', 150),
  createColumn('fundDescription', 'Fund Description', 200),
  createColumn('fundType', 'Fund Type', 150),
  createColumn('compositeId', 'Composite Id', 150),
  {
    field: 'isActive',
    headerName: 'Is Active',
    width: 150,
    valueGetter: (value, params) => (params.isActive ? 'True' : 'False'),
    sortable: false,
  },
];

const FundDetailsTable: React.FC = () => {
  const [rows, setRows] = useState<GridRowsProp>(initialData);

  const loadActive = () => {
    setRows(initialData.filter((fund) => fund.isActive));
  };

  const loadInActive = () => {
    setRows(initialData.filter((fund) => !fund.isActive));
  };

  const loadAll = () => {
    setRows(initialData);
  };

  const sortData = () => {
    const sortedData = [...rows].sort((a, b) =>
      a.fundId.localeCompare(b.fundId)
    );
    setRows(sortedData);
  };

  const clearData = () => {
    setRows(initialData);
  };

  return (
    <div>
      <Header title={'Mapping - Funds'} />
      <ButtonGroup variant="outlined" style={{ marginBottom: '20px' }}>
        <Button onClick={loadActive}>Load Active</Button>
        <Button onClick={loadInActive}>Load In Active</Button>
        <Button onClick={loadAll}>Load All</Button>
        <Button onClick={sortData}>Sort</Button>
        <Button onClick={clearData}>Clear</Button>
      </ButtonGroup>

      <DataGrid rows={rows} columns={columns} hideFooter disableColumnMenu />
    </div>
  );
};

export default FundDetailsTable;
