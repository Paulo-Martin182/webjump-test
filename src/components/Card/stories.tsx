import { Story, Meta } from '@storybook/react'
import Card, { CardTypes } from '.'

export default {
  title: 'Card',
  component: Card,
  argsTypes: {
    backgroundColor: {
      type: 'color'
    },
    colors: {
      type: 'color'
    }
  },
  args: {
    titulo: 'Titulo',
    textButton: 'Compre Aqui',
    colors: '#c41',
    backgroundColor: '#c3c',
    optionTitle: 'Cores'
  }
} as Meta

export const Default: Story<CardTypes> = (args) => (
  <div style={{ width: '100%', margin: '0 auto' }}>
    <Card {...args} />
  </div>
)
