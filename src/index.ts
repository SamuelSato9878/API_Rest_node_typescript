import { server } from "./server/server";

server.listen(process.env.PORT || 8081, () => {
	console.log(`Servidor Rodando ${process.env.PORT || 8081}`);
});
