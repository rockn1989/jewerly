import { Button } from "../Button"
import { SubscribeFormProps } from './SubscribeForm.props';
import { useForm } from 'react-hook-form';
import { useGoogleReCaptcha  } from "react-google-recaptcha-v3";

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

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (data: SubscribeFormDataProps) => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha('form_subscribe');
    
    if (data && token) {

      const result = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: data.email,
          gRecaptchaToken: token,
        }),
      });

      const resData = await result.json();

      if (resData?.status === 'success') {
        setSuccess(true);
        setEmail(data.email)
        reset();
        clearErrors();
      } else {
        console.log(resData?.message);
      }


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