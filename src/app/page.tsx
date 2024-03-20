'use client'
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IProduto } from './../interfaces/IProduto';
import ProdutoCard from "@/components/ProdutoCard";




export default function Home() {


  const [produtos, setProdutos] = useState<IProduto[]>([])


  const getProdutos = async () => {
    const response = await axios.get<IProduto[]>('http://localhost:3000/produtos')
    console.log(response.data)
    setProdutos(response.data)
  }

  useEffect(() => {

    getProdutos()

  }, [])
  return (

    <div className="flex flex-col items-center justify-center bg-zinc-100">


      {
        produtos.map((produto, key) => {
          return (

            <ProdutoCard key={key} nome={produto.nome} preco={produto.preco}></ProdutoCard>

          )
        })
      }
    </div>
  );
}
