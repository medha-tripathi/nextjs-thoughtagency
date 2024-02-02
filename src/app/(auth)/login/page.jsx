import { handleGithubLogin, login } from '@/lib/actions'
import { auth } from '@/lib/auth'
import styles from './login.module.css'

export default async function Login() {
  const session=await auth()
  
  return (
    <div className={styles.container}>
    <form action={handleGithubLogin}>
      <button>Sign In with Github</button>
    </form>
    <form action={login}>
      <input type="text" placeholder='username' name='username' />
      <input type="password" placeholder='password' name='password' />
      <button>Login</button>
    </form>
    </div>
  )
}
