import { computed, watch } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useLoginForm() {
  const { handleSubmit, isSubmitting, submitCount } = useForm()
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    'email',
    yup
      .string()
      .required('Пожалуста введите email')
      .trim()
      .email()
  )
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    'password',
    yup
      .string()
      .required()
      .trim('')
      .min(6)
  )

  const isTooManyAttempts = computed(() => submitCount.value > 3)

  watch(isTooManyAttempts, (val) => {
    if (val) {
      setTimeout(() => {
        return (submitCount.value = 0)
      }, 2000)
    }
  })
  const onSubmit = handleSubmit((values) => {
    console.log('form-values', values)
  })

  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    onSubmit,
    isSubmitting,
    submitCount,
    isTooManyAttempts,
  }
}