import React from 'react'

const EditorHeader = () => {
  return (
    <div className='bg-grey hidden md:block'>
        <div className="wrapper w-[86%] mx-auto flex justify-between items-center h-16">
            <img src="/icons/Icons/Formatting/bold.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/Formatting/italic.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/Formatting/underline.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/Paragraph/orderedList.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/Paragraph/unorderedList.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/Paragraph/outdent.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/Paragraph/indent.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/Paragraph/lineHeight.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/files/imageDisplay.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/Formatting/subscript.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/Formatting/superscript.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/Content/insertLink.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/Actions/unlink.svg" alt="bold" className = 'cursor-pointer' />
            <img src="/icons/Icons/files/imageManager.svg" alt="bold" className = 'cursor-pointer' />
        </div>  
    </div>
  )
}

export default EditorHeader