import { Icon } from '@components/Icon'
import { CSSProperties, FC, PropsWithChildren } from 'react'
import './style.scss'

interface ModalProps {
  title: string
  description?: string
  show?: boolean
  width?: CSSProperties['width']
  style?: 'dark' | 'light'
  image?: string | null
  backdrop?: boolean
  onClose?: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ title, show, style = 'dark', backdrop, image = null, description, children, width, onClose }) => {

  const closeIconColor = style === 'dark' ? '#515356' : '#242629'

  return (
    <div className='ev-modal' data-show={ show } data-style={ style }>
      {
        backdrop && <div className='ev-modal-backdrop' onClick={ onClose } />
      }
      <div className='ev-modal-wrapper' style={{ width }}>
        <div className='ev-modal-header'>
          <div className='header-info-close-button'>
            <div className="header-image-title">
              {
                image === undefined || image !== null && (
                  <div className="modal-image">
                    {
                      image ? (
                        <img src={ image } />
                      ) : (
                        <Icon name='TbPhoto' size='3.4375rem' />
                      )
                    }
                  </div>
                )
              }
              <h1>{ title }</h1>
            </div>
            <div className='close-button' onClick={ onClose }>
              <Icon name='TbSquareXFilled' size='1.5rem' color={ closeIconColor } />
            </div>
          </div>
          <p>{ description }</p>
        </div>
        { children }
      </div>
    </div>
  )
}