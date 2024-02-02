import { register } from '@/lib/actions'
import styles from './register.module.css'


export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={register}>
          <input type="text" placeholder="username" name='username' />
          <input type="email" placeholder="email" name='email' />
          <input type="password" placeholder="password" name='password' />
          <input type="password" placeholder="password again" name='passwordRepeat' />
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}
