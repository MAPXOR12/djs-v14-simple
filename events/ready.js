const client = require("..")

client.on("ready", () => {
	console.log("--------- Pixie is ready! ---------");
	client.user.setActivity(`Djs v14 `, { type: 'LISTENING' });
});
