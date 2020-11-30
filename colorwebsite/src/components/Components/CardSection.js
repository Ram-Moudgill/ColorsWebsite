import React from 'react'
import Card from './Card'
const CardSection = ({ mode }) => {
  return (
    <>
      <div className='row mt-5 mx-0'>
        <div className='col-md-10 mx-auto'>
          <h3 className='text-center mt-5 mb-4'>Why Million Colors?</h3>
          <div className='row mx-0'>
            <Card
              mode={mode}
              iconClass={'fas fa-eye-dropper'}
              cardTitle={'Best Color Picker'}
              CardDescription={
                'Best color picker for you. Pick any color with exact correct value in rgb,hsl and hex format'
              }
            ></Card>
            <Card
              mode={mode}
              iconClass={'far fa-grin-alt'}
              cardTitle={'Trending Colors'}
              CardDescription={
                'A color trend is a direction. It’s a developing awareness or an emerging preference for a color or several colors.We have large collection of colors;'
              }
            ></Card>
            <Card
              mode={mode}
              iconClass={'fas fa-surprise'}
              cardTitle={'Chosen Gradients'}
              CardDescription={
                'You can use gradients to add depth to an otherwise flat design, create an interesting texture for a background.'
              }
            ></Card>
            <Card
              mode={mode}
              iconClass={'fas fa-palette'}
              cardTitle={'Latest Palette Schemas'}
              CardDescription={
                'A color scheme consists of a combination of colors used in a range of design disciplines, from fine art to interior design to graphic design. '
              }
            ></Card>
            <Card
              mode={mode}
              iconClass={'fas fa-search'}
              cardTitle={'Color Filter'}
              CardDescription={
                'You can also filter colors by simply clicking buttons and get different shades of similar colors.'
              }
            ></Card>
            <Card
              mode={mode}
              iconClass={'fas fa-user-friends'}
              cardTitle={'Easy to use'}
              CardDescription={
                'This website is very easy to use. You can easily navigate and get colors with simple navigation, this makes this website easy to use and user friendly. '
              }
            ></Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardSection
