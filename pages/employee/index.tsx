/* eslint-disable */
import AppsIcon from '@mui/icons-material/Apps';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Box, Button, Grid, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cards from '~/components/Card/Card';
import { Tables } from '~/components/Table';
import { AppState, wrapper } from 'store/store';
import { useDispatch, useSelector } from 'react-redux';
import { EmployeeSlice, fetchListEmployee } from 'store/slices/employee';
import { connect } from 'react-redux';
import Link from 'next/link';

const useStylesMain = makeStyles(() => ({
  root: {
    marginTop: 50,
  },
  roundedButton: {
    borderRadius: 30,
    minWidth: 0,
    height: 35,
    width: 35,
  },
}));

export interface IEmployeePage {
  list: any;
}

function EmployeePageGrid(props: IEmployeePage) {
  const [isTable, setIsTable] = useState(true);
  const { list } = props;
  const dispatch = useDispatch();
  const handleSetView = async () => {
    setIsTable(!isTable);
  };

  const classes = useStylesMain();
  const removeEmpl = async (id: string) => {
    await dispatch(EmployeeSlice.actions.removeEmployee(id));
  };

  return (
    <>
      <Stack spacing={2} direction="column" alignItems="flex-end">
        <Box sx={{ marginTop: 5 }}>
          <Stack spacing={2} direction="row">
            <Link href="/create">
              <Button variant="contained">Add Employee</Button>
            </Link>

            <Button
              variant="contained"
              className={classes.roundedButton}
              onClick={handleSetView}
            >
              {isTable === true ? <AppsIcon /> : <FormatListBulletedIcon />}
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Box sx={{ marginTop: 5, flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {isTable === true ? (
            list.list.map((value: any, index: number) => (
              <Grid item key={value.id}>
                <Cards
                  urlImage={value.photo}
                  name={value.first_name}
                  gender={value.gender}
                  phone={value.number}
                  email={value.email}
                  removeFunction={() => removeEmpl(value.id)}
                />
              </Grid>
            ))
          ) : (
            <Tables
              nameRow={['firstName', 'lastName', 'email', 'phone', 'gender']}
              data={list.list}
              removeFunction={(id: string) => removeEmpl(id)}
            />
          )}
        </Grid>
      </Box>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      await store.dispatch(fetchListEmployee());
      const profileData = store.getState().employee.list;

      return {
        props: {
          list: profileData,
        },
      };
    },
);
const mapStateToProps = (state: AppState) => ({
  list: state.employee,
});

export default connect(mapStateToProps)(EmployeePageGrid);
