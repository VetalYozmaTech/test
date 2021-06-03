import React, {useEffect} from 'react';
import { Formik, Form, Field} from 'formik';
import { TextField} from 'material-ui-formik-components/TextField';
import { Select} from 'material-ui-formik-components/Select';
import { Button} from '@material-ui/core';
import { fetchUsers, trackHours } from '../../../store/users/operations';
import { store} from '../../../store';
import { Autocomplete } from 'material-ui-formik-components/Autocomplete';

export const Tracker = () => {
    const { users } = store.getState().users;

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Formik
            initialValues={{
                user: null,
                hours: '1',
                note: ''
            }}
            onSubmit={values => {
                trackHours(values);
            }}
        >
            <Form>
                <Field
                    name='user'
                    options={users}
                    component={Autocomplete}
                    textFieldProps={{
                        label: 'User'
                    }}
                />
                <Field
                    name='hours'
                    label='Hours'
                    options={[
                        {value: '1', label: '1'},
                        {value: '2', label: '2'},
                        {value: '3', label: '3'},
                        {value: '4', label: '4'},
                        {value: '5', label: '5'},
                        {value: '6', label: '6'}
                    ]}
                    component={Select}
                />
                <Field name='note' label='Note' component={TextField}/>
                <Button type='submit' variant='contained' color='secondary'>
                    Submit
                </Button>
            </Form>
        </Formik>
    );
};
