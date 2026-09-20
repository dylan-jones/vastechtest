import type { MouseEvent } from 'react'
import { styled } from 'styled-components'

import Button from './components/UI/Button'
import Input from './components/UI/Input'
import Date from './components/UI/Date'
import Select from './components/UI/Select'

import { Dialog } from './components/Dialog'

const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log('Button clicked!');
}

const Section = styled.section`
  padding: 10rem 2rem;
`

const FormDisplay = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;
  max-width: 120rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
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
  const selectValue: string[] = ['option one', 'option two', 'option three']

  return (
    <>
      <Section>
        <FormDisplay>
          <Button onClick={handleButtonClick}>Test Button</Button>
          <Date />
          <Input />
          <Select name="test" label="Test Select" arrayVal={selectValue}  />
        </FormDisplay>
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
