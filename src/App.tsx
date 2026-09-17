import { useState } from 'react'

import Button from './components/ui/Button'
import Input from './components/ui/Input'
import Date from './components/ui/Date'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <form>
          <Button />
          <Date />
          <Input />
        </form>
      </section>
    </>
  )
}

export default App
