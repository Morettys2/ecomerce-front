interface ProdutoCardProps {
    nome: string
    preco: number
    descricao: string
    marca: string
}


const ProdutoCard = (props: ProdutoCardProps) => {
    return (
        <div className="flex flex-row space-x-4 p-8 w-[800px] bg-white m-2 hover:cursor-pointer">
            <div className="w-[30%] flex flex-col">
                <span className="font-light text-xs"> {props.marca}</span>
                <span className="font-bold text-xl">{props.nome}</span>
            </div>
            <div className="flex flex-col ml-auto w-[70%] justify-end items-end ">

                <div className="flex flex-col border-l-2 pl-10">
                    <span className="font-bold text-lg">R$ {props.preco}</span>
                    <span className="font-light text-sm">A vista do pix</span>
                    <button className="p-2 bg-orange-400 text-white rounded-lg px-8 hover:bg-black"><span className="font-semibold">Comprar</span></button>
                </div>

            </div>

        </div>
    )
}

export default ProdutoCard 