/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box, Typography, Paper, Button, useTheme } from '@mui/material';
import { Add } from '@mui/icons-material';

const Stock: React.FC = () => {
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
            Stock Management
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Monitor and manage your inventory levels
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
          Adjust Stock
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
          Stock management interface coming soon
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This section will include stock levels, movements, alerts, and
          inventory adjustments.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Stock;
