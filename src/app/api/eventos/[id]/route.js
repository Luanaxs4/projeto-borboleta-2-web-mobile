import { db } from "@/lib/db.js";

// GET (buscar) por ID do produto
export async function GET(request, context) {
    const { id } = await context.params;
    const numeroID = id;

    const evento = db.eventos.find((p) => p.id === numeroID);

    return Response.json(evento);
}

// PUT (atualizar)
export async function PUT(request, context) {
    const { id } = await context.params;
    const numeroID = Number(id);
    
    const body = await request.json();

    const produto = db.produtos.find((p) => p.id === numeroID);
    
    produto.nome = body.nome ?? produto.nome;
    produto.preco = body.preco !== undefined ? Number(body.preco) : produto.preco;

    return Response.json(produto);
}

// DELETE (deletar)]
export async function DELETE(request, context) {
    const { id } = await context.params;
    const numeroID = Number(id);

    const index = db.produtos.findIndex((p) => p.id === numeroID);

    db.produtos.splice(index, 1);

    return Response.json({ message: "Deletado com sucesso" });
}