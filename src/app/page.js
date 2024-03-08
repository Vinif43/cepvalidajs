'use client'
import { cepSchema } from '@/components/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Input from '@/components/Input'

export default function Home() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(cepSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleBlur = () => {
    fetch(`https://viacep.com.br/ws/${getValues('cep')}/json/`)
      .then((response) => response.json())
      .then((data) => {
        setValue('rua', data.logradouro)
        setValue('bairro', data.bairro)
        setValue('cidade', data.localidade)
        setValue('estado', data.uf)
      })
      .catch((error) => console.error(error))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <h1 className="text-3xl text-white font-bold">Formulário de Endereço</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col py-4 w-1/3 space-y-4"
      >
        <Input
          id="cep"
          label="CEP"
          type="text"
          register={register}
          error={errors.cep}
          onBlur={handleBlur}
        />
        <Input
          id="rua"
          label="Rua"
          type="text"
          register={register}
          error={errors.rua}
        />
        <Input
          id="numero"
          label="Número"
          type="text"
          register={register}
          error={errors.numero}
        />
        <Input
          id="bairro"
          label="Bairro"
          type="text"
          register={register}
          error={errors.bairro}
        />
        <Input
          id="cidade"
          label="Cidade"
          type="text"
          register={register}
          error={errors.cidade}
        />
        <Input
          id="estado"
          label="Estado"
          type="text"
          register={register}
          error={errors.estado}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold rounded-md p-2"
        >
          Enviar
        </button>
      </form>
    </main>
  )
}
