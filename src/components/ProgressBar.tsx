import React from 'react'

interface ProgressBarProps {
  progress?: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <React.Fragment>
      {progress && (
        <div
          role='progressbar'
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{
            width: '100%',
            height: '0.25rem',
            borderRadius: '5px',
            backgroundColor: '#d8e4e1',
            transition: 'all 0.3s ease-in-out',
            opacity: 1
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              borderRadius: '5px',
              backgroundColor: '#3a7967'
            }}
          ></div>
        </div>
      )}
    </React.Fragment>
  )
}

export default ProgressBar
