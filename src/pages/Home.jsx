import { Button, LinearProgress, Box, Container } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';


function Home() {
        const initialValues = {
            firstName: '',
            lastName: '',
            email: '',
            complains: '',
        };

        const handleSubmit = async (formData) => {
            try {
                const response = await fetch('http://localhost:3001/appoint', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
        
                if (!response.ok) {
                    throw new Error('Failed to submit data');
                }
        
                console.log('Data submitted successfully');
            } catch (error) {
                console.error('Error:', error);
            }
        };

        return (
        <Formik
            initialValues = {initialValues}
            handleSubmit = {handleSubmit}
            validate={(values) => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.firstName) { 
                    errors.firstName = 'Required'; 
                }
                if (!values.lastName) { 
                    errors.lastName = 'Required'; 
                }
                return errors;
            }}

            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                console.log(values);
                handleSubmit(values);
                alert('Your request has been successfully sent'); 
                resetForm();
                setSubmitting(false);
                }, 2000);
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Container
                maxWidth="sm"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}
                >
                    <Form>
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '16px', margin: '16px 0'}}>
                            <Field
                                component={TextField}
                                name="firstName"
                                type="firstName"
                                label="First Name"
                                required
                            />
                            <Field
                                component={TextField}
                                name="lastName"
                                type="lastName"
                                label="Last Name"
                                required
                            />
                        </div>
                        <Box mb={2}>
                            <Field
                                component={TextField}
                                name="email"
                                type="email"
                                label="Email"
                                required
                            />
                        </Box>
                        <Box >
                            <Field
                                component={TextField}
                                name="complains"
                                type="complains"
                                label="Your complains"
                                multiline
                                rows={4}
                                fullWidth
                            />
                        </Box>
                        {isSubmitting && <LinearProgress />}
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Button 
                                variant="contained"
                                color="secondary"
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Send
                            </Button>
                        </div>
                    </Form>
                </Container>
            )}
        </Formik>
    );
}

export default Home;