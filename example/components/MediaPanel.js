import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Box, FAIcon, Image, Input, Uploader } from '../../src'

export const MediaPanel = () => {
  const [imageInput, setImageInput] = useState('https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png')
  const [imageSource, setImageSource] = useState('')

  return (
    <Box vertical padding={8}>
      <Box vertical width={400} margin={{ bottom: 8 }}>
        <Input
          label='Image source'
          labelWidth={140}
          width={400}
          placeholder='https://...'
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
          after={<FAIcon icon={'far fa-image'} fontSize={'1.5em'}/>}
          afterOnClick={() => setImageSource(imageInput)}
        />
        {imageSource && <Image src={imageSource} margin={{ top: 8 }} width={400} height={400}/>}
      </Box>
      <Box margin={{ bottom: 8 }}>
        <Uploader
          margin={{ bottom: 8 }}
          width={400}
          onClick={(e) => console.log(e)}
          onSelectedFiles={(files) => console.log({ files })}
          onItemRemoved={(file) => console.log({ file })}
          multiple
        />
      </Box>
    </Box>
  )
}