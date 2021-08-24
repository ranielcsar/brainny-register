import { RefObject } from 'react'
import * as Yup from 'yup'

type ErrorType = {
  [path: string]: string
}

export default function showYupErrors(formRef: RefObject<any>, errors: any) {
  const validationErrors: ErrorType = {}

  if (errors instanceof Yup.ValidationError) {
    errors.inner.forEach((error: any) => {
      validationErrors[error.path] = error.message
    })

    formRef.current?.setErrors(validationErrors)
  }
}
