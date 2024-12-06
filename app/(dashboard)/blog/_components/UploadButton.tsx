'use client'

import { useCallback, Dispatch, SetStateAction } from 'react'
// Remove import statement for FileWithPath


import { generateClientDropzoneAccept } from 'uploadthing/client'

import { Button } from '@/components/ui/button'
import { convertFileToUrl } from '@/lib/utils'

import { useDropzone } from '@uploadthing/react'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

type UploadButtonProps = {
  onFieldChange: (url: string) => void
  imageUrl: string
  setFiles: Dispatch<SetStateAction<File[]>>
}

export function UploadButton({ imageUrl, onFieldChange, setFiles }: UploadButtonProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
    onFieldChange(convertFileToUrl(acceptedFiles[0]))
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(['image/*']), // No need for ternary condition
  })

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50">
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <img
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex-center flex-col py-5 text-grey-500">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-gray-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
</svg>

          <h3 className="mt-2 text-sm text-gray-400">Drag photo here</h3>
          <p className="text-xs text-gray-400">SVG, PNG, JPG</p>
          <HoverBorderGradient containerClassName="rounded-full mt-2" as="button" className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
            Select From computer
          </HoverBorderGradient>
        </div>
      )}
    </div>
  )
}
