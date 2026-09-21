import type { MouseEvent } from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'

import Button from './components/UI/Button'
import Input from './components/UI/Input'
import Date from './components/UI/Date'
import Select from './components/UI/Select'

import { Dialog } from './components/Dialog'
import Search from './components/UI/Search'

const Section = styled.section`
  padding: 10rem 2rem;
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 0 0 4rem;
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

  dialog {
    position: relative;
  }


  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const DialogForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 1.6rem 0.8rem;
`;

const StaticDialogWrapper = styled.div<{ $expanded?: boolean }>`
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radius.dialog};
    box-shadow: ${({ theme }) => theme.shadow.main};
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    width: 100%;
    height: 100%;
`;

const StaticDialogContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1.6rem;
`

const CodeBlock = styled.pre`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.dialog};
  box-shadow: ${({ theme }) => theme.shadow.main};
  padding: 2rem 2.4rem;
  margin: 4rem 0 0;
  overflow-x: auto;

  code {
    font-family: 'Fira Code', 'Consolas', 'Courier New', monospace;
    font-size: 1.4rem;
    line-height: 1.6;
    white-space: pre;
    tab-size: 2;
  }
`

function App() {
  const selectValue: string[] = ['option one', 'option two', 'option three']
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('a test button has been clicked')
  }

  const handleDialog = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDialogOpen(true)
  }

  return (
    <>
      <Section>
        <SectionTitle>Form Components</SectionTitle>
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
        <SectionTitle>Static Dialogs</SectionTitle>
        <DialogDisplay>
          {/* Simple Dialog */}
          <StaticDialogWrapper style={{height: '35rem'}}>
            <StaticDialogContainer>
              <Dialog.Header />
              <Dialog.Body></Dialog.Body>
            </StaticDialogContainer>
          </StaticDialogWrapper>

          {/* Dialog with Heading */}
          <StaticDialogWrapper style={{height: '35rem'}}>
            <StaticDialogContainer>
              <Dialog.Header title="Dialog Heading" />
              <Dialog.Body>
                <p>This is some copy for the dialog body.</p>
              </Dialog.Body>
            </StaticDialogContainer>
          </StaticDialogWrapper>

          {/* Dialog with Heading and Button bar */}
          <StaticDialogWrapper style={{height: '35rem'}}>
            <StaticDialogContainer>
              <Dialog.Header title="Dialog Heading with Button Bar" />
              <Dialog.Body>
                <p>This is some copy for the dialog body.</p>
              </Dialog.Body>
              <Dialog.Footer cancel delete save />
            </StaticDialogContainer>
          </StaticDialogWrapper>

          {/* Dialog with long heading, button bar and controls */}
          <StaticDialogWrapper style={{height: '35rem'}}>
            <StaticDialogContainer>
              <Dialog.Header title="Dialog Title Test with some extra copy for length asd asd asd asd asd as" />
              <Dialog.Body>
                <DialogForm>
                  <Input />
                  <Date />
                  <Search  />
                  <Select name="test" arrayVal={selectValue}  />
                  <Input initialError />
                </DialogForm>
              </Dialog.Body>
              <Dialog.Footer cancel delete save />
            </StaticDialogContainer>
          </StaticDialogWrapper>

          {/* Dialog with long heading, button bar, controls and overflow */}
          <StaticDialogWrapper style={{height: '24rem'}}>
            <StaticDialogContainer>
              <Dialog.Header title="Dialog Title Test with some extra copy for length asd asd asd asd asd as" />
              <Dialog.Body>
                <DialogForm>
                  <Input />
                  <Date />
                  <Search  />
                  <Select name="test" arrayVal={selectValue}  />
                  <Input initialError />
                </DialogForm>
              </Dialog.Body>
              <Dialog.Footer cancel delete save />
            </StaticDialogContainer>
          </StaticDialogWrapper>
        </DialogDisplay>
        <CodeBlock>
          <code>{`<Dialog
  open={isDialogOpen}
  onClose={() => setIsDialogOpen(false)}
  maxWidth='68rem'
>
  <Dialog.Header title="Dialog Title Test" />
  <Dialog.Body>
    <DialogForm>
      <Input />
      <Date />
      <Search />
      <Select name="test" arrayVal={selectValue} />
      <Input initialError />
    </DialogForm>
  </Dialog.Body>
  <Dialog.Footer cancel delete save />
</Dialog>`}</code>
        </CodeBlock>
      </Section>
      <Section>
        <SectionTitle>Action Dialog</SectionTitle>
        <ActionButtons>
          <Button onClick={handleDialog}>Open Dialog</Button>
        </ActionButtons>
        <DialogDisplay>

          {/* Dialog with long heading, button bar and controls */}
          <Dialog
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            maxWidth='68rem'
            >
            <Dialog.Header title="Dialog Title Test with some extra copy for length asd asd asd asd asd as" />
            <Dialog.Body>
              <DialogForm>
                <Input />
                <Date />
                <Search  />
                <Select name="test" arrayVal={selectValue}  />
                <Input initialError />
              </DialogForm>
            </Dialog.Body>
            <Dialog.Footer cancel delete save />
          </Dialog>
        </DialogDisplay>
      </Section>
    </>
  )
}

export default App
