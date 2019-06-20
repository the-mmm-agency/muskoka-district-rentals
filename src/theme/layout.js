const layout = {
  breakpoints: [0, '40em', '52em', '64em', '80em'],
  space: [
    0,
    '0.3rem',
    '0.6rem',
    '1.2rem',
    '2.4rem',
    '4.8rem',
    '9.6rem',
    '19.2rem',
    '38.4rem',
    '76.8rem',
    '153.6rem',
    '307.2rem',
    '614.4rem',
  ],
  radii: [2, 4, 8, 30],
}

layout.breakpoints.xs = layout.breakpoints[0]
layout.breakpoints.sm = layout.breakpoints[1]
layout.breakpoints.md = layout.breakpoints[2]
layout.breakpoints.lg = layout.breakpoints[3]
layout.breakpoints.xl = layout.breakpoints[4]

export default layout
