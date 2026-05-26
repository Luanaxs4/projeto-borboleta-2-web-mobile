import { db } from "@/lib/db";

// GET (buscar) de todos os produtos
export async function GET() {
    return Response.json(db.eventos);
}

// POST (criar)
export async function POST(request) {
    const body = await request.json();

    if (!body.nome || !body.amostra || body.imagem) {
        return new Response("Dados inválidos", {status: 400})
    }

    const novoEvento = {
        id: Date.now() + (Math.random() * 10000).toString(),
        titulo: body.nome,
        amostra: body.amostra,
        conteudo: body.conteudo.split("\n"),
        imagem: body.imagem
    };

    db.eventos.push(novoEvento);

    return Response.json(novoEvento);
}