import React from "react"
import { Form, Button, message } from "antd";
import { Form as FormikForm, Field, FormikHelpers, FieldProps } from "formik";
import { Formik, ErrorMessage } from 'formik';
import Input from "antd/lib/input/Input";
import { emailValidator, reqAndMaxLValCreator } from '../../../../validators/validators';
import style from './PersonalInfo.module.scss';

const FormItem = Form.Item;


type PersonalInfoFormValuesType = {
  email: string
  firstName: string
  lastName: string
}

export const PersonalInfoForm: React.FC = React.memo(() => {


  const submit = (values: PersonalInfoFormValuesType, actions: FormikHelpers<PersonalInfoFormValuesType>) => {
    setTimeout(() => {
      message.success(JSON.stringify(values, null, 3))
      actions.setSubmitting(false);
      actions.resetForm({});
    }, 400);
  }


  return (
    <Formik
      initialValues={{ email: '', firstName: '', lastName: '' }}
      validate={(value) => { }}
      onSubmit={submit}
    >
      {({ isSubmitting, errors, values }) => (
        <div className={style.personalInfo}>
          <div className={style.personalInfoHeader}>
            Personal Info
          </div>
          <FormikForm className={style.form}>
            <FormItem className={style.formItem} >
              <label htmlFor={'email'}>Email Address</label>
              <Field name="email"
                validate={emailValidator}>
                {({ field }: FieldProps) => <Input size={'large'} id={'email'} {...field} placeholder="Email" />}
              </Field>
              <ErrorMessage name="email" component={() => <div className={style.fieldError}>{errors.email}</div>} />
            </FormItem>
            <FormItem className={style.formItem}>
              <label htmlFor={'firstName'}>First Name</label>
              <Field name="firstName"
                validate={reqAndMaxLValCreator(30)}>
                {({ field }: FieldProps) => <Input size={'large'} id={'firstName'} {...field} placeholder="First Name" />}
              </Field>
              <ErrorMessage name="firstName" component={() => <div className={style.fieldError}>{errors.firstName}</div>} />
            </FormItem>
            <FormItem className={style.formItem}>
              <label htmlFor={'lastName'}>Last Name</label>
              <Field name="lastName"
                validate={reqAndMaxLValCreator(30)}>
                {({ field }: FieldProps) => <Input size={'large'} id={'lastName'} {...field} placeholder="Last Name" />}
              </Field>
              <ErrorMessage name="lastName" component={() => <div className={style.fieldError}>{errors.lastName}</div>} />
            </FormItem>

            <div className={style.bottomBlock}>
              <div>
                Purchase Total:$11.99
              </div>
              <Button className={`${style.button} ${style.submit}`} type={"primary"} htmlType={"submit"}>
                add
              </Button>
              <Button className={`${style.button} ${style.reset}`} htmlType="reset" type="primary" disabled={isSubmitting}>
                clear Field
              </Button>
            </div>
          </FormikForm>
        </div>
      )}
    </Formik>
  )
});