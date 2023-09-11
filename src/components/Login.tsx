import { clsx } from 'clsx'
import supabase from '../utils/supabase.js'
interface Props {}

function Component({}: Props) {
  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if (error) {
      console.log(error)
    } else {
      console.log('data', data)
    }
  }
  async function handleLogout() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
    }
  }

  async function handleShowUser() {
    const { data, error } = await supabase.auth.getUser()
    if (error) {
      console.log(error)
    } else {
      console.log(data)
    }
  }
  return (
    <div>
      <div>
        <button onClick={handleLogin}>login</button>
      </div>
      <div>
        <button onClick={handleLogout}>logout</button>
      </div>
      <div>
        <button onClick={handleShowUser}>show user</button>
      </div>
    </div>
  )
}

export default Component
