import type { MouseEvent } from 'react'
import { styled } from 'styled-components'

import Button from './components/UI/Button'
import Input from './components/UI/Input'
import Date from './components/UI/Date'
import Select from './components/UI/Select'

import { Dialog } from './components/Dialog'
import Search from './components/UI/Search'

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
          <Input label="Input text" />
          <Input label="Input text with error" initialError />
          <Search  />
          <Select name="test" label="Test Select" arrayVal={selectValue}  />
        </FormDisplay>
      </Section>
      <Section>
        <DialogDisplay>
          {/* Simple Dialog */}
          <Dialog>
            <Dialog.Header />
            <Dialog.Body></Dialog.Body>
          </Dialog>

          {/* Dialog with Heading */}
          <Dialog>
            <Dialog.Header title="Dialog Heading" />
            <Dialog.Body>
              <p>This is some copy for the dialog body.</p>
            </Dialog.Body>
          </Dialog>

          {/* Dialog with Heading and Button bar */}
          <Dialog>
            <Dialog.Header title="Dialog Heading with Button Bar" />
            <Dialog.Body>
              <p>This is some copy for the dialog body.</p>
            </Dialog.Body>
            <Dialog.Footer cancel={handleButtonClick} delete={handleButtonClick} save={handleButtonClick} />
          </Dialog>

          {/* Dialog with long heading, button bar and controls */}
          <Dialog>
            <Dialog.Header title="Dialog Title Test with some extra copy for length asd asd asd asd asd as" />
            <Dialog.Body>
              <form>
                <Input label="Simple Textbox" />
                <Date />
                <Search  />
                <Select name="test" label="Simple Dropdown" arrayVal={selectValue}  />
                <Input label="Simple Textbox Validation Error Placeholder" initialError />
              </form>
            </Dialog.Body>
            <Dialog.Footer cancel={handleButtonClick} delete={handleButtonClick} save={handleButtonClick} />
          </Dialog>

          {/* Dialog with long heading, button bar, controls and overflow */}
          <Dialog>
            <Dialog.Header title="Dialog Title Test with some extra copy for length asd asd asd asd asd as" />
            <Dialog.Body>
              <form>
                <Input label="Simple Textbox" />
                <Date />
                <Search  />
                <Select name="test" label="Simple Dropdown" arrayVal={selectValue}  />
                <Input label="Simple Textbox Validation Error Placeholder" initialError />
              </form>
            </Dialog.Body>
            <Dialog.Footer cancel={handleButtonClick} delete={handleButtonClick} save={handleButtonClick} />
          </Dialog>
        </DialogDisplay>
      </Section>
    </>
  )
}

export default App
