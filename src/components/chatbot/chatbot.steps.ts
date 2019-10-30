interface Step {
  id: string
  message?: string
  trigger?: string
  label?: string
}

const steps: Step[] = [
  {
    id: '1',
    message:
      'Tell us more about you and your group and what brings you to the lake?',
    trigger: '2',
  },
  {
    id: '2',
    message:
      'How many people will you be? Are you couples or singles? How old is everyone?',
    trigger: '3',
  },
  {
    id: '3',
    message: 'Do you have any pets?',
    trigger: '4',
  },
  {
    id: '4',
    message:
      'Do you have any children and if so how old are they (families with young children prefer shallow water and beaches, older children have other needs)?',
    trigger: '5',
  },
  {
    id: '5',
    message: 'What is your budget?',
    trigger: '6',
  },
  {
    id: '6',
    message: 'Do you have a preferred lake or region?',
    trigger: '7',
  },
  {
    id: '7',
    message:
      'Thank you for your interest in working with Muskoka District Rentals, the most trusted rental agency in cottage country!',
    trigger: 'end',
  },
]
