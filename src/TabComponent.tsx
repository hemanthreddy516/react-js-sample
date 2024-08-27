import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import FundDetailsTable from './FundDetailsTable';
import Header from './Header';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const TabComponent: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="tab">
          <Tab color="grey" label="Files" />
          <Tab label="Main" />
          <Tab label="Funds" />
          <Tab label="Securities" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FundDetailsTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Header title={'Main Content'} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Header title={'Files Content'} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Header title={'Securities Content'} />
      </TabPanel>
    </Box>
  );
};

export default TabComponent;
