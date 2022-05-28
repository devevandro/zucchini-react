import { styled } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
