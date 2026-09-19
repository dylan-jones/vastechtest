import { useState } from 'react'
import { styled } from 'styled-components'

import Button from './components/UI/Button'
import Input from './components/UI/Input'
import Date from './components/UI/Date'

import { Dialog } from './components/Dialog/'

const handleButtonClick = (e: React.ChangeEvent<any>) => {
  e.preventDefault();
  console.log('Button clicked!');
}

const Section = styled.section`
  padding: 10rem 2rem;
`

const DialogDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section>
        <form>
          <Button onClick={handleButtonClick}>Test Button</Button>
          <Date />
          <Input />
        </form>
      </Section>
      <Section>
        <DialogDisplay>
          <Dialog>
            <Dialog.Header title="Dialog Title Test" />
            <Dialog.Body>
              <p>This is some copy for the dialog body.</p>
            </Dialog.Body>
          </Dialog>
          <Dialog>
            <Dialog.Header title="Dialog Title Test with some extra copy for length asd asd asd asd asd as" />
            <Dialog.Body>
              <p>This is some copy for the dialog body.</p>
            </Dialog.Body>
            <Dialog.Footer cancel={handleButtonClick} delete={handleButtonClick} save={handleButtonClick} />
          </Dialog>
        </DialogDisplay>
      </Section>
    </>
  )
}

export default App
