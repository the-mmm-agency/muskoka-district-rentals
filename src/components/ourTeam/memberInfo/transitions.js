const enter = {
  y: 0,
  opacity: 1,
}

const exit = {
  y: 50,
  opacity: 0,
}

const transition = {
  ease: [0.4, 0, 0.2, 1],
}

const variants = {
  enter: {
    ...enter,
    transition: {
      ...transition,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  exit: {
    ...exit,
    transition: {
      when: 'afterChildren',
    },
  },
}

export const wrapper = {
  variants,
  enter: 'enter',
  exit: 'exit',
}

export const item = {
  enter,
  exit,
  transition,
}
