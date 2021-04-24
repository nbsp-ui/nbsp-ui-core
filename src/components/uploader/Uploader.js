import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { CompatAlign } from '../../utils/CompatAlign'
import { CompatUtils } from '../../utils/CompatUtils'
import { Button, CompatButtonType, FAIcon, Box, Spacer, List } from '../..'
import './Uploader.scss'

/**
 * @param {UploaderProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const Uploader = props => {
  const { id } = props

  const element = useRef()
  const [files, setFiles] = useState([])

  const className = ComponentHelper.composeClass('nbsp-ui-uploader', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    <div id={id} className={className} style={style} onClick={props.onClick}>
      <input
        id={element}
        type="file"
        accept={props.accept}
        multiple={props.multiple}
        onChange={(e) => {
          e.target.files.length > 0 && setFiles([...e.target.files])
          props.onSelectedFiles && props.onSelectedFiles([...e.target.files])
        }}
      />
      <label htmlFor={element}>
        <Box>
          <Button
            type={CompatButtonType.Outline}
            label="Upload"
            icon={<FAIcon icon="fas fa-upload"/>}
            onClick={props.onClick}
          />
        </Box>
      </label>
      <List
        width={400}
        margin={{ top: 8 }}
        fontSize={14}
        row={
          (item) =>
            <Box key={CompatUtils.uid()} className={'item'} style={{ justifyContent: 'space-between' }}>
              <Box vAlign={CompatAlign.Center} fontSize={'10pt'}>
                <FAIcon icon={'fas fa-paperclip'} fontSize={14}/>
                <span>{item.name}</span>
                <Spacer size={20}/>
                <span>{CompatUtils.getSizeFromBytes(item.size)}</span>
              </Box>
              <FAIcon
                icon={'fas fa-trash'}
                onClick={() => {
                  setFiles([...files].filter(f => f.name !== item.name))
                  props.onItemRemoved && props.onItemRemoved(item)
                }}
              />
            </Box>
        }
        data={files}
      />
    </div>
  )
}