import React from 'react'
import { ComponentHelper } from "../../utils/ComponentHelper"
import { CompatAlign } from "../../utils/CompatAlign"
import { CompatUtils } from "../../utils/CompatUtils"
import { Button, CompatButtonType } from "../button/Button"
import { FAIcon } from "../fa-icon/FAIcon"
import { Box } from "../box/Box"
import { Spacer } from "../spacer/Spacer";
import './Upload.scss'

/**
 * @param {UploadProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Upload = props => {
  const { id } = props

  const element = React.useRef()
  const [files, setFiles] = React.useState([])

  const className = ComponentHelper.composeClass('nbsp-ui-upload', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    <div id={id} className={className} style={style} onClick={props.onClick}>
      <input
        id={element}
        type="file"
        accept={props.accept}
        multiple={props.multiple}
        onChange={(e) => {
          setFiles([...e.target.files])
          props.onSelectedFiles && props.onSelectedFiles([...e.target.files])
        }}
      />
      <label htmlFor={element}>
        <Box>
          <Button
            type={CompatButtonType.Outline}
            label='Upload'
            icon={<FAIcon icon='fas fa-upload'/>}
            onClick={props.onClick}
          />
        </Box>
      </label>
        <Box vertical margin={{ top: 8 }}>
          {
            files && files.map(file =>
              <Box key={CompatUtils.uid()} className={'item'} style={{ justifyContent: 'space-between' }}>
                <Box vAlign={CompatAlign.Center}>
                  <FAIcon icon={'fas fa-paperclip'} fontSize={14} />
                  <span>{file.name}</span>
                  <Spacer size={20} />
                  <span>{CompatUtils.getSizeFromBytes(file.size)}</span>
                </Box>
                <FAIcon
                  icon={'fas fa-trash'}
                  onClick={() => {
                    setFiles([...files].filter(f => f.name !== file.name))
                    props.onItemRemoved && props.onItemRemoved(file)
                  }}
                />
              </Box>
            )
          }
        </Box>
    </div>
  )
}