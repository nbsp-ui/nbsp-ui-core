import { h } from 'preact'
import { useState } from 'preact/hooks'
import { FAIcon, HBox, Image, Input, Uploader, VBox } from '../../src'

export const MediaPanel = () => {
  const [imageInput, setImageInput] = useState('https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png')
  const [imageSource, setImageSource] = useState('')

  return (
    <VBox padding={8}>
      <VBox width={400} margin={{ bottom: 8 }}>
        <Input
          label="Image source"
          labelWidth={140}
          width={400}
          placeholder="https://..."
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
          after={<FAIcon icon={'far fa-image'} fontSize={'1.5em'}/>}
          afterOnClick={() => setImageSource(imageInput)}
        />
        {imageSource && <Image src={imageSource} margin={{ top: 8 }} width={400} height={400}/>}
      </VBox>
      <HBox margin={{ bottom: 8 }}>
        <Uploader
          margin={{ bottom: 8 }}
          width={400}
          onClick={(e) => console.log(e)}
          onSelectedFiles={(files) => console.log({ files })}
          onItemRemoved={(file) => console.log({ file })}
          multiple
        />
      </HBox>
    </VBox>
  )
}