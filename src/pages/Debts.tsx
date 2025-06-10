/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box, Typography, Paper, Button, useTheme } from '@mui/material';
import { Add } from '@mui/icons-material';

const Debts: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            fontWeight={600}
            color="text.primary"
          >
            Debts Management
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Track customer debts and payment history
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          Record Payment
        </Button>
      </Box>

      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Debt management interface coming soon
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This section will include debt tracking, payment records, customer
          credit limits, and payment reminders.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Debts;
