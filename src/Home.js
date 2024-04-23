import React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Controller, useForm } from "react-hook-form";

const Home = () => {
  return (
    <>
      <h1>予想される評価</h1>
      <TableContainer>
        <Table sx={{ maxWidth: 300 }} aria-label='predict-score'>
          <TableHead>
            <TableRow>
              <TableCell>科目</TableCell>
              <TableCell align='right'>予想評価</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope='row'>
                数学I
              </TableCell>
              <TableCell align='right'>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope='row'>
                数学I
              </TableCell>
              <TableCell align='right'>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope='row'>
                数学I
              </TableCell>
              <TableCell align='right'>0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        <h2>次のテスト</h2>
        <h2>・</h2>
      </div>
      <div>
        <h2>前のテスト</h2>
        <h2>・</h2>
      </div>
    </>
  );
}

export default Home;
