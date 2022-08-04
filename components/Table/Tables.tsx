import { Delete, Edit } from '@mui/icons-material';
import {
  Box,
  Button,
  CardActions,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface ITableProps {
  nameRow: any;
  data: any;
  removeFunction: any;
}

const useStylesMain = makeStyles(() => ({
  roundedButton: {
    borderRadius: 30,
    minWidth: 0,
    height: 35,
    width: 35,
  },
}));

function Tables(props: Partial<ITableProps>) {
  const { nameRow, data, removeFunction } = props;
  const classes = useStylesMain();

  return (
    <Box sx={{ maxWidth: 800, minWidth: 700 }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {nameRow?.map((value: string) => (
                <TableCell key={value}>{value}</TableCell>
              ))}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row: any) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.first_name}
                </TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="error"
                      className={classes.roundedButton}
                      onClick={() => removeFunction(row.id)}
                    >
                      <Delete />
                    </Button>
                    <Link href="/create">
                      <Button
                        variant="contained"
                        color="success"
                        className={classes.roundedButton}
                      >
                        <Edit />
                      </Button>
                    </Link>
                  </CardActions>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default Tables;
