'use client'
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IProduto } from './../interfaces/IProduto';
import ProdutoCard from "@/components/ProdutoCard";
import { useRouter } from 'next/navigation'




export default function Home() {

  const router = useRouter()


  const [produtos, setProdutos] = useState<IProduto[]>([])
  const [buscar, setBuscar] = useState<string>('')


  const getProdutos = async () => {
    const response = await axios.get<IProduto[]>('http://localhost:3000/produtos')
    console.log(response.data)
    setProdutos(response.data)
  }

  const clickBuscar = () => {
    router.push('/pesquisa/' + buscar)
  }


  useEffect(() => {

    getProdutos()
  }, [])
  
  return (

    <div className="flex flex-col items-center justify-center bg-zinc-100 h-screen">

      <div className="flex flex-row space-x-3 font-bold">
        <input type="text" placeholder="Busque seu produto" value={buscar} onChange={e => setBuscar(e.target.value)} />
        <button onClick={clickBuscar}>
          Buscar
        </button>
      </div>


      {
        produtos.map((produto, key) => {
          return (

            <ProdutoCard
              key={key}
              nome={produto.nome}
              preco={produto.preco}
              descricao={produto.descricao}
              marca={produto.marca}
            />

          )
        })
      }
    </div>
  );
}
