import {clsx} from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export interface TextInputRootProps{
  children:ReactNode
}

function TextInputRoot(props: TextInputRootProps){
  return (
    <div
    className={clsx(
      'flex items-center gap-3 h-12 py-4 px-4 rounded bg-gray-800 w-full   focus-within:ring-2 ring-cyan-300'
    )}
    >
      {props.children}
    </div>
  )
}

TextInputRoot.DisplayName = 'TextInput.Root'

export interface TextInputIconProps{
  children:ReactNode
}
function TextInputIcon(props:TextInputIconProps){
  return(
    <Slot className='w-6 h-6 text-gray-400'>
     {props.children}
    </Slot>
  )
}

TextInputIcon.DisplayName = 'TextInput.Icon'

function TextInputInput(props : TextInputInputProps){

  return (


      <input
        className="bg-transparent flex-1 text-gray-100 text-xs   placeholder:text-gray-400 outline-none"
        {...props}    
      />

  )
}
TextInputInput.DisplayName = 'TextInput.Input'

export const TextInput = {
  Root:TextInputRoot,
  Input:TextInputInput,
  Icon:TextInputIcon,
}