import React from 'react'
import { Svg, Container } from './styles'
export const Logo = props => (
  <Container>
    <Svg
      width='100%'
      height='100%'
      viewBox='205.862 5.744 88.276 138.511'
      style={{
        background: '0 0'
      }}
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <filter id='prefix__editing-vr'>
          <feFlood floodColor='#009edb' floodOpacity={0.7} result='c1' />
          <feFlood floodColor='#00f' floodOpacity={0.7} result='c3' />
          <feComposite operator='in' in='c1' in2='SourceAlpha' result='text-c1' />
          <feComposite operator='in' in='c3' in2='SourceAlpha' result='text-c3' />
          <feOffset in='text-c1' dx={5} dy={-1} result='text1' />
          <feOffset in='text-c3' dx={-5} dy={1} result='text3' />
          <feBlend
            in='SourceGraphic'
            in2='text1'
            mode='multiply'
            result='text4'
          />
          <feBlend in='text4' in2='text3' mode='multiply' />
        </filter>
      </defs>
      <path
        d='M2.7-11.1q0-2.93.75-6.67L9.53-49.5H26.1l-6 31.95q-.67 3.52-.67 6.11 0 2.59 1.08 3.94 1.09 1.35 3.12 1.35 2.02 0 3.3-.52 1.27-.53 2.32-1.8 2.02-2.56 3.3-9.08l6.08-31.95h11.32l-6 31.87Q41.85-6.97 36.07-2.7q-5.62 4.2-16.72 4.2-8.32 0-12.75-3.6-3.9-3.15-3.9-9zm22.5-41.4q-2.77 0-4.57-1.27-1.81-1.28-1.81-3.64 0-2.36 1.95-3.64 1.95-1.27 4.77-1.27 2.81 0 4.5 1.27 1.68 1.28 1.68 3.64 0 2.36-1.87 3.64-1.88 1.27-4.65 1.27zm15.07 0q-2.77 0-4.53-1.27-1.76-1.28-1.76-3.64 0-2.36 1.91-3.64 1.91-1.27 4.72-1.27 2.81 0 4.54 1.27 1.73 1.28 1.73 3.64 0 2.36-1.92 3.64-1.91 1.27-4.69 1.27z'
        fill='#444'
        transform='translate(223.683 107.574)'
        filter='url(#prefix__editing-vr)'
      />
      <style />
    </Svg>
  </Container>
)
