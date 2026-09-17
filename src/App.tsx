import { useState } from 'react'

import Button from './components/UI/Button'
import Input from './components/UI/Input'
import Date from './components/UI/Date'

import { Dialog } from './components/Dialog'

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
      <section>
        <Dialog>
          <Dialog.Header title="Dialog Title Test" />
        </Dialog>
      </section>
    </>
  )
}

export default App
