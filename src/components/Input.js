import React from 'react'

export default function Input({ id, label, type, register, error, onBlur }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-white font-bold">
        {label}
      </label>
      <input
        type={type}
        className="border border-gray-300 rounded-md p-2"
        id={id}
        {...register(id)}
        onBlur={onBlur}
      />
      {error && <p className="text-red-700 font-bold">{error.message}</p>}
    </div>
  )
}
