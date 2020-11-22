import React from 'react'
import Card from './Card'
const CardSection = ({ mode }) => {
  return (
    <>
      <div className='row mt-5 mx-0'>
        <div className='col-md-10 mx-auto'>
          <h3 className='text-center'>Why Million Colors?</h3>
          <div className='row mx-0'>
            <Card
              mode={mode}
              iconClass={'fas fa-eye-dropper'}
              cardTitle={'Best Color Picker'}
              CardDescription={
                'Best Color Picker For You.Pick any Color With exact Correct value in Rgb,Hsl and HEx Format'
              }
            ></Card>
            <Card
              mode={mode}
              iconClass={'fas fa-square'}
              cardTitle={'Trending Colors'}
              CardDescription={
                'Best Color Picker For You.Pick any Color With exact Correct value in Rgb,Hsl and HEx Format'
              }
            ></Card>
            <Card
              mode={mode}
              iconClass={'fas fa-square'}
              cardTitle={'Chosen Gradients'}
              CardDescription={
                'Best Color Picker For You.Pick any Color With exact Correct value in Rgb,Hsl and HEx Format'
              }
            ></Card>
            <Card
              mode={mode}
              iconClass={'fas fa-palette'}
              cardTitle={'Latest Palette Schemas'}
              CardDescription={
                'Best Color Picker For You.Pick any Color With exact Correct value in Rgb,Hsl and HEx Format'
              }
            ></Card>
            <Card
              mode={mode}
              iconClass={'fas fa-circle'}
              cardTitle={'Color Filter'}
              CardDescription={
                'Best Color Picker For You.Pick any Color With exact Correct value in Rgb,Hsl and HEx Format'
              }
            ></Card>
            <Card
              mode={mode}
              iconClass={'fas fa-user-friends'}
              cardTitle={'Easy to use'}
              CardDescription={
                'Best Color Picker For You.Pick any Color With exact Correct value in Rgb,Hsl and HEx Format'
              }
            ></Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardSection
