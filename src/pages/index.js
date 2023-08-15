import style from '../styles/Login.module.css'

export default function Home() {
  return (
    <div className={style.container}>
      <form className={style.form}>
        <label className={style.label} htmlFor='username'>Username:</label>
        <input className={style.control} type='text' id='username' name='username' />

        <label className={style.label} htmlFor='password'>Password:</label>
        <input className={style.control} type='password' id='password' name='password' />

        <button className={style.button} type='submit'>Login</button>
      </form>
    </div>
  )
}