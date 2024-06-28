import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

interface PeopleTableProps {
    rows: any[]
}

export const PeopleTable = ({ rows }: PeopleTableProps) => {
    return (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell><b>Name</b></TableCell>
                      <TableCell align="right"><b>Height</b></TableCell>
                      <TableCell align="right"><b>Mass</b></TableCell>
                      <TableCell align="right"><b>Gender</b></TableCell>
                      <TableCell align="right"><b>Birth year</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.height}</TableCell>
                        <TableCell align="right">{row.mass}</TableCell>
                        <TableCell align="right">{row.gender}</TableCell>
                        <TableCell align="right">{row.birth_year}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            );
          }