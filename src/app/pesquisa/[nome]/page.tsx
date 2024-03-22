'use client'
import ProdutoCard from "@/components/ProdutoCard"
import { IProduto } from "@/interfaces/IProduto"
import axios from "axios"
import { useEffect, useState } from "react"


export default function Page({ params }: { params: { nome: string } }) {


    const [produtos, setProdutos] = useState<IProduto[]>([])

    const getProdutosPeloNome = async () => {
        const response = await axios.get<IProduto[]>('http://localhost:3000/produtos/' + params.nome)
        console.log(response.data)
        setProdutos(response.data)
    }



    useEffect(() => {

        getProdutosPeloNome()
    }, [])

    return (

        <div>
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

    )







}