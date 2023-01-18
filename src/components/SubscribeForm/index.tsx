import { Button } from "../Button"
import { SubscribeFormProps } from './SubscribeForm.props';
import { useForm } from 'react-hook-form';

import styles from './SubscribeForm.module.scss';
import cn from 'classnames';
import { Input } from "../Input";
import { useState } from "react";
import { Portal } from "../Portal";
import { Title } from "../Title";

interface SubscribeFormDataProps {
  email: string
}

export const SubscribeForm = ({ className, ...rest }: SubscribeFormProps) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm<SubscribeFormDataProps>();

  const onSubmit = (data: SubscribeFormDataProps) => {
    if (data) {
      setSuccess(true);
      setEmail(data.email)
      reset();
      clearErrors();
    }
  }

  return (
    <form
      className={cn(className, styles.subscribeForm)}
      {...rest}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.wrapper}>
        <Input
          placeholder='Ваш E-mail'
          className={styles.input}
          {...register('email', {
            required: { value: true, message: 'Укажите Ваш Email' }
          })}
          error={errors.email}
        />
        <Button variant='black' size='small' >Отправить</Button>
      </div>

      {
        success && (
          <Portal
            show={success}
            onClickForClose={() => setSuccess(!success)}
            className={styles.notification}
          >
            <div>
              <Title
                as="h2"
                text={"Расслыка"}
                className={styles.notificationTitle}
              />
              <p className={styles.notificationText}>Вы подписались на рассылку. Проверьте вашу почту: {email}</p>
            </div>
          </Portal>
        )
      }
    </form>
  )
}